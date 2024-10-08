import { Cart } from "../../interfaces/cart.interface";

export const getCart = (): Cart => JSON.parse(localStorage.getItem("cart")!) || [];
export const setCart = (cart: Cart) => localStorage.setItem("cart", JSON.stringify(cart));

export const getCartCount = (): number =>
  getCart().reduce((cartCounter, product) => {
    return cartCounter + product.quantity;
  }, 0);
