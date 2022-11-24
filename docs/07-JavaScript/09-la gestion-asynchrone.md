---
sidebar_position: 8
---

# La gestion de l'asynchrone

Tous les exemples que l'on a vu jusqu'à présent fonctionnaient de manière synchrone, c'est à dire qu'il étaient exécutés à la suite les uns des autres. En JavaScript, on peut aussi faire de l'asynchrone, à savoir écrire du code qui sera exécuté plus tard.

Il existe pour cela deux méthodes : les callback et les promesses. 

#### Callback

Les callback consistent en l'écriture d'une fonction qui prend elle même une fonction de retour, qui sera exécutée quand on le souhaite. 

Imaginons que l'on souhaite exécuté une fonction qui attendrait 2 secondes puis retournerait un message. On pourrait écrire les choses comme suit : 

```js
const wait = (duration, cb) => {
    setTimeOut(() => {
        cb()
    }, duration)
}

console.log('départ')

wait(2000, () => {
    console.log('terminé')
})

console.log('attente')
```

Ce code va d'abord écrire ```départ```, puis ```attente``` et ```terminé``` au bout de deux secondes.

Mais si on doit gérer plusieurs callback imbriqués, on va tomber dans ce qu'on appelle le callbak hell.

#### Promesses

Les promesses sont une autre façon de gérer le code asynchrone. Elle s'écrivent de la façon suivante :

```js
const wait = (duration) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(duration), duration)
    })
}
```

Ici, la fonction ```wait``` retourne une promesse, qui prend en paramètre deux callback. ```resolve``` sera appelé en cas de succès et ```reject``` en cas d'échec. On pourra alors apeller la fonction ```wait``` comme suit : 

```js
wait(2000)
    .then((duration) => {
        console.log(`j'ai attendu ${duration}ms`)
    })
    .catch(() => {
        console.log(`la promesse a été rejetée`)
    })
```

L'avantage sur les callback est que si on renvoie une nouvelle promesse dans un ```then``` on peut alors enchainer les méthodes.

```js
wait(2000)
    .then((duration) => {
        console.log(`j'ai attendu ${duration}ms`)
        return wait(3000)
    })
    .then((duration) => {
        console.log(`j'ai attendu ${duration}ms`)
    })
```

On peut aussi écrire les choses plus simplement avec les mots-clef ```async``` et ```await```. On déclarre une fonction comme asynchrone avec le mot-clef ```async```. Dans ce cas là, son retour sera une promesse. L'avantage, c'est qu'à l'interieur de cette fonction, on peut appeller une fonction qui retourne une promesse avec le mot clé ```await```. Le code qui suit attendra la résolution de la promesse pour être exécuté.

```js
const wait = (duration) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(duration), duration)
    })
}

const main = async () => {
    console.log('départ')
    await wait(2000)
    console.log('fin')
}

main()
```

Ce code va d'abord écrire ```départ```, puis ```terminé``` au bout de deux secondes.

 ## Ressources

* [Apprendre à gérer les promesses par Grafikart](https://grafikart.fr/tutoriels/javascript-promise-2067#autoplay)