(this["webpackJsonpreact-test"]=this["webpackJsonpreact-test"]||[]).push([[0],{191:function(e,t,n){"use strict";n.r(t);var a=n(2),r=n.n(a),i=n(48),c=n.n(i),s=n(194),o=(n(81),n(82),n(83),n(195)),l=n(0),d=n(3),u=n(4),h=n(6),m=n(7),b=function(e){return Object(l.jsx)("div",{className:"buttonDiv",children:Object(l.jsxs)("button",{onClick:e.onClick,children:[" ",e.icon," ",e.name]})})},j=n(193),p=n(26),f=n(28),O=n.p+"static/media/logo.27ae6356.svg",g=Object(l.jsx)(p.a,{icon:f.b}),v=Object(l.jsx)(p.a,{icon:f.d}),x=Object(l.jsx)(p.a,{icon:f.a}),w=Object(l.jsx)(p.a,{icon:f.c}),y=function(e){Object(h.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(d.a)(this,n);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={buttons:[{id:1,name:"Home",icon:g},{id:2,name:"Profile",icon:v},{id:3,name:"Games",icon:x},{id:4,name:"About",icon:w}]},e}return Object(u.a)(n,[{key:"handleClick",value:function(e){window.location.href="/".concat(e)}},{key:"render",value:function(){var e=this;return Object(l.jsxs)("div",{className:"sideNavDiv",children:[Object(l.jsx)("img",{src:O,alt:"its out brightful logo"}),Object(l.jsx)("hr",{}),Object(l.jsx)("ul",{children:this.state.buttons.map((function(t){return Object(l.jsx)("li",{children:Object(l.jsx)(j.a,{to:"/LendBoxPublic/#/{ button.name }",children:Object(l.jsx)(b,{onClick:function(){return e.handleClick(t.name)},name:t.name,icon:t.icon})})},t.id)}))})]})}}]),n}(r.a.Component),C=y,N=n.p+"static/media/LendboxIntro.779b8bb1.mp4",k=(n.p,function(e){return Object(l.jsxs)("div",{className:"contentHome",children:[Object(l.jsx)("h1",{children:"Welcome to LendBox"}),Object(l.jsx)("p",{children:"The free way to try board games"}),Object(l.jsx)("video",{src:N,controls:"controls"})]})}),S=function(e){return Object(l.jsxs)("div",{className:"contentAbout",children:[Object(l.jsx)("h1",{children:"About us"}),Object(l.jsx)("p",{children:"LendBox is an organisation that encourages people to try out board games with family and friends fully free of charge."}),Object(l.jsx)("h2",{children:"Our rules"}),Object(l.jsx)("p",{children:"Any person can rent a game free of charge for a maximum of 14 days."}),Object(l.jsx)("p",{children:"The rented game must be returned with all the pieces included and in good condition."}),Object(l.jsx)("p",{children:"If a piece is missing or the board game is defective the renter is ressponsible for finding a replacement for the missing item or board"}),Object(l.jsx)("p",{children:"If the renter can not replace the item she/he is liable for compensation of a pristine version of the rented board game."}),Object(l.jsx)("p",{children:"If a board game is overdue, an email will be sent to the renter to remind them of returning the game as soon as possible."}),Object(l.jsx)("h2",{children:"Contact us"}),Object(l.jsx)("a",{href:"mailto:lendboxInfo@gmail.com",children:"Click here to send us an email!"})]})},P=(n(90),n(8)),I=n.n(P),A=n(19),B=n(24),L=n(11),q=function(e){var t=e.type,n=e.label,a=e.name,r=e.value,i=e.errors,c=e.onChange;return Object(l.jsxs)("div",{className:"form-group",children:[Object(l.jsx)("label",{htmlFor:a,children:n}),Object(l.jsx)("input",{value:r,id:a,name:a,type:t,className:"form-control",onChange:c}),i&&Object(l.jsx)("div",{className:"alert alert-danger",children:i})]})},T=(n(76),function(e){Object(h.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(d.a)(this,n);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={data:{},errors:{}},e.validate=function(){var t=I.a.validate(e.state.data,e.schema,{abortEarly:!1});if(!t.error)return null;var n,a={},r=Object(L.a)(t.error.details);try{for(r.s();!(n=r.n()).done;){var i=n.value;a[i.path[0]]=i.message}}catch(c){r.e(c)}finally{r.f()}return a},e.validateProperty=function(t){var n=t.name,a=t.value,r=Object(B.a)({},n,a),i=Object(B.a)({},n,e.schema[n]);if("password2"===n&&a!==e.state.data.password)return"The passwords do not match";var c=I.a.validate(r,i).error;return c?c.details[0].message:null},e.handleSubmit=function(t){t.preventDefault();var n=e.validate();e.setState({errors:n||{}}),n||e.doSubmit()},e.handleChange=function(t){var n=t.currentTarget,a=Object(A.a)({},e.state.errors),r=e.validateProperty(n);r?a[n.name]=r:delete a[n.name];var i=Object(A.a)({},e.state.data);i[n.name]=n.value,e.setState({data:i,errors:a})},e}return Object(u.a)(n,[{key:"renderButton",value:function(e){return Object(l.jsx)("button",{disabled:this.validate(),className:"btn btn-primary btn-lg",children:e})}},{key:"renderInput",value:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"text",a=this.state,r=a.data,i=a.errors;return Object(l.jsx)(q,{type:n,label:t,name:e,value:r[e],errors:i[e],onChange:this.handleChange})}}]),n}(r.a.Component)),E=T,D=function(e){Object(h.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(d.a)(this,n);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={data:{email:"",password:""},errors:{}},e.schema={email:I.a.string().email().required().label("Email"),password:I.a.string().required().min(8).label("Password")},e.doSubmit=function(){window.location.href="/"},e.handleSignUp=function(){window.location.href="/Register"},e}return Object(u.a)(n,[{key:"render",value:function(){return Object(l.jsxs)("div",{className:!0,children:[Object(l.jsx)("h1",{children:"Login"}),Object(l.jsxs)("form",{onSubmit:this.handleSubmit,children:[this.renderInput("email","Email"),this.renderInput("password","Password","password"),this.renderButton("Login")]}),Object(l.jsx)("button",{id:"signUpBtn",className:"btn btn-info btn-lg",onClick:this.handleSignUp,children:"Sign up"})]})}}]),n}(E),F=D,G=function(e){return Object(l.jsx)("div",{className:"contentProfile",children:Object(l.jsx)(F,{})})},H=n.p+"static/media/catan.a6eb2c3d.jpg",R=n.p+"static/media/pandemic.14a65bf3.jpg",U=n.p+"static/media/codenames.c8455262.jpg",$=function(e){Object(h.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(d.a)(this,n);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={games:[{id:1,name:"Catan",picture:H,description:"Be the dominant force on the island of Catan by building settlements, cities, and roads."},{id:2,name:"Pandemic",picture:R,description:"Your team of experts must prevent the world from succumbing to a viral pandemic."},{id:3,name:"Codename",picture:U,description:"Give your team clever one-word clues to help them spot their agents in the field."}]},e}return Object(u.a)(n,[{key:"handleClick",value:function(e){window.location.href="/".concat(e)}},{key:"render",value:function(){var e=this;return Object(l.jsx)("div",{className:"contentGames",children:this.state.games.map((function(t){return Object(l.jsx)("li",{children:Object(l.jsxs)("article",{onClick:function(){return e.handleClick(t.name)},name:t.name,picture:t.picture,className:"gameCard",children:[Object(l.jsx)("picture",{class:"gameThumbnail",children:Object(l.jsx)("img",{src:t.picture,alt:t.name})}),Object(l.jsxs)("div",{className:"gameCard-content",children:[Object(l.jsx)("p",{className:"gameCategory",children:t.name}),Object(l.jsx)("p",{children:t.description})]})]})},t.id)}))})}}]),n}(r.a.Component),z=$,J=(n(190),function(e){Object(h.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(d.a)(this,n);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={data:{name:"",ssn:"",email:"",phoneNumber:"",password:"",password2:""},errors:{}},e.schema={_id:I.a.string(),name:I.a.string().regex(/^[a-zA-Z-,]+(\s{0,2}[a-zA-Z-, ])*$/,"alphabetical").required().label("Name"),ssn:I.a.string().required().length(10).regex(/^\d+$/,"numbers").label("Social security number"),email:I.a.string().email().required().label("Email"),phoneNumber:I.a.string().length(10).regex(/^\d+$/,"numbers").required().label("Phone Number"),password:I.a.string().required().min(8).label("Password"),password2:I.a.string().required()},e.doSubmit=function(){window.location.href="/"},e}return Object(u.a)(n,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return Object(l.jsxs)("div",{className:"contentProfile",children:[Object(l.jsx)("h1",{children:"Sign up to LendBox"}),Object(l.jsxs)("form",{onSubmit:this.handleSubmit,children:[this.renderInput("name","Name"),this.renderInput("ssn","Social Security Number"),this.renderInput("email","Email"),this.renderInput("phoneNumber","Phone Number"),this.renderInput("password","Password","password"),this.renderInput("password2","Repeat Your Password","password"),this.renderButton("Sign up")]})]})}}]),n}(E)),M=J;var Y=function(){return Object(l.jsx)("div",{className:"App",children:Object(l.jsxs)(s.a,{basename:"/",children:[Object(l.jsx)(C,{}),Object(l.jsxs)("div",{className:"content",children:[Object(l.jsx)("hr",{}),Object(l.jsx)(o.a,{path:"/About",component:S}),Object(l.jsx)(o.a,{path:"/Profile",component:G}),Object(l.jsx)(o.a,{path:"/Games",component:z}),Object(l.jsx)(o.a,{path:"/Register",component:M}),Object(l.jsx)(o.a,{exact:!0,path:"/Home",component:k})]})]})})},Z=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,196)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,i=t.getLCP,c=t.getTTFB;n(e),a(e),r(e),i(e),c(e)}))};c.a.render(Object(l.jsx)(r.a.StrictMode,{children:Object(l.jsx)(s.a,{children:Object(l.jsx)(Y,{})})}),document.getElementById("root")),Z()},81:function(e,t,n){},83:function(e,t,n){}},[[191,1,2]]]);
//# sourceMappingURL=main.eca668a4.chunk.js.map