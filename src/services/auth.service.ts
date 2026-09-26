import api from "./api";

export type UserLogin = {
  email: string;
  password: string;
};

export type LoginResponse = {
  id: number;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  gender: string;
  image: string;
  accessToken: string;
  refreshToken: string;
};

export const login = async (
  userLogin: UserLogin
): Promise<LoginResponse> => {
  const response = await api.post<LoginResponse>(
    "/auth/login",
    userLogin
  );

  return response.data;
};