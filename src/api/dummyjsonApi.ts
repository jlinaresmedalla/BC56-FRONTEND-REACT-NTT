import { Category, CategoryApiResponse, Product, ProductListApiResponse } from "@/interfaces";
import { getCategoryListMapper, getProductListMapper } from "@/utils/mappings/request.mapper";

const API_URL = "https://dummyjson.com";

export const getProducts = async (): Promise<Product[]> => {
  try {
    const response = await fetch(`${API_URL}/products`);
    const data: ProductListApiResponse = await response.json();

    return getProductListMapper(data);

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (e) {
    throw Error("Hubo un error al cargar los productos del servidor");
  }
};

export const getCategories = async (): Promise<Category[]> => {
  try {
    const response = await fetch(`${API_URL}/products/categories`);
    const data: CategoryApiResponse[] = await response.json();

    return getCategoryListMapper(data);

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (e) {
    throw Error("Hubo un error al cargar los categorías del servidor");
  }
};

export const getProductsByCategory = (url: string) => async (): Promise<Product[]> => {
  try {
    const response = await fetch(url);
    const data: ProductListApiResponse = await response.json();

    return getProductListMapper(data);

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (e) {
    throw Error("Hubo un error al cargar los productos por categoría del servidor");
  }
};
