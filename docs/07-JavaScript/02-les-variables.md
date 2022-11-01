---
sidebar_position: 1
---

# Les variables

En JavaScript comme dans presque tous les langages de programmation, le concept des variables est incontournable.

Les variables sont des sortes de boites dans lesquelles on va ranger des données. Elle peuvent venir de celui qui écrit le programme ou de celui qui l'utilise.

Il existe deux manières de déclarer des variables en JavaScript. On peut utiliser le mot-clé ```const``` si on sait que le contenu de la variable ne changera pas (dans ce cas c'est une constante) ou ```let``` si le contenu est amené à changer dans le temps.

Pour déclarer une variable, on écrit le mot-clé ```const``` ou ```let```, suivi d'un signe égal, suivi de la valeur qu'on souhaite ranger dans cette variable.

Par exemple : 

```
const PI = 3.141592

let age = 32
```

Dans une variable, on peut ranger différents types de données :
 
 - des nombres entiers
 - des nombres réels
 - des valeurs booléenes (vrai ou faux)
 - des chaînes de caractères
 - des tableaux
 - des objets

 Si une variable a été déclarée mais ne contient pas de valeur, la valeur qui sera retournée sera de type ```undefined```. On peut aussi déclarer une valeur nulle, avec le type ```null```.

 Les tableaux sont des collections de données ou de variables. Ils peuvent contenir tous les types de données, ou même un mix des types. Ils s'écrivent entre crochets, avec les données séparées par une virgule. Un tableau peut contenir d'autres tableaux. Par exemple :

```
const numbers = [2, 4, 6, 8]

const mixed = ['texte', 2, true]

const array_in_array = [[0, 1], [2, 3]]
```

Les objets sont une façon de représenter un objet abstrait qui dispose de propriétés, chacune ayant une valeur. Ils s'écrivent entre accolades, avec des couples proprité/valeur séparés par des virgules. On sépare la proprité de la valeur par un signe deux points. Par exemple :

```
const person = {
    first_name : 'John',
    last_name : 'Doe',
    age : 32
}
```

On pourra récuperer la valeur d'une propriété en utilisant le symbole point sur l'objet. Par exemple,  ```person.age``` renverra 32.

## Ressources

* [Apprendre à gérer les variables par Grafikart](https://grafikart.fr/tutoriels/variables-2055#autoplay)