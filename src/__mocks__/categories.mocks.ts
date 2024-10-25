import { Category, CategoryApiResponse } from "@/interfaces";

export const categoriesApiResponseMock: CategoryApiResponse[] = [
  {
    slug: "beauty",
    name: "Beauty",
    url: "https://dummyjson.com/products/category/beauty",
  },
  {
    slug: "fragrances",
    name: "Fragrances",
    url: "https://dummyjson.com/products/category/fragrances",
  },
];

export const categoriesMock: Category[] = [
  {
    slug: "beauty",
    name: "Beauty",
  },
  {
    slug: "fragrances",
    name: "Fragrances",
  },
];
