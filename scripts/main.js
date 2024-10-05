import { handleCategoryChange, handleSearchInputChange, loadAllProducts, loadCategories } from "./actions";
import { cartCount, categorySelect, getCartCount, searchInput } from "./utils";

loadCategories();
loadAllProducts();

cartCount.textContent = getCartCount();

categorySelect.addEventListener("change", handleCategoryChange);
searchInput.addEventListener("input", handleSearchInputChange);
