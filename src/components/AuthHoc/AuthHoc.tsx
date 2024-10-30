import { FC } from "react";
import { Navigate } from "react-router-dom";
import { PublicRoutes } from "@/enums";
import { useAuthContext } from "@/hooks/auth.hooks";

export const AuthHoc: FC<FC> = (Component) => {
  const { authInfoState } = useAuthContext();
  const isAuthenticated = authInfoState.accessToken;

  return isAuthenticated ? <Component /> : <Navigate to={PublicRoutes.Login} replace />;
};
