import { getCategories, getProducts, getProductsByCategory } from "../api/dummyjsonApi";
import { Product } from "../interfaces/product.interface";
import { renderCategories, renderProducts } from "../utils/helpers/marketplace.helpers";

let productListState: Product[] = [];

export const loadAllProducts = async () => {
  productListState = await getProducts();
  renderProducts(productListState);
};

export const loadCategories = async () => {
  const categories = await getCategories();
  renderCategories(categories);
};

export const handleCategoryChange = async (e: Event) => {
  const selectedCategory = e.target as HTMLSelectElement;

  if (!selectedCategory) {
    loadAllProducts();
    return;
  }

  productListState = await getProductsByCategory(selectedCategory.value);
  renderProducts(productListState);
};

export const handleSearchInputChange = (e: Event) => {
  const searchInput = e.target as HTMLInputElement;

  const filteredProductList = productListState?.filter((product) =>
    product?.title?.toLowerCase().includes(searchInput.value?.toLowerCase()),
  );
  renderProducts(filteredProductList);
};
