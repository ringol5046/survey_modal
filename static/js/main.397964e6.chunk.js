(this.webpackJsonpcole_haan=this.webpackJsonpcole_haan||[]).push([[0],{11:function(e,t,c){},12:function(e,t,c){},13:function(e,t,c){"use strict";c.r(t);var a=c(0),i=c(1),s=c.n(i),n=c(5),r=c.n(n),l=c(3),o=c(2);c(11);var d=function(e){var t=e.children,c=e.visible,i=e.onClose,s=e.title;return c?Object(a.jsxs)("div",{className:"modal",children:[Object(a.jsx)("div",{className:"modal-overlay"}),Object(a.jsx)("div",{className:"modal-content",onClick:i,children:Object(a.jsxs)("div",{className:"modal-dialog",onClick:function(e){return e.stopPropagation()},children:[Object(a.jsxs)("div",{className:"header",children:[Object(a.jsx)("i",{className:"fas fa-times",onClick:i}),Object(a.jsx)("h2",{children:s})]}),t]})})]}):null},u=(c(12),["Our Website","Our Product","Our Retail Locations","Customer Service","Cole Haan, Generally"]),j={"Our Website":{items:[{desc:"What was your goal for todays visit to ColeHaan.com?",type:"dropDown",key:"website_goal",options:["Browser New Arrivals","Find a specific style","Compare Product","Browser sales items"]},{desc:"How easy was it to accomplish that goal?",type:"radio",group:"difficult",key:"website_usability",options:["Very Difficult","Difficult","Not Difficult nor Easy","Easy","Very Easy"]},{desc:"Please share you feedback.",type:"textArea",key:"feedback"}]},"Our Product":{items:[{desc:"What category would you like to leave feedback about",type:"dropDown",key:"product_goal",options:["Browser New Arrivals","Find a specific style","Compare Product","Browser sales items"]},{desc:"Tell use what you think.",type:"textArea",key:"feedback"}]},"Our Retail Locations":{items:[{desc:"Which store location would you like to leave feedback about?",type:"textArea",key:"store_location"},{desc:"Tell us what you think.",type:"textArea",key:"feedback"}]},"Customer Service":{items:[{desc:"How did you contact customer service?",type:"dropDown",key:"service_goal",options:["Phone","Email","Chat","Social Media","Other"]},{desc:"Tell us what you think.",type:"textArea",key:"feedback"},{desc:"How would you rate the service?",type:"radio",group:"rate",key:"service_rate",options:["1 - Not Satisfied","2 - Somewhat Satisfied","3 - Satisfied","4 - Very Satisfied"]}]},"Cole Haan, Generally":{items:[{desc:"Tell us what you think",type:"textArea",key:"feedback"}]}};function b(e,t,c){return"dropDown"===e.type?function(e,t,c){var i=e.desc,s=e.key,n=e.options;return Object(a.jsxs)("div",{className:"feedback-item",children:[Object(a.jsx)("div",{className:"label",children:i}),Object(a.jsxs)("select",{onChange:t,"data-key":s,value:c[s]?c[s]:"",children:[Object(a.jsx)("option",{children:"Choose.."}),n&&n.map((function(e,t){return Object(a.jsx)("option",{value:e,children:e},t)}))]})]})}(e,t,c):"radio"===e.type?function(e,t,c){var i=e.desc,s=e.key,n=e.options,r=e.group;return Object(a.jsxs)("div",{className:"feedback-item",children:[Object(a.jsx)("div",{className:"label",children:i}),Object(a.jsx)("div",{className:"radio-option-container",onChange:t,"data-key":s,children:n.map((function(e,t){return Object(a.jsxs)("div",{className:"option-item",children:[Object(a.jsx)("input",{value:e,type:"radio",name:r,checked:c[s]&&c[s]===e},t),Object(a.jsx)("label",{htmlFor:"rate",children:e})]},t)}))})]})}(e,t,c):function(e,t,c){var i=e.desc,s=e.key;return Object(a.jsxs)("div",{className:"feedback-item",children:[Object(a.jsx)("div",{className:"label",children:i}),Object(a.jsx)("textarea",{maxLength:1e3,onChange:t,"data-key":s,rows:5,value:c[s]?c[s]:""}),Object(a.jsx)("div",{className:"textarea-counter",children:"".concat(c[s]?1e3-c[s].length:1e3," characters left")})]})}(e,t,c)}var h=function(){var e=Object(i.useState)(!1),t=Object(o.a)(e,2),c=t[0],s=t[1],n=Object(i.useState)(1),r=Object(o.a)(n,2),h=r[0],m=r[1],O=Object(i.useState)("Our Website"),v=Object(o.a)(O,2),y=v[0],x=v[1],f=Object(i.useState)(0),p=Object(o.a)(f,2),k=p[0],g=p[1],N=Object(i.useState)(0),C=Object(o.a)(N,2),w=C[0],S=C[1],P=Object(i.useState)({rate:null}),A=Object(o.a)(P,2),H=A[0],E=A[1],F=function(e){var t=e.currentTarget.getAttribute("data-key");"category"===t&&x(e.target.value);var c=Object(l.a)({},H);c[t]=e.target.value,E(c)},D=function(){1===h?(m(2),g(0),S(0)):g(k+1)};return Object(a.jsxs)("div",{className:"App",children:[Object(a.jsx)("div",{className:"feedback-tab",onClick:function(){return s(!0)},children:"Feedback"}),Object(a.jsxs)(d,{title:"COLE HAAN",visible:c,onClose:function(){m(1),x("Our Website"),g(0),S(0),E({rate:null}),s(!1)},children:[Object(a.jsxs)("div",{className:"required-label",children:[Object(a.jsx)("b",{children:"*"}),"Required fields"]}),1===h&&Object(a.jsxs)("div",{className:"content",children:[0===w&&Object(a.jsxs)("div",{className:"feedback-item",children:[Object(a.jsxs)("div",{className:"label",children:["How likely are you to recommend Cole Haan to a friend or colleague? ",Object(a.jsx)("b",{children:"*"})]}),Object(a.jsx)("div",{className:"feedback-rate-container",children:[1,2,3,4,5,6,7,8,9,10].map((function(e,t){return Object(a.jsx)("div",{className:"rate-buttom ".concat(H.rate&&H.rate===e?"active":""),onClick:function(){return E(Object(l.a)(Object(l.a)({},H),{},{rate:e}))},children:Object(a.jsx)("span",{children:e})},t)}))}),Object(a.jsxs)("div",{className:"rating-label",children:[Object(a.jsx)("div",{children:"Not at all likely"}),Object(a.jsx)("div",{children:"Extremely likely"})]}),Object(a.jsx)("button",{onClick:function(){return S(1)},disabled:null===H.rate,children:"Next"})]}),1===w&&Object(a.jsxs)(a.Fragment,{children:[Object(a.jsxs)("div",{className:"feedback-item",children:[Object(a.jsx)("div",{className:"label",children:"Please choose a category you would like to leave feedback about."}),Object(a.jsxs)("select",{onChange:F,"data-key":"category",className:"category-select",value:H.category?H.category:"",children:[Object(a.jsx)("option",{value:1,children:"Choose.."}),u.map((function(e,t){return Object(a.jsx)("option",{value:e,children:e},t)}))]})]}),Object(a.jsx)("button",{onClick:function(){return S(0)},children:"Previous"}),Object(a.jsx)("button",{onClick:function(){return D()},disabled:!H.category,children:"Next"})]})]}),2===h&&k<j[y].items.length&&Object(a.jsxs)("div",{children:["Our Website"===y&&Object(a.jsx)("div",{children:[j[y].items[k]].map((function(e,t){return b(e,F,H)}))}),"Our Product"===y&&Object(a.jsx)("div",{children:[j[y].items[k]].map((function(e,t){return b(e,F,H)}))}),"Our Retail Locations"===y&&Object(a.jsx)("div",{children:[j[y].items[k]].map((function(e,t){return b(e,F,H)}))}),"Customer Service"===y&&Object(a.jsx)("div",{children:[j[y].items[k]].map((function(e,t){return b(e,F,H)}))}),"Cole Haan, Generally"===y&&Object(a.jsx)("div",{children:[j[y].items[k]].map((function(e,t){return b(e,F,H)}))})]}),2===h&&k===j[y].items.length&&Object(a.jsxs)("div",{className:"feedback-item email",children:[Object(a.jsx)("div",{className:"label",children:"Email (optional, will only be used for customer service purpose)"}),Object(a.jsx)("input",{placeholder:"Email",onChange:F,"data-key":"email"})]}),3===h&&Object(a.jsx)("div",{children:JSON.stringify(H)}),2===h&&Object(a.jsx)("button",{onClick:function(){0===k?(m(1),g(0),S(1)):g(k-1)},children:"Previous"}),2===h&&k<j[y].items.length?Object(a.jsx)("button",{onClick:D,children:"Next"}):2===h&&k===j[y].items.length?Object(a.jsx)("button",{onClick:function(){return m(3)},children:"Submit"}):null]})]})},m=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,14)).then((function(t){var c=t.getCLS,a=t.getFID,i=t.getFCP,s=t.getLCP,n=t.getTTFB;c(e),a(e),i(e),s(e),n(e)}))};r.a.render(Object(a.jsx)(s.a.StrictMode,{children:Object(a.jsx)(h,{})}),document.getElementById("root")),m()}},[[13,1,2]]]);
//# sourceMappingURL=main.397964e6.chunk.js.map