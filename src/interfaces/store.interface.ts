import { Dispatch } from "react";
import { Cart } from "./cart.interface";
import { CartActionType } from "@/Providers/cart.reducers";

export interface StoreState {
  cart: Cart;
}

export interface CartAction {
  type: CartActionType;
  payload: { id: number };
}

export interface StoreContextProps {
  state: StoreState;
  dispatch: Dispatch<CartAction>;
}

export interface CartContextProps {
  state: Cart;
  dispatch: Dispatch<CartAction>;
}
