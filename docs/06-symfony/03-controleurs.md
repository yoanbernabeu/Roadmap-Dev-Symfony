---
sidebar_position: 3
---

# Les contrôleurs

Dans une application Symfony, et plus généralement dans une application qui suit le modèle MVC, les contrôlleurs (C) sont des bouts de code (généralement des classes) qui sont chargés de faire le lien entre le modèle (M) et la vue (C). Ce sont des méthodes de ces classes qui sont appelées par le routeur lorsqu'une requête arrive. 

Prenons un exemple : 

```
use App\Repository\PostRepository;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class BlogController extends AbstractController
{
    #[Route('/blog/', name: 'blog_index')]
    public function index(PostRepository $repo): Response
    {
        $posts = $repo->findAll();
        return $this->render('blog/index.html.twig', [
            'posts' => $posts
        ]);
    }
}
```

Dans le code ci-dessus, on définit une classe ```BlogController```. Elle peut hériter du ```AbstractController``` si on veut qu'elle puisse renvoyer une vue (ce qui est le cas ici). A l'intérieur, nous définissons une méthode ```index```, qui sera chargée de renvoyer la liste des articles d'un blog. Ici, elle est reliée à une route nommée ```blog_index``` qui répond à l'adresse ```/blog```. 

Dans les paramètres de cette methode, nous pouvons nous faire liver des services. Ici, nous injectons le service ```PostRepository```. Attention, cette injection en paramètre d'un méthode ne fonctione que dans les méthodes des contrôleurs. 

Dans cette méthode, nous faisons appel à la méthode ```findAll()``` du service ```BlogRepository```, qui va nous renvoyer l'ensemble des articles, et nous l'assignons à une variable ```$posts```

Puis nous retournons une vue située dans ```templates/blog/index.html.twig``` à laquelle nous passons cette variable, dans un tableau associatif en second paramètre de la méthode ```render``` disponible sur la classe.

## Ressources

* [Apprendre à créer des contrôleurs avec Symfony par Grafikart](https://grafikart.fr/tutoriels/routing-1065#autoplay)

* [Apprendre à créer des contrôleurs avec Symfony par Nouvelle-Techno.fr](https://www.youtube.com/watch?v=X_mNHTGJb5M&ab_channel=NouvelleTechno)

