(function(t){function e(e){for(var i,a,c=e[0],l=e[1],u=e[2],p=0,f=[];p<c.length;p++)a=c[p],r[a]&&f.push(r[a][0]),r[a]=0;for(i in l)Object.prototype.hasOwnProperty.call(l,i)&&(t[i]=l[i]);s&&s(e);while(f.length)f.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],i=!0,c=1;c<n.length;c++){var l=n[c];0!==r[l]&&(i=!1)}i&&(o.splice(e--,1),t=a(a.s=n[0]))}return t}var i={},r={1:0},o=[];function a(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=t,a.c=i,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:n})},a.r=function(t){Object.defineProperty(t,"__esModule",{value:!0})},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/dist/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=e,c=c.slice();for(var u=0;u<c.length;u++)e(c[u]);var s=l;o.push([3,0]),n()})({3:function(t,e,n){t.exports=n("zUnb")},"4FC4":function(t,e,n){},QBAo:function(t,e,n){"use strict";var i=n("eJoq"),r=n.n(i);r.a},eJoq:function(t,e,n){},h0P3:function(t,e,n){"use strict";var i=n("4FC4"),r=n.n(i);r.a},p3OV:function(t,e,n){},rAmE:function(t,e,n){"use strict";var i=n("p3OV"),r=n.n(i);r.a},zUnb:function(t,e,n){"use strict";n.r(e);n("VRzm");var i=n("Kw5r"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},o=[],a=(n("rAmE"),n("KHd+")),c={},l=Object(a["a"])(c,r,o,!1,null,null,null),u=l.exports,s=n("jE9Z"),p=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"challenge"},[n("article",{domProps:{innerHTML:t._s(t.article)}}),t._v(" "),n("section",{staticClass:"want"},[t._v("\n        "+t._s(t.want)+"\n    ")]),t._v(" "),n("section",{staticClass:"input"},[n("div",{staticClass:"wrapper"},[n("span",[t._v("/")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.input,expression:"input",modifiers:{trim:!0}}],style:{width:t.inputWidth+"px",fontSize:t.fontSize+"vw"},attrs:{type:"text",placeholder:"regexp",id:"entry"},domProps:{value:t.input},on:{input:[function(e){e.target.composing||(t.input=e.target.value.trim())},function(e){t.changeInputWidth(),t.regexp()}],blur:function(e){t.$forceUpdate()}}}),t._v(" "),n("span",[t._v("/")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.flags,expression:"flags",modifiers:{trim:!0}}],style:{width:t.flagsWidth+"px",fontSize:t.fontSize+"vw"},attrs:{type:"text",placeholder:"flags",id:"flags"},domProps:{value:t.flags},on:{input:[function(e){e.target.composing||(t.flags=e.target.value.trim())},function(e){t.changeFlagsWidth(),t.regexp()}],blur:function(e){t.$forceUpdate()}}})])])])},f=[],d=(n("pIFo"),n("rE2o"),n("ioFf"),n("rGqo"),n("SRfc"),n("OEbY"),n("xmWZ")),h=n("3Aqn"),v=n("qpph"),g=n("0yhX"),y=n("EdlT"),m=n("a94B"),b=n("gvf+"),O=n("URgk"),j=function(t,e,n,i){var r,o=arguments.length,a=o<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,n):i;if("object"===("undefined"===typeof Reflect?"undefined":Object(m["a"])(Reflect))&&"function"===typeof Reflect.decorate)a=Reflect.decorate(t,e,n,i);else for(var c=t.length-1;c>=0;c--)(r=t[c])&&(a=(o<3?r(a):o>3?r(e,n,a):r(e,n))||a);return o>3&&a&&Object.defineProperty(e,n,a),a},w=function(t,e){if("object"===("undefined"===typeof Reflect?"undefined":Object(m["a"])(Reflect))&&"function"===typeof Reflect.metadata)return Reflect.metadata(t,e)},x=function(t){function e(){var t;return Object(d["a"])(this,e),t=Object(g["a"])(this,Object(y["a"])(e).apply(this,arguments)),t.initArticle="hellow world",t.article="hellow world",t.want="ell",t.input="",t.flags="",t.inputWidth=100,t.flagsWidth=75,t.fontSize=6.66,t.timeout=null,t}return Object(v["a"])(e,[{key:"regexp",value:function(){""!==this.input?this.te():this.article=this.initArticle}},{key:"te",value:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:500;this.article=this.initArticle,Object(O["clearTimeout"])(this.timeout),this.timeout=Object(O["setTimeout"])(function(){var e=new RegExp(t.input,t.flags),n=t.article.match(e),i="",r=!0,o=!1,a=void 0;try{for(var c,l=n[Symbol.iterator]();!(r=(c=l.next()).done);r=!0){var u=c.value,s=new RegExp(u,t.flags);i=t.article.replace(s,'<span style="color: #ff8008;">'.concat(u,"</span>"))}}catch(t){o=!0,a=t}finally{try{r||null==l.return||l.return()}finally{if(o)throw a}}t.article=i},e)}},{key:"changeInputWidth",value:function(){var t=document.getElementById("entry");this.inputWidth=15*t.value.length,this.inputWidth<100?(this.inputWidth=100,this.fontSize=6.66):this.inputWidth<280?this.fontSize=6.66:(this.fontSize=4.5,this.inputWidth=280)}},{key:"changeFlagsWidth",value:function(){var t=document.getElementById("flags");this.flagsWidth=25*t.value.length,0===this.flagsWidth?this.flagsWidth=65:this.flagsWidth>100&&(this.flagsWidth=100)}},{key:"mounted",value:function(){this.changeInputWidth()}}]),Object(h["a"])(e,t),e}(b["Vue"]);j([Object(b["Provide"])(),w("design:type",String)],x.prototype,"initArticle",void 0),j([Object(b["Provide"])(),w("design:type",String)],x.prototype,"article",void 0),j([Object(b["Provide"])(),w("design:type",String)],x.prototype,"want",void 0),j([Object(b["Provide"])(),w("design:type",String)],x.prototype,"input",void 0),j([Object(b["Provide"])(),w("design:type",String)],x.prototype,"flags",void 0),j([Object(b["Provide"])(),w("design:type",Number)],x.prototype,"inputWidth",void 0),j([Object(b["Provide"])(),w("design:type",Number)],x.prototype,"flagsWidth",void 0),j([Object(b["Provide"])(),w("design:type",Number)],x.prototype,"fontSize",void 0),j([Object(b["Provide"])(),w("design:type",Object)],x.prototype,"timeout",void 0),j([Object(b["Emit"])(),w("design:type",Function),w("design:paramtypes",[]),w("design:returntype",void 0)],x.prototype,"regexp",null),j([Object(b["Emit"])(),w("design:type",Function),w("design:paramtypes",[Number]),w("design:returntype",void 0)],x.prototype,"te",null),x=j([b["Component"]],x);var P=x,W=P,_=(n("QBAo"),Object(a["a"])(W,p,f,!1,null,"4bffafee",null)),R=_.exports,S=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"start"},[n("div",{staticClass:"logo animated bounceIn"},[n("svg",{staticClass:"icon",attrs:{"aria-hidden":"true"}},[n("use",{attrs:{"xlink:href":"#icon-zhengzeshi"}})]),t._v("\n        RegExper\n    ")])])},E=[],z=function(t,e,n,i){var r,o=arguments.length,a=o<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,n):i;if("object"===("undefined"===typeof Reflect?"undefined":Object(m["a"])(Reflect))&&"function"===typeof Reflect.decorate)a=Reflect.decorate(t,e,n,i);else for(var c=t.length-1;c>=0;c--)(r=t[c])&&(a=(o<3?r(a):o>3?r(e,n,a):r(e,n))||a);return o>3&&a&&Object.defineProperty(e,n,a),a},C=function(t){function e(){return Object(d["a"])(this,e),Object(g["a"])(this,Object(y["a"])(e).apply(this,arguments))}return Object(v["a"])(e,[{key:"mounted",value:function(){var t=this;setTimeout(function(){t.$router.push("challenge")},2e3)}}]),Object(h["a"])(e,t),e}(b["Vue"]);C=z([b["Component"]],C);var k=C,A=k,F=(n("h0P3"),Object(a["a"])(A,S,E,!1,null,"75985284",null)),I=F.exports;i["default"].use(s["a"]);var $=new s["a"]({routes:[{path:"/",name:"start",component:I},{path:"/challenge",name:"challenge",component:R}]}),N=n("L2JU");i["default"].use(N["a"]);var T=new N["a"].Store({state:{},mutations:{},actions:{}});i["default"].config.productionTip=!1,new i["default"]({router:$,store:T,render:function(t){return t(u)}}).$mount("#app")}});
//# sourceMappingURL=app.984f4cd8.js.map