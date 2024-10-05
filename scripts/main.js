import { handleCategoryChange, loadAllProducts, loadCategories } from "./actions";

const categorySelect = document.getElementById("category-select-field");
categorySelect.addEventListener("change", handleCategoryChange);

loadCategories();
loadAllProducts();
