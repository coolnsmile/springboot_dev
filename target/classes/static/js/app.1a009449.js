(function(e){function t(t){for(var a,i,o=t[0],l=t[1],c=t[2],u=0,v=[];u<o.length;u++)i=o[u],s[i]&&v.push(s[i][0]),s[i]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a]);d&&d(t);while(v.length)v.shift()();return n.push.apply(n,c||[]),r()}function r(){for(var e,t=0;t<n.length;t++){for(var r=n[t],a=!0,i=1;i<r.length;i++){var l=r[i];0!==s[l]&&(a=!1)}a&&(n.splice(t--,1),e=o(o.s=r[0]))}return e}var a={},s={app:0},n=[];function i(e){return o.p+"js/"+({about:"about"}[e]||e)+"."+{about:"e2841302"}[e]+".js"}function o(t){if(a[t])return a[t].exports;var r=a[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.e=function(e){var t=[],r=s[e];if(0!==r)if(r)t.push(r[2]);else{var a=new Promise(function(t,a){r=s[e]=[t,a]});t.push(r[2]=a);var n,l=document.createElement("script");l.charset="utf-8",l.timeout=120,o.nc&&l.setAttribute("nonce",o.nc),l.src=i(e),n=function(t){l.onerror=l.onload=null,clearTimeout(c);var r=s[e];if(0!==r){if(r){var a=t&&("load"===t.type?"missing":t.type),n=t&&t.target&&t.target.src,i=new Error("Loading chunk "+e+" failed.\n("+a+": "+n+")");i.type=a,i.request=n,r[1](i)}s[e]=void 0}};var c=setTimeout(function(){n({type:"timeout",target:l})},12e4);l.onerror=l.onload=n,document.head.appendChild(l)}return Promise.all(t)},o.m=e,o.c=a,o.d=function(e,t,r){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)o.d(r,a,function(t){return e[t]}.bind(null,a));return r},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/",o.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=t,l=l.slice();for(var u=0;u<l.length;u++)t(l[u]);var d=c;n.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"034f":function(e,t,r){"use strict";var a=r("1356"),s=r.n(a);s.a},"0ba4":function(e,t,r){"use strict";var a=r("fc53"),s=r.n(a);s.a},1068:function(e,t,r){},1356:function(e,t,r){},"22c4":function(e,t,r){"use strict";var a=r("5e23"),s=r.n(a);s.a},"46a6":function(e,t,r){"use strict";var a=r("1068"),s=r.n(a);s.a},"56d7":function(e,t,r){"use strict";r.r(t);r("cadf"),r("551c"),r("f751"),r("097d");var a=r("2b0e"),s=r("bb71");r("da64");a["a"].use(s["a"],{iconfont:"md"});var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-app",[r("v-navigation-drawer",{staticClass:"hidden-sm-and-up",attrs:{absolute:""},model:{value:e.sideNav,callback:function(t){e.sideNav=t},expression:"sideNav"}},[r("v-toolbar",{attrs:{flat:""}},[r("v-list",[r("v-list-tile",[r("v-list-tile-title",{staticClass:"title"},[e._v("\n            "+e._s(e.appName)+"\n          ")])],1)],1)],1),r("v-list",e._l(e.menuItems,function(t){return r("v-list-tile",{key:t.title,attrs:{to:t.link}},[r("v-list-tile-action",[r("v-icon",[e._v(e._s(t.icon))])],1),t.badge?r("v-badge",{attrs:{color:"red"}},[r("span",{attrs:{slot:"badge"},slot:"badge"},[e._v(e._s(t.badge))]),r("span",[e._v(e._s(t.title))])]):r("v-list-tile-content",[e._v(e._s(t.title))])],1)}),1)],1),r("v-toolbar",[r("v-toolbar-side-icon",{staticClass:"hidden-sm-and-up",on:{click:function(t){t.stopPropagation(),e.sideNav=!e.sideNav}}}),r("v-toolbar-title",[r("router-link",{staticStyle:{cursor:"pointer"},attrs:{to:"/",tag:"span"}},[e._v("\n        "+e._s(e.appName)+"\n      ")])],1),r("v-spacer"),r("v-toolbar-items",{staticClass:"hidden-xs-only"},e._l(e.menuItems,function(t){return r("v-btn",{key:t.title,attrs:{flat:"",to:t.link}},[r("v-icon",{attrs:{left:""}},[e._v(e._s(t.icon))]),t.badge?r("v-badge",{attrs:{color:"red"}},[r("span",{attrs:{slot:"badge"},slot:"badge"},[e._v(e._s(t.badge))]),r("span",[e._v(e._s(t.title))])]):r("span",[e._v(e._s(t.title))])],1)}),1)],1),e.mode?r("div",[r("router-view",{on:{"show-log":e.printText}})],1):r("div",[r("div",{attrs:{id:"graph"}})])],1)},i=[],o={data:function(){return{mode:!0,sideNav:!0,appName:"SPES",menuItems:[{icon:"date_range",title:"ALA",link:"/calendar"},{icon:"notifications",title:"SCM",badge:1,link:"/notification"},{icon:"notifications",title:"SCR",badge:0,link:"/graph"},{icon:"notifications",title:"FILE",badge:0,link:"/file"}]}},methods:{printText:function(e){this.mode=e}}},l=o,c=(r("034f"),r("2877")),u=r("6544"),d=r.n(u),v=r("7496"),f=r("4ca6"),p=r("8336"),h=r("132d"),m=r("8860"),g=r("ba95"),x=r("40fe"),b=r("5d23"),_=r("f774"),y=r("9910"),w=r("71d9"),I=r("2a7f"),k=r("706c"),C=Object(c["a"])(l,n,i,!1,null,null,null),S=C.exports;d()(C,{VApp:v["a"],VBadge:f["a"],VBtn:p["a"],VIcon:h["a"],VList:m["a"],VListTile:g["a"],VListTileAction:x["a"],VListTileContent:b["a"],VListTileTitle:b["b"],VNavigationDrawer:_["a"],VSpacer:y["a"],VToolbar:w["a"],VToolbarItems:I["a"],VToolbarSideIcon:k["a"],VToolbarTitle:I["b"]});var V=r("8c4f"),T=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("HelloWorld")},P=[],j=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-container",[a("v-layout",{attrs:{"text-xs-center":"",wrap:""}},[a("v-flex",{attrs:{xs12:""}},[a("v-img",{staticClass:"my-3",attrs:{src:r("9b19"),contain:"",height:"200"}})],1),a("v-flex",{attrs:{"mb-4":""}},[a("h1",{staticClass:"display-2 font-weight-bold mb-3"},[e._v("\n        Welcome to Vuetify\n      ")]),a("p",{staticClass:"subheading font-weight-regular"},[e._v("\n        For help and collaboration with other Vuetify developers,\n        "),a("br"),e._v("please join our online\n        "),a("a",{attrs:{href:"https://community.vuetifyjs.com",target:"_blank"}},[e._v("Discord Community")])])]),a("v-flex",{attrs:{"mb-5":"",xs12:""}},[a("h2",{staticClass:"headline font-weight-bold mb-3"},[e._v("What's next?")]),a("v-layout",{attrs:{"justify-center":""}},e._l(e.whatsNext,function(t,r){return a("a",{key:r,staticClass:"subheading mx-3",attrs:{href:t.href,target:"_blank"}},[e._v("\n          "+e._s(t.text)+"\n        ")])}),0)],1),a("v-flex",{attrs:{xs12:"","mb-5":""}},[a("h2",{staticClass:"headline font-weight-bold mb-3"},[e._v("Important Links")]),a("v-layout",{attrs:{"justify-center":""}},e._l(e.importantLinks,function(t,r){return a("a",{key:r,staticClass:"subheading mx-3",attrs:{href:t.href,target:"_blank"}},[e._v("\n          "+e._s(t.text)+"\n        ")])}),0)],1),a("v-flex",{attrs:{xs12:"","mb-5":""}},[a("h2",{staticClass:"headline font-weight-bold mb-3"},[e._v("Ecosystem")]),a("v-layout",{attrs:{"justify-center":""}},e._l(e.ecosystem,function(t,r){return a("a",{key:r,staticClass:"subheading mx-3",attrs:{href:t.href,target:"_blank"}},[e._v("\n          "+e._s(t.text)+"\n        ")])}),0)],1)],1)],1)},D=[],N={data:function(){return{ecosystem:[{text:"vuetify-loader",href:"https://github.com/vuetifyjs/vuetify-loader"},{text:"github",href:"https://github.com/vuetifyjs/vuetify"},{text:"awesome-vuetify",href:"https://github.com/vuetifyjs/awesome-vuetify"}],importantLinks:[{text:"Documentation",href:"https://vuetifyjs.com"},{text:"Chat",href:"https://community.vuetifyjs.com"},{text:"Made with Vuetify",href:"https://madewithvuetifyjs.com"},{text:"Twitter",href:"https://twitter.com/vuetifyjs"},{text:"Articles",href:"https://medium.com/vuetify"}],whatsNext:[{text:"Explore components",href:"https://vuetifyjs.com/components/api-explorer"},{text:"Select a layout",href:"https://vuetifyjs.com/layout/pre-defined"},{text:"Frequently Asked Questions",href:"https://vuetifyjs.com/getting-started/frequently-asked-questions"}]}}},E=N,L=r("a523"),U=r("0e8f"),G=r("adda"),R=r("a722"),O=Object(c["a"])(E,j,D,!1,null,null,null),$=O.exports;d()(O,{VContainer:L["a"],VFlex:U["a"],VImg:G["a"],VLayout:R["a"]});var q={components:{HelloWorld:$}},F=q,A=Object(c["a"])(F,T,P,!1,null,null,null),M=A.exports,Z=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("scmInput",{on:{addInfo:e.addInfo}}),r("scmList",{attrs:{propsdata:e.infos}})],1)},B=[],W=r("f499"),J=r.n(W),H=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("v-form",{ref:"form",model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[r("v-container",{staticClass:"my-1 mx-5"},[r("v-layout",{attrs:{"align-center":""}},[r("v-flex",[r("v-select",{attrs:{items:e.items,label:"Group",required:""},model:{value:e.serverGroup,callback:function(t){e.serverGroup=t},expression:"serverGroup"}})],1),r("v-flex",[r("v-text-field",{attrs:{rules:e.InputDataRules,label:"Server Name",required:""},model:{value:e.serverName,callback:function(t){e.serverName="string"===typeof t?t.trim():t},expression:"serverName"}})],1),r("v-flex",[r("v-text-field",{attrs:{rules:e.serverIpRule,label:"Server Ip",required:""},model:{value:e.serverIp,callback:function(t){e.serverIp=t},expression:"serverIp"}})],1),r("v-flex",[r("v-text-field",{attrs:{rules:e.InputDataRules,label:"Server User",required:""},model:{value:e.serverUser,callback:function(t){e.serverUser=t},expression:"serverUser"}})],1),r("v-flex",[r("v-text-field",{attrs:{rules:e.InputDataRules,label:"Server Password",required:""},model:{value:e.serverPassword,callback:function(t){e.serverPassword=t},expression:"serverPassword"}})],1),r("v-flex",[r("v-text-field",{attrs:{rules:e.portRules,label:"Server Port",required:""},model:{value:e.serverPort,callback:function(t){e.serverPort=t},expression:"serverPort"}})],1),r("v-flex",[r("v-btn",{attrs:{icon:"","mx-0":""}},[r("v-icon",{on:{click:function(t){return e.addInfo()}}},[e._v("done")])],1)],1)],1)],1)],1)],1)},Y=[],K={data:function(){return{valid:!1,serverGroup:"",serverName:"",serverIp:"",serverUser:"",serverPassword:"",serverPort:"",InputDataRules:[function(e){return!!e||"Input is required"}],portRules:[function(e){return!!e||"Input is required"},function(e){return/^()([1-9]|[1-5]?[0-9]{2,4}|6[1-4][0-9]{3}|65[1-4][0-9]{2}|655[1-2][0-9]|6553[1-5])$/.test(e)||"IP port number must be between 1 and 65535"}],serverIpRule:[function(e){return!!e||"Ip Input is required"},function(e){return/^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(e)||"Server IP must be valid"}],info:{serverGroup:"",serverName:"",serverIp:"",serverUser:"",serverPassword:"",serverPort:""},items:["WEB","WAS","DB","EAI","ETC"]}},methods:{addInfo:function(){console.log(this.valid),this.valid&&(this.info.serverGroup=this.serverGroup,this.info.serverName=this.serverName,this.info.serverIp=this.serverIp,this.info.serverUser=this.serverUser,this.info.serverPassword=this.serverPassword,this.info.serverPort=this.serverPort,this.serverGroup="",this.serverName="",this.serverIp="",this.serverPassword="",this.serverUser="",this.serverPort="",this.$emit("addInfo",this.info),this.valid=!1,this.$refs.form.reset())}}},Q=K,z=r("4bd4"),X=r("b56d"),ee=r("2677"),te=Object(c["a"])(Q,H,Y,!1,null,null,null),re=te.exports;d()(te,{VBtn:p["a"],VContainer:L["a"],VFlex:U["a"],VForm:z["a"],VIcon:h["a"],VLayout:R["a"],VSelect:X["a"],VTextField:ee["a"]});var ae=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("v-container",[r("v-data-table",{staticClass:"elevation-1",attrs:{headers:e.headers,items:e.propsdata},scopedSlots:e._u([{key:"items",fn:function(t){return[r("td",{staticClass:"text-xs-center"},[e._v(e._s(t.item.serverGroup))]),r("td",{staticClass:"text-xs-center"},[e._v(e._s(t.item.serverName))]),r("td",{staticClass:"text-xs-center"},[e._v(e._s(t.item.serverIp))]),r("td",{staticClass:"text-xs-center"},[e._v(e._s(t.item.serverUser))]),r("td",{staticClass:"text-xs-center"},[e._v(e._s(t.item.serverPassword))]),r("td",{staticClass:"text-xs-center"},[e._v(e._s(t.item.serverPort))]),r("td",{staticClass:"text-xs-center"},[r("v-btn",{attrs:{icon:""}},[r("v-icon",{on:{click:function(r){return e.updateInfo(t)}}},[e._v("update")])],1)],1),r("td",[r("v-btn",{attrs:{icon:""}},[r("v-icon",{on:{click:function(r){return e.deleteInfo(t)}}},[e._v("delete")])],1)],1)]}}])})],1)],1)},se=[],ne=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-dialog",{attrs:{"max-width":"600px"}},[r("v-icon",{on:{click:function(t){return e.updateInfo(e.dataRow)}}},[e._v("update")]),r("v-card",[r("v-card-title",[r("h2",[e._v(" Add a Ne wProject ")])])],1)],1)},ie=[],oe={},le=oe,ce=r("b0af"),ue=r("12b2"),de=r("169a"),ve=Object(c["a"])(le,ne,ie,!1,null,null,null),fe=ve.exports;d()(ve,{VCard:ce["a"],VCardTitle:ue["a"],VDialog:de["a"],VIcon:h["a"]});var pe={props:["propsdata"],data:function(){return{headers:[{text:"ServerGroup",align:"center",sortable:!1,value:"serverGroup"},{text:"ServerName",value:"ServerName"},{text:"ServerIp",value:"ServerIp"},{text:"ServerUser",value:"ServerUser"},{text:"ServerPassword",value:"ServerPassword"},{text:"ServerPort",value:"ServerPort"},{text:"Update",sortable:!1},{text:"Delete",sortable:!1}]}},methods:{deleteInfo:function(e){this.propsdata.splice(e.index,1)},updateInfo:function(e){}},components:{Popup:fe}},he=pe,me=r("8fea"),ge=Object(c["a"])(he,ae,se,!1,null,null,null),xe=ge.exports;d()(ge,{VBtn:p["a"],VContainer:L["a"],VDataTable:me["a"],VIcon:h["a"]});var be=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-layout",{attrs:{row:"","justify-center":""}},[r("v-dialog",{attrs:{persistent:"","max-width":"600px"},scopedSlots:e._u([{key:"activator",fn:function(t){var a=t.on;return[r("v-btn",e._g({attrs:{color:"primary",dark:""}},a),[e._v("Open Dialog")])]}}]),model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[r("v-card",[r("v-card-title",[r("span",{staticClass:"headline"},[e._v("User Profile")])]),r("v-card-text",[r("v-container",{attrs:{"grid-list-md":""}},[r("v-layout",{attrs:{wrap:""}},[r("v-flex",{attrs:{xs12:"",sm6:"",md4:""}},[r("v-text-field",{attrs:{label:"Legal first name*",required:""}})],1),r("v-flex",{attrs:{xs12:"",sm6:"",md4:""}},[r("v-text-field",{attrs:{label:"Legal middle name",hint:"example of helper text only on focus"}})],1),r("v-flex",{attrs:{xs12:"",sm6:"",md4:""}},[r("v-text-field",{attrs:{label:"Legal last name*",hint:"example of persistent helper text","persistent-hint":"",required:""}})],1),r("v-flex",{attrs:{xs12:""}},[r("v-text-field",{attrs:{label:"Email*",required:""}})],1),r("v-flex",{attrs:{xs12:""}},[r("v-text-field",{attrs:{label:"Password*",type:"password",required:""}})],1),r("v-flex",{attrs:{xs12:"",sm6:""}},[r("v-select",{attrs:{items:["0-17","18-29","30-54","54+"],label:"Age*",required:""}})],1),r("v-flex",{attrs:{xs12:"",sm6:""}},[r("v-autocomplete",{attrs:{items:["Skiing","Ice hockey","Soccer","Basketball","Hockey","Reading","Writing","Coding","Basejump"],label:"Interests",multiple:""}})],1)],1)],1),r("small",[e._v("*indicates required field")])],1),r("v-card-actions",[r("v-spacer"),r("v-btn",{attrs:{color:"blue darken-1",flat:""},on:{click:function(t){e.dialog=!1}}},[e._v("Close")]),r("v-btn",{attrs:{color:"blue darken-1",flat:""},on:{click:function(t){e.dialog=!1}}},[e._v("Save")])],1)],1)],1)],1)},_e=[],ye={data:function(){return{dialog:!1,notifications:!1,sound:!0,widgets:!1}}},we=ye,Ie=r("c6a6"),ke=r("99d9"),Ce=Object(c["a"])(we,be,_e,!1,null,null,null);Ce.exports;d()(Ce,{VAutocomplete:Ie["a"],VBtn:p["a"],VCard:ce["a"],VCardActions:ke["a"],VCardText:ke["b"],VCardTitle:ue["a"],VContainer:L["a"],VDialog:de["a"],VFlex:U["a"],VLayout:R["a"],VSelect:X["a"],VSpacer:y["a"],VTextField:ee["a"]});var Se={data:function(){return{infos:[]}},methods:{addInfo:function(e){this.infos.push(JSON.parse(J()(e))),console.log(e)}},components:{scmInput:re,scmList:xe}},Ve=Se,Te=Object(c["a"])(Ve,Z,B,!1,null,null,null),Pe=Te.exports,je=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-container",{staticClass:"mt-0",attrs:{fluid:"","grid-list-lg":""}},[r("v-layout",{attrs:{row:"",wrap:""}},e._l(e.list,function(t){return r("v-flex",{key:t.id,attrs:{xs12:"",md6:""}},[r("v-card",{attrs:{tile:""}},[r("v-card-media",{staticClass:"white--text",attrs:{src:t.imageURL,height:"200px"}},[r("v-container",{staticClass:"mb-0 pl-2 pb-2",attrs:{fluid:""}},[r("v-layout",[r("v-flex",{attrs:{xs12:""}},[r("v-icon",{attrs:{"x-large":"",dark:""}},[e._v("event")]),r("span",{staticClass:"subheading"},[e._v(e._s(t.date)+" "+e._s(t.hour))])],1)],1)],1)],1),r("v-card-title",{attrs:{"primary-title":""}},[r("div",[r("h3",{staticClass:"headline"},[e._v(e._s(t.title))]),r("div",{staticClass:"subheading pl-0"},[r("v-icon",[e._v("location_on")]),e._v(" "+e._s(t.location)+"\n            ")],1),r("v-flex",{staticClass:"grey--text text--darken-1 pl-0",attrs:{xs12:""}},[r("v-icon",{staticClass:"grey--text text--lighten-1"},[e._v("supervisor_account")]),r("span",{staticClass:"body-1"},[e._v(" "+e._s(t.joined)+" People Joined")])],1)],1)])],1)],1)}),1)],1)},De=[],Ne={data:function(){return{list:[{id:1,title:"Ceremony at Monkey Forest",location:"Alas Kedaton, Tabanan",date:"18 Mar 2018",hour:"14:00 PM",joined:32,imageURL:"https://c2.staticflickr.com/8/7390/11206634984_44f61f926d.jpg",desc:"The temple ceremony in Alas Kedaton Temple is carried out every 210 days a year. It is on <i>Anggarakasih Medangsia</i> (Balinese Hindu calendar) or on every Tuesday where on that time the society do the worship or pray to request the safety and prosperity. The unique in this ceremony is do not use the fire and do not hence Penjor and also finished before the sunset or before the night is come."},{id:2,title:"Pandanus War",location:"Tenganan Pegeringsingan, Karangasem",date:"20 Jul 2018",hour:"10:00 AM",joined:40,imageURL:"https://c2.staticflickr.com/6/5331/17634071142_152c806768.jpg",desc:"Pandanus War or localy known as <i>Mekare-kare</i> is an annual theatrical fight between the young men of the village, utilising prickly pandanus leaf whips! Each dual is staged to the intense martial sounds of <i>gamelan selonding</i> music, and lasts only a few seconds, accompanied by much merriment and laughter."},{id:3,title:"Bali Mass Cremation",location:"Tampaksiring, Gianyar",date:"6 Aug 2018",hour:"09:00 AM",joined:10,imageURL:"https://c1.staticflickr.com/9/8713/17470094589_0f1fd7c67f.jpg",desc:"Cremation is guiding the soul of the deceased family member from hell and underworld to divine realms, later to be reborn in the next generation of the same family. Long preparations proceed cremation ceremonies.<br>Each family uses a certain type of sarcophagus, sculptures formed as mythical animals, according to their cast. A black or white bull is used for a Brahman cast, together with a tower-shaped sarcophage called bade, with roofs like a pagode."},{id:4,title:"Makepung Lampit",location:"Yeh Peh, Jembrana",date:"18 Nov 2018",hour:"07:00 AM",joined:24,imageURL:"https://c1.staticflickr.com/9/8117/8678393979_1997fecfe8.jpg",desc:"Makepung Lampit is a kind of buffalo race without using the wheel as often held now in Jembrana district of Bali, but using the thing called <i>Lampit</i>. Lampit is a tool to flatten rice fields before planting. <br>Makepung Lampit have started to be implemented since the 1940 and stopped around 1990 after the available machines such as tractors to plow rice fields."}]}}},Ee=Ne,Le=(r("0ba4"),r("b901")),Ue=Object(c["a"])(Ee,je,De,!1,null,null,null),Ge=Ue.exports;d()(Ue,{VCard:ce["a"],VCardMedia:Le["a"],VCardTitle:ue["a"],VContainer:L["a"],VFlex:U["a"],VIcon:h["a"],VLayout:R["a"]});var Re=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("v-flex",[this.show?r("scmInput",{on:{addInfo:e.addInfo}}):e._e(),this.show?r("scmList",{attrs:{propsdata:e.infos},on:{monitorStart:e.monitorStart}}):e._e(),this.show?e._e():r("scmGraph",{attrs:{propsdata:e.infos},on:{monitorEnd:e.monitorEnd}})],1)],1)},Oe=[],$e=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("v-form",{ref:"form",model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[r("v-container",[r("v-layout",{attrs:{"align-center":"","mx-1":"","my-3":""}},[r("v-flex",{attrs:{xs3:""}},[r("v-select",{attrs:{items:e.items,label:"Group",required:""},model:{value:e.serverGroup,callback:function(t){e.serverGroup=t},expression:"serverGroup"}})],1),r("v-flex",[r("v-text-field",{attrs:{rules:e.InputDataRules,label:"Server Name",required:""},model:{value:e.serverName,callback:function(t){e.serverName="string"===typeof t?t.trim():t},expression:"serverName"}})],1),r("v-flex",{attrs:{xs3:""}},[r("v-text-field",{attrs:{rules:e.serverIpRule,label:"Server Ip",required:""},model:{value:e.serverIp,callback:function(t){e.serverIp=t},expression:"serverIp"}})],1),r("v-flex",[r("v-text-field",{attrs:{rules:e.InputDataRules,label:"Server User",required:""},model:{value:e.serverUser,callback:function(t){e.serverUser=t},expression:"serverUser"}})],1),r("v-flex",[r("v-text-field",{attrs:{rules:e.InputDataRules,label:"Server Password",required:""},model:{value:e.serverPassword,callback:function(t){e.serverPassword=t},expression:"serverPassword"}})],1),r("v-flex",[r("v-text-field",{attrs:{rules:e.portRules,label:"Server Port",required:""},model:{value:e.serverPort,callback:function(t){e.serverPort=t},expression:"serverPort"}})],1),r("v-flex",[r("v-btn",{attrs:{icon:"","mx-0":""}},[r("v-icon",{on:{click:function(t){return e.addInfo()}}},[e._v("done")])],1)],1)],1)],1)],1)],1)},qe=[],Fe={data:function(){return{valid:!1,serverGroup:"",serverName:"",serverIp:"",serverUser:"",serverPassword:"",serverPort:"",InputDataRules:[function(e){return!!e||"Input is required"}],portRules:[function(e){return!!e||"Input is required"},function(e){return/^()([1-9]|[1-5]?[0-9]{2,4}|6[1-4][0-9]{3}|65[1-4][0-9]{2}|655[1-2][0-9]|6553[1-5])$/.test(e)||"IP port number must be between 1 and 65535"}],serverIpRule:[function(e){return!!e||"Ip Input is required"},function(e){return/^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(e)||"Server IP must be valid"}],info:{serverGroup:"",serverName:"",serverIp:"",serverUser:"",serverPassword:"",serverPort:""},items:["WEB","WAS","DB","EAI","ETC"]}},methods:{addInfo:function(){console.log(this.valid),this.valid&&(this.info.serverGroup=this.serverGroup,this.info.serverName=this.serverName,this.info.serverIp=this.serverIp,this.info.serverUser=this.serverUser,this.info.serverPassword=this.serverPassword,this.info.serverPort=this.serverPort,this.serverGroup="",this.serverName="",this.serverIp="",this.serverPassword="",this.serverUser="",this.serverPort="",this.$emit("addInfo",this.info),this.valid=!1,this.$refs.form.reset())}}},Ae=Fe,Me=Object(c["a"])(Ae,$e,qe,!1,null,null,null),Ze=Me.exports;d()(Me,{VBtn:p["a"],VContainer:L["a"],VFlex:U["a"],VForm:z["a"],VIcon:h["a"],VLayout:R["a"],VSelect:X["a"],VTextField:ee["a"]});var Be=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("v-container",[r("v-flex",[r("v-data-table",{staticClass:"elevation-1",attrs:{headers:e.headers,items:e.propsdata},scopedSlots:e._u([{key:"items",fn:function(t){return[r("td",{staticClass:"text-xs-center"},[e._v(e._s(t.item.serverGroup))]),r("td",{staticClass:"text-xs-center"},[e._v(e._s(t.item.serverName))]),r("td",{staticClass:"text-xs-center"},[e._v(e._s(t.item.serverIp))]),r("td",{staticClass:"text-xs-center"},[e._v(e._s(t.item.serverUser))]),r("td",{staticClass:"text-xs-center"},[e._v(e._s(t.item.serverPassword))]),r("td",{staticClass:"text-xs-center"},[e._v(e._s(t.item.serverPort))]),r("td",[r("v-btn",{attrs:{icon:""}},[r("v-icon",{on:{click:function(r){return e.deleteInfo(t)}}},[e._v("delete")])],1)],1)]}}])})],1),r("v-flex",{staticClass:"text-xs-right"},[r("v-btn",{attrs:{icon:""}},[r("v-icon",{on:{click:function(t){return e.monitorStart()}}},[e._v("launch ")])],1)],1),e._v("\nfsdfdsfdfds\n")],1)],1)},We=[],Je={props:["propsdata"],data:function(){return{headers:[{text:"ServerGroup",align:"center",sortable:!1,value:"serverGroup"},{text:"ServerName",value:"ServerName",align:"center"},{text:"ServerIp",value:"ServerIp",align:"center"},{text:"ServerUser",value:"ServerUser",align:"center"},{text:"ServerPassword",value:"ServerPassword",align:"center"},{text:"ServerPort",value:"ServerPort",align:"center"},{text:"Update",sortable:!1,align:"center"},{text:"Delete",sortable:!1,align:"center"}],userData:[]}},methods:{deleteInfo:function(e){this.propsdata.splice(e.index,1)},monitorStart:function(){console.log(this.propsdata),this.userData=this.propsdata,console.log("<=================== this.userData ==============>"),console.log(J()(this.userData)),this.$emit("monitorStart",this.userData)}}},He=Je,Ye=Object(c["a"])(He,Be,We,!1,null,null,null),Ke=Ye.exports;d()(Ye,{VBtn:p["a"],VContainer:L["a"],VDataTable:me["a"],VFlex:U["a"],VIcon:h["a"]});var Qe=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-layout",[r("v-container",[r("v-flex",[e._v("\r\n        \r\n      "+e._s(e.propsdata)+"\r\n      ============================\r\n      ")]),r("v-flex",[r("div",{ref:"graph",staticClass:"vue-plotly"})])],1),e._v(">\r\n  ")],1)},ze=[],Xe=r("a4bb"),et=r.n(Xe),tt=(r("28a5"),r("ac6a"),r("6b54"),r("2d7d")),rt=r.n(tt),at=r("61cc"),st=r.n(at),nt=r("bc3a"),it=r.n(nt),ot=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-layout",[r("v-container",[r("v-flex",[e._v("\n      dasdas\n    "+e._s(e.propsdata)+"\n    \n    ")]),r("v-flex",[r("div",{ref:"graphDb",staticClass:"vue-plotly"})])],1),e._v(">\n")],1)},lt=[],ct={props:["propsdata"],data:function(){return{startTime:""}},watch:{propsdata:{handler:function(e){console.log("handler")},deep:!0}},mounted:function(){},methods:{leadingZero:function(e){return e<10?"0"+e.toString():e.toString()},startInterval:function(){var e=this;setInterval(function(){e.startTime=new Date,e.startTime.setSeconds(e.startTime.getSeconds()+5);var t=e.leadingZero(e.startTime.getFullYear())+"."+(e.startTime.getMonth()+1)+"."+e.startTime.getDate()+" "+e.leadingZero(e.startTime.getHours()%12)+":"+e.leadingZero(e.startTime.getMinutes())+":"+e.leadingZero(e.startTime.getSeconds());st.a.extendTraces(e.$refs.graphDb,{x:[[t],[t]],y:[[100*Math.random()],[100*Math.random()]]},[0,1])},5e3)},test:function(){this.startTime=new Date;var e=this.leadingZero(this.startTime.getFullYear())+"."+(this.startTime.getMonth()+1)+"."+this.startTime.getDate()+" "+this.leadingZero(this.startTime.getHours()%12)+":"+this.leadingZero(this.startTime.getMinutes())+":"+this.leadingZero(this.startTime.getSeconds());st.a.newPlot(this.$refs.graphDb,[{x:[e],y:[0],type:"line"},{x:[e],y:[0],type:"line"}])}}},ut=ct,dt=(r("22c4"),Object(c["a"])(ut,ot,lt,!1,null,null,null)),vt=dt.exports;d()(dt,{VContainer:L["a"],VFlex:U["a"],VLayout:R["a"]});var ft={props:["propsdata"],data:function(){return{polling:null,sessionList:[],cpuUsage:[],startTime:"",totCpuInfo:new rt.a}},mounted:function(){this.createGraph(),this.startInterval()},components:{testGraph:vt},methods:{leadingZero:function(e){return e<10?"0"+e.toString():e.toString()},sortInfo:function(){for(var e=0;e<this.propsdata.length;e++)this.totCpuInfo.set(this.propsdata[e].serverGroup+"_"+this.propsdata[e].serverName+"_"+this.propsdata[e].serverIp,100)},createGraph:function(){var e=this;it.a.post("http://localhost:8081/postData",this.propsdata,{headers:{"Content-Type":"application/json"}}).then(function(t){e.result=t.data,e.sessionList=t.data}).catch(function(e){console.warn("ERROR : ",e)}),this.startTime=new Date;var t=[],r=this.leadingZero(this.startTime.getFullYear())+"."+(this.startTime.getMonth()+1)+"."+this.leadingZero(this.startTime.getHours()%12)+":"+this.leadingZero(this.startTime.getMinutes())+":"+this.leadingZero(this.startTime.getSeconds());this.totCpuInfo.forEach(function(e,a,s){t.push({x:[r],y:[0],type:"line",name:a.split("_")[1]})}),st.a.newPlot(this.$refs.graph,t)},startInterval:function(){var e=this;this.polling=setInterval(function(){new Date;e.isStarted&&(e.getData(),st.a.extendTraces(e.$refs.graph,e.makeGraphData(),e.makeGraphCountArrayData()))},5e3)},getData:function(){var e=this;return it.a.post("http://localhost:8081/grapData",this.propsdata,{headers:{"Content-Type":"application/json"}}).then(function(t){e.result=t.data,e.cpuUsage=t.data}).catch(function(e){console.warn("ERROR : ",e)}),et()(this.cpuUsage).forEach(function(t){var r=t;e.totCpuInfo.set(r,e.cpuUsage[r])}),this.totCpuInfo},makeGraphData:function(){var e=[],t=[];this.startTime.setSeconds(this.startTime.getSeconds()+5);var r=this.leadingZero(this.startTime.getFullYear())+"."+(this.startTime.getMonth()+1)+"."+this.leadingZero(this.startTime.getHours()%12)+":"+this.leadingZero(this.startTime.getMinutes())+":"+this.leadingZero(this.startTime.getSeconds());this.totCpuInfo.forEach(function(a,s,n){var i=[],o=[];-1==a?(i.push(" "),o.push(r)):(i.push(100-a),o.push(r)),e.push(i),t.push(o)});var a={x:t,y:e};return a},makeGraphCountArrayData:function(){var e=[],t=0;return this.totCpuInfo.forEach(function(r,a,s){e.push(t),t++}),t=0,e},check:function(){setTimeout(function(){console.log(" check Works!")},3e3)}}},pt=ft,ht=(r("69ea"),Object(c["a"])(pt,Qe,ze,!1,null,null,null)),mt=ht.exports;d()(ht,{VContainer:L["a"],VFlex:U["a"],VLayout:R["a"]});var gt={data:function(){return{infos:[],show:!0}},mounted:function(){console.log("AppScm vue is mounted")},created:function(){var e=this;window.addEventListener("beforeunload",function(){e.check()},!1)},destroyed:function(){console.log("AppScm.vue is destroyed")},beforeDestroy:function(){console.log("AppScm.vue is beforeDestroy")},methods:{addInfo:function(e){this.infos.push(JSON.parse(J()(e))),console.log(e)},monitorStart:function(e){var t=new Date;this.show=!1,this.infos=[];for(var r=0;r<e.length;r++)e[r].time=t;this.infos=JSON.parse(J()(e)),console.log("revised Info : "+J()(this.infos))},monitorEnd:function(){this.show=!0},check:function(){console.log("check is called")}},components:{scmInput:Ze,scmList:Ke,scmGraph:mt}},xt=gt,bt=Object(c["a"])(xt,Re,Oe,!1,null,null,null),_t=bt.exports;d()(bt,{VFlex:U["a"]});var yt=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("textarea",{directives:[{name:"model",rawName:"v-model",value:e.text,expression:"text"}],attrs:{rows:"10"},domProps:{value:e.text},on:{input:function(t){t.target.composing||(e.text=t.target.value)}}}),r("br"),r("FileReader",{on:{load:e.printText}})],1)},wt=[],It=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("label",[r("input",{attrs:{type:"file"},on:{change:e.loadTextFromFile}})])])},kt=[],Ct={methods:{loadTextFromFile:function(e){var t=this,r=e.target.files[0],a=new FileReader;a.onload=function(e){return t.$emit("load",e.target.result)},a.readAsText(r)}}},St=Ct,Vt=(r("46a6"),Object(c["a"])(St,It,kt,!1,null,null,null)),Tt=Vt.exports,Pt={name:"app",data:function(){return{text:""}},components:{FileReader:Tt},methods:{printText:function(){console.log("received an event")}}},jt=Pt,Dt=Object(c["a"])(jt,yt,wt,!1,null,null,null),Nt=Dt.exports;a["a"].use(V["a"]);var Et=new V["a"]({mode:"history",base:"/",routes:[{path:"/",name:"home",component:M},{path:"/calendar",name:"calendar",component:Ge},{path:"/notification",name:"Notification",component:Pe},{path:"/graph",name:"RandomChart",component:_t},{path:"/file",name:"FileReader",component:Nt},{path:"/about",name:"about",component:function(){return r.e("about").then(r.bind(null,"f820"))}}]});a["a"].config.productionTip=!1,new a["a"]({router:Et,render:function(e){return e(S)}}).$mount("#app")},"5e23":function(e,t,r){},"69ea":function(e,t,r){"use strict";var a=r("a1ac"),s=r.n(a);s.a},"9b19":function(e,t,r){e.exports=r.p+"img/logo.07d1e22e.svg"},a1ac:function(e,t,r){},fc53:function(e,t,r){}});
//# sourceMappingURL=app.1a009449.js.map