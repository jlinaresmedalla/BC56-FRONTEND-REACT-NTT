const API_URL = "https://dummyjson.com";

export const getProducts = async () => {
  try {
    const response = await fetch(`${API_URL}/products`);
    const { products } = await response.json();

    return products;
  } catch (e) {
    return null;
  }
};

export const getCategories = async () => {
  try {
    const response = await fetch(`${API_URL}/products/categories`);
    const data = await response.json();

    return data;
  } catch (e) {
    return null;
  }
};

export const getProductsByCategory = async (url) => {
  try {
    const response = await fetch(url);
    const { products } = await response.json();

    return products;
  } catch (e) {
    return null;
  }
};
