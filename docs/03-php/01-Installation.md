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

