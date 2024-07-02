import { useState } from "react";
import { RoadmapType } from "../interfaces/roadmap.interface";



const useGetRoadmapById = () => {
  const [error, setError] = useState<string>();
  const [dataRoadmap, setData] = useState<RoadmapType>();
  const [isLoading, setIsLoading] = useState(false);
  const accessToken = localStorage.getItem("accessToken");

  const getRoadmapById = async (id: string) => {
    setIsLoading(true);
    const res = await fetch(`http://localhost:3000/gemini/roadmap/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${accessToken}`,
      },
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
  return { getRoadmapById, error, dataRoadmap, isLoading };
};

export { useGetRoadmapById };
