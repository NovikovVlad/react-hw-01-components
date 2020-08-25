(this["webpackJsonpreact-hw-01-components"]=this["webpackJsonpreact-hw-01-components"]||[]).push([[0],{11:function(n){n.exports=JSON.parse('{"name":"Jacques Gluke","tag":"jgluke","location":"Ocho Rios, Jamaica","avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/r_oy/128.jpg","stats":{"followers":5603,"views":4827,"likes":1308}}')},12:function(n){n.exports=JSON.parse('[{"id":"id-1","label":".docx","percentage":22},{"id":"id-2","label":".pdf","percentage":4},{"id":"id-3","label":".mp3","percentage":17},{"id":"id-4","label":".psd","percentage":47}]')},13:function(n,e,t){n.exports=t(21)},18:function(n,e,t){},21:function(n,e,t){"use strict";t.r(e);var a=t(0),r=t.n(a),l=t(7),i=t.n(l),o=(t(18),t(1)),c=t(2);function u(){var n=Object(o.a)(["\n  color: #1f3349;\n  font-size: 14px;\n  font-weight: 700;\n"]);return u=function(){return n},n}function f(){var n=Object(o.a)(["\n  color: #768696;\n  font-size: 12px;\n"]);return f=function(){return n},n}function s(){var n=Object(o.a)(["\n  display: flex;\n  list-style: none;\n  padding: 0;\n  margin: 0;\n  height: 74px;\n  border: 1px solid #e4e9f0;\n  background-color: #f3f6f9;\n\n  li {\n    display: flex;\n    width: 83px;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n  }\n\n  li + li {\n    border-left: 1px solid #e4e9f0;\n  }\n"]);return s=function(){return n},n}function p(){var n=Object(o.a)(["\n  margin: 0;\n  padding: 0;\n  color: #768696;\n  font-size: 14px;\n"]);return p=function(){return n},n}function d(){var n=Object(o.a)(["\n  margin: 0;\n  padding: 0;\n  color: #768696;\n  font-size: 14px;\n"]);return d=function(){return n},n}function m(){var n=Object(o.a)(["\n  color: #122236;\n  font-size: 18px;\n  font-weight: 700;\n  line-height: 32px;\n"]);return m=function(){return n},n}function x(){var n=Object(o.a)(["\n  padding: 30px;\n  width: 99px;\n  height: 99px;\n  border-radius: 50%;\n"]);return x=function(){return n},n}function g(){var n=Object(o.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"]);return g=function(){return n},n}function h(){var n=Object(o.a)(['\n  display: flex;\n  font-family: "Lato", sans-serif;\n  flex-direction: column;\n  justify-content: space-between;\n  width: 250px;\n  height: 330px;\n  box-shadow: 0 1px 3px rgba(191, 205, 222, 0.75);\n  background-color: #ffffff;\n  margin: 15px;\n']);return h=function(){return n},n}var b=c.a.div(h()),v=c.a.div(g()),w=c.a.img(x()),E=c.a.div(m()),j=c.a.p(d()),y=c.a.p(p()),O=c.a.ul(s()),k=c.a.span(f()),z=c.a.span(u()),J=function(n){var e=n.name,t=n.tag,a=n.location,l=n.avatar,i=n.stats;return r.a.createElement(b,null,r.a.createElement(v,null,r.a.createElement(w,{src:l,alt:"user avatar"}),r.a.createElement(E,null,e),r.a.createElement(j,null,t),r.a.createElement(y,null,a)),r.a.createElement(O,null,r.a.createElement("li",null,r.a.createElement(k,null,"Followers"),r.a.createElement(z,null," ",i.followers)),r.a.createElement("li",null,r.a.createElement(k,null,"Views"),r.a.createElement(z,null," ",i.views)),r.a.createElement("li",null,r.a.createElement(k,null,"Likes"),r.a.createElement(z,null," ",i.likes))))};function M(){var n=Object(o.a)(["\n  color: #ffffff;\n  font-size: 18px;\n  font-weight: 400;\n  line-height: 20px;\n  letter-spacing: 0.45px;\n"]);return M=function(){return n},n}function S(){var n=Object(o.a)(["\n  color: #ffffff;\n  font-size: 12px;\n  font-weight: 300;\n  line-height: 20px;\n  letter-spacing: 0.3px;\n"]);return S=function(){return n},n}function B(){var n=Object(o.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  width: 67px;\n  height: 60px;\n  align-items: center;\n  background: ",";\n"]);return B=function(){return n},n}function D(){var n=Object(o.a)(["\n  display: flex;\n  list-style: none;\n  padding: 0;\n  margin: 0;\n"]);return D=function(){return n},n}function F(){var n=Object(o.a)(["\n  margin: 0;\n  padding: 30px 0;\n  color: #475965;\n  font-size: 16px;\n  font-weight: 400;\n  text-transform: uppercase;\n  letter-spacing: 0.16px;\n  text-align: center;\n"]);return F=function(){return n},n}function L(){var n=Object(o.a)(["\n  width: 268px;\n  height: 130px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  box-shadow: 0 2px 2px rgba(2, 2, 2, 0.02);\n  background-color: #ffffff;\n  font-family: sans-serif;\n  margin: 15px;\n"]);return L=function(){return n},n}J.defaultProps={name:"Unknown",tag:"",location:"",avatar:"",stats:{followers:"",views:0,likes:0}};var N=c.a.section(L()),P=c.a.h2(F()),U=c.a.ul(D()),q=c.a.li(B(),(function(n){return n.background})),A=c.a.span(S()),C=c.a.span(M()),G=function(n){var e=n.title,t=n.stats,a=function(){for(var n="#",e=0;e<6;e++)n+="0123456789ABCDEF"[Math.floor(16*Math.random())];return n},l=t.map((function(n){return r.a.createElement(q,{key:n.id,background:a()},r.a.createElement(A,null,n.label),r.a.createElement(C,null,n.percentage))}));return r.a.createElement(N,null,r.a.createElement(P,null,e),r.a.createElement(U,null,l))};G.defaultProps={title:"Default",stats:[]};var I=t(11),R=t(12);var V=function(){return r.a.createElement("div",null,r.a.createElement(J,I),r.a.createElement(G,{title:"Upload stats",stats:R}))};i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(V,null)),document.getElementById("root"))}},[[13,1,2]]]);
//# sourceMappingURL=main.16f6ee45.chunk.js.map