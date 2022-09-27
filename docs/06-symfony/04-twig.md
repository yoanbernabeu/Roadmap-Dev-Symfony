---
sidebar_position: 4
---

# Twig

Twig est un langage qui va nous permettre de générer des pages HTML **dynamiques**. Il s'appuie sur le language HTML classique mais rajoute une syntaxe supplémentaire. Cette syntaxe est simple et ne gènera pas un intégrateur qui ne connait pas le Twig.

Prenons un exemple : 

Dans un contrôleur, on demande à Symfony de générer une page HTML en lui passant le chemin vers un template Twig et éventuellement des données à lui passer en second paramètre.

```
#[Route('/hello', name: 'presentation')]
public function presentation(): Response
{
    return $this->render('presentation/index.html.twig', [
        'firstname' => 'John',
        'age' => 34,
        'hobbies' => ['HTML', 'CSS', 'PHP']
    ]);
}
```

Ici, le contrôleur fait appel à la méthode ```render```, en lui passant en premier paramètre le chemin du fichier Twig ```index.html.twig``` (ici dans le répertoire ```templates/presentation```).

On lui passe en second paramètre les données qu'on va utiliser dans le template sous la forme d'un tableau associatif.

Le fichier ```index.html.twig``` va alors ressembler à ceci : 

```
<h1>Votre prénon est {{ firstname }}</h1>

{% if age >= 18 %}
    <h4>Vous êtes majeur</h4>
{% else %}
    <h4>Vous êtes mineur</h4>
{% endif %}

Vos hobby sont :

<ul>
    {% for hobby in hobbies %}
        <li>{{ hobby }}</li>
    {% endfor %}
</ul>
```

Ici, on utilise la variable ```firstname``` qu'on a passée au template avec la syntaxe des doubles accolades.

On utilise ensuite une commande Twig pour gérer une condition et afficher un texte différent selon la valeur de la variable ```age```.

Enfin, on utlise une commande Twig pour gérer les boucles. Ici, on boucle sur chaque élément présent dans le tableau qu'on a passé à Twig via la variable ```hobbies```, et on affiche chaque élément dans une liste. 

## Ressources

* [Apprendre à gérer Twig avec Symfony par Grafikart](https://grafikart.fr/tutoriels/routing-1065#autoplay)

* [Apprendre à gérer Twig avec Symfony par Nouvelle-Techno.fr](https://www.youtube.com/watch?v=OG-ALaraXoo&list=PLBq3aRiVuwyzI0MT4LhvwqkVenz5pF_DM&index=8&ab_channel=NouvelleTechno)