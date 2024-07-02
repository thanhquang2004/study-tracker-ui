import { useState } from "react";
import { dataType } from "../interfaces/questionData.interface";

interface GetQuestion1Request {
  info: string;
}



const useGetQuestion3 = () => {
  const [error, setError] = useState<string>();
  const [data3, setData] = useState<dataType>();
  const [isLoading3, setIsLoading] = useState(false);

  const GetQuestion3 = async (request: GetQuestion1Request) => {
    setIsLoading(true);
    const res = await fetch(`http://localhost:3000/gemini/question3`, {
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
  return { GetQuestion3, error, data3, isLoading3 };
};

export { useGetQuestion3 };
