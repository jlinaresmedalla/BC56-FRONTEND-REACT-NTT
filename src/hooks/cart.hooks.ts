import { CartContext } from "@/contexts/cart.context";
import { useContext } from "react";

export const useCartContext = () => useContext(CartContext);
