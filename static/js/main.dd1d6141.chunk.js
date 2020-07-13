(this["webpackJsonpremix-mythx-plugin"]=this["webpackJsonpremix-mythx-plugin"]||[]).push([[0],{104:function(e){e.exports=JSON.parse('{"name":"remix-mythx-plugin","version":"0.3.3","private":true,"homepage":".","dependencies":{"@fortawesome/fontawesome-svg-core":"1.2.19","@fortawesome/free-solid-svg-icons":"5.9.0","@fortawesome/react-fontawesome":"0.1.4","@remixproject/plugin":"0.1.14","bootstrap":"4.3.1","keccakjs":"0.2.3","lodash":"4.17.19","moment":"2.24.0","mythxjs":"1.3.12","react":"16.8.6","react-bs-notifier":"5.0.0","react-copy-to-clipboard":"5.0.1","react-dom":"16.8.6","react-scripts":"3.3.0","reactstrap":"8.0.0","remix-lib":"0.4.30"},"devDependencies":{"eslint":"6.6.0","eslint-config-standard":"14.1.0","eslint-plugin-import":"2.19.1","eslint-plugin-node":"10.0.0","eslint-plugin-promise":"4.2.1","eslint-plugin-standard":"4.0.1","husky":"3.1.0","release-it":"12.3.6"},"scripts":{"start":"react-scripts start","build":"react-scripts build","test":"react-scripts test","eject":"react-scripts eject","lint":"eslint --max-warnings 0 **/*.js","release":"release-it --no-npm.publish --github.release"},"eslintConfig":{"extends":"react-app"},"browserslist":{"production":[">0.2%","not dead","not op_mini all"],"development":["last 1 chrome version","last 1 firefox version","last 1 safari version"]},"husky":{"hooks":{"pre-commit":"npm run lint"}}}')},106:function(e,t){var a=new RegExp(/__\$\w+\$__/,"g");e.exports={removeRelativePathFromUrl:function(e){return e.replace(/^.+\.\//,"").replace("./","")},replaceLinkedLibs:function(e){return e.replace(a,"0000000000000000000000000000000000000000")}}},180:function(e,t,a){"use strict";(function(e){var n=a(31),r=a(32),s=a.n(r),l=a(27),c=a(15),i=a(19),o=a(181),u=a(182),m=a(205),d=a(183),p=a(16),f=a(204),g=a(0),b=a.n(g),v=a(184),h=a(58),E=a(185),y=a.n(E),w=a(206),O=(a(343),a(203)),j=a(192),x=a(74),k=a(193),N=a(196),C=a(200),S=a(106),A=a.n(S),T=" - ",I="remix-mythx-plugin",z="https://api.mythx.io/v1/",L={address:"0x0000000000000000000000000000000000000000",pwd:"trial"},F={},D=function(t){function a(e){var t;Object(o.a)(this,a),(t=Object(m.a)(this,Object(d.a)(a).call(this,e))).analyze=function(){var e,a,n,r,o,u,m,d,p,f,g,b,v,h,E=arguments;return s.a.async((function(y){for(;;)switch(y.prev=y.next){case 0:return e=E.length>0&&void 0!==E[0]?E[0]:"quick",a=t.state,n=a.compilations,r=a.selected,o=a.analyses,u=a.reports,m=r.split(T),d=Object(i.a)(m,2),p=d[1],y.prev=3,f=t.createClient(),y.next=7,s.a.awrap(t.login(f));case 7:return g=y.sent,t.setState({analyses:Object(c.a)({},o,Object(l.a)({},r,null)),reports:Object(c.a)({},u,Object(l.a)({},r,{list:[{messages:[]}]})),isAnalyzing:!0,jwt:g}),y.next=11,s.a.awrap(F.call("editor","discardHighlight"));case 11:return b=t.getRequestData(e),y.next=14,s.a.awrap(f.analyze(b));case 14:if(v=y.sent,t.logAnalysis(v.uuid,e),"quick"!==e){y.next=24;break}return y.next=19,s.a.awrap(f.getDetectedIssues(v.uuid));case 19:h=y.sent,t.setState({analyses:Object(c.a)({},o,Object(l.a)({},r,h)),isAnalyzing:!1,pluginActiveTab:"report"}),t.handleResult(n[p].source,h),y.next=25;break;case 24:t.setState({isAnalyzing:!1,pluginActiveTab:"log"});case 25:y.next=30;break;case 27:y.prev=27,y.t0=y.catch(3),t.setState({analyses:Object(c.a)({},o,Object(l.a)({},r,null)),reports:Object(c.a)({},u,Object(l.a)({},r,{list:[{messages:[{error:y.t0.message||y.t0}]}]})),isAnalyzing:!1,pluginActiveTab:"report"});case 30:case"end":return y.stop()}}),null,null,[[3,27]])},t.highlightIssue=function(e,t){var a,n;return s.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:if(!(t.line<0)){r.next=2;break}return r.abrupt("return");case 2:return a={start:{line:t.line,column:t.column},end:{line:t.endLine,column:t.endCol}},n=1===t.severity?"#ffd300":"#ff0000",r.next=6,s.a.awrap(F.call("editor","highlight",a,e.filePath,n));case 6:case"end":return r.stop()}}))};var n=localStorage.getItem(I)||"{}",r=JSON.parse(n);return t.state={pluginOpen:!1,settingsOpen:!1,address:r.address||L.address,pwd:r.pwd||L.pwd,token:r.token,env:r.env||z,jwt:null,compilations:{},selected:"",contractList:[],mapping:{},isAnalyzing:!1,analyses:{},reports:{},alerts:[],log:r.log||[],pluginActiveTab:"log",visibleTrialWarning:!0},(F=Object(v.createIframeClient)()).onload((function(){t.setState({pluginOpen:!0}),F.call("solidity","getCompilationResult").then((function(e){if(e){var a=e.data,n=e.source;n&&t.processCompilation(n.target,n,a)}})),F.on("solidity","compilationFinished",(function(e,a,n,r){t.processCompilation(e,a,r)}))})),t.processCompilation=t.processCompilation.bind(Object(p.a)(t)),t.login=t.login.bind(Object(p.a)(t)),t.saveSettings=t.saveSettings.bind(Object(p.a)(t)),t.logAnalysis=t.logAnalysis.bind(Object(p.a)(t)),t.analyze=t.analyze.bind(Object(p.a)(t)),t.getRequestData=t.getRequestData.bind(Object(p.a)(t)),t.handleResult=t.handleResult.bind(Object(p.a)(t)),t.highlightIssue=t.highlightIssue.bind(Object(p.a)(t)),t.clear=t.clear.bind(Object(p.a)(t)),t.selectContract=t.selectContract.bind(Object(p.a)(t)),t.addAlert=t.addAlert.bind(Object(p.a)(t)),t.dismissAlert=t.dismissAlert.bind(Object(p.a)(t)),t.openSettings=t.openSettings.bind(Object(p.a)(t)),t.closeSettings=t.closeSettings.bind(Object(p.a)(t)),t}return Object(f.a)(a,t),Object(u.a)(a,[{key:"processCompilation",value:function(t,a,r){var s=this.state,i=s.compilations,o=s.contractList,u=s.mapping,m=r.contracts,d=(void 0===m?[]:m)[t],p={};Object.keys(d).forEach((function(a){var n=d[a].evm.deployedBytecode.object,r=new y.a(256);r.update(e.from(n,"hex")),p[t]=t,p["0x".concat(r.digest("hex"))]=t}));var f=Object.keys(r.contracts[t]),g=new Set([].concat(Object(n.a)(o),Object(n.a)(this.getContracts(r,t))));this.setState({compilations:Object(c.a)({},i,Object(l.a)({},t,{source:a,data:r})),selected:"".concat(f[0]).concat(T).concat(t),contractList:Array.from(g),mapping:Object(c.a)({},u,{},p)})}},{key:"getContracts",value:function(e,t){var a=e.contracts,n=(void 0===a?[]:a)[t]||{};return Object.keys(n).map((function(e){return"".concat(e).concat(T).concat(t)}))}},{key:"saveSettings",value:function(e,t,a,n){e=e||L.address,t=t||L.pwd,n=n||z,this.setState({address:e,pwd:t,token:a,env:n,jwt:null});var r=localStorage.getItem(I)||"{}",s=JSON.parse(r),l=Object(c.a)({},s,{},{address:e,pwd:t,token:a,env:n});localStorage.setItem(I,JSON.stringify(l)),this.addAlert("success","Saved")}},{key:"logAnalysis",value:function(e,t){var a=localStorage.getItem(I)||"{}",r=JSON.parse(a),s=Object(c.a)({},r,{},{log:[{timestamp:(new Date).getTime(),uuid:e,mode:t}].concat(Object(n.a)(r.log||[]))});localStorage.setItem(I,JSON.stringify(s)),this.setState({log:s.log})}},{key:"createClient",value:function(){var e=this.state,t=e.address,a=e.pwd,n=e.token,r=e.jwt,s=e.env;try{return new h.Client(t,a,"remythx",s,n||r)}catch(l){return console.error(l),new h.Client(t,a,"remythx",s)}}},{key:"login",value:function(e){return s.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:if(h.Client.jwtTokens.access){t.next=3;break}return t.next=3,s.a.awrap(e.login());case 3:return t.abrupt("return",h.Client.jwtTokens.access);case 4:case"end":return t.stop()}}))}},{key:"getRequestData",value:function(e){var t=this.state,a=t.compilations,n=t.selected.split(T),r=Object(i.a)(n,2),s=r[0],l=r[1],c=a[l],o=c.data,u=void 0===o?{}:o,m=c.source,d=void 0===m?{}:m,p=u.contracts,f=void 0===p?[]:p,g=u.sources,b=void 0===g?{}:g,v=f[l],h=v[s].evm.bytecode,E=v[s].evm.deployedBytecode,y={contractName:s,bytecode:A.a.replaceLinkedLibs(h.object),sourceMap:h.sourceMap,deployedBytecode:A.a.replaceLinkedLibs(E.object),deployedSourceMap:E.sourceMap,analysisMode:e,mainSource:l,sourceList:Object.keys(d.sources),sources:{}};for(var w in d.sources)if(Object.prototype.hasOwnProperty.call(d.sources,w)){var O=b[w].ast,j=d.sources[w].content;y.sources[w]={ast:O,source:j}}return y}},{key:"handleResult",value:function(e,t){var a=this.state,n=a.selected,r=a.reports,s=a.mapping,i=Object(C.a)(e,s,t);0===i.length?this.setState({reports:Object(c.a)({},r,Object(l.a)({},n,{message:"\u2714 No errors/warnings found in ".concat(n)}))}):this.setState({reports:Object(c.a)({},r,Object(l.a)({},n,{list:i}))})}},{key:"clear",value:function(){this.setState({compilations:{},selected:"",contractList:[],mapping:{},analyses:{},reports:{}})}},{key:"selectContract",value:function(e){this.setState({selected:e})}},{key:"addAlert",value:function(e,t){this.setState({alerts:[].concat(Object(n.a)(this.state.alerts),[{id:(new Date).getTime(),type:e,message:t}])})}},{key:"dismissAlert",value:function(e){var t=this.state.alerts,a=t.indexOf(e);a>=0&&this.setState({alerts:[].concat(Object(n.a)(t.slice(0,a)),Object(n.a)(t.slice(a+1)))})}},{key:"openSettings",value:function(){this.setState({settingsOpen:!0})}},{key:"closeSettings",value:function(){this.setState({settingsOpen:!1})}},{key:"render",value:function(){var e=this,t=this.state,a=t.pluginOpen,n=t.settingsOpen,r=t.address,s=t.token,l=t.visibleTrialWarning,c=t.alerts,i=a?b.a.createElement("div",{style:{position:"relative",minHeight:"100vh"}},b.a.createElement("main",null,n?b.a.createElement(j.a,Object.assign({},this.state,{save:this.saveSettings,close:this.closeSettings})):b.a.createElement(b.a.Fragment,null,r===L.address&&!s&&b.a.createElement("div",{className:"container"},b.a.createElement(w.a,{color:"warning",isOpen:l,toggle:function(){e.setState({visibleTrialWarning:!1})},style:{padding:".5rem 2.9rem .5rem .5rem"}},"You are now using trial credentials. Update in ",b.a.createElement("button",{className:"btn btn-link p-0",style:{display:"contents"},onClick:this.openSettings},"Settings"))),b.a.createElement(O.a,Object.assign({},this.state,{selectContract:this.selectContract,analyze:this.analyze,addAlert:this.addAlert,highlightIssue:this.highlightIssue,clear:this.clear,changeTab:function(t){e.setState({pluginActiveTab:t})}})))),b.a.createElement(x.a,{isPlugin:!0,openSettings:this.openSettings}),b.a.createElement(k.a,{alerts:c,onDismiss:this.dismissAlert})):b.a.createElement(N.a,null);return b.a.createElement(b.a.Fragment,null,i)}}]),a}(b.a.Component);t.a=D}).call(this,a(10).Buffer)},192:function(e,t,a){"use strict";var n=a(15),r=a(19),s=a(0),l=a.n(s),c=a(206),i=a(442),o=a(207),u=a(208),m=a(443),d=a(209),p=a(7),f=a.n(p),g=a(22),b=a(18);t.a=function(e){var t=e.address,a=e.pwd,p=e.env,v=e.token,h=e.save,E=e.close,y=Object(s.useState)({activeTab:"2",address:t,pwd:a,token:v,env:p}),w=Object(r.a)(y,2),O=w[0],j=w[1],x=function(e){O.activeTab!==e&&j(Object(n.a)({},O,{activeTab:e}))};return l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-12 text-right"},l.a.createElement(g.a,{icon:b.h,size:"lg",className:"float-right ml-2",style:{cursor:"pointer"},onClick:E}))),l.a.createElement("div",{className:"row pb-3"},l.a.createElement("div",{className:"col-md-6 offset-md-3"},l.a.createElement("div",{className:"text-left"},l.a.createElement("h5",null,"Access"),"0x0000000000000000000000000000000000000000"===O.address&&!O.token&&l.a.createElement(c.a,{color:"warning",style:{fontSize:13,padding:".5rem"}},"You need to sign in to use MythX APIs. Trial user will be soon deprecated. Please register an account on ",l.a.createElement("a",{href:"https://mythx.io/",target:"_blank",rel:"noopener noreferrer",className:"text-nowrap"},"www.mythx.io"))),l.a.createElement(i.a,{tabs:!0,style:{marginTop:".5rem"}},l.a.createElement(o.a,null,l.a.createElement(u.a,{className:f()({active:"2"===O.activeTab}),style:{padding:".5rem 1rem",cursor:"pointer"},onClick:function(){x("2")}},"Access Token")),l.a.createElement(o.a,null,l.a.createElement(u.a,{className:f()({active:"1"===O.activeTab}),style:{padding:".5rem 1rem",cursor:"pointer"},onClick:function(){x("1")}},"Credentials"))),l.a.createElement(m.a,{activeTab:O.activeTab,style:{padding:".5rem .5rem 0 .5rem",border:"1px solid #ecf0f1",borderTop:"none"}},l.a.createElement(d.a,{tabId:"2"},l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"token"},"JWT"),l.a.createElement("input",{type:"text",className:"form-control",id:"token",placeholder:"Token",onChange:function(e){return j(Object(n.a)({},O,{token:e.target.value}))},defaultValue:O.token}))),l.a.createElement(d.a,{tabId:"1"},l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"address"},"Address/Email"),l.a.createElement("input",{type:"text",className:"form-control",id:"address",placeholder:"Address",onChange:function(e){return j(Object(n.a)({},O,{address:e.target.value}))},defaultValue:O.address})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"pwd"},"Password"),l.a.createElement("input",{type:"password",className:"form-control",id:"pwd",placeholder:"Password",onChange:function(e){return j(Object(n.a)({},O,{pwd:e.target.value}))},defaultValue:O.pwd})))))),l.a.createElement("div",{className:"row pb-3"},l.a.createElement("div",{className:"col-md-6 offset-md-3"},l.a.createElement("div",{className:"text-left"},l.a.createElement("h5",null,"Environment")),l.a.createElement("div",null,l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"address"},"Endpoint"),l.a.createElement("input",{type:"text",className:"form-control",id:"endpoint",placeholder:"Endpoint",onChange:function(e){return j(Object(n.a)({},O,{env:e.target.value}))},defaultValue:O.env})),l.a.createElement("button",{type:"button",className:"btn btn-primary",onClick:function(){var e=O.address,t=O.pwd,a=O.token,n=O.env;h(e,t,a,n)}},"Save")))))}},193:function(e,t,a){"use strict";var n=a(0),r=a.n(n),s=a(202);t.a=function(e){var t=e.alerts,a=e.onDismiss;return r.a.createElement(s.a,{position:"bottom-right",alerts:t,timeout:3e3,onDismiss:a,showIcon:!1})}},196:function(e,t,a){"use strict";var n=a(0),r=a.n(n),s=a(74),l=a(197),c=a.n(l),i=a(198),o=a.n(i),u=a(199),m=a.n(u);t.a=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"h-100",style:{background:"#012A3E"}},r.a.createElement("div",{className:"d-flex align-items-end flex-column",style:{height:"50%"}},r.a.createElement("div",{className:"mt-auto pb-5 w-100"},r.a.createElement("h1",{className:"display-1 text-white",style:{textAlign:"center"}},"re:MythX"))),r.a.createElement("div",{className:"d-flex justify-content-center pt-4"},r.a.createElement("a",{href:"https://remix.ethereum.org",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("img",{src:c.a,alt:"remix",style:{height:120,width:120,verticalAlign:"top"}})),r.a.createElement("img",{src:m.a,alt:"plus",className:"pl-5 pr-5",style:{height:100,width:140}}),r.a.createElement("a",{href:"https://mythx.io/",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("img",{src:o.a,alt:"mythx",style:{height:130,width:180,verticalAlign:"top"}})))),r.a.createElement(s.a,null))}},197:function(e,t,a){e.exports=a.p+"static/media/remix.0cc3e824.svg"},198:function(e,t,a){e.exports=a.p+"static/media/mythx.5fc6cc7c.png"},199:function(e,t,a){e.exports=a.p+"static/media/plus.bd770134.svg"},200:function(e,t,a){"use strict";a.d(t,"a",(function(){return m}));var n=a(31),r=a(19),s=a(201),l=a.n(s),c=a(47),i={High:2,Medium:1},o=new l.a,u=function(e,t,a){var n;n=e.swcID?"https://swcregistry.io/docs/"+e.swcID:"N/A";var s={fatal:!1,ruleId:e.swcID,ruleLink:n,message:"".concat(e.description.head),description:"".concat(e.description.tail),severity:i[e.severity]||1,line:-1,column:0,endLine:-1,endCol:0,sourceType:"",origin:e};if(t){var l,c,u=o.getLinebreakPositions(t);if(a.length){var m=function(e,t){var a=e.split(":"),n={length:parseInt(a[1],10),start:parseInt(a[0],10)},r=o.convertOffsetToLineColumn(n,t);return[r.start,r.end]}(a[0].sourceMap.split(";")[0],u),d=Object(r.a)(m,2);l=d[0],c=d[1],s.sourceType=a[0].sourceType}l&&(s.line=l.line,s.column=l.column,s.endLine=c.line,s.endCol=c.column)}return s},m=function(e,t,a){var r={};a.forEach((function(a){(function(e,t,a){var n=e.issues,r=a.sources,s=a.functionHashes,l={},i=function(e){return"solidity-file"===e.sourceType&&"text"===e.sourceFormat};for(var o in n.map((function(a){var n=a.locations.filter(i),c=n.length?n[0]:void 0,o="",m="<unknown>";if(c){var d=(c.sourceList||e.sourceList||[])[function(e){if(e.length){var t=/(\d+):(\d+):(\d+)/g.exec(e[0].sourceMap);return t?t[3]:0}return 0}(c)];d&&(m=t[d]||d,r[m]&&(o=r[m].content))}l[m]||(l[m]={errorCount:0,warningCount:0,fixableErrorCount:0,fixableWarningCount:0,filePath:m,functionHashes:s,sourceCode:o,messages:[]});var p=u(a,(r[m]||{}).content,n);l[m].messages.push(p)})),l)Object.prototype.hasOwnProperty.call(l,o)&&(l[o].warningCount=l[o].messages.reduce((function(e,t){var a=t.fatal,n=t.severity;return Object(c.b)(a,n)?e:e+1}),0),l[o].errorCount=l[o].messages.reduce((function(e,t){var a=t.fatal,n=t.severity;return Object(c.b)(a,n)?e+1:e}),0));return Object.values(l)})(a,t,e).forEach((function(e){var t=r[e.filePath];r[e.filePath]=t?{errorCount:t.errorCount+e.errorCount,warningCount:t.warningCount+e.warningCount,fixableErrorCount:t.fixableErrorCount+e.fixableErrorCount,fixableWarningCount:t.fixableWarningCount+e.fixableWarningCount,filePath:t.filePath,messages:[].concat(Object(n.a)(t.messages),Object(n.a)(e.messages))}:e}))}));var s=Object.values(r).reduce((function(e,t){return e.concat(t)}),[]);return Object(c.a)(s)}},203:function(e,t,a){"use strict";var n=a(19),r=a(0),s=a.n(r),l=a(22),c=a(18),i=a(206),o=a(445),u=a(450),m=a(449),d=a(446),p=a(447),f=a(442),g=a(207),b=a(208),v=a(443),h=a(209),E=a(186),y=a(444),w={"0xaffeaffeaffeaffeaffeaffeaffeaffeaffeaffe":"Creator","0xdeadbeefdeadbeefdeadbeefdeadbeefdeadbeef":"Attacker"};var O=function(e){var t=e.issue.extra,a=(void 0===t?{}:t).testCases,n=void 0===a?[]:a;return n.length?s.a.createElement("div",{className:"pt-1",style:{fontSize:14}},s.a.createElement("h6",{className:"bg-light p-1"},"Steps to reproduce"),n.map((function(e,t){return s.a.createElement("div",{key:t,className:""},e.steps.map((function(e,t){var a=w[e.origin];return s.a.createElement("div",{key:t,className:"pt-2"},s.a.createElement("h6",{className:"font-weight-bold"},"Transaction ".concat(t+1," ").concat(0===t?"(contract creation)":"")),s.a.createElement("div",{className:"pl-3 text-truncate"},s.a.createElement("div",null,s.a.createElement("b",null,"Sender:")," ",e.origin," ",a?"(".concat(a,")"):""),s.a.createElement("div",null,s.a.createElement("b",null,"Value:")," ",e.value),s.a.createElement("div",null,s.a.createElement("b",null,"Function name:")," ",e.name||"N/A"),s.a.createElement("div",null,s.a.createElement("b",null,"Calldata:")," ",e.input),s.a.createElement("div",null,s.a.createElement("b",null,"Decoded calldata:")," ",e.decodedInput||"N/A")))})),s.a.createElement("hr",null))}))):null},j=a(47);var x=function(e){var t=e.issue,a=e.highlightIssue,i=Object(r.useState)(!1),o=Object(n.a)(i,2),u=o[0],m=o[1];return s.a.createElement(s.a.Fragment,null,s.a.createElement("div",null,t.error?s.a.createElement("div",{className:"alert alert-danger p-1",style:{padding:".5rem"}},t.error):s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:"d-flex flex-row"},s.a.createElement("button",{onClick:function(){return m(!u)},className:"btn btn-link align-self-center pl-0 pr-2"},s.a.createElement(l.a,{icon:u?c.a:c.b})),s.a.createElement("button",{type:"button",className:"btn ".concat(Object(j.b)(t.fatal,t.severity)?"btn-danger":"btn-warning"," text-left p-1 mb-1 w-100"),onClick:function(){a(t)}},"raw-bytecode"===t.sourceType&&s.a.createElement("span",{title:"raw-bytecode"},s.a.createElement(l.a,{className:"float-right",style:{fontSize:10},icon:c.e})),s.a.createElement("span",{className:"pr-2"},"[".concat(t.line+1,":").concat(t.column,"]")),t.message)),s.a.createElement(y.a,{isOpen:u},s.a.createElement("div",{className:"pl-3 pb-3"},s.a.createElement("div",{style:{fontSize:13}},t.description,t.ruleId&&s.a.createElement("a",{href:t.ruleLink,className:"pl-1",target:"_blank",rel:"noopener noreferrer"},"[",t.ruleId,"]")),s.a.createElement(O,{issue:t.origin}))))))};var k=function(e){var t=e.report,a=e.highlightIssue;return s.a.createElement(s.a.Fragment,null,t.message&&s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-md-6 offset-md-3"},s.a.createElement("div",{className:"alert alert-success w-100",role:"alert"},t.message))),t.list&&s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-md-6 offset-md-3"},t.list.map((function(e,t){var n=e.errorCount+e.warningCount,r=function(e,t){return"".concat(e," ").concat(1===e?t:"".concat(t,"s"))};return s.a.createElement("div",{key:t,className:"border-bottom pt-2 pb-2"},s.a.createElement("div",{className:"text-truncate font-weight-bold"},e.filePath),e.messages.map((function(t,n){return s.a.createElement(x,{key:n,issue:t,highlightIssue:function(t){return a(e,t)}})})),!!n&&s.a.createElement("div",null,"\u2716 ".concat(r(n,"issue")," (").concat(r(e.errorCount,"error"),", ").concat(r(e.warningCount,"warning"),")")))})))))},N=a(188),C=a.n(N);var S=function(e){var t=e.list,a=void 0===t?[]:t;return s.a.createElement("div",{className:"row"},a.slice(0,5).map((function(e,t){var a="https://dashboard.mythx.io/#/console/analyses/".concat(e.uuid);return s.a.createElement("div",{key:t,className:"col-md-6 offset-md-3 pt-1 pb-1"},s.a.createElement("span",{className:"pr-1 text-secondary"},"[",C()(e.timestamp).format("L LTS"),"]"),"full"===e.mode?s.a.createElement(s.a.Fragment,null,s.a.createElement(l.a,{icon:c.d,className:"mr-1 text-warning"}),"Request for ",s.a.createElement("b",null,e.mode)," analysis has been submitted. See your results shortly at"):s.a.createElement(s.a.Fragment,null,"Your ",s.a.createElement("b",null,e.mode)," analysis is completed. See your results at"),s.a.createElement("a",{href:a,className:"pl-1",target:"_blank",rel:"noopener noreferrer"},e.uuid))})))},A=a(75),T=a(448);var I=function(e){var t=e.children,a=e.placement,i=Object(A.a)(e,["children","placement"]),o=Object(r.useState)(!1),u=Object(n.a)(o,2),m=u[0],d=u[1];return s.a.createElement(s.a.Fragment,null,s.a.createElement(l.a,Object.assign({className:"ml-2",icon:c.g},i)),s.a.createElement(T.a,{placement:a,isOpen:m,autohide:!1,target:i.id,toggle:function(){d(!m)}},t))},z=" - ";t.a=function(e){var t=e.compilations,a=e.contractList,y=e.selected,w=e.isAnalyzing,O=e.analyses,j=e.reports,x=e.selectContract,N=e.pluginActiveTab,C=e.analyze,A=e.addAlert,T=e.highlightIssue,L=e.clear,F=e.changeTab,D=e.log,P=Object(r.useState)(!1),R=Object(n.a)(P,2),_=R[0],J=R[1],W=y.split(z),M=Object(n.a)(W,2)[1],q=function(){var e=y.split(z),a=Object(n.a)(e,1)[0];if(!t[M])return!1;var r=t[M].data,s=(void 0===r?{}:r).contracts,l=(void 0===s?[]:s)[M][a].evm.bytecode;return l&&l.object&&l.object.length}(),B=w||!q;return s.a.createElement("div",{className:"container"},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-md-6 offset-md-3"},M?s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:"d-flex pb-3"},s.a.createElement("div",{className:"w-100"},s.a.createElement("select",{className:"form-control",value:y,onChange:function(e){return x(e.target.value)},disabled:w},a.map((function(e,t){return s.a.createElement("option",{key:t,value:e},e)})))),s.a.createElement("div",{className:"flex-shrink-1"},s.a.createElement("button",{type:"button",className:"form-control btn ml-2",title:"Clear",onClick:L,disabled:w},s.a.createElement(l.a,{icon:c.i})))),!q&&s.a.createElement(i.a,{color:"warning",style:{padding:".5rem 2.9rem .5rem .5rem"}},"This contract is abstract, it is not possible to analyze."),s.a.createElement("div",null,s.a.createElement(o.a,null,s.a.createElement(u.a,{isOpen:_,toggle:function(){return J(!_)}},s.a.createElement("button",{type:"button",className:"btn btn-primary",onClick:function(){return C()},disabled:B},w?s.a.createElement("span",{className:"spinner-border spinner-border-sm",role:"status","aria-hidden":"true"}):s.a.createElement("div",null,"Analyze")),s.a.createElement(m.a,{caret:!0,disabled:B,className:"btn-primary"}),s.a.createElement(d.a,null,s.a.createElement(p.a,{onClick:function(){return C()},disabled:B},"Analyze"),s.a.createElement(p.a,{onClick:function(){return C("standard")},disabled:B},"Analyze (Standard)"),s.a.createElement(p.a,{onClick:function(){return C("deep")},disabled:B},"Analyze (Deep)")))),s.a.createElement(I,{id:"analysis_info",placement:"bottom"},s.a.createElement("div",null,"Analysis can take couple"),s.a.createElement("div",null,"of minutes. ",s.a.createElement("b",null,"Standard")," mode"),s.a.createElement("div",null,"takes approx 25 minutes."),s.a.createElement("div",null,s.a.createElement("b",null,"Deep")," takes approx 70 minutes.")),w&&s.a.createElement("div",{style:{fontSize:14,fontWeight:"bold"}},"We are analyzing your contract. This should take up to 2 minutes"))):s.a.createElement("div",{className:"alert alert-warning w-100",role:"alert",style:{padding:".5rem"}},"You need to compile your contract first!"))),s.a.createElement(f.a,{tabs:!0,className:"pt-1"},s.a.createElement(g.a,null,s.a.createElement(b.a,{href:"#",className:"log"===N?"active":null,onClick:function(){return F("log")}},"Log")),s.a.createElement(g.a,null,s.a.createElement(b.a,{href:"#",className:"report"===N?"active":null,onClick:function(){return F("report")}},"Report"))),s.a.createElement(v.a,{activeTab:N},s.a.createElement(h.a,{tabId:"log"},s.a.createElement(S,{list:D})),s.a.createElement(h.a,{tabId:"report"},O[y]&&s.a.createElement("div",{className:"text-right"},s.a.createElement(E.CopyToClipboard,{text:JSON.stringify(O[y]),onCopy:function(){return A("success","Copied")}},s.a.createElement("button",{type:"button",className:"btn",title:"Copy raw report to clipboard"},s.a.createElement(l.a,{className:"ml-2",icon:c.c}),s.a.createElement("span",{className:"pl-1"},"Raw report")))),s.a.createElement(k,{report:j[y]||{},highlightIssue:T}))))}},210:function(e,t,a){e.exports=a(441)},217:function(e,t,a){},243:function(e,t){},245:function(e,t){},279:function(e,t){},280:function(e,t){},441:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(44),l=a.n(s),c=(a(217),a(180));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(c.a,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},47:function(e,t,a){"use strict";a.d(t,"b",(function(){return s})),a.d(t,"a",(function(){return l}));var n=a(15),r=a(75),s=function(e,t){return e||2===t},l=function(e){return e.map((function(e){var t=e.messages,a=Object(r.a)(e,["messages"]),l=function(e){return e.map((function(e){return JSON.stringify(e)})).reduce((function(e,t){return-1===e.indexOf(t)&&e.push(t),e}),[]).map((function(e){return JSON.parse(e)}))}(t),c=function(e){return e.reduce((function(e,t){var a=t.fatal,n=t.severity;return s(a,n)?e:e+1}),0)}(l),i=function(e){return e.reduce((function(e,t){var a=t.fatal,n=t.severity;return s(a,n)?e+1:e}),0)}(l);return Object(n.a)({},a,{messages:l,errorCount:i,warningCount:c})}))}},74:function(e,t,a){"use strict";var n=a(0),r=a.n(n),s=a(22),l=a(18),c=a(104);t.a=function(e){var t=e.isPlugin,a=e.openSettings,n=r.a.createElement(r.a.Fragment,null,r.a.createElement("a",{href:"https://github.com/aquiladev/remix-mythx-plugin/releases/tag/".concat(c.version),target:"_block",rel:"noopener noreferrer"},c.version)," | ",r.a.createElement("a",{href:"https://discord.gg/VhdtjCh",target:"_blank",rel:"noopener noreferrer"},"Get support"));return r.a.createElement(r.a.Fragment,null,t?r.a.createElement("div",{className:"position-absolute w-100 pb-1 d-flex",style:{fontSize:12,bottom:0}},r.a.createElement("div",null,r.a.createElement("button",{className:"btn btn-light ml-1 p-1",style:{fontSize:12},onClick:a},r.a.createElement(s.a,{icon:l.f,size:"lg",className:"mr-1"}),"MythX Settings")),r.a.createElement("div",{className:"ml-auto mr-1"},r.a.createElement("div",{className:"position-absolute",style:{right:4,bottom:4}},n))):r.a.createElement("div",{className:"position-absolute text-center w-100 pb-1 text-white",style:{fontSize:12,bottom:0}},n))}}},[[210,1,2]]]);
//# sourceMappingURL=main.dd1d6141.chunk.js.map