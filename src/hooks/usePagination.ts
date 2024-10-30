import { useState } from "react";

interface PaginationResult<T> {
  currentPage: number;
  totalPages: number;
  currentData: T[];
  nextPage: () => void;
  prevPage: () => void;
  onPageChange: (page: number) => void;
}

export const usePagination = <T>(data: T[] = [], itemsPerPage: number): PaginationResult<T> => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(data.length / itemsPerPage);

  const currentData = data.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  const nextPage = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  };

  const prevPage = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  const onPageChange = (page: number) => {
    setCurrentPage(page);
  };

  return {
    currentPage,
    totalPages,
    currentData,
    nextPage,
    prevPage,
    onPageChange,
  };
};
