(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{342:function(t,e,r){var content=r(351);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(12).default)("1b7833da",content,!0,{sourceMap:!1})},350:function(t,e,r){"use strict";r(342)},351:function(t,e,r){var o=r(11)(!1);o.push([t.i,".best{background-color:#639}",""]),t.exports=o},403:function(t,e,r){"use strict";r.r(e);r(41),r(226);var o=r(99),n={components:{},data:function(){return{fee:25e-5,amount:1e3,headers:[{text:"周期",align:"start",sortable:!1,value:"period"},{text:"周期毎ATOM",align:"start",sortable:!1,value:"rewardByPeriod"},{text:"30日でかかるGas代",align:"start",sortable:!1,value:"totalFee"},{text:"30日で得るATOM",align:"start",sortable:!1,value:"monthRewardAtom"},{text:"365日でかかるGas代",align:"start",sortable:!1,value:"totalFeeYear"},{text:"365日で得るATOM",align:"start",sortable:!1,value:"yearRewardAtom"}],apy:10}},computed:{items:function(){for(var t=[{period:"無し",totalFee:0,rewardByPeriod:0,monthRewardAtom:this.amount*(this.apy/365/24)*720/100,yearRewardAtom:this.amount*this.apy/100}],e=1;e<=30;e++){var r=30/e,o=this.apy/365/24*(24*e)/100+1,n=this.amount*(o-1),l=this.fee*r,m=Math.pow(o,r),d=this.amount*m-l-this.amount,c=365/e,f=Math.pow(o,c),v=this.fee*c,h=this.amount*f-v-this.amount;t.push({period:e+"日",totalFee:l,rewardByPeriod:n,monthRewardAtom:d<0?0:d,totalFeeYear:v,yearRewardAtom:h<0?0:h})}return t},best:function(){return Math.max.apply(Math,Object(o.a)(this.items.map((function(t){return t.yearRewardAtom}))))}},methods:{itemClass:function(t){return t.yearRewardAtom===this.best?"best":""},atom:function(t){return parseFloat(t).toFixed(6)}}},l=(r(350),r(76)),m=r(119),d=r.n(m),c=r(343),f=r(326),v=r(400),h=r(402),y=r(401),w=r(395),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-row",{attrs:{justify:"center",align:"center"}},[r("v-col",{attrs:{cols:"12"}},[r("v-card",[r("v-card-title",{staticClass:"headline"},[t._v("試算")]),t._v(" "),r("div",{staticClass:"d-flex"},[r("v-text-field",{staticClass:"mx-5",attrs:{type:"number",label:"Delegate ATOM"},model:{value:t.amount,callback:function(e){t.amount=e},expression:"amount"}}),t._v(" "),r("v-text-field",{staticClass:"mr-5",attrs:{label:"fee",type:"number",step:"0.0001"},model:{value:t.fee,callback:function(e){t.fee=e},expression:"fee"}}),t._v(" "),r("v-text-field",{staticClass:"mr-5",attrs:{label:"APR",type:"number",step:"0.01"},model:{value:t.apy,callback:function(e){t.apy=e},expression:"apy"}})],1),t._v(" "),r("v-card-text",[r("v-data-table",{attrs:{headers:t.headers,items:t.items,"items-per-page":366,"item-class":t.itemClass,"hide-default-footer":"","mobile-breakpoint":"0"},scopedSlots:t._u([{key:"item.rewardByPeriod",fn:function(e){var r=e.item;return[t._v("\n            "+t._s(t.atom(r.rewardByPeriod))+"\n          ")]}},{key:"item.totalFee",fn:function(e){var r=e.item;return[t._v("\n            "+t._s(t.atom(r.totalFee))+"\n          ")]}},{key:"item.monthRewardAtom",fn:function(e){var r=e.item;return[t._v("\n            "+t._s(t.atom(r.monthRewardAtom))+"\n          ")]}},{key:"item.totalFeeYear",fn:function(e){var r=e.item;return[t._v("\n            "+t._s(t.atom(r.totalFeeYear))+"\n          ")]}},{key:"item.yearRewardAtom",fn:function(e){var r=e.item;return[t._v("\n            "+t._s(t.atom(r.yearRewardAtom))+"\n          ")]}}],null,!0)})],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;d()(component,{VCard:c.a,VCardText:f.a,VCardTitle:f.b,VCol:v.a,VDataTable:h.a,VRow:y.a,VTextField:w.a})}}]);