"use strict";(self.webpackChunkroadmap_symfony=self.webpackChunkroadmap_symfony||[]).push([[1705],{3905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return m}});var l=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);n&&(l=l.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,l)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,l,a=function(e,n){if(null==e)return{};var t,l,a={},r=Object.keys(e);for(l=0;l<r.length;l++)t=r[l],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)t=r[l],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=l.createContext({}),u=function(e){var n=l.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},s=function(e){var n=u(e.components);return l.createElement(p.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return l.createElement(l.Fragment,{},n)}},d=l.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),d=u(t),m=a,h=d["".concat(p,".").concat(m)]||d[m]||c[m]||r;return t?l.createElement(h,i(i({ref:n},s),{},{components:t})):l.createElement(h,i({ref:n},s))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,i=new Array(r);i[0]=d;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var u=2;u<r;u++)i[u]=t[u];return l.createElement.apply(null,i)}return l.createElement.apply(null,t)}d.displayName="MDXCreateElement"},9846:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return o},contentTitle:function(){return p},metadata:function(){return u},toc:function(){return s},default:function(){return d}});var l=t(7462),a=t(3366),r=(t(7294),t(3905)),i=["components"],o={},p="Installation PHP",u={unversionedId:"php/Installation",id:"php/Installation",isDocsHomePage:!1,title:"Installation PHP",description:"Choix de plateforme :",source:"@site/docs/04-php/01-Installation.md",sourceDirName:"04-php",slug:"/php/Installation",permalink:"/Roadmap-Dev-Symfony/docs/php/Installation",editUrl:"https://github.com/yoanbernabeu/Roadmap-Dev-Symfony/edit/main/docs/04-php/01-Installation.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/Roadmap-Dev-Symfony/docs/php/introduction"},next:{title:"le langage php",permalink:"/Roadmap-Dev-Symfony/docs/php/xx-langage-php"}},s=[{value:"Choix de plateforme :",id:"choix-de-plateforme-",children:[],level:2},{value:"Installation de PHP",id:"installation-de-php",children:[],level:2},{value:"Installation manuelle de PHP pour Windows",id:"installation-manuelle-de-php-pour-windows",children:[],level:2},{value:"Installation Debian/Ubuntu/Mint...",id:"installation-debianubuntumint",children:[],level:2},{value:"Installation Fedora/Viperr",id:"installation-fedoraviperr",children:[],level:2},{value:"Installation Red-Hat/CentOs/Scientific Linux",id:"installation-red-hatcentosscientific-linux",children:[],level:2},{value:"Installation OSX",id:"installation-osx",children:[],level:2},{value:"Environnement de d\xe9veloppement",id:"environnement-de-d\xe9veloppement",children:[],level:2},{value:"Environnement de production",id:"environnement-de-production",children:[],level:2}],c={toc:s};function d(e){var n=e.components,t=(0,a.Z)(e,i);return(0,r.kt)("wrapper",(0,l.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"installation-php"},"Installation PHP"),(0,r.kt)("h2",{id:"choix-de-plateforme-"},"Choix de plateforme :"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Prendre la configuration \xab classique \xbb: PHP en mode client serveur, associ\xe9 \xe0 un serveur web"),(0,r.kt)("li",{parentName:"ul"},"Choisir un web serveur: ",(0,r.kt)("strong",{parentName:"li"},"Apache"),", Nginx, IIS...."),(0,r.kt)("li",{parentName:"ul"},"Choisir une plateforme syst\xe8me : Windows, Linux, OSX")),(0,r.kt)("h2",{id:"installation-de-php"},"Installation de PHP"),(0,r.kt)("p",null,"Deux mani\xe8res d\u2019installer PHP client-serveur orient\xe9 \xab web \xbb :"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Utiliser une plateforme \xab pr\xe9-install\xe9e \xbb, comme :",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"WAMP ",(0,r.kt)("a",{parentName:"li",href:"http://www.wampserver.com/"},"http://www.wampserver.com/")),(0,r.kt)("li",{parentName:"ul"},"XAMPP ",(0,r.kt)("a",{parentName:"li",href:"http://www.apachefriends.org/fr/xampp.html"},"http://www.apachefriends.org/fr/xampp.html")),(0,r.kt)("li",{parentName:"ul"},"Laragon ",(0,r.kt)("a",{parentName:"li",href:"http://www.laragon.org/"},"http://www.laragon.org/")," (le plus complet; Git, Terminal, MySQL, PHP, Apache,\nPhpMyAdmin, composer ...)"),(0,r.kt)("li",{parentName:"ul"},"Mamp ",(0,r.kt)("a",{parentName:"li",href:"https://www.mamp.info/en/downloads/"},"https://www.mamp.info/en/downloads/")," (OsX)")))),(0,r.kt)("p",null,"Cela repr\xe9sente \xe0 chaque fois un environement complet (serveur Web, PHP, Base de donn\xe9es)"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Installer les composants \xab manuellement \xbb, comme :",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"PHP"),(0,r.kt)("li",{parentName:"ul"},"Apache"),(0,r.kt)("li",{parentName:"ul"},"MySQL"),(0,r.kt)("li",{parentName:"ul"},"PhpMyAdmin"),(0,r.kt)("li",{parentName:"ul"},"Composer"),(0,r.kt)("li",{parentName:"ul"},"Git"),(0,r.kt)("li",{parentName:"ul"},"Terminal"),(0,r.kt)("li",{parentName:"ul"},"...")))),(0,r.kt)("h2",{id:"installation-manuelle-de-php-pour-windows"},"Installation manuelle de PHP pour Windows"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"T\xe9l\xe9charger la derni\xe8re version sur ",(0,r.kt)("a",{parentName:"li",href:"http://www.php.net"},"http://www.php.net")),(0,r.kt)("li",{parentName:"ul"},"PHP8.0 est disponible en fichier ZIP"),(0,r.kt)("li",{parentName:"ul"},"D\xe9compressez-le (souvent c:\\php",")","\u200f"),(0,r.kt)("li",{parentName:"ul"},"Rendez le fichier de configuration (php.ini) \xab accessible \xbb (PATH)\u200f"),(0,r.kt)("li",{parentName:"ul"},"Rendez le fichier php.exe \xab accessible \xbb via les variables d'environements.")),(0,r.kt)("p",null,".. image:: images/download.png"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Test d\u2019une installation PHP"),"\nEcrire un mini script et le sauver (phpinfo.php)"),(0,r.kt)("p",null,".. code-block:: php"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"    <?php\n    phpinfo();\n    ?>\n\n    \u200f\n")),(0,r.kt)("h2",{id:"installation-debianubuntumint"},"Installation Debian/Ubuntu/Mint..."),(0,r.kt)("p",null,".. code-block:: bash"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"sudo apt-get install php8.0\n")),(0,r.kt)("h2",{id:"installation-fedoraviperr"},"Installation Fedora/Viperr"),(0,r.kt)("p",null,"Apr\xe8s avoir install\xe9 les d\xe9p\xf4t de r\xe9mi"),(0,r.kt)("p",null,".. code-block:: bash"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"sudo dnf install php8.0\n")),(0,r.kt)("h2",{id:"installation-red-hatcentosscientific-linux"},"Installation Red-Hat/CentOs/Scientific Linux"),(0,r.kt)("p",null,"Apr\xe8s avoir install\xe9 les d\xe9p\xf4t de r\xe9mi"),(0,r.kt)("p",null,".. code-block:: bash"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"sudo yum install php8.0\n")),(0,r.kt)("h2",{id:"installation-osx"},"Installation OSX"),(0,r.kt)("p",null,"PHP est natif sur OSX."),(0,r.kt)("h2",{id:"environnement-de-d\xe9veloppement"},"Environnement de d\xe9veloppement"),(0,r.kt)("p",null,"PHP offre un environnement de d\xe9veloppement tr\xe8s facile \xe0 mettre en place gr\xe2ce \xe0 la commande :"),(0,r.kt)("p",null,".. code-block:: bash"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"php -S localhost:8080\n")),(0,r.kt)("h2",{id:"environnement-de-production"},"Environnement de production"),(0,r.kt)("p",null,"Toutes les installations d\xe9crite ci-dessus sont suffisantes pour une installation de PHP. Mais\ncelle-ci est limit\xe9e par les capacit\xe9s de votre syst\xe8me."),(0,r.kt)("p",null,"Pour \xeatre au plus proche des environements de production, il est recommand\xe9 d'utiliser des outils comme :"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Docker (Voire chapitre sur Docker)."),(0,r.kt)("li",{parentName:"ul"},"Vagrant (Voir chapitre sur Vagrant).")))}d.isMDXComponent=!0}}]);