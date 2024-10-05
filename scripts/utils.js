import { ProductCard } from "./components/ProductCard";
import { SelectOption } from "./components/SelectOptions";

const productsContainer = document.getElementById("products-container");
const categorySelectField = document.getElementById("category-select-field");

export const categorySelect = document.getElementById("category-select-field");
export const searchInput = document.getElementById("search-input");

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
