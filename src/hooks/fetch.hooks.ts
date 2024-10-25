import { getCategories, getProducts, getProductsByCategory } from "@/api/dummyjsonApi";
import { District } from "@/interfaces";
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
    } catch {
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

export const useDistrictListQuery = () => {
  const [districts, setDistricts] = useState<District[]>([]);

  const readFile = async () => {
    try {
      const file = await import("@/utils/locations.json");
      const districtList = file.districts.map((d) => ({ value: d.name, label: d.name }));
      setDistricts(districtList);
    } catch {
      setDistricts([]);
    }
  };

  useEffect(() => {
    readFile();
  }, []);

  return districts;
};
