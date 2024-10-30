import { CartActionType } from "@/enums";
import { Cart, CartAction, CartItem } from "@/interfaces";
import { Dispatch } from "react";

export const addNewProduct = (product: CartItem, dispatch: Dispatch<CartAction>) => {
  product.quantity = 1;
  dispatch({ type: CartActionType.AddCartProduct, payload: product });
};

export const removeCartProduct = (id: number, dispatch: Dispatch<CartAction>) => {
  dispatch({ type: CartActionType.RemoveProduct, payload: id });
};

export const incrementQuantity = (id: number, dispatch: Dispatch<CartAction>) => {
  dispatch({ type: CartActionType.IncrementQuantity, payload: id });
};

export const decrementQuantity = (id: number, dispatch: Dispatch<CartAction>) => {
  dispatch({ type: CartActionType.DecrementQuantity, payload: id });
};

export const resetCart = (dispatch: Dispatch<CartAction>) => {
  dispatch({ type: CartActionType.SetCart, payload: [] });
};

export const addCartProduct = (product: CartItem, cartState: Cart, dispatch: Dispatch<CartAction>) => {
  const productExist = cartState.some((item) => item.id === product.id);
  if (productExist) {
    incrementQuantity(product.id, dispatch);
    return;
  }
  addNewProduct(product, dispatch);
};
