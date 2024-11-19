import React from "react";
import { aboutContent } from "../../constants";

const Studies = () => {
  const content = aboutContent.studies;
  return (
    <section id="studies" className="py-8">
      <h1 className="text-2xl md:text-4xl font-bold text-white mb-6">
        Studies
      </h1>
      <div className="flex flex-col space-y-6">
        {content.map((study) => (
          <div key={study.id} id={study.id}>
            <h2 className="text-xl text-white font-bold">{study.title}</h2>
            <h3 className="text-md text-gray-400">{study.description}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Studies;
