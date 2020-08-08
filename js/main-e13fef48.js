!function(t){function e(e){for(var o,r,n=e[0],l=e[1],c=e[2],m=0,p=[];m<n.length;m++)r=n[m],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&p.push(i[r][0]),i[r]=0;for(o in l)Object.prototype.hasOwnProperty.call(l,o)&&(t[o]=l[o]);for(u&&u(e);p.length;)p.shift()();return a.push.apply(a,c||[]),s()}function s(){for(var t,e=0;e<a.length;e++){for(var s=a[e],o=!0,n=1;n<s.length;n++){var l=s[n];0!==i[l]&&(o=!1)}o&&(a.splice(e--,1),t=r(r.s=s[0]))}return t}var o={},i={0:0},a=[];function r(e){if(o[e])return o[e].exports;var s=o[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,r),s.l=!0,s.exports}r.m=t,r.c=o,r.d=function(t,e,s){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(r.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(s,o,function(e){return t[e]}.bind(null,o));return s},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="";var n=window.webpackJsonp=window.webpackJsonp||[],l=n.push.bind(n);n.push=e,n=n.slice();for(var c=0;c<n.length;c++)e(n[c]);var u=l;a.push([8,1]),s()}({7:function(t,e,s){},8:function(t,e,s){"use strict";s.r(e);var o=s(0);s(6);class i{constructor(t,e){this.startedAt=Date.now(),this.callback=t,this.delay=e,this.timer=setTimeout(t,e)}pause(){this.stop(),this.delay-=Date.now()-this.startedAt}resume(){this.stop(),this.startedAt=Date.now(),this.timer=setTimeout(this.callback,this.delay)}stop(){clearTimeout(this.timer)}}var a=Object.freeze({TOP_RIGHT:"top-right",TOP:"top",TOP_LEFT:"top-left",BOTTOM_RIGHT:"bottom-right",BOTTOM:"bottom",BOTTOM_LEFT:"bottom-left"});var r=new o.a,n={name:"toast",props:{message:{type:String,required:!0},type:{type:String,default:"success"},position:{type:String,default:a.BOTTOM_RIGHT,validator:t=>Object.values(a).includes(t)},duration:{type:Number,default:3e3},dismissible:{type:Boolean,default:!0},onClose:{type:Function,default:()=>{}},onClick:{type:Function,default:()=>{}},queue:Boolean,pauseOnHover:{type:Boolean,default:!0}},data:()=>({isActive:!1,parentTop:null,parentBottom:null,isHovered:!1}),beforeMount(){this.setupContainer()},mounted(){this.showNotice(),r.$on("toast.clear",this.close)},methods:{setupContainer(){if(this.parentTop=document.querySelector(".v-notices.is-top"),this.parentBottom=document.querySelector(".v-notices.is-bottom"),this.parentTop&&this.parentBottom)return;this.parentTop||(this.parentTop=document.createElement("div"),this.parentTop.className="v-notices is-top"),this.parentBottom||(this.parentBottom=document.createElement("div"),this.parentBottom.className="v-notices is-bottom");const t=document.body;t.appendChild(this.parentTop),t.appendChild(this.parentBottom)},shouldQueue(){return!!this.queue&&(this.parentTop.childElementCount>0||this.parentBottom.childElementCount>0)},close(){this.timer.stop(),clearTimeout(this.queueTimer),this.isActive=!1,setTimeout(()=>{var t;this.onClose.apply(null,arguments),this.$destroy(),void 0!==(t=this.$el).remove?t.remove():t.parentNode.removeChild(t)},150)},showNotice(){this.shouldQueue()?this.queueTimer=setTimeout(this.showNotice,250):(this.correctParent.insertAdjacentElement("afterbegin",this.$el),this.isActive=!0,this.timer=new i(this.close,this.duration))},whenClicked(){this.dismissible&&(this.onClick.apply(null,arguments),this.close())},toggleTimer(t){this.pauseOnHover&&(t?this.timer.pause():this.timer.resume())}},computed:{correctParent(){switch(this.position){case a.TOP:case a.TOP_RIGHT:case a.TOP_LEFT:return this.parentTop;case a.BOTTOM:case a.BOTTOM_RIGHT:case a.BOTTOM_LEFT:return this.parentBottom}},transition(){switch(this.position){case a.TOP:case a.TOP_RIGHT:case a.TOP_LEFT:return{enter:"fadeInDown",leave:"fadeOut"};case a.BOTTOM:case a.BOTTOM_RIGHT:case a.BOTTOM_LEFT:return{enter:"fadeInUp",leave:"fadeOut"}}}},beforeDestroy(){r.$off("toast.clear",this.close)}},l=s(1),c=Object(l.a)(n,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("transition",{attrs:{"enter-active-class":t.transition.enter,"leave-active-class":t.transition.leave}},[s("div",{directives:[{name:"show",rawName:"v-show",value:t.isActive,expression:"isActive"}],staticClass:"v-toast",class:["v-toast-"+t.type,"is-"+t.position],attrs:{role:"alert"},on:{mouseover:function(e){return t.toggleTimer(!0)},mouseleave:function(e){return t.toggleTimer(!1)},click:t.whenClicked}},[s("div",{staticClass:"v-toast-icon"}),t._v(" "),s("p",{staticClass:"v-toast-text",domProps:{innerHTML:t._s(t.message)}})])])}),[],!1,null,null,null).exports;var u=(t,e={})=>({open(s){let o;"string"==typeof s&&(o=s);const i={message:o},a=Object.assign({},i,e,s);return new(t.extend(c))({el:document.createElement("div"),propsData:a})},clear(){r.$emit("toast.clear")},success(t,e={}){return this.open(Object.assign({},{message:t,type:"success"},e))},error(t,e={}){return this.open(Object.assign({},{message:t,type:"error"},e))},info(t,e={}){return this.open(Object.assign({},{message:t,type:"info"},e))},warning(t,e={}){return this.open(Object.assign({},{message:t,type:"warning"},e))},default(t,e={}){return this.open(Object.assign({},{message:t,type:"default"},e))}});c.install=(t,e={})=>{let s=u(t,e);t.$toast=s,t.prototype.$toast=s};var m=c;s(7);o.a.use(m);var p={name:"app",data(){return{form:{message:"This is a sample message",type:"success",duration:1e4,dismissible:!0,queue:!1,position:"bottom-right",onClick:this.onClick,onClose:this.onClose},types:["success","error","warning","info","default"],positions:a}},components:{},mounted(){this.showAll()},methods:{showAll(){this.types.forEach(t=>{this.$toast.open({message:"Yet another toast notification!",duration:this.form.duration,type:t})})},onClick(){},onClose(){},show(){this.$toast.open(this.form)},clearAll(){this.$toast.clear()}}},d=Object(l.a)(p,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[t._m(0),t._v(" "),s("main",{staticClass:"container"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-8 mb-3"},[s("div",{staticClass:"card"},[s("form",{staticClass:"card-body",attrs:{method:"post"},on:{submit:function(e){return e.preventDefault(),t.show(e)}}},[s("div",{staticClass:"form-group"},[t._m(1),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.form.message,expression:"form.message",modifiers:{trim:!0}}],staticClass:"form-control",attrs:{type:"text",required:"",name:"message"},domProps:{value:t.form.message},on:{input:function(e){e.target.composing||t.$set(t.form,"message",e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}})]),t._v(" "),s("div",{staticClass:"form-group"},[s("label",[t._v("Type")]),t._v(" "),s("div",t._l(t.types,(function(e){return s("div",{staticClass:"custom-control custom-radio custom-control-inline"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.form.type,expression:"form.type"}],staticClass:"custom-control-input",attrs:{type:"radio",id:"radio-type-"+e},domProps:{value:e,checked:t._q(t.form.type,e)},on:{change:function(s){return t.$set(t.form,"type",e)}}}),t._v(" "),s("label",{staticClass:"custom-control-label text-capitalize",attrs:{for:"radio-type-"+e}},[t._v(t._s(e))])])})),0)]),t._v(" "),s("div",{staticClass:"form-group"},[s("label",[t._v("Duration "),s("code",[t._v("("+t._s(t.form.duration/1e3)+" seconds)")])]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model.number",value:t.form.duration,expression:"form.duration",modifiers:{number:!0}}],staticClass:"custom-range",attrs:{type:"range",min:"100",max:"60000"},domProps:{value:t.form.duration},on:{__r:function(e){t.$set(t.form,"duration",t._n(e.target.value))},blur:function(e){return t.$forceUpdate()}}})]),t._v(" "),s("div",{staticClass:"form-row"},[s("div",{staticClass:"col-md-3"},[s("div",{staticClass:"form-group"},[s("label",[t._v("Dismissible")]),t._v(" "),s("div",{staticClass:"custom-control custom-checkbox"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.form.dismissible,expression:"form.dismissible"}],staticClass:"custom-control-input",attrs:{type:"checkbox",id:"checkbox-dismissible"},domProps:{checked:Array.isArray(t.form.dismissible)?t._i(t.form.dismissible,null)>-1:t.form.dismissible},on:{change:function(e){var s=t.form.dismissible,o=e.target,i=!!o.checked;if(Array.isArray(s)){var a=t._i(s,null);o.checked?a<0&&t.$set(t.form,"dismissible",s.concat([null])):a>-1&&t.$set(t.form,"dismissible",s.slice(0,a).concat(s.slice(a+1)))}else t.$set(t.form,"dismissible",i)}}}),t._v(" "),s("label",{staticClass:"custom-control-label",attrs:{for:"checkbox-dismissible"}},[t._v("Close on click")])])])]),t._v(" "),s("div",{staticClass:"col-md-9"},[s("div",{staticClass:"form-group"},[s("label",[t._v("Queue")]),t._v(" "),s("div",{staticClass:"custom-control custom-checkbox"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.form.queue,expression:"form.queue"}],staticClass:"custom-control-input",attrs:{type:"checkbox",id:"checkbox-queue"},domProps:{checked:Array.isArray(t.form.queue)?t._i(t.form.queue,null)>-1:t.form.queue},on:{change:function(e){var s=t.form.queue,o=e.target,i=!!o.checked;if(Array.isArray(s)){var a=t._i(s,null);o.checked?a<0&&t.$set(t.form,"queue",s.concat([null])):a>-1&&t.$set(t.form,"queue",s.slice(0,a).concat(s.slice(a+1)))}else t.$set(t.form,"queue",i)}}}),t._v(" "),s("label",{staticClass:"custom-control-label",attrs:{for:"checkbox-queue"}},[t._v("Wait for previous to close before\n                      showing new")])])])])]),t._v(" "),s("div",{staticClass:"form-group"},[s("label",[t._v("Position")]),t._v(" "),s("div",t._l(t.positions,(function(e){return s("div",{staticClass:"custom-control custom-radio custom-control-inline"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.form.position,expression:"form.position"}],staticClass:"custom-control-input",attrs:{type:"radio",id:"radio-position-"+e},domProps:{value:e,checked:t._q(t.form.position,e)},on:{change:function(s){return t.$set(t.form,"position",e)}}}),t._v(" "),s("label",{staticClass:"custom-control-label text-capitalize",attrs:{for:"radio-position-"+e}},[t._v(t._s(e))])])})),0)]),t._v(" "),s("hr"),t._v(" "),s("button",{staticClass:"btn btn-primary",attrs:{type:"submit"}},[t._v("Show notification")]),t._v(" "),s("button",{staticClass:"btn btn-outline-info",attrs:{type:"button"},on:{click:t.showAll}},[t._v("Demo all")]),t._v(" "),s("button",{staticClass:"btn btn-secondary",attrs:{type:"button"},on:{click:t.clearAll}},[t._v("Hide all")])])])]),t._v(" "),t._m(2)])]),t._v(" "),t._m(3)])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("nav",{staticClass:"navbar navbar-expand-lg navbar navbar-light bg-white shadow-sm mb-3"},[e("span",{staticClass:"navbar-brand mb-0"},[this._v("Vue.js Toast")]),this._v(" "),e("ul",{staticClass:"navbar-nav ml-auto"},[e("li",{staticClass:"nav-item"},[e("a",{staticClass:"nav-link",attrs:{href:"https://github.com/ankurk91/vue-toast-notification",target:"_blank"}},[this._v(" GitHub")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("label",[this._v("Message "),e("code",[this._v("(required)")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("aside",{staticClass:"col-md-4 mb-3"},[e("div",{staticClass:"card"},[e("div",{staticClass:"card-header"},[this._v(" Links")]),this._v(" "),e("div",{staticClass:"card-body"},[e("ul",[e("li",[e("a",{attrs:{href:"https://github.com/ankurk91/vue-toast-notification",target:"_blank"}},[this._v("GitHub")])]),this._v(" "),e("li",[e("a",{attrs:{href:"https://www.npmjs.com/package/vue-toast-notification",target:"_blank"}},[this._v("npm")])])])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("footer",{staticClass:"text-center text-muted small mb-3"},[this._v("\n    Created by "),e("a",{attrs:{href:"https://twitter.com/ankurk91",target:"_blank",rel:"noopener"}},[this._v("@ankurk91")])])}],!1,null,null,null).exports;o.a.config.productionTip=!1,new o.a({el:"#app",render:t=>t(d),created(){},mounted(){}})}});