---
sidebar_position: 6
---

# Les fonctions en PHP

Les fonctions permettent d'encapsuler du code pour pouvoir le réutiliser facilement. On peut appeller une fonction soi-même ou bien la déclencher lorsqu'un qu'un évênement arrive.

Une fonction peut prendre en entrée des paramètres que l'on va utiliser dans le contenu de la fonction. Elle peut aussi retourner une valeur.

Prenons un example :

```php
function sayHello(string $prenom) {
    return 'Bonjour ' . $prenom
}
```

Cette fonction permet de renvoyer une chaine de caractère qui dit ```bonjour``` suivi d'un prénom que l'on a passé en paramètre. Pour l'appeler, on écrira par exemple ```sayHello('Bob')```.

Les paramètres peuvent prendre des valeurs par défaut. 


```php
function sayHello(string $prenom="Bob"): string
{
    return 'Bonjour ' . $prenom
}
```

Ici, si on appelle la fonction sans lui passer de paramètre, elle renverra ```Bonjour Bob'```.

On peut typer les paramètres et le retour. Ici, on indique que notre paramètre est un chaine de caractère et que leretour de la fonction l'est aussi.

 ## Ressources

* [Apprendre à gérer les fonctions par Grafikart](https://grafikart.fr/tutoriels/fonctions-utilisateurs-php-1120#autoplay)