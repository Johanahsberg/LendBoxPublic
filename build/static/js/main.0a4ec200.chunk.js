(this["webpackJsonpreact-test"]=this["webpackJsonpreact-test"]||[]).push([[0],{189:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),i=n(49),c=n.n(i),s=n(25),o=(n(80),n(81),n(82),n(2)),l=n(0),d=n(3),b=n(4),j=n(7),m=n(8),u=function(e){return Object(l.jsx)("div",{className:"buttonDiv",children:Object(l.jsxs)("button",{onClick:e.onClick,children:[" ",e.icon," ",e.name]})})},h=n(28),p=n(30),x=n.p+"static/media/logo.27ae6356.svg",O=Object(l.jsx)(h.a,{icon:p.b}),g=Object(l.jsx)(h.a,{icon:p.d}),f=Object(l.jsx)(h.a,{icon:p.a}),v=Object(l.jsx)(h.a,{icon:p.c}),y=function(e){Object(j.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(d.a)(this,n);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={buttons:[{id:1,name:"Home",icon:O},{id:2,name:"Profile",icon:g},{id:3,name:"Games",icon:f},{id:4,name:"About",icon:v}]},e}return Object(b.a)(n,[{key:"handleClick",value:function(e){window.location.href="/LendBoxPublic/#/".concat(e)}},{key:"render",value:function(){var e=this;return Object(l.jsxs)("div",{className:"sideNavDiv",children:[Object(l.jsx)("img",{onClick:function(){return window.location.href="/LendBoxPublic/#/Home"},src:x,alt:"its out brightful logo"}),Object(l.jsx)("hr",{}),Object(l.jsx)("ul",{children:this.state.buttons.map((function(t){return Object(l.jsx)("li",{children:Object(l.jsx)(u,{onClick:function(){return e.handleClick(t.name)},name:t.name,icon:t.icon})},t.id)}))})]})}}]),n}(r.a.Component),w=y,N=n.p+"static/media/LendboxIntro.779b8bb1.mp4",k=(n.p,function(e){return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("div",{className:"contentHome",children:[Object(l.jsx)("h1",{children:"Welcome to LendBox"}),Object(l.jsx)("p",{children:"The free way to try board games"}),Object(l.jsx)("p",{id:"textHome",children:"Sign up now to rent Board Games free of charge for 14 days"}),Object(l.jsx)("button",{onClick:function(){return window.location.href="/LendBoxPublic/#/Register"},id:"signUpHomeBtn",type:"button",className:"btn btn-info btn-lg",children:"Sign up"})]}),Object(l.jsx)("div",{className:"videoDiv",children:Object(l.jsx)("video",{src:N,controls:"controls"})})]})}),C=function(e){return Object(l.jsxs)("div",{className:"contentAbout",children:[Object(l.jsxs)("article",{className:"section",children:[Object(l.jsx)("h1",{children:"About us"}),Object(l.jsx)("p",{children:"LendBox is an organisation that encourages people to try out board games with family and friends fully free of charge."})]}),Object(l.jsxs)("article",{className:"section",children:[Object(l.jsx)("h2",{children:"Rules"}),Object(l.jsx)("p",{children:"Any person can rent a game free of charge for a maximum of 14 days."}),Object(l.jsx)("p",{children:"The rented game must be returned with all the pieces included and in good condition."}),Object(l.jsx)("p",{children:"If a piece is missing or the board game is defective the renter is ressponsible for finding a replacement for the missing item or board"}),Object(l.jsx)("p",{children:"If the renter can not replace the item she/he is liable for compensation of a pristine version of the rented board game."}),Object(l.jsx)("p",{children:"If a board game is overdue, an email will be sent to the renter to remind them of returning the game as soon as possible."})]}),Object(l.jsxs)("article",{className:"section",children:[Object(l.jsx)("h2",{children:"Contact us"}),Object(l.jsx)("a",{href:"mailto:lendboxInfo@gmail.com",children:"Click here to send us an email!"})]})]})},S=(n(89),n(9)),P=n.n(S),B=n(20),I=n(26),A=n(12),L=function(e){var t=e.type,n=e.label,a=e.name,r=e.value,i=e.errors,c=e.onChange;return Object(l.jsxs)("div",{className:"form-group",children:[Object(l.jsx)("label",{htmlFor:a,children:n}),Object(l.jsx)("input",{value:r,id:a,name:a,type:t,className:"form-control",onChange:c}),i&&Object(l.jsx)("div",{className:"alert alert-danger",children:i})]})},G=(n(75),function(e){Object(j.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(d.a)(this,n);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={data:{},errors:{}},e.validate=function(){var t=P.a.validate(e.state.data,e.schema,{abortEarly:!1});if(!t.error)return null;var n,a={},r=Object(A.a)(t.error.details);try{for(r.s();!(n=r.n()).done;){var i=n.value;a[i.path[0]]=i.message}}catch(c){r.e(c)}finally{r.f()}return a},e.validateProperty=function(t){var n=t.name,a=t.value,r=Object(I.a)({},n,a),i=Object(I.a)({},n,e.schema[n]);if("password2"===n&&a!==e.state.data.password)return"The passwords do not match";var c=P.a.validate(r,i).error;return c?c.details[0].message:null},e.handleSubmit=function(t){t.preventDefault();var n=e.validate();e.setState({errors:n||{}}),n||e.doSubmit()},e.handleChange=function(t){var n=t.currentTarget,a=Object(B.a)({},e.state.errors),r=e.validateProperty(n);r?a[n.name]=r:delete a[n.name];var i=Object(B.a)({},e.state.data);i[n.name]=n.value,e.setState({data:i,errors:a})},e}return Object(b.a)(n,[{key:"renderButton",value:function(e){return Object(l.jsx)("button",{disabled:this.validate(),className:"btn btn-primary btn-lg",children:e})}},{key:"renderInput",value:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"text",a=this.state,r=a.data,i=a.errors;return Object(l.jsx)(L,{type:n,label:t,name:e,value:r[e],errors:i[e],onChange:this.handleChange})}}]),n}(r.a.Component)),q=G,T=function(e){Object(j.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(d.a)(this,n);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={data:{email:"",password:""},errors:{}},e.schema={email:P.a.string().email().required().label("Email"),password:P.a.string().required().min(8).label("Password")},e.doSubmit=function(){window.location.href="/LendBoxPublic/#/"},e.handleSignUp=function(){window.location.href="/LendBoxPublic/#/Register"},e}return Object(b.a)(n,[{key:"render",value:function(){return Object(l.jsxs)("div",{className:!0,children:[Object(l.jsx)("h1",{children:"Login"}),Object(l.jsxs)("form",{onSubmit:this.handleSubmit,children:[this.renderInput("email","Email"),this.renderInput("password","Password","password"),this.renderButton("Login")]}),Object(l.jsx)("button",{id:"signUpBtn",className:"btn btn-info btn-lg",onClick:this.handleSignUp,children:"Sign up"})]})}}]),n}(q),D=T,E=function(e){return Object(l.jsx)("div",{className:"contentProfile",children:Object(l.jsx)(D,{})})},H=[{id:1,name:"Catan",picture:n.p+"static/media/catan.a6eb2c3d.jpg",description:"Be the dominant force on the island of Catan by building settlements, cities and roads.",minplayers:3,maxplayers:4,price:399,genres:["Action, ","Strategic"],booked:!1},{id:2,name:"Pandemic",picture:n.p+"static/media/pandemic.14a65bf3.jpg",description:"Your team of experts must prevent the world from succumbing to a viral pandemic.",minplayers:2,maxplayers:4,price:349,genres:["Action","Strategic"],booked:!1},{id:3,name:"Codenames",picture:n.p+"static/media/codenames.c8455262.jpg",description:"Give your team clever one-word clues to help them spot their agents in the field.",minplayers:2,maxplayers:8,price:299,genres:["Action","Strategic"],booked:!1},{id:4,name:"Ticket to Ride",picture:n.p+"static/media/ticket.8ebd3ba0.jpg",description:"Build your railroad across North America to connect cities and complete tickets.",minplayers:2,maxplayers:5,price:499,genres:["Action, ","Strategic"],booked:!1}];var R=function(){return Object(l.jsxs)("div",{className:"contentGames",children:[Object(l.jsx)("h1",{children:"Games"}),Object(l.jsx)("div",{className:"gamesGrid",children:H.map((function(e){return Object(l.jsx)("li",{children:Object(l.jsx)(s.b,{to:"/Games/".concat(e.name),children:Object(l.jsxs)("article",{name:e.name,picture:e.picture,className:"gameCard",children:[Object(l.jsx)("picture",{class:"gameThumbnail",children:Object(l.jsx)("img",{src:e.picture,alt:e.name})}),Object(l.jsxs)("div",{className:"gameCard-content",children:[Object(l.jsx)("p",{className:"gameCategory",children:e.name}),Object(l.jsx)("p",{children:e.description})]})]})})},e.id)}))})]})},F=(n(188),function(e){Object(j.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(d.a)(this,n);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={data:{name:"",ssn:"",email:"",phoneNumber:"",password:"",password2:""},errors:{}},e.schema={_id:P.a.string(),name:P.a.string().regex(/^[a-zA-Z-,]+(\s{0,2}[a-zA-Z-, ])*$/,"alphabetical").required().label("Name"),ssn:P.a.string().required().length(10).regex(/^\d+$/,"numbers").label("Social security number"),email:P.a.string().email().required().label("Email"),phoneNumber:P.a.string().length(10).regex(/^\d+$/,"numbers").required().label("Phone Number"),password:P.a.string().required().min(8).label("Password"),password2:P.a.string().required()},e.doSubmit=function(){window.location.href="/"},e}return Object(b.a)(n,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return Object(l.jsxs)("div",{className:"contentProfile",children:[Object(l.jsx)("h1",{children:"Sign up to LendBox"}),Object(l.jsxs)("form",{onSubmit:this.handleSubmit,children:[this.renderInput("name","Name"),this.renderInput("ssn","Social Security Number"),this.renderInput("email","Email"),this.renderInput("phoneNumber","Phone Number"),this.renderInput("password","Password","password"),this.renderInput("password2","Repeat Your Password","password"),this.renderButton("Sign up")]})]})}}]),n}(q)),U=F,M=function(e){var t=Object(o.g)().name;console.log(t);var n=function(e){return H.find((function(t){return t.name===e}))}(t);return Object(l.jsxs)("div",{className:"contentGame",children:[Object(l.jsxs)("div",{className:"gameInfo",children:[Object(l.jsxs)("article",{className:"about",children:[Object(l.jsx)("h1",{children:n.name}),Object(l.jsx)("p",{children:n.description})]}),Object(l.jsxs)("article",{className:"about",children:[Object(l.jsxs)("p",{children:["Min players: ",n.minplayers," "]}),Object(l.jsxs)("p",{children:["Max players: ",n.maxplayers," "]}),Object(l.jsxs)("p",{children:["Price: ",n.price," SEK "]}),Object(l.jsxs)("p",{children:["Genres: ",n.genres," "]}),Object(l.jsxs)("p",{children:["Is available for booking: ",n.booked?"No":"Yes"," "]})]}),Object(l.jsx)("button",{onClick:function(){return window.location.href="/LendBoxPublic/#/Register"},id:"signUpHomeBtn",type:"button",className:"btn btn-info btn-lg",children:"Book"})]}),Object(l.jsx)("div",{className:"gameImageDiv",children:Object(l.jsx)("picture",{class:"gameImage",children:Object(l.jsx)("img",{src:n.picture,alt:n.name})})})]})};var Y=function(){return Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)(w,{}),Object(l.jsx)("div",{className:"content",children:Object(l.jsxs)(o.c,{children:[Object(l.jsx)(o.a,{path:"/About",element:Object(l.jsx)(C,{})}),Object(l.jsx)(o.a,{path:"/Profile",element:Object(l.jsx)(E,{})}),Object(l.jsx)(o.a,{path:"/Games/:name",element:Object(l.jsx)(M,{})}),Object(l.jsx)(o.a,{path:"/Games",element:Object(l.jsx)(R,{})}),Object(l.jsx)(o.a,{path:"/Register",element:Object(l.jsx)(U,{})}),Object(l.jsx)(o.a,{path:"/Home",element:Object(l.jsx)(k,{})}),Object(l.jsx)(o.a,{exact:!0,path:"/",element:Object(l.jsx)(k,{})})]})})]})},$=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,190)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,i=t.getLCP,c=t.getTTFB;n(e),a(e),r(e),i(e),c(e)}))};c.a.render(Object(l.jsx)(r.a.StrictMode,{children:Object(l.jsx)(s.a,{children:Object(l.jsx)(Y,{})})}),document.getElementById("root")),$()},80:function(e,t,n){},82:function(e,t,n){}},[[189,1,2]]]);
//# sourceMappingURL=main.0a4ec200.chunk.js.map