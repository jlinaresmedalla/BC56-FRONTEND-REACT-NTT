import { cartItemsMock, cartMock } from "@/__mocks__";
import {
  addNewProduct,
  removeCartProduct,
  incrementQuantity,
  decrementQuantity,
  resetCart,
  addCartProduct,
} from "../cart.actions";
import { CartActionType } from "@/enums";

const dispatchMock = jest.fn();

describe("Cart Actions", () => {
  beforeEach(() => {
    dispatchMock.mockClear();
  });

  it("should add a new product to the cart", () => {
    addNewProduct(cartItemsMock, dispatchMock);
    expect(dispatchMock).toHaveBeenCalledWith({
      type: CartActionType.AddCartProduct,
      payload: { ...cartItemsMock, quantity: 1 },
    });
  });

  it("should remove a product from the cart", () => {
    const cartItemid = 1;
    removeCartProduct(cartItemid, dispatchMock);
    expect(dispatchMock).toHaveBeenCalledWith({ type: CartActionType.RemoveProduct, payload: cartItemid });
  });

  it("should increment the quantity in the cart", () => {
    const cartItemid = 1;
    incrementQuantity(cartItemid, dispatchMock);
    expect(dispatchMock).toHaveBeenCalledWith({ type: CartActionType.IncrementQuantity, payload: cartItemid });
  });

  it("should decrement the quantity in the cart", () => {
    const cartItemid = 1;
    decrementQuantity(cartItemid, dispatchMock);
    expect(dispatchMock).toHaveBeenCalledWith({ type: CartActionType.DecrementQuantity, payload: cartItemid });
  });

  it("should clear cart", () => {
    resetCart(dispatchMock);
    expect(dispatchMock).toHaveBeenCalledWith({ type: CartActionType.SetCart, payload: [] });
  });

  it("should add a product to the cart if it does not exist", () => {
    addCartProduct(cartItemsMock, [], dispatchMock);
    expect(dispatchMock).toHaveBeenCalledWith({
      type: CartActionType.AddCartProduct,
      payload: { ...cartItemsMock, quantity: 1 },
    });
  });

  it("should increment the quantity of a product if it already exists in the cart", () => {
    addCartProduct(cartItemsMock, cartMock, dispatchMock);
    expect(dispatchMock).toHaveBeenCalledWith({ type: CartActionType.IncrementQuantity, payload: cartItemsMock.id });
  });
});
