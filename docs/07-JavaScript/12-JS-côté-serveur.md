---
sidebar_position: 11
---

# JavaScript côté serveur

Si le JavaScript a d'abord été pensé pour fonctionner dans un navigateur, on peut aujourd'hui le faire tourner **côté serveur**. En effet, des outils comme **NodeJS**, **Deno** ou **Bun** intégrent un moteur JavaScript permettant de l'utiliseur côté backend. Nous allons nous concentrer sur NodeJS.

NodeJS est un outil qu'on peut installer sur sa machine ou sur un serveur. Il fonctionne sous **Linux**, **MacOS** ou **Windows**. 

Il permet de faire tourner des programmes écrits en JavaScript, à l'exception des fonctionnalités réservées aux navigateurs (manipulation du DOM, API de localisation, accès à la Webcam, etc.).

Mais il rajoute des fonctionnalités spécifiques pour les usages côté serveur, comme la possibilité de lire ou d'écrire des fichiers, la possibilité d'écrire des serveurs Web ou encore la possibilité de faire du streaming audio ou vidéo.

Par exemple, pour écrire dans un fichier, on pourra écrire quelque chose comme ça :

```
const fs = require('fs');

fs.writeFile('/Users/joe/test.txt', 'Hello World', err => {
  if (err) {
    console.error(err);
  }
});
```

Ce code créra un fichier ```test.txt``` et écrira dedans ```Hello World```.

Pour exécuter ce code, qu'on imagine écrit dans un fichier ```hello.js```, on tapera la commande ```node hello.js```.

NodeJS vient également avec un outil qui s'appelle **NPM**, qui est un gestionnaire de dépendance. En effet, il existe des dizaines de milliers de librairies JS écrites pour Node ou pour le navigateur.

Imaginons par exemple que l'on ait besoin de générer des slug à partir de chaine de caractères. On peut se rendre sur [npmjs.com](https://www.npmjs.com/) et chercher ```slug```. On trouvera alors par exemple la librairie ```slugify```. 

Pour l'installer, on tapera en ligne de commande ```npm install slugify```. Cela téléchargera la librairie sur notre système. On pourra alors l'utiliser dans un fichier JavaScript comme ceci :

```
const slugify = require('slugify')

console.log(slugify('un super article'))
```

Cela écrira ```un-super-article``` dans la console.

 ## Ressources

* [Apprendre NodeJS par Grafikart](https://grafikart.fr/formations/nodejs)
 
