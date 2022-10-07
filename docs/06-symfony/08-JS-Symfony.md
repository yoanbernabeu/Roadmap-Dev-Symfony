---
sidebar_position: 8
---

# Symfony et le JavaScript

Quand on développe des applications Web, notamment des sites, on peut être amené à utiliser le JavaScript pour rajouter de l'interactivité à nos pages (menu déroulant, élément affiché ou masqué au clic sur un bouton, requêtes en arrière-plan sans recharger la page, etc.). Heureusement, Symfony offre un outil pour intégrer le JavaScript.

Symfony propose l'outil ```Webpack Encore``` qui permet de "compiler" votre JavaScript (réunion de tous les fichiers en un seul, minification, optimisation, etc.) ains que votre CSS (réunion de tous les fichiers en un seul, possibilité de travailler avec un préprocesseur comme SASS, outils comme PostCSS, etc.).

Pour installer Webpack Encore, tapez la ligne suivante : 

```composer require symfony/webpack-encore-bundle```

Puis pour installer les dépendances NodeJS, tapez la commande suivante (il faut que NodeJS soit installé sur votre machine) : 

```npm install```

Un fichier de configuration a été créé à la racine de votre projet. Il s'appelle ```webpack.config.js```. Il contient la configuration de Webpack Encore. Un dossier ```assets``` a également été créé, c'est là que vous mettrez vos fichiers JavaScript.

C'est dans vos fichiers JavaScript que vous pourrez intégrer vos fichiers CSS (```import './styles/app.css';```).

Vous pouvez ensuite taper la commande ```npm run watch``` pour le dévoloppement ou ```npm run build``` pour générer les fichiers.

Vous pouvez ensuite mettre à jour votre template Twig de base comme suit : 

```
<head>
    <!-- ... -->

    {% block stylesheets %}
        {{ encore_entry_link_tags('app') }}
    {% endblock %}

    {% block javascripts %}
        {{ encore_entry_script_tags('app') }}
    {% endblock %}
</head>
```

Vous trouverez également dans le fichier de configuration des options pour travailler avec les framework JS Vue et React.

## Ressources

* [Apprendre utiliser Webpack Encore avec Symfony par Grafikart](https://grafikart.fr/tutoriels/encore-symfony-1075)

* [Apprendre utiliser Webpack Encore avec Symfony 6 par Développeur Musclé](https://www.youtube.com/watch?v=Xsxztq8s-_I&ab_channel=D%C3%A9veloppeurMuscl%C3%A9)


