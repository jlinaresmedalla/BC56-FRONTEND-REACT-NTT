import { getProducts } from "./api";
import { ProductCard } from "./components/ProductCard";

export const loadProducts = async () => {
  const products = await getProducts();
  const productsContainer = document.getElementById("products-container");

  products?.forEach((product) => {
    ProductCard(product, productsContainer);
  });
};
