import { ProductCard } from "./components/ProductCard";

export const renderProducts = (products) => {
  const productsContainer = document.getElementById("products-container");
  productsContainer.innerHTML = "";

  products?.forEach((product) => {
    ProductCard(product, productsContainer);
  });
};
