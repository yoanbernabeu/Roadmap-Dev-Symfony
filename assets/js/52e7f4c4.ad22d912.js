"use strict";(self.webpackChunkroadmap_symfony=self.webpackChunkroadmap_symfony||[]).push([[9601],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return d}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),l=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},c=function(e){var t=l(e.components);return n.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=l(r),d=o,f=m["".concat(u,".").concat(d)]||m[d]||p[d]||a;return r?n.createElement(f,s(s({ref:t},c),{},{components:r})):n.createElement(f,s({ref:t},c))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,s=new Array(a);s[0]=m;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var l=2;l<a;l++)s[l]=r[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},6894:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return i},contentTitle:function(){return u},metadata:function(){return l},toc:function(){return c},default:function(){return m}});var n=r(7462),o=r(3366),a=(r(7294),r(3905)),s=["components"],i={sidebar_position:3},u="Les protocole DHCP et DNS",l={unversionedId:"Culture-generale-en-informatique/Les-bases-des-reseaux/dhcp-dns",id:"Culture-generale-en-informatique/Les-bases-des-reseaux/dhcp-dns",isDocsHomePage:!1,title:"Les protocole DHCP et DNS",description:"* DHCP",source:"@site/docs/01-Culture-generale-en-informatique/01-Les-bases-des-reseaux/03-dhcp-dns.md",sourceDirName:"01-Culture-generale-en-informatique/01-Les-bases-des-reseaux",slug:"/Culture-generale-en-informatique/Les-bases-des-reseaux/dhcp-dns",permalink:"/Roadmap-Dev-Symfony/docs/Culture-generale-en-informatique/Les-bases-des-reseaux/dhcp-dns",editUrl:"https://github.com/yoanbernabeu/Roadmap-Dev-Symfony/edit/main/docs/01-Culture-generale-en-informatique/01-Les-bases-des-reseaux/03-dhcp-dns.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"TCP/IP",permalink:"/Roadmap-Dev-Symfony/docs/Culture-generale-en-informatique/Les-bases-des-reseaux/tcp-ip"},next:{title:"Client-Serveur",permalink:"/Roadmap-Dev-Symfony/docs/Culture-generale-en-informatique/Les-bases-des-reseaux/client-serveur"}},c=[{value:"Ressources",id:"ressources",children:[],level:2}],p={toc:c};function m(e){var t=e.components,r=(0,o.Z)(e,s);return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"les-protocole-dhcp-et-dns"},"Les protocole DHCP et DNS"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"DHCP")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Dynamic Host Configuration Protocol (DHCP, protocole de configuration dynamique des h\xf4tes) est un protocole r\xe9seau dont le r\xf4le est d\u2019assurer la configuration automatique des param\xe8tres IP d\u2019une station ou d'une machine, notamment en lui attribuant automatiquement une adresse IP et un masque de sous-r\xe9seau. DHCP peut aussi configurer l\u2019adresse de la passerelle par d\xe9faut, des serveurs de noms DNS et des serveurs de noms NBNS (connus sous le nom de serveurs WINS sur les r\xe9seaux de la soci\xe9t\xe9 Microsoft)."),(0,a.kt)("p",{parentName:"blockquote"},"-- ",(0,a.kt)("cite",null,(0,a.kt)("a",{parentName:"p",href:"https://fr.wikipedia.org/wiki/Dynamic_Host_Configuration_Protocol"},"Wikipedia")))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"DNS")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Le Domain Name System, g\xe9n\xe9ralement abr\xe9g\xe9 DNS, qu'on peut traduire en \xab syst\xe8me de noms de domaine \xbb, est le service informatique distribu\xe9 utilis\xe9 pour traduire les noms de domaine Internet en adresse IP ou autres enregistrements. En fournissant d\xe8s les premi\xe8res ann\xe9es d'Internet, autour de 1985, un service distribu\xe9 de r\xe9solution de noms, le DNS a \xe9t\xe9 un composant essentiel du d\xe9veloppement du r\xe9seau."),(0,a.kt)("p",{parentName:"blockquote"},"-- ",(0,a.kt)("cite",null,(0,a.kt)("a",{parentName:"p",href:"https://fr.wikipedia.org/wiki/Domain_Name_System"},"Wikipedia")))),(0,a.kt)("h2",{id:"ressources"},"Ressources"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"https://www.commentcamarche.net/contents/518-dns-systeme-de-noms-de-domaine"},"Texte - DNS (Syst\xe8me de noms de domaine) - Comment \xc7a Marche"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"https://openclassrooms.com/fr/courses/857447-apprenez-le-fonctionnement-des-reseaux-tcp-ip/857163-le-service-dns"},"Texte - Le service DNS - OpenClassrooms"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"https://www.commentcamarche.net/contents/517-le-protocole-dhcp"},"Texte - Le protocole DHCP - Comment \xc7a Marche"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"https://openclassrooms.com/fr/courses/857447-apprenez-le-fonctionnement-des-reseaux-tcp-ip/856923-le-service-dhcp"},"Texte - Le service DHCP - OpenClassrooms")))))}m.isMDXComponent=!0}}]);