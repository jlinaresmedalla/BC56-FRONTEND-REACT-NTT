import { getCategories, getProducts, getProductsByCategory } from "./api";
import { SelectOption } from "./components/SelectOptions";
import { renderProducts } from "./utils";

export const loadAllProducts = async () => {
  const products = await getProducts();
  renderProducts(products);
};

export const loadCategories = async () => {
  const categories = await getCategories();
  const categorySelectField = document.getElementById("category-select-field");

  categories?.forEach((category) => {
    SelectOption(category, categorySelectField);
  });
};

export const handleCategoryChange = async (e) => {
  if (!e.target.value) {
    loadAllProducts();
    return;
  }

  const products = await getProductsByCategory(e.target.value);
  renderProducts(products);
};
