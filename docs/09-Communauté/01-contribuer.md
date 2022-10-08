---
sidebar_position: 1
---

# Contribuer au projet

Ce projet est open-source. Cela signifie que vous pouvez avoir accès au code source de celui-ci. Mais cela veut aussi dire que vous pouver y contribuer. Son contenu en sera alors meilleur.

Il y a deux façons de participer au projet : 

- en ouvrant un ticket sur le site du projet pour proposer des améliorations ou relever des erreurs

- en publiant une PR (pull request) où c'est vous qui écrivez les modifications et les envoyez au mainteneur du projet.

#### Ouvrir un ticket

Pour ouvrir un ticket, rendez vous sur la [page Github](https://github.com/yoanbernabeu/Roadmap-Dev-Symfony) du projet. Cliquez ensuite sur le lien [Issues](https://github.com/yoanbernabeu/Roadmap-Dev-Symfony/issues) en haut de la page. Vous y verrez la liste des tickets en attente de résolution. 

Vérifiez d'abord que personne n'a ouvert un ticket proposant des modifications identiques à celles que vous voulez proposer en parcourant la liste des tickets. Regardez également dans la liste des tickets fermés.

Si c'est une nouvelle modification ou proposition, cliquez sur le lien [New issue](https://github.com/yoanbernabeu/Roadmap-Dev-Symfony/issues/new) en haut de la page à droite. Dans la nouvelle page qui s'ouvre, donnez un titre court et concis à votre ticket, puis décrivez votre proposition ou relevé d'erreur. Soyez le plus complet et précis possible. Enfin, cliquez sur bouton **Submit new issue** en bas à droite pour enregister votre ticket.

Vous pouvez aussi cliquer sur un ticket existant et rajouter un commentaire à celui-ci, pour apporter des précisions ou des remarques.

#### Faire une pull request

Si vous souhaiter réaliser vous même une correction ou ajouter du contenu, vous pouvez le faire en suivant les étapes suivantes. Vous devez disposer d'un compte Github et avoir GIT installé sur votre machine.

##### Etape 1

Sur la [page du projet](https://github.com/yoanbernabeu/Roadmap-Dev-Symfony), cliquez sur le bouton **fork** en haut à droite. Cela va créer une copie du projet sur votre propre compte Github.

##### Etape 2

Rendez-vous sur votre compte Github et cliquez sur le bouton **Repositories** en haut de la page. Dans la liste des dépôts qui s'affiche, cliquez sur celui que vous venez de copier, votre copie du projet original. Cliquez ensuite sur le bouton **code** en haut à droite, puis dans le menu qui s'affiche, dans l'onglet HTTPS, copiez l'adresse de votre dépôt qui est dans le champ texte ou cliquez sur l'icône qui est à la droite de celui-ci.

##### Etape 3

Sur votre machine, en ligne de commande, tapez la commande suivante : 

```git clone <URL_COPIEE>``` en remplaçant ```<URL_COPIEE>``` par celle que vous avez copié à l'étape précédente. Cela va importer votre copie du projet sur votre machine dans un nouveau répertoire.

#### Etape 4

En ligne de commande, naviguez dans ce dossier. Vous devez alors créer une nouvelle branche sur laquelle vous allez faire vos modifications. Pour cela, tapez la commande suivante :

```git checkout -b <NOM_DE_LA_BRANCHE>```

en remplaçant ```<NOM_DE_LA_BRANCHE>``` par le nom de la branche sur laquelle vous allez travailler. Choisissez un nom court et évoquateur.

#### Etape 5

Vous devez indiquer à Git l'adresse du dépôt d'origine. Pour cela tapez la commande suivante : 

```git remote add upstream https://github.com/yoanbernabeu/Roadmap-Dev-Symfony```

#### Etape 6

Ouvrez le projet dans votre éditeur de code, et effectuez vos modifications.

#### Etape 7

Si vous êtes satisfait de votre travail, vous devez l'enregister dans le système de versioning de GIT. Pour cela, en ligne de commande, tapez les commandes suivantes : 

```git add .``` (pour ajouter les fichiers modifiés)

```git commit -m "<VOTRE_MESSAGE>"``` (pour ajouter vos modifications) en ramplaçant ```<VOTRE_MESSAGE>``` par un court message décrivant vos modifications (par exemple "ajout page X").

#### Etape 7

Vous devez compiler le projet pour vérifier ce que donnent vos modifications et qu'elles ne cassent rien d'existant. Pour cela, tapez les trois commandes suivantes :

```npm install``` (vous devez avoir NodeJS installé sur votre machine)

```npm run build``` (pour compiler la documentation)

```npm run serve``` (pour voir le résultat).

Rendez vous à l'adresse ```http://localhost:3000/Roadmap-Dev-Symfony/``` pour voir la documentation et vérifier le résultat de vos modifications.

#### Etape 9

Si vous avez vérifié que tout va bien, vous devez maintenant publier vos modifications sur le dépôt original. Pour cela, tapez la commande suivante : 

```git push -u origin <NON_DE_VOTRE_BRANCHE>``` en remplaçant ```<NON_DE_VOTRE_BRANCHE>``` par celui la branche que vous avez créée à l'étape 4.

#### Etape 10

Rendez vous maintenant sur Github à la page de votre propre dépôt, celui que vous avez cloné à l'étape 1. 

Un message en haut de la page va vous indiquer que votre branche peut être fusionnée sur le dépôt d'origine. Cliquez sur le bouton **Compare and pull request** en haut à droite.

Dans la page qui s'ouvre, donnez un titre à votre pull request, et indiquez en commentaire le détail de vos modifications. Si elles concernent un ticket, vous pouvez le référencer en tapant # suivi du numéro du ticket (sans espace).

Cliquez enfin sur **Create pull request**.

Le mainteneur du projet va alors être averti que vous voulez qu'il fusionne votre branche avec la branche principale du projet. Il va effectuer un contrôle sur vos modifications. Vous pouvez retrouver votre pull request sur la page du projet, en cliquant sur le bouton **Pull requests** en haut de la page. Vous verrez alors la liste des pull request en attente et donc la votre.

Le mainteneur du projet peut souhaiter que vous fassiez des modifications avant qu'il accepte de fusionner votre travail. Pour cela, il vous laissera des commentaires sur la page de votre pull request. Normalement, Github vous enverra une notificiation afin de vous prévenir. Si c'est le cas, vous devrez alors répéter les étapes 6 à 9.

Si vos modifications sont acceptées, vous apparaitrez dans la liste des contributeurs disponible [ici](https://github.com/yoanbernabeu/Roadmap-Dev-Symfony/graphs/contributors).

