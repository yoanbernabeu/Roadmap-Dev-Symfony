---
sidebar_position: 2
---

# Le routage

Dans une application Symfony, et plus généralement dans une application Web, l'utilisateur va taper une adresse dans son navigateur ou cliquer sur un lien qui pointe vers cette adresse. Le routage consiste à orienter l'utilisateur vers la page demandée, un peu comme une gare de triage. On expliquera par exemple que si l'utilisateur tape ```/resources/A``` ou clique sur un lien qui pointe vers cette adresse, on doit lui renvoyer la ressource A. Les routes sont les différentes adresses de votre application.

Dans Symfony, il y a deux manières de définir les routes de l'application. On peut passer par un fichier qui liste les différentes routes et leur associe une méthode d'un contrôleur qui va se charger de fournir la ressource correspondante. Mais généralement, on utilisera ce qu'on appelle des annotations ou des attributs PHP8. Ce sont des sortes de commentaires qu'on écrit au dessus d'une méthode dans un contrôleur.

Exemple :

```
class HomeController extends AbstractController
{
    #[Route('/home', name: 'home')]
    public function index(): Response
    {
        return $this->render('home/index.html.twig');
    }

}
```

Ici, on explique que lorsqu'on sera à l'adresse ```/home```, il faudra appeler la méthode ```index``` dans le contrôleur ```HomeController```. Dans cette exemple, cette méthode renverra une page HTML, écrite en Twig, définie dans un fichier ```index.html.twig``` et disponible dans le dossier ```/templates/home```.

On peut aussi passer par un fichier qui liste toutes les routes de l'application. En reprenant le même exemple, il faudra éditer le fichier ```routes.yaml``` disponible dans le dossier ```config```.

```
home
    path : /home
    controller : App\Controller\HomeController::index
```

## Ressources

* [Apprendre à gérer les routes avec Symfony](https://grafikart.fr/tutoriels/routing-1065#autoplay)
