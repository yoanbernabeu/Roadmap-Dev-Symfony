---
sidebar_position: 5
---

# Les évênements

Quand on travaille avec le navigateur, il est parfois utile de pouvoir réagir à certains évènements : le clic sur un bouton, une frappe au clavier dans un champ texte, la souris qui bouge, etc.

Pour déclancher du code quand un de ces évènement se produit, on utilise ce qu'on appelle des écouteurs d'évènement. Le principe est simple : on définit l'élement sur lequel on écoute, le type d'évènement qu'on attend et une fonction qui sera appelée quand il se produira. 

Par exemple, si on souhaite réagir au clic sur un élement du DOM, par exemple un bouton, on peut écrire le code suivant : 

```js
const button = document.querySelector('#loginBT')

button.addEventListener('click', function () {
    console.log('on a cliqué sur le bouton') 
})
```

Pour une frappe dans un champ texte, on peut écrire le code suivant : 

```js
const input = document.querySelector('input');

input.addEventListener('input', updateValue);

function updateValue(e) {
  console.log('vous avez tapé : ' + e.target.value);
}
```

Pour écouter les déplacement de la souris, on peut écrire quelque chose comme ça.

```js
document.addEventListener('mousemove', (e) => {
   console.log(`la souris a bougé en ${e.offsetX}/${e.offsetY}.`
  }
});
```

## Ressources

* [Apprendre à manipuler les écouteurs par Grafikart](https://grafikart.fr/tutoriels/javascript-eventlistener-2072#autoplay)