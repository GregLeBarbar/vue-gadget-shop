# Vue Gadget Shop - step2-solution

## Rendu de liste (v-for)

Ajoutons plusieurs gadgets à notre boutique !

📄 index.html (Mise à jour)

```html
<div class="gadget" v-for="gadget in gadgets" :key="gadget.id">
  <img v-bind:src="gadget.image" alt="Gadget" />
  <h2>{{ gadget.name }}</h2>
  <p>Prix : {{ gadget.price }}€</p>
  <p v-if="gadget.inStock">✅ En stock</p>
  <p v-else>❌ En rupture de stock</p>
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
      gadgets: [
        {
          id: 1,
          name: "Smartphone XZ",
          price: 799,
          image: "./assets/phone.jpg",
          inStock: true,
        },
        {
          id: 2,
          name: "Laptop Pro",
          price: 1299,
          image: "./assets/laptop.jpg",
          inStock: false,
        },
        {
          id: 3,
          name: "Écouteurs Bluetooth",
          price: 199,
          image: "./assets/earbuds.jpg",
          inStock: true,
        },
      ],
    };
  },
});

app.mount("#app");
```

🎯 Nouvelle notion :

- v-for="gadget in gadgets" itère sur chaque gadget pour afficher les informations.
- :key="gadget.id" permet à Vue de suivre chaque élément de la liste.
