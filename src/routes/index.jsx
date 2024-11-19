import { createBrowserRouter } from "react-router-dom";
import App from "../App.jsx";
import Home from "../pages/Home.jsx";
import About from "../pages/About.jsx";
import Work from "../pages/Work.jsx";
import Gallery from "../pages/Gallery.jsx";
import Blog from "../pages/Blog.jsx";
import AdaptiveDesignSystem from "../pages/AdaptiveDesignSystem.jsx";
import NewMilestone from "../pages/NewMilestone.jsx";
import DrwerRemains from "../pages/DrwerRemains.jsx";
import AutomateDesign from "../pages/AutomateDesign.jsx";
import DesignEngineering from "../pages/DesignEngineering.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "work",
        element: <Work />,
      },
      {
        path: "work/adaptive-design-system-for-archlight",
        element: <AdaptiveDesignSystem />,
      },
      {
        path: "work/automate-design-handovers-with-a-figma-to-code-pipeline",
        element: <AutomateDesign />,
      },

      {
        path: "gallery",
        element: <Gallery />,
      },
      {
        path: "blog",
        element: <Blog />,
      },
      {
        path: "blog/new-milestone-in-my-career",
        element: <NewMilestone />,
      },
      {
        path: "blog/the-99-percent-that-remains-in-the-drawer",
        element: <DrwerRemains />,
      },
      {
        path: "blog/the-rise-of-design-engineering",
        element: <DesignEngineering />,
      },
    ],
  },
]);

export default router;
