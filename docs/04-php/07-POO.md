---
sidebar_position: 7
---

# La programmation oritentée objet en PHP
 
Il serait bien difficule de décrire en totalité les principes de la programmation orientée objet (POO) en quelques lignes. Nous allons juste voir quelques exemples rapidement.

Imaginons que vous travailliez sur un annuaire. Vous allez donc devoir gérer des personnes. Chacune aura par exemple un nom, un prénom et un email. C'est l'occasion de ce créer un type d'objet dédié, en écrivant ce qu'on appelle une classe.

```php
class Person {

    constructor (
        public string $firstname, 
        public string $lastname, 
        public string $email
        ) {}
}
```

Dans cette classe, on définit des propriétés grâce à la méthode ```constructor```. Quand on va construire un objet ```Person```, on le fera comme ceci :

```
$personne = new Person('John', 'Doe', 'john.doe@gmail.com');
```

Pour récupérer l'email on écrira ```$personne->email;```.

On peut aussi écrire des méthodes dans notre classe. Par exemple, rajoutons une méthode qui renverra une chaine formatée pour afficher la personne :

```php
class Person {

    constructor (
        public string $firstname, 
        public string $lastname, 
        public string $email
        ) {}

    public function getFormated() {
        return "$this->firstName $this->lastname : $this->email";
    }
}
```

On pourra donc utiliser cette méthode sur l'objet en écrivant ```$personne->getFormated()```. Cela renverra ```John Doe : john.doe@gmail.com```.

## Ressources

* [Apprendre la POO en PHP par Lior Chamla](https://www.youtube.com/watch?v=fZcGXjg97Ns&ab_channel=LiorCHAMLA-WebDevelopMe)