---
sidebar_position: 6
---

# La programmation orientée objet

Il serait bien difficule de décrire en totalité les principes de la programmation orientée objet (POO) en quelques lignes. Nous allons juste voir quelques exemples rapidement.

Imaginons que vous travailliez sur un annuaire. Vous allez donc devoir gérer des personnes. Chacune aura par exemple un nom, un prénom et un email. C'est l'occasion de ce créer un type d'objet dédié, en écrivant ce qu'on appelle une classe.

```
class Person {
    
    firstname = ''
    lastname = ''
    email = ''

    constructor (firstname, lastname, email) {
        this.firstname = firstname
        this.lastname = lastname
        this.email = email
    }
}
```

Dans cette classe, on définit des propriété, auxquelles on assigne une valeur par défaut, puis grâce à la méthode ```constructor``` on assigne les données reçues à la construction. Quand on va construire un objet ```Person```, on le fera comme ceci :

```
const personne = new Person('John', 'Doe', 'john.doe@gmail.com')
```

On pourra accéder aux proprités de l'objet comme avec n'importe quel objet littéral (ceux avec les accolades). Ainsi, pour récupérer l'email on écrira ```personne.email```.

On peut aussi écrire des méthodes dans notre classe. Par exemple, rajoutons une méthode qui renverra une chaine formatée pour afficher la personne :

```
class Person {
    
    firstname = ''
    lastname = ''
    email = ''

    constructor (firstname, lastname, email) {
        this.firstname = firstname
        this.lastname = lastname
        this.email = email
    }

    getFormated() {
        return `${this.firstName} ${this.firstName} : ${this.email}` 
    }
}
```

On pourra donc utiliser cette méthode sur l'objet en écrivant ```personne.getFormated()```. Cela renverra ```John Doe : john.doe@gmail.com``` Notez qu'on a utilisé les backticks (le caractère `) pour écrire notre chaîne de carractère. A l'intérieur, on utilise ce qu'on appelle l'interpolation de variable, c'est à dire qu'on les écrit comme suit : ```${nom_de_la_variable}```

 ## Ressources

* [Apprendre à gérer les classes par Grafikart](https://grafikart.fr/tutoriels/class-2061#autoplay)