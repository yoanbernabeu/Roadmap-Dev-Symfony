---
sidebar_position: 5
---

# Les modèles

Les modèles sont une façon de représenter les données avec lesquelles ont va travailler. Elle viennent la plupart du temps d'une base de données. Avec Symfony, on appelle ça des **entités**. Une entité représente une table de la base de données. On y définit des propriétés qui représentent les champs de la table.

Chaque propriété définit un type de donnée et éventuellement sa longueur. On peut aussi spécifier des règles de validation.

On dispose également de deux autres classes pour travailler avec notre entité. Un **repository**, qui est une classe qui va nous servir à récupérer des données et un **Entity manager** qui va nous servir à les enregistrer, les mettre à jour ou les supprimer.

Prenons un exemple :

```
namespace App\Entity;
use App\Repository\PostRepository;
use Doctrine\ORM\Mapping as ORM;
use Doctrine\DBAL\Types\Types;
use Symfony\Component\Validator\Constraints as Assert;
use Symfony\Bridge\Doctrine\Validator\Constraints\UniqueEntity;

#[ORM\Entity(repositoryClass: PostRepository::class)]
#[UniqueEntity("title")]
class Post
{
    #[ORM\Id, ORM\GeneratedValue(strategy: 'AUTO')]
    #[ORM\Column(type: Types::INTEGER)]
    private ?int $id = null;

    #[ORM\Column(type: Types::STRING, length: 255)]
    #[Assert\NotBlank]
    private string $title;

    #[ORM\Column(type: Types::TEXT)]
    #[Assert\NotBlank]
    private string $content;
}
```

Ici, on définit une entité ```Post```. Elle contient trois proprités qui sont autant de champs dans la table.

La propriété ```$id``` définit un entier pour stocker l'identifiant de l'article, avec une stratégie d'auto-incrémentation.

La proprité ```$title``` définit une chaîne de caractère, de longueur maximale 255 pour stocker le titre de l'article. On spécifie également qu'elle ne peut pas être vide.

De même avec la propriété ```$content``` qui a un type texte long.

Lorsqu'on voudra récupérer des données, on fera appel au ```PostRepository``` en utilisant des méthodes comme ```findAll()``` ou ```findBy()```


```
public function index(PostRepository $repo): Response
{
    $posts = $repo->findAll();
}
```

Lorsque nous voudrons enregistrer, mettre à jour ou supprimer des données, on fera appel au ```EntityManager```, avec des méthodes comme ```persist()``` ou ```remove()```.

```
public function deletePost(Post $post = null, EntityManagerInterface $entityManager): Response
{
    $entityManager->remove($post);
    $entityManager->flush();
}
```

## Ressources

* [Apprendre à gérer les entités avec Symfony par Grafikart](https://grafikart.fr/tutoriels/doctrine-decouverte-1066#autoplay)

* [Apprendre à gérer les entités avec Symfony par Nouvelle-Techno.fr](https://www.youtube.com/watch?v=MhVAwrujifQ&list=PLBq3aRiVuwyzI0MT4LhvwqkVenz5pF_DM&index=3&ab_channel=NouvelleTechno)