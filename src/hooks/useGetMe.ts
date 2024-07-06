import { useState } from "react";


const useGetMe = () => {
  const [error, setError] = useState<string>();
  const [data, setData] = useState();
  const accessToken = localStorage.getItem("accessToken");

  const getMe = async () => {
    const res = await fetch(`http://localhost:3000/user/me`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${accessToken}`,
      },
    });
    if (!res.ok) {
      if (res.status === 401) {
        setError("Unauthorized access");
      } else {
        setError("An error occurred");
      }
      return;
    }
    setError("");
    const jsonData = await res.json();
    setData(jsonData);
  };
  return { getMe, error, data };
};

export { useGetMe };
