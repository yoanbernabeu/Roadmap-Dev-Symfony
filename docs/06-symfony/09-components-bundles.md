---
sidebar_position: 9
---

# Les composants et bundles Symfony

## Composants

Symfony n'est pas un framework comme les autres. Il est pensé comme des  des composants, qui, mis en relation les uns avec les autres, forment un framework. Vous pouvez créer un projet avec le minimum syndical, et rajouter des composants par la suite, vous créant ainsi un framework sur mesure.

Nous avons déjà vu, sans forcément le mentionner, quelques uns des principaux composants de Symfony : le composant **routing** pour le routage, le composant **Twig** pour les templates, le composant **Form** pour les formulaires et le composant **Webpack-encore** pour la gestion du JS et du CSS.

Il existe plus d'une centaine de composants proposés par Symfony. Vous trouverez la liste complète [ici](https://symfony.com/components) mais en voici certains qui pourraient vous intéresser :

- [Console](https://symfony.com/components/Console) : pour la création de CLI
- [Translation](https://symfony.com/components/Translation) : pour la gestion du multilangues
- [Cache](https://symfony.com/components/Cache) : pour la gestion des caches
- [HttpClient](https://symfony.com/components/HttpClient) : pour appeler des API externes depuis Symfony
- [Mailer](https://symfony.com/components/Mailer) : pour construire et envoyer des emails
- [Validator](https://symfony.com/components/Validator) : pour valider des données
- [Monolog bundle](https://symfony.com/components/Monolog%20Bundle) : pour la gestion des logs
- [Messenger](https://symfony.com/components/Messenger) pour gérer un système de file d'attente
- [Workflow](https://symfony.com/components/Workflow) : pour gérer des machine à états finis
- [Security](https://symfony.com/components/Security) : pour gérer l'authentification et la sécurité

## Bundles

Symfony dispose d'un grand nombre de composants mais vous aurez peut-être des besoins spécifiques qu'aucun composant ne satisfait. Vous vous tournerez alors vers des librairies tierces. Celles qui sont faites pour s'intégrer facilement dans Symfony s'appellent des **bundles**. On peut les retrouver sur [Packagist](https://packagist.org/).

Il en existe des dizaines. En voici quelques uns qui pourraient vous interesser : 

- [KnpPaginatorBundle](https://github.com/KnpLabs/KnpPaginatorBundle) pour gérer un système de pagination
- [LiipImagineBundle](https://github.com/liip/LiipImagineBundle) pour manipuler des images (recadrage, redimensionnement, compression, etc.)
- [VichUploaderBundle](https://github.com/dustin10/VichUploaderBundle) pour gérer l'upload d'images attachées à une entité
- [EasyAdminBundle](https://github.com/EasyCorp/EasyAdminBundle) pour faciliter la création d'interface d'administration pour vos entités.

## Ressources

* [Apprendre utiliser Monolog avec Symfony par YoanDev](https://www.youtube.com/watch?v=ldHy9dYBz8o&t=1181s&ab_channel=YoanDev)

* [Apprendre utiliser le cache avec Symfony par Lior Chamla](https://www.youtube.com/watch?v=Pw8_EDZOnXA&ab_channel=LiorCHAMLA-WebDevelopMe)

* [Apprendre utiliser Workflow avec Symfony par YoanDev](https://www.youtube.com/watch?v=GcasBn8iAY4&ab_channel=YoanDev)

* [Apprendre utiliser KnpPaginatorBundle par Grafikart](https://grafikart.fr/tutoriels/pagination-1070#autoplay)

* [Apprendre utiliser VichUploaderBundle par Grafikart](https://grafikart.fr/tutoriels/upload-bundle-1073#autoplay)

* [Apprendre utiliser LiipImagineBundle par Grafikart](https://grafikart.fr/tutoriels/upload-bundle-1073#autoplay)

* [Apprendre utiliser EasyAdminBundle par Thomas Boileau](https://www.youtube.com/watch?v=IZGkhCFmxfY&ab_channel=Toham-ThomasBoileau)