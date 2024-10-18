import { FC, ReactNode, useReducer } from "react";
import { CartContext, cartReducer, initalCartState } from "./cart.context";

export const CartProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [cartState, dispatch] = useReducer(cartReducer, initalCartState);

  return <CartContext.Provider value={{ cartState, dispatch }}>{children}</CartContext.Provider>;
};
