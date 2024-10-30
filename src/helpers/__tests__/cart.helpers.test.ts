import { cartMock } from "@/__mocks__";
import { getCartCount } from "../cart.helpers";
import { Cart } from "@/interfaces";

describe("Cart Helpers", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  describe("getCartCount", () => {
    it("should return the total quantity of items in the cart", () => {
      expect(getCartCount(cartMock)).toBe(2);
    });

    it("should return 0 if the cart is empty", () => {
      const cart: Cart = [];
      expect(getCartCount(cart)).toBe(0);
    });
  });
});
