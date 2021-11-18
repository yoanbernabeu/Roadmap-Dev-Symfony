Configuration de PHP
=====================

La configuration de PHP peut être modifiée de 3 manières :

* Par le fichier php.ini
* Par programmation (dans un script)
* Par le fichier de configuration Apache

php.ini
--------

Généralités :
*************

* Fichier texte, comprenant des « directives de configuration »
* Largement commenté (caractère ; pour indiquer une ligne de commentaire)‏
* La syntaxe d’une ligne de directive est : directive = valeur
* Si le fichier est modifié, le serveur web doit être redémarré pour que la modif soit prise en
  compte
* Par défaut, deux fichiers modèles sont fournis (php.ini-development et php.ini-production)‏

La configuration de l’interpréteur PHP se réalise au moyen du fichier php.ini.

Globalement, un tel fichier peut être comparé au fichier httpd.conf du serveur Apache: c’est un
fichier texte, afin des possibilités de commenter des lignes, à chaque directive est associé une
valeur… Mais il y a des petites variantes: le caractère de commentaire est « ; » et non « # ». La
valeur d’une directive est donnée par le caractère « = » et non pas par un espace blanc.

La modification du php.ini n’entraîne pas immédiatement la prise en compte de cette modif: il faudra
redémarrer le serveur web pour que la modification soit prise en compte.

Comme nous l’avons déjà dit, PHP est fourni avec des modèles pré-remplis de fichier php.ini (à
l’instar d’Apache): les fichiers php.ini-dist et php.ini-recommended peuvent être renommés en
php.ini et être utilisés directement. Il est conseillé d’utiliser le php.ini-recommended.

**Remarque :**
PHP recherche un fichier php.ini dans les endroits suivants, et dans cet ordre :

* directive PHPIniDir (module Apache 2 uniquement)
* HKEY_LOCAL_MACHINE\SOFTWARE\PHP\IniFilePath
* la variable d'environnement PHPRC
* le dossier de PHP (pour CLI) ou le dossier du serveur web (pour les modules SAPI)
* dossier Windows (C:\windows ou C:\winnt)
* 
**Pour plus de sécurité voir phpinfo()**

**ou en ligne de commande : php --ini**

Les modules additionnels :
**************************

* Gestion dynamique des modules additionnels
* Sous formes de librairies (fichiers .dll)‏
* extension_dir : nom du répertoire des librairies correspondantes
* extension = <nom du fichier .dll> ou <nom du fichier.so>

Un des atouts de PHP est de pouvoir gérer dynamiquement des modules additionnels. Par exemple, la
connectivité à une base de données comme MariaDB ou PostgreSQL, ou encore la manipulation d’images.

On peut gérer les modules de manière statique, en les compilant dans le package PHP. Mais, dans une
distribution binaire, on utilisera plutôt la gestion dynamique des modules. Les modules dynamiques
sont alors des librairies (fichier .dll sous Windows, ou .so sous Unix) qui sont placées dans le
répertoire d’extensions de php. Le nom de ce répertoire est donné par la directive extension_dir.

Pour inclure un module dynamiquement, on utilisera la directive extension. En général, il suffira de
décommenter la ligne correspondante dans le fichier php.ini.

Ceci est un extrait d’un fichier php.ini. Les extensions extension_dir et extension sont utilisées.

On voit que certaines lignes sont « décommentées ». Les modules mbstring, gd2 et mysql sont ainsi
activés dynamiquement.

**Windows Extensions**

- extension=php_mbstring.dll
- ;extension=php_bz2.dll
- ;extension=php_curl.dll
- ;extension=php_dba.dll
- ;extension=php_dbase.dll
- ;extension=php_exif.dll
- ;extension=php_fdf.dll
- ;extension=php_filepro.dll
- extension=php_gd2.dll
- ;extension=php_gettext.dll
- ;extension=php_ifx.dll
- ;extension=php_imap.dll
- ;extension=php_interbase.dll
- ;extension=php_ldap.dll
- ;extension=php_mcrypt.dll
- ;extension=php_mhash.dll
- ;extension=php_mime_magic.dll
- ;extension=php_ming.dll
- ;extension=php_mssql.dll
- ;extension=php_msql.dll
- extension=php_mysql.dll
- ;extension=php_oci8.dll


Quelques directives :
*********************

- max_execution_time : définit le temps d’exécution maximal d’un script (en secondes)‏
- memory_limit : définit la taille de la mémoire occupée par l’exécution d’un script
- error_reporting : précise quel type d’erreur il faut afficher
- display_errors : autorise l’affichage des messages d’erreurs sur les pages
- log_errors : active la « journalisation » des erreurs
- include_path : gère le path de PHP, pour l’inclusion include() ou require()‏
- file_uploads : autorise l’envoi de fichier HTTP
- upload_max_file_size : définit la taille maximum des fichiers téléchargés

Par programmation
------------------

**Remarque : toutes les options de php.ini ne peuvent pas être modifiées**

- Consulter la valeur de toutes les directives de configuration : ini_get()‏
- Modifier la valeur de certaines directives de configuration : ini_set()‏
- Restaurer la valeur par défaut d’une directive de config : ini_restore()‏

```php 
<?php 

echo '1. La valeur de la directive de config max_execution_time est ' . ini_get('
max_execution_time').'<br />';

ini_set('max_execution_time', 45);

echo '2. La valeur de la directive de config max_execution_time est ' . ini_get('max_execution_time').'<br />';

ini_restore('max_execution_time');

echo '3. La valeur de la directive de config max_execution_time est ' . ini_get('max_execution_time').'<br />';

```

   
Par la configuration d’Apache
-----------------------------

- PHP doit être configuré comme module
- Permet de définir une config spécifique pour un répertoire ou pour un hôte virtuel

    - Deux directives :

        - php_flag : modifie une directive de config « binaire » (// php_admin_flag)‏
        - php_value : modifie une directive de config textuelle (// php_admin_value)‏

Les directives php_flag et php_value permettent de modifier les valeurs des directives de
configuration PHP depuis le fichier de configuration Apache.

Quant aux directives php_admin_flag et php_admin_value, elle sont utilisées pour toutes les
configurations relatives à la sécurité; ces deux dernières directives ne peut pas être spécifiées
dans des fichiers .htaccess (fichier de surcharge de configuration Apache).

```apache
    ...
    Listen 80
    Listen 8080

    NameVirtualHost 127.0.0.1:80
    NameVirtualHost 127.0.0.1:8080

    <VirtualHost 127.0.0.1:80>
        ServerName www.example80.com
        DocumentRoot "C:/Program Files/Apache Group/Apache2/domain-80“
        php_value include_path ".:/usr/local/lib/php"
        php_admin_flag engine on
    </VirtualHost>

    <VirtualHost 127.0.0.1:8080>
        ServerName www.example8080.com
        DocumentRoot "C:/Program Files/Apache Group/Apache2/domain-8080“
        php_admin_flag safe_mode off
    </VirtualHost>

    ...
```