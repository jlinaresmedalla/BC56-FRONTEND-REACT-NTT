import { FC, PropsWithChildren, useReducer } from "react";
import { CartContext, initalCartState } from "./cart.context";
import { cartReducer } from "./reducers/cart.reducer";

export const CartProvider: FC<PropsWithChildren> = ({ children }) => {
  const [cartState, dispatch] = useReducer(cartReducer, initalCartState);

  return <CartContext.Provider value={{ cartState, dispatch }}>{children}</CartContext.Provider>;
};
