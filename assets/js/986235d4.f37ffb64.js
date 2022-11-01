"use strict";(self.webpackChunkroadmap_symfony=self.webpackChunkroadmap_symfony||[]).push([[7021],{3905:function(e,n,r){r.d(n,{Zo:function(){return u},kt:function(){return m}});var t=r(7294);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function l(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function o(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?l(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function s(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},l=Object.keys(e);for(t=0;t<l.length;t++)r=l[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)r=l[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=t.createContext({}),p=function(e){var n=t.useContext(i),r=n;return e&&(r="function"==typeof e?e(n):o(o({},n),e)),r},u=function(e){var n=p(e.components);return t.createElement(i.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},d=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=p(r),m=a,v=d["".concat(i,".").concat(m)]||d[m]||c[m]||l;return r?t.createElement(v,o(o({ref:n},u),{},{components:r})):t.createElement(v,o({ref:n},u))}));function m(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=d;var s={};for(var i in n)hasOwnProperty.call(n,i)&&(s[i]=n[i]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var p=2;p<l;p++)o[p]=r[p];return t.createElement.apply(null,o)}return t.createElement.apply(null,r)}d.displayName="MDXCreateElement"},1622:function(e,n,r){r.r(n),r.d(n,{frontMatter:function(){return s},contentTitle:function(){return i},metadata:function(){return p},toc:function(){return u},default:function(){return d}});var t=r(7462),a=r(3366),l=(r(7294),r(3905)),o=["components"],s={sidebar_position:1},i="Les variables",p={unversionedId:"JavaScript/les-variables",id:"JavaScript/les-variables",isDocsHomePage:!1,title:"Les variables",description:"En JavaScript comme dans presque tous les langages de programmation, le concept des variables est incontournable.",source:"@site/docs/07-JavaScript/02-les-variables.md",sourceDirName:"07-JavaScript",slug:"/JavaScript/les-variables",permalink:"/Roadmap-Dev-Symfony/docs/JavaScript/les-variables",editUrl:"https://github.com/yoanbernabeu/Roadmap-Dev-Symfony/edit/main/docs/07-JavaScript/02-les-variables.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/Roadmap-Dev-Symfony/docs/JavaScript/introduction"},next:{title:"Les conditions",permalink:"/Roadmap-Dev-Symfony/docs/JavaScript/les-conditions"}},u=[{value:"Ressources",id:"ressources",children:[],level:2}],c={toc:u};function d(e){var n=e.components,r=(0,a.Z)(e,o);return(0,l.kt)("wrapper",(0,t.Z)({},c,r,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"les-variables"},"Les variables"),(0,l.kt)("p",null,"En JavaScript comme dans presque tous les langages de programmation, le concept des variables est incontournable."),(0,l.kt)("p",null,"Les variables sont des sortes de boites dans lesquelles on va ranger des donn\xe9es. Elle peuvent venir de celui qui \xe9crit le programme ou de celui qui l'utilise."),(0,l.kt)("p",null,"Il existe deux mani\xe8res de d\xe9clarer des variables en JavaScript. On peut utiliser le mot-cl\xe9 ",(0,l.kt)("inlineCode",{parentName:"p"},"const")," si on sait que le contenu de la variable ne changera pas (dans ce cas c'est une constante) ou ",(0,l.kt)("inlineCode",{parentName:"p"},"let")," si le contenu est amen\xe9 \xe0 changer dans le temps."),(0,l.kt)("p",null,"Pour d\xe9clarer une variable, on \xe9crit le mot-cl\xe9 ",(0,l.kt)("inlineCode",{parentName:"p"},"const")," ou ",(0,l.kt)("inlineCode",{parentName:"p"},"let"),", suivi d'un signe \xe9gal, suivi de la valeur qu'on souhaite ranger dans cette variable."),(0,l.kt)("p",null,"Par exemple : "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"const PI = 3.141592\n\nlet age = 32\n")),(0,l.kt)("p",null,"Dans une variable, on peut ranger diff\xe9rents types de donn\xe9es :"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"des nombres entiers")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"des nombres r\xe9els")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"des valeurs bool\xe9enes (vrai ou faux)")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"des cha\xeenes de caract\xe8res")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"des tableaux")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"des objets"),(0,l.kt)("p",{parentName:"li"},"Si une variable a \xe9t\xe9 d\xe9clar\xe9e mais ne contient pas de valeur, la valeur qui sera retourn\xe9e sera de type ",(0,l.kt)("inlineCode",{parentName:"p"},"undefined"),". On peut aussi d\xe9clarer une valeur nulle, avec le type ",(0,l.kt)("inlineCode",{parentName:"p"},"null"),"."),(0,l.kt)("p",{parentName:"li"},"Les tableaux sont des collections de donn\xe9es ou de variables. Ils peuvent contenir tous les types de donn\xe9es, ou m\xeame un mix des types. Ils s'\xe9crivent entre crochets, avec les donn\xe9es s\xe9par\xe9es par une virgule. Un tableau peut contenir d'autres tableaux. Par exemple :"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"const numbers = [2, 4, 6, 8]\n\nconst mixed = ['texte', 2, true]\n\nconst array_in_array = [[0, 1], [2, 3]]\n")),(0,l.kt)("p",null,"Les objets sont une fa\xe7on de repr\xe9senter un objet abstrait qui dispose de propri\xe9t\xe9s, chacune ayant une valeur. Ils s'\xe9crivent entre accolades, avec des couples proprit\xe9/valeur s\xe9par\xe9s par des virgules. On s\xe9pare la proprit\xe9 de la valeur par un signe deux points. Par exemple :"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"const person = {\n    first_name : 'John',\n    last_name : 'Doe',\n    age : 32\n}\n")),(0,l.kt)("p",null,"On pourra r\xe9cuperer la valeur d'une propri\xe9t\xe9 en utilisant le symbole point sur l'objet. Par exemple,  ",(0,l.kt)("inlineCode",{parentName:"p"},"person.age")," renverra 32."),(0,l.kt)("h2",{id:"ressources"},"Ressources"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://grafikart.fr/tutoriels/variables-2055#autoplay"},"Apprendre \xe0 g\xe9rer les variables par Grafikart"))))}d.isMDXComponent=!0}}]);