import { createContext } from "react";
import { getPersistedCart, setPersistedCart } from "@/helpers/cart.helpers";
import { Cart, CartAction, CartActionType, CartContextProps, CartItem } from "@/interfaces";

export const initalCartState: Cart = getPersistedCart();

export const CartContext = createContext<CartContextProps>({
  cartState: initalCartState,
  dispatch: () => {},
});

export const cartReducer = (state: Cart, action: CartAction): Cart => {
  switch (action.type) {
    case CartActionType.ADD_PRODUCT: {
      const updatedState = [...state, action.payload as CartItem];
      setPersistedCart(updatedState);
      return updatedState;
    }

    case CartActionType.REMOVE_PRODUCT: {
      const updatedState = state.filter((product) => product.id != (action.payload as number));
      setPersistedCart(updatedState);
      return updatedState;
    }

    case CartActionType.INCREMENT_QUANTITY: {
      const updatedState = state.map((product) => {
        const newQuantity = product.quantity! + 1;
        if (product.id === action.payload) return { ...product, quantity: newQuantity };
        return product;
      });
      setPersistedCart(updatedState);
      return updatedState;
    }

    case CartActionType.DECREMENT_QUANTITY: {
      const updatedState = state.map((product) => {
        const newQuantity = product.quantity! - 1;
        if (product.id === action.payload && product.quantity! > 1) return { ...product, quantity: newQuantity };
        return product;
      });
      setPersistedCart(updatedState);
      return updatedState;
    }

    case CartActionType.SET_CART: {
      setPersistedCart(action.payload as Cart);
      return action.payload as Cart;
    }

    default:
      return state;
  }
};
