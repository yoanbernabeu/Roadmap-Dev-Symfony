---
sidebar_position: 5
---

# Les boucles en PHP
 
En PHP comme dans presque tous les langages de programmation, le concept des boucles est incontournable. 

Il consiste à pouvoir répeter une instruction ou un bloc de code autant de fois qu'on le désire ou tant qu'une condition est remplie ou non.

Il existe différents types de boucle en PHP :

- les boucles ```for```
- les boucles ```while```
- les boucles ```for each```

#### Boucle for

Elle permet de répeter les choses un nombre défini de fois. Imaginons qu'on souhaite réaliser un compteur :

```
for ($i = 1; $i <= 5; $i++) {
    echo "compteur: " . $i;
}
```

Dans ce code, on part avec ```$i``` à 1. On indique qu'on continue tant que ```$i``` est inférieur ou égal à 5. On explique ensuite qu'on va incrémenter ```$i``` de 1 à chaque tour avec ```$i++``` (on aurait pu écrire ```$i = $i + 1```). Au premier tour, on va afficher ```1```, puis ```2``` au deuxième tour, et ainsi de suite jusqu'à ```5``` au dernier tour.

#### Boucle while

Elle permet de répeter les choses tant qu'une condition est remplie. En reprennant l'exemple de la boucle ```for```, cela donne :

```
$i = 1;
while ($i <= 5) {
    echo "compteur: " . $i;
    $i++;
}
```

On peut également remplacer le ```$i++``` par ```$i = $i + 1```.


#### Boucle for each

Elle permet de parcourir les élements d'un tableau.

```
$tableau = [2, 4, 6, 8];
foreach ($tableau as $valeur){
    echo $valeur;
}
```

Cette boucle affichera d'abord ```2```, puis ```4``` puis ```6``` puis ```8```.

On peut aussi extraire les clefs d'un tableau : 

```
$tableau = [
    'nom' => 'Doe',
    'prenom' => 'John',
    'age' => 32
];

foreach ($tableau as $clef => $valeur){
    echo $clef . ': ' . $valeur;
}
```

Cette boucle affichera d'abord ```Nom: Doe```, puis ```prenom: John``` puis ```age: 32```.

 ## Ressources

* [Apprendre à gérer les boucles en PHP par Grafikart](https://grafikart.fr/tutoriels/boucles-php-1118#autoplay)