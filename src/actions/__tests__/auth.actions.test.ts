import { AuthInfoActionType } from "@/enums";
import { resetAuthInfo, setAuthInfo } from "../auth.actions";
import { authMock } from "@/__mocks__/auth.mocks";

const dispatchMock = jest.fn();

describe("Auth Actions", () => {
  beforeEach(() => {
    dispatchMock.mockClear();
  });

  it("should reset auth info", () => {
    resetAuthInfo(dispatchMock);
    expect(dispatchMock).toHaveBeenCalledWith({
      type: AuthInfoActionType.SetAuthInfo,
      payload: {},
    });
  });

  it("should set auth info", () => {
    setAuthInfo(authMock, dispatchMock);
    expect(dispatchMock).toHaveBeenCalledWith({
      type: AuthInfoActionType.SetAuthInfo,
      payload: authMock,
    });
  });
});
