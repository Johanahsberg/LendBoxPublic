(this["webpackJsonpreact-test"]=this["webpackJsonpreact-test"]||[]).push([[0],{191:function(e,t,n){"use strict";n.r(t);var a=n(2),r=n.n(a),i=n(48),c=n.n(i),s=n(193),o=(n(81),n(82),n(83),n(194)),l=n(195),d=n(0),u=n(3),b=n(4),h=n(6),m=n(7),j=function(e){return Object(d.jsx)("div",{className:"buttonDiv",children:Object(d.jsxs)("button",{onClick:e.onClick,children:[" ",e.icon," ",e.name]})})},p=n(26),f=n(28),O=n.p+"static/media/logo.27ae6356.svg",g=Object(d.jsx)(p.a,{icon:f.b}),x=Object(d.jsx)(p.a,{icon:f.d}),v=Object(d.jsx)(p.a,{icon:f.a}),w=Object(d.jsx)(p.a,{icon:f.c}),y=function(e){Object(h.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={buttons:[{id:1,name:"Home",icon:g},{id:2,name:"Profile",icon:x},{id:3,name:"Games",icon:v},{id:4,name:"About",icon:w}]},e}return Object(b.a)(n,[{key:"handleClick",value:function(e){window.location.href="/LendBoxPublic/#/".concat(e)}},{key:"render",value:function(){var e=this;return Object(d.jsxs)("div",{className:"sideNavDiv",children:[Object(d.jsx)("img",{src:O,alt:"its out brightful logo"}),Object(d.jsx)("hr",{}),Object(d.jsx)("ul",{children:this.state.buttons.map((function(t){return Object(d.jsx)("li",{children:Object(d.jsx)(j,{onClick:function(){return e.handleClick(t.name)},name:t.name,icon:t.icon})},t.id)}))})]})}}]),n}(r.a.Component),C=y,N=n.p+"static/media/LendboxIntro.779b8bb1.mp4",P=(n.p,function(e){return Object(d.jsxs)("div",{className:"contentHome",children:[Object(d.jsx)("h1",{children:"Welcome to LendBox"}),Object(d.jsx)("p",{children:"The free way to try board games"}),Object(d.jsx)("video",{src:N,controls:"controls"})]})}),k=function(e){return Object(d.jsxs)("div",{className:"contentAbout",children:[Object(d.jsx)("h1",{children:"About us"}),Object(d.jsx)("p",{children:"LendBox is an organisation that encourages people to try out board games with family and friends fully free of charge."}),Object(d.jsx)("h2",{children:"Our rules"}),Object(d.jsx)("p",{children:"Any person can rent a game free of charge for a maximum of 14 days."}),Object(d.jsx)("p",{children:"The rented game must be returned with all the pieces included and in good condition."}),Object(d.jsx)("p",{children:"If a piece is missing or the board game is defective the renter is ressponsible for finding a replacement for the missing item or board"}),Object(d.jsx)("p",{children:"If the renter can not replace the item she/he is liable for compensation of a pristine version of the rented board game."}),Object(d.jsx)("p",{children:"If a board game is overdue, an email will be sent to the renter to remind them of returning the game as soon as possible."}),Object(d.jsx)("h2",{children:"Contact us"}),Object(d.jsx)("a",{href:"mailto:lendboxInfo@gmail.com",children:"Click here to send us an email!"})]})},S=(n(90),n(8)),B=n.n(S),I=n(19),L=n(24),A=n(11),q=function(e){var t=e.type,n=e.label,a=e.name,r=e.value,i=e.errors,c=e.onChange;return Object(d.jsxs)("div",{className:"form-group",children:[Object(d.jsx)("label",{htmlFor:a,children:n}),Object(d.jsx)("input",{value:r,id:a,name:a,type:t,className:"form-control",onChange:c}),i&&Object(d.jsx)("div",{className:"alert alert-danger",children:i})]})},T=(n(75),function(e){Object(h.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={data:{},errors:{}},e.validate=function(){var t=B.a.validate(e.state.data,e.schema,{abortEarly:!1});if(!t.error)return null;var n,a={},r=Object(A.a)(t.error.details);try{for(r.s();!(n=r.n()).done;){var i=n.value;a[i.path[0]]=i.message}}catch(c){r.e(c)}finally{r.f()}return a},e.validateProperty=function(t){var n=t.name,a=t.value,r=Object(L.a)({},n,a),i=Object(L.a)({},n,e.schema[n]);if("password2"===n&&a!==e.state.data.password)return"The passwords do not match";var c=B.a.validate(r,i).error;return c?c.details[0].message:null},e.handleSubmit=function(t){t.preventDefault();var n=e.validate();e.setState({errors:n||{}}),n||e.doSubmit()},e.handleChange=function(t){var n=t.currentTarget,a=Object(I.a)({},e.state.errors),r=e.validateProperty(n);r?a[n.name]=r:delete a[n.name];var i=Object(I.a)({},e.state.data);i[n.name]=n.value,e.setState({data:i,errors:a})},e}return Object(b.a)(n,[{key:"renderButton",value:function(e){return Object(d.jsx)("button",{disabled:this.validate(),className:"btn btn-primary btn-lg",children:e})}},{key:"renderInput",value:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"text",a=this.state,r=a.data,i=a.errors;return Object(d.jsx)(q,{type:n,label:t,name:e,value:r[e],errors:i[e],onChange:this.handleChange})}}]),n}(r.a.Component)),E=T,D=function(e){Object(h.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={data:{email:"",password:""},errors:{}},e.schema={email:B.a.string().email().required().label("Email"),password:B.a.string().required().min(8).label("Password")},e.doSubmit=function(){window.location.href="/LendBoxPublic/#/"},e.handleSignUp=function(){window.location.href="/LendBoxPublic/#/Register"},e}return Object(b.a)(n,[{key:"render",value:function(){return Object(d.jsxs)("div",{className:!0,children:[Object(d.jsx)("h1",{children:"Login"}),Object(d.jsxs)("form",{onSubmit:this.handleSubmit,children:[this.renderInput("email","Email"),this.renderInput("password","Password","password"),this.renderButton("Login")]}),Object(d.jsx)("button",{id:"signUpBtn",className:"btn btn-info btn-lg",onClick:this.handleSignUp,children:"Sign up"})]})}}]),n}(E),F=D,G=function(e){return Object(d.jsx)("div",{className:"contentProfile",children:Object(d.jsx)(F,{})})},H=n.p+"static/media/catan.a6eb2c3d.jpg",R=n.p+"static/media/pandemic.14a65bf3.jpg",U=n.p+"static/media/codenames.c8455262.jpg",$=function(e){Object(h.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={games:[{id:1,name:"Catan",picture:H,description:"Be the dominant force on the island of Catan by building settlements, cities, and roads."},{id:2,name:"Pandemic",picture:R,description:"Your team of experts must prevent the world from succumbing to a viral pandemic."},{id:3,name:"Codename",picture:U,description:"Give your team clever one-word clues to help them spot their agents in the field."}]},e}return Object(b.a)(n,[{key:"handleClick",value:function(e){window.location.href="/".concat(e)}},{key:"render",value:function(){var e=this;return Object(d.jsx)("div",{className:"contentGames",children:this.state.games.map((function(t){return Object(d.jsx)("li",{children:Object(d.jsxs)("article",{onClick:function(){return e.handleClick(t.name)},name:t.name,picture:t.picture,className:"gameCard",children:[Object(d.jsx)("picture",{class:"gameThumbnail",children:Object(d.jsx)("img",{src:t.picture,alt:t.name})}),Object(d.jsxs)("div",{className:"gameCard-content",children:[Object(d.jsx)("p",{className:"gameCategory",children:t.name}),Object(d.jsx)("p",{children:t.description})]})]})},t.id)}))})}}]),n}(r.a.Component),z=$,J=(n(190),function(e){Object(h.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={data:{name:"",ssn:"",email:"",phoneNumber:"",password:"",password2:""},errors:{}},e.schema={_id:B.a.string(),name:B.a.string().regex(/^[a-zA-Z-,]+(\s{0,2}[a-zA-Z-, ])*$/,"alphabetical").required().label("Name"),ssn:B.a.string().required().length(10).regex(/^\d+$/,"numbers").label("Social security number"),email:B.a.string().email().required().label("Email"),phoneNumber:B.a.string().length(10).regex(/^\d+$/,"numbers").required().label("Phone Number"),password:B.a.string().required().min(8).label("Password"),password2:B.a.string().required()},e.doSubmit=function(){window.location.href="/"},e}return Object(b.a)(n,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return Object(d.jsxs)("div",{className:"contentProfile",children:[Object(d.jsx)("h1",{children:"Sign up to LendBox"}),Object(d.jsxs)("form",{onSubmit:this.handleSubmit,children:[this.renderInput("name","Name"),this.renderInput("ssn","Social Security Number"),this.renderInput("email","Email"),this.renderInput("phoneNumber","Phone Number"),this.renderInput("password","Password","password"),this.renderInput("password2","Repeat Your Password","password"),this.renderButton("Sign up")]})]})}}]),n}(E)),M=J;var Y=function(){return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)(C,{}),Object(d.jsx)("div",{className:"content",children:Object(d.jsxs)(o.a,{children:[Object(d.jsx)(l.a,{path:"/LendBoxPublic/#/About",component:k}),Object(d.jsx)(l.a,{path:"/LendBoxPublic/#/Profile",component:G}),Object(d.jsx)(l.a,{path:"/LendBoxPublic/#/Games",component:z}),Object(d.jsx)(l.a,{path:"/LendBoxPublic/#/Register",component:M}),Object(d.jsx)(l.a,{path:"/LendBoxPublic/#/Home",component:P})]})})]})},Z=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,196)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,i=t.getLCP,c=t.getTTFB;n(e),a(e),r(e),i(e),c(e)}))};c.a.render(Object(d.jsx)(r.a.StrictMode,{children:Object(d.jsx)(s.a,{children:Object(d.jsx)(Y,{})})}),document.getElementById("root")),Z()},81:function(e,t,n){},83:function(e,t,n){}},[[191,1,2]]]);
//# sourceMappingURL=main.bdb3e415.chunk.js.map