(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{1067:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),l=t(10),i=t.n(l),o=(t(18),t(2)),m=t(3),r=t(5),s=t(4),u=t(6),h=t(1),b=(t(8),function(e){function a(){return Object(o.a)(this,a),Object(r.a)(this,Object(s.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){return c.a.createElement("div",{className:"ContactCard"},c.a.createElement("img",{src:this.props.pic,alt:"contact avatar pic"}),c.a.createElement("h3",{className:"ContactCard_name"},this.props.contact.name||"no name"),c.a.createElement("p",{className:"ContactCard_email"},this.props.contact.email||"no email"),c.a.createElement("button",{className:"deleteContact contact-btn",onClick:this.props.onDelete},"Delete"))}}]),a}(n.Component)),d=function(e){function a(e){var t;return Object(o.a)(this,a),(t=Object(r.a)(this,Object(s.a)(a).call(this,e))).state={image:"grant.png",name:"",email:""},t.handleChangeName=t.handleChangeName.bind(Object(h.a)(Object(h.a)(t))),t.handleChangeImage=t.handleChangeImage.bind(Object(h.a)(Object(h.a)(t))),t.handleChangeEmail=t.handleChangeEmail.bind(Object(h.a)(Object(h.a)(t))),t.handleFormSubmit=t.handleFormSubmit.bind(Object(h.a)(Object(h.a)(t))),t}return Object(u.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){return c.a.createElement("form",{className:"ContactForm",onSubmit:this.handleFormSubmit},c.a.createElement("h2",null,"Add A Contact"),c.a.createElement("p",{className:"name-label"},c.a.createElement("label",null,"Name"),c.a.createElement("input",{value:this.state.name,onChange:this.handleChangeName,"aria-label":"name"})),c.a.createElement("p",{className:"email-label"},c.a.createElement("label",null,"Email"),c.a.createElement("input",{type:"email",value:this.state.email,onChange:this.handleChangeEmail,"aria-label":"email"})),c.a.createElement("p",{className:"ContactForm__button-bar button-bar"},c.a.createElement("button",{className:"addContact contact-btn",type:"submit"},"Add")))}},{key:"handleChangeName",value:function(e){this.setState({name:e.target.value})}},{key:"handleChangeImage",value:function(e){this.setState({image:e.target.value})}},{key:"handleChangeEmail",value:function(e){this.setState({email:e.target.value})}},{key:"handleFormSubmit",value:function(e){e.preventDefault();var a={name:this.state.name,email:this.state.email,image:this.state.image};this.setState({name:"",email:""}),this.props.onFormSubmit(a)}}]),a}(n.Component),p=t(11),C=t.n(p),g=function(e){function a(e){var t;return Object(o.a)(this,a),(t=Object(r.a)(this,Object(s.a)(a).call(this,e))).state={contacts:[{name:"Val",email:"val@email.com"},{name:"Robin",email:"robin@email.com"},{name:"Tracy",email:"tracy@email.com"}]},t.deleteContact=t.deleteContact.bind(Object(h.a)(Object(h.a)(t))),t.addContact=t.addContact.bind(Object(h.a)(Object(h.a)(t))),t}return Object(u.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){var e=this,a=this.state.contacts.map(function(a,t){return c.a.createElement(b,{key:t,contact:a,onDelete:function(){e.deleteContact(t)},pic:C.a.image.avatar()})});return c.a.createElement("div",{className:"App"},c.a.createElement("h1",{className:"heading"},"Contacts"),c.a.createElement(d,{onFormSubmit:this.addContact}),c.a.createElement("div",{className:"cc-container"},c.a.createElement("h2",null,"All Contacts:"),a))}},{key:"addContact",value:function(e){this.setState(function(a){var t=a.contacts.slice(0);return t.push(e),{contacts:t}})}},{key:"deleteContact",value:function(e){this.setState(function(a){var t=a.contacts.slice(0);return t.splice(e,1),{contacts:t}})}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(c.a.createElement(g,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},12:function(e,a,t){e.exports=t(1067)},18:function(e,a,t){},8:function(e,a,t){}},[[12,2,1]]]);
//# sourceMappingURL=main.1f1aba9b.chunk.js.map