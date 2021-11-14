---
sidebar_position: 1
---

# Création d'une API 

## Qu'est-ce qu'une API ?

**Définition**

En informatique, une interface de programmation d’applications ou interface de programmation applicative (souvent désignée par le terme API pour Application Programming Interface) est un ensemble normalisé de classes, de méthodes, de fonctions et de constantes qui sert de façade par laquelle un logiciel offre des services à d'autres logiciels.

source : [wikipedia](https://fr.wikipedia.org/wiki/Interface_de_programmation_d%27applications)

En d'autres mots, nous allons créer un système qui va permettre à certaines personnes qui le souhaitent de faire des requêtes à notre API. 


Et nous allons faire une API REST. REST pour "[Representational State Transfer](https://fr.wikipedia.org/wiki/Representational_state_transfer)". 

Alors **REST** c'est quoi ?

Une API REST (également appelée API RESTful) est une interface de programmation d'application (API ou API web) qui **respecte** les contraintes du style d'architecture REST et permet d'interagir avec les services web RESTful. L'architecture REST a été créée par l'informaticien Roy Fielding.

Concernant l'architecture :

- Sans état (stateless)
  - C'est-à-dire que les infos du client ne sont jamais enregistrées.
- Cacheable
  - C'est-à-dire qu'on peut stocker les données dans le cache de la mémoire sans faire de nouvelle requête.
- Client-serveur (normal)
- Interface uniforme
  - C'est-à-dire que n'importe quelle machine peut utiliser cette API. Mon API répondra toujours de la même façon.
- Système de couches
  - Pour notre utilisateur ça doit être invisible, permet de hiérarchiser les différents types de serveurs.

source : [redhat](https://www.redhat.com/fr/topics/api/what-is-a-rest-api)

## Comment faire pour utiliser une API ?

Nous allons avoir la possibilité de faire des requêtes à notre API en utilisant des méthodes HTTP (POST, GET, PUT, DELETE, ...) depuis une autre machine par exemple.


Pour voir nos requetes nous allons utiliser un logiciel [postman](https://www.getpostman.com/), nous pouvons aussi utiliser une extention sur VSCode. 
Moi j'utilise [REST Client](https://marketplace.visualstudio.com/items?itemName=humao.rest-client)




