(this["webpackJsonpsimple-react-homeworks"]=this["webpackJsonpsimple-react-homeworks"]||[]).push([[0],{12:function(e,t,a){e.exports={message:"Message_message__8WR15",content:"Message_content__Ltxgc",angle:"Message_angle__1T-oN",text:"Message_text__2fXBO",name:"Message_name__Tzmp0",time:"Message_time__HOFTG"}},13:function(e,t,a){e.exports={greeting:"Greeting_greeting__21ydZ",error:"Greeting_error__1uvQ8",input:"Greeting_input__2kXLu",button:"Greeting_button__24QRF",count:"Greeting_count__2ZvGI"}},17:function(e,t,a){e.exports={input:"SuperInputText_input__1P_Mf",superInput:"SuperInputText_superInput__3XH9u",errorInput:"SuperInputText_errorInput__3ei0N",error:"SuperInputText_error__2J82S"}},22:function(e,t,a){e.exports={blue:"HW4_blue__2RJeg",column:"HW4_column__2ZS4I",testSpanError:"HW4_testSpanError___Mj8X"}},23:function(e,t,a){e.exports={default:"SuperButton_default__-BXUG",red:"SuperButton_red__1kaz_",button:"SuperButton_button__cV79v",blink:"SuperButton_blink__3CGSw"}},25:function(e,t,a){e.exports={label:"SuperCheckbox_label__kF06l",checkbox:"SuperCheckbox_checkbox__Imn1x",spanClassName:"SuperCheckbox_spanClassName__1K9ch"}},26:function(e,t,a){e.exports={select:"SuperSelect_select__3fEsa",option:"SuperSelect_option__33I2a"}},27:function(e,t,a){e.exports={radio:"SuperRadio_radio__3l3uR",label:"SuperRadio_label__2lqMv"}},28:function(e,t,a){e.exports={dark:"HW12_dark__-yEnK","dark-text":"HW12_dark-text__3aY9r",red:"HW12_red__b8fxn","red-text":"HW12_red-text__Xlm6C",some:"HW12_some__2eRaq","some-text":"HW12_some-text__1-Wyv"}},3:function(e,t,a){e.exports={button:"Affairs_button__3YaQm",active:"Affairs_active__2Quho",affair:"Affairs_affair__179X1",item:"Affairs_item__1BYAz",high:"Affairs_high__3bfAG",middle:"Affairs_middle__1oKMT",low:"Affairs_low__1RrbR"}},42:function(e,t,a){e.exports={App:"App_App__1Sc4o"}},43:function(e,t,a){e.exports={span:"SuperEditableSpan_span__TqnG3"}},44:function(e,t,a){e.exports={item:"HW8_item__1_bpL"}},45:function(e,t,a){e.exports={range:"SuperRange_range__2K0wQ"}},50:function(e,t,a){e.exports=a(79)},55:function(e,t,a){},79:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(18),c=a.n(l),o=(a(55),a(42)),u=a.n(o),i=a(8),s=a.n(i),m=a(10);var E=function(){return r.a.createElement("div",null,r.a.createElement("div",null,"404"),r.a.createElement("div",null,"Page not found!"),r.a.createElement("div",null,"\u2014\u0e05/\u1420.\u032b .\u141f\\\u0e05\u2014"))},d=a(12),p=a.n(d);var f=function(e){return r.a.createElement("div",{className:p.a.message},r.a.createElement("img",{src:e.avatar}),r.a.createElement("div",{className:p.a.angle}),r.a.createElement("div",{className:p.a.content},r.a.createElement("div",{className:p.a.name},e.name),r.a.createElement("div",{className:p.a.text},e.message),r.a.createElement("div",{className:p.a.time},e.time)))},_="https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg",v="Some Name",h="some text",b="22:00";var g=function(){return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 1",r.a.createElement(f,{avatar:_,name:v,message:h,time:b}),r.a.createElement("hr",null),r.a.createElement("hr",null))},k=a(1),C=a(3),N=a.n(C);var O=function(e){var t=N.a.item+" "+N.a[e.affair.priority];return r.a.createElement("div",{className:N.a.affair},r.a.createElement("div",{className:N.a.item},e.affair.name),r.a.createElement("div",{className:t},"[",e.affair.priority,"]"),r.a.createElement("button",{className:N.a.button,onClick:function(){e.deleteAffairCallback(e.affair._id)}},"X"))};var j=function(e){var t=e.data.map((function(t){return r.a.createElement(O,{key:t._id,affair:t,deleteAffairCallback:e.deleteAffairCallback})})),a=N.a.button+" "+("all"===e.filter?N.a.active:""),n=N.a.button+" "+("high"===e.filter?N.a.active:""),l=N.a.button+" "+("middle"===e.filter?N.a.active:""),c=N.a.button+" "+("low"===e.filter?N.a.active:"");return r.a.createElement("div",null,t,r.a.createElement("button",{onClick:function(){e.setFilter("all")},className:a},"All"),r.a.createElement("button",{onClick:function(){e.setFilter("high")},className:n},"High"),r.a.createElement("button",{onClick:function(){e.setFilter("middle")},className:l},"Middle"),r.a.createElement("button",{onClick:function(){e.setFilter("low")},className:c},"Low"))},S=[{_id:1,name:"React",priority:"high"},{_id:2,name:"anime",priority:"low"},{_id:3,name:"games",priority:"low"},{_id:4,name:"work",priority:"high"},{_id:5,name:"html & css",priority:"middle"}];var x=function(){var e=Object(n.useState)(S),t=Object(k.a)(e,2),a=t[0],l=t[1],c=Object(n.useState)("all"),o=Object(k.a)(c,2),u=o[0],i=o[1],s=function(e,t){return"all"===t?e:e.filter((function(e){return e.priority===t}))}(a,u);return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 2",r.a.createElement(j,{data:s,setFilter:i,deleteAffairCallback:function(e){return l(function(e,t){return e.filter((function(e){return e._id!==t}))}(a,e))},filter:u}),r.a.createElement("hr",null),r.a.createElement("hr",null))},y=a(21),w=a(13),T=a.n(w),A=function(e){var t=e.name,a=e.setNameCallback,n=e.addUser,l=e.error,c=e.totalUsers,o=l?T.a.error:T.a.input;return r.a.createElement("div",{className:T.a.greeting},r.a.createElement("div",null,r.a.createElement("input",{value:t,onChange:a,onBlur:a,className:o}),r.a.createElement("div",{className:T.a.error},l)),r.a.createElement("button",{onClick:n,disabled:!t,className:T.a.button},"add"),r.a.createElement("div",{className:T.a.count},c))},H=function(e){var t=e.users,a=e.addUserCallback,l=Object(n.useState)(""),c=Object(k.a)(l,2),o=c[0],u=c[1],i=Object(n.useState)(""),s=Object(k.a)(i,2),m=s[0],E=s[1],d=t.length;return r.a.createElement(A,{name:o,setNameCallback:function(e){var t=e.currentTarget.value.trim();t?(u(t),m&&E("")):(o&&u(""),E("Name is required!"))},addUser:function(){a(o),alert("Hello ".concat(o,"!")),u("")},error:m,totalUsers:d})},I=a(81);var G=function(){var e=Object(n.useState)([]),t=Object(k.a)(e,2),a=t[0],l=t[1];return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 3",r.a.createElement(H,{users:a,addUserCallback:function(e){var t={_id:Object(I.a)(),name:e};l([t].concat(Object(y.a)(a)))}}),r.a.createElement("hr",null),r.a.createElement("hr",null))},F=a(5),M=a(17),W=a.n(M),R=function(e){e.type;var t=e.onChange,a=e.onChangeText,n=e.onKeyPress,l=e.onEnter,c=e.error,o=e.className,u=e.spanClassName,i=Object(F.a)(e,["type","onChange","onChangeText","onKeyPress","onEnter","error","className","spanClassName"]),s="".concat(W.a.error," ").concat(u||""),m="".concat(W.a.input," ").concat(c?W.a.errorInput:W.a.superInput," ").concat(o);return r.a.createElement(r.a.Fragment,null,r.a.createElement("input",Object.assign({type:"text",onChange:function(e){t&&t(e),a&&a(e.currentTarget.value)},onKeyPress:function(e){n&&n(e),l&&"Enter"===e.key&&l()},className:m},i)),c&&r.a.createElement("span",{className:s},c))},B=a(22),L=a.n(B),P=a(23),X=a.n(P),J=function(e){var t=e.red,a=e.className,n=Object(F.a)(e,["red","className"]),l="".concat(X.a.button," ").concat(t?X.a.red:X.a.default," ").concat(a);return r.a.createElement("button",Object.assign({className:l},n))},D=a(25),U=a.n(D),K=function(e){e.type;var t=e.onChange,a=e.onChangeChecked,n=e.className,l=(e.spanClassName,e.children),c=Object(F.a)(e,["type","onChange","onChangeChecked","className","spanClassName","children"]),o="".concat(U.a.checkbox," ").concat(n||"");return r.a.createElement("label",null,r.a.createElement("input",Object.assign({type:"checkbox",onChange:function(e){t&&t(e),a&&a(e.currentTarget.checked)},className:o},c)),l&&r.a.createElement("span",{className:U.a.spanClassName},l))};var q=function(){var e=Object(n.useState)(""),t=Object(k.a)(e,2),a=t[0],l=t[1],c=a?"":"error",o=function(){c?alert("\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442..."):alert(a)},u=Object(n.useState)(!1),i=Object(k.a)(u,2),s=i[0],m=i[1];return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 4",r.a.createElement("div",{className:L.a.column},r.a.createElement(R,{value:a,onChangeText:l,onEnter:o,error:c,spanClassName:L.a.testSpanError}),r.a.createElement(R,{className:L.a.blue}),r.a.createElement(J,null,"default"),r.a.createElement(J,{red:!0,onClick:o},"delete "),r.a.createElement(J,{disabled:!0},"disabled"),r.a.createElement(K,{checked:s,onChangeChecked:m},"some text "),r.a.createElement(K,{checked:s,onChange:function(e){return m(e.currentTarget.checked)}})),r.a.createElement("hr",null),r.a.createElement("hr",null))},Q=a(43),z=a.n(Q),V=function(e){e.autoFocus;var t=e.onBlur,a=e.onEnter,l=e.spanProps,c=Object(F.a)(e,["autoFocus","onBlur","onEnter","spanProps"]),o=Object(n.useState)(!1),u=Object(k.a)(o,2),i=u[0],s=u[1],m=l||{},E=m.children,d=m.onDoubleClick,p=m.className,f=Object(F.a)(m,["children","onDoubleClick","className"]),_="".concat(z.a.span," ").concat(p||"");return r.a.createElement(r.a.Fragment,null,i?r.a.createElement(R,Object.assign({autoFocus:!0,onBlur:function(e){s(!1),t&&t(e)},onEnter:function(){s(!1),a&&a()}},c)):r.a.createElement("span",Object.assign({onDoubleClick:function(e){s(!0),d&&d(e)},className:_},f)," \ud83d\udd8a",E||c.value))};function Y(e,t){var a=JSON.stringify(t);localStorage.setItem(e,a)}function Z(e,t){var a=t,n=localStorage.getItem(e);return null!==n&&(a=JSON.parse(n)),a}Y("test",{x:"A",y:1});Z("test",{x:"",y:0});function $(){var e=Object(n.useState)(""),t=Object(k.a)(e,2),a=t[0],l=t[1];return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 6",r.a.createElement("div",null,r.a.createElement(V,{value:a,onChangeText:l,spanProps:{children:a?void 0:"enter text..."}})),r.a.createElement(J,{onClick:function(){Y("editable-span-value",a)}},"save"),r.a.createElement(J,{onClick:function(){l(Z("editable-span-value","Hello!"))}},"restore"),r.a.createElement("hr",null),r.a.createElement("hr",null))}var ee=function(){return r.a.createElement("div",null,r.a.createElement(g,null),r.a.createElement(x,null),r.a.createElement(G,null),r.a.createElement(q,null),r.a.createElement($,null))},te=a(2),ae=a(26),ne=a.n(ae),re=function(e){var t=e.options,a=e.className,n=e.onChange,l=e.onChangeOption,c=Object(F.a)(e,["options","className","onChange","onChangeOption"]),o=t?t.map((function(e,t){return r.a.createElement("option",{className:ne.a.option,key:t,value:e},e)})):[],u=ne.a.select+(a?" "+a:"");return r.a.createElement("select",Object.assign({className:u,onChange:function(e){n&&n(e),l&&l(e.currentTarget.value)}},c),o)},le=a(27),ce=a.n(le),oe=function(e){e.type;var t=e.name,a=e.options,n=e.value,l=e.onChange,c=e.onChangeOption,o=Object(F.a)(e,["type","name","options","value","onChange","onChangeOption"]),u=function(e){l&&l(e),c&&c(e.currentTarget.value)},i=a?a.map((function(e,a){return r.a.createElement("label",{className:ce.a.label,key:t+"-"+a},r.a.createElement("input",Object.assign({className:ce.a.radio,type:"radio",name:t,value:e,onChange:u,checked:e===n},o)),e)})):[];return r.a.createElement(r.a.Fragment,null,i)},ue=["x","y","z"];var ie=function(){var e=Object(n.useState)(ue[1]),t=Object(k.a)(e,2),a=t[0],l=t[1];return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 7",r.a.createElement("div",null,r.a.createElement(re,{options:ue,value:a,onChangeOption:l})),r.a.createElement("div",null,r.a.createElement(oe,{name:"radio",options:ue,value:a,onChangeOption:l})),r.a.createElement("hr",null),r.a.createElement("hr",null))},se=function(e,t){switch(t.type){case"sort":var a=Object(y.a)(e).sort((function(e,t){return e.name>t.name?1:e.name<t.name?-1:0}));return"up"===t.payload?a:a.reverse();case"check":return e.filter((function(e){return e.age>=t.payload}));default:return e}},me=a(44),Ee=a.n(me),de=[{_id:0,name:"\u041a\u043e\u0442",age:3},{_id:1,name:"\u0410\u043b\u0435\u043a\u0441\u0430\u043d\u0434\u0440",age:66},{_id:2,name:"\u041a\u043e\u043b\u044f",age:16},{_id:3,name:"\u0412\u0438\u043a\u0442\u043e\u0440",age:44},{_id:4,name:"\u0414\u043c\u0438\u0442\u0440\u0438\u0439",age:40},{_id:5,name:"\u0418\u0440\u0438\u043d\u0430",age:55}];var pe=function(){var e=Object(n.useState)(de),t=Object(k.a)(e,2),a=t[0],l=t[1],c=a.map((function(e){return r.a.createElement("div",{key:e._id,className:Ee.a.item},r.a.createElement("span",null,e.name),r.a.createElement("span",null,e.age))}));return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 8",c,r.a.createElement("span",null,r.a.createElement(J,{onClick:function(){return l(se(de,{type:"sort",payload:"up"}))}},"sort up")),r.a.createElement("span",null,r.a.createElement(J,{onClick:function(){return l(se(de,{type:"sort",payload:"down"}))}},"sort down")),r.a.createElement("span",null,r.a.createElement(J,{onClick:function(){return l(se(de,{type:"check",payload:18}))}},"check 18")),r.a.createElement("hr",null),r.a.createElement("hr",null))};var fe=function(){var e=Object(n.useState)(0),t=Object(k.a)(e,2),a=t[0],l=t[1],c=Object(n.useState)(),o=Object(k.a)(c,2),u=o[0],i=o[1],s=Object(n.useState)(!1),m=Object(k.a)(s,2),E=m[0],d=m[1],p=function(){clearTimeout(a)},f=u?u.toLocaleTimeString():r.a.createElement("br",null),_=u?u.toLocaleDateString():null;return r.a.createElement("div",null,r.a.createElement("div",{onMouseEnter:function(){d(!0)},onMouseLeave:function(){d(!1)}},f||""),E&&r.a.createElement("div",null,_||""),r.a.createElement(J,{onClick:function(){p();var e=window.setInterval((function(){i(new Date)}),1e3);l(e)}},"start"),r.a.createElement(J,{onClick:p},"stop"))};var _e=function(){return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 9",r.a.createElement(fe,null),r.a.createElement("hr",null),r.a.createElement("hr",null))},ve=a(9),he=a(47),be={isLoading:!1},ge=function(e){return{type:"CHANGE-LOADING",isLoading:e}};var ke=function(){var e=Object(ve.c)((function(e){return e.loading.isLoading})),t=Object(ve.b)();return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 10",e?r.a.createElement("div",null,"loader"):r.a.createElement("div",null,r.a.createElement(J,{onClick:function(){t(ge(!0)),setTimeout((function(){t(ge(!1))}),2e3),console.log("loading...")}},"set loading...")),r.a.createElement("hr",null),r.a.createElement("hr",null))},Ce=a(11),Ne=a(49),Oe=a(45),je=a.n(Oe),Se=function(e){e.type;var t=e.onChange,a=e.onChangeRange,n=e.className,l=e.setValue1,c=Object(Ne.a)(e,["type","onChange","onChangeRange","className","setValue1"]),o="".concat(je.a.range," ").concat(n||"");return r.a.createElement(r.a.Fragment,null,r.a.createElement("input",Object.assign({type:"range",onChange:function(e){t&&t(e),a&&a(+e.currentTarget.value),l(+e.currentTarget.value)},className:o},c)))},xe=function(e){e.onChangeRange,e.value;return r.a.createElement(r.a.Fragment,null,"DoubleRange")};var ye=function(){var e=Object(n.useState)(0),t=Object(Ce.a)(e,2),a=t[0],l=t[1],c=Object(n.useState)(100),o=Object(Ce.a)(c,2),u=o[0];return o[1],r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 11",r.a.createElement("div",null,r.a.createElement("span",null,a),r.a.createElement(Se,{setValue1:l})),r.a.createElement("div",null,r.a.createElement("span",null,a),r.a.createElement(xe,null),r.a.createElement("span",null,u)),r.a.createElement("hr",null),r.a.createElement("hr",null))};var we=function(){return r.a.createElement("div",null,"Junior",r.a.createElement(ie,null),r.a.createElement(pe,null),r.a.createElement(_e,null),r.a.createElement(ke,null),r.a.createElement(ye,null))},Te=a(28),Ae=a.n(Te),He=a(48),Ie={theme:"some"},Ge=function(e){return{type:"CHANGE-THEME",theme:e}},Fe=["some","dark","red"];var Me=function(){var e=Object(ve.c)((function(e){return e.themes.theme})),t=Object(ve.b)();return r.a.createElement("div",{className:Ae.a[e]},r.a.createElement("hr",null),r.a.createElement("span",{className:Ae.a[e+"-text"]},"homeworks 12"),r.a.createElement("div",null,r.a.createElement(re,{onChange:function(e){t(Ge(e.currentTarget.value))},options:Fe})),r.a.createElement("div",null,r.a.createElement(oe,{onChange:function(e){t(Ge(e.currentTarget.value))},options:Fe})),r.a.createElement("hr",null))},We=a(46),Re=a.n(We),Be=function(e){return Re.a.post("https://neko-cafe-back.herokuapp.com/auth/test",{success:e})};var Le=function(){var e=Object(n.useState)(!1),t=Object(Ce.a)(e,2),a=t[0],l=t[1],c=Object(n.useState)(""),o=Object(Ce.a)(c,2),u=o[0],i=o[1],s=Object(n.useState)(""),m=Object(Ce.a)(s,2),E=m[0],d=m[1];return r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement(J,{onClick:function(){l(!a),Be(a).then((function(e){i(e.data.errorText),d("")})).catch((function(e){d(e.response.data.errorText),i("")}))}},"Click me)....")),r.a.createElement("div",null,r.a.createElement(K,{checked:a})),r.a.createElement("div",null,u||E))};var Pe=function(){return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 13",r.a.createElement(Le,null))};var Xe=function(){return r.a.createElement("div",null,"JuniorPlus",r.a.createElement(Me,null),r.a.createElement(Pe,null))},Je="/pre-junior",De="/junior",Ue="/junior-plus";var Ke=function(){return r.a.createElement("div",null,r.a.createElement(te.d,null,r.a.createElement(te.b,{path:"/",exact:!0,render:function(){return r.a.createElement(te.a,{to:Je})}}),r.a.createElement(te.b,{path:Je,render:function(){return r.a.createElement(ee,null)}}),r.a.createElement(te.b,{path:De,render:function(){return r.a.createElement(we,null)}}),r.a.createElement(te.b,{path:Ue,render:function(){return r.a.createElement(Xe,null)}}),"// add routes",r.a.createElement(te.b,{render:function(){return r.a.createElement(E,null)}})))};var qe=function(){return r.a.createElement("div",{className:s.a.header},r.a.createElement(m.b,{to:Je,className:s.a.link,activeClassName:s.a.active},"pre-junior"),r.a.createElement(m.b,{to:De,className:s.a.link,activeClassName:s.a.active},"junior"),r.a.createElement(m.b,{to:Ue,className:s.a.link,activeClassName:s.a.active},"junior-plus"),r.a.createElement("div",{className:s.a.block}))};var Qe=function(){return r.a.createElement("div",null,r.a.createElement(m.a,null,r.a.createElement(qe,null),r.a.createElement(Ke,null)))};var ze=function(){return r.a.createElement("div",{className:u.a.App},r.a.createElement("div",null,"react homeworks:"),r.a.createElement(Qe,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Ve=a(31),Ye=Object(Ve.a)({loading:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:be,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CHANGE-LOADING":return Object(he.a)({},e,{isLoading:t.isLoading});default:return e}},themes:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ie,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CHANGE-THEME":return Object(He.a)({},e,{theme:t.theme});default:return e}}}),Ze=Object(Ve.b)(Ye),$e=Ze;window.store=Ze,c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(ve.a,{store:$e},r.a.createElement(ze,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},8:function(e,t,a){e.exports={link:"Header_link__1oUIl",active:"Header_active__1dmn0",block:"Header_block__3dX0N",header:"Header_header__1amup"}}},[[50,1,2]]]);
//# sourceMappingURL=main.531df423.chunk.js.map