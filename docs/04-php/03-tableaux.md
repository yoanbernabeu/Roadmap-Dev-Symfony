---
sidebar_position: 3
---

# Les tableaux en PHP
 
En PHP comme dans presque tous les langages de programmation, on peut écrire des tableaux, c'est à dire des listes de données. Un tableau peut contenir tout type de données, et on peut même écrire des tableaux dans des tableaux.

Pour écrire une tableau, on utilise les crochets, à l'intérieur desquels on écrit nos valeurs séparées par des virgules.

Exemple :

```
$mois = ['janvier', 'février', 'mars'];
```

Lorsqu'on veut récupérer une valeur dans un tableau, on utilse son index, c'est à dire sa position dans le tableau, en sachant que la première position est à l'index 0.

```
$selection = $mois[2];
echo $selection; 
```

Ce code renverra le mot ```mars```, puis que l'index 2 représente la troisième position dans le tableau.

On peut aussi rajouter une valeur dans un tableau. Dans ce cas, il n'est pas nécessaire de spécifier l'index :

```
$mois[] = 'avril';
echo $mois; 
```

On peut aussi écrire ce qu'on appelle des tableaux **associatifs**, c'est à dire des tableaux qui associent une valeur à une clef.  

Exemple :

```
$resultats = [
    'janvier' => 25,
    'février' => 32,
    'mars' => 17
];
```

Pour récuper une valeur particulière, on utilisera sa clef. 

```
$resultat_fevrier = $resultats['février'];
echo $resultat_fevrier; 
```

Ce code renverra la valeur ```32```.

On peut aussi modifier une valeur dans un tableau :

```
$resultats['février'] = 29;
```

 ## Ressources

* [Apprendre à gérer les tableaux en PHP par Grafikart](https://grafikart.fr/tutoriels/tableaux-php-1116#autoplay)