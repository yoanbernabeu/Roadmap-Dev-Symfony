---
sidebar_position: 9
---

# La gestion du DOM

Quand on travaille côté navigateur, il peut être utile d'intéragir avec le DOM. Ainsi, on peut manipuler le contenu des éléments, leurs styles, leurs attributs, etc. 

Pour sélectionner un élement du DOM avec JavaScript, on utilise une méthode ```querySelector``` sur l'objet ```document```. Cette méthode utilise un sélecteur CSS classique. 

Imaginons le code HTML suivant : 

```
<div class="hello"></div>
```

On peut changer le texte de la div avec le code suivant :

```
const div = document.querySelector('.hello')

div.innerHTML = '<strong>Bonjour</strong>'
```

On peut aussi par exemple changer le style d'un élement :

```
const div = document.querySelector('.hello')

div.style.fontSize = '24px'
div.classList.add('red')
```

## Ressources

* [Apprendre à manipuler le DOM par Grafikart](https://grafikart.fr/tutoriels/javascript-dom-2071)