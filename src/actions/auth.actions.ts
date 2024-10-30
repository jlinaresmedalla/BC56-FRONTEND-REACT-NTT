import { Dispatch } from "react";
import { AuthInfoActionType } from "@/enums";
import { AuthInfo, AuthInfoAction } from "@/interfaces";
import { initialAuthInfoState } from "@/contexts/auth.context";
import { removeAuthSessionFromLocalStorage } from "@/helpers/auth.helpers";

export const resetAuthInfo = (dispatch: Dispatch<AuthInfoAction>) => {
  removeAuthSessionFromLocalStorage();
  dispatch({ type: AuthInfoActionType.SetAuthInfo, payload: initialAuthInfoState });
};

export const setAuthInfo = (payload: AuthInfo, dispatch: Dispatch<AuthInfoAction>) => {
  dispatch({ type: AuthInfoActionType.SetAuthInfo, payload });
};
