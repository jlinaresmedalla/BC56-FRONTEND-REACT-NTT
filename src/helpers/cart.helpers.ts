import { LocalStorageKeys } from "@/enums";
import { getFromLocalStorage, saveToLocalStorage } from "@/services/localStorageService";
import { Cart } from "@/interfaces";

export const getPersistedCart = (): Cart => JSON.parse(getFromLocalStorage(LocalStorageKeys.Cart)!) || [];

export const setPersistedCart = (cart: Cart) => saveToLocalStorage(LocalStorageKeys.Cart, JSON.stringify(cart));

export const getCartCount = (cart: Cart): number =>
  cart.reduce((cartCounter, product) => {
    return cartCounter + product.quantity!;
  }, 0);

export const calculateCartTotalAmount = (cart: Cart): number =>
  cart.reduce((cartCounter, product) => {
    return cartCounter + product.quantity! * product.price;
  }, 0);
