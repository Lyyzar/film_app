import axios from "axios";
import { LoginResponse, User } from "../interfaces";

const api = axios.create({
  baseURL: "http://localhost:3001", // Set the base URL
});

export const login = async (
  username: string,
  password: string
): Promise<LoginResponse> => {
  try {
    const response = await api.post(`http://localhost:3001/auth/login`, {
      username,
      password,
    });
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
    const token = localStorage.getItem("token");
    const response = await api.get(`http://localhost:3001/auth/getUser`, {
      headers: { Authorization: token },
    });
    console.log("getUser log: " + response);
    return response.data;
  } catch (error) {
    throw new Error("An unexpected error occurred");
  }
};
