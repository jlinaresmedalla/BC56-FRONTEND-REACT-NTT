import { cartMock } from "@/__mocks__";
import { getShippingInfoMapper } from "../cart.mapper";
import { shippingFormBodyMock, shippingFormValuesMock } from "@/__mocks__/form.mocks";

describe("getShippingInfoMapper", () => {
  it("should map shipping form values and cart correctly", () => {
    const result = getShippingInfoMapper(shippingFormValuesMock, cartMock);

    expect(result).toEqual(shippingFormBodyMock);
  });
});
