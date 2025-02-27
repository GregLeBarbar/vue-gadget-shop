# Vue Gadget Shop - step6-solution

## 🏷️ Ajout du total du panier avec computed

Nous allons maintenant utiliser les propriétés calculées (computed) pour afficher dynamiquement le total du panier 💰.

### 🔹 1. Mise à jour du main.js pour calculer le total

On ajoute une propriété calculée `cartTotal` qui somme les prix des articles du panier.

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
      cart: [], // Panier initialisé comme un tableau vide
    };
  },
  computed: {
    cartTotal() {
      return this.cart.reduce((total, item) => total + item.price, 0);
    },
  },
  methods: {
    addToCart(gadget) {
      this.cart.push(gadget); // Ajoute l'article au panier
    },
    removeFromCart(index) {
      this.cart.splice(index, 1); // Supprime un article du panier par son index
    },
  },
});

app.mount("#app");
```

📌 Explication

computed permet de calculer dynamiquement la somme des prix dans cart.
reduce() additionne les prix de tous les gadgets dans le panier.
Avantage : cartTotal est recalculé uniquement si cart change, ce qui optimise les performances.

### 🔹 2. Mise à jour de index.html pour afficher le total

Ajoutons un affichage du total du panier en dessous de la liste des articles.

📄 index.html (Mise à jour)

```html
<div class="cart">
  <h2>🛒 Mon Panier ({{ cart.length }})</h2>
  <ul v-if="cart.length > 0">
    <li v-for="(item, index) in cart" :key="index">
      {{ item.name }} - {{ item.price }}€
      <button class="remove-btn" @click="removeFromCart(index)">❌</button>
    </li>
  </ul>
  <p v-else>Votre panier est vide.</p>

  <!-- Affichage du total -->
  <h3 v-if="cart.length > 0">💰 Total : {{ cartTotal }}€</h3>
</div>
```

📌 Explication

{{ cartTotal }}€ affiche dynamiquement le total calculé avec computed.
Le h3 apparaît seulement si le panier n’est pas vide (v-if="cart.length > 0").

### 🔹 3. Ajout d'une réduction dynamique 🏷️

Ajoutons une remise automatique de -10% si le total dépasse 1000€.

Mise à jour du main.js

Ajoutons une nouvelle propriété discountedTotal qui applique une remise.

```js
computed: {
  cartTotal() {
    return this.cart.reduce((total, item) => total + item.price, 0);
  },

  discountedTotal() {
    return this.cartTotal >= 1000 ? this.cartTotal * 0.9 : this.cartTotal;
  }
}
```

Mise à jour de index.html

Affichons le total avec ou sans remise :

```html
<h3 v-if="cart.length > 0">
  💰 Total : <span v-if="cartTotal < 1000">{{ cartTotal }}€</span>
  <span v-else>
    <s>{{ cartTotal }}€</s> ➝ <strong>{{ discountedTotal }}€ (-10%)</strong>
  </span>
</h3>
```

📌 Explication

cartTotal = Somme des prix des articles.
discountedTotal = Si cartTotal dépasse 1000€, on applique -10%.
s = Barre le prix original si la remise s’applique.
strong = Affiche le nouveau prix réduit.

### 🎨 4. Ajout de styles pour le total (style.css)

Ajoutons un peu de style pour améliorer l'affichage.

📄 style.css (Mise à jour)

```css
/* Total Price */
h3 {
  margin-top: 10px;
  font-size: 1.4rem;
  color: #007bff;
}

/* Price with discount */
s {
  color: red;
  font-size: 1.2rem;
}

strong {
  color: green;
  font-size: 1.4rem;
}
```
