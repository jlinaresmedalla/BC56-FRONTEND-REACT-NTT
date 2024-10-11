import { getCategories } from "@/api/dummyjsonApi";
import { Category } from "@/interfaces";
import { useEffect, useState } from "react";

const useCategoryListQuery = () => {
  const [categoryList, setCategoryList] = useState<Category[]>([]);

  const fetchCategories = async () => {
    try {
      const data = await getCategories();
      setCategoryList(data);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  return categoryList;
};

export default useCategoryListQuery;
