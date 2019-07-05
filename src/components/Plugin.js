import React from 'react';
import PropTypes from 'prop-types';
import { Client } from 'mythxjs';
import { Tooltip } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faInfoCircle,
  faAngleRight,
  faAngleDown,
  faClipboard
} from '@fortawesome/free-solid-svg-icons';
import { CopyToClipboard } from 'react-copy-to-clipboard';

import { formatIssues } from './../lib/report';
import Report from './Report';

const storageKey = 'remix-mythx-plugin';
const TRIAL_CREDS = {
  address: '0x0000000000000000000000000000000000000000',
  pwd: 'trial'
};
const token_invalid_msg = 'Access token has expired or is invalid! Please login again.';

class Plugin extends React.Component {
  constructor(props) {
    super(props);

    const raw = localStorage.getItem(storageKey) || '{}';
    const settings = JSON.parse(raw);

    const address = settings.address || TRIAL_CREDS.address;
    this.state = {
      address,
      pwd: settings.pwd || TRIAL_CREDS.pwd,
      jwt: null,
      compilation: {},
      selected: '',
      isAnalyzig: false,
      analyses: {},
      reports: {},
      creadOpen: address === TRIAL_CREDS.address,
      infoTooltipOpen: false
    };

    this.init = this.init.bind(this);
    this.login = this.login.bind(this);
    this.saveCredentials = this.saveCredentials.bind(this);
    this.analyze = this.analyze.bind(this);
    this.getRequestData = this.getRequestData.bind(this);
    this.handleResult = this.handleResult.bind(this);
    this.getContractList = this.getContractList.bind(this);
    this.highlightIssue = this.highlightIssue.bind(this);

    this.init();
  }

  init() {
    const { client } = this.props;

    client.solidity.getCompilationResult()
      .then((result) => {
        if (!result) {
          return;
        }

        const { data, source } = result;

        if (!source) {
          return;
        }

        this.setState({
          compilation: {
            target: source.target,
            source,
            data
          },
          selected: Object.keys(data.contracts[source.target])[0]
        });
      });

    client.on('solidity', 'compilationFinished', (target, source, _, data) => {
      const list = Object.keys(data.contracts[target]);
      this.setState({
        compilation: {
          target,
          source,
          data
        },
        selected: list[0]
      });
    });
  }

  saveCredentials() {
    const { address, pwd } = this.state;
    localStorage.setItem(storageKey, JSON.stringify({ address, pwd }));
  }

  analyze = async () => {
    const { address, pwd, compilation, analyses, reports, selected } = this.state;

    const mythx = new Client(address, pwd, "remythx");
    const jwt = await this.login(mythx);

    this.setState({
      analyses: { ...analyses, [selected]: null },
      isAnalyzig: true,
      jwt
    });
    await this.props.client.editor.discardHighlight();

    try {
      const options = this.getRequestData();
      const analysis = await mythx.analyze(options);
      const issues = await mythx.getDetectedIssues(analysis.uuid);

      this.setState({
        analyses: { ...analyses, [selected]: issues },
        isAnalyzig: false
      });

      this.handleResult(compilation.source, issues);
    } catch (err) {
      this.setState({
        analyses: { ...analyses, [selected]: null },
        reports: {
          ...reports,
          [selected]: {
            list: [{
              messages: [{
                error: err.message || err
              }]
            }]
          }
        },
        isAnalyzig: false
      });
    }
  }

  login = (client) => {
    let jwt = this.state.jwt;

    if (jwt) {
      try {
        client.loginWithToken(jwt);
        return jwt;
      } catch (err) {
        if (err.message !== token_invalid_msg) {
          throw err;
        }
      }
    }

    return client.login();
  }

  getRequestData() {
    const { compilation, selected } = this.state;
    const { data = {}, source = {} } = compilation;
    const { contracts = [], sources = {} } = data;

    const file = contracts[compilation.target];
    const bytecode = file[selected].evm.bytecode;
    const deployedBytecode = file[selected].evm.deployedBytecode;
    const request = {
      contractName: selected,
      bytecode: bytecode.object,
      sourceMap: bytecode.sourceMap,
      deployedBytecode: deployedBytecode.object,
      deployedSourceMap: deployedBytecode.sourceMap,
      analysisMode: "quick",
      mainSource: compilation.target,
      sourceList: Object.keys(source.sources),
      sources: {}
    };

    var useAST = Object.keys(sources).reduce(function (flag, s) {
      return flag && !!sources[s].ast;
    }, true);

    if (useAST) {
      for (let key in source.sources) {
        if (source.sources.hasOwnProperty(key)) {
          request.sources[key] = { ast: sources[key].ast };
        }
      }
    }
    else {
      for (let key in source.sources) {
        if (source.sources.hasOwnProperty(key)) {
          request.sources[key] = { source: source.sources[key].content };
        }
      }
    }

    return request;
  }

  handleResult(data, result) {
    const { compilation, selected, reports } = this.state;
    const uniqueIssues = formatIssues(data, result);

    if (uniqueIssues.length === 0) {
      this.setState({
        reports: {
          ...reports,
          [selected]: {
            message: `✔ No errors/warnings found in ${compilation.target}::${selected}`
          }
        }
      });
    } else {
      this.setState({
        reports: {
          ...reports,
          [selected]: {
            list: uniqueIssues
          }
        }
      });
    }
  }

  getContractList() {
    const { compilation } = this.state;
    const { data = {} } = compilation;
    const { contracts = [] } = data;
    var file = contracts[compilation.target] || {};
    return Object.keys(file).map(x => {
      return {
        name: x,
        path: `${compilation.target}::${x}`
      }
    });
  }

  async highlightIssue(issue, message) {
    const position = {
      start: { line: message.line, column: message.column },
      end: { line: message.endLine, column: message.endCol }
    }
    const color = message.severity === 1 ? '#ffd300' : '#ff0000';
    await this.props.client.editor.highlight(position, issue.filePath, color);
  }

  render() {
    const { compilation, selected, isAnalyzig, analyses, reports, creadOpen } = this.state;

    return (
      <div className="container">
        <div className="row border-bottom pb-3">
          <div className="col-md-6 offset-md-3">
            <div className="btn btn-light btn-block text-left rounded-0 border-0" style={{ cursor: "pointer" }} onClick={() => { this.setState({ creadOpen: !creadOpen }) }}>
              Credentials
              <FontAwesomeIcon className="ml-2" icon={faInfoCircle} id="cred_info" />
              <FontAwesomeIcon icon={creadOpen ? faAngleDown : faAngleRight} style={{ position: 'absolute', right: 24, top: 10 }} />
              <Tooltip placement="right"
                isOpen={this.state.infoTooltipOpen}
                autohide={false}
                target="cred_info"
                toggle={() => { this.setState({ infoTooltipOpen: !this.state.infoTooltipOpen }); }}>
                In order to use MythX APIs you need to have credentials.
                You can use the trial credential, but analysis's result will be limited.
                In order to get credential you need to <a href="https://mythx.io/" target="_blank" rel="noopener noreferrer" className="text-nowrap">sign up</a>
              </Tooltip>
            </div>
            <div className={creadOpen ? null : "collapse"}>
              <form>
                <div className="form-group">
                  <label htmlFor="address">Address</label>
                  <input
                    type="text"
                    className="form-control"
                    id="address"
                    aria-describedby="emailHelp"
                    placeholder="Address"
                    onChange={(e) => this.setState({ address: e.target.value })}
                    defaultValue={this.state.address} />
                </div>
                <div className="form-group">
                  <label htmlFor="pwd">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="pwd"
                    placeholder="Password"
                    onChange={(e) => this.setState({ pwd: e.target.value })}
                    defaultValue={this.state.pwd} />
                </div>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={this.saveCredentials}>
                  Save
                  </button>
              </form>
            </div>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-md-6 offset-md-3">
            {
              compilation.target ?
                <form>
                  <div className="form-group">
                    <select
                      className="form-control"
                      defaultValue={selected}
                      onChange={(e) => this.setState({ selected: e.target.value })}>
                      {this.getContractList().map((x, i) =>
                        <option
                          key={i}
                          value={x.name}>
                          {x.path}
                        </option>
                      )}
                    </select>
                  </div>
                  <div>
                    <button
                      type="button"
                      className="btn btn-primary"
                      onClick={this.analyze}
                      disabled={isAnalyzig}>
                      {
                        isAnalyzig ?
                          <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> :
                          <span>Analyze</span>
                      }
                    </button>
                    <FontAwesomeIcon className="ml-2" icon={faInfoCircle} id="analysis_info" />
                    <Tooltip placement="right"
                      isOpen={this.state.analysisTooltipOpen}
                      autohide={true}
                      target="analysis_info"
                      toggle={() => { this.setState({ analysisTooltipOpen: !this.state.analysisTooltipOpen }); }}>
                      Analysis can take couple of minutes
                    </Tooltip>
                    {
                      analyses[selected] && <CopyToClipboard text={JSON.stringify(analyses[selected])}>
                        <button type="button" className="btn float-right" title="Copy raw report to clipboard">
                          <FontAwesomeIcon className="ml-2" icon={faClipboard} /><span className="pl-1">Raw report</span>
                        </button>
                      </CopyToClipboard>
                    }
                  </div>
                </form> :
                <div className="alert alert-warning w-100" role="alert">
                  You need to compile your contract first!
                </div>
            }
          </div>
        </div>
        <Report report={reports[selected] || {}} highlightIssue={this.highlightIssue} />
      </div>
    );
  }
}

Plugin.propTypes = {
  client: PropTypes.object.isRequired,
};

export default Plugin;