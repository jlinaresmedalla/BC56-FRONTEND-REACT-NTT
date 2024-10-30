import { act, renderHook } from "@testing-library/react";
import { useDistrictListQuery } from "../useDistrictListQuery";

const renderUseFetchHook = async (query: () => Promise<unknown>) => {
  const results = act(async () => renderHook(() => useFetch(query)));
  return results;
};

const renderUseDistrictListQueryHook = async () => {
  const results = act(async () => renderHook(() => useDistrictListQuery()));
  return results;
};

describe("useFetch hook", () => {
  afterEach(() => {
    jest.resetAllMocks();
  });

  it("should return data", async () => {
    const { result } = await renderUseFetchHook(() => Promise.resolve(true));

    expect(result.current.data).toBe(true);
  });

  it("should return error ", async () => {
    const { result } = await renderUseFetchHook(() => {
      throw Error("error");
    });

    expect(result.current.error).toBe(true);
  });
});

describe("useDistrictListQuery hook", () => {
  beforeEach(() => {
    jest.resetModules();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should return district list", async () => {
    jest.mock("@/utils/locations.json", () => ({
      districts: [{ id: 1, name: "San Isidro" }],
    }));
    const { result } = await renderUseDistrictListQueryHook();

    expect(result.current).toEqual([{ value: "San Isidro", label: "San Isidro" }]);
  });

  it("should handle error", async () => {
    jest.mock("@/utils/locations.json", () => ({}));

    const { result } = await renderUseDistrictListQueryHook();

    expect(result.current).toEqual([]);
  });
});
