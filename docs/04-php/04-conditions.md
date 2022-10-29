---
sidebar_position: 4
---

# Les conditions en PHP
 
En PHP comme dans presque tous les langages de programmation, le concept des conditions est incontournable. Il consiste à pouvoir gérer le cas où l'on souhaite qu'un bout de code soit exécuté si une condition est remplie.

Pour écrire une condition, on utilise le mot-clé ```if```, suivi entre parenthèses de la condition, puis d'un bloc de code entouré par des accolades.

Exemple :

```
if($age >= 18) {
    echo 'vous êtes majeur';
}
```

Ici, si la valeur de la variable ```$age``` est supérieure ou égale )à 18, on écrit un message.

On peut éventuellement ajouter un autre bout de code qui sera exécuté si la condition n'est pas remplie.

Exemple :

```
if($age >= 18) {
    echo 'vous êtes majeur';
} else {
    echo 'vous êtes mineur';
}
```

Dans la condition, on utilise des opérateurs de comparaison, comme ```===``` pour une égalité stricte, ```>``` ou ```<``` pour supérieur ou inférieur, ```>=``` ou ```<=``` pour supérieur ou égal et inférieur ou égal, ou encore ```!==``` pour une différence.

On peut également utiliser une version raccourcie, qu'on appelle une ternaire pour écrire une condition sur une seule ligne.

Exemple :

```
$phrase = 'Vous êtes ' . ($age >= 18 ? 'majeur' : 'mineur');
```

 ## Ressources

* [Apprendre à gérer les conditions en PHP par Grafikart](https://grafikart.fr/tutoriels/conditions-php-1117#autoplay)