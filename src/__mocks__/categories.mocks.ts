import { Category, CategoryApiResponse } from "@/interfaces";

export const categoriesApiResponseMock: CategoryApiResponse[] = [
  {
    slug: "beauty",
    name: "Beauty",
    url: "https://dummyjson.com/products/category/beauty",
  },
  {
    slug: "groceries",
    name: "Groceries",
    url: "https://dummyjson.com/products/category/groceries",
  },
];

export const categoriesMock: Category[] = [
  {
    slug: "beauty",
    name: "Beauty",
  },
  {
    slug: "groceries",
    name: "Groceries",
  },
];
