(window.webpackJsonp=window.webpackJsonp||[]).push([[5,7,9],{368:function(t,e,n){"use strict";n(371);var r=n(0);e.a=r.a.extend({name:"sizeable",props:{large:Boolean,small:Boolean,xLarge:Boolean,xSmall:Boolean},computed:{medium:function(){return Boolean(!(this.xSmall||this.small||this.large||this.xLarge))},sizeableClasses:function(){return{"v-size--x-small":this.xSmall,"v-size--small":this.small,"v-size--default":this.medium,"v-size--large":this.large,"v-size--x-large":this.xLarge}}}})},370:function(t,e,n){t.exports=n.p+"img/profile-avatar.4c68cbd.jpg"},371:function(t,e,n){"use strict";var r=n(2),o=n(245);r({target:"String",proto:!0,forced:n(246)("small")},{small:function(){return o(this,"small","","")}})},372:function(t,e,n){"use strict";var r,o=n(15),c=(n(24),n(29),n(175),n(69),n(47),n(171),n(44),n(45),n(25),n(6),n(23),n(71),n(113),n(30),n(371),n(386),n(381)),l=n(366),h=n(368),v=n(173),d=n(9),f=n(0),m=n(172);function x(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function _(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?x(Object(n),!0).forEach((function(e){Object(o.a)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):x(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}!function(t){t.xSmall="12px",t.small="16px",t.default="24px",t.medium="28px",t.large="36px",t.xLarge="40px"}(r||(r={}));var y=Object(m.a)(c.a,l.a,h.a,v.a).extend({name:"v-icon",props:{dense:Boolean,disabled:Boolean,left:Boolean,right:Boolean,size:[Number,String],tag:{type:String,required:!1,default:"i"}},computed:{medium:function(){return!1},hasClickListener:function(){return Boolean(this.listeners$.click||this.listeners$["!click"])}},methods:{getIcon:function(){var t="";return this.$slots.default&&(t=this.$slots.default[0].text.trim()),Object(d.p)(this,t)},getSize:function(){var t={xSmall:this.xSmall,small:this.small,medium:this.medium,large:this.large,xLarge:this.xLarge},e=Object(d.m)(t).find((function(e){return t[e]}));return e&&r[e]||Object(d.d)(this.size)},getDefaultData:function(){return{staticClass:"v-icon notranslate",class:{"v-icon--disabled":this.disabled,"v-icon--left":this.left,"v-icon--link":this.hasClickListener,"v-icon--right":this.right,"v-icon--dense":this.dense},attrs:_({"aria-hidden":!this.hasClickListener,disabled:this.hasClickListener&&this.disabled,type:this.hasClickListener?"button":void 0},this.attrs$),on:this.listeners$}},getSvgWrapperData:function(){var t=this.getSize(),e=_(_({},this.getDefaultData()),{},{style:t?{fontSize:t,height:t,width:t}:void 0});return this.applyColors(e),e},applyColors:function(data){data.class=_(_({},data.class),this.themeClasses),this.setTextColor(this.color,data)},renderFontIcon:function(t,e){var n=[],data=this.getDefaultData(),r="material-icons",o=t.indexOf("-"),c=o<=-1;c?n.push(t):function(t){return["fas","far","fal","fab","fad","fak"].some((function(e){return t.includes(e)}))}(r=t.slice(0,o))&&(r=""),data.class[r]=!0,data.class[t]=!c;var l=this.getSize();return l&&(data.style={fontSize:l}),this.applyColors(data),e(this.hasClickListener?"button":this.tag,data,n)},renderSvgIcon:function(t,e){var n={class:"v-icon__svg",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",role:"img","aria-hidden":!0}},r=this.getSize();return r&&(n.style={fontSize:r,height:r,width:r}),e(this.hasClickListener?"button":"span",this.getSvgWrapperData(),[e("svg",n,[e("path",{attrs:{d:t}})])])},renderSvgIconComponent:function(t,e){var data={class:{"v-icon__component":!0}},n=this.getSize();n&&(data.style={fontSize:n,height:n,width:n}),this.applyColors(data);var component=t.component;return data.props=t.props,data.nativeOn=data.on,e(this.hasClickListener?"button":"span",this.getSvgWrapperData(),[e(component,data)])}},render:function(t){var e=this.getIcon();return"string"==typeof e?function(t){return/^[mzlhvcsqta]\s*[-+.0-9][^mlhvzcsqta]+/i.test(t)&&/[\dz]$/i.test(t)&&t.length>4}(e)?this.renderSvgIcon(e,t):this.renderFontIcon(e,t):this.renderSvgIconComponent(e,t)}});e.a=f.a.extend({name:"v-icon",$_wrapperFor:y,functional:!0,render:function(t,e){var data=e.data,n=e.children,r="";return data.domProps&&(r=data.domProps.textContent||data.domProps.innerHTML||r,delete data.domProps.textContent,delete data.domProps.innerHTML),t(y,data,r?[r]:n)}})},373:function(t,e,n){"use strict";var r=n(372);e.a=r.a},374:function(t,e,n){var content=n(393);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(62).default)("2c50f1cc",content,!0,{sourceMap:!1})},375:function(t,e,n){var map={"./profile-avatar.jpg":370,"./service-api-integration.svg":394,"./service-development.svg":395,"./service-optimize.svg":396,"./service-responsive.svg":397};function r(t){var e=o(t);return n(e)}function o(t){if(!n.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}r.keys=function(){return Object.keys(map)},r.resolve=o,t.exports=r,r.id=375},376:function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var r=n(15),o=n(377);function c(t,e,n){return Object(o.a)(t,e,n).extend({name:"groupable",props:{activeClass:{type:String,default:function(){if(this[t])return this[t].activeClass}},disabled:Boolean},data:function(){return{isActive:!1}},computed:{groupClasses:function(){return this.activeClass?Object(r.a)({},this.activeClass,this.isActive):{}}},created:function(){this[t]&&this[t].register(this)},beforeDestroy:function(){this[t]&&this[t].unregister(this)},methods:{toggle:function(t){this.disabled&&t?t.preventDefault():this.$emit("change")}}})}c("itemGroup")},377:function(t,e,n){"use strict";n.d(e,"a",(function(){return h}));var r=n(15),o=(n(36),n(0)),c=n(46);function l(t,e){return function(){return Object(c.c)("The ".concat(t," component must be used inside a ").concat(e))}}function h(t,e,n){var c=e&&n?{register:l(e,n),unregister:l(e,n)}:null;return o.a.extend({name:"registrable-inject",inject:Object(r.a)({},t,{default:c})})}},378:function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var r=n(15),o=n(0);function c(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"value",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"input";return o.a.extend({name:"toggleable",model:{prop:t,event:e},props:Object(r.a)({},t,{required:!1}),data:function(){return{isActive:!!this[t]}},watch:Object(r.a)(Object(r.a)({},t,(function(t){this.isActive=!!t})),"isActive",(function(n){!!n!==this[t]&&this.$emit(e,n)}))})}c()},382:function(t,e,n){var content=n(383);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(62).default)("6c09027c",content,!0,{sourceMap:!1})},383:function(t,e,n){var r=n(61)((function(i){return i[1]}));r.push([t.i,".theme--light.v-image{color:rgba(0,0,0,.87)}.theme--dark.v-image{color:#fff}.v-image{z-index:0}.v-image__image,.v-image__placeholder{height:100%;left:0;position:absolute;top:0;width:100%;z-index:-1}.v-image__image{background-repeat:no-repeat}.v-image__image--preload{filter:blur(2px)}.v-image__image--contain{background-size:contain}.v-image__image--cover{background-size:cover}",""]),r.locals={},t.exports=r},384:function(t,e,n){var content=n(385);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(62).default)("7931b9be",content,!0,{sourceMap:!1})},385:function(t,e,n){var r=n(61)((function(i){return i[1]}));r.push([t.i,".v-responsive{display:flex;flex:1 0 auto;max-width:100%;overflow:hidden;position:relative}.v-responsive__content{flex:1 0 0px;max-width:100%}.v-application--is-ltr .v-responsive__sizer~.v-responsive__content{margin-left:-100%}.v-application--is-rtl .v-responsive__sizer~.v-responsive__content{margin-right:-100%}.v-responsive__sizer{flex:1 0 0px;transition:padding-bottom .2s cubic-bezier(.25,.8,.5,1)}",""]),r.locals={},t.exports=r},386:function(t,e,n){var content=n(387);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(62).default)("55a47f9c",content,!0,{sourceMap:!1})},387:function(t,e,n){var r=n(61)((function(i){return i[1]}));r.push([t.i,'.theme--light.v-icon{color:rgba(0,0,0,.54)}.theme--light.v-icon:focus:after{opacity:.12}.theme--light.v-icon.v-icon.v-icon--disabled{color:rgba(0,0,0,.38)!important}.theme--dark.v-icon{color:#fff}.theme--dark.v-icon:focus:after{opacity:.24}.theme--dark.v-icon.v-icon.v-icon--disabled{color:hsla(0,0%,100%,.5)!important}.v-icon.v-icon{align-items:center;display:inline-flex;font-feature-settings:"liga";font-size:24px;justify-content:center;letter-spacing:normal;line-height:1;position:relative;text-indent:0;transition:.3s cubic-bezier(.25,.8,.5,1),visibility 0s;-webkit-user-select:none;-moz-user-select:none;user-select:none;vertical-align:middle}.v-icon.v-icon:after{background-color:currentColor;border-radius:50%;content:"";display:inline-block;height:100%;left:0;opacity:0;pointer-events:none;position:absolute;top:0;transform:scale(1.3);transition:opacity .2s cubic-bezier(.4,0,.6,1);width:100%}.v-icon.v-icon--dense{font-size:20px}.v-icon--right{margin-left:8px}.v-icon--left{margin-right:8px}.v-icon.v-icon.v-icon--link{cursor:pointer;outline:none}.v-icon--disabled{pointer-events:none}.v-icon--dense .v-icon__component,.v-icon--dense .v-icon__svg{height:20px}.v-icon__component,.v-icon__svg{height:24px;width:24px}.v-icon__svg{fill:currentColor}',""]),r.locals={},t.exports=r},389:function(t,e,n){var content=n(407);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(62).default)("30f5d2f0",content,!0,{sourceMap:!1})},390:function(t,e,n){var content=n(391);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(62).default)("03b2efc9",content,!0,{sourceMap:!1})},391:function(t,e,n){var r=n(61)((function(i){return i[1]}));r.push([t.i,'.v-chip:not(.v-chip--outlined).accent,.v-chip:not(.v-chip--outlined).error,.v-chip:not(.v-chip--outlined).info,.v-chip:not(.v-chip--outlined).primary,.v-chip:not(.v-chip--outlined).secondary,.v-chip:not(.v-chip--outlined).success,.v-chip:not(.v-chip--outlined).warning{color:#fff}.theme--light.v-chip{border-color:rgba(0,0,0,.12);color:rgba(0,0,0,.87)}.theme--light.v-chip:not(.v-chip--active){background:#e0e0e0}.theme--light.v-chip:hover:before{opacity:.04}.theme--light.v-chip--active:before,.theme--light.v-chip--active:hover:before,.theme--light.v-chip:focus:before{opacity:.12}.theme--light.v-chip--active:focus:before{opacity:.16}.theme--dark.v-chip{border-color:hsla(0,0%,100%,.12);color:#fff}.theme--dark.v-chip:not(.v-chip--active){background:#555}.theme--dark.v-chip:hover:before{opacity:.08}.theme--dark.v-chip--active:before,.theme--dark.v-chip--active:hover:before,.theme--dark.v-chip:focus:before{opacity:.24}.theme--dark.v-chip--active:focus:before{opacity:.32}.v-chip{align-items:center;cursor:default;display:inline-flex;line-height:20px;max-width:100%;outline:none;overflow:hidden;padding:0 12px;position:relative;-webkit-text-decoration:none;text-decoration:none;transition-duration:.28s;transition-property:box-shadow,opacity;transition-timing-function:cubic-bezier(.4,0,.2,1);vertical-align:middle;white-space:nowrap}.v-chip:before{background-color:currentColor;border-radius:inherit;bottom:0;content:"";left:0;opacity:0;pointer-events:none;position:absolute;right:0;top:0}.v-chip .v-avatar{height:24px!important;min-width:24px!important;width:24px!important}.v-chip .v-icon{font-size:24px}.v-application--is-ltr .v-chip .v-avatar--left,.v-application--is-ltr .v-chip .v-icon--left{margin-left:-6px;margin-right:6px}.v-application--is-ltr .v-chip .v-avatar--right,.v-application--is-ltr .v-chip .v-icon--right,.v-application--is-rtl .v-chip .v-avatar--left,.v-application--is-rtl .v-chip .v-icon--left{margin-left:6px;margin-right:-6px}.v-application--is-rtl .v-chip .v-avatar--right,.v-application--is-rtl .v-chip .v-icon--right{margin-left:-6px;margin-right:6px}.v-chip:not(.v-chip--no-color) .v-icon{color:inherit}.v-chip .v-chip__close.v-icon{font-size:18px;max-height:18px;max-width:18px;-webkit-user-select:none;-moz-user-select:none;user-select:none}.v-application--is-ltr .v-chip .v-chip__close.v-icon.v-icon--right{margin-right:-4px}.v-application--is-rtl .v-chip .v-chip__close.v-icon.v-icon--right{margin-left:-4px}.v-chip .v-chip__close.v-icon:active,.v-chip .v-chip__close.v-icon:focus,.v-chip .v-chip__close.v-icon:hover{opacity:.72}.v-chip .v-chip__content{align-items:center;display:inline-flex;height:100%;max-width:100%}.v-chip--active .v-icon{color:inherit}.v-chip--link:before{transition:opacity .3s cubic-bezier(.25,.8,.5,1)}.v-chip--link:focus:before{opacity:.32}.v-chip--clickable{cursor:pointer;-webkit-user-select:none;-moz-user-select:none;user-select:none}.v-chip--clickable:active{box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)}.v-chip--disabled{opacity:.4;pointer-events:none;-webkit-user-select:none;-moz-user-select:none;user-select:none}.v-chip__filter{max-width:24px}.v-chip__filter.v-icon{color:inherit}.v-chip__filter.expand-x-transition-enter,.v-chip__filter.expand-x-transition-leave-active{margin:0}.v-chip--pill .v-chip__filter{margin:0 16px 0 0}.v-chip--pill .v-avatar{height:32px!important;width:32px!important}.v-application--is-ltr .v-chip--pill .v-avatar--left{margin-left:-12px}.v-application--is-ltr .v-chip--pill .v-avatar--right,.v-application--is-rtl .v-chip--pill .v-avatar--left{margin-right:-12px}.v-application--is-rtl .v-chip--pill .v-avatar--right{margin-left:-12px}.v-chip--label{border-radius:4px!important}.v-chip.v-chip--outlined{border-style:solid;border-width:thin}.v-chip.v-chip--outlined.v-chip--active:before{opacity:.08}.v-chip.v-chip--outlined .v-icon{color:inherit}.v-chip.v-chip--outlined.v-chip.v-chip{background-color:transparent!important}.v-chip.v-chip--selected{background:transparent}.v-chip.v-chip--selected:after{opacity:.28}.v-chip.v-size--x-small{border-radius:8px;font-size:10px;height:16px}.v-chip.v-size--small{border-radius:12px;font-size:12px;height:24px}.v-chip.v-size--default{border-radius:16px;font-size:14px;height:32px}.v-chip.v-size--large{border-radius:27px;font-size:16px;height:54px}.v-chip.v-size--x-large{border-radius:33px;font-size:18px;height:66px}',""]),r.locals={},t.exports=r},392:function(t,e,n){"use strict";n(374)},393:function(t,e,n){var r=n(61)((function(i){return i[1]}));r.push([t.i,".test-fuck-card[data-v-20f8e780]{background-color:var(--v-warning-base)!important}",""]),r.locals={},t.exports=r},394:function(t,e,n){t.exports=n.p+"img/service-api-integration.9403d33.svg"},395:function(t,e,n){t.exports=n.p+"img/service-development.790bc7e.svg"},396:function(t,e,n){t.exports=n.p+"img/service-optimize.97bfd4d.svg"},397:function(t,e,n){t.exports=n.p+"img/service-responsive.f8d71fc.svg"},401:function(t,e,n){"use strict";n.r(e);var r=n(434),o=n(364),c=(n(24),n(44),n(45),n(25),n(30),n(14)),l=n(15),h=(n(29),n(6),n(390),n(172)),v=n(398),d=n(373),f=n(366),m=n(376),x=n(173),_=n(378),y=n(380),S=n(368),k=n(46),C=n(9);function z(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function j(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?z(Object(n),!0).forEach((function(e){Object(l.a)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):z(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var O=Object(h.a)(f.a,S.a,y.a,x.a,Object(m.a)("chipGroup"),Object(_.a)("inputValue")).extend({name:"v-chip",props:{active:{type:Boolean,default:!0},activeClass:{type:String,default:function(){return this.chipGroup?this.chipGroup.activeClass:""}},close:Boolean,closeIcon:{type:String,default:"$delete"},closeLabel:{type:String,default:"$vuetify.close"},disabled:Boolean,draggable:Boolean,filter:Boolean,filterIcon:{type:String,default:"$complete"},label:Boolean,link:Boolean,outlined:Boolean,pill:Boolean,tag:{type:String,default:"span"},textColor:String,value:null},data:function(){return{proxyClass:"v-chip--active"}},computed:{classes:function(){return j(j(j(j({"v-chip":!0},y.a.options.computed.classes.call(this)),{},{"v-chip--clickable":this.isClickable,"v-chip--disabled":this.disabled,"v-chip--draggable":this.draggable,"v-chip--label":this.label,"v-chip--link":this.isLink,"v-chip--no-color":!this.color,"v-chip--outlined":this.outlined,"v-chip--pill":this.pill,"v-chip--removable":this.hasClose},this.themeClasses),this.sizeableClasses),this.groupClasses)},hasClose:function(){return Boolean(this.close)},isClickable:function(){return Boolean(y.a.options.computed.isClickable.call(this)||this.chipGroup)}},created:function(){var t=this;[["outline","outlined"],["selected","input-value"],["value","active"],["@input","@active.sync"]].forEach((function(e){var n=Object(c.a)(e,2),r=n[0],o=n[1];t.$attrs.hasOwnProperty(r)&&Object(k.a)(r,o,t)}))},methods:{click:function(t){this.$emit("click",t),this.chipGroup&&this.toggle()},genFilter:function(){var t=[];return this.isActive&&t.push(this.$createElement(d.a,{staticClass:"v-chip__filter",props:{left:!0}},this.filterIcon)),this.$createElement(v.a,t)},genClose:function(){var t=this;return this.$createElement(d.a,{staticClass:"v-chip__close",props:{right:!0,size:18},attrs:{"aria-label":this.$vuetify.lang.t(this.closeLabel)},on:{click:function(e){e.stopPropagation(),e.preventDefault(),t.$emit("click:close"),t.$emit("update:active",!1)}}},this.closeIcon)},genContent:function(){return this.$createElement("span",{staticClass:"v-chip__content"},[this.filter&&this.genFilter(),Object(C.j)(this),this.hasClose&&this.genClose()])}},render:function(t){var e=[this.genContent()],n=this.generateRouteLink(),r=n.tag,data=n.data;data.attrs=j(j({},data.attrs),{},{draggable:this.draggable?"true":void 0,tabindex:this.chipGroup&&!this.disabled?0:data.attrs.tabindex}),data.directives.push({name:"show",value:this.active}),data=this.setBackgroundColor(this.color,data);var o=this.textColor||this.outlined&&this.color;return t(r,this.setTextColor(o,data),e)}}),w=n(474),P=n(473),L={name:"skills-card",data:function(){return{}},computed:{skils:function(){return[{title:"Programming Languages\n",color:this.$vuetify.theme.dark?"#023e8a":"#90e0ef",skilList:["Jvascript","TypeScript"]},{title:"Frontend Stack\n",color:this.$vuetify.theme.dark?"#800f2f":"#ffccd5",skilList:["Nuxt.js","Vue.js","SCSS","Scroll-Driven Animations","Vuetify","Bootstrap","HTML","CSS","PWA"]},{title:"Dev Tools\n",color:this.$vuetify.theme.dark?"#036666":"#C2DADA",skilList:["VSCode","Webstorm","Git","Vite.js","Postman","WebPack"]},{title:"Other\n",color:this.$vuetify.theme.dark?"#491A76":"#E4DDEB",skilList:["asdf","asdf","asdf","asdf"]}]}}},D=(n(392),n(79)),component=Object(D.a)(L,(function(){var t=this,e=t._self._c;return e(P.a,t._l(t.skils,(function(n,c){return e(w.a,{key:c,attrs:{cols:"12",sm:"6",md:"3"}},[e(r.a,{staticClass:"elevation-0 pa-5 rounded-lg h-100 default-card"},[e(o.b,{staticClass:"pa-0 mb-5"},[e("h4",[t._v("\n          "+t._s(n.title)+"\n\n        ")])]),t._v(" "),e(o.a,{staticClass:"d-flex flex-wrap pa-0"},t._l(n.skilList,(function(r){return e(O,{key:r,staticClass:"mt-1 mr-1",attrs:{color:n.color}},[t._v(t._s(r))])})),1)],1)],1)})),1)}),[],!1,null,"20f8e780",null);e.default=component.exports},402:function(t,e,n){"use strict";n.r(e);var r=n(434),o=n(364),c=n(474),l=n(435),h=n(473),v=(n(24),n(54),n(29),n(6),{name:"services-and-project",data:function(){return{services:[{title:"Custom Frontend Development:\n",description:"Crafting bespoke frontend solutions tailored to your unique business requirements. We specialize in creating intuitive user interfaces and engaging frontend experiences that align perfectly with your brand's vision and objectives.",img:"service-development.svg"},{title:"API Integration and Development:\n",description:"Expertly integrating RESTful APIs to empower your applications with robust functionality and seamless data flow. Our API development services ensure secure, efficient, and scalable interactions between your frontend and backend systems.",img:"service-api-integration.svg"},{title:"Responsive Design and UI/UX Optimization:\n",description:"Delivering responsive and visually stunning designs that captivate audiences across all devices. We optimize user interfaces for enhanced usability and intuitive navigation, ensuring exceptional user experiences at every touchpoint.",img:"service-responsive.svg"},{title:"Performance Optimization:\n",description:"Maximizing frontend performance to achieve blazing-fast load times and smooth user interactions. We employ cutting-edge techniques to optimize code, assets, and rendering processes, ensuring your application performs at its peak.",img:"service-optimize.svg"}]}}}),d=n(79),component=Object(d.a)(v,(function(){var t=this,e=t._self._c;return e("div",[e(h.a,{attrs:{justify:"center"}},t._l(t.services.filter((function(t){return"Custom Frontend Development:\n"===t.title||"API Integration and Development:\n"===t.title})),(function(h,v){return e(c.a,{key:v,attrs:{cols:"12",sm:"6",md:"4"}},[e(r.a,{staticClass:"elevation-0 pa-5 rounded-lg h-100 default-card"},[e(l.a,{staticClass:"mx-auto",attrs:{"max-width":"200px",src:n(375)("./".concat(h.img))}}),t._v(" "),e(o.b,{staticClass:"pa-0 my-5 justify-center"},[t._v("\n          "+t._s(h.title)+"\n\n        ")]),t._v(" "),e(o.a,{staticClass:"pa-0"},[e("div",{staticClass:"d-flex"},[e("p",{staticStyle:{"text-align":"justify"}},[t._v("\n              "+t._s(h.description)+"\n\n            ")])])])],1)],1)})),1),t._v(" "),e(h.a,{staticClass:"justify-space-around",attrs:{justify:"center"}},t._l(t.services.filter((function(t){return"Responsive Design and UI/UX Optimization:\n"===t.title||"Performance Optimization:\n"===t.title})),(function(h,v){return e(c.a,{key:v,attrs:{cols:"12",sm:"6",md:"4"}},[e(r.a,{staticClass:"elevation-0 pa-5 rounded-lg h-100 default-card"},[e(l.a,{staticClass:"mx-auto",attrs:{"max-width":"200px",src:n(375)("./".concat(h.img))}}),t._v(" "),e(o.b,{staticClass:"pa-0 my-5 justify-center"},[t._v("\n          "+t._s(h.title)+"\n\n        ")]),t._v(" "),e(o.a,{staticClass:"pa-0"},[e("div",{staticClass:"d-flex"},[e("p",{staticStyle:{"text-align":"justify"}},[t._v("\n              "+t._s(h.description)+"\n\n            ")])])])],1)],1)})),1)],1)}),[],!1,null,null,null);e.default=component.exports},406:function(t,e,n){"use strict";n(389)},407:function(t,e,n){var r=n(61)((function(i){return i[1]}));r.push([t.i,".test-fuck-card[data-v-7776ac4c]{background-color:var(--v-card-base)!important;border:1px solid var(--v-border-base)!important}",""]),r.locals={},t.exports=r},433:function(t,e,n){"use strict";n.r(e);var r=n(0),o=Object(r.b)({__name:"MainSection",setup:t=>({__sfc:!0})}),c=(n(406),n(79)),component=Object(c.a)(o,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",[e("div",[e("h1",[t._v("Mahdi Alavi")]),t._v(" "),e("h1",[t._v("Frontend Developer")]),t._v(" "),e("p",[t._v("\n        Front-end developer with 4 years of experience specializing in building responsive and user-focused web applications. Proficient in JavaScript, TypeScript, HTML, CSS, SCSS, and skilled in using Vue.js and Nuxt3 (in both JavaScript and TypeScript) to create seamless and efficient user experiences. Experienced in version control with Git and adept at delivering high-quality projects, including e-commerce platforms, blogs, a dynamic form-driven DND character builder, and a stock market website featuring extensive chart functionalities.\n      ")]),t._v(" "),t._m(0),t._v(" "),e("div",{staticClass:"my-5"},[e("h1",{staticClass:"mb-5"},[t._v("Skills")]),t._v(" "),e("skils-card")],1),t._v(" "),e("div",{staticClass:"my-5"},[e("h1",{staticClass:"mb-5"},[t._v("Services and Projects")]),t._v(" "),e("services-and-project")],1)])])}),[function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",[e("h1",[t._v("Work Experience")])])}],!1,null,"7776ac4c",null);e.default=component.exports;installComponents(component,{SkilsCard:n(401).default,ServicesAndProject:n(402).default})},435:function(t,e,n){"use strict";var r=n(10),o=(n(91),n(171),n(247),n(63),n(70),n(382),n(379)),c=(n(384),n(400)),l=n(172),h=n(9),v=Object(l.a)(c.a).extend({name:"v-responsive",props:{aspectRatio:[String,Number],contentClass:String},computed:{computedAspectRatio:function(){return Number(this.aspectRatio)},aspectStyle:function(){return this.computedAspectRatio?{paddingBottom:1/this.computedAspectRatio*100+"%"}:void 0},__cachedSizer:function(){return this.aspectStyle?this.$createElement("div",{style:this.aspectStyle,staticClass:"v-responsive__sizer"}):[]}},methods:{genContent:function(){return this.$createElement("div",{staticClass:"v-responsive__content",class:this.contentClass},Object(h.j)(this))}},render:function(t){return t("div",{staticClass:"v-responsive",style:this.measurableStyles,on:this.$listeners},[this.__cachedSizer,this.genContent()])}}),d=n(173),f=n(174),m=n(46),x="undefined"!=typeof window&&"IntersectionObserver"in window;e.a=Object(l.a)(v,d.a).extend({name:"v-img",directives:{intersect:o.a},props:{alt:String,contain:Boolean,eager:Boolean,gradient:String,lazySrc:String,options:{type:Object,default:function(){return{root:void 0,rootMargin:void 0,threshold:void 0}}},position:{type:String,default:"center center"},sizes:String,src:{type:[String,Object],default:""},srcset:String,transition:{type:[Boolean,String],default:"fade-transition"}},data:function(){return{currentSrc:"",image:null,isLoading:!0,calculatedAspectRatio:void 0,naturalWidth:void 0,hasError:!1}},computed:{computedAspectRatio:function(){return Number(this.normalisedSrc.aspect||this.calculatedAspectRatio)},normalisedSrc:function(){return this.src&&"object"===Object(r.a)(this.src)?{src:this.src.src,srcset:this.srcset||this.src.srcset,lazySrc:this.lazySrc||this.src.lazySrc,aspect:Number(this.aspectRatio||this.src.aspect)}:{src:this.src,srcset:this.srcset,lazySrc:this.lazySrc,aspect:Number(this.aspectRatio||0)}},__cachedImage:function(){if(!(this.normalisedSrc.src||this.normalisedSrc.lazySrc||this.gradient))return[];var t=[],e=this.isLoading?this.normalisedSrc.lazySrc:this.currentSrc;this.gradient&&t.push("linear-gradient(".concat(this.gradient,")")),e&&t.push('url("'.concat(e,'")'));var image=this.$createElement("div",{staticClass:"v-image__image",class:{"v-image__image--preload":this.isLoading,"v-image__image--contain":this.contain,"v-image__image--cover":!this.contain},style:{backgroundImage:t.join(", "),backgroundPosition:this.position},key:+this.isLoading});return this.transition?this.$createElement("transition",{attrs:{name:this.transition,mode:"in-out"}},[image]):image}},watch:{src:function(){this.isLoading?this.loadImage():this.init(void 0,void 0,!0)},"$vuetify.breakpoint.width":"getSrc"},mounted:function(){this.init()},methods:{init:function(t,e,n){if(!x||n||this.eager){if(this.normalisedSrc.lazySrc){var r=new Image;r.src=this.normalisedSrc.lazySrc,this.pollForSize(r,null)}this.normalisedSrc.src&&this.loadImage()}},onLoad:function(){this.getSrc(),this.isLoading=!1,this.$emit("load",this.src),this.image&&(this.normalisedSrc.src.endsWith(".svg")||this.normalisedSrc.src.startsWith("data:image/svg+xml"))&&(this.image.naturalHeight&&this.image.naturalWidth?(this.naturalWidth=this.image.naturalWidth,this.calculatedAspectRatio=this.image.naturalWidth/this.image.naturalHeight):this.calculatedAspectRatio=1)},onError:function(){this.hasError=!0,this.$emit("error",this.src)},getSrc:function(){this.image&&(this.currentSrc=this.image.currentSrc||this.image.src)},loadImage:function(){var t=this,image=new Image;this.image=image,image.onload=function(){image.decode?image.decode().catch((function(e){Object(m.c)("Failed to decode image, trying to render anyway\n\n"+"src: ".concat(t.normalisedSrc.src)+(e.message?"\nOriginal error: ".concat(e.message):""),t)})).then(t.onLoad):t.onLoad()},image.onerror=this.onError,this.hasError=!1,this.sizes&&(image.sizes=this.sizes),this.normalisedSrc.srcset&&(image.srcset=this.normalisedSrc.srcset),image.src=this.normalisedSrc.src,this.$emit("loadstart",this.normalisedSrc.src),this.aspectRatio||this.pollForSize(image),this.getSrc()},pollForSize:function(img){var t=this,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100,n=function(){var r=img.naturalHeight,o=img.naturalWidth;r||o?(t.naturalWidth=o,t.calculatedAspectRatio=o/r):img.complete||!t.isLoading||t.hasError||null==e||setTimeout(n,e)};n()},genContent:function(){var content=v.options.methods.genContent.call(this);return this.naturalWidth&&this._b(content.data,"div",{style:{width:"".concat(this.naturalWidth,"px")}}),content},__genPlaceholder:function(){var slot=Object(h.j)(this,"placeholder");if(slot){var t=this.isLoading?[this.$createElement("div",{staticClass:"v-image__placeholder"},slot)]:[];return this.transition?this.$createElement("transition",{props:{appear:!0,name:this.transition}},t):t[0]}}},render:function(t){var e=v.options.render.call(this,t),data=Object(f.a)(e.data,{staticClass:"v-image",attrs:{"aria-label":this.alt,role:this.alt?"img":void 0},class:this.themeClasses,directives:x?[{name:"intersect",modifiers:{once:!0},value:{handler:this.init,options:this.options}}]:void 0});return e.children=[this.__cachedSizer,this.__cachedImage,this.__genPlaceholder(),this.genContent()],t(e.tag,data,e.children)}})}}]);