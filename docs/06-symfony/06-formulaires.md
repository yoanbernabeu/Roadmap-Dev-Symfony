---
sidebar_position: 6
---

# Les formulaires

Bien qu'il soit tout à fait possible de gérer les formulaires comme on le fait d'habitude en PHP (en analysant la requête), Symfony propose une autre solution, plus puissante.

Elle consiste en l'introduction d'un objet ```Form```, sur lequel on a des méthodes pour ajouter des champs, relier le formulaire a une entité, gérer les erreurs de validation, vérifier qu'un formulaire a été soumis et qu'il est valide, etc. Côté vue, on dispose de commandes Twig pour afficher le formulaire, gérer son apparence, l'affichage des erreurs, etc.

Reprenons notre exemple de l'entité ```Post``` qu'on a vu dans le chapitre précédent. Pour gérer le formulaire qui va permettre d'ajouter un nouvel article, on va d'abord créer une classe ```PostType```, qu'on rangera dans un dossier ```Form```.

```php
namespace App\Form;

use App\Entity\Post;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class PostType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('title')
            ->add('content')
            ->add('save', SubmitType::class, ['label' => 'Sauvegarder']);
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => Post::class,
        ]);
    }
}
```

Puis dans le contrôleur, on gère le formulaire. Une seule route peut servir à prendre en compte l'affichage du formulaire et sa soumission.

```php
use App\Entity\Post;
use App\Form\PostType;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;

#[Route('/post/new', name: 'post_create')]
public function newPost(Request $request, EntityManagerInterface $entityManager): Response
{
    $post = new Post();

    $form = $this->createForm(PostType::class, $post);

    $form->handleRequest($request);
    if ($form->isSubmitted() && $form->isValid()) {
        $entityManager->persist($post);
        $entityManager->flush();

        return $this->redirectToRoute('home');
    }

    return $this->renderForm('post/new.html.twig', [
        'postForm' => $form,
    ]);
}
```

Ici, l'objet ```post``` va automatiquement être rempli avec les données saisies. On vérifie si un formulaire a été soumis et si les données rentrées sont valides, si c'est le cas on sauvegarde l'entitée.

Côté vue, on utilise des commandes Twig pour afficher le formulaire.

```twig
{% form_theme postForm 'bootstrap_5_layout.html.twig' %}

{{form_start(postForm)}}

{{form_row(postForm.title, {attr: { placeholder: "Titre de l'article"}, label: 'Titre'})}}
{{form_row(postForm.content, {attr: { placeholder: "Contenu de l'article", rows: 20}, label: 'Contenu'})}}

{{form_end(postForm)}}
```

Ici, on utilise un template Bootstrap fourni par Symfony. On peut afficher le formulaire entier avec une seul commande ```{{ form(Postform) }}``` ou bien gérer les champs un à un comme dans l'exemple. 

Symfony génère un formulaire qui prend en compte la validation HTML5 côté client, en fonction des contraintes des entitées. Une validation côté serveur a également lieu. Si il y a des erreurs de validation, on peut les afficher avec la commande ```{{ form_errors(form) }}``` (ici elles sont prises en compte par le template Bootstrap).

## Ressources

* [Apprendre à gérer les formulaires avec Symfony par Lior Chamla](https://www.youtube.com/watch?v=_cgZheTv-FQ&ab_channel=LiorCHAMLA-WebDevelopMe)
