# Vue Gadget Shop - step5-solution

## 🛒 Ajout de la gestion des événements (v-on) pour le panier

Nous allons maintenant permettre aux utilisateurs d’ajouter et supprimer des gadgets du panier en utilisant la directive v-on pour écouter les événements de clic.

### 🔹 1. Mise à jour du main.js pour gérer le panier

On ajoute une donnée cart pour stocker les articles et des méthodes pour gérer l’ajout et la suppression.

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

### 🔹 2. Mise à jour du index.html pour afficher le panier

On affiche les articles ajoutés au panier et permet de les supprimer.

📄 index.html (Mise à jour) Ajoute ce bloc au-dessus des produits pour afficher le panier :

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
</div>
```

Et ajoute les boutons "Ajouter au panier" pour chaque gadget :

```html
<div class="gadget-container">
  <div class="gadget" v-for="gadget in gadgets" :key="gadget.id">
    <img v-bind:src="gadget.image" alt="Gadget" />
    <h2>{{ gadget.name }}</h2>
    <p>Prix : {{ gadget.price }}€</p>
    <p :class="{'in-stock': gadget.inStock, 'out-of-stock': !gadget.inStock}">
      {{ gadget.inStock ? '✅ En stock' : '❌ En rupture de stock' }}
    </p>
    <button @click="addToCart(gadget)" :disabled="!gadget.inStock">
      Ajouter au panier
    </button>
  </div>
</div>
```

### 🔹 3. Ajout de styles pour le panier (style.css) Ajoute ces styles pour rendre le panier plus joli :

📄 style.css (Mise à jour)

```css
/* Cart Container */
.cart {
  background: white;
  padding: 15px;
  margin-bottom: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
}

/* Cart Items */
.cart ul {
  list-style: none;
  padding: 0;
}

.cart li {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.2rem;
  padding: 5px;
}

/* Remove Button */
.remove-btn {
  background: red;
  color: white;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
  border-radius: 5px;
  transition: background 0.3s ease-in-out;
}

.remove-btn:hover {
  background: darkred;
}
```
