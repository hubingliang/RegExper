(function(t){function e(e){for(var i,o,r=e[0],l=e[1],u=e[2],f=0,p=[];f<r.length;f++)o=r[f],a[o]&&p.push(a[o][0]),a[o]=0;for(i in l)Object.prototype.hasOwnProperty.call(l,i)&&(t[i]=l[i]);c&&c(e);while(p.length)p.shift()();return s.push.apply(s,u||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],i=!0,r=1;r<n.length;r++){var l=n[r];0!==a[l]&&(i=!1)}i&&(s.splice(e--,1),t=o(o.s=n[0]))}return t}var i={},a={1:0},s=[];function o(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=i,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:n})},o.r=function(t){Object.defineProperty(t,"__esModule",{value:!0})},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/RegExper/dist/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],l=r.push.bind(r);r.push=e,r=r.slice();for(var u=0;u<r.length;u++)e(r[u]);var c=l;s.push([3,0]),n()})({3:function(t,e,n){t.exports=n("zUnb")},bChi:function(t,e,n){"use strict";var i=n("nUzE"),a=n.n(i);a.a},nUzE:function(t,e,n){},oqIX:function(t,e,n){"use strict";var i=n("xWkQ"),a=n.n(i);a.a},p3OV:function(t,e,n){},rAmE:function(t,e,n){"use strict";var i=n("p3OV"),a=n.n(i);a.a},xWkQ:function(t,e,n){},zUnb:function(t,e,n){"use strict";n.r(e);n("VRzm");var i=n("Kw5r"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},s=[],o=n("xmWZ"),r=n("3Aqn"),l=n("qpph"),u=n("0yhX"),c=n("EdlT"),f=n("a94B"),p=n("YKMj"),d=n("r6SZ"),h=n.n(d),g=function(t,e,n,i){var a,s=arguments.length,o=s<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,n):i;if("object"===("undefined"===typeof Reflect?"undefined":Object(f["a"])(Reflect))&&"function"===typeof Reflect.decorate)o=Reflect.decorate(t,e,n,i);else for(var r=t.length-1;r>=0;r--)(a=t[r])&&(o=(s<3?a(o):s>3?a(e,n,o):a(e,n))||o);return s>3&&o&&Object.defineProperty(e,n,o),o},v=function(t,e){if("object"===("undefined"===typeof Reflect?"undefined":Object(f["a"])(Reflect))&&"function"===typeof Reflect.metadata)return Reflect.metadata(t,e)},b=function(t){function e(){return Object(o["a"])(this,e),Object(u["a"])(this,Object(c["a"])(e).apply(this,arguments))}return Object(l["a"])(e,[{key:"AV",value:function(){var t="NRa4AM1Qcb4hKUpR8bsCT7Ai-gzGzoHsz",e="whcdEgtnUayiKhDDiDtbMd6C";h.a.init({appId:t,appKey:e})}},{key:"getQuestion",value:function(){var t=this,e=new h.a.Query("question");e.get("5b18fb3cac502e003426f830").then(function(e){window.localStorage;console.log(e.attributes.question.question),t.$store.commit("getQuestion",e.attributes.question.question)},function(t){})}},{key:"mounted",value:function(){this.AV(),this.getQuestion()}}]),Object(r["a"])(e,t),e}(p["d"]);g([Object(p["b"])(),v("design:type",Function),v("design:paramtypes",[]),v("design:returntype",void 0)],b.prototype,"AV",null),b=g([p["a"]],b);var y=b,m=y,j=(n("rAmE"),n("KHd+")),O=Object(j["a"])(m,a,s,!1,null,null,null),_=O.exports,x=n("jE9Z"),w=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"challenge"},[n("aside",{staticClass:"aside"},[n("svg",{staticClass:"icon",attrs:{"aria-hidden":"true"}},[n("use",{attrs:{"xlink:href":"#icon-zhengzeshi"}})])]),t._v(" "),n("section",{staticClass:"problem"},[t._m(0),t._v(" "),n("div",{staticClass:"level"},[t._v("\n            1\n        ")]),t._v(" "),n("section",{staticClass:"want"},[n("div",{staticClass:"question"},[t._v("I need :")]),t._v(" "),n("div",{staticClass:"detail"},[t._v(t._s(t.want))])]),t._v(" "),n("section",{staticClass:"flagsBox"},[n("div",{staticClass:"description"},[t._v("Flags :")]),t._v(" "),t._l(t.flags,function(e){return n("div",{key:e.flag,staticClass:"flags",class:{active:e.status},on:{mouseenter:function(n){t.flagHover(e)},mouseleave:function(n){t.flagHover(e)},click:function(n){t.changeFlags(e),t.regexp()}}},[t._v("\n                "+t._s(e.flag)+"\n            ")])}),t._v(" "),n("div",{staticClass:"detail"},[t._v("\n                "+t._s(t.flagDetail)+"\n            ")])],2),t._v(" "),n("section",{staticClass:"test"},[t.pass?n("svg",{staticClass:"icon animated bounceIn",attrs:{"aria-hidden":"true"}},[n("use",{attrs:{"xlink:href":"#icon-duihao"}})]):n("button",{on:{click:function(e){t.testCode()}}},[t._v("Test Code")])])]),t._v(" "),n("article",[n("div",{staticClass:"article",attrs:{id:"article"},domProps:{innerHTML:t._s(t.article)}}),t._v(" "),n("section",{staticClass:"input"},[n("div",{staticClass:"wrapper"},[n("span",[t._v("/")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.input,expression:"input",modifiers:{trim:!0}}],style:{width:t.inputWidth+"px",fontSize:t.fontSize+"px"},attrs:{type:"text",placeholder:"regexp",id:"entry"},domProps:{value:t.input},on:{input:[function(e){e.target.composing||(t.input=e.target.value.trim())},function(e){t.changeInputWidth(),t.regexp()}],blur:function(e){t.$forceUpdate()}}}),t._v(" "),n("span",[t._v("/")]),t._v(" "),n("input",{attrs:{type:"text",id:"flags",placeholder:"flags",readonly:"readonly"},domProps:{value:t.inputFlags}})])])])])},C=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"logo"},[n("span",{staticClass:"orange"},[t._v("2018")]),t._v(" RegExper Challenge")])}],R=(n("Z2Ku"),n("L9s1"),n("pIFo"),n("rE2o"),n("ioFf"),n("rGqo"),n("SRfc"),n("URgk")),k=function(t,e,n,i){var a,s=arguments.length,o=s<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,n):i;if("object"===("undefined"===typeof Reflect?"undefined":Object(f["a"])(Reflect))&&"function"===typeof Reflect.decorate)o=Reflect.decorate(t,e,n,i);else for(var r=t.length-1;r>=0;r--)(a=t[r])&&(o=(s<3?a(o):s>3?a(e,n,o):a(e,n))||o);return s>3&&o&&Object.defineProperty(e,n,o),o},q=function(t,e){if("object"===("undefined"===typeof Reflect?"undefined":Object(f["a"])(Reflect))&&"function"===typeof Reflect.metadata)return Reflect.metadata(t,e)},D=function(t){function e(){var t;return Object(o["a"])(this,e),t=Object(u["a"])(this,Object(c["a"])(e).apply(this,arguments)),t.initArticle="",t.article="",t.want="",t.input="",t.inputFlags="",t.inputWidth=100,t.flagsWidth=75,t.fontSize=20,t.timeout=null,t.flags=[{flag:"g",status:!1,detail:"global"},{flag:"i",status:!1,detail:"case insensitive"},{flag:"m",status:!1,detail:"multiline"},{flag:"u",status:!1,detail:"unicode"},{flag:"y",status:!1,detail:"sticky"}],t.flagDetail="",t.questionData=[],t.currentQuestion={},t.test="",t.pass=!1,t.questionIndex=0,t}return Object(l["a"])(e,[{key:"regexp",value:function(){""!==this.input?this.debounce():this.article=this.initArticle}},{key:"debounce",value:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:500;this.article=this.initArticle,clearTimeout(this.timeout),this.timeout=Object(R["setTimeout"])(function(){"flags"===t.inputFlags&&(t.inputFlags="");var e=new RegExp(t.input,t.inputFlags);console.log("​Checkpoint -> this.timeout -> regexp",e);var n=t.article.match(e);console.log("​Checkpoint -> this.timeout -> matches",n);var i="",a=!0,s=!1,o=void 0;try{for(var r,l=n[Symbol.iterator]();!(a=(r=l.next()).done);a=!0){var u=r.value,c=new RegExp(u,t.inputFlags);i=t.article.replace(c,'<span style="color: #ff8008;display: inline">'.concat(u,"</span>"))}}catch(t){s=!0,o=t}finally{try{a||null==l.return||l.return()}finally{if(s)throw o}}t.article=i},e)}},{key:"changeInputWidth",value:function(){var t=document.getElementById("entry"),e=15*t.value.length;this.inputWidth=e>120?e:120}},{key:"changeFlagsWidth",value:function(){var t=document.getElementById("flags");this.flagsWidth=25*t.value.length,0===this.flagsWidth?this.flagsWidth=65:this.flagsWidth>100&&(this.flagsWidth=100)}},{key:"changeFlags",value:function(t){this.inputFlags.includes(t.flag)?(t.status=!1,this.inputFlags=this.inputFlags.replace(t.flag,"")):(t.status=!0,this.inputFlags="".concat(this.inputFlags).concat(t.flag))}},{key:"flagHover",value:function(t){""===this.flagDetail?this.flagDetail=t.detail:this.flagDetail=""}},{key:"initQuestionData",value:function(t){var e=this;Object(R["setTimeout"])(function(){e.questionData=e.$store.state.questionData,e.currentQuestion=e.$store.state.questionData[t],e.article=e.$store.state.questionData[t].article,e.article.length,e.initArticle=e.$store.state.questionData[t].article,e.want=e.$store.state.questionData[t].want,e.test=e.$store.state.questionData[t].test},0)}},{key:"testCode",value:function(){var t=new RegExp(this.input,this.inputFlags);t.exec(this.test)?this.nextQuestion():alert("don't work")}},{key:"nextQuestion",value:function(){var t=this;alert("nb"),this.pass=!0,Object(R["setTimeout"])(function(){t.pass=!1,t.questionIndex++,t.initQuestionData(t.questionIndex++)},1e3)}},{key:"mounted",value:function(){this.initQuestionData(this.questionIndex)}}]),Object(r["a"])(e,t),e}(p["d"]);k([Object(p["c"])(),q("design:type",String)],D.prototype,"initArticle",void 0),k([Object(p["b"])(),q("design:type",Function),q("design:paramtypes",[]),q("design:returntype",void 0)],D.prototype,"regexp",null),D=k([p["a"]],D);var E=D,F=E,Q=(n("bChi"),Object(j["a"])(F,w,C,!1,null,null,null)),z=Q.exports,I=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"start"},[n("div",{staticClass:"logo animated bounceIn"},[n("svg",{staticClass:"icon",attrs:{"aria-hidden":"true"}},[n("use",{attrs:{"xlink:href":"#icon-zhengzeshi"}})]),t._v("\n        RegExper\n    ")])])},W=[],$=function(t,e,n,i){var a,s=arguments.length,o=s<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,n):i;if("object"===("undefined"===typeof Reflect?"undefined":Object(f["a"])(Reflect))&&"function"===typeof Reflect.decorate)o=Reflect.decorate(t,e,n,i);else for(var r=t.length-1;r>=0;r--)(a=t[r])&&(o=(s<3?a(o):s>3?a(e,n,o):a(e,n))||o);return s>3&&o&&Object.defineProperty(e,n,o),o},A=function(t){function e(){return Object(o["a"])(this,e),Object(u["a"])(this,Object(c["a"])(e).apply(this,arguments))}return Object(l["a"])(e,[{key:"mounted",value:function(){var t=this;setTimeout(function(){t.$router.push("challenge")},2e3)}}]),Object(r["a"])(e,t),e}(p["d"]);A=$([p["a"]],A);var P=A,T=P,S=(n("oqIX"),Object(j["a"])(T,I,W,!1,null,"4d59fbe4",null)),U=S.exports;i["default"].use(x["a"]);var K=new x["a"]({routes:[{path:"/",name:"start",component:U},{path:"/challenge",name:"challenge",component:z}]}),H=n("L2JU");i["default"].use(H["a"]);var M=new H["a"].Store({state:{questionData:[]},getters:{setQuestion:function(t){return t.questionData}},mutations:{getQuestion:function(t,e){t.questionData=e}},actions:{}});i["default"].config.productionTip=!1,new i["default"]({router:K,store:M,render:function(t){return t(_)}}).$mount("#app")}});
//# sourceMappingURL=app.3d701381.js.map