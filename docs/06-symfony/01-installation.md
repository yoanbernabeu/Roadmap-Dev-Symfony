---
sidebar_position: 1
---

# Installation

Pour pouvoir installer Symfony, il vous faut au minimum deux choses : ```PHP``` et ```Composer```. Composer va servir à installer Symfony et à gérer les dépendances. Pour vérifier que vous êtes prêt à installer Symfony, tapez les deux commandes suivantes : 

```
php -v
```
Cette commmande vous donne la version de PHP. Pour installer la dernière version de Symfony, vous devez avoir au minimum la version 8.0 de PHP.

```
php -V
```
Cette commmande vous donne la version de Composer.

Si les deux commandes fonctionnent sans message d'erreur, vous êtes prêt à installer Symfony.

Bien qu'il soit possible d'installer Symfony directement avec Composer, il est recommandé d'utiliser ```Symnfony CLI```. Cet exécutable va permettre d'installer Symfony, mais également d'utiliser un serveur interne pour le développement, installer un certificat auto-signé pour gérer le HTTPS, utiliser plus facilement les commandes Symfony, etc.

Pour le télécharger, rendez-vous [ici](https://symfony.com/download). Une fois que l'outil est installé, vérifiez que la commande suivante fonctionne.

```
symfony -v
```

Vous pouvez maintenant installer un projet Symfony en tapant la commande suivante :

```
symfony new nom_du_projet
```

Cette commande installera un projet Symfony avec juste le minimum requis. Si vous souhaitez installer un projet de type application Web, avec les principaux composants disponibles, tapez la commande suivante : 

```
symfony new --webapp nom_du_projet
```