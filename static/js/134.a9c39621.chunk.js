"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[134],{134:function(e,t,r){r.r(t);var n=r(861),a=r(439),u=r(757),c=r.n(u),s=r(791),i=r(451),o=r(174),l=r(784),f=r(87),h=r(689),p=r(184);t.default=function(){var e=(0,f.lr)(),t=(0,a.Z)(e,2),r=t[0],u=t[1],m=(0,s.useState)(""),v=(0,a.Z)(m,2),d=v[0],x=v[1],k=(0,s.useState)([]),j=(0,a.Z)(k,2),b=j[0],g=j[1],w=(0,s.useState)(!1),y=(0,a.Z)(w,2),S=y[0],Z=y[1],_=(0,h.TH)(),q=r.get("query");(0,s.useEffect)((function(){if(q){var e=function(){var e=(0,n.Z)(c().mark((function e(){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,Z(!0),e.next=4,i.Z.get("/search/movie",{params:{query:q}});case 4:t=e.sent,g(t.data.results),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),(0,o.Am)("Error searching movies: ".concat(e.t0.message));case 11:return e.prev=11,Z(!1),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[0,8,11,14]])})));return function(){return e.apply(this,arguments)}}();e()}}),[q]);return(0,p.jsx)("div",{children:(0,p.jsxs)("form",{onSubmit:function(e){e.preventDefault(),u({query:d})},children:[(0,p.jsx)("input",{type:"text",name:"searchInput",placeholder:"Search movie",value:d,onChange:function(e){return x(e.target.value)}}),(0,p.jsx)("button",{type:"submit",children:"Search"}),S&&(0,p.jsx)(l.a,{}),b.map((function(e){return(0,p.jsx)("li",{children:(0,p.jsx)(f.rU,{state:{from:_},to:"/movies/".concat(e.id),children:e.title})},e.id)}))]})})}}}]);
//# sourceMappingURL=134.a9c39621.chunk.js.map