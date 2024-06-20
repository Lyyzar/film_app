// const getUser: Promise<User>{

import axios from "axios";
import { LoginResponse } from "../interfaces";

// }
export const login = async (
  username: string,
  password: string
): Promise<LoginResponse> => {
  try {
    const response = await axios.post<LoginResponse>(`/login`, {
      username,
      password,
    });
    return response.data;
  } catch (error) {
    throw new Error("An unexpected error occurred");
  }
};
