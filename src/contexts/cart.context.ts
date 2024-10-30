import { createContext } from "react";
import { getPersistedCart } from "@/helpers/cart.helpers";
import { Cart, CartContextProps } from "@/interfaces";

export const initalCartState: Cart = getPersistedCart();

export const CartContext = createContext<CartContextProps>({
  cartState: initalCartState,
  dispatch: () => {},
});
