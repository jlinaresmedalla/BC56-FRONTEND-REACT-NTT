import { ProductCard } from "./components/ProductCard";
import { SelectOption } from "./components/SelectOptions";

const productsContainer = document.getElementById("products-container");
const categorySelectField = document.getElementById("category-select-field");

export const categorySelect = document.getElementById("category-select-field");
export const searchInput = document.getElementById("search-input");
export const cartCount = document.getElementById("cart-count");

export const renderProducts = (products) => {
  productsContainer.innerHTML = "";

  products?.forEach((product) => {
    ProductCard(product, productsContainer);
  });
};

export const renderCategories = (categories) => {
  categories?.forEach((category) => {
    SelectOption(category, categorySelectField);
  });
};

export const getCart = () => JSON.parse(localStorage.getItem("cart")) || [];
export const setCart = (cart) => localStorage.setItem("cart", JSON.stringify(cart));

export const getCartCount = () =>
  getCart().reduce((cartCounter, product) => {
    return cartCounter + product.quantity;
  }, 0);
