import React, { useState, useEffect } from "react";
import { aboutContent } from "../../constants";

const Technicalskills = () => {
  const [zoomedImageIndex, setZoomedImageIndex] = useState(null);
  const content = aboutContent.technicalSkills;

  // Toggle zoom for an image
  const handleImageClick = (index) => {
    setZoomedImageIndex(zoomedImageIndex === index ? null : index);
  };

  useEffect(() => {
    if (zoomedImageIndex !== null) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [zoomedImageIndex]);

  return (
    <section>
      <h1
        id="skills"
        className="text-2xl md:text-4xl font-bold text-white mb-6"
      >
        Technical skills
      </h1>
      {content.map((skill, skillIndex) => (
        <div key={skill.id} className="flex flex-col py-10">
          <div>
            <h2 id={skill.id} className="text-xl text-white font-bold">
              {skill.title}
            </h2>
            <h3 className="text-md text-gray-400">{skill.description}</h3>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            {skill.images.map((image, index) => {
              const combinedIndex = skillIndex * 10 + index;
              return (
                <div
                  key={combinedIndex}
                  onClick={() => handleImageClick(combinedIndex)}
                  className={`mt-6 max-w-60 h-32 relative rounded-lg cursor-pointer border border-gray-700 ${
                    zoomedImageIndex === combinedIndex ? "z-50" : ""
                  }`}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className={`transition-transform duration-500 ease-in-out ${
                      zoomedImageIndex === combinedIndex
                        ? "w-[70%] h-auto fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 scale-125 z-50"
                        : "w-full h-full object-cover rounded-lg"
                    }`}
                    style={{ transformOrigin: "center center" }}
                  />
                  {zoomedImageIndex === combinedIndex && (
                    <div className="absolute inset-0 bg-transparent bg-opacity-70 z-40" />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </section>
  );
};

export default Technicalskills;
