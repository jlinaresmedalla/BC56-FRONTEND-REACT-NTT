import { getProducts, getProductsByCategory } from "@/api/dummyjsonApi";
import { Product } from "@/interfaces";
import { useEffect, useState } from "react";

const useProductListQuery = (selectedCategory: string = "") => {
  const [productList, setProductList] = useState<Product[] | null>(null);
  const [isProductListLoading, setIsProductListLoading] = useState(false);

  const fetchProducts = async () => {
    setIsProductListLoading(true);

    try {
      let data = [];

      if (!selectedCategory) {
        data = await getProducts();
      } else {
        data = await getProductsByCategory(selectedCategory);
      }

      setProductList(data);
    } catch (e) {
      console.error(e);
    } finally {
      setIsProductListLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedCategory]);

  return { productList, isProductListLoading };
};

export default useProductListQuery;
