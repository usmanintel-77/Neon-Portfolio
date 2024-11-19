// src/components/MainContent.js
import React from "react";
import AvatarSection from "./AvatarSection";
import Introduction from "./Introduction";
import Experience from "./Experience";
import Studies from "./Studies";
import Technicalskills from "./Technicalskills";

const MainContent = () => {
  return (
    <div className="flex flex-col  p-1  lg:p-0 md:flex-row space-y-8 md:space-y-0 md:space-x-24 w-full lg:mr-14  ">
      <div>
        <AvatarSection />
      </div>
      <div>
        <Introduction />
        <Experience />
        <Studies />
        <Technicalskills />
      </div>
    </div>
  );
};

export default MainContent;
