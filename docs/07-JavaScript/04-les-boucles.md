---
sidebar_position: 3
---

# Les boucles

En JavaScript comme dans presque tous les langages de programmation, le concept des boucles est incontournable. 

Il consiste à pouvoir répeter une instruction ou un bloc de code autant de fois qu'on le désire ou tant qu'une condition est remplie ou non.

Il existe différents types de boucle en JavaScript :

- les boucles ```for```
- les boucles ```while```
- les boucles ```for in```
- les boucles ```for of```

#### Boucle for

Elle permet de répeter les choses un nombre défini de fois. Imaginons qu'on souhaite réaliser un compteur :

```js
for (let i = 1; i <= 5; i++) {
    console.log("compteur: " + i)
}
```

Dans ce code, on part avec ```i``` à 1. On indique qu'on continue tant que ```i``` est inférieur ou égal à 5. On explique ensuite qu'on va incrémenter ```i``` de 1 à chaque tour avec ```i++``` (on aurait pu écrire ```i = i + 1```). Au premier tour, la console va afficher ```1```, puis ```2``` au deuxième tour, et ainsi de suite jusqu'à ```5``` au dernier tour.

#### Boucle while

Elle permet de répeter les choses tant qu'une condition est remplie. En reprennant l'exemple de la boucle ```for```, cela donne :

```js
let i = 1 
while (i <= 5) {
    console.log("compteur: " + i)
    i++
}
```

On peut également remplacer le ```i++``` par ```i = i + 1```.


#### Boucle for in

Elle permet de parcourir les clefs d'un tableau ou les propriétés d'un objet.

```js
const person = { firstname: 'john', lastname: 'Doe', age: 32 };

for (const property in person) {
  console.log(property)
}
```

Cette boucle affichera d'abord ```firstname```, puis ```lastname``` puis ```age```.

#### Boucle for of

Elle permet de parcourir les éléments d'un tableau. Prenons un exemple : 

```js
const skills = ['HTML', 'CSS', 'PHP']
for (let skill in skills) {
    console.log(skill) 
}
```

Cette boucle affichera d'abord ```HTML```, puis ```CSS``` puis ```PHP```.

 ## Ressources

* [Apprendre à gérer les boucles par Grafikart](https://grafikart.fr/tutoriels/boucles-2058#autoplay)