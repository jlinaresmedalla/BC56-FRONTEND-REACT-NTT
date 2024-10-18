import { getCategories, getProducts, getProductsByCategory } from "@/api/dummyjsonApi";
import { DependencyList, useEffect, useState } from "react";

export const useFetch = <T>(query: () => Promise<T>, dependencies: DependencyList = []) => {
  const [data, setData] = useState<T>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  const request = async () => {
    setIsLoading(true);
    try {
      const response = await query();
      setData(response);
    } catch (error) {
      console.log(error);
      setError(true);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    request();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [...dependencies]);

  return { data, isLoading, error };
};

export const useProductListQuery = (category: string = "") => {
  const getProductList = category ? getProductsByCategory(category) : getProducts;
  return useFetch(getProductList, [category]);
};

export const useCategoryListQuery = () => useFetch(getCategories);
