import { useState } from "react";
import { RoadmapType } from "../interfaces/roadmap.interface";

interface GetQuestion1Request {
  info: string;
}

const useGetRoadmap = () => {
  const [error, setError] = useState<string>();
  const [dataRoadmap, setData] = useState<RoadmapType>();
  const [isLoading, setIsLoading] = useState(false);
  const accessToken = localStorage.getItem("accessToken");

  const getRoadmap = async (request: GetQuestion1Request) => {
    setIsLoading(true);
    const res = await fetch(`http://localhost:3000/gemini/roadmap`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${accessToken}`,
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
    setIsLoading(false);
  };
  return { getRoadmap, error, dataRoadmap, isLoading };
};

export { useGetRoadmap };
