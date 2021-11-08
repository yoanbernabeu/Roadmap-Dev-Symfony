---
sidebar_position: 1
---

# Réalisation

## Introduction au web

Le terme « **web** » désigne le service internet permettant de naviguer à travers des pages web. Le protocole utilisé pour ce type de communication est le protocole HTTP (_HyperText Transfer Protocol_), ce qui explique le fait que vous saisissiez des URL commençant par _http://_. Le protocole HTTP en est actuellement à sa version 3 (spécifié par le consortium W3C). Désormais, le protocole HTTPS (protocole HTTP sécurisé) est de plus en plus utilisé avec l'utilisation de systèmes de commerce électronique, car il s'agit d'un protocole sécurisé permettant de chiffrer les requêtes échangées entre le navigateur et le serveur.

Aujourd'hui, le protocole WAP (_Wireless Application Protocol_) permet à un téléphone mobile compatible WAP de communiquer avec la passerelle WAP de l'opérateur de téléphonie mobile. Les communications seront ensuite converties selon le protocole HTTP par la passerelle. La dernière version du protocole WAP spécifiée par le WAP Forum (l'autorité chargée de définir le standard WAP) est la version 1.1 (en début d'année 2001).


## Le HTML et les pages statiques

Le standard désormais établi pour la diffusion de documents sur le web est le langage HTML (_HyperText Markup Language_). Le langage HTML permet de définir la présentation du document ainsi que les liens hypertextes vers d'autres documents à l'aide de balises de formatage.

Le W3C, l'organisme chargé de standardiser les normes relatives à internet a actuellement (début 2001) spécifié la version HTML 4.01.

Le DHTML (_Dynamic HyperText Markup Language_) dont on entend souvent parler n'est pas un langage à proprement parler. Il s'agit en réalité d'un ensemble de langages complémentaires au HTML et permettant de rendre une page web plus dynamique. Ces langages sont :

Le HTML 4.0 Le JavaScript, permettant d'effectuer des opérations sur le navigateur du client

Le DOM (_Document Object Model_) définissant une arborescence d'objets représentant la structure du document. Cela permet notamment de pouvoir manipuler l'ensemble des objets contenus dans le document.

Les feuilles de style (CSS - _Cascading StyleSheets_). Les feuilles de style permettent de définir de façon annexe au document les styles de chaque balise


## Les pages web dynamiques
    

Les pages web statiques, c'est-à-dire un simple fichier texte contenant du code HTML, sont très pratiques pour créer un site contenant quelques dizaines de pages mais possèdent leur limites :

Une maintenance difficile due à l'obligation de modifier manuellement chacune des pages (notamment dans le cas où toutes les pages possèdent un même menu)

L’impossibilité de renvoyer une page personnalisée selon le visiteur

L’impossibilité de créer une page dynamiquement selon les entrées d'une base de données

C'est pourquoi il a été nécessaire de mettre au point une solution permettant de générer des pages web du côté du serveur. Ainsi de nombreuses solutions mettant en oeuvre un langage de script sur le serveur ont été mises au point :

La première, appelée CGI (_Common Gateway Interface_) consistait à interpréter des programmes (généralement écrits en perl ou en langage C), puis de leur faire renvoyer un contenu compatible avec le protocole HTTP.

Le langage ASP (_Active Server Pages_) de Microsoft a permis de simplifier l'écriture de tels scripts en manipulant des objets en VB Script.

Le langage PHP (_Hypertext preprocessor_) emploie son propre langage (dérivé du C++ et de Perl) et permet de nombreuses fonctionnalités (équivalentes à celles de la technologie ASP).

Le langage JSP (Java Server Pages) est la plus récente parmi ces technologies. Elle permet d'utiliser toute la puissance de Java pour créer des pages web dynamiques.


## Outils du web (Flux RSS) 
    
Un Flux RSS (Really Simple Syndication), désigne un fichier texte au format XML structuré (titre, date, lien,…etc.) utilisé pour la syndication de contenu. Il permet d’extraire d’un site Web ou d’un blog du contenu régulièrement mis à jour, en d’autres termes, il fournit en temps réel toutes les nouveautés d’un site et qu’on peut récupérer automatiquement dans sa messagerie ou sur un autre site.
