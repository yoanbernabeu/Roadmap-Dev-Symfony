---
sidebar_position: 2
---

# Les commandes de base

## Info de base

> **man** est une commande UNIX permettant d'accéder aux pages de manuel installées sur le système  
> Exemple, pour avoir des infos sur la commande ls: `man ls`

`CTRL+C` et `CTRL+V` qu'on utilise sur Windows pour copier/coller peut interrompre l'écriture de la commande ou un script (CTRL+C).
On peut alors aussi utiliser `CTRL+INS` et `SHIT+INS` de la même façon

## Les commandes de gestion des répertoires et des fichiers
`pwd` affiche sur écran le chemin courant du répertoire de la shell  
```
pwd
  /home/user/Documents   // affiche le chemin courant
```
 ---  
`ls` abbreviation de *list*, montre tous les répertoires et fichiers contenus du répertoire actif
```
ls               // affiche seulement les noms  
  /blog          // c'est un répertoire
  package.json   // c'est un fichier
  symfony1.md
  symfony2.md
...
```
```
ls blog          // affiche le contenu du sous-dossier 'blog'
  ...
```
```
ls symfony*      // affiche seulement les fichiers qui commencent par 'symfony'  
  symfony1.md
  symfony2.md
...
```
 --- 
`cd` abbreviation de *change directory*, on l'utilise pour changer de répertoire courant  
```
pwd
  /home/user/Documents       // le répertoire courant
ls
  /blog                      // le répertoire où on veut se déplacer
  /video
  diario.txt
cd blog                      // la commande pour se déplacer
pwd                          // le test
  /home/user/Documents/blog
```
```
cd ~      // pour se déplacer au répertoire de base
```
```
cd ..     // aller au répertoire parent
```
```
cd /      // aller au répertoire racine
```
 --- 
`mkdir` abréviation de *make directory*, pour créer un nouveau répertoire  
```
mkdir mon-dossier
ls
  /mon-dossier   
```
 --- 
`cp` abréviation de *copy*, copie  
```
cp symfony2.md symfony3.md   // copie le fichier 'symfony2.md' dans un nouveau fichier 'symfony3.md'
```
```
cp symfony* mon-dossier     // copie tous les fichiers qui commencent par 'symfony' dans le dossier 'mon-dossier'
cd mon-dossier
ls
  symfony1.md
  symfony2.md 
```
```
cp * mon-dossier   // copie tout le contenu du répertoire actuel dans 'mon-dossier'
```
 --- 
`mv` abréviation de *move*, déplace mais on peut aussi l'utiliser pour renommer un fichier  
```
mv symfony3.md symfony4.md  // renomme
```
```
mv symfony4.md blog         // déplace le fichier dans le sous-dossier 'blog'
```
 --- 
`rm` abréviation de *remove*, efface fichiers ou répertoires  
```
rm symfony1.md           // efface le fichier 'symfony1.md'
```
```
rm symfony*              // efface les fichiers qui commencent par 'symfony'
```
```
rm -rf blog              // efface le répertoire 'blog' avec tout son contenu 
```
 --- 
`rmdir` abréviation de *remove directory*, efface un ou plus répertoires mais seulement si sont vide  
```
mkdir mon-dossier
rmdir mon-dossier
```
```
mkdir mon-dossier1
mkdir mon-dossier2
rmdir mon-dossier*       // efface les deux dossiers
```
 --- 
`ln` abréviation de *link*, crée un lien vers un fichier
```
ln 978-88-97192-60-2 livre      // crée le lien de ISBN avec le livre
cat 978-88-97192-60-2           // le même résultat de 'cat livre'
```

## Les commandes d'édition  
 
`touch` pour créer un ficher vide  
```
touch mon-ficher   // Crée le ficher 'mon-ficher' dans le répertoire courant
```
 --- 

`vi`  
```

```
 --- 
`nano` permet d'éditer simplement et rapidement les fichiers textes 
```
nano nom_du_fichier
nano -w nom_du_fichier     //Neutralise le retour à la ligne automatique 
nano -l nom_du_fichier     //Affiche les numéros de ligne à gauche du texte
```
Quitter Nano : `CTRL+X`  
Enregistrer sous : `CTRL+O`  
Rechercher dans le fichier : `CTRL+W`

## Les commandes de recherche

`locate`  
```

```
 ---
`find`  
```

```
 ---
`grep` recherche de mots dans les fichiers
```
echo "mon premier fichier" > livre    // crée le fichier avec le texte
grep "pre" livre
   mon premier fichier                // montre en rouge l'occurence
```
```
grep -c "pre" livre                  // compte les occurences
```

## Les commandes d'affichage
`echo`  
```

```
 ---  
`cat`  
```

```
 ---  
`more` affiche page par page le contenu (n'est pas possible de faire du retour en arrière, 'q' pour sortir de l'affichage)  
```
more mon-script.php                    // affice le contenu de 'mon-script.php'
```
```
more mon-script1.php mon-script2.php    // affice le contenu de 'mon-script1.php' et 'mon-script2.php'
```
 ---  
`head`  
```

```
 ---  
`tail`  
```

```
 ---  
`diff`  
```

```

## Les commandes de gestion des utilisateurs
sudo | chmod | chown | useradd | userdel

## Autres commandes utiles
df | du
jobs | kill | top
history
ping | wget | curl
tar | zip
date
wc


## Ressources 

* [Texte - Les commandes de base en console linux](https://doc.ubuntu-fr.org/tutoriel/console_commandes_de_base)

* [Texte - Les commandes Linux de base](https://www.sitedetout.com/commandes-linux-de-base/)

* [Vidéo - Tutoriel Linux 2 Les commandes de base](https://www.youtube.com/watch?v=cCW8Gz6zbQo)
