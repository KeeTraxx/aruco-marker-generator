webpackJsonp([1],{NHnr:function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var n=t("7+uW"),a={render:function(){var e=this.$createElement,r=this._self._c||e;return r("div",{attrs:{id:"app"}},[r("router-view")],1)},staticRenderFns:[]};var s=t("VU/8")({name:"App"},a,!1,function(e){t("ymcE")},null,null).exports,i=t("/ocq"),o={name:"ArucoMarker",props:{id:{type:Number,required:!0}},computed:{svg:function(){var e=[16,23,9,14],r=void 0,t=void 0,n=void 0,a=[[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0]];for(n=0;n<5;n++)for(r=e[this.id>>2*(4-n)&3],t=0;t<5;t++)a[t][n]=r>>4-t&1?1:0;var s='<svg viewBox="0 0 7 7" version="1.1" xmlns="http://www.w3.org/2000/svg">\n<rect x="0" y="0" width="7" height="7" fill="black"/>\n';for(t=0;t<5;t++)for(n=0;n<5;n++)1===a[t][n]&&(s+='  <rect x="'+(t+1)+'" y="'+(n+1)+'" width="1" height="1" fill="white" stroke="white" stroke-width="0.01" />');return s+="</svg>",window.btoa(s)}}},u={render:function(){var e=this.$createElement;return(this._self._c||e)("img",{attrs:{width:"200",height:"200",src:"data:image/svg+xml;base64,"+this.svg}})},staticRenderFns:[]};var c={name:"ArucoMarkerList",components:{ArucoMarker:t("VU/8")(o,u,!1,function(e){t("pag0")},"data-v-3143fd9e",null).exports},data:function(){return{startIndex:0,markers:10}}},d={render:function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",[t("label",{attrs:{for:"startIndex"}},[e._v("StartIndex:")]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model.number",value:e.startIndex,expression:"startIndex",modifiers:{number:!0}}],attrs:{id:"startIndex",type:"number",step:e.markers},domProps:{value:e.startIndex},on:{input:function(r){r.target.composing||(e.startIndex=e._n(r.target.value))},blur:function(r){e.$forceUpdate()}}}),e._v(" "),t("label",{attrs:{for:"markers"}},[e._v("Markers to show")]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model.number",value:e.markers,expression:"markers",modifiers:{number:!0}}],attrs:{id:"markers",type:"number",min:"1",max:"500"},domProps:{value:e.markers},on:{input:function(r){r.target.composing||(e.markers=e._n(r.target.value))},blur:function(r){e.$forceUpdate()}}}),e._v(" "),t("transition-group",{staticClass:"aruco-container",attrs:{name:"markers",tag:"div"}},e._l(e.markers,function(r){return t("div",{key:e.startIndex+r,staticClass:"marker-container"},[t("div",[e._v(e._s(e.startIndex+r-1))]),e._v(" "),t("aruco-marker",{attrs:{id:e.startIndex+r-1}})],1)}))],1)},staticRenderFns:[]};var m=t("VU/8")(c,d,!1,function(e){t("b4MM")},"data-v-28eea856",null).exports;n.a.use(i.a);var v=new i.a({routes:[{path:"/",name:"ArucoMarkerList",component:m}]});n.a.config.productionTip=!1,new n.a({el:"#app",router:v,components:{App:s},template:"<App/>"})},b4MM:function(e,r){},pag0:function(e,r){},ymcE:function(e,r){}},["NHnr"]);
//# sourceMappingURL=app.e5d20e8bc34b088dbcc6.js.map