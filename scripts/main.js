import { handleCategoryChange, handleSearchInputChange, loadAllProducts, loadCategories } from "./actions";
import { categorySelect, searchInput } from "./utils";

loadCategories();
loadAllProducts();

categorySelect.addEventListener("change", handleCategoryChange);
searchInput.addEventListener("input", handleSearchInputChange);
