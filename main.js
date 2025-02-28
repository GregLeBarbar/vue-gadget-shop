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
          reviews: [],
        },
        {
          id: 2,
          name: "Laptop Pro",
          price: 1299,
          image: "./assets/laptop.jpg",
          inStock: false,
          reviews: [],
        },
        {
          id: 3,
          name: "Écouteurs Bluetooth",
          price: 199,
          image: "./assets/earbuds.jpg",
          inStock: true,
          reviews: [],
        },
      ],
      cart: [],
    };
  },
  methods: {
    addToCart(gadget) {
      let itemInCart = this.cart.find((item) => item.id === gadget.id);
      if (itemInCart) {
        itemInCart.quantity++;
      } else {
        this.cart.push({ ...gadget, quantity: 1 });
      }
    },
    removeFromCart(index) {
      this.cart.splice(index, 1);
    },
    addReview(gadget, review) {
      gadget.reviews.push(review); // Ajoute l'avis au produit concerné
    },
  },
});
