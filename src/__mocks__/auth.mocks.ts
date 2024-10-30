import { AuthApiResponse, AuthInfo } from "@/interfaces";

export const authApiResponseMock: AuthApiResponse = {
  accessToken: "accessToken",
  firstName: "Juan",
  image: "image",
  lastName: "Linares",
  refreshToken: "refreshToken",
  email: "jlinares@gmail.com",
  username: "jlinares",
  gender: "male",
  id: 1,
};

export const authMock: AuthInfo = {
  accessToken: "accessToken",
  firstName: "Juan",
  image: "image",
  lastName: "Linares",
  refreshToken: "refreshToken",
};
