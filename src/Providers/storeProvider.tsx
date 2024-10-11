import { getCart } from "@/utils/helpers/cart.helpers";
import { createContext, FC, ReactNode, useReducer } from "react";
import { cartReducer } from "./cart.reducers";
import { StoreContextProps } from "@/interfaces";

export const StoreContext = createContext<StoreContextProps>({ state: { cart: [] }, dispatch: () => {} });

export const StoreProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, { cart: getCart() });

  return <StoreContext.Provider value={{ state, dispatch }}>{children}</StoreContext.Provider>;
};
