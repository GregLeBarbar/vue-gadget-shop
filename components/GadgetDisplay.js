app.component("gadget-display", {
  props: ["gadget"], // Le gadget est passé en tant que prop depuis le parent
  template: /*html*/ `
          <div class="gadget">
              <img v-bind:src="gadget.image" alt="Gadget">
              <h2>{{ gadget.name }}</h2>
              <p>Prix : {{ gadget.price }}€</p>
              <p :class="{'in-stock': gadget.inStock, 'out-of-stock': !gadget.inStock}">
                  {{ gadget.inStock ? '✅ En stock' : '❌ En rupture de stock' }}
              </p>
              <button @click="addToCart" :disabled="!gadget.inStock">Ajouter au panier</button>
          </div>
      `,
  methods: {
    addToCart() {
      this.$emit("add-to-cart", this.gadget); // Émet un événement pour ajouter au panier
    },
  },
});
