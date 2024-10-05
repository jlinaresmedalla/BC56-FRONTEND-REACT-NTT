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
