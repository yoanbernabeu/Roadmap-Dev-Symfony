---
sidebar_position: 2
---

# Les variables en PHP
 
En PHP comme dans presque tous les langages de programmation, le concept des variables est incontournable.

Les variables sont des sortes de boites dans lesquelles on va ranger des données. Elle peuvent venir de celui qui écrit le programme ou de celui qui l'utilise.

Pour déclarer une variable, on écrit caractère ```$``` suivi du nom de la variable, suivi d'un signe égal, suivi de la valeur qu'on souhaite ranger dans cette variable.

Par exemple : 

```
$test = 2;

echo $test;
```

Dans une variable, on peut ranger différents types de données :
 
 - des nombres entiers
 - des nombres réels
 - des valeurs booléenes (vrai ou faux)
 - des chaînes de caractères
 - des tableaux
 - des objets

On peut aussi déclarer une valeur nulle, avec le type ```null```.


On peut également déclarer des constantes : 

```
define("PI", 3.141592);

echo PI;
```

Les tableaux sont des collections de données ou de variables. Ils peuvent contenir tous les types de données, ou même un mix des types. Ils s'écrivent entre crochets, avec les données séparées par une virgule. Un tableau peut contenir d'autres tableaux. Par exemple :

```
$numbers = [2, 4, 6, 8];

$mixed = ['texte', 2, true];

$array_in_array = [[0, 1], [2, 3]];
```

On les verra plus en détail dans la rubrique suivante.

Les objets sont une façon de représenter un objet abstrait qui dispose de propriétés, chacune ayant une valeur. On les verra dans le chapitre sur la POO.

## Ressources

* [Apprendre à gérer les variables par Grafikart](https://grafikart.fr/tutoriels/variables-php-1115#autoplay)