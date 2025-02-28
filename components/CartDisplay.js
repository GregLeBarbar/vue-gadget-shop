app.component("cart-display", {
  props: ["cart", "cartTotal", "discountedTotal"], // Le panier et le total sont passés en props
  template: `
      <div class="cart">
          <h2>🛒 Mon Panier ({{ cart.length }})</h2>
          <ul v-if="cart.length > 0">
              <li v-for="(item, index) in cart" :key="index">
                  {{ item.name }} - {{ item.price }}€
                  <button class="remove-btn" @click="removeItem(index)">❌</button>
              </li>
          </ul>
          <p v-else>Votre panier est vide.</p>
  
          <!-- Affichage du total -->
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
      this.$emit("remove-from-cart", index); // Émet un événement pour supprimer du panier
    },
  },
});
