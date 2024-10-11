import { Category, Product } from "@/interfaces";
import { Dispatch } from "react";

export interface MarketPlaceViewProps {
  categoryList: Category[] | null;
  setSelectedCategory: Dispatch<React.SetStateAction<string>>;
  selectedCategory: string;
  producList: Product[] | null;
  isProductListLoading: boolean;
}
