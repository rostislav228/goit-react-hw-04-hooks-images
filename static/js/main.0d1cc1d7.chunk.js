(this["webpackJsonpgoit-react-hw-04-hooks-images"]=this["webpackJsonpgoit-react-hw-04-hooks-images"]||[]).push([[0],{10:function(e,t,a){e.exports={Overlay:"Modal_Overlay__2x6k1",Modal:"Modal_Modal__dAkSl"}},11:function(e,t,a){e.exports={ImageGalleryItem:"ImageGalleryItem_ImageGalleryItem__1Tmt5",ImageGalleryItemImage:"ImageGalleryItem_ImageGalleryItemImage__3Vtak"}},13:function(e,t,a){e.exports={ImageGallery:"ImageGallery_ImageGallery__WfPi8"}},14:function(e,t,a){e.exports={Button:"Button_Button__1zFav"}},16:function(e,t,a){e.exports={Loader:"Loader_Loader__1poe6"}},22:function(e,t,a){},4:function(e,t,a){e.exports={Searchbar:"Searchbar_Searchbar__2VLkW",SearchForm:"Searchbar_SearchForm__2u034",SearchFormButton:"Searchbar_SearchFormButton__3mQCy",SearchFormButtonLabel:"Searchbar_SearchFormButtonLabel__2Auyr",SearchFormInput:"Searchbar_SearchFormInput__3X2Aa"}},45:function(e,t,a){"use strict";a.r(t);var c=a(0),n=a(1),r=a.n(n),o=a(7),s=a.n(o),l=(a(22),a(12)),i=a(3),u=a(4),m=a.n(u);var j=function(e){var t=e.onSubmit,a=Object(n.useState)(""),r=Object(i.a)(a,2),o=r[0],s=r[1];return Object(c.jsx)("header",{className:m.a.Searchbar,children:Object(c.jsxs)("form",{className:m.a.SearchForm,onSubmit:function(e){e.preventDefault(),console.log(o),t(o)},children:[Object(c.jsx)("button",{type:"submit",className:m.a.SearchFormButton,children:Object(c.jsx)("span",{className:m.a.SearchFormButtonLabel,children:"Search"})}),Object(c.jsx)("input",{className:m.a.SearchFormInput,type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",onChange:function(e){console.log(e.target.value),s(e.target.value)}})]})})},b=a(10),h=a.n(b),d=document.querySelector("#modal-root");function g(e){var t=e.src,a=e.alt,r=e.toggle;Object(n.useEffect)((function(){return window.addEventListener("keydown",s),function(){window.removeEventListener("keydown",s)}}));var s=function(e){"DIV"!==e.target.nodeName&&"Escape"!==e.code||r()};return Object(o.createPortal)(Object(c.jsx)("div",{className:h.a.Overlay,onClick:s,children:Object(c.jsx)("div",{className:h.a.Modal,children:Object(c.jsx)("img",{src:t,alt:a})})}),d)}var p=a(11),O=a.n(p);function f(e){var t=e.webformatURL,a=e.tags,r=e.largeImageURL,o=Object(n.useState)(!1),s=Object(i.a)(o,2),l=s[0],u=s[1],m=function(){u(!l)};return Object(c.jsxs)("li",{className:O.a.ImageGalleryItem,children:[Object(c.jsx)("img",{src:t,alt:a,className:O.a.ImageGalleryItemImage,onClick:m}),l&&Object(c.jsx)(g,{src:r,alt:a,toggle:m})]})}var x=a(13),v=a.n(x);function _(e){var t=e.query;return Object(c.jsx)("ul",{className:v.a.ImageGallery,children:t.map((function(e){var t=e.tags,a=e.webformatURL,n=e.largeImageURL;return Object(c.jsx)(f,{tags:t,webformatURL:a,largeImageURL:n},a)}))})}var S=a(14),y=a.n(S);function I(e){var t=e.increment;return Object(c.jsx)("button",{type:"submit",className:y.a.Button,onClick:t,children:"Load more"})}var N=a(15),F=a.n(N),L=a(16),w=a.n(L);a(44);var k=function(){return Object(c.jsx)("div",{children:Object(c.jsx)(F.a,{className:w.a.Loader,type:"BallTriangle",color:"#00BFFF",height:40,width:40})})},B=a(5),G=a.n(B);var A=function(){var e=Object(n.useState)(""),t=Object(i.a)(e,2),a=t[0],r=t[1],o=Object(n.useState)([]),s=Object(i.a)(o,2),u=s[0],m=s[1],b=Object(n.useState)(1),h=Object(i.a)(b,2),d=h[0],g=h[1],p=Object(n.useState)(""),O=Object(i.a)(p,2),f=O[0],x=O[1],v=Object(n.useState)("idle"),S=Object(i.a)(v,2),y=S[0],N=S[1];Object(n.useEffect)((function(){1!==d&&window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})}),[u,d]);var F=function(e){console.log(e),r(e),console.log(a),setTimeout((function(){console.log(a)}),1e4),m([]),N("pending"),g(1),L().then((function(){N(f?"rejected":"resolved")}))},L=function(){return console.log(a),console.log(d),x(""),fetch("https://pixabay.com/api/?q=".concat(a,"&page=").concat(d,"&key=19045968-692e1124089d7d7c1e82b7642&image_type=photo&orientation=horizontal&per_page=12")).then((function(e){return e.json()})).then((function(e){0!==e.hits.length||1!==d?(e.hits.length>=0&&e.hits.length<12&&d>1&&x("\u0412\u044b \u043f\u043e\u0441\u043c\u043e\u0442\u0440\u0435\u043b\u0438 \u0441\u043b\u0438\u0448\u043a\u043e\u043c \u043c\u043d\u043e\u0433\u043e, \u0432\u0441\u0451 \u0437\u0430\u043a\u043e\u043d\u0447\u0438\u043b\u043e\u0441\u044c"),m([].concat(Object(l.a)(u),Object(l.a)(e.hits)))):x("\u0423\u043f\u0441... \u0422\u0430\u043a\u043e\u0433\u043e \u0443 \u043d\u0430\u0441 \u043d\u0435\u0442")}))};return"idle"===y?Object(c.jsx)("div",{className:G.a.App,children:Object(c.jsx)(j,{onSubmit:F})}):"pending"===y?Object(c.jsxs)("div",{className:G.a.App,children:[Object(c.jsx)(j,{onSubmit:F}),Object(c.jsx)(_,{query:u}),Object(c.jsx)(k,{})]}):"resolved"===y?Object(c.jsxs)("div",{className:G.a.App,children:[Object(c.jsx)(j,{onSubmit:F}),Object(c.jsx)(_,{query:u}),f||Object(c.jsx)(I,{increment:function(){N("pending"),g(d+1),L().then((function(){N("resolved")}))}})]}):"rejected"===y?Object(c.jsxs)("div",{className:G.a.App,children:[Object(c.jsx)(j,{onSubmit:F}),Object(c.jsx)("div",{children:f})]}):Object(c.jsxs)("div",{className:G.a.App,children:[Object(c.jsx)(j,{onSubmit:F}),"\u0423\u043f\u0441... \u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u043f\u043e \u043f\u043b\u0430\u043d\u0443"]})};s.a.render(Object(c.jsx)(r.a.StrictMode,{children:Object(c.jsx)(A,{})}),document.getElementById("root"))},5:function(e,t,a){e.exports={App:"App_App__3n5Ov"}}},[[45,1,2]]]);
//# sourceMappingURL=main.0d1cc1d7.chunk.js.map