---
sidebar_position: 1
---

# Le paradigme MVC 

Le paradigme MVC est un design pattern bien connu dans les applications Web. Le M signifie le modèle, le V la vue et le C le contrôleur C'est un modèle de conception qui a pour but de mieux organiser le code de l'application en le séparant en 3 couches abstraites distinctes.

Imaginez que vous souhaitiez réaliser une page qui affiche une liste de produits venant d'une base de donnée. Vous pourriez techniquement tout faire dans un seul et unique fichier PHP. Mais ce code va être difficile à maintenir et à debugger.

On préférera le découper en petits morceaux qui auront chacun leur responsabilité. En suivant un modèle MVC, on aurait alors par exemple 3 fichiers disctincts. 

* le premier traiterait la partie modèle, c'est à dire le code qui va intéragir avec les données, dans notre cas le code qui va se connecter à la base de données et récupérer les produits.

* un second fichier traiterait la vue, c'est à dire le côté visuel. On utiliserait par exemple un language de templating pour pouvoir écrire dans notre code HTML une boucle qui itèrerait sur chaque produit pour les afficher dans des petites cartes.

* le troisième fichier s'occuperait de la couche contrôleur, c'est à dire le code qui ferait le lien entre les deux autres couches. C'est cette partie qui ferait appel au modèle pour récupérer les produits et qui utiliserait un moteur de template qui prendrait en entrée la vue et les données qu'on a récupérées depuis le modèle pour fabriquer la page de sortie, à savoir notre liste de produits.

Dans notre exemple, nous avons trois fichiers, mais il faut imaginer ces couches comme abstraites. Ainsi, dans Symfony, plusieurs types de fichiers entrent dans la couche modèle (entitées, repository et manager).

## Ressources

* [Texte - Structurer votre code avec le pattern MVC](https://apprendre-la-programmation.net/structurer-code-pattern-mvc/)

* [Texte - PHP Orienté Objet - Le MVC Épisode 1](https://nouvelle-techno.fr/articles/live-coding-php-oriente-objet-le-mvc)

* [Texte - PHP Orienté Objet - Le MVC Épisode 2](https://nouvelle-techno.fr/articles/live-coding-php-oriente-objet-le-mvc-episode-2)

* [Vidéo - L'architecture MVC](https://www.youtube.com/watch?v=6v8LGDQL9Vs)

* [Vidéo - Créer un MVC](https://www.youtube.com/watch?v=a3NZtp3FJEE)