import { useState } from "react";
import { AuthToken } from "../interfaces/authToken.interface";

interface LoginRequest {
  email: string;
  password: string;
}

const useLogin = () => {
  const [error, setError] = useState<string>();
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState<AuthToken>();

  const login = async (request: LoginRequest) => {
    setIsLoading(true);
    const res = await fetch(`http://localhost:3000/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(request),
    });
    if (!res.ok) {
      if (res.status === 401) {
        setError("Invalid credentials");
      } else {
        setError("An error occurred");
      }
      return;
    }
    setError("");
    const jsonData = await res.json();
    setData(jsonData);
    console.log("data here", jsonData);
    localStorage.setItem("accessToken", jsonData.accessToken);
    localStorage.setItem("refreshToken", jsonData.refreshToken);
    setIsLoading(false);
  };
  return { login, error,data, isLoading };
};

export { useLogin };
