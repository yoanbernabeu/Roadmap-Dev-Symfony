---
sidebar_position: 8
---

# Les espaces de nom en PHP
 
Quand on écrit du code PHP, on souhaite que celui-ci soit bien rangé. En effet, on va écrire beaucoup de code, de classes et on souhaite que tout soit à sa place. 

Pour cela, on va utiliser ce qu'on appelle des espaces de noms, ou **namespace** en anglais. L'idée est de déclarer dans le fichier l'emplacement de la classe. Par exemple : 

```php
<?php

namespace App\Entity;

class Video
{}
```

Ici on déclare que la classe ```Video``` est rangé dans un dossier ```Entity```, lui même rangé dans un dossier ```App```. Ce premier dossier ```App``` n'est pas forcément un dossier réel, c'est le point d'entrée de notre architecture. 

Pour déclarer un point d'entrée, nous avons besoin de définir ce qu'on appelle un **autoloader**. C'est cela qui va indiquer à PHP à quel dossier réel correspond le namespace ```App```.

Pour mettre en place un autoloader, on utilise composer. Pour cela, on tape dans la console la commande suivante : 

```
composer init
```

Cela va créer un fichier ```composer.json``` à la racine du projet. Puis, dans ce fichier, vous rajoutez une clef ```autoload``` qui va indiquer le point d'entrée (ici, le dossier ```src```) :

```json
"autoload": {
    "psr-4": {
        "App\\": "src/"
    }
}
```

Puis vous tapez la commande suivante pour enregister l'autoloader :

```
composer dump-autoload
```

Vous pouvez maintenant utiliser l'autoloader. Par exemple, dans une autre classe, qui va utiliser la classe ```Video```, vous pouvez l'importer en utilise le mot clef ```use```, comme ceci : 

```php
use App\Entity\Video;

class VideoController 
{
    public function index(): Response
    {
        $video = new Video();
    }
}
```

Ici, cette classe saura qu'il faut aller chercher la classe Video dans le dossier ```src/Entity```.

## Ressources

* [Apprendre les namespaces en PHP par Grafikart](https://grafikart.fr/tutoriels/namespace-php-1143#autoplay)

* [Apprendre à utiliser l'autoloader par Grafikart](https://grafikart.fr/tutoriels/autoloader-composer-php-1144#autoplay)