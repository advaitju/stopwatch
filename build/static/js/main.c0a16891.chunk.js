(this.webpackJsonpstopwatch=this.webpackJsonpstopwatch||[]).push([[0],{16:function(t,e,n){},20:function(t,e,n){},21:function(t,e,n){},23:function(t,e,n){"use strict";n.r(e);var a=n(2),c=n.n(a),i=n(8),o=n.n(i),r=(n(16),n(4)),l=n(5),s=n(7),u=n(6),m=n(9),b=(n(20),n(21),n(1)),j=function(t){Object(s.a)(n,t);var e=Object(u.a)(n);function n(t){var a;return Object(r.a)(this,n),(a=e.call(this,t)).toggleState=function(){a.setState((function(t){var e={};return t.runningState?(e.runningState=!1,e.startTime=null):(e.runningState=!0,e.startTime=new Date-t.totalTime,setTimeout(a.updateTimeTimeout,10)),e}))},a.updateTimeTimeout=function(){a.state.runningState&&(a.updateTime(),setTimeout(a.updateTimeTimeout,10))},a.updateTime=function(){var t=new Date;a.setState((function(e){return{totalTime:t-e.startTime}}))},a.clearTimer=function(){var t=new Date;a.setState({startTime:t,totalTime:0})},a.keyDown=function(t){32===t.keyCode&&a.toggleState()},a.state={startTime:null,runningState:!1,totalTime:0},a}return Object(l.a)(n,[{key:"render",value:function(){var t=this,e=this.state.totalTime;return Object(b.jsxs)("div",{className:"stopwatch",children:[Object(b.jsxs)("div",{className:"time",onClick:this.toggleState,onKeyDown:function(e){return t.keyDown(e)},role:"button",tabIndex:"-1",children:[new Date(e).toISOString().substr(11,8),Object(b.jsx)("span",{className:"hundred-milliseconds",children:new Date(e).toISOString().substr(20,1)})]}),Object(b.jsx)("button",{className:"timer-button toggle-timer",type:"button",onClick:this.toggleState,children:"Toggle"}),Object(b.jsx)("button",{className:"timer-button clear-timer",type:"button",onClick:this.clearTimer,children:"Reset"})]})}}]),n}(a.Component),h=function(t){Object(s.a)(n,t);var e=Object(u.a)(n);function n(){var t;Object(r.a)(this,n);for(var a=arguments.length,c=new Array(a),i=0;i<a;i++)c[i]=arguments[i];return(t=e.call.apply(e,[this].concat(c))).toggleAll=function(){document.querySelectorAll(".time").forEach((function(t){t.click()}))},t.clearAll=function(){document.querySelectorAll(".clear-timer").forEach((function(t){t.click()}))},t}return Object(l.a)(n,[{key:"render",value:function(){return Object(b.jsxs)("div",{className:"app",children:[Object(b.jsx)(m.a,{title:"Stopwatch"}),Object(b.jsxs)("div",{className:"stopwatches",children:[Object(b.jsx)("button",{className:"timer-button",type:"button",onClick:this.toggleAll,children:"Toggle all"}),Object(b.jsx)("button",{className:"timer-button clear-all",type:"button",onClick:this.clearAll,children:"Reset all"}),Object(b.jsx)(j,{}),Object(b.jsx)(j,{})]})]})}}]),n}(a.PureComponent),d=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,24)).then((function(e){var n=e.getCLS,a=e.getFID,c=e.getFCP,i=e.getLCP,o=e.getTTFB;n(t),a(t),c(t),i(t),o(t)}))};o.a.render(Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(h,{})}),document.getElementById("root")),d()}},[[23,1,2]]]);
//# sourceMappingURL=main.c0a16891.chunk.js.map