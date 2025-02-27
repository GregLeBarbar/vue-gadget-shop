# Vue Gadget Shop - step2-solution

## Affichage des gadgets avec data()

Ajoutons une première liste de gadgets avec leurs images.

📄 index.html (Mise à jour)

```html
<div id="app">
  <h1>{{ title }}</h1>
  <p>{{ description }}</p>

  <div class="gadget">
    <img v-bind:src="image" alt="Gadget" />
    <h2>{{ name }}</h2>
    <p>Prix : {{ price }}€</p>
  </div>
</div>
```

📄 main.js (Mise à jour)

```js
const app = Vue.createApp({
  data() {
    return {
      title: "Vue Gadget Shop",
      description:
        "Découvrez les derniers gadgets électroniques de haute technologie !",
      name: "Smartphone XZ",
      price: 799,
      image: "./assets/phone.jpg",
    };
  },
});

app.mount("#app");
```

🎯 Nouvelles notions :

- v-bind:src="image" : permet de lier dynamiquement l’attribut src à l’image du gadget.
- name et price sont liés dynamiquement aux balises HTML.
