import {
  handleCategoryChange,
  handleSearchInputChange,
  loadAllProducts,
  loadCategories,
} from "./actions/marketplace.actions";
import { getCartCount } from "./utils/helpers/cart.helpers";
import { cartCount, categorySelectField, searchInput } from "./utils/constants/dom.contants";

loadCategories();
loadAllProducts();

cartCount.textContent = getCartCount().toString();

categorySelectField.addEventListener("change", handleCategoryChange);
searchInput.addEventListener("input", handleSearchInputChange);
