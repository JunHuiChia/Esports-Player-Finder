(this["webpackJsonpesports-player-finder"]=this["webpackJsonpesports-player-finder"]||[]).push([[0],{40:function(e,t,n){},43:function(e,t,n){},44:function(e,t,n){},63:function(e,t,n){},68:function(e,t,n){},69:function(e,t,n){},70:function(e,t,n){},71:function(e,t,n){},72:function(e,t,n){},73:function(e,t,n){"use strict";n.r(t);var s=n(1),a=n.n(s),c=n(18),o=n.n(c),r=(n(40),n(19)),i=n(33),l=n(13),d=(n(43),n(44),n.p+"static/media/logo.af547770.png"),u="not logged in",j="log in form",b="sign up form",h="logged_in",p=n(5),O=n(10),g=n.n(O),m=(n(63),n(2)),x=n(7),f=n(0),v=function(){var e=Object(l.e)(),t=Object(s.useContext)(C),n=Object(m.g)(),a=(t.userName,t.userEmail),c=t.userPassword,o=t.handleUserEmail,r=t.handleUserPassword,i=t.login,u=(t.checkDetails,t.errorMessage,t.loginStatus,Object(s.useState)(!0)),j=Object(p.a)(u,2),b=j[0],h=j[1];function O(){i((function(t){return e.show(Object(f.jsx)("div",{className:"text-sm",children:t})),n.push("/profile")}))}return Object(f.jsx)("div",{className:"page",children:Object(f.jsxs)("div",{id:"loginArea",children:[Object(f.jsxs)("div",{id:"headingArea",children:[Object(f.jsx)("img",{src:d,alt:"Logo"}),Object(f.jsx)("span",{children:"Log In"})]}),Object(f.jsxs)("div",{id:"inputArea",children:[Object(f.jsxs)("label",{htmlFor:"email",className:"emailContent",children:["Email",Object(f.jsx)("p",{className:"required",children:"*"})]}),Object(f.jsx)("input",{type:"text",name:"email",id:"emailInput",value:a,onChange:o}),Object(f.jsxs)("label",{htmlFor:"password",className:"passwordContent",children:["Password",Object(f.jsx)("p",{className:"required",children:"*"})]}),Object(f.jsxs)("div",{className:"loginPasswordSpan",children:[Object(f.jsx)("input",{type:b?"password":"text",name:"password",id:"passwordInput",value:c,onChange:r,onKeyDown:function(e){"Enter"===e.key&&O()}}),Object(f.jsx)("div",{className:"showPassword",onClick:function(){h(!b)},children:"Show"})]}),Object(f.jsx)("a",{href:".",className:"forgotPassword",children:"Forgot password?"}),Object(f.jsx)("button",{onClick:function(){return O()},children:"Log In"}),Object(f.jsxs)("span",{children:["New to ESPFinder?",Object(f.jsx)(x.b,{to:"/register",className:"joinNow",children:" Join now"})]})]})]})})},w="loggedin",C=a.a.createContext(),N=function(e){var t="http://backend.setap.local/",n=Object(s.useState)(u),a=Object(p.a)(n,2),c=a[0],o=a[1],r=Object(s.useState)(""),i=Object(p.a)(r,2),l=i[0],d=i[1],O=Object(s.useState)(0),m=Object(p.a)(O,2),x=m[0],v=m[1],N=Object(s.useState)(""),S=Object(p.a)(N,2),P=S[0],y=S[1],k=Object(s.useState)(""),E=Object(p.a)(k,2),I=E[0],A=E[1],L=Object(s.useState)(""),U=Object(p.a)(L,2),F=U[0],B=U[1],R=Object(s.useState)(""),D=Object(p.a)(R,2),T=D[0],q=D[1],J=Object(s.useState)(""),M=Object(p.a)(J,2),_=M[0],G=M[1];return Object(f.jsx)(C.Provider,{value:{authStatus:c,changeAuthStatusLogin:function(){o(j)},changeAuthStatusSignup:function(){o(b)},userId:x,userName:P,userNameInput:I,userEmail:F,userPassword:T,loginStatus:_,setLoginStatus:G,handleUserNameInput:function(e){var t=e.target.value;A(t)},handleUserEmail:function(e){var t=e.target.value;B(t)},handleUserPassword:function(e){var t=e.target.value;q(t)},signup:function(e){g.a.defaults.withCredentials=!0,g.a.get(t+"api/sanctum/csrf-cookie").then((function(n){g.a.post(t+"api/register",{name:I,email:F,password:T}).then((function(n){g.a.get(t+"api/user").then((function(t){v(t.data.id),y(t.data.name),d(""),o(h),G(!0),e("Successful Sign Up")}),(function(t){d("Could not complete the sign up"),e("Could not complete the sign up")}))}),(function(t){t.response.data.errors.name?(d(t.response.data.errors.name[0]),e(t.response.data.errors.name[0])):t.response.data.errors.email?(d(t.response.data.errors.email[0]),e(t.response.data.errors.email[0])):t.response.data.errors.password?(d(t.response.data.errors.password[0]),e(t.response.data.errors.password[0])):t.response.data.message?(d(t.response.data.message),e(t.response.data.message)):(d("Could not complete the sign up"),e("Could not complete the sign up"))}))}),(function(t){d("Could not complete the sign up"),e("Could not complete the sign up")}))},login:function(e){g.a.defaults.withCredentials=!0,g.a.get(t+"api/sanctum/csrf-cookie").then((function(n){g.a.post(t+"api/login",{email:F,password:T}).then((function(n){g.a.get(t+"api/user").then((function(t){v(t.data.id),y(t.data.name),d(""),o(h),localStorage.setItem(w,"LoggedIn"),G(!0),e("Successful Login")}),(function(e){d("Could not complete the login")}))}),(function(t){t.response?(d(t.response.data.message),e(t.response.data.message)):(d("Could not complete the login"),e("Could not complete the login"))}))}),(function(t){d("Could not complete the login"),e("Could not complete the login")}))},checkDetails:function(){g.a.defaults.withCredentials=!0,g.a.get(t+"api/user").then((function(e){console.log(e),v(e.data.id),y(e.data.name),d("")}),(function(e){d("Could not complete the login")}))},logout:function(){g.a.defaults.withCredentials=!0,g.a.get(t+"api/logout"),v(0),y(""),A(""),B(""),q(""),o(u),localStorage.removeItem(w),G(!1)},errorMessage:l,isLogin:function(){localStorage.getItem(w)?G(!0):G(!1)}},children:e.children})},S=(n(68),function(){var e=Object(l.e)(),t=Object(m.g)(),n=Object(s.useContext)(C),a=n.userNameInput,c=n.userEmail,o=n.userPassword,r=n.handleUserNameInput,i=n.handleUserEmail,u=n.handleUserPassword,j=n.signup,b=(n.errorMessage,n.checkDetails,Object(s.useState)(!0)),h=Object(p.a)(b,2),O=h[0],g=h[1];return Object(f.jsx)("div",{className:"page",children:Object(f.jsxs)("div",{id:"registerArea",children:[Object(f.jsxs)("div",{id:"headingArea",children:[Object(f.jsx)("img",{src:d,alt:"Logo"}),Object(f.jsx)("span",{children:"Register"})]}),Object(f.jsxs)("div",{id:"inputArea",children:[Object(f.jsxs)("label",{htmlFor:"username",className:"registerUsernameText",children:["Username",Object(f.jsx)("p",{className:"required",children:"*"})]}),Object(f.jsx)("input",{type:"text",name:"username",id:"registerUsernameInput",value:a,onChange:r}),Object(f.jsxs)("label",{htmlFor:"email",className:"registerEmailText",children:["Email",Object(f.jsx)("p",{className:"required",children:"*"})]}),Object(f.jsx)("input",{type:"text",name:"email",id:"registerEmailInput",value:c,onChange:i}),Object(f.jsxs)("label",{htmlFor:"password",className:"registerPasswordText",children:["Password",Object(f.jsx)("p",{className:"required",children:"*"})]}),Object(f.jsxs)("div",{className:"registerPasswordSpan",children:[Object(f.jsx)("input",{type:O?"password":"text",name:"password",id:"registerPasswordInput",value:o,onChange:u}),Object(f.jsx)("div",{className:"showPassword",onClick:function(){g(!O)},children:"Show"})]}),Object(f.jsx)("p",{className:"agreement",children:"By clicking Agree & Join, you agree to our User Agreement, Privacy Policy, and Cookie Policy."}),Object(f.jsx)("button",{onClick:function(){j((function(n){if(console.log(n),e.show(Object(f.jsx)("div",{className:"text-sm",children:n})),"Successful Sign Up"==n)return t.push("/profile")}))},children:"Agree & Join"}),Object(f.jsxs)("span",{children:["Already on ESPFinder? ",Object(f.jsx)(x.b,{to:"/login",className:"sign-in",children:"Log in"})]})]})]})})}),P=n(14),y=n(15),k=n(17),E=n(16),I=(n(69),function(e){Object(k.a)(n,e);var t=Object(E.a)(n);function n(){return Object(P.a)(this,n),t.apply(this,arguments)}return Object(y.a)(n,[{key:"render",value:function(){return Object(f.jsx)("div",{children:Object(f.jsx)("div",{children:"dashboard"})})}}]),n}(a.a.Component)),A=(n(70),function(e){Object(k.a)(n,e);var t=Object(E.a)(n);function n(){return Object(P.a)(this,n),t.apply(this,arguments)}return Object(y.a)(n,[{key:"render",value:function(){return Object(f.jsx)("div",{children:Object(f.jsx)("div",{children:"games"})})}}]),n}(a.a.Component)),L=(n(71),function(e){Object(k.a)(n,e);var t=Object(E.a)(n);function n(){return Object(P.a)(this,n),t.apply(this,arguments)}return Object(y.a)(n,[{key:"render",value:function(){return Object(f.jsx)("div",{children:Object(f.jsx)("div",{children:"about"})})}}]),n}(a.a.Component)),U=(n(72),function(e){Object(k.a)(n,e);var t=Object(E.a)(n);function n(){return Object(P.a)(this,n),t.apply(this,arguments)}return Object(y.a)(n,[{key:"render",value:function(){return Object(f.jsx)("div",{children:Object(f.jsx)("div",{children:"help"})})}}]),n}(a.a.Component)),F=function(){var e=Object(s.useContext)(C).userName;return Object(f.jsxs)("div",{children:[Object(f.jsx)("div",{children:"Profile Page"}),Object(f.jsxs)("span",{children:["Welcome ",e]})]})},B=n(35),R=function(e){var t=e.component,n=Object(B.a)(e,["component"]),a=Object(s.useContext)(C).loginStatus;return Object(f.jsx)(m.b,Object(r.a)(Object(r.a)({},n),{},{render:function(e){return a?Object(f.jsx)(t,Object(r.a)({},e)):Object(f.jsx)(m.a,{to:"/login"})}}))},D=function(){var e=Object(s.useContext)(C),t=e.userName,n=e.logout,a=(e.checkDetails,e.authStatus),c=e.loginStatus,o=a===u?"":"hidden",r=a===h?"":"hidden";return Object(f.jsxs)(x.a,{children:[Object(f.jsxs)("header",{className:"header",children:[Object(f.jsx)(x.b,{to:"/",className:"logo",children:Object(f.jsx)("img",{alt:"logo",src:d,id:"logo"})}),Object(f.jsxs)("div",{className:"navArea",children:[Object(f.jsx)(x.b,{to:"/",className:"navButton active hidden",children:"Dashboard"}),Object(f.jsx)(x.b,{to:"/games",className:"navButton",children:"Games"}),Object(f.jsx)(x.b,{to:"/about",className:"navButton",children:"About"}),Object(f.jsx)(x.b,{to:"/help",className:"navButton",children:"Help"})]}),Object(f.jsxs)("div",{className:"userArea",children:[Object(f.jsx)("div",{onClick:function(){console.log(c),console.log(a)},children:"log"}),Object(f.jsx)(x.b,{to:"/login",className:"loginButton topRight ".concat(o),children:"Login"}),Object(f.jsx)(x.b,{to:"/register",className:"registerButton topRight ".concat(o),children:"Register"}),Object(f.jsx)(x.b,{to:"/profile",className:"profileButton topRight ".concat(r),children:t}),Object(f.jsx)(x.b,{to:"/",onClick:n,className:"logoutButton topRight ".concat(r),children:"Log out"})]})]}),Object(f.jsxs)(m.d,{children:[Object(f.jsx)(m.b,{path:"/games",component:A}),Object(f.jsx)(m.b,{path:"/about",children:Object(f.jsx)(L,{})}),Object(f.jsx)(m.b,{path:"/help",children:Object(f.jsx)(U,{})}),Object(f.jsx)(m.b,{path:"/login",children:Object(f.jsx)(v,{})}),Object(f.jsx)(m.b,{path:"/register",children:Object(f.jsx)(S,{})}),Object(f.jsx)(R,{component:F,path:"/profile",exact:!0}),Object(f.jsx)(m.b,{path:"/",children:Object(f.jsx)(I,{})})]})]})},T={position:l.b.TOP_CENTER,timeout:3500,offset:"70px",type:l.d.ERROR,transition:l.c.SCALE};var q=function(){return Object(f.jsx)(l.a,Object(r.a)(Object(r.a)({template:i.a},T),{},{children:Object(f.jsx)(N,{children:Object(f.jsx)(D,{})})}))},J=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,76)).then((function(t){var n=t.getCLS,s=t.getFID,a=t.getFCP,c=t.getLCP,o=t.getTTFB;n(e),s(e),a(e),c(e),o(e)}))};o.a.render(Object(f.jsx)(a.a.StrictMode,{children:Object(f.jsx)(q,{})}),document.getElementById("root")),J()}},[[73,1,2]]]);
//# sourceMappingURL=main.a1699eed.chunk.js.map