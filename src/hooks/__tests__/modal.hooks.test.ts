import { act, renderHook } from "@testing-library/react";
import { useModal } from "../modal.hooks";

const renderModalHook = async () => {
  const results = act(async () => renderHook(() => useModal()));
  return results;
};

describe("useModal", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should initialize with modal closed", async () => {
    const { result } = await renderModalHook();
    expect(result.current.isModalOpen).toBe(false);
  });

  it("should open modal", async () => {
    const { result } = await renderModalHook();
    act(() => {
      result.current.openModal();
    });
    expect(result.current.isModalOpen).toBe(true);
  });

  it("should close modal", async () => {
    const { result } = await renderModalHook();
    act(() => {
      result.current.openModal();
    });
    act(() => {
      result.current.closeModal();
    });
    expect(result.current.isModalOpen).toBe(false);
  });
});
