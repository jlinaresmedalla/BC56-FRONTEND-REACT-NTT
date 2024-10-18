import { Dispatch } from "react";
import { Product } from "./product.interface";

export type CartItem = Pick<Product, "id" | "title" | "price" | "thumbnail"> & { quantity?: number };

export type Cart = CartItem[];

export enum CartActionType {
  ADD_PRODUCT = "Add cart product",
  INCREMENT_QUANTITY = "Imcrement quantity",
  DECREMENT_QUANTITY = "Decrement quantity",
  REMOVE_PRODUCT = "Remove cart product",
}

export interface CartAction {
  type: CartActionType;
  payload: number | CartItem;
}

export interface CartContextProps {
  cartState: Cart;
  dispatch: Dispatch<CartAction>;
}
