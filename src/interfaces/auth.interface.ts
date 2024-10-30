import { AuthInfoActionType } from "@/enums";
import { Dispatch } from "react";

export interface AuthApiResponse {
  id: number;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  gender: string;
  image: string;
  accessToken: string;
  refreshToken: string;
}

export interface AuthInfo {
  firstName: string;
  lastName: string;
  image: string;
  accessToken: string;
  refreshToken: string;
}

export interface Credentials {
  username: string;
  password: string;
}

export interface AuthInfoAction {
  type: AuthInfoActionType;
  payload: Partial<AuthInfo>;
}

export interface AuthInfoContextProps {
  authInfoState: AuthInfo;
  dispatch: Dispatch<AuthInfoAction>;
}
