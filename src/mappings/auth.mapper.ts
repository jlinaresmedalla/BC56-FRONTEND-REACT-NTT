import { AuthApiResponse, AuthInfo } from "@/interfaces";

export const getAuthInfoMapper = (authApiResponse: AuthApiResponse): AuthInfo => {
  const { firstName, lastName, image, accessToken, refreshToken } = authApiResponse;

  return { firstName, lastName, image, accessToken, refreshToken };
};
