(this["webpackJsonpprueba-tendencys"]=this["webpackJsonpprueba-tendencys"]||[]).push([[0],{30:function(e,t,c){},52:function(e,t,c){"use strict";c.r(t);var a=c(0),r=c(1),s=c.n(r),n=c(4),l=c.n(n),i=(c(30),c(2)),d=c(10),o=c.n(d),u=c(23),j=c(24),m=c(11),b=c.n(m),O="https://eshop-deve.herokuapp.com/api/v2/orders",h={Authorization:"".concat("eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJwUGFINU55VXRxTUkzMDZtajdZVHdHV3JIZE81cWxmaCIsImlhdCI6MTYwNTY0NDA0NzA1OH0.skfIY_7CAANkxmhoq37OI4jYRE8flx1ENq1v1VaRevJiroYNFQYz7Oy6hL1YZ1OJkevXSQFuLMHTqY0w6d5nPQ")},f=function(e){return b()("".concat(O,"/").concat(e),{headers:h})},v=function(e){var t,c=e.setOrderInfo,s=e.orderInfo,n=Object(r.useState)([]),l=Object(i.a)(n,2),d=l[0],m=l[1];Object(r.useEffect)((function(){b()(O,{headers:h}).then((function(e){return m(e.data.orders)}))}),[]);var v=function(){var e=Object(u.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log(t),(null===t||void 0===t?void 0:t.trim())&&f(t).then((function(e){c([]),c(e.data.order)}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),x=d.map((function(e){var t,c=null===e||void 0===e||null===(t=e.name)||void 0===t?void 0:t.replace(/#/g,"");return{vlue:e.id,label:c}}));return Object(a.jsxs)("nav",{className:"navbar navbar-dark bg-dark mb-4 bg-header",children:[Object(a.jsx)("h4",{className:"navbar-brand text-wrap",children:(null===s||void 0===s||null===(t=s.name)||void 0===t?void 0:t.trim())?"Number Of Order: ".concat(s.number):"Select a Order"}),Object(a.jsx)("div",{className:"w-5",style:{width:"300px",color:"#000",zIndex:10},children:Object(a.jsx)(j.a,{options:x,onChange:function(e){return v(e.vlue)},placeholder:"Select You Order"})})]})},x=c(14),p=c(12),N=c.n(p),g=c(13),y=c.n(g),S=y()(N.a),I=function(e){var t=e.title,c=e.message;S.fire({title:t,text:c,icon:"error"})},k=y()(N.a),w=function(e){var t=e.title,c=e.message;k.fire({title:t,text:c,icon:"success",button:"Acept"})},A=c(54),F=function(e){var t=e.id,c=e.setFetch,s=Object(r.useState)(""),n=Object(i.a)(s,2),l=n[0],d=n[1],o=Object(r.useState)(""),u=Object(i.a)(o,2),j=u[0],m=u[1],b=Object(r.useState)(0),O=Object(i.a)(b,2),h=O[0],f=O[1],v=Object(r.useState)(0),x=Object(i.a)(v,2),p=x[0],N=x[1],g=Object(r.useState)(""),y=Object(i.a)(g,2),S=y[0],k=y[1],F=Object(r.useState)(""),C=Object(i.a)(F,2),P=C[0],J=C[1],q=Object(r.useState)(""),M=Object(i.a)(q,2),Y=M[0],T=M[1],U=Object(r.useState)(""),z=Object(i.a)(U,2),B=z[0],Q=z[1];return Object(a.jsx)("div",{className:"row w-100 m-auto",children:Object(a.jsxs)("div",{className:"card text-center m-auto",children:[Object(a.jsx)("h5",{className:"card-title pt-3",children:"Add New Product"}),Object(a.jsxs)("form",{className:"card-body",onSubmit:function(e){return function(e){if(e.preventDefault(),!l.trim()||!j.trim()||h<=0||p<=0)I({title:"All Fields Are Required",message:"Please Fill All Fields"});else if(/^\d*$/.test(h)){var a={id:Object(A.a)(),sku:l,name:j,fulfillment:{quantity:h},price:p,orderId:t},r=JSON.parse(localStorage.getItem("products"));null===r||void 0===r||r.push(a),localStorage.setItem("products",r?JSON.stringify(r):JSON.stringify([a])),w({title:"Added product",message:"The Product has been successfully Added to the Order"}),m(""),d(""),f(0),N(0),c(!0)}else I({title:"Quantity Number not Allowed",message:"The quantity can only be a whole number"})}(e)},children:[Object(a.jsxs)("div",{className:"form m-auto",children:[Object(a.jsxs)("div",{className:"form-group col-md-8 m-auto",children:[Object(a.jsx)("label",{htmlFor:"sku",children:"SKU"}),Object(a.jsx)("input",{required:!0,autoComplete:"off",type:"text",className:"form-control mb-md-3 ".concat(S),id:"sku",placeholder:"sku for this product...",autoFocus:!0,value:l,onChange:function(e){return d(e.target.value)},onBlur:function(){return k(l.trim()?"is-valid":"is-invalid")}}),Object(a.jsx)("div",{className:"invalid-feedback",children:"Please Add a SKU"})]}),Object(a.jsxs)("div",{className:"form-group col-md-8 m-auto",children:[Object(a.jsx)("label",{htmlFor:"name",children:"Name"}),Object(a.jsx)("input",{required:!0,autoComplete:"off",type:"text",className:"form-control mb-md-3 ".concat(P),id:"name",placeholder:"name for this product...",value:j,onChange:function(e){return m(e.target.value)},onBlur:function(){return J(j.trim()?"is-valid":"is-invalid")}}),Object(a.jsx)("div",{className:"invalid-feedback",children:"Please Add a Name"})]})]}),Object(a.jsxs)("div",{className:"form-row m-auto col-md-8",children:[Object(a.jsxs)("div",{className:"form-group col-md-4",children:[Object(a.jsx)("label",{htmlFor:"sku",children:"Quantity"}),Object(a.jsx)("input",{required:!0,autoComplete:"off",type:"number",className:"form-control ".concat(Y),id:"sku",placeholder:"0",value:h,onChange:function(e){return f(e.target.value)},onBlur:function(){return T(h<=0?"is-invalid":"is-valid")}}),Object(a.jsx)("div",{className:"invalid-feedback",children:"Please Add a Quantity"})]}),Object(a.jsxs)("div",{className:"form-group col-md-8 ",children:[Object(a.jsx)("label",{htmlFor:"name",children:"Price"}),Object(a.jsxs)("div",{className:"input-group",children:[Object(a.jsx)("div",{className:"input-group-prepend",children:Object(a.jsx)("div",{className:"input-group-text",children:"$"})}),Object(a.jsx)("input",{required:!0,formNoValidate:!0,autoComplete:"off",type:"number",className:"form-control ".concat(B),id:"name",placeholder:"0",value:p,onChange:function(e){return N(e.target.value)},onBlur:function(){return Q(p<=0?"is-invalid":"is-valid")}}),Object(a.jsx)("div",{className:"invalid-feedback",children:"Please Add a Price"})]})]})]}),Object(a.jsxs)("div",{className:"row",children:[Object(a.jsx)("div",{className:"col-md mb-4",children:Object(a.jsx)("button",{type:"submit",className:"btn btn-block btn-success",children:"Add"})}),Object(a.jsx)("div",{className:"col-md",children:Object(a.jsx)("button",{className:"btn btn-block btn-outline-danger","data-dismiss":"modal",children:!l.trim()&&!j.trim()&&h<=0&&p<=0?"Go Back":"Cancel"})})]})]})]})})},C=function(e){var t,c=e.orderInfo,r=e.AlertSucces,s=e.createdAt,n=e.total;return Object(a.jsx)(a.Fragment,{children:Object(a.jsx)("div",{className:"col-md-4 col-sm w-100 mb-4",children:Object(a.jsxs)("ul",{className:"list-group",children:[Object(a.jsx)("li",{className:"list-group-item active text-center",children:"Order Information"}),Object(a.jsxs)("li",{className:"list-group-item",children:["Order ID: ",c.id]}),Object(a.jsxs)("li",{className:"list-group-item",children:["Order of Number: ",c.number]}),Object(a.jsxs)("li",{className:"list-group-item",children:["Order Name: ",c.name]}),Object(a.jsxs)("li",{className:"list-group-item",children:["Crated At: ",s.toLocaleString("es-MX")]}),Object(a.jsxs)("li",{className:"list-group-item",children:["Status:",Object(a.jsx)("span",{className:"text-capitalize",children:null===(t=c.status)||void 0===t?void 0:t.financial})]}),Object(a.jsxs)("li",{className:"list-group-item",children:["Total Cost:",n]}),Object(a.jsxs)("li",{className:"list-group-item",children:[Object(a.jsx)("button",{className:"btn  d-block btn-outline-primary w-100",type:"button","data-toggle":"modal","data-target":"#formModal","data-whatever":"@mdo",children:"Add Product"}),Object(a.jsx)("button",{onClick:function(){return r({title:"Payment Made",message:"Your payment has been successful"})},className:"btn btn-success d-block w-100 mt-4",children:"Pay"})]})]})})})},P=function(e){var t,c,s=e.orderInfo,n=s.id,l=Object(r.useState)([]),d=Object(i.a)(l,2),o=d[0],u=d[1],j=Object(r.useState)(!1),m=Object(i.a)(j,2),b=m[0],O=m[1],h=Object(r.useState)(0),v=Object(i.a)(h,2),p=v[0],N=v[1];Object(r.useEffect)((function(){f(n).then((function(e){var t=JSON.parse(localStorage.getItem("products"));if(t){var c,a=t.filter((function(e){return e.orderId===n}));u((function(){return[].concat(Object(x.a)(e.data.order.items),Object(x.a)(a))}));for(var r=0,l=0;l<a.length;l++)r+=parseFloat(a[l].price*a[l].fulfillment.quantity);var i=parseFloat(null===(c=s.totals)||void 0===c?void 0:c.total);N(parseFloat(i+r).toFixed(2))}})),b&&O(!1)}),[b,N,u,O,n,null===(t=s.totals)||void 0===t?void 0:t.total]);var g=new Date(null===(c=s.dates)||void 0===c?void 0:c.createdAt);return Object(a.jsx)(a.Fragment,{children:Object(a.jsxs)("div",{className:"container",children:[Object(a.jsx)("div",{className:"modal fade",id:"formModal",tabIndex:-1,"aria-hidden":"true",children:Object(a.jsx)("div",{className:"modal-dialog modal-dialog-centered",children:Object(a.jsx)("div",{className:"modal-content",children:Object(a.jsx)(F,{id:n,setFetch:O})})})}),Object(a.jsxs)("div",{className:"row row-cols",children:[Object(a.jsx)(C,{orderInfo:s,createdAt:g,AlertSucces:w,total:p}),Object(a.jsx)("div",{className:"col-md-8 col-sm-12",children:Object(a.jsx)("div",{className:"table-wrapper-scroll-y my-custom-scrollbar w-100",children:Object(a.jsxs)("table",{className:"table table-striped table-responsive-sm table-light rounded",children:[Object(a.jsx)("thead",{className:"bg-header",children:Object(a.jsxs)("tr",{className:"",children:[Object(a.jsx)("th",{scope:"col",children:"SKU"}),Object(a.jsx)("th",{scope:"col",children:"Name"}),Object(a.jsx)("th",{scope:"col",children:"Quantity"}),Object(a.jsx)("th",{scope:"col",children:"Price"})]})}),Object(a.jsx)("tbody",{children:o.map((function(e){return Object(a.jsxs)("tr",{children:[Object(a.jsx)("td",{children:e.sku}),Object(a.jsx)("td",{children:e.name}),Object(a.jsx)("td",{children:e.fulfillment.quantity}),Object(a.jsx)("td",{children:e.price})]},e.id)}))})]})})})]})]})})};var J=function(){var e,t=Object(r.useState)([]),c=Object(i.a)(t,2),s=c[0],n=c[1];return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(v,{setOrderInfo:n,orderInfo:s}),(null===(e=s.items)||void 0===e?void 0:e.length)>0?Object(a.jsx)(P,{orderInfo:s}):Object(a.jsx)(a.Fragment,{children:Object(a.jsx)("div",{className:"container",children:Object(a.jsx)("h1",{className:"text-center font-weight-bold",children:"Pleas Select a Order"})})})]})},q=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,55)).then((function(t){var c=t.getCLS,a=t.getFID,r=t.getFCP,s=t.getLCP,n=t.getTTFB;c(e),a(e),r(e),s(e),n(e)}))};l.a.render(Object(a.jsx)(s.a.StrictMode,{children:Object(a.jsx)(J,{})}),document.getElementById("root")),q()}},[[52,1,2]]]);
//# sourceMappingURL=main.d4ac20e0.chunk.js.map