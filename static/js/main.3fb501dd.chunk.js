(this.webpackJsonpcole_haan=this.webpackJsonpcole_haan||[]).push([[0],{11:function(e,t,a){},12:function(e,t,a){},13:function(e,t,a){"use strict";a.r(t);var c=a(0),i=a(1),s=a.n(i),n=a(5),r=a.n(n),l=a(3),o=a(2);a(11);var d=function(e){var t=e.children,a=e.visible,i=e.onClose,s=e.title;return a?Object(c.jsxs)("div",{className:"modal",children:[Object(c.jsx)("div",{className:"modal-overlay"}),Object(c.jsx)("div",{className:"modal-content",onClick:i,children:Object(c.jsxs)("div",{className:"modal-dialog",onClick:function(e){return e.stopPropagation()},children:[Object(c.jsxs)("div",{className:"header",children:[Object(c.jsx)("i",{className:"fas fa-times",onClick:i}),Object(c.jsx)("h2",{children:s})]}),t]})})]}):null},u=(a(12),["Our Website","Our Product","Our Retail Locations","Customer Service","Cole Haan, Generally"]),j={"Our Website":{items:[{desc:"What was your goal for todays visit to ColeHaan.com?",type:"dropDown",key:"website_goal",options:["Browser New Arrivals","Find a specific style","Compare Product","Browser sales items"]},{desc:"How easy was it to accomplish that goal?",type:"radio",group:"difficult",key:"website_usability",options:["Very Difficult","Difficult","Not Difficult nor Easy","Easy","Very Easy"]},{desc:"Please share you feedback.",type:"textArea",key:"feedback"}]},"Our Product":{items:[{desc:"What category would you like to leave feedback about",type:"dropDown",key:"product_goal",options:["Browser New Arrivals","Find a specific style","Compare Product","Browser sales items"]},{desc:"Tell use what you think.",type:"textArea",key:"feedback"}]},"Our Retail Locations":{items:[{desc:"Which store location would you like to leave feedback about?",type:"textArea",key:"store_location"},{desc:"Tell us what you think.",type:"textArea",key:"feedback"}]},"Customer Service":{items:[{desc:"How did you contact customer service?",type:"dropDown",key:"service_goal",options:["Phone","Email","Chat","Social Media","Other"]},{desc:"Tell us what you think.",type:"textArea",key:"feedback"},{desc:"How would you rate the service?",type:"radio",group:"rate",key:"service_rate",options:["1 - Not Satisfied","2 - Somewhat Satisfied","3 - Satisfied","4 - Very Satisfied"]}]},"Cole Haan, Generally":{items:[{desc:"Tell us what you think",type:"textArea",key:"feedback"}]}};function b(e,t,a){return"dropDown"===e.type?function(e,t,a){var i=e.desc,s=e.key,n=e.options;return Object(c.jsxs)("div",{className:"feedback-item",children:[Object(c.jsx)("div",{className:"label",children:i}),Object(c.jsxs)("select",{onChange:t,"data-key":s,value:a[s]?a[s]:"",children:[Object(c.jsx)("option",{children:"Choose.."}),n&&n.map((function(e,t){return Object(c.jsx)("option",{value:e,children:e},t)}))]})]})}(e,t,a):"radio"===e.type?function(e,t,a){var i=e.desc,s=e.key,n=e.options,r=e.group;return Object(c.jsxs)("div",{className:"feedback-item",children:[Object(c.jsx)("div",{className:"label",children:i}),Object(c.jsx)("div",{className:"radio-option-container",onChange:t,"data-key":s,children:n.map((function(e,t){return Object(c.jsxs)("div",{className:"option-item",children:[Object(c.jsx)("input",{value:e,type:"radio",name:r,checked:a[s]&&a[s]===e},t),Object(c.jsx)("label",{htmlFor:"rate",children:e})]},t)}))})]})}(e,t,a):function(e,t,a){var i=e.desc,s=e.key;return Object(c.jsxs)("div",{className:"feedback-item",children:[Object(c.jsx)("div",{className:"label",children:i}),Object(c.jsx)("textarea",{maxLength:1e3,onChange:t,"data-key":s,rows:5,value:a[s]?a[s]:""}),Object(c.jsx)("div",{className:"textarea-counter",children:"".concat(a[s]?1e3-a[s].length:1e3," characters left")})]})}(e,t,a)}var h=function(){var e=Object(i.useState)(!1),t=Object(o.a)(e,2),a=t[0],s=t[1],n=Object(i.useState)(1),r=Object(o.a)(n,2),h=r[0],m=r[1],O=Object(i.useState)("Our Website"),v=Object(o.a)(O,2),y=v[0],f=v[1],x=Object(i.useState)(0),p=Object(o.a)(x,2),k=p[0],g=p[1],N=Object(i.useState)({rate:null}),C=Object(o.a)(N,2),w=C[0],S=C[1],A=function(){m(1),f("Our Website"),g(0),S({rate:null})},P=function(e){var t=e.currentTarget.getAttribute("data-key");"category"===t&&f(e.target.value);var a=Object(l.a)({},w);a[t]=e.target.value,S(a)};return Object(c.jsxs)("div",{className:"App",children:[Object(c.jsx)("div",{className:"feedback-tab",onClick:function(){return s(!0)},children:"Feedback"}),Object(c.jsxs)(d,{title:"COLE HAAN",visible:a,onClose:function(){A(),s(!1)},children:[Object(c.jsxs)("div",{className:"required-label",children:[Object(c.jsx)("b",{children:"*"}),"Required fields"]}),1===h&&Object(c.jsxs)("div",{className:"content",children:[Object(c.jsxs)("div",{className:"feedback-item",children:[Object(c.jsxs)("div",{className:"label",children:["How likely are you to recommend Cole Haan to a friend or colleague? ",Object(c.jsx)("b",{children:"*"})]}),Object(c.jsx)("div",{className:"feedback-rate-container",children:[1,2,3,4,5,6,7,8,9,10].map((function(e,t){return Object(c.jsx)("div",{className:"rate-buttom ".concat(w.rate&&w.rate===e?"active":""),onClick:function(){return S(Object(l.a)(Object(l.a)({},w),{},{rate:e}))},children:Object(c.jsx)("span",{children:e})},t)}))}),Object(c.jsxs)("div",{className:"rating-label",children:[Object(c.jsx)("div",{children:"Not at all likely"}),Object(c.jsx)("div",{children:"Extremely likely"})]})]}),Object(c.jsxs)("div",{className:"feedback-item",children:[Object(c.jsx)("div",{className:"label",children:"Please choose a category you would like to leave feedback about."}),Object(c.jsxs)("select",{onChange:P,"data-key":"category",className:"category-select",value:w.category?w.category:"",children:[Object(c.jsx)("option",{value:1,children:"Choose.."}),u.map((function(e,t){return Object(c.jsx)("option",{value:e,children:e},t)}))]})]})]}),2===h&&k<j[y].items.length&&Object(c.jsxs)("div",{children:["Our Website"===y&&Object(c.jsx)("div",{children:[j[y].items[k]].map((function(e,t){return b(e,P,w)}))}),"Our Product"===y&&Object(c.jsx)("div",{children:[j[y].items[k]].map((function(e,t){return b(e,P,w)}))}),"Our Retail Locations"===y&&Object(c.jsx)("div",{children:[j[y].items[k]].map((function(e,t){return b(e,P,w)}))}),"Customer Service"===y&&Object(c.jsx)("div",{children:[j[y].items[k]].map((function(e,t){return b(e,P,w)}))}),"Cole Haan, Generally"===y&&Object(c.jsx)("div",{children:[j[y].items[k]].map((function(e,t){return b(e,P,w)}))})]}),2===h&&k===j[y].items.length&&Object(c.jsxs)("div",{className:"feedback-item email",children:[Object(c.jsx)("div",{className:"label",children:"Email (optional, will only be used for customer service purpose)"}),Object(c.jsx)("input",{placeholder:"Email",onChange:P,"data-key":"email"})]}),3===h&&Object(c.jsx)("div",{children:JSON.stringify(w)}),2===h&&Object(c.jsx)("button",{onClick:function(){return A()},children:"Previous"}),3!==h&&k<j[y].items.length?Object(c.jsx)("button",{onClick:function(){1===h?(m(2),g(0)):g(k+1)},disabled:""===y,children:"Next"}):3!==h&&k===j[y].items.length?Object(c.jsx)("button",{onClick:function(){return m(3)},children:"Submit"}):null]})]})},m=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,14)).then((function(t){var a=t.getCLS,c=t.getFID,i=t.getFCP,s=t.getLCP,n=t.getTTFB;a(e),c(e),i(e),s(e),n(e)}))};r.a.render(Object(c.jsx)(s.a.StrictMode,{children:Object(c.jsx)(h,{})}),document.getElementById("root")),m()}},[[13,1,2]]]);
//# sourceMappingURL=main.3fb501dd.chunk.js.map