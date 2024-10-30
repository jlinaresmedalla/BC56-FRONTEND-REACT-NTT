import { getProducts, getProductsByCategory } from "@/api/dummyjsonApi";
import { QueryKeys } from "@/enums";
import { useQuery } from "@tanstack/react-query";

export const useProductListQuery = (category: string = "") => {
  const getProductList = category ? getProductsByCategory(category) : getProducts;

  return useQuery({ queryKey: [QueryKeys.ProductList, category], queryFn: getProductList });
};
