app.component("review-form", {
  props: ["gadget"], // Le gadget sur lequel on laisse un avis
  data() {
    return {
      review: {
        name: "",
        rating: null,
        comment: "",
      },
      submitted: false,
    };
  },
  template: /*html*/ `
    <div class="review-form">
        <h3 class="review-block">Donnez votre avis sur {{ gadget.name }}</h3>
        <form @submit.prevent="submitReview">
            <div class="review-block">
                <label for="name">Nom </label>
                <input type="text" id="name" v-model="review.name" required>  
            </div>
            <div class="review-block">
                <label for="rating">Note </label>
                <select id="rating" v-model="review.rating" required>
                    <option disabled value="">Sélectionnez une note</option>
                    <option value="5">⭐⭐⭐⭐⭐ - Excellent</option>
                    <option value="4">⭐⭐⭐⭐ - Très bien</option>
                    <option value="3">⭐⭐⭐ - Moyen</option>
                    <option value="2">⭐⭐ - Mauvais</option>
                    <option value="1">⭐ - Très mauvais</option>
                </select>
            </div>
            <div class="review-block">
                <label for="comment">Commentaire :</label>
                <textarea id="comment" v-model="review.comment" rows="3" required></textarea>
            </div>
            <button type="submit">Envoyer l'avis</button>
        </form>
    
        <p v-if="submitted" class="confirmation">✅ Merci ! Votre avis a été enregistré.</p>
    </div>
  `,
  methods: {
    submitReview() {
      this.$emit("add-review", this.review); // 📌 Émet un événement pour ajouter l'avis
      this.submitted = true; // Affiche le message de confirmation
      // Réinitialise le formulaire
      this.review = { name: "", rating: null, comment: "" };
    },
  },
});
