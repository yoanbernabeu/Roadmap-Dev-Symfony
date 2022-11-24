---
sidebar_position: 2
---

# Les conditions

En JavaScript comme dans presque tous les langages de programmation, le concept des conditions est incontournable. Il consiste à pouvoir gérer le cas où l'on souhaite qu'un bout de code soit exécuté si une condition est remplie.

Pour écrire une condition, on utilise le mot-clé ```if```, suivi entre parenthèses de la condition, puis d'un bloc de code entouré par des accolades.

Exemple :

```js
if(age >= 18) {
    console.log('vous êtes majeur')
}
```

Ici, si la valeur de la variable ```age``` est supérieure ou égale )à 18, on écrit un message dans la console.

On peut éventuellement ajouter un autre bout de code qui sera exécuté si la condition n'est pas remplie.

Exemple :

```js
if(age >= 18) {
    console.log('vous êtes majeur')
} else {
    console.log('vous êtes mineur')
}
```

Dans la condition, on utilise des opérateurs de comparaison, comme ```===``` pour une égalité stricte, ```>``` ou ```<``` pour supérieur ou inférieur, ```>=``` ou ```<=``` pour supérieur ou égal et inférieur ou égal, ou encore ```!==``` pour une différence.

On peut également utiliser une version raccourcie, qu'on appelle une ternaire pour écrire une condition sur une seule ligne.

Exemple :

```js
const phrase = 'Vous êtes ' + (age >= 18 ? 'majeur' : 'mineur')
```

 ## Ressources

* [Apprendre à gérer les conditions par Grafikart](https://grafikart.fr/tutoriels/conditions-2056#autoplay)