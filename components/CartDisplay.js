app.component("cart-display", {
  props: ["cart", "cartTotal", "discountedTotal"],
  template: `
      <div class="cart">
        <h2>🛒 Mon Panier ({{ cart.length }})</h2>
        <ul v-if="cart.length > 0">
          <li v-for="(item, index) in cart" :key="index">
            {{ item.name }} - {{ item.price }}€
            <button @click="decreaseQuantity(index)">➖</button>
            <strong>{{ item.quantity }}</strong>
            <button @click="increaseQuantity(index)">➕</button>
            <button class="remove-btn" @click="removeItem(index)">❌</button>
          </li>
        </ul>
        <p v-else>Votre panier est vide.</p>
  
        <h3 v-if="cart.length > 0">
            💰 Total :
            <span v-if="cartTotal < 1000">{{ cartTotal }}€</span>
            <span v-else>
                <s>{{ cartTotal }}€</s> ➝
                <strong>{{ discountedTotal }}€ (-10%)</strong>
            </span>
        </h3>
      </div>
    `,
  methods: {
    removeItem(index) {
      this.$emit("remove-from-cart", index);
    },
    increaseQuantity(index) {
      this.cart[index].quantity++; // Augmente la quantité
    },
    decreaseQuantity(index) {
      if (this.cart[index].quantity > 1) {
        this.cart[index].quantity--; // Diminue la quantité
      } else {
        this.removeItem(index); // Supprime si quantité = 1
      }
    },
  },
});
