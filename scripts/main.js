import { handleCategoryChange, handleSearchInputChange, loadAllProducts, loadCategories } from "./actions";

loadCategories();
loadAllProducts();

const categorySelect = document.getElementById("category-select-field");
categorySelect.addEventListener("change", handleCategoryChange);

const searchInput = document.getElementById("search-input");
searchInput.addEventListener("input", handleSearchInputChange);
