(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{12:function(e,t,a){e.exports=a(20)},17:function(e,t,a){},19:function(e,t,a){},20:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(11),c=a.n(l),o=(a(17),a(3)),u=a.n(o),i=a(6),s=a(2),m=a(5),p=a(1);a(19);var d=function(e,t,a){var r=Object(n.useRef)();Object(n.useEffect)((function(){var n=(null===a||void 0===a?void 0:a.current)||window;if(n&&n.addEventListener){r.current!==t&&(r.current=t);var l=function(e){(null===r||void 0===r?void 0:r.current)&&r.current(e)};return n.addEventListener(e,l),function(){n.removeEventListener(e,l)}}}),[e,a,t])};var E=function(e,t){var a=Object(n.useCallback)((function(){if("undefined"===typeof window)return t;try{var a=window.localStorage.getItem(e);return a?function(e){try{return"undefined"===e?void 0:JSON.parse(null!==e&&void 0!==e?e:"")}catch(t){return void console.log("parsing error on",{value:e})}}(a):t}catch(n){return console.warn("Error reading localStorage key \u201c".concat(e,"\u201d:"),n),t}}),[t,e]),r=Object(n.useState)(a),l=Object(s.a)(r,2),c=l[0],o=l[1];Object(n.useEffect)((function(){o(a())}),[]);var u=Object(n.useCallback)((function(){o(a())}),[a]);return d("storage",u),d("local-storage",u),[c,function(t){"undefined"==typeof window&&console.warn("Tried setting localStorage key \u201c".concat(e,"\u201d even though environment is not a client"));try{var a=t instanceof Function?t(c):t;window.localStorage.setItem(e,JSON.stringify(a)),o(a),window.dispatchEvent(new Event("local-storage"))}catch(n){console.warn("Error setting localStorage key \u201c".concat(e,"\u201d:"),n)}}]},f=function(){var e=E("user",null),t=Object(s.a)(e,2),a=t[0],n=t[1];return{user:a,setUser:n,clearUser:function(){return n(null)},isLoggedIn:!!a}},b=function(){var e=f(),t=e.isLoggedIn,a=e.clearUser,l=Object(n.useCallback)(function(){var e=Object(i.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,fetch("/api/logout",{method:"GET",headers:{"Content-Type":"application/json"}});case 4:a(),window.location.href="/",e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),window.alert(e.t0);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}(),[]);return t?r.a.createElement("div",{className:"flex"},r.a.createElement("li",null,r.a.createElement(m.b,{to:"/"},"Home")),r.a.createElement("li",null,r.a.createElement(m.b,{to:"/diary"},"Diary")),r.a.createElement("li",null,r.a.createElement(m.b,{to:"/profile"},"Profile")),r.a.createElement("li",null,r.a.createElement("button",{onClick:l},"Logout"))):r.a.createElement("div",{className:"flex"},r.a.createElement("li",null,r.a.createElement(m.b,{to:"/"},"Home")),r.a.createElement("li",null,r.a.createElement(m.b,{to:"/sign-up"},"Signup")),r.a.createElement("li",null,r.a.createElement(m.b,{to:"/login"},"Login")))},v=a(8),h=a(7);function g(){var e=f(),t=(e.user,e.setUser),a=Object(n.useState)({first_name:"",last_name:"",username:"",email:"",password:"",country:"",image_url:"",bio:""}),l=Object(s.a)(a,2),c=l[0],o=l[1],m=function(e){var t=e.target,a=t.name,n=t.value;o((function(e){return Object(h.a)(Object(h.a)({},e),{},Object(v.a)({},a,n))}))},p=function(){var e=Object(i.a)(u.a.mark((function e(a){var n,r,l,o;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),alert("Welcome to Mood Diary, ".concat(c.username)),e.prev=2,e.next=5,fetch("/api/sign-up",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(c)});case 5:return n=e.sent,e.next=8,n.json();case 8:if(r=e.sent,l=r.status,r.success,o=r.userData,404!==l){e.next=12;break}throw new Error("No user");case 12:t(o),e.next=17;break;case 15:e.prev=15,e.t0=e.catch(2);case 17:case"end":return e.stop()}}),e,null,[[2,15]])})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("form",{onSubmit:p,style:{width:300,display:"flex",flexDirection:"column"}},r.a.createElement("label",{htmlFor:"first_name"},"First Name:"),r.a.createElement("input",{id:"first_name",type:"text",name:"first_name",value:c.first_name,onChange:m}),r.a.createElement("label",{htmlFor:"last_name"},"Last Name:"),r.a.createElement("input",{id:"last_name",type:"text",name:"last_name",value:c.last_name,onChange:m}),r.a.createElement("label",{htmlFor:"username"},"Username:"),r.a.createElement("input",{id:"username",type:"text",name:"username",value:c.username,onChange:m}),r.a.createElement("label",{htmlFor:"email"},"Email:"),r.a.createElement("input",{id:"email",type:"email",name:"email",value:c.email,onChange:m}),r.a.createElement("label",{htmlFor:"password"},"Password:"),r.a.createElement("input",{id:"password",type:"password",name:"password",value:c.password,onChange:m}),r.a.createElement("label",{htmlFor:"country"},"Country:"),r.a.createElement("input",{id:"country",type:"text",name:"country",value:c.country,onChange:m}),r.a.createElement("label",{htmlFor:"image_url"},"Image URL:"),r.a.createElement("input",{id:"image_url",type:"url",name:"image_url",value:c.image_url,onChange:m}),r.a.createElement("label",{htmlFor:"bio"},"Bio:"),r.a.createElement("input",{id:"bio",type:"text",name:"bio",value:c.bio,onChange:m}),r.a.createElement("button",null,"Sign up!"))}function y(){var e=Object(p.f)(),t=f(),a=t.user,l=t.setUser,c=Object(n.useState)({username:"",password:""}),o=Object(s.a)(c,2),m=o[0],d=o[1],E=function(e){var t=e.target,a=t.name,n=t.value;d((function(e){return Object(h.a)(Object(h.a)({},e),{},Object(v.a)({},a,n))}))},b=function(){var t=Object(i.a)(u.a.mark((function t(a){var n,r,c,o,i;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a.preventDefault(),n=m.username,m.password,alert("Welcome back, ".concat(n)),t.prev=3,t.next=6,fetch("/api/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(m)});case 6:return r=t.sent,t.next=9,r.json();case 9:if(c=t.sent,o=c.status,c.success,i=c.userData,404!==o){t.next=13;break}throw new Error("No user");case 13:l(i),e("/"),t.next=19;break;case 17:t.prev=17,t.t0=t.catch(3);case 19:case"end":return t.stop()}}),t,null,[[3,17]])})));return function(e){return t.apply(this,arguments)}}();return a?r.a.createElement("div",null,a.username," is logged in"):r.a.createElement("form",{onSubmit:b},r.a.createElement("label",{htmlFor:"username"},"Username:"),r.a.createElement("input",{id:"username",type:"text",name:"username",value:m.username,onChange:E}),r.a.createElement("label",{htmlFor:"password"},"Password:"),r.a.createElement("input",{id:"password",type:"password",name:"password",value:m.password,onChange:E}),r.a.createElement("button",null,"Log in!"))}function w(){var e=f(),t=e.user;return e.isLoggedIn?r.a.createElement("div",null,r.a.createElement("h1",null,"Welcome to Mood Diary"),r.a.createElement("p",null,"User: ",Object.keys(t).map((function(e){return r.a.createElement("li",null,r.a.createElement("b",null,e,":")," ",t[e])})))):r.a.createElement("div",null,r.a.createElement("h1",null,"Welcome to Mood Diary!"))}function j(){var e=Object(p.f)(),t=Object(n.useState)({user_id:"",title:"",date:"",post:"",mood:"",keywords:""}),a=Object(s.a)(t,2),l=a[0],c=a[1],o=function(e){var t=e.target,a=t.name,n=t.value;c((function(e){return Object(h.a)(Object(h.a)({},e),{},Object(v.a)({},a,n))}))},m=function(){var t=Object(i.a)(u.a.mark((function t(a){var n,r,c;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a.preventDefault(),t.prev=1,t.next=4,fetch("/api/add-diary",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(l)});case 4:return n=t.sent,t.next=7,n.json();case 7:r=t.sent,r.status,r.success,c=r.diaryData,e("/mood",{state:{diary:c}}),t.next=14;break;case 12:t.prev=12,t.t0=t.catch(1);case 14:case"end":return t.stop()}}),t,null,[[1,12]])})));return function(e){return t.apply(this,arguments)}}();return r.a.createElement("form",{onSubmit:m,style:{width:300,display:"flex",flexDirection:"column"}},r.a.createElement("label",{htmlFor:"title"},"Title:"),r.a.createElement("input",{id:"title",type:"text",name:"title",value:l.title,onChange:o}),r.a.createElement("label",{htmlFor:"date"},"Date:"),r.a.createElement("input",{id:"date",type:"date",name:"date",value:l.date,onChange:o}),r.a.createElement("label",{htmlFor:"Post"},"Post:"),r.a.createElement("input",{id:"post",type:"text",name:"post",value:l.post,onChange:o}),r.a.createElement("button",null,"Add Diary"))}var O=function(e){var t=e.entries,a=Object(p.f)(),l=f(),c=l.user,o=l.isLoggedIn,m=Object(n.useState)([]),d=Object(s.a)(m,2),E=d[0],b=d[1],v=function(){var e=Object(i.a)(u.a.mark((function e(){var t,a,n,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/random-quote");case 2:return t=e.sent,console.log("response",t),e.next=6,t.json();case 6:a=e.sent,n=a.success,a.status,r=a.quote,n&&b('"'.concat(r.q,'" - ').concat(r.a));case 11:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();if(Object(n.useEffect)((function(){v()}),[]),o)return r.a.createElement("div",null,r.a.createElement("h1",null,"Welcome to your profile, ",c.username),r.a.createElement("h4",null,r.a.createElement("b",null,"Today's inspirational quote is..."),E),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("img",{width:"300",height:"200",src:(c.image_url,"https://images.pexels.com/photos/4050290/pexels-photo-4050290.jpeg")})),r.a.createElement("li",null,r.a.createElement("b",null,"Name: ")," ",c.first_name," ",c.last_name),r.a.createElement("li",null,r.a.createElement("b",null,"Email: ")," ",c.email),r.a.createElement("li",null,r.a.createElement("b",null,"Country: ")," ",c.country),r.a.createElement("li",null,r.a.createElement("b",null,"Bio: ")," ",c.bio)),t&&r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",null,"Diary Entries (",t.length,")"),t.map((function(e){return r.a.createElement("div",null,e.post,r.a.createElement("button",{onClick:function(){return a("/mood",{state:{diary:e}})}},"Show Mood"))}))));a("/")};function x(){var e=Object(p.e)().state.diary;return console.log(e),r.a.createElement("div",null,r.a.createElement("h1",null,"Here is your Diary and takeaways at a glance!"),r.a.createElement("li",null,r.a.createElement("b",null,"Your Diary Entry:")," ",e.post),r.a.createElement("li",null,r.a.createElement("b",null,"Mood Analysis:")," ",e.mood),r.a.createElement("li",null,r.a.createElement("b",null,"Key Words that Resonate:")," ",e.keywords.map((function(e){return r.a.createElement("p",null,e[0])}))))}var k=function(){var e=f(),t=(e.user,e.isLoggedIn),a=Object(n.useState)([]),l=Object(s.a)(a,2),c=l[0],o=l[1],d=Object(n.useCallback)(Object(i.a)(u.a.mark((function e(){var t,a,n,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/diaries");case 2:return t=e.sent,e.next=5,t.json();case 5:a=e.sent,n=a.success,r=a.diaryData,n?o(r):window.alert("Error getting diary entries");case 8:case"end":return e.stop()}}),e)}))),[o]);return Object(n.useEffect)(d,[]),r.a.createElement(m.a,null,r.a.createElement(b,null),r.a.createElement(p.c,null,r.a.createElement(p.a,{path:"/",element:r.a.createElement(w,null)}),t?r.a.createElement(r.a.Fragment,null,r.a.createElement(p.a,{path:"/diary",element:r.a.createElement(j,null)}),r.a.createElement(p.a,{path:"/profile",element:r.a.createElement(O,{entries:c,updateEntries:d})}),r.a.createElement(p.a,{path:"/mood",element:r.a.createElement(x,null)})):r.a.createElement(r.a.Fragment,null,r.a.createElement(p.a,{path:"/sign-up",element:r.a.createElement(g,null)}),r.a.createElement(p.a,{path:"/login",element:r.a.createElement(y,null)}))))},C=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,21)).then((function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,l=t.getLCP,c=t.getTTFB;a(e),n(e),r(e),l(e),c(e)}))};c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(k,null)),document.getElementById("root")),C()}},[[12,1,2]]]);
//# sourceMappingURL=main.28c04c81.chunk.js.map