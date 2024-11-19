import React, { useState, useEffect } from "react";
import { aboutContent } from "../../constants";

const Experience = () => {
  const [isZoomed, setIsZoomed] = useState(false);
  const content = aboutContent.experience;

  const handleImageClick = () => {
    setIsZoomed(!isZoomed);
  };

  useEffect(() => {
    if (isZoomed) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isZoomed]);

  return (
    <section id="experience" className="mt-10 md:mt-16">
      <h1 className="text-2xl md:text-4xl font-bold text-white">
        Work Experience
      </h1>
      {content.map((job, index) => (
        <div key={index} className="pt-6">
          <div className="flex justify-between mt-4">
            <h2 className="text-xl font-semibold text-white">{job.company}</h2>
            <h2 className="text-sm text-white mr-12">{job.duration}</h2>
          </div>
          <h2 className="text-sm text-pink-200 mt-1">{job.position}</h2>

          <ul className="list-disc list-inside mt-3 space-y-4 text-white">
            {job.responsibilities.map((item, idx) => (
              <li key={idx} className="text-[15px]">
                {item}
              </li>
            ))}
          </ul>

          {job.image && (
            <div
              onClick={handleImageClick}
              className={`mt-6 max-w-60 h-32 relative rounded-lg cursor-pointer border border-gray-700 ms-6 ${
                isZoomed ? "z-50" : ""
              }`}
            >
              <img
                src={job.image.src}
                alt={job.image.alt}
                className={`transition-transform duration-500 ease-in-out ${
                  isZoomed
                    ? "w-[70%] h-auto fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 scale-125 z-50"
                    : "w-full h-full object-cover rounded-lg"
                }`}
                style={{ transformOrigin: "center center" }}
              />
              {isZoomed && (
                <div className="absolute inset-0 bg-transparent bg-opacity-70 z-40" />
              )}
            </div>
          )}
        </div>
      ))}
    </section>
  );
};

export default Experience;
