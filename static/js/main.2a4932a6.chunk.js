(this.webpackJsonpdrum_machine_react=this.webpackJsonpdrum_machine_react||[]).push([[0],{11:function(e,r,t){"use strict";t.r(r);var c=t(1),d=t.n(c),n=t(3),a=t.n(n),i=(t(9),t(4)),s=[{keyCode:81,keyTrigger:"Q",id:"Heater-1",url:"https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"},{keyCode:87,keyTrigger:"W",id:"Heater-2",url:"https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"},{keyCode:69,keyTrigger:"E",id:"Heater-3",url:"https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"},{keyCode:65,keyTrigger:"A",id:"Heater-4",url:"https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"},{keyCode:83,keyTrigger:"S",id:"Clap",url:"https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"},{keyCode:68,keyTrigger:"D",id:"Open-HH",url:"https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"},{keyCode:90,keyTrigger:"Z",id:"Kick-n'-Hat",url:"https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"},{keyCode:88,keyTrigger:"X",id:"Kick",url:"https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"},{keyCode:67,keyTrigger:"C",id:"Closed-HH",url:"https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"}],o=t(0),m=function(){var e=Object(c.useState)(null),r=Object(i.a)(e,2),t=r[0],d=r[1];Object(c.useEffect)((function(){return document.addEventListener("keydown",(function(e){return n(e)})),document.removeEventListener("keydown",(function(e){return n(e)}))}),[]),Object(c.useEffect)((function(){setTimeout((function(){return d(null)}),1e3)}),[t]);var n=function(e){var r=s.find((function(r){return r.keyCode===e.keyCode}));r&&(d(r),document.getElementById(r.keyTrigger).play())};return Object(o.jsx)("div",{className:"App",children:Object(o.jsxs)("div",{id:"drum-machine",children:[Object(o.jsx)("div",{id:"display",children:Object(o.jsx)("p",{children:t&&t.id})}),Object(o.jsx)("div",{id:"drum-box",children:s.map((function(e){return Object(o.jsxs)("div",{className:"drum",onClick:function(){return function(e){document.getElementById(e.keyTrigger).play(),d(e)}(e)},children:[e.keyTrigger,Object(o.jsx)("audio",{className:"clip",id:e.keyTrigger,children:Object(o.jsx)("source",{src:e.url})})]},e.id)}))})]})})};a.a.render(Object(o.jsx)(d.a.StrictMode,{children:Object(o.jsx)(m,{})}),document.getElementById("root"))},9:function(e,r,t){}},[[11,1,2]]]);
//# sourceMappingURL=main.2a4932a6.chunk.js.map