(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{227:function(t,e,r){var content=r(286);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(19).default)("6570a8f6",content,!0,{sourceMap:!1})},245:function(t,e,r){"use strict";r(11),r(5),r(10),r(12),r(9),r(13);var n=r(2),o=r(85);function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}var l={computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(o.c)("wallet",{address:"getEllipsisAddress"})),data:function(){return{clipped:!1,drawer:!1,fixed:!1,miniVariant:!1,right:!0,rightDrawer:!1,title:"ATOM Reward Calculator"}}},d=l,f=r(94),v=r(139),h=r.n(v),_=r(355),m=r(360),w=r(346),O=r(361),j=r(356),y=r(172),V=r(173),x=r(113),A=r(174),D=r(112),k=r(357),E=r(359),P=r(358),C=r(243),component=Object(f.a)(d,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-app",{attrs:{dark:""}},[r("v-app-bar",{attrs:{"clipped-left":t.clipped,fixed:"",app:""}},[r("v-icon",[t._v("mdi-calculator")]),t._v(" "),r("v-toolbar-title",{domProps:{textContent:t._s(t.title)}}),t._v(" "),r("v-spacer"),t._v(" "),r("v-chip",[t._v("\n      "+t._s(t.address)+"\n    ")])],1),t._v(" "),r("v-main",[r("v-container",[r("nuxt")],1)],1),t._v(" "),r("v-navigation-drawer",{attrs:{right:t.right,temporary:"",fixed:""},model:{value:t.rightDrawer,callback:function(e){t.rightDrawer=e},expression:"rightDrawer"}},[r("v-list",[r("v-list-item",{nativeOn:{click:function(e){t.right=!t.right}}},[r("v-list-item-action",[r("v-icon",{attrs:{light:""}},[t._v(" mdi-repeat ")])],1),t._v(" "),r("v-list-item-title",[t._v("Switch drawer (click me)")])],1)],1)],1),t._v(" "),r("v-footer",{attrs:{absolute:!t.fixed,app:""}},[r("span",[t._v("© "+t._s((new Date).getFullYear()))])])],1)}),[],!1,null,null,null);e.a=component.exports;h()(component,{VApp:_.a,VAppBar:m.a,VChip:w.a,VContainer:O.a,VFooter:j.a,VIcon:y.a,VList:V.a,VListItem:x.a,VListItemAction:A.a,VListItemTitle:D.b,VMain:k.a,VNavigationDrawer:E.a,VSpacer:P.a,VToolbarTitle:C.a})},254:function(t,e,r){r(255),t.exports=r(256)},285:function(t,e,r){"use strict";r(227)},286:function(t,e,r){var n=r(18)(!1);n.push([t.i,"h1[data-v-495dc2cf]{font-size:20px}",""]),t.exports=n},344:function(t,e,r){"use strict";r.r(e),r.d(e,"state",(function(){return n})),r.d(e,"getters",(function(){return o})),r.d(e,"actions",(function(){return c})),r.d(e,"mutations",(function(){return l}));r(27);var n=function(){return{address:""}},o={getAddress:function(t){return t.address},getEllipsisAddress:function(t){return t.address?"".concat(t.address.substring(0,4),"...").concat(t.address.substring(t.address.length-4)):null}},c={changeAccount:function(t,e){var r=t.commit,n=(t.dispatch,e.account);console.log("account",n),r("setAddress",n.address)}},l={setAddress:function(t,address){t.address=address}}},77:function(t,e,r){"use strict";var n={layout:"empty",props:{error:{type:Object,default:null}},data:function(){return{pageNotFound:"404 Not Found",otherError:"An error occurred"}},head:function(){return{title:404===this.error.statusCode?this.pageNotFound:this.otherError}}},o=(r(285),r(94)),c=r(139),l=r.n(c),d=r(355),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-app",{attrs:{dark:""}},[404===t.error.statusCode?r("h1",[t._v("\n    "+t._s(t.pageNotFound)+"\n  ")]):r("h1",[t._v("\n    "+t._s(t.otherError)+"\n  ")]),t._v(" "),r("NuxtLink",{attrs:{to:"/"}},[t._v(" Home page ")])],1)}),[],!1,null,"495dc2cf",null);e.a=component.exports;l()(component,{VApp:d.a})}},[[254,3,1,4]]]);