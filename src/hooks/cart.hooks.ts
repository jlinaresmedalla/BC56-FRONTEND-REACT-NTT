import { CartContext } from "@/contexts/cart.context";
import { CartActionType, CartItem } from "@/interfaces";
import { useContext } from "react";

export const useCartContext = () => useContext(CartContext);

export const useCart = () => {
  const { cartState, dispatch } = useCartContext();

  const addNewProduct = (product: CartItem) => {
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

  const addCartProduct = (product: CartItem) => () => {
    const productExist = cartState.some((item) => item.id === product.id);
    if (productExist) {
      incrementQuantity(product.id);
      return;
    }
    addNewProduct(product);
  };

  return { cartState, addCartProduct, removeCartProduct, incrementQuantity, decrementQuantity };
};
