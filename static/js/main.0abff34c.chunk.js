(this["webpackJsonpmy-airport-app"]=this["webpackJsonpmy-airport-app"]||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var c=n(1),i=n.n(c),r=n(7),s=n.n(r),a=(n(13),n(14),n(4)),o=n(3),j=n(8),u=n(0);function l(e){var t=e.items,n=[],c=[];return t.map((function(e){n={type:e.type,Selection:e.Selection},c.push(n);var i=new Set(c.map((function(e){return JSON.stringify(e)})));t=Object(j.a)(i).map((function(e){return JSON.parse(e)}))})),Object(u.jsxs)(u.Fragment,{children:["Type:",Object(u.jsx)("ul",{children:t.map((function(t,n){return Object(u.jsxs)("li",{children:[Object(u.jsx)("input",{type:"checkbox",name:t.type,id:t.type,value:t.Selection,checked:!!t.Selection,onChange:function(){e.ToggleItem(t.type)}}),Object(u.jsx)("label",{htmlFor:t.type,children:t.type})]},n)}))})]})}function p(e){return Object(u.jsx)("div",{className:"itemData",children:e.items.map((function(e){return Object(u.jsx)("div",{children:!0===e.Selection&&(t=e,Object(u.jsxs)(u.Fragment,{children:[Object(u.jsxs)("span",{children:["  ",t.name," "]}),Object(u.jsxs)("span",{children:["  ",t.icao,"  "]}),Object(u.jsxs)("span",{children:["  ",t.iata,"  "]}),Object(u.jsxs)("span",{children:["  ",t.elevation," ft "]}),Object(u.jsxs)("span",{children:[" N ",t.latitude,"  "]}),Object(u.jsxs)("span",{children:[" W ",t.longitude,"  "]}),Object(u.jsxs)("span",{children:["  ",t.type," "]})]}))},e.id);var t}))})}function b(e){var t=e.items,n=Object(c.useState)(t),r=Object(o.a)(n,2),s=r[0],a=r[1];Object(c.useEffect)((function(){a(t),console.log("set ppl",s)}),[]);var j=i.a.useState(""),l=Object(o.a)(j,2),b=l[0],O=l[1],f=function(e){var n=["name","city","iata"],c=t.filter((function(t){return n.some((function(n){return t[n].includes(e)}))}));a(c),console.log("Filtered Data",s)};return Object(u.jsxs)("div",{className:"Div",children:[Object(u.jsx)("input",{type:"text",placeholder:"Search",value:b,onChange:function(e){O(e.target.value),f(e.target.value)}}),Object(u.jsx)(p,{items:""==b?t:s,results:s})]})}var O=function(e){var t=Object(c.useState)([]),n=Object(o.a)(t,2),i=n[0],r=n[1];return Object(c.useEffect)((function(){fetch("./airports.json").then((function(e){return e.json()})).then((function(e){r(e.map((function(e){return e?Object(a.a)(Object(a.a)({},e),{},{Selection:!0}):e})))}))}),[]),Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(l,{items:i,ToggleItem:function(e){console.log("ToggleNew",e);var t=i.map((function(t){return t.type===e?Object(a.a)(Object(a.a)({},t),{},{Selection:!t.Selection}):t}));r(t)}}),Object(u.jsx)(b,{items:i})]})};var f=function(){return Object(u.jsx)("div",{className:"App",children:Object(u.jsx)(O,{Airports:O})})},d=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(t){var n=t.getCLS,c=t.getFID,i=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),c(e),i(e),r(e),s(e)}))};s.a.render(Object(u.jsx)(i.a.StrictMode,{children:Object(u.jsx)(f,{})}),document.getElementById("root")),d()}},[[16,1,2]]]);
//# sourceMappingURL=main.0abff34c.chunk.js.map