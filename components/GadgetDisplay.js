app.component("gadget-display", {
  props: ["gadget"],
  template: /*html*/ `
    <div class="gadget">
      <img v-bind:src="gadget.image" alt="Gadget">
      <h2>{{ gadget.name }}</h2>
      <p>Prix : {{ gadget.price }}€</p>
      <p :class="{'in-stock': gadget.inStock, 'out-of-stock': !gadget.inStock}">
        {{ gadget.inStock ? '✅ En stock' : '❌ En rupture de stock' }}
      </p>
      <button @click="addToCart" :disabled="!gadget.inStock">Ajouter au panier</button>

      <!-- Affichage des avis -->
      <h3 v-if="gadget.reviews.length > 0">Avis :</h3>
      <ul v-if="gadget.reviews.length > 0">
        <li v-for="review in gadget.reviews" :key="review.name">
          <strong>{{ review.name }}</strong> - {{ review.rating }}⭐
          <p>{{ review.comment }}</p>
        </li>
      </ul>
      <p v-else>Aucun avis pour ce produit.</p>

      <!-- Formulaire d'avis -->
      <review-form :gadget="gadget" @add-review="addReview"></review-form>
    </div>
`,
  methods: {
    addToCart() {
      this.$emit("add-to-cart", this.gadget);
    },
    addReview(review) {
      this.gadget.reviews.push(review); // 📌 Ajoute l'avis au produit
    },
  },
});
