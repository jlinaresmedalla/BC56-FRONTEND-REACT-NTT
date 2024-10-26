import { Category, CategoryApiResponse, Product, ProductListApiResponse } from "@/interfaces";
import { getCategoryListMapper, getProductListMapper } from "@/mappings/request.mapper";

const API_URL = "https://dummyjson.com";

export const getProducts = async (): Promise<Product[]> => {
  try {
    const response = await fetch(`${API_URL}/products`);
    const data: ProductListApiResponse = await response.json();

    return getProductListMapper(data);
  } catch {
    throw Error("Hubo un error al cargar los productos del servidor");
  }
};

export const getCategories = async (): Promise<Category[]> => {
  try {
    const response = await fetch(`${API_URL}/products/categories`);
    const data: CategoryApiResponse[] = await response.json();

    return getCategoryListMapper(data);
  } catch {
    throw Error("Hubo un error al cargar los categorías del servidor");
  }
};

export const getProductsByCategory = (slug: string) => async (): Promise<Product[]> => {
  try {
    const response = await fetch(`${API_URL}/products/category/${slug}`);
    const data: ProductListApiResponse = await response.json();

    return getProductListMapper(data);
  } catch {
    throw Error("Hubo un error al cargar los productos por categoría del servidor");
  }
};
