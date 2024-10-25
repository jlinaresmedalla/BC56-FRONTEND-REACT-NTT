import { CartActionType } from "@/interfaces";
import { setPersistedCart } from "@/helpers/cart.helpers";
import { cartReducer } from "../cart.context";
import { cartItemsMock, cartMock } from "@/__mocks__";

jest.mock("@/helpers/cart.helpers", () => ({
  setPersistedCart: jest.fn(),
  getPersistedCart: jest.fn(() => []),
}));

describe("cartReducer", () => {
  beforeEach(() => {
    jest.resetModules();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should add a product to the cart", () => {
    const action = { type: CartActionType.ADD_PRODUCT, payload: cartItemsMock };
    const newState = cartReducer(cartMock, action);

    expect(newState).toHaveLength(2);
    expect(setPersistedCart).toHaveBeenCalledWith(newState);
  });

  it("should remove a product from the cart", () => {
    const action = { type: CartActionType.REMOVE_PRODUCT, payload: 1 };
    const newState = cartReducer(cartMock, action);

    expect(newState).toHaveLength(0);
    expect(newState.find((product) => product.id === 1)).toBeUndefined();
    expect(setPersistedCart).toHaveBeenCalledWith(newState);
  });

  it("should increment product quantity", () => {
    const action = { type: CartActionType.INCREMENT_QUANTITY, payload: 1 };
    const newState = cartReducer(cartMock, action);

    expect(newState.find((product) => product.id === 1)!.quantity).toBe(3);
    expect(setPersistedCart).toHaveBeenCalledWith(newState);
  });

  it("should not increment product quantity", () => {
    const action = { type: CartActionType.INCREMENT_QUANTITY, payload: 0 };
    const newState = cartReducer(cartMock, action);

    expect(newState).toEqual(cartMock);
    expect(setPersistedCart).toHaveBeenCalledWith(newState);
  });

  it("should decrement the quantity of a product", () => {
    const action = { type: CartActionType.DECREMENT_QUANTITY, payload: 1 };
    const newState = cartReducer(cartMock, action);

    expect(newState.find((product) => product.id === 1)!.quantity).toBe(1);
    expect(setPersistedCart).toHaveBeenCalledWith(newState);
  });

  it("should not decrement the quantity below 1", () => {
    const action = { type: CartActionType.DECREMENT_QUANTITY, payload: 0 };
    const newState = cartReducer(cartMock, action);

    expect(newState).toEqual(cartMock);
    expect(setPersistedCart).toHaveBeenCalledWith(newState);
  });

  it("should set the cart with provided items", () => {
    const action = { type: CartActionType.SET_CART, payload: [] };
    const newState = cartReducer(cartMock, action);

    expect(newState).toEqual([]);
    expect(setPersistedCart).toHaveBeenCalledWith([]);
  });

  it("should set the cart with provided items", () => {
    const action = { type: CartActionType.SET_CART, payload: [] };
    const newState = cartReducer(cartMock, action);

    expect(newState).toEqual([]);
    expect(setPersistedCart).toHaveBeenCalledWith([]);
  });
});
