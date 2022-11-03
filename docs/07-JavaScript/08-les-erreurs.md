---
sidebar_position: 7
---

# La gestion des erreurs

Lorsque l'on écrit un code, celui-ci peut parfois générer des erreurs. On peut aussi vouloir générer soi-même une erreur. On appelle ça des exceptions. 

Pour générer une exception, on utilise le mot-clef ```throw``` et l'objet ```Error```. On écrira par exemple : 

```js
if(age < 18) {
    throw new Error('Vous devez être majeur')
}

```

On peut capturer une exception en utilsant le bloc ```try...catch```.

```js
try {
    // code qui peut renvoyer des erreurs
} catch (e) {
    // code qui sera éxécuté si il y a une erreur
}
```

 ## Ressources

* [Apprendre à gérer les erreurs par Grafikart](https://grafikart.fr/tutoriels/class-tp-2063#autoplay)