import React from "react";
import Projects from "../components/Common/Projects";
import {
  workProjects1Content,
  workProjects2Content,
  workVideoContent,
} from "../constants";
import Video from "../components/Common/Video";
const Work = () => {
  return (
    <div className="flex flex-col lg:px-8 md:pt-16 ">
      <Projects content={workProjects1Content} />
      <Video content={workVideoContent} />
      <Projects content={workProjects2Content} />
    </div>
  );
};

export default Work;
