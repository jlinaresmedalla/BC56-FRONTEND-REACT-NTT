import {
  AuthApiResponse,
  AuthInfo,
  Category,
  CategoryApiResponse,
  Credentials,
  Product,
  ProductListApiResponse,
} from "@/interfaces";
import { getAuthInfoMapper } from "@/mappings/auth.mapper";
import { getCategoryListMapper, getProductListMapper } from "@/mappings/request.mapper";

const API_URL = import.meta.env.VITE_API_URL;

export const getProducts = async (): Promise<Product[]> => {
  try {
    const response = await fetch(`${API_URL}/products`);
    if (!response.ok) throw new Error();
    const data: ProductListApiResponse = await response.json();

    return getProductListMapper(data);
  } catch {
    throw Error("Hubo un error al cargar los productos del servidor");
  }
};

export const getCategories = async (): Promise<Category[]> => {
  try {
    const response = await fetch(`${API_URL}/products/categories`);
    if (!response.ok) throw new Error();
    const data: CategoryApiResponse[] = await response.json();

    return getCategoryListMapper(data);
  } catch {
    throw Error("Hubo un error al cargar los categorías del servidor");
  }
};

export const getProductsByCategory = (slug: string) => async (): Promise<Product[]> => {
  try {
    const response = await fetch(`${API_URL}/products/category/${slug}`);
    if (!response.ok) throw new Error();
    const data: ProductListApiResponse = await response.json();

    return getProductListMapper(data);
  } catch {
    throw Error("Hubo un error al cargar los productos por categoría del servidor");
  }
};

export const authRequest = async (body: Credentials): Promise<AuthInfo> => {
  try {
    const response = await fetch(`${API_URL}/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
    if (!response.ok) throw new Error();
    const data: AuthApiResponse = await response.json();

    return getAuthInfoMapper(data);
  } catch {
    throw Error("Hubo un error al cargar los productos por categoría del servidor");
  }
};
