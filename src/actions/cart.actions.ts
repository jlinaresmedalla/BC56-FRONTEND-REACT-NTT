import { Product } from "../interfaces/product.interface";
import { getCart, getCartCount, setCart } from "../utils/helpers/cart.helpers";
import { cartCount } from "../utils/constants/dom.contants";

export const handleCartProductAdd = (product: Product) => () => {
  const cart = getCart();
  const productIndex = cart.findIndex((p) => p.id === product.id);

  if (productIndex !== -1) {
    cart[productIndex].quantity += 1;
  } else {
    cart.push({ id: product.id, quantity: 1 });
  }

  setCart(cart);
  cartCount.textContent = getCartCount().toString();
};
