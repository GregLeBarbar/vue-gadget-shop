# Vue Gadget Shop - step1-challenge

## 🎯 Objectif

Dans cette première étape, vous allez **créer la structure de base** de l'application Vue 3 avec l'API Option. L'objectif est d'afficher dynamiquement un **titre** et une **description** en utilisant Vue.js.

## 📂 Structure du projet

Avant de commencer, assurez-vous que votre projet est organisé comme ceci :

```bash
/vue-gadget-shop
│── index.html
│── main.js
│── style.css
```

---

## 🚀 Challenge

Vous devez arriver au résultat suivant :

![Résultat](images/step1-challenge.png "Résultat")

### Pour cela, vous devez :

✅ **Créer une structure HTML de base dans le fichier `index.html`**

- Inclure **Vue.js** via un CDN.
- Ajouter un élément `<div id="app">` qui servira de **point de montage**.
- Ajouter des balises `<h1>` et `<p>` pour afficher le **titre** et la **description** dynamiquement.

✅ **Créer un fichier **`mains.js`** et initialiser Vue 3**

- Définir une **instance Vue** avec `Vue.createApp()`.
- Définir **deux données réactives** (`title`, `description`) via `data()`.
- Monter l’application sur `#app` en utilisant `app.mount("#app")`.

✅ **Lier les données Vue**

- Utiliser la **syntaxe des moustaches** pour afficher dynamiquement `title`et`description`.

### 📌 Règles

- Le css est fourni dans le fichier `style.css`.
- **Ne pas utiliser d’autres frameworks** (Bootstrap, Tailwind, etc.), seulement Vue 3 et CSS natif.

💡 Une fois terminé, ouvrez `index.html` dans un navigateur et assurez-vous que **le texte s'affiche dynamiquement** grâce à Vue. 🎉
