(this.webpackJsonpbinary_juan=this.webpackJsonpbinary_juan||[]).push([[0],{20:function(e,a,t){e.exports=t.p+"static/media/logo.5d5d9eef.svg"},24:function(e,a,t){e.exports=t(34)},30:function(e,a,t){},31:function(e,a,t){},32:function(e,a,t){},34:function(e,a,t){"use strict";t.r(a);var n=t(2),r=t.n(n),c=t(19),i=t.n(c);t(29),t(30),t(20),t(31);t(32);var s=t(16),o=t(23),l=t(8),u=t(0),m=t(1),h=t(3),f=t(4),p=t(17),d=function(e){Object(h.a)(t,e);var a=Object(f.a)(t);function t(){var e;return Object(u.a)(this,t),(e=a.call(this)).noiseGrid=[],e}return Object(m.a)(t,[{key:"_create",value:function(){var e=p.a.gridPts(this.space.innerBound,20,20);this.noiseGrid=p.a.noisePts(e,.05,.1,20,20)}},{key:"componentDidUpdate",value:function(){this.props.pause?this.space.pause():this.space.resume()}},{key:"start",value:function(e,a){this._create()}},{key:"resize",value:function(){this._create()}},{key:"animate",value:function(e,a){var t=this;if(this.noiseGrid){var n=this.space.pointer.$subtract(this.space.center).divide(this.space.center).abs();this.noiseGrid.forEach((function(e){e.step(.01*(1-n.x),.01*(1-n.y)),t.form.fillOnly("#123").point(e,Math.abs(e.noise2D()*t.space.size.x/18),"circle")}))}}}]),t}(t(21).a);var v=function(){return r.a.createElement("div",{className:"Home"},r.a.createElement(s.a,null,r.a.createElement(o.a,null,r.a.createElement(l.a,null,"M\xfasica"),r.a.createElement(l.a,null,"Im\xe1gen"),r.a.createElement(l.a,null,"Letras"),r.a.createElement(l.a,null,"Acerca"),r.a.createElement(l.a,{xs:6},"Acerca"),r.a.createElement(l.a,{xs:1},r.a.createElement("a",{href:"x"},"YT")," "),r.a.createElement(l.a,{xs:1},r.a.createElement("a",{href:"sc"},"SC")," "))),r.a.createElement(s.a,null,r.a.createElement(d,{name:"example",background:"#fe3"})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(v,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[24,1,2]]]);
//# sourceMappingURL=main.23478965.chunk.js.map