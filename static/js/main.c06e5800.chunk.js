(this.webpackJsonpcovid2=this.webpackJsonpcovid2||[]).push([[0],{10:function(e,t,c){},12:function(e,t,c){"use strict";c.r(t);var n=c(1),d=c.n(n),i=c(3),r=c.n(i),j=(c(9),c(4)),s=(c(10),c(0));var o=function(){var e=Object(n.useState)([]),t=Object(j.a)(e,2),c=t[0],d=t[1];return Object(n.useEffect)((function(){fetch("https://api.covid19india.org/state_district_wise.json").then((function(e){e.json().then((function(e){d(e)}))}))}),[]),console.warn(c),Object(s.jsxs)("div",{className:"App",children:[Object(s.jsx)("h1",{children:"GET API CALL "}),Object(s.jsxs)("table",{children:[Object(s.jsx)("thead",{}),Object(s.jsxs)("tbody",{children:[Object(s.jsxs)("tr",{children:[Object(s.jsx)("td",{children:"notes"}),Object(s.jsx)("td",{children:"active"}),Object(s.jsx)("td",{children:"confirmed"}),Object(s.jsx)("td",{children:"migratedother"}),Object(s.jsx)("td",{children:"deceased"}),Object(s.jsx)("td",{children:"recovered"}),Object(s.jsx)("td",{children:"confirmed"}),Object(s.jsx)("td",{children:"deceased"}),Object(s.jsx)("td",{children:"recovered"})]}),[c].map((function(e){return Object(s.jsxs)("tr",{children:[Object(s.jsx)("td",{children:e.notes}),Object(s.jsx)("td",{children:e.active}),Object(s.jsx)("td",{children:e.confirmed}),Object(s.jsx)("td",{children:e.migratedother}),Object(s.jsx)("td",{children:e.deceased}),Object(s.jsx)("td",{children:e.recovered}),Object(s.jsx)("td",{children:e.confirmed}),Object(s.jsx)("td",{children:e.deceased}),Object(s.jsx)("td",{children:e.recovered})]})}))]})]})]})},h=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,13)).then((function(t){var c=t.getCLS,n=t.getFID,d=t.getFCP,i=t.getLCP,r=t.getTTFB;c(e),n(e),d(e),i(e),r(e)}))};r.a.render(Object(s.jsx)(d.a.StrictMode,{children:Object(s.jsx)(o,{})}),document.getElementById("root")),h()},9:function(e,t,c){}},[[12,1,2]]]);
//# sourceMappingURL=main.c06e5800.chunk.js.map