import { districtsMock } from "@/__mocks__/districts.mocks";
import { getDistrictList } from "../districtListApi";

describe("District list request", () => {
  beforeEach(() => {
    global.fetch = jest.fn();
  });

  afterEach(() => {
    jest.resetModules();
    global.fetch = fetch;
  });

  it("should fetch districts correctly", async () => {
    const result = await getDistrictList();
    expect(result).toEqual(districtsMock);
  });

  it("should not return response after call get districts", async () => {
    const errorMessage = "Hubo un error al cargar los distritos del archivo json";
    global.fetch = jest.fn().mockRejectedValueOnce(new Error(errorMessage));

    try {
      await getDistrictList();
    } catch (e) {
      expect((e as Error).message).toBe(errorMessage);
    }
  });
});
