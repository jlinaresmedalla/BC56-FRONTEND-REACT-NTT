import { getDistrictList } from "@/api/districtListApi";
import { QueryKeys } from "@/enums";
import { useQuery } from "@tanstack/react-query";

export const useDistrictListQuery = () => {
  return useQuery({ queryKey: [QueryKeys.DistrictList], queryFn: getDistrictList });
};
