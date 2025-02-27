# Vue Gadget Shop - step2-solution

## Rendu conditionnel (v-if & v-show)

Ajoutons une condition pour afficher si le produit est en stock.

📄 index.html (Mise à jour)

```html
<p v-if="inStock">✅ En stock</p>
<p v-else>❌ En rupture de stock</p>
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
      inStock: true, // Produit en stock ou non
    };
  },
});

app.mount("#app");
```

🎯 Nouvelle notion :

- v-if="inStock" affiche le texte "En stock" uniquement si inStock est true.
- v-else affiche "En rupture de stock" si inStock est false.
