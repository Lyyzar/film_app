import { jwtDecode, JwtPayload } from "jwt-decode";

export const isTokenExpired = (token: string): boolean => {
  try {
    const decoded = jwtDecode<JwtPayload>(token.split(" ")[1]);
    const currentTime = Date.now() / 1000;
    if (decoded.exp === undefined) {
      return true;
    }
    return decoded.exp < currentTime;
  } catch (error) {
    console.error("Invalid token:", error);
    return true;
  }
};

// Remove the expired token from localStorage
export const removeExpiredToken = () => {
  const token = localStorage.getItem("token");
  if (token && isTokenExpired(token)) {
    localStorage.removeItem("token");
  }
};

// Check if the user is logged in
export const isLoggedIn = () => {
  const token = localStorage.getItem("token");
  return token !== null && !isTokenExpired(token);
};
