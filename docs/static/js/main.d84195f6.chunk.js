(this["webpackJsonpreact-starter-kit"]=this["webpackJsonpreact-starter-kit"]||[]).push([[0],{21:function(e,a,t){},22:function(e,a,t){},24:function(e,a,t){},33:function(e,a,t){},34:function(e,a,t){},35:function(e,a,t){},36:function(e,a,t){},37:function(e,a,t){"use strict";t.r(a);var c=t(1),r=t(14),s=t.n(r),n=t(8),i=t(10),l=(t(21),t(2));var o=function(){return fetch("https://raw.githubusercontent.com/Adalab/rick-y-morty/master/data/rick-y-morty.json").then((function(e){return e.json().then((function(e){return e.results.map((function(e){return{id:e.id,name:e.name,image:e.image,status:e.status,species:e.species,episodes:e.episode.length,homePlanet:e.origin.name}}))}))}))},j={get:function(e,a){var t=localStorage.getItem(e);return null===t?a:JSON.parse(t)},set:function(e,a){var t=JSON.stringify(a);localStorage.setItem(e,t)},remove:function(e){localStorage.removeItem(e)},clear:function(){localStorage.clear()}},h=t.p+"static/media/skull.d5f24673.png",d=(t(22),t(0));var u=function(e){var a=e.characterData.status;return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("img",{className:"card__img",src:e.characterData.image,alt:e.characterData.name,title:e.characterData.name}),Object(d.jsx)("h4",{className:"card__title",children:e.characterData.name}),Object(d.jsx)("p",{className:"card__text",children:e.characterData.species}),Object(d.jsx)("div",{children:"Dead"===a?Object(d.jsx)("img",{className:"card__calaver",src:h,alt:"Calaver Rick"}):""})]})};t(24);var m=function(e){var a=e.data.map((function(e){return Object(d.jsx)(n.b,{to:"/characterData/".concat(e.id),children:Object(d.jsx)("li",{className:"card",children:Object(d.jsx)(u,{characterData:e})})},e.id)}));return Object(d.jsx)("ul",{className:"cards",children:a})};t(33);var b=function(e){var a=e.character.status;return Object(d.jsxs)("article",{className:"card__details",children:[Object(d.jsx)(n.b,{to:"/",children:Object(d.jsx)("span",{className:"card__exit",children:"\u2716"})}),Object(d.jsx)("img",{className:"card__img",src:e.character.image,alt:e.character.name,title:e.character.name}),Object(d.jsx)("h4",{className:"card__title",children:e.character.name}),Object(d.jsxs)("p",{className:"card__text",children:["Especie: ",e.character.species]}),Object(d.jsxs)("p",{className:"card__text",children:["Planeta de origen: ",e.character.homePlanet]}),Object(d.jsxs)("p",{className:"card__text",children:["Aparece en ",e.character.episodes," episodios"]}),Object(d.jsxs)("p",{className:"card__text",children:["Est\xe1 ","Alive"===a?"Vivo":"Desconocido"]}),Object(d.jsx)("div",{children:"Dead"===a?Object(d.jsx)("img",{className:"card__calaver",src:h,alt:"Calaver Rick",width:"20px"}):""})]})};var O=function(e){return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("label",{htmlFor:"search",className:"form__label",children:"Nombre:"}),Object(d.jsx)("input",{type:"text",id:"search",name:"search",className:"form__input",placeholder:"Nombre del personaje",value:e.searchName,onChange:e.handleSearchName})]})};var x=function(e){return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("label",{className:"form__label",htmlFor:"status",children:"Estado:"}),Object(d.jsxs)("select",{className:"form__input-select",name:"status",id:"status",value:e.searchStatus,onChange:e.handleChangeStatus,children:[Object(d.jsx)("option",{value:"all",children:"Todos"}),Object(d.jsx)("option",{value:"Alive",children:"Vivo"}),Object(d.jsx)("option",{value:"Dead",children:"Muerto"}),Object(d.jsx)("option",{value:"unknow",children:"Se desconoce"})]})]})};t(34);var f=function(e){return Object(d.jsxs)("form",{className:"form",action:"",children:[Object(d.jsx)("h2",{children:"Buscador de personajes"}),Object(d.jsx)(O,{searchName:e.searchName,handleSearchName:e.handleSearchName}),Object(d.jsx)(x,{searchStatus:e.searchStatus,handleChangeStatus:e.handleChangeStatus})]})};t(35);var p=function(){return Object(d.jsx)("header",{className:"header",children:Object(d.jsx)("img",{className:"header__img",src:"https://help.redbubble.com/hc/article_attachments/360002309526/Rick_and_Morty_-_logo__English_.png",alt:"Rick and Morty"})})};t(36);var g=function(){return Object(d.jsxs)("footer",{className:"footer",children:[Object(d.jsx)("p",{className:"copy",children:"\xa9 Rick and Morty 2021"}),Object(d.jsxs)("small",{children:["Hecho con ritmo ",Object(d.jsx)("span",{children:"\ud83e\udd18"})," por Moni Lamas"]})]})};var _=function(){var e=Object(c.useState)([]),a=Object(i.a)(e,2),t=a[0],r=a[1],s=Object(c.useState)(""),n=Object(i.a)(s,2),h=n[0],u=n[1],O=Object(c.useState)(""),x=Object(i.a)(O,2),_=x[0],v=x[1];Object(c.useEffect)((function(){j.get("characters",[]).length>0?r(j.get("characters",[])):o().then((function(e){r(e),j.set("characters",e)}))}),[]);var N=Object(l.f)("/characterData/:id"),S=null!==N?N.params.id:"",D=t.find((function(e){return e.id===parseInt(S)})),k=t.filter((function(e){return e.name.toLocaleLowerCase().includes(h.toLocaleLowerCase())})).filter((function(e){return""===_||_===e.status}));return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(p,{}),Object(d.jsxs)(l.c,{children:[Object(d.jsx)(l.a,{path:"/",exact:!0,children:Object(d.jsxs)("main",{className:"container",children:[Object(d.jsx)(f,{searchName:h,handleSearchName:function(e){e.preventDefault(),u(e.currentTarget.value)},searchStatus:_,handleChangeStatus:function(e){e.preventDefault(),v(e.currentTarget.value)}}),Object(d.jsx)("section",{className:"list",children:Object(d.jsx)(m,{data:k})})]})}),Object(d.jsx)(l.a,{path:"/characterData/:id",children:Object(d.jsx)("section",{children:Object(d.jsx)(b,{character:D})})}),Object(d.jsx)(l.a,{children:Object(d.jsx)("section",{children:"Oh! P\xe1gina equivocada"})})]}),Object(d.jsx)(g,{})]})};s.a.render(Object(d.jsx)(n.a,{children:Object(d.jsx)(_,{})}),document.getElementById("root"))}},[[37,1,2]]]);
//# sourceMappingURL=main.d84195f6.chunk.js.map