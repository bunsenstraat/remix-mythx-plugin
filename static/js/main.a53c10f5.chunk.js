(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{165:function(e,t,a){e.exports=a.p+"static/media/remix.0cc3e824.svg"},166:function(e,t,a){e.exports=a.p+"static/media/mythx.5fc6cc7c.png"},167:function(e,t,a){e.exports=a.p+"static/media/plus.bd770134.svg"},171:function(e,t,a){e.exports=a(428)},176:function(e,t,a){},195:function(e,t){},197:function(e,t){},229:function(e,t){},230:function(e,t){},299:function(e,t){},428:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(162),c=a.n(s),i=(a(176),a(62)),o=a(63),l=a(66),u=a(64),m=a(65),d=a(94),p=(a(177),a(27)),f=a.n(p),h=a(95),v=a(35),g=a(163),y=a.n(g),b=a(168),w=a(164),E=a.n(w),N=a(169),C=a(170),x=function(e,t){return e||2===t},k=function(e){return e.map(function(e){var t=e.messages,a=Object(C.a)(e,["messages"]),n=function(e){return e.map(function(e){return JSON.stringify(e)}).reduce(function(e,t){return-1===e.indexOf(t)&&e.push(t),e},[]).map(function(e){return JSON.parse(e)})}(t),r=function(e){return e.reduce(function(e,t){var a=t.fatal,n=t.severity;return x(a,n)?e:e+1},0)}(n),s=function(e){return e.reduce(function(e,t){var a=t.fatal,n=t.severity;return x(a,n)?e+1:e},0)}(n);return Object(N.a)({},a,{messages:n,errorCount:s,warningCount:r})})},O={High:2,Medium:1},j=new E.a,S=function(e,t){var a;a=e.swcID?"https://smartcontractsecurity.github.io/SWC-registry/docs/"+e.swcID:"N/A";var n,r,s={fatal:!1,ruleId:e.swcID,ruleLink:a,message:"".concat(e.description.head),description:"".concat(e.description.tail),severity:O[e.severity]||1,mythXseverity:e.severity,line:-1,column:0,endLine:-1,endCol:0},c=j.getLinebreakPositions(t);if(e.locations.length){var i=function(e,t){var a=e.split(":"),n={length:parseInt(a[1],10),start:parseInt(a[0],10)},r=j.convertOffsetToLineColumn(n,t);return[r.start,r.end]}(e.locations[0].sourceMap.split(";")[0],c),o=Object(b.a)(i,2);n=o[0],r=o[1]}return n&&(s.line=n.line,s.column=n.column,s.endLine=r.line,s.endCol=r.column),s},A=function(e,t){var a=t.map(function(t){return function(e,t){var a=e.issues,n=e.sourceList,r={};for(var s in a.map(function(e){var a=function(e){if(e.locations.length){var t=/(\d+):(\d+):(\d+)/g.exec(e.locations[0].sourceMap);return t?t[3]:0}return 0}(e),s=n[a].replace(/^\//,"");r[s]||(r[s]={errorCount:0,warningCount:0,fixableErrorCount:0,fixableWarningCount:0,filePath:s,messages:[]}),r[s].messages.push(S(e,t.sources[s].content))}),r)r.hasOwnProperty(s)&&(r[s].warningCount=r[s].messages.reduce(function(e,t){var a=t.fatal,n=t.severity;return x(a,n)?e:e+1},0),r[s].errorCount=r[s].messages.reduce(function(e,t){var a=t.fatal,n=t.severity;return x(a,n)?e+1:e},0));return Object.values(r)}(t,e)}).reduce(function(e,t){return e.concat(t)},[]);return k(a)},I="remix-mythx-plugin",L={address:"0x0000000000000000000000000000000000000000",pwd:"trial"},z=function(e){function t(e){var a;Object(i.a)(this,t),a=Object(l.a)(this,Object(u.a)(t).call(this,e));var n=localStorage.getItem(I)||"{}",r=JSON.parse(n);return a.state={address:r.address||L.address,pwd:r.pwd||L.pwd,compilation:{},selected:"",isAnalyzig:!1,analysis:{},report:{},error:""},a.saveCredentials=a.saveCredentials.bind(Object(v.a)(a)),a.analyze=a.analyze.bind(Object(v.a)(a)),a.getContractList=a.getContractList.bind(Object(v.a)(a)),a.props.client.on("solidity","compilationFinished",function(e,t,n,r){var s=Object.keys(r.contracts[e]);a.setState({compilation:{target:e,source:t,version:n,data:r},selected:s[0]})}),a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"saveCredentials",value:function(){var e=this.state,t=e.address,a=e.pwd;localStorage.setItem(I,JSON.stringify({address:t,pwd:a}))}},{key:"analyze",value:function(){var e=Object(h.a)(f.a.mark(function e(){var t,a,n,r,s,c=this;return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.state,a=t.address,n=t.pwd,r=t.compilation,s=new y.a.Client({ethAddress:a,password:n}),this.setState({analysis:{},error:"",isAnalyzig:!0}),e.next=5,this.props.client.editor.discardHighlight();case 5:s.analyzeWithStatus({data:this.getRequestData(),clientToolName:"remythx"}).then(function(e){c.setState({analysis:e,error:"",isAnalyzig:!1});var t=e.issues;c.handleResult(r.source,t)}).catch(function(e){c.setState({error:e.message||e,analysis:{},isAnalyzig:!1})});case 6:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"getRequestData",value:function(){var e=this.state,t=e.compilation,a=e.selected,n=t.data,r=void 0===n?{}:n,s=t.source,c=void 0===s?{}:s,i=r.contracts,o=void 0===i?[]:i,l=o[t.target][a].evm.bytecode,u=o[t.target][a].evm.deployedBytecode,m={contractName:a,bytecode:l.object,sourceMap:l.sourceMap,deployedBytecode:u.object,deployedSourceMap:u.sourceMap,analysisMode:"quick",mainSource:t.target,sourceList:Object.keys(c.sources),sources:{}};for(var d in c.sources)c.sources.hasOwnProperty(d)&&(m.sources[d]={source:c.sources[d].content});return m}},{key:"handleResult",value:function(e,t){var a=this.state.compilation,n=A(e,t);0===n.length?this.setState({report:{message:"\u2714 No errors/warnings found in ".concat(a.target)}}):this.setState({report:{list:n}})}},{key:"getContractList",value:function(){var e=this.state.compilation,t=e.data,a=(void 0===t?{}:t).contracts,n=(void 0===a?[]:a)[e.target]||{};return Object.keys(n).map(function(t){return{name:t,path:"".concat(e.target,"::").concat(t)}})}},{key:"highlightIssue",value:function(){var e=Object(h.a)(f.a.mark(function e(t,a){var n,r;return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n={start:{line:a.line,column:a.column},end:{line:a.endLine,column:a.endCol}},r=1===a.severity?"#ffd300":"#ff0000",e.next=4,this.props.client.editor.highlight(n,t.filePath,r);case 4:case"end":return e.stop()}},e,this)}));return function(t,a){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=this.state,a=t.compilation,n=t.selected,s=t.isAnalyzig,c=t.error,i=t.report;return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row border-bottom pb-3"},r.a.createElement("div",{className:"col-md-6 offset-md-3"},r.a.createElement("form",null,r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"address"},"Address"),r.a.createElement("input",{type:"text",className:"form-control",id:"address","aria-describedby":"emailHelp",placeholder:"Address",onChange:function(t){return e.setState({address:t.target.value})},defaultValue:this.state.address})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"pwd"},"Password"),r.a.createElement("input",{type:"password",className:"form-control",id:"pwd",placeholder:"Password",onChange:function(t){return e.setState({pwd:t.target.value})},defaultValue:this.state.pwd})),r.a.createElement("button",{type:"button",className:"btn btn-primary",onClick:this.saveCredentials},"Save")))),r.a.createElement("div",{className:"row mt-3"},r.a.createElement("div",{className:"col-md-6 offset-md-3"},a.target?r.a.createElement("form",null,r.a.createElement("div",{className:"form-group"},r.a.createElement("select",{className:"form-control",defaultValue:n,onChange:function(t){return e.setState({selected:t.target.value})}},this.getContractList().map(function(e,t){return r.a.createElement("option",{key:t,value:e.name},e.path)}))),r.a.createElement("button",{type:"button",className:"btn btn-primary",onClick:this.analyze,disabled:s},s?r.a.createElement("span",{className:"spinner-border spinner-border-sm",role:"status","aria-hidden":"true"}):r.a.createElement("span",null,"Analyze"))):r.a.createElement("div",{className:"alert alert-warning w-100",role:"alert"},"You need to compile your contract first!"))),c?r.a.createElement("div",{className:"row mt-3"},r.a.createElement("div",{className:"col-md-6 offset-md-3"},r.a.createElement("div",{className:"alert alert-danger w-100",role:"alert"},c))):null,i.message?r.a.createElement("div",{className:"row mt-3"},r.a.createElement("div",{className:"col-md-6 offset-md-3"},r.a.createElement("div",{className:"alert alert-success w-100",role:"alert"},i.message))):null,i.list?r.a.createElement("div",{className:"row mt-3"},r.a.createElement("div",{className:"col-md-6 offset-md-3"},i.list.map(function(t,a){var n=t.errorCount+t.warningCount,s=function(e,t){return"".concat(e," ").concat(1===e?t:"".concat(t,"s"))};return r.a.createElement("div",{key:a,className:"border-bottom pt-2 pb-2"},r.a.createElement("div",null,t.filePath),t.messages.map(function(a,n){return r.a.createElement("div",{key:n,className:"pl-3"},r.a.createElement("button",{type:"button",className:"btn btn-link p-0 pr-1",onClick:function(){e.highlightIssue(t,a)}},"[".concat(a.line+1,":").concat(a.column,"]")),r.a.createElement("span",{title:"".concat(a.description),style:{cursor:"help"}},"".concat(a.message)),a.ruleId?r.a.createElement("a",{href:a.ruleLink,className:"pl-1"},"[",a.ruleId,"]"):null)}),r.a.createElement("div",null,"\u2716 ".concat(s(n,"problem")," (").concat(s(t.errorCount,"error"),", ").concat(s(t.warningCount,"warning"),")")))}))):null)}}]),t}(r.a.Component),M=a(165),P=a.n(M),J=a(166),B=a.n(J),D=a(167),W=a.n(D),q={},F=function(e){function t(e){var a;Object(i.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={plugin:!1};return(q=Object(d.createIframeClient)({customApi:d.remixApi,devMode:{port:8080}})).onload(function(){a.setState({plugin:!0})}),a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.state.plugin;return r.a.createElement(r.a.Fragment,null,e?r.a.createElement(z,{client:q}):r.a.createElement("div",{className:"h-100",style:{background:"#012A3E"}},r.a.createElement("div",{className:"d-flex align-items-end flex-column",style:{height:"50%"}},r.a.createElement("div",{className:"mt-auto pb-5 w-100"},r.a.createElement("h1",{className:"display-1 text-white",style:{textAlign:"center"}},"re:MythX"))),r.a.createElement("div",{className:"text-center pt-4"},r.a.createElement("a",{href:"https://remix.ethereum.org",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("img",{src:P.a,alt:"remix",style:{height:120,width:120,verticalAlign:"top"}})),r.a.createElement("img",{src:W.a,alt:"plus",className:"pl-5 pr-5",style:{height:100,width:140}}),r.a.createElement("a",{href:"https://mythx.io/",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("img",{src:B.a,alt:"mythx",style:{height:130,width:180,verticalAlign:"top"}})))),r.a.createElement("div",{className:"fixed-bottom text-center pb-1".concat(e?null:" text-white"),style:{fontSize:12}},"\xa9 Sergii Bomko, 2019 | ",r.a.createElement("a",{href:"https://github.com/aquiladev/remix-mythx-plugin"},"GitHub")))}}]),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(F,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[171,1,2]]]);
//# sourceMappingURL=main.a53c10f5.chunk.js.map