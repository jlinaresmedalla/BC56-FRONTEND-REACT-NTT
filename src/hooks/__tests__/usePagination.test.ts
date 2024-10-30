import { renderHook, act } from "@testing-library/react";
import { usePagination } from "../usePagination";

const data = Array.from({ length: 50 }, (_, i) => i + 1);

const renderCustomHook = async () => {
  const results = act(async () => renderHook(() => usePagination(data, 10)));
  return results;
};

describe("usePagination hook", () => {
  it("should initialize with the correct page and data", async () => {
    const { result } = await renderCustomHook();

    expect(result.current.currentPage).toBe(1);
    expect(result.current.totalPages).toBe(5);
    expect(result.current.currentData).toEqual(data.slice(0, 10));
  });

  it("should go to the next page", async () => {
    const { result } = await renderCustomHook();

    act(() => {
      result.current.nextPage();
    });

    expect(result.current.currentPage).toBe(2);
    expect(result.current.currentData).toEqual(data.slice(10, 20));
  });

  it("should go to the previous page", async () => {
    const { result } = await renderCustomHook();

    act(() => {
      result.current.onPageChange(3);
    });

    act(() => {
      result.current.prevPage();
    });

    expect(result.current.currentPage).toBe(2);
    expect(result.current.currentData).toEqual(data.slice(10, 20));
  });

  it("should stay on the same page if trying to go next on the last page", async () => {
    const { result } = await renderCustomHook();

    act(() => {
      result.current.onPageChange(5);
    });

    act(() => {
      result.current.nextPage();
    });

    expect(result.current.currentPage).toBe(5);
    expect(result.current.currentData).toEqual(data.slice(40, 50));
  });

  it("should stay on the same page if trying to go previous on the first page", async () => {
    const { result } = await renderCustomHook();

    act(() => {
      result.current.prevPage();
    });

    expect(result.current.currentPage).toBe(1);
    expect(result.current.currentData).toEqual(data.slice(0, 10));
  });

  it("should go to a specific page when onPageChange is called", async () => {
    const { result } = await renderCustomHook();

    act(() => {
      result.current.onPageChange(4);
    });

    expect(result.current.currentPage).toBe(4);
    expect(result.current.currentData).toEqual(data.slice(30, 40));
  });
});
