import { useState } from "react";




const useGetQuiz = () => {
  const [error, setError] = useState<string>();
  const [data1, setData] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const GetQuiz = async (request) => {
    setIsLoading(true);
    const res = await fetch(`http://localhost:3000/gemini/quiz`, {
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
  return { GetQuiz, error, data1, isLoading };
};

export { useGetQuiz };
