(this["webpackJsonpsimple-react-homeworks"]=this["webpackJsonpsimple-react-homeworks"]||[]).push([[0],[,,,function(e,a,t){e.exports={button:"Affairs_button__3YaQm",active:"Affairs_active__2Quho",affair:"Affairs_affair__179X1",item:"Affairs_item__1BYAz",high:"Affairs_high__3bfAG",middle:"Affairs_middle__1oKMT",low:"Affairs_low__1RrbR"}},,,,function(e,a,t){e.exports={link:"Header_link__1oUIl",active:"Header_active__1dmn0",block:"Header_block__3dX0N",header:"Header_header__1amup"}},,function(e,a,t){e.exports={message:"Message_message__8WR15",content:"Message_content__Ltxgc",angle:"Message_angle__1T-oN",text:"Message_text__2fXBO",name:"Message_name__Tzmp0",time:"Message_time__HOFTG"}},function(e,a,t){e.exports={greeting:"Greeting_greeting__21ydZ",error:"Greeting_error__1uvQ8",input:"Greeting_input__2kXLu",button:"Greeting_button__24QRF",count:"Greeting_count__2ZvGI"}},,,function(e,a,t){e.exports={input:"SuperInputText_input__1P_Mf",superInput:"SuperInputText_superInput__3XH9u",errorInput:"SuperInputText_errorInput__3ei0N",error:"SuperInputText_error__2J82S"}},,,function(e,a,t){e.exports={blue:"HW4_blue__2RJeg",column:"HW4_column__2ZS4I",testSpanError:"HW4_testSpanError___Mj8X"}},function(e,a,t){e.exports={default:"SuperButton_default__-BXUG",red:"SuperButton_red__1kaz_",button:"SuperButton_button__cV79v",blink:"SuperButton_blink__3CGSw"}},,function(e,a,t){e.exports={label:"SuperCheckbox_label__kF06l",checkbox:"SuperCheckbox_checkbox__Imn1x",spanClassName:"SuperCheckbox_spanClassName__1K9ch"}},function(e,a,t){e.exports={select:"SuperSelect_select__3fEsa",option:"SuperSelect_option__33I2a"}},function(e,a,t){e.exports={radio:"SuperRadio_radio__3l3uR",label:"SuperRadio_label__2lqMv"}},,,,,,,function(e,a,t){e.exports={App:"App_App__1Sc4o"}},function(e,a,t){e.exports={span:"SuperEditableSpan_span__TqnG3"}},function(e,a,t){e.exports={item:"HW8_item__1_bpL"}},,function(e,a,t){e.exports=t(43)},,,,,function(e,a,t){},,,,,,function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(27),c=t.n(l),o=(t(37),t(28)),u=t.n(o),i=t(7),s=t.n(i),m=t(8);var p=function(){return r.a.createElement("div",null,r.a.createElement("div",null,"404"),r.a.createElement("div",null,"Page not found!"),r.a.createElement("div",null,"\u2014\u0e05/\u1420.\u032b .\u141f\\\u0e05\u2014"))},d=t(9),E=t.n(d);var _=function(e){return r.a.createElement("div",{className:E.a.message},r.a.createElement("img",{src:e.avatar}),r.a.createElement("div",{className:E.a.angle}),r.a.createElement("div",{className:E.a.content},r.a.createElement("div",{className:E.a.name},e.name),r.a.createElement("div",{className:E.a.text},e.message),r.a.createElement("div",{className:E.a.time},e.time)))},f="https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg",v="Some Name",h="some text",b="22:00";var g=function(){return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 1",r.a.createElement(_,{avatar:f,name:v,message:h,time:b}),r.a.createElement("hr",null),r.a.createElement("hr",null))},k=t(2),C=t(3),N=t.n(C);var O=function(e){var a=N.a.item+" "+N.a[e.affair.priority];return r.a.createElement("div",{className:N.a.affair},r.a.createElement("div",{className:N.a.item},e.affair.name),r.a.createElement("div",{className:a},"[",e.affair.priority,"]"),r.a.createElement("button",{className:N.a.button,onClick:function(){e.deleteAffairCallback(e.affair._id)}},"X"))};var j=function(e){var a=e.data.map((function(a){return r.a.createElement(O,{key:a._id,affair:a,deleteAffairCallback:e.deleteAffairCallback})})),t=N.a.button+" "+("all"===e.filter?N.a.active:""),n=N.a.button+" "+("high"===e.filter?N.a.active:""),l=N.a.button+" "+("middle"===e.filter?N.a.active:""),c=N.a.button+" "+("low"===e.filter?N.a.active:"");return r.a.createElement("div",null,a,r.a.createElement("button",{onClick:function(){e.setFilter("all")},className:t},"All"),r.a.createElement("button",{onClick:function(){e.setFilter("high")},className:n},"High"),r.a.createElement("button",{onClick:function(){e.setFilter("middle")},className:l},"Middle"),r.a.createElement("button",{onClick:function(){e.setFilter("low")},className:c},"Low"))},S=[{_id:1,name:"React",priority:"high"},{_id:2,name:"anime",priority:"low"},{_id:3,name:"games",priority:"low"},{_id:4,name:"work",priority:"high"},{_id:5,name:"html & css",priority:"middle"}];var x=function(){var e=Object(n.useState)(S),a=Object(k.a)(e,2),t=a[0],l=a[1],c=Object(n.useState)("all"),o=Object(k.a)(c,2),u=o[0],i=o[1],s=function(e,a){return"all"===a?e:e.filter((function(e){return e.priority===a}))}(t,u);return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 2",r.a.createElement(j,{data:s,setFilter:i,deleteAffairCallback:function(e){return l(function(e,a){return e.filter((function(e){return e._id!==a}))}(t,e))},filter:u}),r.a.createElement("hr",null),r.a.createElement("hr",null))},y=t(15),w=t(10),A=t.n(w),T=function(e){var a=e.name,t=e.setNameCallback,n=e.addUser,l=e.error,c=e.totalUsers,o=l?A.a.error:A.a.input;return r.a.createElement("div",{className:A.a.greeting},r.a.createElement("div",null,r.a.createElement("input",{value:a,onChange:t,onBlur:t,className:o}),r.a.createElement("div",{className:A.a.error},l)),r.a.createElement("button",{onClick:n,disabled:!a,className:A.a.button},"add"),r.a.createElement("div",{className:A.a.count},c))},I=function(e){var a=e.users,t=e.addUserCallback,l=Object(n.useState)(""),c=Object(k.a)(l,2),o=c[0],u=c[1],i=Object(n.useState)(""),s=Object(k.a)(i,2),m=s[0],p=s[1],d=a.length;return r.a.createElement(T,{name:o,setNameCallback:function(e){var a=e.currentTarget.value.trim();a?(u(a),m&&p("")):(o&&u(""),p("Name is required!"))},addUser:function(){t(o),alert("Hello ".concat(o,"!")),u("")},error:m,totalUsers:d})},F=t(45);var B=function(){var e=Object(n.useState)([]),a=Object(k.a)(e,2),t=a[0],l=a[1];return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 3",r.a.createElement(I,{users:t,addUserCallback:function(e){var a={_id:Object(F.a)(),name:e};l([a].concat(Object(y.a)(t)))}}),r.a.createElement("hr",null),r.a.createElement("hr",null))},H=t(4),G=t(13),M=t.n(G),P=function(e){e.type;var a=e.onChange,t=e.onChangeText,n=e.onKeyPress,l=e.onEnter,c=e.error,o=e.className,u=e.spanClassName,i=Object(H.a)(e,["type","onChange","onChangeText","onKeyPress","onEnter","error","className","spanClassName"]),s="".concat(M.a.error," ").concat(u||""),m="".concat(M.a.input," ").concat(c?M.a.errorInput:M.a.superInput," ").concat(o);return r.a.createElement(r.a.Fragment,null,r.a.createElement("input",Object.assign({type:"text",onChange:function(e){a&&a(e),t&&t(e.currentTarget.value)},onKeyPress:function(e){n&&n(e),l&&"Enter"===e.key&&l()},className:m},i)),c&&r.a.createElement("span",{className:s},c))},J=t(16),R=t.n(J),W=t(17),X=t.n(W),U=function(e){var a=e.red,t=e.className,n=Object(H.a)(e,["red","className"]),l="".concat(X.a.button," ").concat(a?X.a.red:X.a.default," ").concat(t);return r.a.createElement("button",Object.assign({className:l},n))},K=t(19),q=t.n(K),z=function(e){e.type;var a=e.onChange,t=e.onChangeChecked,n=e.className,l=(e.spanClassName,e.children),c=Object(H.a)(e,["type","onChange","onChangeChecked","className","spanClassName","children"]),o="".concat(q.a.checkbox," ").concat(n||"");return r.a.createElement("label",null,r.a.createElement("input",Object.assign({type:"checkbox",onChange:function(e){a&&a(e),t&&t(e.currentTarget.checked)},className:o},c)),l&&r.a.createElement("span",{className:q.a.spanClassName},l))};var L=function(){var e=Object(n.useState)(""),a=Object(k.a)(e,2),t=a[0],l=a[1],c=t?"":"error",o=function(){c?alert("\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442..."):alert(t)},u=Object(n.useState)(!1),i=Object(k.a)(u,2),s=i[0],m=i[1];return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 4",r.a.createElement("div",{className:R.a.column},r.a.createElement(P,{value:t,onChangeText:l,onEnter:o,error:c,spanClassName:R.a.testSpanError}),r.a.createElement(P,{className:R.a.blue}),r.a.createElement(U,null,"default"),r.a.createElement(U,{red:!0,onClick:o},"delete "),r.a.createElement(U,{disabled:!0},"disabled"),r.a.createElement(z,{checked:s,onChangeChecked:m},"some text "),r.a.createElement(z,{checked:s,onChange:function(e){return m(e.currentTarget.checked)}})),r.a.createElement("hr",null),r.a.createElement("hr",null))},Q=t(29),Z=t.n(Q),D=function(e){e.autoFocus;var a=e.onBlur,t=e.onEnter,l=e.spanProps,c=Object(H.a)(e,["autoFocus","onBlur","onEnter","spanProps"]),o=Object(n.useState)(!1),u=Object(k.a)(o,2),i=u[0],s=u[1],m=l||{},p=m.children,d=m.onDoubleClick,E=m.className,_=Object(H.a)(m,["children","onDoubleClick","className"]),f="".concat(Z.a.span," ").concat(E||"");return r.a.createElement(r.a.Fragment,null,i?r.a.createElement(P,Object.assign({autoFocus:!0,onBlur:function(e){s(!1),a&&a(e)},onEnter:function(){s(!1),t&&t()}},c)):r.a.createElement("span",Object.assign({onDoubleClick:function(e){s(!0),d&&d(e)},className:f},_)," \ud83d\udd8a",p||c.value))};function Y(e,a){var t=JSON.stringify(a);localStorage.setItem(e,t)}function V(e,a){var t=a,n=localStorage.getItem(e);return null!==n&&(t=JSON.parse(n)),t}Y("test",{x:"A",y:1});V("test",{x:"",y:0});function $(){var e=Object(n.useState)(""),a=Object(k.a)(e,2),t=a[0],l=a[1];return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 6",r.a.createElement("div",null,r.a.createElement(D,{value:t,onChangeText:l,spanProps:{children:t?void 0:"enter text..."}})),r.a.createElement(U,{onClick:function(){Y("editable-span-value",t)}},"save"),r.a.createElement(U,{onClick:function(){l(V("editable-span-value","Hello!"))}},"restore"),r.a.createElement("hr",null),r.a.createElement("hr",null))}var ee=function(){return r.a.createElement("div",null,r.a.createElement(g,null),r.a.createElement(x,null),r.a.createElement(B,null),r.a.createElement(L,null),r.a.createElement($,null))},ae=t(1),te=t(20),ne=t.n(te),re=function(e){var a=e.options,t=e.className,n=e.onChange,l=e.onChangeOption,c=Object(H.a)(e,["options","className","onChange","onChangeOption"]),o=a?a.map((function(e,a){return r.a.createElement("option",{className:ne.a.option,key:a,value:e},e)})):[],u=ne.a.select+(t?" "+t:"");return r.a.createElement("select",Object.assign({className:u,onChange:function(e){n&&n(e),l&&l(e.currentTarget.value)}},c),o)},le=t(21),ce=t.n(le),oe=function(e){e.type;var a=e.name,t=e.options,n=e.value,l=e.onChange,c=e.onChangeOption,o=Object(H.a)(e,["type","name","options","value","onChange","onChangeOption"]),u=function(e){l&&l(e),c&&c(e.currentTarget.value)},i=t?t.map((function(e,t){return r.a.createElement("label",{className:ce.a.label,key:a+"-"+t},r.a.createElement("input",Object.assign({className:ce.a.radio,type:"radio",name:a,value:e,onChange:u,checked:e===n},o)),e)})):[];return r.a.createElement(r.a.Fragment,null,i)},ue=["x","y","z"];var ie=function(){var e=Object(n.useState)(ue[1]),a=Object(k.a)(e,2),t=a[0],l=a[1];return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 7",r.a.createElement("div",null,r.a.createElement(re,{options:ue,value:t,onChangeOption:l})),r.a.createElement("div",null,r.a.createElement(oe,{name:"radio",options:ue,value:t,onChangeOption:l})),r.a.createElement("hr",null),r.a.createElement("hr",null))},se=function(e,a){switch(a.type){case"sort":var t=Object(y.a)(e).sort((function(e,a){return e.name>a.name?1:e.name<a.name?-1:0}));return"up"===a.payload?t:t.reverse();case"check":return e.filter((function(e){return e.age>=a.payload}));default:return e}},me=t(30),pe=t.n(me),de=[{_id:0,name:"\u041a\u043e\u0442",age:3},{_id:1,name:"\u0410\u043b\u0435\u043a\u0441\u0430\u043d\u0434\u0440",age:66},{_id:2,name:"\u041a\u043e\u043b\u044f",age:16},{_id:3,name:"\u0412\u0438\u043a\u0442\u043e\u0440",age:44},{_id:4,name:"\u0414\u043c\u0438\u0442\u0440\u0438\u0439",age:40},{_id:5,name:"\u0418\u0440\u0438\u043d\u0430",age:55}];var Ee=function(){var e=Object(n.useState)(de),a=Object(k.a)(e,2),t=a[0],l=a[1],c=t.map((function(e){return r.a.createElement("div",{key:e._id,className:pe.a.item},r.a.createElement("span",null,e.name),r.a.createElement("span",null,e.age))}));return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 8",c,r.a.createElement("span",null,r.a.createElement(U,{onClick:function(){return l(se(de,{type:"sort",payload:"up"}))}},"sort up")),r.a.createElement("span",null,r.a.createElement(U,{onClick:function(){return l(se(de,{type:"sort",payload:"down"}))}},"sort down")),r.a.createElement("span",null,r.a.createElement(U,{onClick:function(){return l(se(de,{type:"check",payload:18}))}},"check 18")),r.a.createElement("hr",null),r.a.createElement("hr",null))};var _e=function(){return r.a.createElement("div",null,"Junior",r.a.createElement(ie,null),r.a.createElement(Ee,null))};var fe=function(){return r.a.createElement("div",null,"JuniorPlus")},ve="/pre-junior",he="/junior",be="/junior-plus";var ge=function(){return r.a.createElement("div",null,r.a.createElement(ae.d,null,r.a.createElement(ae.b,{path:"/",exact:!0,render:function(){return r.a.createElement(ae.a,{to:ve})}}),r.a.createElement(ae.b,{path:ve,render:function(){return r.a.createElement(ee,null)}}),r.a.createElement(ae.b,{path:he,render:function(){return r.a.createElement(_e,null)}}),r.a.createElement(ae.b,{path:be,render:function(){return r.a.createElement(fe,null)}}),"// add routes",r.a.createElement(ae.b,{render:function(){return r.a.createElement(p,null)}})))};var ke=function(){return r.a.createElement("div",{className:s.a.header},r.a.createElement(m.b,{to:ve,className:s.a.link,activeClassName:s.a.active},"pre-junior"),r.a.createElement(m.b,{to:he,className:s.a.link,activeClassName:s.a.active},"junior"),r.a.createElement(m.b,{to:be,className:s.a.link,activeClassName:s.a.active},"junior-plus"),r.a.createElement("div",{className:s.a.block}))};var Ce=function(){return r.a.createElement("div",null,r.a.createElement(m.a,null,r.a.createElement(ke,null),r.a.createElement(ge,null)))};var Ne=function(){return r.a.createElement("div",{className:u.a.App},r.a.createElement("div",null,"react homeworks:"),r.a.createElement(Ce,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(Ne,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[32,1,2]]]);
//# sourceMappingURL=main.4a3d4618.chunk.js.map