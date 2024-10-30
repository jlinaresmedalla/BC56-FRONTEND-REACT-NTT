import { authApiResponseMock, authMock } from "@/__mocks__/auth.mocks";
import { getAuthInfoMapper } from "../auth.mapper";

describe("getShippingInfoMapper", () => {
  it("should map shipping form values and cart correctly", () => {
    const result = getAuthInfoMapper(authApiResponseMock);

    expect(result).toEqual(authMock);
  });
});
