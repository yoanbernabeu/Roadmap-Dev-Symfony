---
sidebar_position: 4
---

# Les fonctions

Les fonctions permettent d'encapsuler du code pour pouvoir le réutiliser facilement. On peut appeller une fonction soi-même ou bien la déclencher lorsqu'un qu'un évênement arrive.

Une fonction peut prendre en entrée des paramètres que l'on va utiliser dans le contenu de la fonction. Elle peut aussi retourner une valeur.

Prenons un example :

```
function sayHello(prenom) {
    return 'Bonjour ' + prenom
}
```

Cette fonction permet de renvoyer une chaine de caractère qui dit ```bonjour``` suivi d'un prénom que l'on a passé en paramètre. Pour l'appeler, on écrira par exemple ```sayHello('Bob')```.

On peut aussi stocker la fonction dans une variable. Par exemple :


```
const sayHello = function (prenom) {
    return 'Bonjour ' + prenom
}
```

On l'appellera de la même manière.

On peut aussi utiliser ce qu'on appelle les fonctions fléchées. 

```
const sayHello = (prenom) => {
    return 'Bonjour ' + prenom
}
```

Si la fonction ne comporte qu'une seule instruction de retour, on peut l'écrire sur une seule ligne en enlevant les accolades et le mot-clé ```return```.

```
const sayHello = (prenom) => 'Bonjour ' + prenom
```

 ## Ressources

* [Apprendre à gérer les fonctions par Grafikart](https://grafikart.fr/tutoriels/fonctions-2059#autoplay)