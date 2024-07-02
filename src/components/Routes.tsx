import SignIn from "./auth/Signin";
import SignUp from "./auth/Signup";
import Home from "./home/Home";
import { createBrowserRouter } from "react-router-dom";
import Quiz1 from "./quiz/Quiz1";
import RoadmapRoute from "./roadmap/RoadmapRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },

  {
    path: "/signin",
    element: <SignIn />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/quiz1",
    element: <Quiz1 />,
  },
  {
    path: "/roadmap/:id",
    element: <RoadmapRoute />,
  },
]);

export default router;
