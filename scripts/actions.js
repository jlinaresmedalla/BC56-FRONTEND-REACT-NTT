import { getCategories, getProducts, getProductsByCategory } from "./api";
import { cartCount, getCart, getCartCount, renderCategories, renderProducts, setCart } from "./utils";

let productListState = [];

export const loadAllProducts = async () => {
  productListState = await getProducts();
  renderProducts(productListState);
};

export const loadCategories = async () => {
  const categories = await getCategories();
  renderCategories(categories);
};

export const handleCategoryChange = async (e) => {
  if (!e.target.value) {
    loadAllProducts();
    return;
  }

  productListState = await getProductsByCategory(e.target.value);
  renderProducts(productListState);
};

export const handleSearchInputChange = (e) => {
  const filteredProductList = productListState?.filter((product) =>
    product?.title?.toLowerCase().includes(e.target.value?.toLowerCase()),
  );
  renderProducts(filteredProductList);
};

export const handleCartProductAdd = (product) => () => {
  let cart = getCart();
  const productIndex = cart.findIndex((p) => p.id === product.id);

  if (productIndex !== -1) {
    cart[productIndex].quantity += 1;
  } else {
    cart.push({ id: product.id, quantity: 1 });
  }

  setCart(cart);
  cartCount.textContent = getCartCount();
};
