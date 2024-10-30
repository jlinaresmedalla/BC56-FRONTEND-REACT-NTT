import { CartActionType } from "@/enums";
import { setPersistedCart } from "@/helpers/cart.helpers";
import { Cart, CartAction, CartItem } from "@/interfaces";

export const cartReducer = (state: Cart, action: CartAction): Cart => {
  switch (action.type) {
    case CartActionType.AddCartProduct: {
      const updatedState = [...state, action.payload as CartItem];
      setPersistedCart(updatedState);
      return updatedState;
    }

    case CartActionType.RemoveProduct: {
      const updatedState = state.filter((product) => product.id != (action.payload as number));
      setPersistedCart(updatedState);
      return updatedState;
    }

    case CartActionType.IncrementQuantity: {
      const updatedState = state.map((product) => {
        const newQuantity = product.quantity! + 1;
        if (product.id === action.payload) return { ...product, quantity: newQuantity };
        return product;
      });
      setPersistedCart(updatedState);
      return updatedState;
    }

    case CartActionType.DecrementQuantity: {
      const updatedState = state.map((product) => {
        const newQuantity = product.quantity! - 1;
        if (product.id === action.payload && product.quantity! > 1) return { ...product, quantity: newQuantity };
        return product;
      });
      setPersistedCart(updatedState);
      return updatedState;
    }

    case CartActionType.SetCart: {
      setPersistedCart(action.payload as Cart);
      return action.payload as Cart;
    }
  }
};
