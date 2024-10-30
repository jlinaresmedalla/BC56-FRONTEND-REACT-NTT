import { AuthInfoActionType } from "@/enums";
import { setAuthSessionToLocalStorage } from "@/helpers/auth.helpers";
import { AuthInfo, AuthInfoAction } from "@/interfaces";

export const authInfoReducer = (state: AuthInfo, action: AuthInfoAction): AuthInfo => {
  switch (action.type) {
    case AuthInfoActionType.SetAuthInfo: {
      setAuthSessionToLocalStorage(action.payload);
      return action.payload;
    }
  }
};
