import { createContext } from "react";
import { AuthInfoContextProps, AuthInfo } from "@/interfaces";
import { getAuthSessionFromLocalStorage } from "@/helpers/auth.helpers";

export const initialAuthInfoState: AuthInfo = getAuthSessionFromLocalStorage();

export const AuthContext = createContext<AuthInfoContextProps>({
  authInfoState: initialAuthInfoState,
  dispatch: () => {},
});
