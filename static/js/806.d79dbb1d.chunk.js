"use strict";(self.webpackChunkcontacts=self.webpackChunkcontacts||[]).push([[806],{1806:function(n,t,e){e.r(t),e.d(t,{default:function(){return E}});var r,i,a,o,s,l,d,c,x=e(168),u=e(9958),m=u.Z.div(r||(r=(0,x.Z)(["\n  font-size: 28px;\n  font-weight: 600;\n  color: rgb(65, 65, 65);\n  display: flex;\n  justify-content: center;\n  margin-top: 20px;\n  margin-bottom: 20px;\n  margin-left: auto;\n  margin-right: auto;\n"]))),p=e(184),h=function(n){var t=n.text;return(0,p.jsx)(m,{children:t})},f=u.Z.section(i||(i=(0,x.Z)(["\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  justify-content: center;\n  align-items: center;\n"]))),g=e(885),b=e(2791),j=function(){for(var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:21,t="",e=crypto.getRandomValues(new Uint8Array(n));n--;){var r=63&e[n];t+=r<36?r.toString(36):r<62?(r-26).toString(36).toUpperCase():r<63?"_":"-"}return t},w=u.Z.form(a||(a=(0,x.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  /* margin-bottom: 20px; */\n  max-width: 600px;\n"]))),Z=e(1889),v=e(5125),y=e(6151),C=e(9370),k=e(8926),A=function(){var n=(0,b.useState)(""),t=(0,g.Z)(n,2),e=t[0],r=t[1],i=(0,b.useState)(""),a=(0,g.Z)(i,2),o=a[0],s=a[1],l=(0,C.Tn)(),d=(0,g.Z)(l,2),c=d[0],x=d[1].isError,u=j(),m=j(),h=function(n){var t=n.currentTarget,e=t.name,i=t.value;"name"===e?r(i):"number"===e&&s(i)},f=function(){r(""),s(""),localStorage.removeItem("write")};return(0,p.jsxs)(w,{action:"",onSubmit:function(n){n.preventDefault(),c({name:e,number:o}),f()},children:[x&&void k.Am.error("Error add"),(0,p.jsxs)(Z.ZP,{container:!0,spacing:2,children:[(0,p.jsx)(Z.ZP,{item:!0,xs:12,children:(0,p.jsx)(v.Z,{label:"Name",id:u,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,fullWidth:!0,onChange:h,value:e})}),(0,p.jsx)(Z.ZP,{item:!0,xs:12,children:(0,p.jsx)(v.Z,{fullWidth:!0,label:"Telephon",id:m,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,value:o,onChange:h})})]}),(0,p.jsx)(y.Z,{variant:"contained",fullWidth:!0,sx:{mt:3,mb:2},type:"submit",children:"Save"})]})},L=u.Z.ul(o||(o=(0,x.Z)(["\n  list-style: none;\n  color: rgb(0, 3, 36);\n  font-weight: 500;\n  padding-left: 10px;\n  padding-right: 10px;\n  margin-top: 35px;\n  margin-left: auto;\n  margin-right: auto;\n  @media (min-width: 1200px) {\n    width: 540px;\n  }\n  @media (max-width: 1199px) {\n    width: 460px;\n  }\n  @media (max-width: 767px) {\n    width: 320px;\n  }\n"]))),S=u.Z.ul(s||(s=(0,x.Z)(["\n  max-width: 600px;\n  @media (min-width: 1200px) {\n    width: 600px;\n  }\n  @media (max-width: 1199px) {\n    width: 540px;\n  }\n  @media (max-width: 767px) {\n    width: 320px;\n  }\n"]))),z=e(5048),P=e(6364),T=function(){var n=(0,z.v9)((function(n){return n.filter})),t=(0,z.I0)();return(0,p.jsx)(v.Z,{label:"Find contact",type:"text",name:"filter",value:n,onChange:function(n){t((0,P.o)(n.currentTarget.value.trim().toLowerCase()))},fullWidth:!0})},W=u.Z.button(l||(l=(0,x.Z)(["\n  color: brown;\n  background-color: transparent;\n  height: 15px;\n  display: flex;\n  align-items: center;\n  padding: 10px;\n  border-radius: 5px;\n  border-color: #d68686;\n  :hover {\n    background-color: #a70303;\n    color: #ffffff;\n  }\n"]))),D=u.Z.li(d||(d=(0,x.Z)(["\n  margin-bottom: 8px;\n  color: rgb(82, 82, 82);\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  min-height: 25px;\n  border-bottom: 1px solid rgb(175, 168, 106);\n"]))),F=u.Z.div(c||(c=(0,x.Z)(["\n  margin: 10px;\n  color: rgb(116, 41, 41);\n  font-weight: 500;\n  font-size: 16px;\n  text-align: center;\n"]))),I=function(n){var t=n.text;return(0,p.jsx)(F,{children:t})},N=function(n){var t=n.elem,e=(0,C.T9)(),r=(0,g.Z)(e,2),i=r[0],a=r[1].isLoading;return(0,p.jsx)(p.Fragment,{children:a?(0,p.jsx)(I,{text:"Wite we deleting"}):(0,p.jsxs)(D,{children:[t.name," : ",t.number,(0,p.jsx)(W,{onClick:function(){i(t.id)},children:(0,p.jsx)("div",{children:"Delete"})})]})})},q=function(n){var t=n.contacts,e=(0,z.v9)((function(n){return n.filter})),r=t.filter((function(n){return n.name.slice(0,e.length).toLowerCase()===e.toLowerCase()}));return(0,p.jsxs)(S,{children:[(0,p.jsx)(T,{}),t.length>0?(0,p.jsx)(L,{children:r.map((function(n){return(0,p.jsx)(N,{elem:n},n._id)}))}):(0,p.jsx)(I,{text:"List empty now"})]})};var E=function(){var n=(0,C.bC)(),t=n.data,e=n.isLoading;return(0,p.jsxs)(f,{children:[(0,p.jsx)(h,{text:"Phonebook"}),(0,p.jsx)(A,{}),(0,p.jsx)(h,{text:"Contacts:"}),e?(0,p.jsx)(I,{text:"LOADING"}):(0,p.jsx)(q,{contacts:t})]})}}}]);
//# sourceMappingURL=806.d79dbb1d.chunk.js.map