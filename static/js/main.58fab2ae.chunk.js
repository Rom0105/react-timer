(this["webpackJsonptest-react-timer-components"]=this["webpackJsonptest-react-timer-components"]||[]).push([[0],{10:function(t,e,n){t.exports={container:"App_container__2s9hZ",timer:"App_timer__17QTZ",title:"App_title__3jk8A",button:"App_button__3Hjfi",div:"App_div__2r8D7"}},31:function(t,e,n){},32:function(t,e,n){"use strict";n.r(e);var c=n(6),i=n.n(c),r=n(24),s=n.n(r),a=n(23),u=n(41),o=n(40),b=n(39),j=n(35),l=n(36),p=n(37),m=n(21),O=n(38),d=n.p+"static/media/timer.f479dc19.png",f=n(10),h=n.n(f),x=n(2);var _=function(){var t=Object(c.useState)(0),e=Object(a.a)(t,2),n=e[0],i=e[1],r=Object(c.useState)("stopTimer"),s=Object(a.a)(r,2),f=s[0],_=s[1],v=d;Object(c.useEffect)((function(){var t=new u.a;return Object(o.a)(1e3).pipe(Object(j.a)(t)).subscribe((function(){"startTimer"===f&&i((function(t){return t+1e3}))})),function(){t.next(),t.complete()}}),[f]);var N=Object(c.useRef)(null);return Object(c.useEffect)((function(){var t=Object(b.a)(N.current,"click"),e=t.pipe(Object(l.a)(300)),n=t.pipe(Object(p.a)(e),Object(m.a)((function(t){return t.length})),Object(O.a)((function(t){return 2===t}))).subscribe((function(){_("waitTimer")}));return function(){return n.unsubscribe()}}),[]),Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)("img",{src:v,alt:"timer",width:"700"}),Object(x.jsxs)("div",{className:h.a.container,children:[Object(x.jsx)("h1",{className:h.a.title,children:"Timer"}),Object(x.jsx)("div",{children:Object(x.jsxs)("span",{className:h.a.timer,children:['"',new Date(n).toISOString().slice(11,19),'"']})}),Object(x.jsxs)("div",{className:h.a.div,children:[Object(x.jsx)("button",{className:h.a.button,onClick:function(){return _("startTimer")},children:"Start"}),Object(x.jsx)("button",{className:h.a.button,onClick:function(){return _("stopTimer"),void i(0)},children:"Stop"}),Object(x.jsx)("button",{className:h.a.button,ref:N,children:"Wait"}),Object(x.jsx)("button",{className:h.a.button,onClick:function(){return i(0)},children:"Reset"})]})]})]})};n(30),n(31);s.a.render(Object(x.jsx)(i.a.StrictMode,{children:Object(x.jsx)(_,{})}),document.getElementById("root"))}},[[32,1,2]]]);
//# sourceMappingURL=main.58fab2ae.chunk.js.map