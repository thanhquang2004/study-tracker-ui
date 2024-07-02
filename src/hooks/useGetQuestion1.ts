import { useState } from "react";
import { dataType } from "../interfaces/questionData.interface";

interface GetQuestion1Request {
  info: string;
}



const useGetQuestion1 = () => {
  const [error, setError] = useState<string>();
  const [data1, setData] = useState<dataType>();
  const [isLoading1, setIsLoading] = useState(false);

  const GetQuestion1 = async (request: GetQuestion1Request) => {
    setIsLoading(true);
    const res = await fetch(`http://localhost:3000/gemini/question1`, {
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
  return { GetQuestion1, error, data1, isLoading1 };
};

export { useGetQuestion1 };
