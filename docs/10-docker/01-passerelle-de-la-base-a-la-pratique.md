---
sidebar_position: 1
---

# Passerelle de la base à la pratique sous symfony

## La base

Dans le chapitre précédent, nous avons découvert les bases de docker. Ce qu'il est important de retenir pour comprendre la suite :
1. Le lien vers le [hub de docker](https://hub.docker.com/) qui va nous permettre de configurer nos containers
2. Nous avons vu plusieurs commandes "Docker". exemple : "docker run...", "docker container ls", etc. Pensez à consulter [la documentation](https://docs.docker.com/)

## Docker sous symfony

Les bases sont acquises. Nous avons compris le concept, nous savons comment récupérer les images sur le hub, les instancier et intéragir avec, etc.

Le chapitre suivant va nous permettre de nous simplifier en apprenant à travailler avec un fichier yaml.

Les commandes commenceront par docker-compose et ira chercher vos services (containers et images) dans le dossier docker-compose.yml.

Dans ce fichier vous préciserez :
1. (falcutatif depuis la version 1.27.0) la version de docker compose qui est directement liée à votre version de docker :
    1. dans votre terminale tapez docker -v pour connaitre la version de docker que vous utilisez.
    2. trouvez la version de docker-compose associé :
https://docs.docker.com/compose/compose-file/
2. le nom de vos containers. Nommez les comme bon vous semble.
3. Le nom des images.

Ensuite vous n'aurez plus qu'à entrer la commande docker-compose up [-d] et docker ira chercher tout ce dont il a besoin.
Au final, vous réaliserez que c'est tout :).
Si vous avez ajouter une image Mysql, allez à l'adresse que vous avez paramêtré et vous verrez que votre serveur est opérationnel.

Pensez à consultez la documentation de [docker-compose](https://docs.docker.com/compose/)