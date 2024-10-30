import { getCategories } from "@/api/dummyjsonApi";
import { QueryKeys } from "@/enums";
import { useQuery } from "@tanstack/react-query";

export const useCategoryListQuery = () => useQuery({ queryKey: [QueryKeys.CategoryList], queryFn: getCategories });
