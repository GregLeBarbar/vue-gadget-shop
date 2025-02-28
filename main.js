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
      return this.cart.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      );
    },
    discountedTotal() {
      return this.cartTotal >= 1000 ? this.cartTotal * 0.9 : this.cartTotal;
    },
  },
  methods: {
    addToCart(gadget) {
      let itemInCart = this.cart.find((item) => item.id === gadget.id);

      if (itemInCart) {
        itemInCart.quantity++; // Incrémente la quantité
      } else {
        this.cart.push({ ...gadget, quantity: 1 }); // Ajoute avec quantité = 1
      }
    },
    removeFromCart(index) {
      this.cart.splice(index, 1); // 🔥 Supprime l'article complètement du panier
    },
  },
});
