import { getCategories, getProducts, getProductsByCategory } from "../dummyjsonApi";
import { categoriesApiResponseMock, categoriesMock, productListMock, productsApiResponseMock } from "@/__mocks__";

const mockfetch = (data: unknown, status = 200, ok = true): jest.Mock => {
  const fn = jest.fn().mockImplementationOnce(() => {
    const response = {
      json: () => Promise.resolve(data),
      status,
      ok,
    };
    return Promise.resolve(response);
  });
  global.fetch = fn;
  return fn;
};

describe("Products and Categories request", () => {
  beforeEach(() => {
    global.fetch = jest.fn();
  });

  afterEach(() => {
    jest.resetModules();
    global.fetch = fetch;
  });

  it("should fetch and map products correctly", async () => {
    mockfetch(productsApiResponseMock);

    const result = await getProducts();
    expect(result).toEqual(productListMock);
  });

  it("should fetch and map categories correctly", async () => {
    mockfetch(categoriesApiResponseMock);

    const result = await getCategories();
    expect(result).toEqual(categoriesMock);
  });

  it("should fetch and map products by categories correctly", async () => {
    mockfetch(productsApiResponseMock);

    const result = await getProductsByCategory("beauty")();
    expect(result).toEqual(productListMock);
  });

  it("should not return response after call get products", async () => {
    const errorMessage = "Hubo un error al cargar los productos del servidor";
    global.fetch = jest.fn().mockRejectedValueOnce(new Error(errorMessage));

    try {
      await getProducts();
    } catch (e) {
      expect((e as Error).message).toBe(errorMessage);
    }
  });

  it("should not return response after call get categories", async () => {
    const errorMessage = "Hubo un error al cargar los categorías del servidor";
    global.fetch = jest.fn().mockRejectedValueOnce(new Error(errorMessage));

    try {
      await getCategories();
    } catch (e) {
      expect((e as Error).message).toBe(errorMessage);
    }
  });

  it("should not return response after call get products by category", async () => {
    const errorMessage = "Hubo un error al cargar los productos por categoría del servidor";
    global.fetch = jest.fn().mockRejectedValueOnce(new Error(errorMessage));

    try {
      await getProductsByCategory("beauty")();
    } catch (e) {
      expect((e as Error).message).toBe(errorMessage);
    }
  });
});
