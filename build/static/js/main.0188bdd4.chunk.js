(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[0],[,,,,function(e,t,n){e.exports={"cart-items":"Cart_cart-items__1im4H",total:"Cart_total__3DhjQ",actions:"Cart_actions__3Xu4K","button--alt":"Cart_button--alt__1U6o3",button:"Cart_button__GsS4y"}},function(e,t,n){e.exports={"cart-item":"CartItem_cart-item__33JAL",summary:"CartItem_summary__2I9RH",price:"CartItem_price__3Kgyi",amount:"CartItem_amount__21ZqR",actions:"CartItem_actions__3l12G"}},,,function(e,t,n){e.exports={button:"HeaderCartButton_button__2vXym",icon:"HeaderCartButton_icon__2tU56",badge:"HeaderCartButton_badge__2nZds",bump:"HeaderCartButton_bump__38-nM"}},,function(e,t,n){e.exports={meal:"MealItem_meal__pS3TG",description:"MealItem_description__WoHU2",price:"MealItem_price__T_JaJ"}},function(e,t,n){e.exports={backdrop:"Modal_backdrop__3FCAP",modal:"Modal_modal__3rZWb","slide-down":"Modal_slide-down__1Ij9g"}},,function(e,t,n){e.exports={header:"Header_header__2OQCR","main-image":"Header_main-image__18BhI"}},,function(e,t,n){e.exports={card:"Card_card__3119n"}},function(e,t,n){e.exports={input:"Input_input__1mp1W"}},function(e,t,n){e.exports={form:"MealItemForm_form__3aTJo"}},function(e,t,n){e.exports={meals:"MealList_meals__1xg_s","meals-appear":"MealList_meals-appear__36yJx"}},function(e,t,n){e.exports={"promo-text":"PromoText_promo-text__2u84v"}},,,,,function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var a=n(6),c=n.n(a),i=(n(24),n(3)),r=n(1),s=n.n(r),o=n.p+"static/media/sushi.a2b4b921.jpg",d=n(13),m=n.n(d),l=s.a.createContext({items:[],totalAmount:0,addItem:function(e){},removeItem:function(e){}}),u=n(0),j=function(){return Object(u.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:Object(u.jsx)("path",{d:"M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"})})},b=n(8),x=n.n(b);var O=function(e){var t=Object(r.useContext)(l),n=Object(r.useState)(!1),a=Object(i.a)(n,2),c=a[0],s=a[1],o="".concat(x.a.button," ").concat(c?x.a.bump:"");Object(r.useEffect)((function(){if(0!==t.items.length){s(!0);var e=setTimeout((function(){s(!1)}),300);return function(){clearTimeout(e)}}}),[t.items]);var d=t.items.reduce((function(e,t){return e+t.amount}),0);return Object(u.jsxs)("button",{className:o,onClick:e.onClick,children:[Object(u.jsx)("span",{className:x.a.icon,children:Object(u.jsx)(j,{})}),Object(u.jsx)("span",{children:"\u041a\u043e\u0440\u0437\u0438\u043d\u0430"}),Object(u.jsx)("span",{className:x.a.badge,children:d})]})};var p=function(e){return Object(u.jsxs)(s.a.Fragment,{children:[Object(u.jsxs)("header",{className:m.a.header,children:[Object(u.jsx)("h1",{children:"\u0421\u0443\u0448\u0438 \u0445\u0430\u0443\u0441"}),Object(u.jsx)(O,{onClick:e.onShowCart})]}),Object(u.jsx)("div",{className:m.a["main-image"],children:Object(u.jsx)("img",{src:o,alt:"\u0411\u043b\u044e\u0434\u0430 \u044f\u043f\u043e\u043d\u0441\u043a\u043e\u0439 \u043a\u0443\u0445\u043d\u0438"})})]})},_=n(15),h=n.n(_);var f=function(e){return Object(u.jsx)("div",{className:"".concat(h.a.card," ").concat(e.className),children:e.children})},v=n(10),C=n.n(v),I=n(2),N=n(16),g=n.n(N),H=s.a.forwardRef((function(e,t){return Object(u.jsxs)("div",{className:g.a.input,children:[Object(u.jsx)("label",{htmlFor:e.input.id,children:e.label}),Object(u.jsx)("input",Object(I.a)({ref:t},e.input))]})})),M=n(17),A=n.n(M);var y=function(e){var t=Object(r.useRef)(),n=Object(r.useState)(!0),a=Object(i.a)(n,2),c=a[0],s=a[1];return Object(u.jsxs)("form",{className:A.a.form,onSubmit:function(n){n.preventDefault();var a=t.current.value;0===a.trim().length||+a<1||+a>10?s(!1):e.onAddToCart(+a)},children:[Object(u.jsx)(H,{ref:t,label:"\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e",input:{id:e.id,type:"number",min:"1",step:"1",defaultValue:"1"}}),Object(u.jsx)("button",{children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c"}),!c&&Object(u.jsx)("p",{children:"\u041f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430 \u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u043a\u043e\u043b-\u0432\u043e \u043e\u0442 1 \u0434\u043e 10"})]})};var k=function(e){var t=Object(r.useContext)(l),n="$".concat(e.price.toFixed(2));return Object(u.jsxs)("li",{className:C.a.meal,children:[Object(u.jsxs)("div",{children:[Object(u.jsx)("h3",{children:e.name}),Object(u.jsx)("div",{className:C.a.description,children:e.description}),Object(u.jsx)("div",{className:C.a.price,children:n})]}),Object(u.jsx)("div",{children:Object(u.jsx)(y,{onAddToCart:function(n){t.addItem({id:e.id,name:e.name,amount:n,price:e.price})},id:e.id})})]})},w=n(18),T=n.n(w),E=[{id:"m1",name:'\u0420\u043e\u043b\u043b "\u041d\u0430\u043e\u043c\u0438"',description:"\u0421\u044b\u0440 \u0424\u0438\u043b\u0430\u0434\u0435\u043b\u044c\u0444\u0438\u044f, \u043a\u0443\u0440\u0438\u043d\u043e\u0435 \u0444\u0438\u043b\u0435, \u043c\u0430\u0441\u0430\u0433\u043e, \u043f\u043e\u043c\u0438\u0434\u043e\u0440, \u043e\u0433\u0443\u0440\u0435\u0446, \u043a\u0443\u043d\u0436\u0443\u0442",price:11.99},{id:"m2",name:"\u0421\u043f\u0430\u0439\u0441 \u0432 \u043b\u043e\u0441\u043e\u0441\u0435",description:"\u0420\u0438\u0441, \u043b\u043e\u0441\u043e\u0441\u044c, \u0441\u043e\u0443\u0441 \u0441\u043f\u0430\u0439\u0441",price:3.99},{id:"m3",name:"\u0421\u0443\u0448\u0438 \u0441 \u0443\u0433\u0440\u0435\u043c",description:"\u0423\u0433\u043e\u0440\u044c \u043a\u043e\u043f\u0447\u0435\u043d\u044b\u0439, \u0441\u043e\u0443\u0441 \u0443\u043d\u0430\u0433\u0438, \u043a\u0443\u043d\u0436\u0443\u0442",price:4.99},{id:"m4",name:'\u0421\u0430\u043b\u0430\u0442 "\u041f\u043e\u043a\u0435 \u0441 \u043b\u043e\u0441\u043e\u0441\u0435\u043c"',description:"\u0420\u0438\u0441, \u043b\u043e\u0441\u043e\u0441\u044c, \u043e\u0433\u0443\u0440\u0435\u0446, \u0447\u0443\u043a\u0430, \u043d\u043e\u0440\u0438, \u0441\u0442\u0440\u0443\u0436\u043a\u0430 \u0442\u0443\u043d\u0446\u0430, \u0441\u043e\u0443\u0441 \u043e\u0440\u0435\u0445\u043e\u0432\u044b\u0439",price:7.99}];var R=function(){var e=E.map((function(e){return Object(u.jsx)(k,{id:e.id,name:e.name,description:e.description,price:e.price},e.id)}));return Object(u.jsx)("section",{className:T.a.meals,children:Object(u.jsx)(f,{children:Object(u.jsx)("ul",{children:e})})})},F=n(19),B=n.n(F);var S=function(){return Object(u.jsxs)("section",{className:B.a["promo-text"],children:[Object(u.jsx)("h2",{children:'\u041e\u043d\u043b\u0430\u0439\u043d \u0420\u0435\u0441\u0442\u043e\u0440\u0430\u043d "\u0421\u0443\u0448\u0438 \u0425\u0430\u0443\u0441"'}),Object(u.jsx)("p",{children:"\u0421\u0443\u0448\u0438 \u0425\u0430\u0443\u0441 - \u044d\u0442\u043e \u043e\u043d\u043b\u0430\u0439\u043d \u0441\u0443\u0448\u0438-\u0440\u0435\u0441\u0442\u043e\u0440\u0430\u043d, \u0432 \u043a\u043e\u0442\u043e\u0440\u043e\u043c \u043b\u044e\u0431\u0438\u043c\u044b\u0435 \u0441\u0443\u0448\u0438 \u0438 \u0441\u0430\u0448\u0438\u043c\u0438, \u0440\u043e\u043b\u043b\u044b \u0438 \u0434\u0440\u0443\u0433\u0438\u0435 \u0431\u043b\u044e\u0434\u0430 \u043d\u0430\u0446\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u043e\u0439 \u044f\u043f\u043e\u043d\u0441\u043a\u043e\u0439 \u043a\u0443\u0445\u043d\u0438 \u0434\u0435\u043b\u0430\u0435\u0442 \u043a\u043e\u043c\u0430\u043d\u0434\u0430 \u043f\u0440\u043e\u0444\u0435\u0441\u0441\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u044b\u0445 \u043f\u043e\u0432\u0430\u0440\u043e\u0432."}),Object(u.jsx)("p",{children:"\u0411\u044b\u0441\u0442\u0440\u0430\u044f \u0440\u0430\u0431\u043e\u0442\u0430 \u0438 \u043a\u0430\u0447\u0435\u0441\u0442\u0432\u0435\u043d\u043d\u0430\u044f \u043f\u0440\u043e\u0434\u0443\u043a\u0446\u0438\u044f, \u0430 \u0442\u0430\u043a\u0436\u0435 \u0441\u0430\u043c\u044b\u0435 \u043d\u0430\u0441\u0442\u043e\u044f\u0449\u0438\u0435 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u044b \u043f\u0440\u0438\u0434\u0430\u044e\u0442 \u0445\u043e\u0440\u043e\u0448\u0438\u0439 \u0432\u043a\u0443\u0441 \u0431\u043b\u044e\u0434\u0430\u043c, \u0434\u0430\u0440\u044f\u0442 \u043d\u0430\u0441\u043b\u0430\u0436\u0434\u0435\u043d\u0438\u0435 \u043e\u0442 \u0442\u0440\u0430\u043f\u0435\u0437\u044b."})]})};var J=function(){return Object(u.jsxs)(s.a.Fragment,{children:[Object(u.jsx)(S,{}),Object(u.jsx)(R,{})]})},D=n(4),P=n.n(D),z=n(11),G=n.n(z),L=function(e){return Object(u.jsx)("div",{className:G.a.backdrop,onClick:e.onHideCart})},U=function(e){return Object(u.jsx)("div",{className:G.a.modal,children:Object(u.jsx)("div",{className:G.a.content,children:e.children})})},V=document.getElementById("overlays");var W=function(e){return Object(u.jsxs)(s.a.Fragment,{children:[c.a.createPortal(Object(u.jsx)(L,{onHideCart:e.onHideCart}),V),c.a.createPortal(Object(u.jsx)(U,{children:e.children}),V)]})},Z=n(5),$=n.n(Z),K=function(e){var t="$".concat(e.price.toFixed(2));return Object(u.jsxs)("li",{className:$.a["cart-item"],children:[Object(u.jsxs)("div",{children:[Object(u.jsx)("h2",{children:e.name}),Object(u.jsxs)("div",{className:$.a.summary,children:[Object(u.jsx)("span",{className:$.a.price,children:t}),Object(u.jsxs)("span",{className:$.a.amount,children:["x ",e.amount]})]})]}),Object(u.jsxs)("div",{className:$.a.actions,children:[Object(u.jsx)("button",{onClick:e.onRemove,children:"\u2212"}),Object(u.jsx)("button",{onClick:e.onAdd,children:"+"})]})]})};var Q=function(e){var t=Object(r.useContext)(l),n="$".concat(Math.abs(t.totalAmount.toFixed(2))),a=t.items.length>0,c=function(e){t.addItem(Object(I.a)(Object(I.a)({},e),{},{amount:1}))},i=function(e){t.removeItem(e)},s=Object(u.jsx)("ul",{className:P.a["cart-items"],children:t.items.map((function(e){return Object(u.jsx)(K,{name:e.name,amount:e.amount,price:e.price,onAdd:c.bind(null,e),onRemove:i.bind(null,e.id)},e.id)}))});return Object(u.jsxs)(W,{onHideCart:e.onHideCart,children:[s,Object(u.jsxs)("div",{className:P.a.total,children:[Object(u.jsx)("span",{children:"\u0418\u0442\u043e\u0433\u043e:"}),Object(u.jsx)("span",{children:n})]}),Object(u.jsxs)("div",{className:P.a.actions,children:[Object(u.jsx)("button",{className:P.a["button--alt"],onClick:e.onHideCart,children:"\u0417\u0430\u043a\u0440\u044b\u0442\u044c"}),a&&Object(u.jsx)("button",{className:P.a.button,children:"\u0417\u0430\u043a\u0430\u0437\u0430\u0442\u044c"})]})]})},X=n(14),q={items:[],totalAmount:0},Y=function(e,t){if("ADD_ITEM"===t.type){var n,a,c=e.totalAmount+t.item.price*t.item.amount,i=e.items.findIndex((function(e){return e.id===t.item.id})),r=e.items[i];return r?(n=Object(I.a)(Object(I.a)({},r),{},{amount:r.amount+t.item.amount}),(a=Object(X.a)(e.items))[i]=n):(n=Object(I.a)({},t.item),a=e.items.concat(n)),{items:a,totalAmount:c}}if("REMOVE_ITEM"===t.type){var s,o=e.items.findIndex((function(e){return e.id===t.id})),d=e.items[o],m=e.totalAmount-d.price;if(1===d.amount)s=e.items.filter((function(e){return e.id!=t.id}));else{var l=Object(I.a)(Object(I.a)({},d),{},{amount:d.amount-1});(s=Object(X.a)(e.items))[o]=l}return{items:s,totalAmount:m}}return q};var ee=function(e){var t=Object(r.useReducer)(Y,q),n=Object(i.a)(t,2),a=n[0],c=n[1],s={items:a.items,totalAmount:a.totalAmount,addItem:function(e){c({type:"ADD_ITEM",item:e})},removeItem:function(e){c({type:"REMOVE_ITEM",id:e})}};return Object(u.jsx)(l.Provider,{value:s,children:e.children})};var te=function(){var e=Object(r.useState)(!1),t=Object(i.a)(e,2),n=t[0],a=t[1];return Object(u.jsxs)(ee,{children:[n&&Object(u.jsx)(Q,{onHideCart:function(){a(!1)}}),Object(u.jsx)(p,{onShowCart:function(){a(!0)}}),Object(u.jsx)("main",{children:Object(u.jsx)(J,{})})]})};c.a.render(Object(u.jsx)(te,{}),document.getElementById("root"))}],[[26,1,2]]]);
//# sourceMappingURL=main.0188bdd4.chunk.js.map