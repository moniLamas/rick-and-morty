(this["webpackJsonpreact-starter-kit"]=this["webpackJsonpreact-starter-kit"]||[]).push([[0],{21:function(e,a,c){},31:function(e,a,c){},32:function(e,a,c){},33:function(e,a,c){"use strict";c.r(a);var t=c(1),r=c(14),s=c.n(r),n=c(9),i=c(13),l=(c(21),c(2));var o=function(){return fetch("https://raw.githubusercontent.com/Adalab/rick-y-morty/master/data/rick-y-morty.json").then((function(e){return e.json().then((function(e){return e.results.map((function(e){return{id:e.id,name:e.name,image:e.image,status:e.status,species:e.species,episodes:e.episode.length,homePlanet:e.origin.name}}))}))}))},j={get:function(e,a){var c=localStorage.getItem(e);return null===c?a:JSON.parse(c)},set:function(e,a){var c=JSON.stringify(a);localStorage.setItem(e,c)},remove:function(e){localStorage.removeItem(e)},clear:function(){localStorage.clear()}},h=c.p+"static/media/skull.d5f24673.png",d=c(0);var m=function(e){var a=e.characterData.status;return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("img",{className:"card__img",src:e.characterData.image,alt:e.characterData.name,title:e.characterData.name}),Object(d.jsxs)("h4",{className:"card__title",children:["Nombre: ",e.characterData.name]}),Object(d.jsxs)("p",{className:"card__text",children:["Especie: ",e.characterData.species]}),Object(d.jsx)("div",{children:"Dead"===a?Object(d.jsx)("img",{className:"card__calaver",src:h,alt:"Calaver Rick"}):""})]})};var u=function(e){var a=e.data.map((function(e){return Object(d.jsx)(n.b,{to:"/characterData/".concat(e.id),children:Object(d.jsx)("li",{className:"card",children:Object(d.jsx)(m,{characterData:e})},e.id)})}));return Object(d.jsx)("ul",{className:"cards",children:a})};var b=function(e){var a=e.character.status;return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("img",{className:"card__img",src:e.character.image,alt:e.character.name,title:e.character.name}),Object(d.jsxs)("h4",{className:"card__title",children:["Nombre: ",e.character.name]}),Object(d.jsxs)("p",{className:"card__text",children:["Especie: ",e.character.species]}),Object(d.jsxs)("p",{className:"card__text",children:["Planeta de origen: ",e.character.homePlanete]}),Object(d.jsxs)("p",{className:"card__text",children:["Aparece en ",e.character.episodes," episodios"]}),Object(d.jsxs)("p",{className:"card__text",children:["Est\xe1 ","Alive"===a?"Vivo":"Desconocido"]}),Object(d.jsx)("div",{children:"Dead"===a?Object(d.jsx)("img",{className:"card__calaver",src:h,alt:"Calaver Rick",width:"20px"}):""})]})};var O=function(e){return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("label",{htmlFor:"search",className:"form__label",children:"Buscador"}),Object(d.jsx)("input",{type:"text",id:"search",name:"search",className:"form__input",placeholder:"Nombre del personaje",value:e.searchName,onChange:e.handleSearchName})]})};var x=function(e){return Object(d.jsx)("form",{className:"form",action:"",children:Object(d.jsx)(O,{searchName:e.searchName,handleSearchName:e.handleSearchName})})};c(31);var p=function(){return Object(d.jsx)("header",{className:"header",children:Object(d.jsx)("img",{className:"header__img",src:"https://help.redbubble.com/hc/article_attachments/360002309526/Rick_and_Morty_-_logo__English_.png",alt:"Rick and Morty"})})};c(32);var f=function(){return Object(d.jsxs)("footer",{className:"footer",children:[Object(d.jsx)("p",{className:"copy",children:"\xa9 Rick and Morty 2021"}),Object(d.jsxs)("small",{children:["Hecho con ritmo ",Object(d.jsx)("span",{children:"\ud83e\udd18"})," por Moni Lamas"]})]})};var g=function(){var e=Object(t.useState)([]),a=Object(i.a)(e,2),c=a[0],r=a[1],s=Object(t.useState)(""),n=Object(i.a)(s,2),h=n[0],m=n[1];Object(t.useEffect)((function(){j.get("characters",[]).length>0?r(j.get("characters",[])):o().then((function(e){r(e),j.set("characters",e)}))}),[]);var O=Object(l.f)("/characterData/:id"),g=null!==O?O.params.id:"",_=c.find((function(e){return e.id===parseInt(g)})),N=c.filter((function(e){return e.name.toLocaleLowerCase().includes(h.toLocaleLowerCase())}));return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(p,{}),Object(d.jsxs)(l.c,{children:[Object(d.jsx)(l.a,{path:"/",exact:!0,children:Object(d.jsxs)("main",{className:"container",children:[Object(d.jsx)(x,{searchName:h,handleSearchName:function(e){e.preventDefault(),m(e.currentTarget.value)}}),Object(d.jsx)("section",{className:"list",children:Object(d.jsx)(u,{data:N})})]})}),Object(d.jsx)(l.a,{path:"/characterData/:id",children:Object(d.jsx)("section",{children:Object(d.jsx)(b,{character:_})})}),Object(d.jsx)(l.a,{children:Object(d.jsx)("section",{children:"Oh! P\xe1gina equivocada"})})]}),Object(d.jsx)(f,{})]})};s.a.render(Object(d.jsx)(n.a,{children:Object(d.jsx)(g,{})}),document.getElementById("root"))}},[[33,1,2]]]);
//# sourceMappingURL=main.325fc48e.chunk.js.map