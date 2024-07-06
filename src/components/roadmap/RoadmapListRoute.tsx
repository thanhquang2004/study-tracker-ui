import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import Loader from "../loader/Loader";
import { useGetRoadmaps } from "../../hooks/useGetRoadmaps";
import RoadmapList from "./RoadmapList";
import roadmap from "/your-roadmap.jpg";

function RoadmapListRoute() {
  const location = useLocation();
  const dataReceived = location.state;
  console.log(dataReceived);
  const [isReady, setIsReady] = useState(true);
  //   const { getRoadmapById, dataRoadmap, isLoading } = useGetRoadmapById();
  const { getRoadmaps, data, error, isLoading } = useGetRoadmaps();
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    try {
      setIsReady(true);
      //   getRoadmapById(id!);
      getRoadmaps();
      setIsReady(true);
    } catch (error) {
      console.log("Error", error);
    } finally {
      setIsReady(false);
    }
  }, []);

  if (isReady || isLoading) return <Loader />;

  return (
    <div className="tw-w-full">
      <img src={roadmap} className="tw-max-w-full"/>
      <RoadmapList roadmaps={data} />
    </div>
  );
}

export default RoadmapListRoute;
