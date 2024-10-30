import { FC } from "react";
import { Navigate } from "react-router-dom";
import { LocalStorageKeys } from "@/constants/localStorage.constants";
import { PublicRoutes } from "@/constants/routes.constants";
import { getFromLocalStorage } from "@/services/localStorageService";

export const AuthHoc: FC<FC> = (Component) => {
  const isAuthenticated = getFromLocalStorage(LocalStorageKeys.AccessToken);

  return isAuthenticated ? <Component /> : <Navigate to={PublicRoutes.Login} replace />;
};
