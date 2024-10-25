import { Cart, CartAction, CartActionType, CartItem } from "@/interfaces";
import { Dispatch } from "react";

export const addNewProduct = (product: CartItem, dispatch: Dispatch<CartAction>) => {
  product.quantity = 1;
  dispatch({ type: CartActionType.ADD_PRODUCT, payload: product });
};

export const removeCartProduct = (id: number, dispatch: Dispatch<CartAction>) => {
  dispatch({ type: CartActionType.REMOVE_PRODUCT, payload: id });
};

export const incrementQuantity = (id: number, dispatch: Dispatch<CartAction>) => {
  dispatch({ type: CartActionType.INCREMENT_QUANTITY, payload: id });
};

export const decrementQuantity = (id: number, dispatch: Dispatch<CartAction>) => {
  dispatch({ type: CartActionType.DECREMENT_QUANTITY, payload: id });
};

export const resetCart = (dispatch: Dispatch<CartAction>) => {
  dispatch({ type: CartActionType.SET_CART, payload: [] });
};

export const addCartProduct = (product: CartItem, cartState: Cart, dispatch: Dispatch<CartAction>) => {
  const productExist = cartState.some((item) => item.id === product.id);
  if (productExist) {
    incrementQuantity(product.id, dispatch);
    return;
  }
  addNewProduct(product, dispatch);
};
