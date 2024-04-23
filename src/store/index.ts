import { defineStore } from "pinia";
import products from "../assets/data.json";

const peticiones = defineStore("store", {
  state: () => ({
    cart: [],
    products: products,
  }),
  actions: {
    addToCart({ product, quantity }) {
      let newItem = this.products.find(({ id }) => id === product.id);
      let itemInCart = this.cart.find(({ id }) => id === newItem.id);
      if (itemInCart) {
        this.cart = this.cart.map((item: any) =>
          item.id === newItem.id ? { ...item, quantity } : item
        );
      } else {
        this.cart.push({ ...newItem, quantity });
      }
    },
    removeItemToCart(id: any) {
      this.cart = this.cart.filter((item: any) => item.id !== id);
    },
    removeOneItem(id: any) {
      let itemToDelete = this.cart.find((item: any) => item.id === id);
      if (itemToDelete.quantity > 1) {
        this.cart = this.cart.map((item: any) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        );
      } else {
        this.cart = this.cart.filter((item: any) => item.id !== id);
      }
    },
    addFavorite(id: any) {
      let searchItem = this.products.find((item: any) => item.id === id);
      searchItem.favorite = !searchItem.favorite;
    },
  },
});
export default peticiones;
