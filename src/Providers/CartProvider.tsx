import { Cart, CartItem } from "@/interfaces";
import { getPersistedCart, setPersistedCart } from "@/utils/helpers/cart.helpers";
import { createContext, FC, ReactNode, useReducer } from "react";

enum CartActionType {
  ADD_PRODUCT = "Add cart product",
  INCREMENT_QUANTITY = "Imcrement quantity",
  DECREMENT_QUANTITY = "Decrement quantity",
  REMOVE_PRODUCT = "Remove cart product",
}

interface CartAction {
  type: CartActionType;
  payload: number | CartItem;
}

interface CartContextProps {
  cartState: Cart;
  addCartProduct: (product: CartItem) => void;
  removeCartProduct: (id: number) => void;
  incrementQuantity: (id: number) => void;
  decrementQuantity: (id: number) => void;
}

const initalCartState: Cart = getPersistedCart();

export const CartContext = createContext<CartContextProps>({
  cartState: initalCartState,
  addCartProduct: () => {},
  removeCartProduct: () => {},
  incrementQuantity: () => {},
  decrementQuantity: () => {},
});

const cartReducer = (state: Cart, action: CartAction): Cart => {
  switch (action.type) {
    case CartActionType.ADD_PRODUCT: {
      const updatedState = [...state, action.payload as CartItem];
      setPersistedCart(updatedState);
      return updatedState;
    }

    case CartActionType.REMOVE_PRODUCT: {
      const updatedState = state.filter((product) => product.id != (action.payload as number));
      setPersistedCart(updatedState);
      return updatedState;
    }

    case CartActionType.INCREMENT_QUANTITY: {
      const updatedState = state.map((product) => {
        const newQuantity = product.quantity! + 1;
        if (product.id === action.payload) return { ...product, quantity: newQuantity };
        return product;
      });
      setPersistedCart(updatedState);
      return updatedState;
    }

    case CartActionType.DECREMENT_QUANTITY: {
      const updatedState = state.map((product) => {
        const newQuantity = product.quantity! - 1;
        if (product.id === action.payload && product.quantity! > 1) return { ...product, quantity: newQuantity };
        return product;
      });
      setPersistedCart(updatedState);
      return updatedState;
    }

    default:
      return state;
  }
};

export const CartProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [cartState, dispatch] = useReducer(cartReducer, initalCartState);

  const addCartProduct = (product: CartItem) => {
    product.quantity = 1;
    dispatch({ type: CartActionType.ADD_PRODUCT, payload: product });
  };
  const removeCartProduct = (id: number) => {
    dispatch({ type: CartActionType.REMOVE_PRODUCT, payload: id });
  };
  const incrementQuantity = (id: number) => {
    dispatch({ type: CartActionType.INCREMENT_QUANTITY, payload: id });
  };
  const decrementQuantity = (id: number) => {
    dispatch({ type: CartActionType.DECREMENT_QUANTITY, payload: id });
  };

  return (
    <CartContext.Provider
      value={{ cartState, addCartProduct, removeCartProduct, incrementQuantity, decrementQuantity }}
    >
      {children}
    </CartContext.Provider>
  );
};
