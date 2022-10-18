---
sidebar_position: 10
---

# Les requêtes AJAX

Quand on fait du JavaScript, on peut être amené à devoir communiquer avec une API, pour récuperer ou envoyer des données. Une méthode existe pour ça, elle s'appelle ```fetch```.

Pour l'utiliser, on l'appelle en lui passant en premier paramètre l'URL de la ressource et éventuellement en second paramètre un objet d'options, dans lequel on peut spécifier par exemple des entêtes HTTP. Elle renvoie une promesse. Si on veut récupérer des données en JSON, on devra appeler une méthode ```json()``` sur le résultat de la promesse, méthode qui renverra elle aussi une promesse.

```
fetch('https://jsonplaceholder.typicode.com/posts?_limit=10',{
    headers: {
        Accept: 'application/json'
    }
})
    .then(r => {
        if (r.ok) {
            return r.json()
        } else {
            throw new Error('Erreur serveur', {cause: r})
        }
    })
    .then(posts => {
        console.log('La liste des articles : ', posts)
    })
    .catch(e => {
        console.error('Une erreur est survenue', e)
    })
```

On peut aussi l'utiliser pour envoyer des données. 

```
fetch('https://jsonplaceholder.typicode.com/posts',{
    method: 'POST',
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({title: 'Hello world'})
})
```

 ## Ressources

* [Apprendre à gérer fetch par Grafikart](https://grafikart.fr/tutoriels/javascript-promise-2068#autoplay)