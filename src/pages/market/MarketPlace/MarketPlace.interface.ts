import { Category, Product } from "@/interfaces";
import { Dispatch } from "react";

export interface MarketPlaceViewProps {
  categoryList: Category[] | undefined;
  setSelectedCategory: Dispatch<React.SetStateAction<string>>;
  selectedCategory: string;
  producList: Product[] | undefined;
  isProductListLoading: boolean;
}
