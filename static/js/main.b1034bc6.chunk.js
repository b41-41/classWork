(this.webpackJsonpclasswork=this.webpackJsonpclasswork||[]).push([[0],{54:function(e,t,c){},55:function(e,t,c){},56:function(e,t,c){},57:function(e,t,c){},65:function(e,t,c){},66:function(e,t,c){"use strict";c.r(t);var s=c(7),n=c.n(s),a=c(44),r=c.n(a),i=c(11),o=(c(54),c(55),c(56),c(57),c(26)),l=c(15),j=c(5),d=c(0),b=c.n(d),h=c(14),O=c(17),u=c(1),m=c(39),x=c(48),p=c(27),v=c(13),f={apiKey:"AIzaSyBC9-dTlL_d09WD2ItQ5YgCteqzgbW8wPg",authDomain:"classwork-985bd.firebaseapp.com",projectId:"classwork-985bd",storageBucket:"classwork-985bd.appspot.com",messagingSenderId:"995707248505",appId:"1:995707248505:web:afa86817b7bf3bc860d9a8",measurementId:"G-ZJHS03030V"},g=Object(m.a)(f),w=(Object(m.a)(f),Object(x.a)(g),Object(p.d)()),k=Object(v.f)(),N=c(2),S=function(e){e.match;var t,c=Object(s.useState)([]),n=Object(i.a)(c,2),a=n[0],r=n[1],l=Object(s.useState)([]),d=Object(i.a)(l,2),m=d[0],x=d[1],p=Object(s.useState)([]),f=Object(i.a)(p,2),g=f[0],w=f[1],S=function(){var e=Object(u.a)(b.a.mark((function e(){var t,c,s;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t=Object(v.b)(k,"notice"),c=Object(v.b)(k,"study"),s=Object(v.b)(k,"homework"),e.next=6,Object(v.e)(t);case 6:return e.sent.forEach((function(e){var t=Object(O.a)(Object(O.a)({},e.data()),{},{id:e.id});x((function(e){return[t].concat(Object(h.a)(e)).sort((function(e,t){return t.date-e.date}))}))})),e.next=10,Object(v.e)(c);case 10:return e.sent.forEach((function(e){var t=Object(O.a)(Object(O.a)({},e.data()),{},{id:e.id});r((function(e){return[t].concat(Object(h.a)(e)).sort((function(e,t){return t.date-e.date}))}))})),e.next=14,Object(v.e)(s);case 14:e.sent.forEach((function(e){var t=Object(O.a)(Object(O.a)({},e.data()),{},{id:e.id});w((function(e){return[t].concat(Object(h.a)(e)).sort((function(e,t){return t.date-e.date}))}))})),e.next=21;break;case 18:e.prev=18,e.t0=e.catch(0),console.error("Error onClick: ",e.t0);case 21:case"end":return e.stop()}}),e,null,[[0,18]])})));return function(){return e.apply(this,arguments)}}();Object(s.useEffect)((function(){S()}),[]);var _=function(e){if(e){var t=e.toDate();return"".concat(t.getFullYear(),".").concat(t.getMonth()+1,".").concat(t.getDate())}};return Object(N.jsxs)(N.Fragment,{children:[Object(N.jsx)("div",{className:"list",children:Object(N.jsxs)("div",{className:"listForm",children:[Object(N.jsx)("div",{className:"currMenu",children:"MY CLASSES"}),Object(N.jsx)("div",{className:"listClassName",children:"\ud55c\uad6d\uc5b4\uc13c\ud130 \b1\uae09 2\ubc18"}),Object(N.jsxs)("div",{className:"teacherForm",children:[Object(N.jsx)("div",{className:"teacherPhoto",children:Object(N.jsx)("img",(t={className:"teacherJPG",width:"auto"},Object(j.a)(t,"width","150px"),Object(j.a)(t,"src","./img/teacher.png"),Object(j.a)(t,"alt","teacher"),t))}),Object(N.jsxs)("div",{className:"teacherInfo",children:[Object(N.jsx)("span",{className:"teacherTag",children:"NAME"}),Object(N.jsx)("br",{}),Object(N.jsx)("span",{className:"teacherContent",children:"\uc815\ub2e4\ube48"}),Object(N.jsx)("br",{}),Object(N.jsx)("span",{className:"teacherTag",children:"E-MAIL"}),Object(N.jsx)("br",{}),Object(N.jsx)("span",{className:"teacherContent",children:"malgolil41@gmail.com"}),Object(N.jsx)("br",{}),Object(N.jsx)("span",{className:"teacherTag2",children:"\u2709\ufe0f Send Message"})]})]}),Object(N.jsx)("h2",{children:"NOTICE & HOMEWORK"}),Object(N.jsxs)("div",{className:"nnhForm",children:[Object(N.jsx)("ul",{className:"nnhForm__notice",children:m.map((function(e,t){return t<3?Object(N.jsxs)("li",{className:"nnhForm__notice--content",children:[Object(N.jsxs)("div",{className:"nnhForm__notice--content-titlebox",children:[Object(N.jsx)("span",{className:"nnhForm__notice--content-title",children:e.title}),Object(N.jsx)("span",{className:"nnhForm__notice--content-date",children:_(e.date)})]}),Object(N.jsx)("span",{className:"nnhForm__notice--content-text",children:e.content})]}):""}))}),Object(N.jsx)("ul",{className:"nnhForm__homework",children:g.map((function(e,t){return t<2?(t+1)%2!==0?Object(N.jsx)(o.b,{to:{pathname:"/Homework/".concat(e.id)},children:Object(N.jsxs)("li",{className:"nnhForm__homework--box",children:[Object(N.jsx)("span",{className:"nnhForm__homework--box-title",children:e.title}),Object(N.jsx)("span",{className:"nnhForm__homework--box-date",children:_(e.date)})]})}):Object(N.jsx)(o.b,{to:{pathname:"/Homework/".concat(e.id)},children:Object(N.jsxs)("li",{className:"nnhForm__homework--box2",children:[Object(N.jsx)("span",{className:"nnhForm__homework--box-title",children:e.title}),Object(N.jsx)("span",{className:"nnhForm__homework--box-date",children:_(e.date)})]})}):""}))})]}),Object(N.jsx)("h2",{children:"CALENDER"}),Object(N.jsx)("div",{className:"calender",children:"\ub2ec\ub825"})]})}),Object(N.jsx)("article",{children:Object(N.jsxs)("div",{className:"articleForm",children:[Object(N.jsxs)("div",{className:"noti_search",children:[Object(N.jsx)("div",{className:"noti_search_n",children:Object(N.jsx)("span",{className:"icon2",children:Object(N.jsx)("img",{width:"20px",src:"./img/notification.png",alt:"notification"})})}),Object(N.jsxs)("div",{className:"noti_search_s",children:[Object(N.jsx)("span",{className:"icon2",children:Object(N.jsx)("img",{width:"20px",src:"./img/search.png",alt:"search"})}),Object(N.jsx)("span",{className:"search",children:Object(N.jsx)("input",{placeholder:"Search for anything"})})]})]}),Object(N.jsx)("h2",{children:"LAST CLASS"}),Object(N.jsxs)("div",{className:"lastClass",children:[Object(N.jsx)("div",{className:"lastClass_icon",children:Object(N.jsx)("img",{height:"100px",src:"./img/class.png",alt:"next class"})}),Object(N.jsxs)("div",{className:"lastClass_content",children:[Object(N.jsx)("span",{className:"class_title",children:"\uc9c0\ub09c \uc218\uc5c5"}),Object(N.jsx)("div",{className:"class_contents",children:a.map((function(e,t){return 0===t?e.title:""}))})]})]}),Object(N.jsx)("h2",{children:"NEXT CLASS"}),Object(N.jsxs)("div",{className:"nextClass",children:[Object(N.jsxs)("div",{className:"nextClass_content",children:[Object(N.jsx)("span",{className:"class_title",children:"\ub2e4\uc74c \uc218\uc5c5"}),Object(N.jsx)("span",{className:"class_contents",children:a.map((function(e,t){return 0===t?e.next:""}))})]}),Object(N.jsx)("div",{className:"nextClass_icon",children:Object(N.jsx)("img",{height:"100px",src:"./img/nextclass.png",alt:"next class"})})]})]})})]})},_=(c(65),function(){var e=Object(s.useState)(""),t=Object(i.a)(e,2),c=t[0],n=t[1],a=Object(s.useState)(""),r=Object(i.a)(a,2),o=r[0],l=r[1],j=Object(s.useState)(!0),d=Object(i.a)(j,2),h=d[0],O=d[1],m=Object(s.useState)(""),x=Object(i.a)(m,2),v=(x[0],x[1]),f=function(e){var t=e.target,c=t.name,s=t.value;"email"===c?n(s):"password"===c&&l(s)},g=function(){var e=Object(u.a)(b.a.mark((function e(t){var s,n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),e.prev=1,s=Object(p.d)(),!h){e.next=9;break}return e.next=6,Object(p.c)(s,c,o);case 6:n=e.sent,e.next=12;break;case 9:return e.next=11,Object(p.e)(s,c,o);case 11:n=e.sent;case 12:console.log(n),e.next=18;break;case 15:e.prev=15,e.t0=e.catch(1),v(e.t0.message);case 18:case"end":return e.stop()}}),e,null,[[1,15]])})));return function(t){return e.apply(this,arguments)}}();return Object(N.jsx)(N.Fragment,{children:Object(N.jsxs)("form",{class:"login",onSubmit:g,children:[Object(N.jsxs)("div",{class:"logoForm",children:[Object(N.jsxs)("span",{class:"logo",children:[Object(N.jsx)("span",{class:"logoWork",children:"Class"}),Object(N.jsx)("span",{children:"Work"})]}),Object(N.jsx)("div",{class:"className",children:"\ud55c\uad6d\uc5b4\uc13c\ud130 1\uae09 2\ubc18"})]}),Object(N.jsx)("div",{class:"idForm",children:Object(N.jsx)("input",{name:"email",type:"email",class:"id",placeholder:"Email",value:c,onChange:f})}),Object(N.jsx)("div",{class:"pwForm",children:Object(N.jsx)("input",{name:"password",type:"password",class:"pw",required:"required",value:o,onChange:f,placeholder:"Password"})}),Object(N.jsx)("div",{class:"loginButton",children:Object(N.jsx)("input",{type:"submit",value:h?"Create Account":"LOGIN",class:"btn"})}),Object(N.jsx)("span",{class:"joinAccount",onClick:function(){return O((function(e){return!e}))},children:h?"LOGIN \ud654\uba74\uc73c\ub85c \uc774\ub3d9":"SIGN UP \ud654\uba74\uc73c\ub85c \uc774\ub3d9"}),Object(N.jsx)("div",{class:"google",children:Object(N.jsx)("button",{name:"google",class:"googleBTN",onClick:function(e){var t=e.target.name,c=Object(p.d)();if("google"===t){var s=new p.b;Object(p.f)(c,s)}else if("github"===t){var n=new p.a;Object(p.f)(c,n)}},children:"Continue With Google"})})]})})}),y=function(){var e=Object(s.useState)([]),t=Object(i.a)(e,2),c=t[0],n=t[1],a=(Object(l.f)(),Object(v.b)(k,"homework")),r=function(){var e=Object(u.a)(b.a.mark((function e(){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(v.e)(a,Object(v.g)("deadline"));case 2:e.sent.forEach((function(e){var t=Object(O.a)(Object(O.a)({},e.data()),{},{id:e.id});n((function(e){return[t].concat(Object(h.a)(e)).sort((function(e,t){return t.deadline-e.deadline}))}))}));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(s.useEffect)((function(){r()}),[]);var j=function(e){if(e){var t=e.toDate();return"".concat(t.getMonth()+1,"/").concat(t.getDate())}},d=function(e){var t=new Date;return e.toDate()<t?"\ud83d\udd1a \ub9c8\uac10 \ub418\uc5c8\uc2b5\ub2c8\ub2e4.":"\u2714 \uc219\uc81c\ub97c \ub0b4\uc138\uc694."};return Object(N.jsx)(N.Fragment,{children:c.map((function(e,t){return t%2===0?Object(N.jsx)(o.b,{to:"/Homework/".concat(e.id),children:Object(N.jsxs)("div",{className:"homeworkListForm",children:[Object(N.jsx)("div",{className:"homeworkListForm_l",children:Object(N.jsxs)("div",{className:"homeworkListDate",children:["~",j(e.deadline)]})}),Object(N.jsxs)("div",{className:"homeworkListForm_r",children:[Object(N.jsx)("div",{className:"homeworkListTag",children:e.type}),Object(N.jsx)("div",{className:"homeworkListTitle",children:e.title}),Object(N.jsx)("div",{className:"homeworkListMTag",children:d(e.deadline)})]})]},e.id)}):Object(N.jsx)(o.b,{to:"/Homework/".concat(e.id),children:Object(N.jsxs)("div",{className:"homeworkListForm2",children:[Object(N.jsx)("div",{className:"homeworkListForm_l",children:Object(N.jsxs)("div",{className:"homeworkListDate",children:["~",j(e.deadline)]})}),Object(N.jsxs)("div",{className:"homeworkListForm_r",children:[Object(N.jsx)("div",{className:"homeworkListTag",children:e.type}),Object(N.jsx)("div",{className:"homeworkListTitle",children:e.title}),Object(N.jsx)("div",{className:"homeworkListMTag",children:d(e.deadline)})]})]},e.id)})}))})},C=function(e){var t=e.match,c=Object(s.useState)({}),n=Object(i.a)(c,2),a=n[0],r=n[1],l=(Object(v.b)(k,"homework"),t.params.id),j=function(){var e=Object(u.a)(b.a.mark((function e(){var t,c;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t=Object(v.c)(k,"homework","".concat(l)),e.next=4,Object(v.d)(t);case 4:c=e.sent,r(c.data()),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.error("Error onClick: ",e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();Object(s.useEffect)((function(){j()}),[l]);return Object(N.jsxs)(N.Fragment,{children:[Object(N.jsxs)("div",{className:"homeworkTitleBar",children:[Object(N.jsx)("span",{className:"homeworkTitleBar__type",children:a.type}),Object(N.jsx)("br",{}),Object(N.jsx)("div",{className:"homeworkTitleBar__title",children:a.title}),Object(N.jsx)("br",{}),Object(N.jsx)("span",{className:"homeworkTitleBar__dday",children:function(e){if(void 0!==e){var t=new Date,c=e.toDate(),s=c-t,n=Math.floor(s/864e5);return c<t?"\ub9c8\uac10":"-".concat(n,"\uc77c")}}(a.deadline)}),Object(N.jsxs)("span",{className:"homeworkTitleBar__deadline",children:["~",function(e){if(e){var t=e.toDate();return"".concat(t.getFullYear(),".").concat(t.getMonth()+1,".").concat(t.getDate())}}(a.deadline)]})]}),Object(N.jsx)("div",{className:"homeworkContents",children:a.content}),Object(N.jsx)(o.b,{to:{pathname:"/Homework/".concat(l,"/submit"),state:{key:l}},children:Object(N.jsxs)("div",{className:"homeworkSubmit",children:[Object(N.jsx)("div",{className:"homeworkSubmitL",children:Object(N.jsx)("img",{width:"50px",src:"../img/send.png",alt:"send"})}),Object(N.jsx)("div",{className:"homeworkSubmitR",children:"\uc219\uc81c \uc81c\ucd9c"})]})})]})},F=function(e){var t=e.match,c=(e.userObj,Object(s.useState)("")),n=Object(i.a)(c,2),a=n[0],r=n[1],o=t.params.id,l=w.currentUser.uid,j=function(){var e=Object(u.a)(b.a.mark((function e(t){var c,s,n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,c={text:a,data:Date.now(),uid:l},s=Object(v.b)(k,"homework",o,"submit"),e.next=6,Object(v.a)(s,c);case 6:n=e.sent,console.log("Document written with ID: ",n.id),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),console.error("Error adding document: ",e.t0);case 13:r("");case 14:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(t){return e.apply(this,arguments)}}();return Object(N.jsxs)(N.Fragment,{children:[console.log(t.params.id),Object(N.jsxs)("form",{className:"HomeworkSubmitTextArea",onSubmit:j,children:[Object(N.jsx)("textarea",{className:"HomeworkSubmitTextArea__textarea",value:a,onChange:function(e){var t=e.target.value;r(t)},type:"text",placeholder:"\uc219\uc81c \ub0b4\uc6a9\uc744 \uc785\ub825\ud574 \uc8fc\uc138\uc694.",autoFocus:!0}),Object(N.jsx)("input",{className:"HomeworkSubmitTextArea__button",type:"submit",value:"\uc81c\ucd9c"})]})]})},L=c.p+"static/media/notification.dd9187a1.png",E=c.p+"static/media/search.c6544d31.png",T=function(){return Object(N.jsx)(N.Fragment,{children:Object(N.jsxs)("div",{className:"noti_search",children:[Object(N.jsx)("div",{className:"noti_search_n",children:Object(N.jsx)("span",{className:"icon2",children:Object(N.jsx)("img",{width:"20px",src:L,alt:"notification"})})}),Object(N.jsxs)("div",{className:"noti_search_s",children:[Object(N.jsx)("span",{className:"icon2",children:Object(N.jsx)("img",{width:"20px",src:E,alt:"search"})}),Object(N.jsx)("span",{className:"search",children:Object(N.jsx)("input",{placeholder:"Search for anything"})})]})]})})},D=function(e){var t=e.match;e.userObj;return Object(N.jsxs)(N.Fragment,{children:[Object(N.jsx)("div",{className:"list",children:Object(N.jsxs)("div",{className:"listForm",children:[Object(N.jsx)("div",{className:"currMenu",children:"HOMEWORK"}),Object(N.jsx)(y,{})]})}),Object(N.jsx)("article",{children:Object(N.jsxs)("div",{className:"articleForm",children:[Object(N.jsx)(T,{}),Object(N.jsx)(l.a,{exact:!0,path:"".concat(t.path),children:Object(N.jsx)("p",{children:"\uba54\ub274\ub97c \uc120\ud0dd\ud558\uc138\uc694."})}),Object(N.jsx)(l.a,{path:"".concat(t.path,"/:id"),render:function(e){var t=e.match;return Object(N.jsx)(C,{match:t})}}),Object(N.jsx)(l.a,{path:"".concat(t.path,"/:id/submit"),render:function(e){var t=e.match,c=e.userObj;return Object(N.jsx)(F,{match:t,userObj:c})}})]})})]})},M=function(){var e=Object(s.useState)([]),t=Object(i.a)(e,2),c=t[0],n=t[1],a=Object(s.useState)({chapter:"1\uacfc",content:"\ub0b4\uc6a9\uc785\ub2c8\ub2e4.",date:null,title:"\ubcf4\uace0 \uc2f6\uc740 \ub0b4\uc6a9\uc744 \uc120\ud0dd\ud558\uc138\uc694.",type:"",page:"page"}),r=Object(i.a)(a,2),o=r[0],l=r[1],j=Object(v.b)(k,"study"),d=function(){var e=Object(u.a)(b.a.mark((function e(){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(v.e)(j);case 2:e.sent.forEach((function(e){var t=Object(O.a)(Object(O.a)({},e.data()),{},{id:e.id});n((function(e){return[t].concat(Object(h.a)(e))}))}));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),m=function(){var e=Object(u.a)(b.a.mark((function e(t){var c,s;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,c=Object(v.c)(k,"study","".concat(t)),e.next=4,Object(v.d)(c);case 4:s=e.sent,l(s.data()),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.error("Error onClick: ",e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}();Object(s.useEffect)((function(){d()}),[]);var x=function(e){if(e){var t=e.toDate();return"".concat(t.getMonth()+1,"/").concat(t.getDate())}};return Object(N.jsxs)(N.Fragment,{children:[Object(N.jsx)("div",{class:"list",children:Object(N.jsxs)("div",{class:"listForm",children:[Object(N.jsx)("div",{class:"currMenu",children:"STUDY"}),c.map((function(e,t){return t%2===0?Object(N.jsxs)("div",{class:"homeworkListForm",onClick:function(){m(e.id)},children:[Object(N.jsx)("div",{class:"homeworkListForm_l",children:Object(N.jsx)("div",{class:"homeworkListDate",children:x(e.date)})}),Object(N.jsxs)("div",{class:"homeworkListForm_r",children:[Object(N.jsxs)("div",{class:"homeworkListTag",children:[e.chapter," ",e.type]}),Object(N.jsx)("div",{class:"homeworkListTitle",children:e.title}),Object(N.jsxs)("div",{class:"homeworkListMTag",children:["\ud83d\udcda ",e.page]})]})]}):Object(N.jsxs)("div",{class:"homeworkListForm2",onClick:function(){m(e.id)},children:[Object(N.jsx)("div",{class:"homeworkListForm_l",children:Object(N.jsx)("div",{class:"homeworkListDate",children:x(e.date)})}),Object(N.jsxs)("div",{class:"homeworkListForm_r",children:[Object(N.jsxs)("div",{class:"homeworkListTag",children:[e.chapter," ",e.type]}),Object(N.jsx)("div",{class:"homeworkListTitle",children:e.title}),Object(N.jsxs)("div",{class:"homeworkListMTag",children:["\ud83d\udcda ",e.page]})]})]})}))]})}),Object(N.jsx)("article",{children:Object(N.jsxs)("div",{class:"articleForm",children:[Object(N.jsxs)("div",{class:"noti_search",children:[Object(N.jsx)("div",{class:"noti_search_n",children:Object(N.jsx)("span",{class:"icon2",children:Object(N.jsx)("img",{width:"20px",src:"./img/notification.png",alt:"notification"})})}),Object(N.jsxs)("div",{class:"noti_search_s",children:[Object(N.jsx)("span",{class:"icon2",children:Object(N.jsx)("img",{width:"20px",src:"./img/search.png",alt:"search"})}),Object(N.jsx)("span",{class:"search",children:Object(N.jsx)("input",{placeholder:"Search for anything"})})]})]}),Object(N.jsxs)("div",{class:"homeworkTitleDate",children:[Object(N.jsx)("div",{class:"homeworkContentTitle",children:o.title}),Object(N.jsx)("div",{class:"homeworkDate",children:function(e){if(e){var t=e.toDate();return"".concat(t.getFullYear(),".").concat(t.getMonth()+1,".").concat(t.getDate())}}(o.date)})]}),Object(N.jsxs)("div",{class:"homeworkContents",children:[o.content,Object(N.jsxs)("div",{class:"homeworkListMTag",children:["\ud83d\udcda ",o.page]})]})]})})]})},I=function(){var e=Object(s.useState)([]),t=Object(i.a)(e,2),c=t[0],n=t[1],a=Object(s.useState)({content:"\ub0b4\uc6a9\uc785\ub2c8\ub2e4.",date:null,title:"\ubcf4\uace0 \uc2f6\uc740 \ub0b4\uc6a9\uc744 \uc120\ud0dd\ud558\uc138\uc694.",secret:!1,page:"page",writer:"\uc791\uc131\uc790"}),r=Object(i.a)(a,2),o=r[0],l=r[1],j=Object(s.useState)([]),d=Object(i.a)(j,2),m=(d[0],d[1],Object(v.b)(k,"question")),x=function(){var e=Object(u.a)(b.a.mark((function e(){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(v.e)(m);case 2:e.sent.forEach((function(e){var t=Object(O.a)(Object(O.a)({},e.data()),{},{id:e.id});n((function(e){return[t].concat(Object(h.a)(e))}))}));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),p=function(){var e=Object(u.a)(b.a.mark((function e(t){var c,s;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,c=Object(v.c)(k,"question","".concat(t)),e.next=4,Object(v.d)(c);case 4:s=e.sent,l(s.data()),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.error("Error onClick: ",e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}();Object(s.useEffect)((function(){x()}),[]);var f=function(e){if(e){var t=e.toDate();return"".concat(t.getFullYear(),".").concat(t.getMonth()+1,".").concat(t.getDate())}};return Object(N.jsxs)(N.Fragment,{children:[Object(N.jsx)("div",{class:"list",children:Object(N.jsxs)("div",{class:"listForm",children:[Object(N.jsx)("div",{class:"currMenu",children:"QUESTION"}),Object(N.jsx)("board",{children:c.map((function(e){return Object(N.jsxs)("div",{class:"boardForm",onClick:function(){p(e.id)},children:[Object(N.jsx)("div",{class:"boardListNumber",children:e.number}),Object(N.jsx)("div",{class:"boardListTitle",children:e.title}),Object(N.jsxs)("div",{class:"boardListDate",children:[f(e.date),Object(N.jsx)("span",{class:"boardListWriter",children:e.writer})]})]})}))})]})}),Object(N.jsx)("article",{children:Object(N.jsxs)("div",{class:"articleForm",children:[Object(N.jsxs)("div",{class:"noti_search",children:[Object(N.jsx)("div",{class:"noti_search_n",children:Object(N.jsx)("span",{class:"icon2",children:Object(N.jsx)("img",{width:"20px",src:"./img/notification.png",alt:"notification"})})}),Object(N.jsxs)("div",{class:"noti_search_s",children:[Object(N.jsx)("span",{class:"icon2",children:Object(N.jsx)("img",{width:"20px",src:"./img/search.png",alt:"search"})}),Object(N.jsx)("span",{class:"search",children:Object(N.jsx)("input",{placeholder:"Search for anything"})})]})]}),Object(N.jsxs)("div",{class:"homeworkTitleDate",children:[Object(N.jsx)("div",{class:"homeworkContentTitle",children:o.title}),Object(N.jsx)("div",{class:"homeworkDate",children:f(o.date)})]}),Object(N.jsxs)("div",{class:"homeworkContents",children:[o.content,Object(N.jsx)("div",{class:"name",children:o.writer})]}),Object(N.jsxs)("div",{class:"replyForm",children:[Object(N.jsx)("div",{class:"replyFormL",children:Object(N.jsx)("img",{width:"50px",src:"./img/reply-message.png",alt:"reply",class:"replyImgStyle"})}),Object(N.jsxs)("div",{class:"replyFormR",children:["\uc758\ubbf8\uac00 \uc870\uae08 \ub2ec\ub77c\uc694.",Object(N.jsx)("div",{class:"name",children:"\uc120\uc0dd\ub2d8"})]})]})]})})]})},A=function(){var e=Object(s.useState)([]),t=Object(i.a)(e,2),c=t[0],n=t[1],a=Object(s.useState)({content:"\ub0b4\uc6a9\uc785\ub2c8\ub2e4.",date:null,title:"\ubcf4\uace0 \uc2f6\uc740 \ub0b4\uc6a9\uc744 \uc120\ud0dd\ud558\uc138\uc694.",secret:!1,page:"page",writer:"\uc791\uc131\uc790"}),r=Object(i.a)(a,2),o=r[0],l=r[1],j=Object(v.b)(k,"notice"),d=function(){var e=Object(u.a)(b.a.mark((function e(){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(v.e)(j);case 2:e.sent.forEach((function(e){var t=Object(O.a)(Object(O.a)({},e.data()),{},{id:e.id});n((function(e){return[t].concat(Object(h.a)(e))}))}));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),m=function(){var e=Object(u.a)(b.a.mark((function e(t){var c,s;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,c=Object(v.c)(k,"notice","".concat(t)),e.next=4,Object(v.d)(c);case 4:s=e.sent,l(s.data()),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.error("Error onClick: ",e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}();Object(s.useEffect)((function(){d()}),[]);var x=function(e){if(e){var t=e.toDate();return"".concat(t.getFullYear(),".").concat(t.getMonth()+1,".").concat(t.getDate())}};return Object(N.jsxs)(N.Fragment,{children:[Object(N.jsx)("div",{class:"list",children:Object(N.jsxs)("div",{class:"listForm",children:[Object(N.jsx)("div",{class:"currMenu",children:"NOTICE"}),Object(N.jsx)("board",{children:c.map((function(e){return Object(N.jsxs)("div",{class:"boardForm",onClick:function(){m(e.id)},children:[Object(N.jsx)("div",{class:"boardListNumber",children:e.number}),Object(N.jsx)("div",{class:"boardListTitle",children:e.title}),Object(N.jsx)("div",{class:"boardListDate",children:x(e.date)})]})}))})]})}),Object(N.jsx)("article",{children:Object(N.jsxs)("div",{class:"articleForm",children:[Object(N.jsx)("div",{class:"notiBar",children:Object(N.jsxs)("div",{class:"noti_search",children:[Object(N.jsx)("div",{class:"noti_search_n",children:Object(N.jsx)("span",{class:"icon2",children:Object(N.jsx)("img",{width:"20px",src:"./img/notification.png",alt:"notification"})})}),Object(N.jsxs)("div",{class:"noti_search_s",children:[Object(N.jsx)("span",{class:"icon2",children:Object(N.jsx)("img",{width:"20px",src:"./img/search.png",alt:"search"})}),Object(N.jsx)("span",{class:"search",children:Object(N.jsx)("input",{placeholder:"Search for anything"})})]})]})}),Object(N.jsxs)("div",{class:"homeworkTitleDate",children:[Object(N.jsx)("div",{class:"homeworkContentTitle",children:o.title}),Object(N.jsx)("div",{class:"homeworkDate",children:x(o.date)})]}),Object(N.jsx)("div",{class:"homeworkContents",children:o.content}),Object(N.jsxs)("div",{class:"replyForm",children:[Object(N.jsx)("div",{class:"replyFormL",children:Object(N.jsx)("img",{width:"50px",src:"./img/reply-message.png",alt:"reply",class:"replyImgStyle"})}),Object(N.jsxs)("div",{class:"replyFormR",children:["\uc54c\uaca0\uc2b5\ub2c8\ub2e4!!",Object(N.jsx)("div",{class:"name",children:"\b\ub9b0\uc9f1"})]})]})]})})]})},Y=function(){Object(s.useEffect)((function(){document.querySelector("#".concat(n)).style.color="#3f3e3e"}),[]);var e=Object(l.f)(),t=Object(s.useState)("MYCLASSES"),c=Object(i.a)(t,2),n=c[0],a=c[1],r=function(t){switch(document.querySelector("#MYCLASSES").style.color="#cac9cd",document.querySelector("#HOMEWORK").style.color="#cac9cd",document.querySelector("#STUDY").style.color="#cac9cd",document.querySelector("#QUESTION").style.color="#cac9cd",document.querySelector("#NOTICE").style.color="#cac9cd",document.querySelector("#".concat(t)).style.color="#3f3e3e",t){case"MYCLASSES":a(t),e.push({pathname:"/",state:{navCurrMenu:n}});break;case"HOMEWORK":a(t),e.push({pathname:"/Homework",state:{navCurrMenu:n}});break;case"STUDY":a(t),e.push({pathname:"/Study",state:{navCurrMenu:n}});break;case"QUESTION":a(t),e.push({pathname:"/Question",state:{navCurrMenu:n}});break;case"NOTICE":a(t),e.push({pathname:"/Notice",state:{navCurrMenu:n}})}};return Object(N.jsxs)(N.Fragment,{children:[Object(N.jsxs)("div",{id:"logoLink",onClick:function(){r("MYCLASSES")},children:[Object(N.jsxs)("span",{class:"logo",children:[Object(N.jsx)("span",{class:"logoWork",children:"Class"}),"Work"]}),Object(N.jsx)("div",{class:"className",children:"\ud55c\uad6d\uc5b4\uc13c\ud130 1\uae09 2\ubc18"})]}),Object(N.jsxs)("div",{class:"navBar",children:[Object(N.jsxs)("div",{class:"userInfo",children:[Object(N.jsxs)("span",{class:"userInfo_name",children:[w.currentUser.displayName," \ub2d8"]}),Object(N.jsx)("br",{}),Object(N.jsx)("span",{class:"userInfo_info",children:w.currentUser.email})]}),Object(N.jsx)("div",{class:"signOut",onClick:function(){w.signOut(),e.push("/")},children:"SIGN OUT"}),Object(N.jsx)("div",{class:"menuForm",children:Object(N.jsxs)("ul",{class:"ulMenu",children:[Object(N.jsx)("div",{class:"menu",id:"MYCLASSES",children:Object(N.jsx)("li",{onClick:function(){r("MYCLASSES")},children:"MY CLASSES"})}),Object(N.jsx)("div",{class:"menu",id:"HOMEWORK",children:Object(N.jsx)("li",{onClick:function(){r("HOMEWORK")},children:"HOMEWORK"})}),Object(N.jsx)("div",{class:"menu",id:"STUDY",children:Object(N.jsx)("li",{onClick:function(){r("STUDY")},children:"STUDY"})}),Object(N.jsx)("div",{class:"menu",id:"QUESTION",children:Object(N.jsx)("li",{onClick:function(){r("QUESTION")},children:"QUESTION"})}),Object(N.jsx)("div",{class:"menu",id:"NOTICE",children:Object(N.jsx)("li",{onClick:function(){r("NOTICE")},children:"NOTICE"})})]})})]})]})},W=function(e){var t=e.isLoggedIn,c=Object(s.useState)(!1),n=Object(i.a)(c,2),a=n[0],r=n[1],j=function(){window.innerWidth<=800?(document.querySelector(".navBar").style.display="none",r(!1)):(document.querySelector(".navBar").style.display="block",r(!0))};return Object(s.useEffect)((function(){if(t)return window.addEventListener("resize",j),document.querySelector(".ulMenu").addEventListener("click",j),function(){window.removeEventListener("resize",j)}}),[]),Object(N.jsx)(o.a,{basename:"/classWork",children:Object(N.jsx)(l.c,{children:t?Object(N.jsxs)(N.Fragment,{children:[Object(N.jsx)("div",{class:"menuBTN",onClick:function(){a?(document.querySelector(".navBar").style.display="none",r(!1)):(document.querySelector(".navBar").style.display="block",r(!0))},children:Object(N.jsx)("span",{class:"icon",children:Object(N.jsx)("img",{width:"20px",src:"./img/list.png",alt:"notification"})})}),Object(N.jsxs)("div",{class:"box",children:[Object(N.jsx)("nav",{children:Object(N.jsx)(Y,{})}),Object(N.jsx)(l.a,{exact:!0,path:"/",component:S}),Object(N.jsx)(l.a,{Route:!0,path:"/Homework",component:D}),Object(N.jsx)(l.a,{path:"/Study",component:M}),Object(N.jsx)(l.a,{path:"/Question",component:I}),Object(N.jsx)(l.a,{path:"/Notice",component:A})]}),Object(N.jsx)("div",{class:"copyright",children:Object(N.jsxs)("footer",{children:["\xa9 Class Work ",(new Date).getFullYear()]})})]}):Object(N.jsx)(l.a,{exact:"exact",path:"/",children:Object(N.jsx)(_,{})})})})};var H=function(){var e=Object(s.useState)(!1),t=Object(i.a)(e,2),c=t[0],n=t[1],a=Object(s.useState)(!1),r=Object(i.a)(a,2),o=r[0],l=r[1];return Object(s.useEffect)((function(){w.onAuthStateChanged((function(e){l(!!e),n(!0)}))}),[]),Object(N.jsx)(N.Fragment,{children:c?Object(N.jsx)(W,{isLoggedIn:o}):Object(N.jsx)(N.Fragment,{children:Object(N.jsxs)("div",{class:"loading",children:[Object(N.jsxs)("div",{class:"logo",children:[Object(N.jsx)("span",{class:"logoWork",children:"Class"}),"Work"]}),Object(N.jsx)("div",{class:"loading__message",children:"Loading..."})]})})})};r.a.render(Object(N.jsx)(n.a.StrictMode,{children:Object(N.jsx)(H,{})}),document.getElementById("root"))}},[[66,1,2]]]);
//# sourceMappingURL=main.b1034bc6.chunk.js.map