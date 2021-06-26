(this["webpackJsonpjutro-medical"]=this["webpackJsonpjutro-medical"]||[]).push([[0],{48:function(e,n,t){},56:function(e,n,t){},58:function(e,n,t){"use strict";t.r(n);var c,i,r=t(2),o=t.n(r),a=t(38),s=t.n(a),j=(t(48),t(18)),d=t(7),l=t(72),u=t(74),b=t(71),p=t(43),x=t(75),h=t(31),m=t(73),O=Object(m.a)(c||(c=Object(h.a)(["\n  query {\n    continents {\n      name\n      code\n    }\n  }\n"]))),f=Object(m.a)(i||(i=Object(h.a)(["\n  query continent($code: ID!) {\n    continent(code: $code) {\n      name\n      countries {\n        name\n        emoji\n        languages {\n          name\n        }\n      }\n    }\n  }\n"]))),g=t(3);var v=function(){var e=Object(d.f)().code,n=Object(r.useState)({name:"",emoji:{},countries:[]}),t=Object(p.a)(n,2),c=t[0],i=t[1],o=Object(x.a)(f,{variables:{code:e}}),a=o.loading,s=o.error,j=o.data;return Object(r.useEffect)((function(){return j&&i({name:j.continent.name,emoji:j.continent.emoji,countries:j.continent.countries}),function(){i({name:"",emoji:{},countries:[]})}}),[j]),a?Object(g.jsx)("p",{children:"Loading..."}):s?Object(g.jsx)("p",{children:"Error :("}):Object(g.jsx)("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gridTemplateRows:"1fr 1fr 1fr",gap:"30px 15px",gridAutoFlow:"row",gridTemplateAreas:'\n          ". . ."\n          ". . ."\n          ". . ."\n        '},children:c.countries.map((function(e){var n=e.languages.map((function(e){return e.name})).slice(0,1);return Object(g.jsxs)("div",{style:{border:"1px solid black"},children:[Object(g.jsx)("div",{children:e.name}),Object(g.jsx)("div",{style:{marginBottom:"10px",marginTop:"10px"},children:e.emoji}),n]},e.name)}))})};var y=function(){var e=Object(d.g)().path,n=Object(x.a)(O),t=n.loading,c=n.error,i=n.data;if(t)return Object(g.jsx)("p",{children:"Loading..."});if(c)return Object(g.jsx)("p",{children:"Error :("});var r=i.continents.map((function(e,n){return Object(g.jsxs)(j.b,{to:"/continents/".concat(e.code),style:{border:"1px solid black",display:"flex",flexDirection:"column",alignContent:"center",width:"100px",height:"100px"},children:[Object(g.jsx)("div",{style:{height:"50%",display:"flex",alignItems:"center",justifyContent:"center"},children:e.name}),Object(g.jsx)("div",{style:{height:"50%",display:"flex",alignItems:"center",justifyContent:"center"},children:e.code})]},n)}));return Object(g.jsxs)("div",{style:{display:"flex",justifyContent:"center",flexWrap:"wrap"},children:[r,Object(g.jsx)("div",{style:{width:"100%",marginTop:"50px"},children:Object(g.jsx)(d.c,{children:Object(g.jsx)(d.a,{path:"".concat(e,"/:code"),children:Object(g.jsx)(v,{})})})})]})};var w=function(){return Object(g.jsx)(j.b,{to:"/continents",children:"All Continents"})},C=(t(56),new l.a({uri:"https://countries.trevorblades.com/",cache:new u.a}));var T=function(){return Object(g.jsx)(j.a,{children:Object(g.jsx)(b.a,{client:C,children:Object(g.jsx)("div",{className:"App",children:Object(g.jsxs)(d.c,{children:[Object(g.jsx)(d.a,{exact:!0,path:"/",component:w}),Object(g.jsx)(d.a,{path:"/continents",component:y}),Object(g.jsx)(d.a,{path:"/continents/:code",component:v})]})})})})},F=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,77)).then((function(n){var t=n.getCLS,c=n.getFID,i=n.getFCP,r=n.getLCP,o=n.getTTFB;t(e),c(e),i(e),r(e),o(e)}))};s.a.render(Object(g.jsx)(o.a.StrictMode,{children:Object(g.jsx)(T,{})}),document.getElementById("root")),F()}},[[58,1,2]]]);
//# sourceMappingURL=main.86b1a73a.chunk.js.map