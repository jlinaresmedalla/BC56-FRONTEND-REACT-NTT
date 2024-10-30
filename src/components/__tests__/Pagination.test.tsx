import { render, screen, fireEvent, act, RenderResult } from "@testing-library/react";
import { Pagination } from "../UI/Pagination/Pagination";

const mockOnPageChange = jest.fn();
const mockPrevPage = jest.fn();
const mockNextPage = jest.fn();

const defaultProps = {
  currentPage: 2,
  totalPages: 5,
  onPageChange: mockOnPageChange,
  prevPage: mockPrevPage,
  nextPage: mockNextPage,
};

const renderComponent = async (currentPage: number = 2): Promise<RenderResult> => {
  const component = await act(async () => render(<Pagination {...defaultProps} currentPage={currentPage} />));
  return component;
};

describe("Pagination Component", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should render the correct number of page buttons", async () => {
    await renderComponent();
    const pageButtons = screen.getAllByRole("button");
    expect(pageButtons.length).toBe(7); // 5 pages + 2 navigation (prev/next)
  });

  it("should call onPageChange with the correct page number when a page button is clicked", async () => {
    await renderComponent();
    const page3Button = screen.getByText("3");
    fireEvent.click(page3Button);

    expect(mockOnPageChange).toHaveBeenCalledWith(3);
  });

  it("should call prevPage when the previous button is clicked", async () => {
    await renderComponent();
    const prevButton = screen.getByTestId("paginationPrevBtn");
    fireEvent.click(prevButton);

    expect(mockPrevPage).toHaveBeenCalled();
  });

  it("should call nextPage when the next button is clicked", async () => {
    await renderComponent();
    const nextButton = screen.getByTestId("paginationNextBtn");
    fireEvent.click(nextButton);

    expect(mockNextPage).toHaveBeenCalled();
  });

  it("should disable the previous button on the first page", async () => {
    await renderComponent(1);
    const prevButton = screen.getByTestId("paginationPrevBtn");
    expect(prevButton).toBeDisabled();
  });

  it("should disable the next button on the last page", async () => {
    await renderComponent(5);
    const nextButton = screen.getByTestId("paginationNextBtn");
    expect(nextButton).toBeDisabled();
  });
});
