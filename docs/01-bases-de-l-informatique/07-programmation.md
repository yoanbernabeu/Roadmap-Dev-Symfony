---
sidebar_position: 6
---

# Programmation

## Qu’appelle-t-on langage informatique ?
    
On appelle "**langage informatique**" un langage destiné à décrire l'ensemble des actions consécutives qu'un ordinateur doit exécuter. Les langages naturels (par exemple l'anglais ou le français) représentent l'ensemble des possibilités d'expression partagé par un groupe d'individus. Les langages servant aux ordinateurs à communiquer n'ont rien à voir avec des langages informatiques, on parle dans ce cas de protocoles de communication, ce sont deux notions totalement différentes. Un langage informatique est une façon pratique pour nous (humains) de donner des instructions à un ordinateur.

Un langage informatique est rigoureux: À CHAQUE instruction correspond UNE action du processeur.

Le langage utilisé par le processeur, c'est-à-dire les données telles qu'elles lui arrivent, est appelé **langage machine**. Il s'agit d'une suite de 0 et de 1 (du binaire) mais pour plus de "clarté il peut être décrit en hexadécimal. Toutefois le langage machine n'est pas compréhensible facilement par l'humain.

Ainsi il est plus pratique de trouver un langage intermédiaire, compréhensible par l'homme, qui sera ensuite transformé en langage machine pour être exploitable par le processeur.

L'assembleur est le premier langage informatique qui ait été utilisé. Celui-ci est encore très proche du langage machine mais il permet déjà d'être plus compréhensible. Toutefois un tel langage est tellement proche du langage machine qu'il dépend étroitement du type de processeur utilisé (chaque type de processeur peut avoir son propre langage machine). Ainsi un programme développé pour une machine ne pourra pas être _porté_ sur un autre type de machine (on désigne par le terme "**portable**" un programme qui peut être utilisé sur un grand nombre de machines). Pour pouvoir l'utiliser sur une autre machine il faudra alors parfois réécrire entièrement le programme.

Un langage informatique a donc plusieurs avantages:

Il est plus facilement compréhensible que le langage machine ;

Il permet une plus grande portabilité, c'est-à-dire une plus grande facilité d'adaptation sur des machines de types différents.

Les langages informatiques peuvent grossièrement se classer en deux catégories: les **langages interprétés** et les **langages compilés**.

### Langage interprété

Un langage informatique est par définition différent du langage machine. Il faut donc le traduire pour le rendre intelligible du point de vue du processeur. Un programme écrit dans un langage interprété a besoin d'un programme auxiliaire (l'interpréteur) pour traduire au fur et à mesure les instructions du programme.

### Langage compilé

Un programme écrit dans un langage dit "**compilé**" va être traduit une fois pour toutes par un programme annexe (le **compilateur**) afin de générer un nouveau fichier qui sera autonome, c'est-à-dire qui n'aura plus besoin d'un programme autre que lui pour s'exécuter (on dit d'ailleurs que ce fichier est exécutable).

Un programme écrit dans un langage compilé a comme avantage de ne plus avoir besoin, une fois compilé, de programme annexe pour s'exécuter. De plus, la traduction étant faite une fois pour toute, il est plus rapide à l'exécution.

Toutefois il est moins souple qu'un programme écrit avec un langage interprété car à chaque modification du fichier source (fichier intelligible par l'homme: celui qui va être compilé) il faudra recompiler le programme pour que les modifications prennent effet.

D'autre part, un programme compilé a pour avantage de garantir la sécurité du code source. En effet, un langage interprété, étant directement intelligible (lisible), permet à n'importe qui de connaître les secrets de fabrication d'un programme et donc de copier le code voire de le modifier. Il y a donc risque de non-respect des droits d'auteur. D'autre part, certaines applications sécurisées nécessitent la confidentialité du code pour éviter le piratage (transaction bancaire, paiement en ligne, communications sécurisées, ...).

### Langage intermédiaires

Certains langages appartiennent en quelque sorte aux deux catégories (LISP, Java, Python, ..) car le programme écrit avec ces langages peut dans certaines conditions subir une phase de compilation intermédiaire vers un fichier écrit dans un langage qui n'est pas intelligible (donc différent du fichier source) et non exécutable (nécessité d'un interpréteur). Les applets Java, petits programmes insérés parfois dans les pages Web, sont des fichiers qui sont compilés mais que l'on ne peut exécuter qu'à partir d'un navigateur internet (ce sont des fichiers dont l'extension est .class).

### Quelques exemples de langages couramment utilisés

Voici une liste non exhaustive de langages informatiques existants :

| Langage | Domaine d'application principal | Compilé/interprété |
| --- | --- | --- |
| ADA | Le temps réél | langage compilé |
| BASIC | Comme son nom l'indique... | angage interprété |
| C | Programmation système | langage compilé |
| C++ | Programmation système objet | langage compilé |
| Cobol | Gestion | langage compilé |
| Fortran | Calcul | langage compilé |
| Java | Programmation orientée internet | langage intermédiaire |
| MATLAB | Calcul mathématique | langage interprété |
| Mathematica | Calcul mathématique | langage interprété |
| LISP | Intelligence artificielle | langage intermédiaire |
| Pascal | Enseignement | langage compilé |
| Prolog | Intelligence artificielle | langage interprété |
| Perl | Traitement de chaînes de caractères | langage interprété |

## Qu'est-ce qu'un programme informatique?

Un programme informatique est une succession d'instructions exécutable par l'ordinateur. Toutefois, l'ordinateur ne sait manipuler que du binaire, c'est-à-dire une succession de 0 et de 1. Il est donc nécessaire d'utiliser un langage de programmation pour écrire de façon lisible, c'est-à-dire avec des instructions compréhensibles par l'humain car proches de son langage, les instructions à exécuter par l'ordinateur.

Ainsi, ces programmes sont traduits en langage machine (en binaire) par un compilateur.

La façon d'écrire un programme est intimement liée au langage de programmation que l'on a choisi car il en existe énormément. De plus, le compilateur devra correspondre au langage choisi: à chaque langage de programmation son compilateur (exception faite des langages interprétés...).

D'une façon générale, le programme est un simple fichier texte (écrit avec un traitement de texte ou un éditeur de texte), que l'on appelle fichier source.

## A quoi ressemble un programme informatique?

L'allure d'un programme dépend du type de langage utilisé pour faire le programme...

Toutefois, à peu près tous les langages de programmation sont basés sur le même principe, Le programme est constitué d'une suite d'instructions que la machine doit exécuter. Celle-ci exécute les instructions au fur et à mesure qu'elle lit le fichier (donc de haut en bas) jusqu'à ce qu'elle rencontre une instruction (appelée parfois instruction de branchement) qui lui indique d'aller un endroit précis du programme. Il s'agit donc d'une sorte de jeu de piste dans lequel la machine doit suivre le fil conducteur et exécuter les instructions qu'elle rencontre jusqu'à ce qu'elle arrive à la fin du programme et celui-ci s'arrête.

## La notion de variables
    
Dans la plupart des langages, on travaille généralement sur des variables, c'est-à-dire que l'on associe à un nom un contenu. On pourra ainsi appeler une variable "toto" et y stocker le chiffre 8.

## Type de données

Certains langages acceptent que l'on associe à un nom de variable n'importe quel type de donnée (c'est-à-dire aussi bien un nombre entier qu'un caractère), on appelle ces langages des langages non typés.

En fait comme vous pourrez le voir dans le chapitre représentation des données, le type de donnée conditionne le nombre d'octets sur laquelle la donnée est codée, c'est-à-dire l'occupation en mémoire de cette donnée ainsi que le format dans lequel elle est représentée.

C'est la raison pour laquelle les langages évolués (Le C, le Java) sont des langages typés, cela signifie qu'à une variable est associé non seulement un nom mais aussi un type de donnée qu'il faudra préciser lorsque l'on déclarera la variable, c'est-à-dire que lorsque l'on écrira le nom de la variable pour la première fois il faudra préciser au compilateur quelle sorte de données celle-ci va pouvoir contenir (la façon de déclarer la variable dépendra du langage).

## Syntaxe

Les langages demandent une syntaxe rigoureuse, on ne peut donc pas écrire les choses de la manière dont on le souhaite.

Ainsi, certains langages sont case sensitive (en français "sensibles à la casse"), cela signifie qu'un nom ne comportant que des minuscules ne sera pas considéré comme équivalent au même nom comprenant des majuscules. Ainsi la variable nommée "Toto" sera une variable différente de la variable "toto".

Les noms de variables admettent généralement une longueur maximale (qui dépend du langage) et un jeu de caractères réduit, parmi lesquels on retrouve généralement les caractères suivants :

`abcdefghijklmnopqrstuvwxyz`

`ABCDEFGHIJKLMNOPQRSTUVWXYZ`

`1234567890\_`

Ainsi, un espace (" ") est en réalité un caractère à part entière, appelé caractère spécial). Il est ainsi rare qu'un langage accepte des caractères spéciaux dans un nom de variable

## Mots réservés

Dans la plupart des langages, il existe une poignée de mots que l'on ne peut pas attribuer aux noms de variables, on les appelle mots réservés (en anglais reserved words). Ceux-ci seront explicités dans chaque chapitre correspondant à un langage spécifique.

## Les commentaires

Il est généralement bon de pouvoir ajouter dans un programme des lignes de texte qui ne seront pas prises en compte par le compilateur. Ces lignes de textes sont généralement précédées (ou encadrées) par des instructions spéciales qui signaleront au compilateur de les ignorer.

Les commentaires servent à clarifier un programme en donnant des explications. Ils serviront si jamais une autre personne essaie de comprendre le fonctionnement du programme en lisant le fichier source, ou bien à la personne qui l'a créé si jamais il relit le fichier source quelques années après l'avoir écrit.
