import { Dispatch } from "react";
import { Product } from "./product.interface";
import { CartActionType } from "@/enums";

export type CartItem = Pick<Product, "id" | "title" | "price" | "thumbnail"> & { quantity?: number };

export type Cart = CartItem[];

export interface CartAction {
  type: CartActionType;
  payload: number | CartItem | Cart;
}

export interface CartContextProps {
  cartState: Cart;
  dispatch: Dispatch<CartAction>;
}
