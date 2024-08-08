import axios from "axios";
import { LoginResponse, User } from "../interfaces";

export const login = async (
  username: string,
  password: string
): Promise<LoginResponse> => {
  try {
    const response = await axios.post(`http://localhost:3001/auth/login`, {
      username,
      password,
    });
    console.log("response");
    const { access_token } = response.data;
    localStorage.setItem("token", "Bearer " + access_token);
    return response.data;
  } catch (error) {
    throw new Error("An unexpected error occurred");
  }
};

export const getUser = async (): Promise<User> => {
  try {
    console.log("asd");
    const response = await axios.get(`http://localhost:3001/auth/getUser`);
    console.log(response);
    return response.data;
  } catch (error) {
    throw new Error("An unexpected error occurred");
  }
};
