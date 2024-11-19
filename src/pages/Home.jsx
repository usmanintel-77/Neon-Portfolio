// src/pages/Home.js
import React from "react";
import Hero from "../components/Home/Hero";
import Projects from "../components/Common/Projects";
import {
  newsletterContent,
  projects1Content,
  projects2Content,
  videoContent,
} from "../constants";
import Video from "../components/Common/Video";
import NewsLetter from "../components/Common/NewsLetter";

const Home = () => {
  return (
    <div className="flex flex-col mt-2 md:mt-[58px]  px-3 lg:px-8 pt-10 ">
      <Hero />
      <Projects content={projects1Content} />
      <Video content={videoContent} />
      <Projects content={projects2Content} />
      <NewsLetter content={newsletterContent} />
    </div>
  );
};

export default Home;
