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
      // Supprime un article du panier par son index
      // splice prend en 1er paramètre l'indice à partir duquel on commence à changer le tableau
      // et en 2ème paramètre le nb d'éléments à supprimer
      this.cart.splice(index, 1);
    },
  },
});

app.mount("#app");
