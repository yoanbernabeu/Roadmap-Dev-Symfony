---
sidebar_position: 7
---

# Les services

Lorsqu'on écrit du code, on aime que celui-ci soit bien rangé. On évite de faire de trop gros bouts de code, on préfère les morceler en de petits morceaux, plus faciles à maintenir, à faire évoluer et à débugger. De même, on peut être amené à vouloir réutiliser le même code à plusieurs endroits différents de l'application. Les services permettent de répondre à cette problématique.

Symfony propose déjà des services tout en un, par exemple pour gérer des logs, envoyer des emails, gérer le cache, etc. Mais il est tout à fait possible de créer ses propres services. De plus, un service peut tout à fait faire appel à d'autres services.

Prenons un exemple :

```php
function SayHello(string $prenom, string $lang='EN') : string
{
   $hellos = [
       'EN' => 'Hello',
       'DE' => 'GutenTag',
       'FR' => 'Bonjour',
       'ES' => 'Hola'
   ];

   return $hellos[$lang] . ' ' . $prenom . '!';
}
```

Cette fonction prend en entrée un prénom et éventuellement une langue et retourne ```Bonjour``` suivi du prénom dans cette langue.

Transformons la en service. Nous créons un fichier ```HelloService.php``` que nous rangeons dans un dossier ```services```

Dedans, nous écrivons une classe : 

```php
<?php

namespace App\Service;

class HelloService
{
    public function SayHello(string $prenom, string $lang='EN'): string
    {
        $hellos = [
            'EN' => 'Hello',
            'DE' => 'GutenTag',
            'FR' => 'Bonjour',
            'ES' => 'Hola'
        ];

        return $hellos[$lang] . ' ' . $prenom . '!';
    }
}
```

Si nous souhaitons faire appel à la méthode ```SayHello``` de ce service dans une méthode d'un contrôleur relié à une route, nous pouvons injecter ce service dans les paramètres de la méthode.

```php
use App\Service\HelloService;
use Symfony\Component\HttpFoundation\Response;

#[Route('/hello/{firstname}', name: 'hello')]
public function hello(string $firstname, HelloService $helloService)
{
    $helloString = $helloService->SayHello($firstname, 'FR')

    $response = new Response(
        $helloString,
        Response::HTTP_OK,
        ['content-type' => 'text/html']
    );

    $response->send() 
}
```

Si nous souhaitons utiliser ce service dans une méthode d'une autre classe, nous pouvons l'injecter grâce au constructeur.

```php
use App\Service\HelloService;

class ServiceB
{
    public function __construct(
        private HelloService $helloService
    )
    {}

    public function something(): string
    {
        return $this->helloService->SayHello('John', 'EN');
    }
```

## Ressources

* [Apprendre à gérer les services avec Symfony par Nouvelle-Techno.fr](https://www.youtube.com/watch?v=NgnRtEH8Yk4&ab_channel=NouvelleTechno)