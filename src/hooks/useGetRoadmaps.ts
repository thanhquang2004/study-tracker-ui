import { useState } from "react";
import { RoadmapType } from "../interfaces/roadmap.interface";



const useGetRoadmaps = () => {
  const [error, setError] = useState<string>();
  const [data, setData] = useState<RoadmapType>();
  const [isLoading, setIsLoading] = useState(false);
  const accessToken = localStorage.getItem("accessToken");

  const getRoadmaps = async () => {
    setIsLoading(true);
    const res = await fetch(`http://localhost:3000/roadmap`, {
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
    setIsLoading(false);
  };
  return { getRoadmaps, error, data, isLoading };
};

export { useGetRoadmaps };
