import { useState } from "react";

import { MarketPlaceView } from "./MarketPlaceView";
import useCategoryListQuery from "@/hooks/useCategoryListQuery";
import useProductListQuery from "@/hooks/useProductListQuery";

const MarketPlaceController = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("");

  const categoryList = useCategoryListQuery();
  const { productList, isProductListLoading } = useProductListQuery(selectedCategory);

  return (
    <MarketPlaceView
      categoryList={categoryList}
      setSelectedCategory={setSelectedCategory}
      selectedCategory={selectedCategory}
      producList={productList}
      isProductListLoading={isProductListLoading}
    />
  );
};

export default MarketPlaceController;
