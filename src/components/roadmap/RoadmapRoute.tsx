import { useEffect, useState } from "react";
import Roadmap from "./Roadmap";
import { useLocation, useParams } from "react-router-dom";
import { useGetRoadmapById } from "../../hooks/useGetRoadmapById";

function RoadmapRoute() {
  const location = useLocation();
  const dataReceived = location.state;
  console.log(dataReceived);
  const [isReady, setIsReady] = useState(true);
  const { getRoadmapById, dataRoadmap, isLoading } = useGetRoadmapById();
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    try {
      setIsReady(true);
      console.log(
        "Is runningggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggg"
      );
      getRoadmapById(id!);
      setIsReady(true);
    } catch (error) {
      console.log("Error", error);
    } finally {
      setIsReady(false);
    }
  }, []);

  if (isReady || isLoading) return <div>Loading...</div>;

  return (
    <div className="tw-w-full">
      <Roadmap roadmap={dataRoadmap} />
    </div>
  );
}

export default RoadmapRoute;
