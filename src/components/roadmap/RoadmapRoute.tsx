import { useEffect, useState } from "react";
import Roadmap from "./Roadmap";
import { useLocation, useParams } from "react-router-dom";
import { useGetRoadmapById } from "../../hooks/useGetRoadmapById";
import Loader from "../loader/Loader";

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
      getRoadmapById(id!);
      setIsReady(true);
    } catch (error) {
      console.log("Error", error);
    } finally {
      setIsReady(false);
    }
  }, []);

  if (isReady || isLoading) return <Loader />;

  return (
    <div className="tw-w-full tw-mt-10 tw-flex tw-justify-center">
      <Roadmap roadmap={dataRoadmap} />
    </div>
  );
}

export default RoadmapRoute;
