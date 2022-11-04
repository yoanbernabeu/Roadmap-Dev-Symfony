---
sidebar_position: 9
---

# Composer avec PHP
 
 Aujourd'hui, quand on écrit du code, on ne code pas tout à la main. On utilise parfois du code qui a été écrit par d'autres et qui est disponible en Open Source. 

 Il existe des dizaines de milliers de librairies que l'on peut télécharger sur [Packagist](https://packagist.org/). Mais on va utiliser [Composer](https://getcomposer.org/) pour les installer sur notre machine. 

 Une fois composer installé, il suffit de taper ```composer require``` suivi du nom de la librairie. 

 Imaginons que nous souhaitions installer dans notre projet la librairie [Symfony Var Dumper](https://packagist.org/packages/symfony/var-dumper), qui permet de disposer d'un ```var_dump``` plus complet que l'original. Il suffit de taper ```composer require symfony/var-dumper```. SI on n'en a besoin que pour le développement, on tape ```composer require --dev symfony/var-dumper```

 Cela va créer un dossier ```vendor``` à la racine du projet, dans lequel la librairie va être téléchargée. Pour l'utiliser, il suffit de faire un ```dump($ma_variable);```. Pour d'autres librairies, vous aurez sans doute besoin d'ajouter un ```use``` suivi du namespace de la librairie.

 Une fois la librairie téléchargée, un fichier ```composer.json``` est créé ou mis à jour à la racine du projet. Il liste toutes les librairies dont le projet a besoin et qui peuvent être installées avec Composer.

 Le dossier ```vendor``` n'a pas vocation à être versionné. Si vous supprimez le dossier ```vendor```, ou si vous récupérez un projet via ```Git```, il vous suffit de taper ```composer install``` pour installer toutes les dépendances du projet. 

## Ressources

* [Apprendre à gérer composer par Grafikart](https://grafikart.fr/tutoriels/composer-require-1146#autoplay)