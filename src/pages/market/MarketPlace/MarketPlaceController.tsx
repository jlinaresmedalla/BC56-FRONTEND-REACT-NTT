import { useState } from "react";
import { MarketPlaceView } from "./MarketPlaceView";
import { useFetch } from "@/hooks/useFetch";
import { getCategories, getProducts, getProductsByCategory } from "@/api/dummyjsonApi";

const MarketPlaceController = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const getProductList = selectedCategory ? getProductsByCategory(selectedCategory) : getProducts;

  const { data: categoryList } = useFetch(getCategories);
  const { data: producList, isLoading: isProductListLoading } = useFetch(getProductList, [selectedCategory]);

  return (
    <MarketPlaceView
      categoryList={categoryList}
      setSelectedCategory={setSelectedCategory}
      selectedCategory={selectedCategory}
      producList={producList}
      isProductListLoading={isProductListLoading}
    />
  );
};

export default MarketPlaceController;
