import { FC } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "./Pagination.css";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  prevPage: () => void;
  nextPage: () => void;
}

export const Pagination: FC<PaginationProps> = ({ currentPage, totalPages, onPageChange, prevPage, nextPage }) => {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="pagination">
      <button onClick={() => prevPage()} disabled={currentPage === 1} data-testid="paginationPrevBtn">
        <ChevronLeft />
      </button>
      {pages.map((page, index) => (
        <button
          key={index}
          onClick={() => onPageChange(page)}
          className={page === currentPage ? "active" : ""}
          data-testid="paginationPageChangeBtn"
        >
          {page}
        </button>
      ))}
      <button onClick={() => nextPage()} disabled={currentPage === totalPages} data-testid="paginationNextBtn">
        <ChevronRight />
      </button>
    </div>
  );
};
