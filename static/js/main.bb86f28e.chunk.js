(this["webpackJsonpmy-airport-app"]=this["webpackJsonpmy-airport-app"]||[]).push([[0],{13:function(e,t,c){},14:function(e,t,c){},16:function(e,t,c){"use strict";c.r(t);var n=c(1),i=c.n(n),s=c(7),r=c.n(s),j=(c(13),c(14),c(4)),a=c(3),l=c(8),o=c(0);function h(e){var t=e.items,c=[],n=[];return t.map((function(e){c={type:e.type,Selection:e.Selection},n.push(c);var i=new Set(n.map((function(e){return JSON.stringify(e)})));t=Object(l.a)(i).map((function(e){return JSON.parse(e)}))})),Object(o.jsxs)("div",{className:"checkbox",children:[Object(o.jsx)("h3",{children:"Type"}),Object(o.jsx)("ul",{children:t.map((function(t,c){return Object(o.jsx)("li",{children:Object(o.jsxs)("label",{htmlFor:t.type,children:[t.type,Object(o.jsx)("input",{type:"checkbox",name:t.type,id:t.type,value:t.Selection,checked:!!t.Selection,onChange:function(){e.ToggleItem(t.type)}})]})},c)}))})]})}function u(e){return Object(o.jsxs)("div",{className:"itemData",children:[Object(o.jsx)("div",{children:Object(o.jsxs)("ul",{className:"header",children:[Object(o.jsx)("li",{children:Object(o.jsx)("h4",{children:"Name"})}),Object(o.jsx)("li",{children:Object(o.jsx)("h4",{children:"ICAO"})}),Object(o.jsx)("li",{children:Object(o.jsx)("h4",{children:"IATA"})}),Object(o.jsx)("li",{children:Object(o.jsx)("h4",{children:"Elev"})}),Object(o.jsx)("li",{children:Object(o.jsx)("h4",{children:"Lat."})}),Object(o.jsx)("li",{children:Object(o.jsx)("h4",{children:"Long."})}),Object(o.jsx)("li",{children:Object(o.jsx)("h4",{children:"Type"})})]})}),e.items.map((function(e){return Object(o.jsx)("div",{children:!0===e.Selection&&(t=e,Object(o.jsxs)(o.Fragment,{children:[Object(o.jsxs)("span",{children:["  ",t.name," "]}),Object(o.jsxs)("span",{children:["  ",t.icao,"  "]}),Object(o.jsxs)("span",{children:["  ",t.iata,"  "]}),Object(o.jsxs)("span",{children:["  ",t.elevation," ft "]}),Object(o.jsxs)("span",{children:[" N ",t.latitude,"  "]}),Object(o.jsxs)("span",{children:[" W ",t.longitude,"  "]}),Object(o.jsxs)("span",{children:["  ",t.type," "]})]}))},e.id);var t}))]})}function b(e){var t=e.items,c=Object(n.useState)(t),s=Object(a.a)(c,2),r=s[0],j=s[1];Object(n.useEffect)((function(){j(t),console.log("set ppl",r)}),[]);var l=i.a.useState(""),h=Object(a.a)(l,2),b=h[0],O=h[1],d=function(e){var c=["name","city","iata"],n=t.filter((function(t){return c.some((function(c){return t[c].includes(e)}))}));j(n),console.log("Pof",r)};return Object(o.jsxs)("div",{className:"Div",children:[Object(o.jsxs)("div",{className:"search",children:[Object(o.jsx)("h3",{children:"Filter by Search"}),Object(o.jsx)("input",{type:"text",placeholder:"Search",value:b,onChange:function(e){O(e.target.value),d(e.target.value)}})]}),Object(o.jsx)(u,{items:""==b?t:r,results:r,className:"itemData"})]})}var O=function(e){var t=Object(n.useState)([]),c=Object(a.a)(t,2),i=c[0],s=c[1];return Object(n.useEffect)((function(){fetch("https://raw.githubusercontent.com/vatsal51/my-react-app/main/public/airports.json").then((function(e){return e.json()})).then((function(e){s(e.map((function(e){return e?Object(j.a)(Object(j.a)({},e),{},{Selection:!0}):e})))}))}),[]),Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(h,{items:i,ToggleItem:function(e){console.log("ToggleNew",e);var t=i.map((function(t){return t.type===e?Object(j.a)(Object(j.a)({},t),{},{Selection:!t.Selection}):t}));s(t)}}),Object(o.jsx)(b,{items:i})]})};var d=function(){return Object(o.jsx)("div",{className:"App box",children:Object(o.jsx)(O,{Airports:O})})},p=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,17)).then((function(t){var c=t.getCLS,n=t.getFID,i=t.getFCP,s=t.getLCP,r=t.getTTFB;c(e),n(e),i(e),s(e),r(e)}))};r.a.render(Object(o.jsx)(i.a.StrictMode,{children:Object(o.jsx)(d,{})}),document.getElementById("root")),p()}},[[16,1,2]]]);
//# sourceMappingURL=main.bb86f28e.chunk.js.map