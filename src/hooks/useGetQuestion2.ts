import { useState } from "react";
import { dataType } from "../interfaces/questionData.interface";

interface GetQuestion1Request {
  info: string;
}

const useGetQuestion2 = () => {
  const [error, setError] = useState<string>();
  const [data2, setData] = useState<dataType>();
  const [isLoading2, setIsLoading] = useState(false);

  const GetQuestion2 = async (request: GetQuestion1Request) => {
    setIsLoading(true);
    const res = await fetch(`http://localhost:3000/gemini/question2`, {
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
    setIsLoading(false);
  };
  return { GetQuestion2, error, data2, isLoading2 };
};

export { useGetQuestion2 };
