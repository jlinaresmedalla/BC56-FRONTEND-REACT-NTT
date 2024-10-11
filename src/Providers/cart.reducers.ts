import { CartAction, StoreState } from "@/interfaces";
import { setCart } from "@/utils/helpers/cart.helpers";
import { Dispatch } from "react";

export enum CartActionType {
  INCREMENT_QUANTITY_BY_ID = "INCREMENT_QUANTITY_BY_ID",
}

export const cartReducer = ({ cart }: StoreState, action: CartAction): StoreState => {
  if (action.type === CartActionType.INCREMENT_QUANTITY_BY_ID) {
    const productIndex = cart.findIndex((p) => p.id === action.payload.id);

    if (productIndex !== -1) {
      cart[productIndex].quantity += 1;
    } else {
      cart.push({ id: action.payload.id, quantity: 1 });
    }

    setCart(cart);

    return { cart };
  }

  throw new Error();
};

export const AddCartItem = (dispatch: Dispatch<CartAction>, payload: { id: number }) =>
  dispatch({ type: CartActionType.INCREMENT_QUANTITY_BY_ID, payload });
