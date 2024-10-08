import { Category, CategoryApiResponse } from "../interfaces/category.interface";
import { Product, ProductListApiResponse } from "../interfaces/product.interface";
import { getCategoryListMapper, getProductListMapper } from "../utils/mappings/request.mapper";

const API_URL = "https://dummyjson.com";

export const getProducts = async (): Promise<Product[]> => {
  try {
    const response = await fetch(`${API_URL}/products`);
    const data: ProductListApiResponse = await response.json();
    return getProductListMapper(data);
  } catch (e) {
    return [];
  }
};

export const getCategories = async (): Promise<Category[]> => {
  try {
    const response = await fetch(`${API_URL}/products/categories`);
    const data: CategoryApiResponse[] = await response.json();

    return getCategoryListMapper(data);
  } catch (e) {
    return [];
  }
};

export const getProductsByCategory = async (url: string): Promise<Product[]> => {
  try {
    const response = await fetch(url);
    const data: ProductListApiResponse = await response.json();
    return getProductListMapper(data);
  } catch (e) {
    return [];
  }
};
