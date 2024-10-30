import { LocalStorageKeys } from "@/enums/localStorage.enums";
import { AuthInfo } from "@/interfaces";
import { getFromLocalStorage, removeFromLocalStorage, saveToLocalStorage } from "@/services/localStorageService";

export const getAuthSessionFromLocalStorage = (): AuthInfo =>
  JSON.parse(getFromLocalStorage(LocalStorageKeys.AuthSession)!) || {};

export const setAuthSessionToLocalStorage = (session: AuthInfo) =>
  saveToLocalStorage(LocalStorageKeys.AuthSession, JSON.stringify(session));

export const removeAuthSessionFromLocalStorage = () => removeFromLocalStorage(LocalStorageKeys.AuthSession);
