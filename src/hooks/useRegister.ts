import { useState } from "react";

interface LoginRequest {
  email: string;
  password: string;
  name: string;
  dob: string;
  gender: string;
  location: string;
  occupation: string;
}

const useRegister = () => {
  const [error, setError] = useState<string>();
  const [isLoading, setIsLoading] = useState(false);

  const register = async (request: LoginRequest) => {
    setIsLoading(true);
    const res = await fetch(`http://localhost:3000/auth/register`, {
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
    setIsLoading(false);
  };
  return { register, error, isLoading };
};

export { useRegister };
