---
sidebar_position: 1
---

Installation PHP
================


Choix de plateforme :
--------------------

* Prendre la configuration « classique »: PHP en mode client serveur, associé à un serveur web
* Choisir un web serveur: **Apache**, Nginx, IIS....
* Choisir une plateforme système : Windows, Linux, OSX

Installation de PHP
-------------------

Deux manières d’installer PHP client-serveur orienté « web » :

* Utiliser une plateforme « pré-installée », comme :
    - WAMP http://www.wampserver.com/
    - XAMPP http://www.apachefriends.org/fr/xampp.html
    - Laragon http://www.laragon.org/ (le plus complet; Git, Terminal, MySQL, PHP, Apache,
      PhpMyAdmin, composer ...)
    - Mamp https://www.mamp.info/en/downloads/ (OsX)

Cela représente à chaque fois un environement complet (serveur Web, PHP, Base de données)

* Installer les composants « manuellement », comme :
    - PHP
    - Apache
    - MySQL
    - PhpMyAdmin
    - Composer
    - Git
    - Terminal
    - ...

Installation manuelle de PHP pour Windows
------------------------------

* Télécharger la dernière version sur http://www.php.net
* PHP8.0 est disponible en fichier ZIP
* Décompressez-le (souvent c:\php\)‏
* Rendez le fichier de configuration (php.ini) « accessible » (PATH)‏
* Rendez le fichier php.exe « accessible » via les variables d'environements.

.. image:: images/download.png

**Test d’une installation PHP**
Ecrire un mini script et le sauver (phpinfo.php)

.. code-block:: php

        <?php
        phpinfo();
        ?>

        ‏

Installation Debian/Ubuntu/Mint...
----------------------------------

Pour avoir les dernières versions de **PHP** , voir le projet [deb.sury.org](https://deb.sury.org/)

Pour **Debian**

Ajouter les dépôts **Debian** de **deb.sury.org**

.. code-block:: bash

curl -s https://packages.sury.org/php/README.txt -o install_php.sh
sh install_php.sh

A cette [endroit](https://packages.sury.org/php/pool/main/p/) on peut avoir toutes les versions de **PHP** disponibles.

Pour **Ubuntu/Mint**

Ajouter les dépôts **PPA** de **deb.sury.org**

.. code-block:: bash

sudo add-apt-repository ppa:ondrej/php
sudo apt update

.. code-block:: bash

    sudo apt-get install php8.0

Installation Fedora/Viperr
---------------------------
Après avoir installé les dépôt de rémi

.. code-block:: bash

    sudo dnf install php8.0

Installation Red-Hat/CentOs/Scientific Linux
---------------------------------------------
Après avoir installé les dépôt de rémi

.. code-block:: bash

    sudo yum install php8.0

Installation OSX
---------------------------------------------
PHP est natif sur OSX.


Environnement de développement
-------------------------------

PHP offre un environnement de développement très facile à mettre en place grâce à la commande :

.. code-block:: bash

    php -S localhost:8080

Environnement de production
---------------------------
Toutes les installations décrite ci-dessus sont suffisantes pour une installation de PHP. Mais
celle-ci est limitée par les capacités de votre système.

Pour être au plus proche des environements de production, il est recommandé d'utiliser des outils comme :

* Docker (Voire chapitre sur Docker).
* Vagrant (Voir chapitre sur Vagrant).

