(window["webpackJsonpremix-mythx-plugin"]=window["webpackJsonpremix-mythx-plugin"]||[]).push([[0],{157:function(e,t,a){"use strict";(function(e){var n=a(21),r=a(44),s=a.n(r),c=a(14),i=a(18),o=a(83),l=a(55),u=a(56),d=a(60),m=a(57),p=a(9),f=a(59),g=a(0),h=a.n(g),b=a(158),v=a(159),y=a(160),O=a.n(y),w=(a(315),a(176)),E=a(58),j=a(166),C=a(169),x=a(173);function k(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function N(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?k(a,!0).forEach((function(t){Object(c.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):k(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var S="::",P="remix-mythx-plugin",A={address:"0x0000000000000000000000000000000000000000",pwd:"trial"},I={},D=function(t){function a(e){var t;Object(l.a)(this,a),(t=Object(d.a)(this,Object(m.a)(a).call(this,e))).analyze=Object(o.a)(s.a.mark((function e(){var a,n,r,o,l,u,d,m,p,f,g,h,b,y,O;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.state,n=a.address,r=a.pwd,o=a.compilations,l=a.selected,u=a.analyses,d=a.reports,m=l.split(S),p=Object(i.a)(m,1),f=p[0],g=new v.Client(n,r,"remythx"),e.next=5,t.login(g);case 5:return h=e.sent,t.setState({analyses:N({},u,Object(c.a)({},l,null)),isAnalyzig:!0,jwt:h}),e.next=9,I.call("editor","discardHighlight");case 9:return e.prev=9,b=t.getRequestData(),e.next=13,g.analyze(b);case 13:return y=e.sent,e.next=16,g.getDetectedIssues(y.uuid);case 16:O=e.sent,t.setState({analyses:N({},u,Object(c.a)({},l,O)),isAnalyzig:!1}),t.handleResult(o[f].source,O),e.next=24;break;case 21:e.prev=21,e.t0=e.catch(9),t.setState({analyses:N({},u,Object(c.a)({},l,null)),reports:N({},d,Object(c.a)({},l,{list:[{messages:[{error:e.t0.message||e.t0}]}]})),isAnalyzig:!1});case 24:case"end":return e.stop()}}),e,null,[[9,21]])}))),t.highlightIssue=function(){var e=Object(o.a)(s.a.mark((function e(t,a){var n,r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(a.line<0)){e.next=2;break}return e.abrupt("return");case 2:return n={start:{line:a.line,column:a.column},end:{line:a.endLine,column:a.endCol}},r=1===a.severity?"#ffd300":"#ff0000",e.next=6,I.call("editor","highlight",n,t.filePath,r);case 6:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}();var n=localStorage.getItem(P)||"{}",r=JSON.parse(n),u=r.address||A.address;return t.state={pluginOpen:!1,address:u,pwd:r.pwd||A.pwd,jwt:null,compilations:{},selected:"",contractList:[],mapping:{},isAnalyzig:!1,analyses:{},reports:{},alerts:[]},(I=Object(b.createIframeClient)()).onload((function(){t.setState({pluginOpen:!0}),I.call("solidity","getCompilationResult").then((function(e){if(e){var a=e.data,n=e.source;n&&t.processCompilation(n.target,n,a)}})),I.on("solidity","compilationFinished",(function(e,a,n,r){t.processCompilation(e,a,r)}))})),t.processCompilation=t.processCompilation.bind(Object(p.a)(t)),t.login=t.login.bind(Object(p.a)(t)),t.saveCredentials=t.saveCredentials.bind(Object(p.a)(t)),t.analyze=t.analyze.bind(Object(p.a)(t)),t.getRequestData=t.getRequestData.bind(Object(p.a)(t)),t.handleResult=t.handleResult.bind(Object(p.a)(t)),t.highlightIssue=t.highlightIssue.bind(Object(p.a)(t)),t.clear=t.clear.bind(Object(p.a)(t)),t.selectContract=t.selectContract.bind(Object(p.a)(t)),t.addAlert=t.addAlert.bind(Object(p.a)(t)),t.dismissAlert=t.dismissAlert.bind(Object(p.a)(t)),t}return Object(f.a)(a,t),Object(u.a)(a,[{key:"processCompilation",value:function(t,a,r){var s=this.state,i=s.compilations,o=s.contractList,l=s.mapping,u=r.contracts,d=(void 0===u?[]:u)[t],m={};Object.keys(d).forEach((function(a){var n=d[a].evm.deployedBytecode.object,r=new O.a(256);r.update(e.from(n,"hex")),m[t]=t,m["0x".concat(r.digest("hex"))]=t}));var p=Object.keys(r.contracts[t]),f=new Set([].concat(Object(n.a)(o),Object(n.a)(this.getContracts(r,t))));this.setState({compilations:N({},i,Object(c.a)({},t,{source:a,data:r})),selected:"".concat(t).concat(S).concat(p[0]),contractList:Array.from(f),mapping:N({},l,{},m)})}},{key:"getContracts",value:function(e,t){var a=e.contracts,n=(void 0===a?[]:a)[t]||{};return Object.keys(n).map((function(e){return"".concat(t).concat(S).concat(e)}))}},{key:"saveCredentials",value:function(e,t){this.setState({address:e,pwd:t}),localStorage.setItem(P,JSON.stringify({address:e,pwd:t})),this.addAlert("success","Saved")}},{key:"login",value:function(e){var t=this.state.jwt;if(t)try{return e.loginWithToken(t),t}catch(a){if("Access token has expired or is invalid! Please login again."!==a.message)throw a}return e.login()}},{key:"getRequestData",value:function(){var e=this.state,t=e.compilations,a=e.selected.split(S),n=Object(i.a)(a,2),r=n[0],s=n[1],c=t[r],o=c.data,l=void 0===o?{}:o,u=c.source,d=void 0===u?{}:u,m=l.contracts,p=void 0===m?[]:m,f=l.sources,g=void 0===f?{}:f,h=p[r],b=h[s].evm.bytecode,v=h[s].evm.deployedBytecode,y={contractName:s,bytecode:b.object,sourceMap:b.sourceMap,deployedBytecode:v.object,deployedSourceMap:v.sourceMap,analysisMode:"quick",mainSource:r,sourceList:Object.keys(d.sources),sources:{}};for(var O in d.sources)if(d.sources.hasOwnProperty(O)){var w=g[O].ast,E=d.sources[O].content;y.sources[O]={ast:w,source:E}}return y}},{key:"handleResult",value:function(e,t){var a=this.state,n=a.selected,r=a.reports,s=a.mapping,i=Object(x.a)(e,s,t);0===i.length?this.setState({reports:N({},r,Object(c.a)({},n,{message:"\u2714 No errors/warnings found in ".concat(n)}))}):this.setState({reports:N({},r,Object(c.a)({},n,{list:i}))})}},{key:"clear",value:function(){this.setState({compilations:{},selected:"",contractList:[],mapping:{},analyses:{},reports:{}})}},{key:"selectContract",value:function(e){this.setState({selected:e})}},{key:"addAlert",value:function(e,t){this.setState({alerts:[].concat(Object(n.a)(this.state.alerts),[{id:(new Date).getTime(),type:e,message:t}])})}},{key:"dismissAlert",value:function(e){var t=this.state.alerts,a=t.indexOf(e);a>=0&&this.setState({alerts:[].concat(Object(n.a)(t.slice(0,a)),Object(n.a)(t.slice(a+1)))})}},{key:"render",value:function(){var e=this.state,t=e.pluginOpen,a=e.alerts,n=t?h.a.createElement("div",{style:{position:"relative",minHeight:"100vh"}},h.a.createElement("main",null,h.a.createElement(w.a,Object.assign({},this.state,{saveCredentials:this.saveCredentials,selectContract:this.selectContract,analyze:this.analyze,addAlert:this.addAlert,highlightIssue:this.highlightIssue,clear:this.clear}))),h.a.createElement(E.a,{isPlugin:!0}),h.a.createElement(j.a,{alerts:a,onDismiss:this.dismissAlert})):h.a.createElement(C.a,null);return h.a.createElement(h.a.Fragment,null,n)}}]),a}(h.a.Component);t.a=D}).call(this,a(5).Buffer)},166:function(e,t,a){"use strict";var n=a(0),r=a.n(n),s=a(175);t.a=function(e){var t=e.alerts,a=e.onDismiss;return r.a.createElement(s.a,{position:"bottom-right",alerts:t,timeout:3e3,onDismiss:a,showIcon:!1})}},169:function(e,t,a){"use strict";var n=a(0),r=a.n(n),s=a(58),c=a(170),i=a.n(c),o=a(171),l=a.n(o),u=a(172),d=a.n(u);t.a=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"h-100",style:{background:"#012A3E"}},r.a.createElement("div",{className:"d-flex align-items-end flex-column",style:{height:"50%"}},r.a.createElement("div",{className:"mt-auto pb-5 w-100"},r.a.createElement("h1",{className:"display-1 text-white",style:{textAlign:"center"}},"re:MythX"))),r.a.createElement("div",{className:"text-center pt-4"},r.a.createElement("a",{href:"https://remix.ethereum.org",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("img",{src:i.a,alt:"remix",style:{height:120,width:120,verticalAlign:"top"}})),r.a.createElement("img",{src:d.a,alt:"plus",className:"pl-5 pr-5",style:{height:100,width:140}}),r.a.createElement("a",{href:"https://mythx.io/",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("img",{src:l.a,alt:"mythx",style:{height:130,width:180,verticalAlign:"top"}})))),r.a.createElement(s.a,null))}},170:function(e,t,a){e.exports=a.p+"static/media/remix.0cc3e824.svg"},171:function(e,t,a){e.exports=a.p+"static/media/mythx.5fc6cc7c.png"},172:function(e,t,a){e.exports=a.p+"static/media/plus.bd770134.svg"},173:function(e,t,a){"use strict";a.d(t,"a",(function(){return d}));var n=a(21),r=a(18),s=a(174),c=a.n(s),i=a(35),o={High:2,Medium:1},l=new c.a,u=function(e,t,a){var n;n=e.swcID?"https://smartcontractsecurity.github.io/SWC-registry/docs/"+e.swcID:"N/A";var s={fatal:!1,ruleId:e.swcID,ruleLink:n,message:"".concat(e.description.head),description:"".concat(e.description.tail),severity:o[e.severity]||1,line:-1,column:0,endLine:-1,endCol:0,sourceType:""};if(t){var c,i,u=l.getLinebreakPositions(t);if(a.length){var d=function(e,t){var a=e.split(":"),n={length:parseInt(a[1],10),start:parseInt(a[0],10)},r=l.convertOffsetToLineColumn(n,t);return[r.start,r.end]}(a[0].sourceMap.split(";")[0],u),m=Object(r.a)(d,2);c=m[0],i=m[1],s.sourceType=a[0].sourceType}c&&(s.line=c.line,s.column=c.column,s.endLine=i.line,s.endCol=i.column)}return s},d=function(e,t,a){var r={};a.forEach((function(a){(function(e,t,a){var n=e.issues,r=a.sources,s=a.functionHashes,c={},o=function(e){return"solidity-file"===e.sourceType&&"text"===e.sourceFormat};for(var l in n.map((function(a){var n=a.locations.filter(o),i=n.length?n[0]:void 0,l="",d="<unknown>";if(i){var m=(i.sourceList||e.sourceList||[])[function(e){if(e.length){var t=/(\d+):(\d+):(\d+)/g.exec(e[0].sourceMap);return t?t[3]:0}return 0}(i)];m&&(d=t[m]||m,r[d]&&(l=r[d].content))}c[d]||(c[d]={errorCount:0,warningCount:0,fixableErrorCount:0,fixableWarningCount:0,filePath:d,functionHashes:s,sourceCode:l,messages:[]});var p=u(a,(r[d]||{}).content,n);c[d].messages.push(p)})),c)c.hasOwnProperty(l)&&(c[l].warningCount=c[l].messages.reduce((function(e,t){var a=t.fatal,n=t.severity;return Object(i.b)(a,n)?e:e+1}),0),c[l].errorCount=c[l].messages.reduce((function(e,t){var a=t.fatal,n=t.severity;return Object(i.b)(a,n)?e+1:e}),0));return Object.values(c)})(a,t,e).forEach((function(e){var t=r[e.filePath];r[e.filePath]=t?{errorCount:t.errorCount+e.errorCount,warningCount:t.warningCount+e.warningCount,fixableErrorCount:t.fixableErrorCount+e.fixableErrorCount,fixableWarningCount:t.fixableWarningCount+e.fixableWarningCount,filePath:t.filePath,messages:[].concat(Object(n.a)(t.messages),Object(n.a)(e.messages))}:e}))}));var s=Object.values(r).reduce((function(e,t){return e.concat(t)}),[]);return Object(i.a)(s)}},176:function(e,t,a){"use strict";var n=a(18),r=a(55),s=a(56),c=a(60),i=a(57),o=a(9),l=a(59),u=a(0),d=a.n(u),m=a(402),p=a(25),f=a(20),g=a(161),h=a(43),b=a(35);var v=function(e){var t=e.report,a=e.highlightIssue;return d.a.createElement(d.a.Fragment,null,t.message&&d.a.createElement("div",{className:"row mt-3"},d.a.createElement("div",{className:"col-md-6 offset-md-3"},d.a.createElement("div",{className:"alert alert-success w-100",role:"alert"},t.message))),t.list&&d.a.createElement("div",{className:"row mt-3"},d.a.createElement("div",{className:"col-md-6 offset-md-3"},t.list.map((function(e,t){var n=e.errorCount+e.warningCount,r=function(e,t){return"".concat(e," ").concat(1===e?t:"".concat(t,"s"))};return d.a.createElement("div",{key:t,className:"border-bottom pt-2 pb-2"},d.a.createElement("div",{className:"text-truncate font-weight-bold"},e.filePath),e.messages.map((function(n,r){return d.a.createElement("div",{key:r,className:"pl-3"},n.error?d.a.createElement("div",{className:"alert alert-danger p-1"},n.error):d.a.createElement(d.a.Fragment,null,d.a.createElement("button",{type:"button",className:"btn ".concat(Object(b.b)(n.fatal,n.severity)?"btn-danger":"btn-warning"," text-left p-1 mb-1 w-100"),onClick:function(){a(e,n)}},"raw-bytecode"===n.sourceType&&d.a.createElement("span",{title:"raw-bytecode"},d.a.createElement(p.a,{className:"float-right",style:{fontSize:10},icon:f.d})),d.a.createElement("span",{className:"pr-2"},"[".concat(n.line+1,":").concat(n.column,"]")),d.a.createElement("span",{title:"".concat(n.description),style:{cursor:"help"}},"".concat(n.message)),n.ruleId&&d.a.createElement(h.a,{id:"i".concat(t,"_").concat(r),href:n.ruleLink,className:"pl-1",target:"_blank",rel:"noopener noreferrer"},"[",n.ruleId,"]"))))})),!!n&&d.a.createElement("div",null,"\u2716 ".concat(r(n,"issue")," (").concat(r(e.errorCount,"error"),", ").concat(r(e.warningCount,"warning"),")")))})))))},y=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(c.a)(this,Object(i.a)(t).call(this,e))).state={address:e.address,pwd:e.pwd,creadOpen:"0x0000000000000000000000000000000000000000"===e.address,infoTooltipOpen:!1,analysisTooltipOpen:!1},a.saveCredentials=a.saveCredentials.bind(Object(o.a)(a)),a}return Object(l.a)(t,e),Object(s.a)(t,[{key:"saveCredentials",value:function(){var e=this.state,t=e.address,a=e.pwd;this.props.saveCredentials(t,a)}},{key:"render",value:function(){var e=this,t=this.state,a=t.address,r=t.pwd,s=t.creadOpen,c=t.infoTooltipOpen,i=t.analysisTooltipOpen,o=this.props,l=o.contractList,u=o.selected,h=o.isAnalyzig,b=o.analyses,y=o.reports,O=o.selectContract,w=o.analyze,E=o.addAlert,j=o.highlightIssue,C=o.clear,x=u.split("::"),k=Object(n.a)(x,1)[0];return d.a.createElement("div",{className:"container"},d.a.createElement("div",{className:"row border-bottom pb-3"},d.a.createElement("div",{className:"col-md-6 offset-md-3"},d.a.createElement("div",{className:"btn btn-light btn-block text-left rounded-0 border-0",style:{cursor:"pointer"},onClick:function(){e.setState({creadOpen:!s})}},"Credentials",d.a.createElement(p.a,{className:"ml-2",icon:f.e,id:"cred_info"}),d.a.createElement("div",{style:{position:"absolute",right:24,top:4}},s?d.a.createElement("span",{style:{fontSize:14,lineHeight:"16px",paddingRight:6}},"hide"):null,d.a.createElement(p.a,{icon:s?f.a:f.b,className:"pt-1"})),d.a.createElement(m.a,{placement:"right",isOpen:c,autohide:!1,target:"cred_info",toggle:function(){e.setState({infoTooltipOpen:!c})}},"In order to use MythX APIs you need to have credentials. You can use the trial credential, but analysis's result will be limited. In order to get credential you need to ",d.a.createElement("a",{href:"https://mythx.io/",target:"_blank",rel:"noopener noreferrer",className:"text-nowrap"},"sign up"))),d.a.createElement("div",{className:s?null:"collapse"},d.a.createElement("form",null,d.a.createElement("div",{className:"form-group"},d.a.createElement("label",{htmlFor:"address"},"Address"),d.a.createElement("input",{type:"text",className:"form-control",id:"address","aria-describedby":"emailHelp",placeholder:"Address",onChange:function(t){return e.setState({address:t.target.value})},defaultValue:a})),d.a.createElement("div",{className:"form-group"},d.a.createElement("label",{htmlFor:"pwd"},"Password"),d.a.createElement("input",{type:"password",className:"form-control",id:"pwd",placeholder:"Password",onChange:function(t){return e.setState({pwd:t.target.value})},defaultValue:r})),d.a.createElement("button",{type:"button",className:"btn btn-primary",onClick:this.saveCredentials},"Save"))))),d.a.createElement("div",{className:"row mt-3"},d.a.createElement("div",{className:"col-md-6 offset-md-3"},k?d.a.createElement(d.a.Fragment,null,d.a.createElement("div",{className:"d-flex pb-3"},d.a.createElement("div",{className:"w-100"},d.a.createElement("select",{className:"form-control",value:u,onChange:function(e){return O(e.target.value)},disabled:h},l.map((function(e,t){return d.a.createElement("option",{key:t,value:e},e)})))),d.a.createElement("div",{className:"flex-shrink-1"},d.a.createElement("button",{type:"button",className:"form-control btn ml-2",title:"Clear",onClick:C,disabled:h},d.a.createElement(p.a,{icon:f.f})))),d.a.createElement("div",null,d.a.createElement("button",{type:"button",className:"btn btn-primary",onClick:w,disabled:h},h?d.a.createElement("span",{className:"spinner-border spinner-border-sm",role:"status","aria-hidden":"true"}):d.a.createElement("span",null,"Analyze")),h?d.a.createElement("div",{style:{fontSize:14,fontWeight:"bold"}},"We are analyzing your contract. This should take up to 2 minutes"):d.a.createElement(d.a.Fragment,null,d.a.createElement(p.a,{className:"ml-2",icon:f.e,id:"analysis_info"}),d.a.createElement(m.a,{placement:"right",isOpen:i,autohide:!0,target:"analysis_info",toggle:function(){e.setState({analysisTooltipOpen:!i})}},"Analysis can take couple of minutes")),b[u]&&d.a.createElement(g.CopyToClipboard,{text:JSON.stringify(b[u]),onCopy:function(){return E("success","Copied")}},d.a.createElement("button",{type:"button",className:"btn float-right",title:"Copy raw report to clipboard"},d.a.createElement(p.a,{className:"ml-2",icon:f.c}),d.a.createElement("span",{className:"pl-1"},"Raw report"))))):d.a.createElement("div",{className:"alert alert-warning w-100",role:"alert"},"You need to compile your contract first!"))),d.a.createElement(v,{report:y[u]||{},highlightIssue:j}))}}]),t}(d.a.Component);t.a=y},178:function(e,t,a){e.exports=a(401)},185:function(e,t,a){},211:function(e,t){},213:function(e,t){},250:function(e,t){},251:function(e,t){},35:function(e,t,a){"use strict";a.d(t,"b",(function(){return c})),a.d(t,"a",(function(){return i}));var n=a(14),r=a(61);function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}var c=function(e,t){return e||2===t},i=function(e){return e.map((function(e){var t=e.messages,a=Object(r.a)(e,["messages"]),i=function(e){return e.map((function(e){return JSON.stringify(e)})).reduce((function(e,t){return-1===e.indexOf(t)&&e.push(t),e}),[]).map((function(e){return JSON.parse(e)}))}(t),o=function(e){return e.reduce((function(e,t){var a=t.fatal,n=t.severity;return c(a,n)?e:e+1}),0)}(i);return function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(a,!0).forEach((function(t){Object(n.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({},a,{messages:i,errorCount:function(e){return e.reduce((function(e,t){var a=t.fatal,n=t.severity;return c(a,n)?e+1:e}),0)}(i),warningCount:o})}))}},401:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(32),c=a.n(s),i=(a(185),a(157));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(i.a,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},43:function(e,t,a){"use strict";var n=a(18),r=a(61),s=a(0),c=a.n(s),i=a(402);t.a=function(e){var t=e.children,a=Object(r.a)(e,["children"]),o=Object(s.useState)(!1),l=Object(n.a)(o,2),u=l[0],d=l[1];return c.a.createElement(c.a.Fragment,null,c.a.createElement("a",a,t),c.a.createElement(i.a,{placement:"top",isOpen:u,target:a.id,toggle:function(){d(!u)}},"CTRL + Click"))}},58:function(e,t,a){"use strict";var n=a(0),r=a.n(n),s=a(43),c=a(86);t.a=function(e){var t=e.isPlugin;return r.a.createElement("div",{className:"position-absolute text-center w-100 pb-1".concat(t?"":" text-white"),style:{fontSize:12,bottom:0}},r.a.createElement(s.a,{id:"version",href:"https://github.com/aquiladev/remix-mythx-plugin/releases/tag/".concat(c.version),target:"_block",rel:"noopener noreferrer"},c.version)," | ",r.a.createElement(s.a,{id:"support",href:"https://discord.gg/VhdtjCh",target:"_blank",rel:"noopener noreferrer"},"Get support"))}},86:function(e){e.exports=JSON.parse('{"name":"remix-mythx-plugin","version":"0.1.8","private":true,"dependencies":{"@fortawesome/fontawesome-svg-core":"1.2.19","@fortawesome/free-solid-svg-icons":"5.9.0","@fortawesome/react-fontawesome":"0.1.4","@remixproject/plugin":"0.1.14","bootstrap":"4.3.1","eslint":"6.3.0","keccakjs":"0.2.3","mythxjs":"1.3.5","react":"16.8.6","react-bs-notifier":"5.0.0","react-copy-to-clipboard":"5.0.1","react-dom":"16.8.6","react-scripts":"3.1.1","reactstrap":"8.0.0","remix-lib":"0.4.12"},"devDependencies":{"release-it":"12.3.6"},"scripts":{"start":"react-scripts start","build":"react-scripts build","test":"react-scripts test","eject":"react-scripts eject","release":"release-it --no-npm.publish --github.release"},"eslintConfig":{"extends":"react-app"},"browserslist":{"production":[">0.2%","not dead","not op_mini all"],"development":["last 1 chrome version","last 1 firefox version","last 1 safari version"]}}')}},[[178,1,2]]]);
//# sourceMappingURL=main.051cc177.chunk.js.map