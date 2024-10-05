import { getCategories, getProducts, getProductsByCategory } from "./api";
import { SelectOption } from "./components/SelectOptions";
import { renderProducts } from "./utils";

let productListState = [];

export const loadAllProducts = async () => {
  productListState = await getProducts();
  renderProducts(productListState);
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

  productListState = await getProductsByCategory(e.target.value);
  renderProducts(productListState);
};

export const handleSearchInputChange = (e) => {
  const filteredProductList = productListState?.filter((product) =>
    product?.title?.toLowerCase().includes(e.target.value?.toLowerCase()),
  );
  renderProducts(filteredProductList);
};
