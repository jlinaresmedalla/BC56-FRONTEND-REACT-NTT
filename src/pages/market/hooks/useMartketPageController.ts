import { addCartProduct } from "@/actions/cart.actions";
import { useCartContext } from "@/hooks/cart.hooks";
import { useCategoryListQuery, useProductListQuery } from "@/hooks/fetch.hooks";
import { usePagination } from "@/hooks/usePagination";
import { CartItem } from "@/interfaces";
import { useState } from "react";

const ItemsPerPage = 8;

export const useMarketPageController = () => {
  const { cartState, dispatch } = useCartContext();
  const [searchInput, setSearchInput] = useState<string>("");
  const [selectedCategory, setSelectedCategory] = useState<string>("");

  const { data: categoryList } = useCategoryListQuery();
  const { data: producList, isLoading: isProductListLoading } = useProductListQuery(selectedCategory);

  const filteredProductList = producList?.filter((product) =>
    product?.title?.toLowerCase().includes(searchInput.toLowerCase()),
  );

  const { currentData, currentPage, nextPage, prevPage, totalPages, onPageChange } = usePagination(
    filteredProductList!,
    ItemsPerPage,
  );

  const handleSearchInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value);
  };

  const handleCategorySelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onPageChange(1);
    setSelectedCategory(e.target.value);
  };

  const handleAddButton = (product: CartItem) => {
    addCartProduct(product, cartState, dispatch);
  };

  return {
    productList: currentData,
    currentPage,
    nextPage,
    prevPage,
    totalPages,
    onPageChange,
    handleSearchInputChange,
    handleCategorySelect,
    handleAddButton,
    categoryList,
    isProductListLoading,
    searchInput,
    selectedCategory,
  };
};
