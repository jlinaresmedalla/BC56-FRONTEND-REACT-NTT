import { Category, CategoryApiResponse, Product, ProductApiResponse, ProductListApiResponse } from "@/interfaces";

export const getProductListMapper = (productListApiResponse: ProductListApiResponse): Product[] => {
  const { products } = productListApiResponse;

  return products.map((product: ProductApiResponse) => ({
    id: product.id,
    title: product.title,
    category: product.category,
    price: product.price,
    rating: product.rating,
    thumbnail: product.thumbnail,
  }));
};

export const getCategoryListMapper = (categoryListApiResponse: CategoryApiResponse[]): Category[] => {
  return categoryListApiResponse.map((category) => ({
    name: category.name,
    url: category.url,
  }));
};
