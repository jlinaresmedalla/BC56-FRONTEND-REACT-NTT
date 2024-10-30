import { LocalStorageKeys } from "@/constants/localStorage.constants";
import { getFromLocalStorage } from "@/services/localStorageService";

export const getAccessTokenFromLocalStorage = getFromLocalStorage(LocalStorageKeys.AccessToken);

export const getRefreshTokenFromLocalStorage = getFromLocalStorage(LocalStorageKeys.RefreshToken);

export const getUserFromLocalStorage = getFromLocalStorage(LocalStorageKeys.User);
