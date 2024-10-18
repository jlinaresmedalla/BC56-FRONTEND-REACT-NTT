import { Cart } from "@/interfaces";

export const getPersistedCart = (): Cart => JSON.parse(localStorage.getItem("cart")!) || [];
export const setPersistedCart = (cart: Cart) => localStorage.setItem("cart", JSON.stringify(cart));

export const getCartCount = (cart: Cart): number =>
  cart.reduce((cartCounter, product) => {
    return cartCounter + product.quantity!;
  }, 0);

export const calculateCartTotalAmount = (cart: Cart): number =>
  cart.reduce((cartCounter, product) => {
    return cartCounter + product.quantity! * product.price;
  }, 0);
