import { Dispatch } from "react";
import { AuthInfoActionType } from "@/enums";
import { AuthInfo, AuthInfoAction } from "@/interfaces";

export const setAuthInfo = (payload: AuthInfo, dispatch: Dispatch<AuthInfoAction>) => {
  dispatch({ type: AuthInfoActionType.SetAuthInfo, payload });
};
