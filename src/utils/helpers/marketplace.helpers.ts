import { ProductCard } from "../../components/ProductCard";
import { SelectOption } from "../../components/SelectOptions";
import { Category } from "../../interfaces/category.interface";
import { Product } from "../../interfaces/product.interface";
import { categorySelectField, productsContainer } from "../constants/dom.contants";

export const renderProducts = (products: Product[]) => {
  productsContainer!.innerHTML = "";

  products?.forEach((product) => {
    ProductCard(product, productsContainer);
  });
};

export const renderCategories = (categories: Category[]) => {
  categories?.forEach((category) => {
    SelectOption(category, categorySelectField);
  });
};
