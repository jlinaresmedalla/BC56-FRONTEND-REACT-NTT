import { FC, PropsWithChildren, useReducer } from "react";
import { AuthContext, initialAuthInfoState } from "./auth.context";
import { authInfoReducer } from "./reducers/auth.reducer";

export const AuthProvider: FC<PropsWithChildren> = ({ children }) => {
  const [authInfoState, dispatch] = useReducer(authInfoReducer, initialAuthInfoState);

  return <AuthContext.Provider value={{ authInfoState, dispatch }}>{children}</AuthContext.Provider>;
};
