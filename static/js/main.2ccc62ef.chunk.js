(this.webpackJsonpcalculator_project=this.webpackJsonpcalculator_project||[]).push([[0],[,,,function(e,t,c){e.exports={button:"button_button__3Pz0r",black:"button_black__3RnQ0",brown:"button_brown__2f98C",yellow:"button_yellow__vLuNc",green:"button_green__13sp-",powerGreen:"button_powerGreen__2hK5G",powerRed:"button_powerRed__37brT",small:"button_small__3SP67"}},,function(e,t,c){e.exports={outerFrame:"layout_outerFrame__URv2q",app:"layout_app__uwqAF"}},function(e,t,c){e.exports={screen:"screenStyle_screen__LFTJ9",off:"screenStyle_off__2X_2N"}},function(e,t,c){e.exports={frame:"power_frame__2Gh2Y",volume:"power_volume__3FVF6",volumeDiv:"power_volumeDiv__3VXt7"}},,function(e,t,c){e.exports={body:"bodyStyle_body__1BJ9G"}},,,,,,function(e,t,c){},function(e,t,c){},function(e,t,c){"use strict";c.r(t);var n=c(0),o=c(1),r=c(8),a=c.n(r),l=c(2),s=c(5),i=c.n(s),d=c.p+"static/media/808RS.58f20ff2.wav",u=function(e){return Object(n.jsxs)("div",{className:i.a.outerFrame,children:[Object(n.jsx)("div",{className:i.a.app,children:e.children}),Object(n.jsxs)("div",{className:"d-flex justify-center",children:[Object(n.jsx)("a",{href:"https://knapptr.github.io/tknapp/",target:"__blank",className:"footerText",children:"Created by Tyler Knapp"}),Object(n.jsx)("a",{href:"https://github.com/Knapptr/calculator",target:"__blank",className:"footerText",children:"See the code on github."})]})]})},j=c(9),b=c.n(j),f=function(e){return Object(n.jsx)("div",{className:b.a.body,children:e.children})},x=c(6),O=c.n(x),m=function(e){var t=e.screenContent,c=e.power;return Object(n.jsx)("div",{className:O.a.screen,children:Object(n.jsx)("span",{className:c?"":O.a.off,children:t})})},p=c(3),_=c.n(p),k=function(e){return Object(n.jsx)("button",{onClick:e.clickHandler?function(t){e.clickHandler(e.data)}:null,className:"".concat(e.className?e.className:""," ").concat(e.color?_.a[e.color]:""," ").concat(_.a.button," ").concat(e.small?_.a.small:""),children:e.contents})},v=c(7),h=c.n(v),w=function(e){var t=e.clickHandler,c=e.muted,o=e.toggleMuted;return Object(n.jsxs)("div",{className:"".concat(h.a.frame),children:[Object(n.jsxs)("div",{className:"d-flex flex-col align-center",children:[Object(n.jsx)(k,{color:"powerGreen",className:"d-block",contents:" ",small:!0,data:!0,clickHandler:t}),Object(n.jsx)("div",{className:"dot"}),Object(n.jsx)("div",{className:"powerIcon",children:"\u26ab"})]}),Object(n.jsxs)("div",{className:"d-flex flex-col align-center ",children:[Object(n.jsx)(k,{color:"powerRed",className:"d-block smallButton",contents:" ",data:!1,small:!0,clickHandler:t}),Object(n.jsx)("div",{className:"dot"}),Object(n.jsx)("div",{className:"powerIcon",children:"\u3007"})]}),Object(n.jsx)("div",{className:"d-flex flex-col align-center",children:Object(n.jsx)(k,{contents:Object(n.jsx)("div",{className:h.a.volumeDiv,children:c?Object(n.jsx)("i",{className:"fas fa-volume-mute"}):Object(n.jsx)("i",{className:"fas fa-volume-up"})}),clickHandler:o,small:!0,color:"brown"})})]})},y=function(e){var t=e.changeMemory,c=e.recallMemory,o=e.clearMemory,r=e.toggleSign;return Object(n.jsxs)("div",{children:[Object(n.jsx)(k,{color:"green",data:"+",contents:"M+",clickHandler:t}),Object(n.jsx)(k,{color:"green",data:"MR",contents:"MR",clickHandler:c}),Object(n.jsx)(k,{color:"green",data:"MC",contents:"MC",clickHandler:o}),Object(n.jsx)(k,{color:"green",data:"-",contents:"M-",clickHandler:t}),Object(n.jsx)(k,{color:"green",data:"+/-",contents:"+/-",clickHandler:r})]})},g={"+":function(e,t){return+(e+t).toPrecision(8)},"-":function(e,t){return+(e-t).toPrecision(8)},"/":function(e,t){return+(e/t).toPrecision(8)},"*":function(e,t){return+(e*t).toPrecision(8)},"^%":function(e,t){return+((t/e*100-100)/100).toPrecision(8)},"^":function(e,t){return+Math.pow(e,t).toPrecision(8)},sqrt:function(e,t){return+Math.sqrt(t).toPrecision(8)}};var N=function(e,t,c){return console.log(t),g[t](e,c)},H=function(e){var t=e.clear,c=e.displayResult,n=e.enterDigit,o=e.enterOperation;return function(e){parseInt(e.key)>=0&&parseInt(e.key)<=9?n(parseInt(e.key)):"Enter"===e.key||"="===e.key?c():"+"===e.key||"-"===e.key||"/"===e.key||"*"===e.key?o(e.key):"c"===e.key?t():"."===e.key&&n(".")}},S=(c(15),[7,4,1,8,5,2,9,6,3]),M=function(e,t,c){var o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null,r=e.slice(c,c+t);return Object(n.jsx)("div",{className:"col",children:r.map((function(e){return Object(n.jsx)(k,{contents:e,data:e,clickHandler:o,color:"black"})}))})},R=function(){var e=Object(o.useState)(!1),t=Object(l.a)(e,2),c=t[0],r=t[1],a=new Audio(d),s=function(){c||(a.currentTime=0,a.play())},i=Object(o.useState)(0),j=Object(l.a)(i,2),b=j[0],x=j[1],O=Object(o.useState)(!1),p=Object(l.a)(O,2),_=p[0],v=p[1],h=Object(o.useState)(0),g=Object(l.a)(h,2),R=g[0],P=g[1],C=Object(o.useState)(0),F=Object(l.a)(C,2),E=F[0],G=F[1],I=Object(o.useState)(null),T=Object(l.a)(I,2),q=T[0],D=T[1],J=Object(o.useState)(!0),L=Object(l.a)(J,2),B=L[0],K=L[1],A=function(e){if(_)s(),x(e),v(!1);else if(b.toString().length<10){var t=parseFloat(b.toString().concat(e));"."===e&&(t="".concat(t,".")),s(),x(t)}},V=function(e){s(),P(b),q&&X(q),v(!0),D(e)},X=function(e){var t=N(R,e,b);return P(t),t},z=function(){s(),null!==q?(X(q),x(N(R,q,b)),D(null)):x(R),v(!0)},Q=function(){s(),x(0),D(null),P(0)};Object(o.useEffect)((function(){Q()}),[B]);var U=H({clear:Q,enterDigit:A,enterOperation:V,displayResult:z});return Object(o.useEffect)((function(){return window.addEventListener("keypress",U),function(){window.removeEventListener("keypress",U)}})),Object(n.jsxs)(u,{children:[Object(n.jsxs)(f,{children:[Object(n.jsx)(m,{power:B,screenContent:b}),Object(n.jsx)(w,{clickHandler:function(e){s(),K(e)},toggleMuted:function(){r(!c)},muted:c}),Object(n.jsxs)("div",{className:"d-flex flex-col ",children:[Object(n.jsx)(y,{recallMemory:function(){s(),x(E)},clearMemory:function(){s(),G(0)},changeMemory:function(e){s(),v(!0),G(N(E,e,b))},toggleSign:function(){s(),x(b-2*b)}}),Object(n.jsxs)("div",{className:"d-flex",children:[Object(n.jsxs)("div",{className:"col",children:[Object(n.jsx)(k,{color:"brown",contents:"\u0394%",data:"^%",clickHandler:V}),Object(n.jsx)(k,{color:"brown",contents:"\u221a",data:"sqrt",clickHandler:V}),Object(n.jsx)(k,{color:"brown",contents:"%",clickHandler:function(){if(q){var e=N(R,"*",b/100);P(N(R,q,e)),D(null)}}})]}),Object(n.jsxs)("div",{className:"d-flex",children:[M(S,3,0,A),M(S,3,3,A),M(S,3,6,A)]}),Object(n.jsxs)("div",{className:"col",children:[Object(n.jsx)(k,{color:"brown",contents:"\xf7",data:"/",clickHandler:V}),Object(n.jsx)(k,{color:"brown",contents:"\xd7",data:"*",clickHandler:V}),Object(n.jsx)(k,{color:"brown",contents:"-",data:"-",clickHandler:V})]})]}),Object(n.jsxs)("div",{id:"bottomRow d-flex",children:[Object(n.jsx)(k,{color:"brown",contents:"C",clickHandler:Q}),Object(n.jsx)(k,{color:"black",contents:"0",data:"0",clickHandler:A}),Object(n.jsx)(k,{color:"brown",contents:".",data:".",clickHandler:A}),Object(n.jsx)(k,{color:"yellow",contents:"=",data:"=",clickHandler:function(){z()}}),Object(n.jsx)(k,{color:"brown",contents:"+",data:"+",clickHandler:V})]})]})]}),">"]})};c(16);a.a.render(Object(n.jsx)(R,{}),document.getElementById("root"))}],[[17,1,2]]]);
//# sourceMappingURL=main.2ccc62ef.chunk.js.map