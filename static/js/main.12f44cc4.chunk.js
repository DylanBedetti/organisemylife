(this.webpackJsonporganisemylife=this.webpackJsonporganisemylife||[]).push([[0],{330:function(e,t,a){"use strict";a.r(t);var n=a(4),c=a(0),r=a.n(c),s=a(11),i=a.n(s),o=a(393),j=a(190),l=a(392),d=a(112),b=a(18),u=a(68),O=a(43),p=a(37),x=a(2),h=a(372),m=a(24),f=a(395),g=a(376),v=a(377),y=a(379),k=a(78),I=a(378),w=a(332),L=a(174),C=a.n(L),S=a(176),E=a.n(S),T=a(175),N=a.n(T),D=a(334),M=a(381),B=a(382),_=a(170),R=a.n(_),F=a(171),W=a.n(F),z=a(172),V=a.n(z),A=a(173),q=a.n(A),G=a(380),J=240,H=[["TO DO's","/"],["Completed","/completed"],["Statistics","/stats"],["Feedback","/feedback"]],K=Object(h.a)((function(e){return{root:{display:"flex"},appBar:{zIndex:e.zIndex.drawer+1,transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})},appBarShift:{marginLeft:J,width:"calc(100% - ".concat(J,"px)"),transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},menuButton:{marginRight:36},hide:{display:"none"},drawer:{width:J,flexShrink:0,whiteSpace:"nowrap"},drawerOpen:{width:J,transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},drawerClose:Object(p.a)({transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),overflowX:"hidden",width:e.spacing(7)+1},e.breakpoints.up("sm"),{width:e.spacing(9)+1}),toolbar:Object(O.a)({display:"flex",alignItems:"center",justifyContent:"flex-end",padding:e.spacing(0,1)},e.mixins.toolbar),content:{flexGrow:1,padding:e.spacing(3)}}}));function P(e){var t,a,c=e.children,s=K(),i=Object(m.a)(),o=r.a.useState(!1),j=Object(u.a)(o,2),l=j[0],b=j[1],O=function(e){switch(e){case 0:return Object(n.jsx)(R.a,{});case 1:return Object(n.jsx)(W.a,{});case 2:return Object(n.jsx)(V.a,{});case 3:return Object(n.jsx)(q.a,{});default:return null}};return Object(n.jsxs)("div",{className:s.root,children:[Object(n.jsx)(g.a,{position:"fixed",className:Object(x.a)(s.appBar,Object(p.a)({},s.appBarShift,l)),children:Object(n.jsxs)(v.a,{children:[Object(n.jsx)(w.a,{color:"inherit","aria-label":"open drawer",onClick:function(){b(!0)},edge:"start",className:Object(x.a)(s.menuButton,Object(p.a)({},s.hide,l)),children:Object(n.jsx)(C.a,{})}),Object(n.jsx)(k.a,{variant:"h6",noWrap:!0,children:"Organise My Life"})]})}),Object(n.jsxs)(f.a,{variant:"permanent",className:Object(x.a)(s.drawer,(t={},Object(p.a)(t,s.drawerOpen,l),Object(p.a)(t,s.drawerClose,!l),t)),classes:{paper:Object(x.a)((a={},Object(p.a)(a,s.drawerOpen,l),Object(p.a)(a,s.drawerClose,!l),a))},children:[Object(n.jsx)("div",{className:s.toolbar,children:Object(n.jsx)(w.a,{onClick:function(){b(!1)},children:"rtl"===i.direction?Object(n.jsx)(N.a,{}):Object(n.jsx)(E.a,{})})}),Object(n.jsx)(I.a,{}),Object(n.jsx)(y.a,{children:H.map((function(e,t){return Object(n.jsx)(G.a,{component:d.b,to:e[1],disableGutters:!0,ListItemClasses:!0,children:Object(n.jsxs)(D.a,{button:!0,children:[Object(n.jsx)(M.a,{children:O(t)}),Object(n.jsx)(B.a,{primary:e[0]})]},e[0])},t)}))})]}),Object(n.jsxs)("main",{className:s.content,children:[Object(n.jsx)("div",{className:s.toolbar}),Object(n.jsx)(k.a,{paragraph:!0,children:c})]})]})}var U=a(388),X=a(29),Y=a.n(X),Q=a(21),Z=a(53),$=a.n(Z),ee=a(77),te="CREATE_LIST_ITEM",ae="FETCH_LIST_ITEMS",ne="DELETE_LIST_ITEM",ce="EDIT_LIST_ITEM",re=a(178),se=a.n(re).a.create({baseURL:"http://localhost:3001"}),ie=function(){return function(){var e=Object(ee.a)($.a.mark((function e(t){var a;return $.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,se.get("/list");case 2:a=e.sent,t({type:ae,payload:a.data});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},oe=function(e,t){return function(){var a=Object(ee.a)($.a.mark((function a(n){var c;return $.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,se.patch("/list/".concat(e),t);case 2:c=a.sent,n({type:ce,payload:c.data});case 4:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()},je=a(391),le=a(394),de=a(108),be=a.n(de),ue=a(109),Oe=a.n(ue),pe=a(115),xe=a(110),he=a.n(xe),me=a(196),fe=a(26),ge=a.n(fe),ve=a(396),ye=a(182),ke=a.n(ye),Ie=a(181),we=a.n(Ie),Le=a(384),Ce=a(386),Se=a(385),Ee=a(389),Te=a(16),Ne=a(390),De=a(387),Me=a(191),Be=a(189),_e=a(15),Re=a(188),Fe=[ge()().year(),ge()().month()+1,ge()().date()+1],We=Fe[0],ze=Fe[1],Ve=Fe[2],Ae=Object(Q.b)((function(e){return{list:e.list}}),{createListItem:function(e){return function(){var t=Object(ee.a)($.a.mark((function t(a,n){var c;return $.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,se.post("/list",Object(O.a)({},e));case 2:c=t.sent,a({type:te,payload:c.data});case 4:case"end":return t.stop()}}),t)})));return function(e,a){return t.apply(this,arguments)}}()},editListItem:oe})((function(e){var t=e.children,a=e.createListItem,r=e.editListItem,s=e.listId,i=e.edit,o=e.list,j=Object(c.useState)(!1),l=Object(u.a)(j,2),d=l[0],b=l[1],O=function(){b(!1)};return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("div",{onClick:function(){b(!0)},children:t}),Object(n.jsxs)(Le.a,{open:d,onClose:O,fullWidth:!0,children:[Object(n.jsx)(Ee.a,{children:"".concat(i?"Edit":"Add"," task")}),Object(n.jsx)(Se.a,{children:Object(n.jsx)(_e.a,{utils:Re.a,children:Object(n.jsx)(Te.c,{initialValues:{task:i?o[s].task:"",due:i?1e3*o[s].due:"".concat(We,"-").concat(ze,"-").concat(Ve)},validate:function(e){var t={};return e.task||(t.task="Required"),e.due||(t.due="Required"),t},onSubmit:function(e){var t={};(t=Y.a.cloneDeep(e)).due=ge()(e.due).unix(),i?r(s,t):(t.complete=!1,a(t)),O()},children:function(e){var t=e.submitForm,a=e.isSubmitting;return Object(n.jsxs)(Te.b,{children:[Object(n.jsx)(Te.a,{autoFocus:!0,fullWidth:!0,autoComplete:"off",multiline:!0,component:Me.a,name:"task",label:"Task",type:"text"}),Object(n.jsx)("br",{}),Object(n.jsx)(Te.a,{fullWidth:!0,disablePast:!0,component:Be.a,label:"Due date",name:"due"}),Object(n.jsx)("br",{}),a&&Object(n.jsx)(Ne.a,{}),Object(n.jsx)("br",{}),Object(n.jsx)(De.a,{color:"primary",disabled:a,onClick:O,children:"Cancel"}),Object(n.jsx)(De.a,{color:"primary",disabled:a,onClick:t,children:i?"Save":"Submit"})]})}})})}),Object(n.jsx)(Ce.a,{})]})]})})),qe=Object(Q.b)(null,{deleteListItem:function(e){return function(){var t=Object(ee.a)($.a.mark((function t(a){return $.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,se.delete("/list/".concat(e));case 2:a({type:ne,payload:e});case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}})((function(e){var t=e.children,a=e.deleteListItem,r=e.listId,s=Object(c.useState)(null),i=Object(u.a)(s,2),o=i[0],j=i[1],l=Boolean(o),d=l?"simple-popover":void 0;return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("div",{onClick:function(e){j(e.currentTarget)},children:t}),Object(n.jsx)(ve.a,{id:d,open:l,anchorEl:o,onClose:function(){j(null)},anchorOrigin:{vertical:"bottom",horizontal:"center"},transformOrigin:{vertical:"top",horizontal:"center"},children:Object(n.jsxs)(y.a,{children:[Object(n.jsx)(Ae,{edit:!0,listId:r,children:Object(n.jsxs)(D.a,{button:!0,children:[Object(n.jsx)(M.a,{children:Object(n.jsx)(we.a,{})}),Object(n.jsx)(B.a,{primary:"Edit task"})]})}),Object(n.jsx)(I.a,{}),Object(n.jsxs)(D.a,{button:!0,onClick:function(){return a(r)},children:[Object(n.jsx)(M.a,{children:Object(n.jsx)(ke.a,{})}),Object(n.jsx)(B.a,{primary:"Delete task"})]})]})})]})})),Ge=a(183),Je=a.n(Ge),He=a(114),Ke=ge()().unix(),Pe=Object(h.a)({icon:{margin:"0px 5px 0px 0px",fontSize:15},typography:{display:"flex",alignItems:"center",flexWrap:"wrap",color:function(e){return e.due>Ke?"":He.a[300]}}}),Ue=function(e){return e>Ke?ge()(1e3*e).format("dddd, MMMM Do"):"Overdue!"},Xe=function(e){var t=Pe(e),a=e.due;return Object(n.jsxs)(k.a,{className:t.typography,variant:"caption",children:[Object(n.jsx)(Je.a,{className:t.icon}),Ue(a)]})},Ye=Object(h.a)((function(){return{checkedButton:{color:pe.a[500]}}})),Qe=Object(Q.b)(null,{editListItem:oe})((function(e){var t=e.text,a=e.complete,c=e.listId,r=e.due,s=e.editListItem,i=Ye();return Object(n.jsx)(me.a,{in:!a,timeout:1e3,children:Object(n.jsxs)(D.a,{role:void 0,dense:!0,children:[Object(n.jsx)(M.a,{onClick:function(){return s(c,{complete:!a,datecomplete:ge()().unix()})},children:Object(n.jsx)(le.a,{edge:"start",checked:a,tabIndex:-1,disableRipple:!0,icon:Object(n.jsx)(be.a,{}),checkedIcon:Object(n.jsx)(Oe.a,{className:i.checkedButton})})}),Object(n.jsx)(B.a,{primary:t,secondary:Object(n.jsx)(Xe,{due:r})}),Object(n.jsx)(je.a,{children:Object(n.jsx)(qe,{listId:c,children:Object(n.jsx)(w.a,{edge:"end",children:Object(n.jsx)(he.a,{})})})})]})})})),Ze=a(184),$e=a.n(Ze),et=a(113),tt=Object(h.a)((function(){return{disabledItem:{color:et.a[500]}}})),at=function(){var e=tt();return Object(n.jsx)(n.Fragment,{children:Object(n.jsx)(Ae,{children:Object(n.jsxs)(D.a,{role:void 0,dense:!0,button:!0,className:e.disabledItem,children:[Object(n.jsx)(M.a,{children:Object(n.jsx)($e.a,{})}),Object(n.jsx)(B.a,{primary:"Add task"})]})})})},nt=Object(h.a)((function(e){return{root:{width:"100%",backgroundColor:e.palette.background.paper}}})),ct=Object(Q.b)((function(e){return{list:e.list}}),{fetchListItems:ie})((function(e){var t=e.fetchListItems,a=e.list,r=nt();Object(c.useEffect)((function(){t()}),[]);return Object(n.jsxs)(U.a,{container:!0,spacing:2,children:[Object(n.jsx)(U.a,{item:!0,xs:!1,sm:2}),Object(n.jsx)(U.a,{item:!0,xs:12,sm:8,children:Object(n.jsxs)(y.a,{className:r.root,children:[function(){var e=[];return Y.a.mapValues(a,(function(t){t.complete||e.push(Object(n.jsx)(Qe,{listId:t.id,text:t.task,complete:t.complete,due:t.due},t.id))})),e}(),Object(n.jsx)(at,{})]})}),Object(n.jsx)(U.a,{item:!0,xs:!1,sm:2})]})})),rt=Object(h.a)((function(){return{checkedButton:{color:pe.a[500]},listItem:{background:pe.a[100]}}})),st=Object(Q.b)(null,{editListItem:oe})((function(e){var t=e.editListItem,a=e.listId,c=e.text,r=e.complete,s=rt();return Object(n.jsxs)(D.a,{role:void 0,dense:!0,className:s.listItem,children:[Object(n.jsx)(M.a,{onClick:function(){return t(a,{complete:!r})},children:Object(n.jsx)(le.a,{edge:"start",checked:r,tabIndex:-1,disableRipple:!0,icon:Object(n.jsx)(be.a,{}),checkedIcon:Object(n.jsx)(Oe.a,{className:s.checkedButton})})}),Object(n.jsx)(B.a,{primary:c}),Object(n.jsx)(je.a,{children:Object(n.jsx)(qe,{listId:a,children:Object(n.jsx)(w.a,{edge:"end",children:Object(n.jsx)(he.a,{})})})})]})})),it=Object(h.a)((function(e){return{root:{width:"100%",backgroundColor:e.palette.background.paper}}})),ot=Object(Q.b)((function(e){return{list:e.list}}),{fetchListItems:ie})((function(e){var t=e.list,a=e.fetchListItems,r=it();Object(c.useEffect)((function(){a()}),[]);return Object(n.jsxs)(U.a,{container:!0,spacing:2,children:[Object(n.jsx)(U.a,{item:!0,xs:!1,sm:2}),Object(n.jsx)(U.a,{item:!0,xs:12,sm:8,children:Object(n.jsx)(y.a,{className:r.root,children:function(){var e=[];return Y.a.mapValues(t,(function(t){t.complete&&e.push(Object(n.jsx)(st,{listId:t.id,text:t.task,complete:t.complete},t.id))})),e.length?e:Object(n.jsx)(D.a,{children:Object(n.jsx)(B.a,{primary:"You aint done shit"})})}()})}),Object(n.jsx)(U.a,{item:!0,xs:!1,sm:2})]})})),jt=a(111),lt={scales:{xAxes:[{type:"time",time:{unit:"day"},ticks:{autoSkip:!0,maxTicksLimit:20,min:ge()().subtract(7,"days"),max:ge()().add(1,"days")}}]}},dt=Object(Q.b)((function(e){return{list:e.list}}),{})((function(e){var t=e.list,a=function(){var e=[],a=[];return Y.a.mapValues(t,(function(t){if(t.complete){var n=1e3*t.datecomplete,c=1;e.push(ge()(n).format("dddd, MMMM Do")),a.length&&a.forEach((function(e,t){e.t.isSame(n,"day")&&(c+=1,a[t].y+=1)})),1===c&&a.push({t:ge()(n),y:c})}})),a=Y.a.orderBy(a,["t._i"],["asc"]),{prepareLabels:e,prepareData:a}}(),c={labels:a.prepareLabels,datasets:[{label:"Completed Tasks",data:a.prepareData,fill:!1,backgroundColor:"rgb(255, 99, 132)",borderColor:"rgba(255, 99, 132, 0.2)"}]};return Object(n.jsx)(jt.Line,{data:c,options:lt})})),bt={legend:{reverse:!0}},ut=Object(Q.b)((function(e){return{list:e.list}}),{})((function(e){var t=e.list,a={labels:["Done!","Not Done"],datasets:[{label:"# of Votes",data:[Y.a.filter(t,(function(e){return e.complete?e:null})).length,Y.a.filter(t,(function(e){return e.complete?null:e})).length],backgroundColor:["rgba(75, 192, 192, 0.2)","rgba(255, 99, 132, 0.2)"],borderColor:["rgba(75, 192, 192, 1)","rgba(255, 99, 132, 1)"],borderWidth:1}]};return Object(n.jsx)(jt.Doughnut,{data:a,options:bt})})),Ot=Object(Q.b)(null,{fetchListItems:ie})((function(e){var t=e.fetchListItems;return Object(c.useEffect)((function(){t()}),[]),Object(n.jsxs)(U.a,{container:!0,spacing:2,children:[Object(n.jsx)(U.a,{item:!0,xs:!1,sm:2}),Object(n.jsxs)(U.a,{item:!0,xs:12,sm:8,children:[Object(n.jsx)(dt,{}),Object(n.jsx)("br",{}),Object(n.jsx)(ut,{})]}),Object(n.jsx)(U.a,{item:!0,xs:!1,sm:2})]})})),pt=a(185),xt=Object(pt.a)({}),ht=a(59),mt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case ae:return Object(O.a)(Object(O.a)({},e),Y.a.mapKeys(t.payload,"id"));case te:return Object(O.a)(Object(O.a)({},e),{},Object(p.a)({},t.payload.id,t.payload));case ne:return Y.a.omit(e,t.payload);case ce:return Object(O.a)(Object(O.a)({},e),{},Object(p.a)({},t.payload.id,t.payload));default:return e}},ft=Object(ht.combineReducers)({list:mt}),gt=a(186),vt=a(187),yt=Object(ht.createStore)(ft,void 0,Object(gt.composeWithDevTools)(Object(ht.applyMiddleware)(vt.a))),kt=function(){var e=Object(j.a)({});return Object(n.jsx)(Q.a,{store:yt,children:Object(n.jsxs)(l.a,{theme:e,children:[Object(n.jsx)(o.a,{}),Object(n.jsx)(d.a,{history:xt,children:Object(n.jsx)(P,{children:Object(n.jsxs)(b.c,{children:[Object(n.jsx)(b.a,{path:"/",exact:!0,component:ct}),Object(n.jsx)(b.a,{path:"/completed",exact:!0,component:ot}),Object(n.jsx)(b.a,{path:"/stats",exact:!0,component:Ot}),Object(n.jsx)(b.a,{path:"/feedback",exact:!0,component:""})]})})})]})})};i.a.render(Object(n.jsx)(kt,{}),document.querySelector("#root"))}},[[330,1,2]]]);
//# sourceMappingURL=main.12f44cc4.chunk.js.map