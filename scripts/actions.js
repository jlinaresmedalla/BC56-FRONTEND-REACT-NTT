import { getCategories, getProducts, getProductsByCategory } from "./api";
import { renderCategories, renderProducts } from "./utils";

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
