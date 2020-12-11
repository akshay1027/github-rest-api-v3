(this["webpackJsonpgithub-rest-api-v3"]=this["webpackJsonpgithub-rest-api-v3"]||[]).push([[0],{29:function(e,t,s){},37:function(e,t,s){},38:function(e,t,s){},64:function(e,t,s){},67:function(e,t,s){"use strict";s.r(t);var c=s(0),r=s(2),n=s(30),a=s.n(n),l=(s(37),s(38),s(12)),i=s(68),j=s(69),d=s(70),h=s(71),b=s(72),o=s(78),x=s(73),O=s(74),u=s(13),m=s.n(u),g={getDetails:function(e){var t="https://api.github.com/users/".concat(e,"/repos"),s="https://api.github.com/users/".concat(e,"/gists"),c="https://api.github.com/users/".concat(e,"/followers"),r="https://api.github.com/users/".concat(e,"/following"),n="https://api.github.com/users/".concat(e,"/starred"),a="https://api.github.com/users/".concat(e),l=[m.a.get(t,{params:{per_page:100}}),m.a.get(s,{params:{per_page:100}}),m.a.get(c,{params:{per_page:100}}),m.a.get(r,{params:{per_page:100}}),m.a.get(n,{params:{per_page:100}}),m.a.get(a,{params:{per_page:100}})];return m.a.all(l).then(m.a.spread((function(){var t=arguments.length<=0?void 0:arguments[0],s=arguments.length<=1?void 0:arguments[1],c=arguments.length<=2?void 0:arguments[2],r=arguments.length<=3?void 0:arguments[3],n=arguments.length<=4?void 0:arguments[4],a=arguments.length<=5?void 0:arguments[5],l={username:e,repos:"OK"===t.statusText?t.data:null,gists:"OK"===s.statusText?s.data:null,followers:"OK"===c.statusText?c.data:null,following:"OK"===r.statusText?r.data:null,starred:"OK"===n.statusText?n.data:null,profile:"OK"===a.statusText?a.data:null};return l})),(function(e){return console.log(e)}))}},p=function(e){return e.data?Object(c.jsxs)("div",{children:[Object(c.jsx)("img",{src:e.data.profile.avatar_url,style:{width:"100px",height:"100px",borderRadius:"50%"},alt:""}),Object(c.jsx)("h2",{children:e.data&&e.data.profile.name}),Object(c.jsxs)("div",{className:"row",children:[Object(c.jsxs)("div",{className:"col-sm",children:[Object(c.jsxs)("h4",{children:["Total Repos: ",e.data&&e.data.repos.length]}),Object(c.jsxs)("table",{className:"table table-responsive",children:[Object(c.jsx)("thead",{children:Object(c.jsxs)("tr",{children:[Object(c.jsx)("th",{children:"S.No"}),Object(c.jsx)("th",{children:"Name of the Repo"}),Object(c.jsx)("th",{children:"Open Issues"}),Object(c.jsx)("th",{children:"Stars"}),Object(c.jsx)("th",{children:"Forks"})]})}),Object(c.jsx)("tbody",{children:e.data&&e.data.repos.map((function(e,t){return Object(c.jsxs)("tr",{children:[Object(c.jsx)("td",{children:t}),Object(c.jsx)("td",{children:Object(c.jsx)("a",{href:e.html_url,children:e.name})}),Object(c.jsx)("td",{children:Object(c.jsx)("a",{href:e.html_url+"/issues",children:e.open_issues_count})}),Object(c.jsx)("td",{children:e.stargazers_count}),Object(c.jsx)("td",{children:e.forks_count})]})}))})]})]}),Object(c.jsxs)("div",{className:"col-sm",children:[Object(c.jsxs)("h4",{children:["Total Following :",e.data&&e.data.following.length]}),Object(c.jsxs)("table",{className:"table table-responsive",children:[Object(c.jsx)("thead",{children:Object(c.jsxs)("tr",{children:[Object(c.jsx)("th",{children:"S.No"}),Object(c.jsx)("th",{children:"User"}),Object(c.jsx)("th",{children:"Name"})]})}),Object(c.jsx)("tbody",{children:e.data&&e.data.following.map((function(e,t){return Object(c.jsxs)("tr",{children:[Object(c.jsx)("td",{children:t}),Object(c.jsx)("td",{children:Object(c.jsx)("img",{src:e.avatar_url,style:{width:"40px",height:"40px"},alt:""})}),Object(c.jsx)("td",{children:Object(c.jsx)("a",{href:e.html_url,children:e.login})})]})}))})]}),Object(c.jsxs)("h4",{children:["Total Followers: ",e.data&&e.data.followers.length]}),Object(c.jsxs)("table",{className:"table table-responsive",children:[Object(c.jsx)("thead",{children:Object(c.jsxs)("tr",{children:[Object(c.jsx)("th",{children:"S.No"}),Object(c.jsx)("th",{children:"User"}),Object(c.jsx)("th",{children:"Name"})]})}),Object(c.jsx)("tbody",{children:e.data&&e.data.followers.map((function(e,t){return Object(c.jsxs)("tr",{children:[Object(c.jsx)("td",{children:t}),Object(c.jsx)("td",{children:Object(c.jsx)("img",{src:e.avatar_url,style:{width:"40px",height:"40px"},alt:""})}),Object(c.jsx)("td",{children:Object(c.jsx)("a",{href:e.html_url,children:e.login})})]})}))})]})]})]})]}):Object(c.jsxs)("div",{class:"jumbotron",children:[Object(c.jsx)("h1",{class:"display-4",children:"Hey, User!"}),Object(c.jsx)("p",{class:"lead",children:"Please Enter Your Username For Getting Stats!"})]})},f=(s(29),function(){var e=Object(r.useState)(""),t=Object(l.a)(e,2),s=t[0],n=t[1],a=Object(r.useState)(null),u=Object(l.a)(a,2),m=u[0],f=u[1],v=Object(r.useState)(!1),N=Object(l.a)(v,2),y=N[0],w=N[1];return Object(c.jsx)("div",{className:"w-100",children:Object(c.jsxs)("main",{className:"Main border container-fluid bg-light p-md-5 pt-3 align-items-center",children:[Object(c.jsx)(i.a,{onSubmit:function(e){e.preventDefault(),w(!0),g.getDetails(s).then((function(e){return w(!1),f(e),e})).then((function(e){return console.log(e)})).catch((function(e){return console.log(e)}))},children:Object(c.jsxs)(j.a,{row:!0,children:[Object(c.jsx)(d.a,{for:"username",className:"offset-md-1",xs:12,md:1,children:Object(c.jsx)("span",{className:"float-left float-md-right",children:"Username: "})}),Object(c.jsx)(h.a,{xs:12,md:8,className:"mb-2 mb-md-0",children:Object(c.jsxs)(b.a,{children:[Object(c.jsx)(o.a,{addonType:"prepend",children:Object(c.jsx)(x.a,{className:"bg-light text-dark font-weight-bold border",children:"@"})}),Object(c.jsx)(O.a,{type:"text",required:!0,value:s,onChange:function(e){return n(e.target.value)}})]})}),Object(c.jsx)(h.a,{xs:12,md:2,className:"mb-1 mb-md-0",children:Object(c.jsx)(x.a,{block:!0,type:"submit",color:"primary",children:"Submit"})})]})}),y?Object(c.jsx)("div",{class:"spinner-border",role:"status",children:Object(c.jsx)("span",{class:"sr-only",children:"Loading..."})}):Object(c.jsx)(p,{data:m})]})})}),v=s(75),N=s(76),y=s(7),w=function(){var e=Object(y.e)();return Object(c.jsx)("header",{children:Object(c.jsxs)(v.a,{color:"primary",dark:!0,children:[Object(c.jsx)(N.a,{href:"./",children:"GitHub API Playground"}),Object(c.jsx)("button",{className:"btn btn-success",onClick:function(){e.push("/github-rest-api-v3/compare")},children:"Compare Users"})]})})},S=s(77),_=(s(64),function(){return Object(c.jsx)("footer",{className:"align-items-center bg-primary",children:Object(c.jsx)("div",{className:"container",children:Object(c.jsx)(S.a,{className:"p-4 text-white",children:Object(c.jsxs)(h.a,{className:"offset-md-2",md:8,children:["\xa9 ",Object(c.jsx)("a",{href:"https://adityabisoi.github.io/",rel:"noreferrer",target:"_blank",children:"Aditya Bisoi"})]})})})})}),T=function(){var e=Object(r.useState)(""),t=Object(l.a)(e,2),s=t[0],n=t[1],a=Object(r.useState)(""),u=Object(l.a)(a,2),m=u[0],p=u[1],f=Object(r.useState)(""),v=Object(l.a)(f,2),N=v[0],y=v[1],w=Object(r.useState)(""),S=Object(l.a)(w,2),_=S[0],T=S[1],k=Object(r.useState)("0"),F=Object(l.a)(k,2),C=F[0],U=F[1];return Object(c.jsx)("div",{className:"main",style:{background:"#fff",boxShadow:"1px solid #333",margin:"20pt",padding:"20pt"},children:Object(c.jsxs)("div",{className:"form",children:[Object(c.jsx)(i.a,{onSubmit:function(e){U("1"),e.preventDefault(),console.log("isloading",C),g.getDetails(s).then((function(e){return y(e),U("0"),e})).then((function(e){return console.log("data 1",e)})).catch((function(e){return console.log(e)})),g.getDetails(m).then((function(e){return T(e),e})).then((function(e){return console.log("data2",e)})).catch((function(e){return console.log(e)}))},children:Object(c.jsxs)(j.a,{row:!0,children:[Object(c.jsx)(d.a,{for:"username1",className:"offset-md-1",children:Object(c.jsx)("span",{className:"float-left float-md-right",children:"Username 1: "})}),Object(c.jsx)(h.a,{className:"mb-2 mb-md-0",children:Object(c.jsxs)(b.a,{children:[Object(c.jsx)(o.a,{addonType:"prepend",children:Object(c.jsx)(x.a,{className:"bg-light text-dark font-weight-bold border",children:"@"})}),Object(c.jsx)(O.a,{type:"text",required:!0,value:s,onChange:function(e){return n(e.target.value)}})]})}),Object(c.jsx)(d.a,{for:"username2",className:"offset-md-1",children:Object(c.jsx)("span",{className:"float-left float-md-right",children:"Username 2: "})}),Object(c.jsx)(h.a,{className:"mb-2 mb-md-0",children:Object(c.jsxs)(b.a,{children:[Object(c.jsx)(o.a,{addonType:"prepend",children:Object(c.jsx)(x.a,{className:"bg-light text-dark font-weight-bold border",children:"@"})}),Object(c.jsx)(O.a,{type:"text",required:!0,value:m,onChange:function(e){return p(e.target.value)}})]})}),Object(c.jsx)(h.a,{xs:12,md:2,className:"mb-1 mb-md-0",children:Object(c.jsx)(x.a,{block:!0,type:"submit",color:"primary",children:"Submit"})})]})}),"1"===C?Object(c.jsx)("div",{class:"d-flex justify-content-center",children:Object(c.jsx)("div",{class:"spinner-border",role:"status",children:Object(c.jsx)("span",{class:"sr-only",children:"Loading..."})})}):N&&_?Object(c.jsx)("div",{className:"comparisonTable",style:{textAlign:"center"},children:Object(c.jsxs)("table",{className:"table table-responsive table-hover ",style:{display:"inline"},children:[Object(c.jsx)("thead",{children:Object(c.jsxs)("tr",{children:[Object(c.jsx)("th",{children:"Feature :"}),Object(c.jsx)("th",{children:s}),Object(c.jsx)("th",{children:m})]})}),Object(c.jsxs)("tbody",{children:[Object(c.jsxs)("tr",{children:[Object(c.jsx)("td",{children:"Followers"}),Object(c.jsx)("td",{children:N.followers.length}),Object(c.jsx)("td",{children:_.followers.length})]}),Object(c.jsxs)("tr",{children:[Object(c.jsx)("td",{children:"Following"}),Object(c.jsx)("td",{children:N.following.length}),Object(c.jsx)("td",{children:_.following.length})]}),Object(c.jsxs)("tr",{children:[Object(c.jsx)("td",{children:"Gists"}),Object(c.jsx)("td",{children:N.gists.length}),Object(c.jsx)("td",{children:_.gists.length})]}),Object(c.jsxs)("tr",{children:[Object(c.jsx)("td",{children:"Repos"}),Object(c.jsx)("td",{children:N.repos.length}),Object(c.jsx)("td",{children:_.repos.length})]}),Object(c.jsxs)("tr",{children:[Object(c.jsx)("td",{children:"Starred"}),Object(c.jsx)("td",{children:N.starred.length}),Object(c.jsx)("td",{children:_.starred.length})]})]})]})}):""]})})},k=function(){return Object(c.jsxs)("div",{className:"App",children:[Object(c.jsx)(w,{}),Object(c.jsx)(y.a,{exact:!0,path:"/github-rest-api-v3/",children:Object(c.jsx)(f,{})}),Object(c.jsx)(y.a,{path:"/github-rest-api-v3/compare",children:Object(c.jsx)(T,{})}),Object(c.jsx)(_,{})]})},F=(s(65),s(66),function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,79)).then((function(t){var s=t.getCLS,c=t.getFID,r=t.getFCP,n=t.getLCP,a=t.getTTFB;s(e),c(e),r(e),n(e),a(e)}))}),C=s(15);a.a.render(Object(c.jsx)(C.a,{children:Object(c.jsx)(k,{})}),document.getElementById("root")),F()}},[[67,1,2]]]);
//# sourceMappingURL=main.28c6e4e3.chunk.js.map