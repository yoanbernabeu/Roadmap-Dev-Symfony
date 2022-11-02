---
sidebar_position: 0
---

# Introduction
 a compléter

Élément d'histoire
-------------------

* 1995 : PHP/FI (Personal
  Home Page Tools / Forms Interpreter) est créé en  par Rasmus Lerdorf. C'est à la base une bibliothèque de scripts fonctionnant sous PERL, puis avec une implémentation en C.
* 1997 : PHP 2.0, déjà plusieurs milliers d’utilisateurs.
* 1998 : PHP 3.0, refonte de PHP/FI 2.0 par Andi Gutsman et Zeev Suraski, changement du nom pour PHP Hypertext
  Preprocessor.
* 2000 : PHP 4.0,: nouveau moteur interne : le Zend Engine
* 2003 : PHP 5.0, avec Zend Engine 2 et un nouveau système interne de la gestion de la <attr title="Programmation orientée objets">POO</attr>, de nouvelles fonctionnalités concernant les `array` ou encore l'extension `iconv`. 
* 2005 : Sortie de Symfony 1.
* 2005 : PHP 5.1, l'extension <attr title="PHP Data Objects">PDO</attr> (pour la gestion de bases de données) est maintenant native.
* 2009 : PHP 5.2, Correction de bugs, l'extension _filter_ est désormais native.
* 2009 : PHP 5.3, Les espaces de noms (_namespaces_), fonctions anonymes (_Closures_), Phar, résolution statique à la volée (_late static binding_), extension _fileinfo_, ajout d'un _garbage collector_ pour les références cycliques, etc.
* 2010 : PHP 5.3.3, sortie de PHP-FPM, permettant d'utiliser PHP derrière un proxy FastCGI pour simplifier l'architecture d'installation de PHP sur un serveur (auparavant il fallait compiler un SAPI particulier de PHP pour l'embarquer dans un serveur spécifique comme Apache).
* 2011 : Sortie de Symfony 2.0, réécriture de Symfony 1 avec une architecture orientée composants.
* 2012 : Sortie de [Composer](https://getcomposer.org/).
* 2012 : PHP 5.4, ajout des traits, syntaxe _array_ raccourcie via `[]` au lieu d'`array()`, serveur web natif via la commande CLI `php -S`.
* 2013 : PHP 5.5, mot-clé _finally_, générateurs, l'extension `opcache` est maintenant native, dépréciation des anciennes fonctions `mysql_...()`.
* 2014 : PHP 5.6, ajout de la gestion de'arguments variadiques via l'opérateur `...` (_spread operator_) et du "dépaquetage" d'un tableau en arguments (via le même opérateur), import de fonction dans des espaces de noms, le debugger `phpdbg` est maintenant natif, opérateur d'exponentiation `**`.
* 2015 : PHP 7.0, ajout de l'opérateur de comparaison combinée `<=>` (_spaceship operator_), de l'opérateur de coalescence nulle `??` (_null coalescing operator_), possibilité de déclarer des types scalaires et des types de retour de fonctions, classes anonymes via la syntaxe `$obj = new class() implements MyCustomInterface { /* ... */ }`.
* 2016 : PHP 7.1, ajout du type "nullable" via le préfixe `?`, du pseudo-type `iterable`, du type de retour `void`.
* 2017 : PHP 7.2, ajout du pseudo-type `object`, extension `sodium` (pour la cryptographie) désormais native, amélioration du système de typage et d'héritage (_type widening_ et _abstract method overriding_).
* 2018 : PHP 7.3, Ajout des fonctions `is_countable()`, `array_key_first()` et `array_key_last()`, amélioration du support de l'unicode de l'extension `mbstring`,  
* 2019 : PHP 7.4, support des types dans les propriétés de classes, fonctions anonymes courtes via la syntaxe `fn() => ...`, meilleure gestion de la covariance des types de retour et de contravariance des arguments, opérateur d'assignation par coalescence nulle `??=`, meilleure lecture des nombres via l'ajout de `_` à l'intérieur de valeur numériques natives.
* 2020 : PHP 8.0, appel d'arguments nommés via l'opérateur `:` suivi du nom de l'argument, initialisation de propriétés depuis constructeur, opérateur d'expression `match`, types d'union (syntaxe `TypeA|TypeB`), opérateur _nullsafe_ `?->`, support natif d'annotations via les _attributes_ et la syntaxe `#[MyAttribute]`.
* 2021 : PHP 8.1, préfixe `0o` pour les nombres littéraux en base octale, dépaquetage de clés dans un tableau, arguments nommés placés après un argument "dépaqueté", ajout des structures `enum`, support de l'asynchrone avec les `fibers`, propriétés non modifiables via le mot-clé `readonly`, types d'intersection via la syntaxe `TypeA&TypeB`.
* 2022 : PHP 8.2, `readonly` peut être utilisé pour des classes, dépréciation des propriétés de classe créées dynamiquement, extension `random` pour générer des nombres ou chaînes aléatoires, types de retour" spécifiques `null`, `false` et `true`, types normaux disjonctifs via une syntaxe du type `(TypeA&TypeB)|TypeC`, constantes autorisées dans les Traits, dépréciation de `utf8_encode()` et `utf8_decode()` au profit des fonctions similaires de l'extension `mbstring`, dépréciation de la syntaxe d'interpolation de chaînes de caractères `"${var}"` au profit de `"$var"` et `"{$var}"`.

PHP est un langage assez jeune.

**PHP/FI a été créé en 1995 par Rasmus Lerdordf:** à l’origine il s’agissait d’une bibliothèque
fonctionnant sous PERL que Rasmus avait développé pour son propre site web personnel (il voulait
savoir qui venait consulter son CV). PHP/FI signifiait Personal Home Page Tools / Forms Interpreter.
Petit à petit, la bibliothèque PERL s’est muée en une implémentation directe en C, afin d’augmenter
les performances et les possibilités.

En 1997, il y avait des milliers d’utilisateurs de PHP. PHP/FI 2.0 vit le jour en novembre 1997.
Andi Gutsman et Zeef Suraski, fondateurs de Zend, procédèrent à une refonte complète de PHP/FI 2.0:
le but était de pouvoir écrire des applications d’e-commerce plus importantes. Ils élaborèrent ainsi
PHP 3.0, que Rasmus rejoignit. La principale fonction de PHP 3.0 était justement la possibilité
d’être étendu par… de nouvelles fonctions: n’importe quel développeur pouvait créer ses propres
modules, les ajouter à PHP grâce à une API modulaire et les partager avec l’ensemble de la
communauté. PHP devint alors : **PHP Hypertext Preprocessor.**
La version 4.0 de PHP apparut en mai 2000. Andi et Zeev ont ici de nouveau totalement réécrit le
moteur de PHP, afin d’améliorer… ses performances. Depuis 2003, PHP en est à sa version 5.0. PHP 5 a
l’ambition d’être plus professionnel et plus simple. La programmation objet a fait ainsi son
apparition, grâce à un « nouveau moteur » PHP (Zend engine 2). Depuis PHP 7, la sortie d'une
release est régulière, chaque année sort une nouvelle version.


Principe de base.
-----------------

* A l’origine, un langage de script pour serveurs web
    * À l’origine, PHP était un langage de script conçu spécifiquement pour agir sur les serveurs
      web: il s’agit d’ajouter quelques lignes de PHP à une page HTML pour la rendre « dynamique »,
      c’est-à-dire que c’est le web serveur qui vient écrire du code HMTL dans la page.
* Actuellement: PHP 8.0 (16 novembre 2021).
    * Mais PHP a beaucoup évolué jusqu’à la version 5, qui est très complète, et qui ont fait de PHP
      une vraie plateforme de développement professionnelle.
* Licence opensource, avec communauté dynamique
    * PHP fonctionne en licence opensource: sa rediffusion, son utilisation et sa modification sont
      libres et gratuites. Le site officiel est http://www.php.net, la communauté des développeurs
      PHP est très dynamique: l’annonce d’une faille de sécurité implique généralement un correctif
      dans la journée.
* Langage interprété: langage intermédiaire (bytecode) créé à chaque exécution
    * PHP est un langage interprété: les scripts sont convertis en langage intermédiaire (bytecode)
      avant d’être exécuté. Mais ce code intermédiaire est recréé à chaque exécution et ne peut pas
      être diffusé. Il n’y a donc pas de « compilation ».
* Langage facile ? (Plus vraiment correcte).
    * **PHP** est un langage qui s’apprend **rapidement**. Cependant, **la maîtrise plus complète du
      langage est difficile.**

L’utilisation de PHP
********************

* Couplée à un web serveur
* Ligne de commande
* Application graphique (à vérifier)

Architecture
**************

* Souvent LAMP : Linux, Apache, MySQL, PHP
* Mais n’importe quel OS (Win, Unix/Linux…)‏
* D’autres web serveur (Nginx,IIS…)‏
* D’autres bases de données (SQLite, PostgreSQL, Oracle, SqlSrv)‏

L’utilisation principale du langage PHP reste le traitement et la création de pages web au sein d’un
serveur web. PHP apparaît alors comme une série de « scripts ». Il est cependant possible d’utiliser
PHP en dehors de tout serveur web :
On peut utiliser PHP en ligne de commande. Il faut faire appel à l’exécutable PHP. On peut utiliser
PHP comme une application graphique. II faut utiliser l’extension qui permet de produire une
application graphique traditionnelle, et on obtient ainsi une application « standalone ». Cette
extension est « GTK ».

L’architecture « LAMP » est emblématique du monde opensource et est souvent citée. PHP ne s’y réduit
pas, cependant. LAMP est utilisé pour : « Linux », « Apache », « MySQL », « PHP ». En effet, PHP
fonctionne sur de nombreux OS : il fonctionne sur sous Windows (toutes versions supérieures à Win95)
, sous Unix (Solaris), sous Linux, sous MacOS X, OpenBSD, FreeBSD… PHP peut être utilisé avec
Apache, mais il peut également être utilisé avec d’autres serveurs web (IIS, par exemple). Quant aux
bases de données, PHP 5 contient des connexions natives vers la plupart des bases de données (par
exemple, Microsoft SQL server, Oracle, PostgreSQL, MySQL, Sybase, SQLite, FilePro, Informix,
Interbase, mSQL, dBase, Empress…) PHP 5 propose même une base de données intégrée: SQLite. Depuis
PHP 5.1, l’extension PDO (PHP Data Object) permet même d’avoir une abstraction vis-à-vis des bases
données: pour gérer une nouvelle base de données, il suffit d’écrire le bon connecteur; les données
sont ensuite transmises à la « couche » PDO.

Quelques liens :
****************

**Site Officiel de PHP**
http://php.net

**Communauté francophone PHP :**

* http://developpez.com
* http://afup.org
* http://phpfrance.com
* http://fr.php.net

