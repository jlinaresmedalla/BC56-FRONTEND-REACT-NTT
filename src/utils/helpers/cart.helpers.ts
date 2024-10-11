import { Cart } from "@/interfaces";

export const getCart = (): Cart => JSON.parse(localStorage.getItem("cart")!) || [];
export const setCart = (cart: Cart) => localStorage.setItem("cart", JSON.stringify(cart));

export const getCartCount = (cart: Cart): number =>
  cart.reduce((cartCounter, product) => {
    return cartCounter + product.quantity;
  }, 0);
