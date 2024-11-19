import Aos from "aos";
import React, { useEffect, useState } from "react";
import { HiOutlineChevronRight } from "react-icons/hi2";
import { Link } from "react-router-dom";

const Projects = ({ content }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const { images, mainProject, relatedPosts } = content;
  useEffect(() => {
    Aos.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsTransitioning(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const handleImageClick = () => {
    if (images.length > 1) {
      setIsTransitioning(false);
      const nextIndex = (activeIndex + 1) % images.length;
      setTimeout(() => {
        setActiveIndex(nextIndex);
        setIsTransitioning(true);
      }, 1000);
    }
  };

  const handleControlClick = (index) => {
    if (index !== activeIndex) {
      setIsTransitioning(false);
      setTimeout(() => {
        setActiveIndex(index);
        setIsTransitioning(true);
      }, 1000);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center my-12 px-5 md:px-16 w-full opacity-85">
      <div className="w-full lg:max-w-[870px] mx-auto">
        <div
          onClick={handleImageClick}
          className="w-full relative overflow-hidden rounded-2xl"
        >
          <img
            src={images[activeIndex]}
            alt={`Project ${activeIndex + 1}`}
            className={`w-full h-auto object-cover rounded-2xl cursor-pointer transition-opacity duration-700 border-[0.0001px] border-gray-900 shadow-lg ${
              isTransitioning ? "opacity-100" : "opacity-0"
            }`}
          />
        </div>
        {images.length > 1 && (
          <div className="flex gap-1 px-4 justify-start mt-4 w-full">
            {images.map((_, index) => (
              <div
                key={index}
                onClick={() => handleControlClick(index)}
                className={`cursor-pointer w-full  h-[2px] rounded transition-all ${
                  activeIndex === index ? "bg-white" : "bg-[rgba(40,40,40,0.9)]"
                }`}
              ></div>
            ))}
          </div>
        )}
        <div className="flex flex-col w-full gap-20 md:gap-24 p-4 ">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <h1
              data-aos="fade-up"
              data-aos-delay="500"
              className="text-2xl lg:text-2xl inter-font font-[750] text-white"
            >
              {mainProject.title}
            </h1>
            <div className="flex flex-col justify-start">
              <div data-aos="fade-up" data-aos-delay="500" className="relative">
                {mainProject.avatars.length > 1 ? (
                  mainProject.avatars.map((avatar, idx) => (
                    <img
                      key={idx}
                      src={avatar}
                      alt={`Avatar ${idx + 1}`}
                      className={`w-8 h-8 rounded-full border border-gray-700 shadow-lg ${
                        idx === 0 ? "-mr-2 absolute z-[100]" : "ml-6"
                      }`}
                    />
                  ))
                ) : (
                  <img
                    src={mainProject.avatars[0]}
                    alt={`Avatar`}
                    className={`w-8 h-8 rounded-full border border-gray-700 shadow-lg`}
                  />
                )}
              </div>
              <p
                data-aos="fade-up"
                data-aos-delay="500"
                className="text-gray-300 text-[13px] mt-3"
              >
                {mainProject.description}
              </p>
              <Link
                data-aos="fade-up"
                data-aos-delay="500"
                to={mainProject.caseStudyLink}
                className="relative flex items-center mt-3 group"
              >
                <span
                  data-aos="fade-up"
                  data-aos-delay="500"
                  className="text-green-300 text-sm group-hover:after:absolute group-hover:after:left-0 group-hover:after:bottom-[-0.5px] group-hover:after:w-[100px] group-hover:transition-all group-hover:duration-300 group-hover:after:h-[1.5px] after:bg-gray-600"
                >
                  Read Case Study
                </span>
                <HiOutlineChevronRight className="ml-1 transition-all duration-300 mt-1 text-green-300" />
              </Link>
            </div>
          </div>
          {relatedPosts && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
              {relatedPosts.map((post, idx) => (
                <div
                  key={idx}
                  className="relative flex flex-col items-start w-full group cursor-pointer"
                >
                  <Link
                    data-aos="fade-up"
                    data-aos-delay="500"
                    to={post.link}
                    className={`relative  ${
                      post.link ===
                        "/blog/the-99-percent-that-remains-in-the-drawer" &&
                      "md:pl-12"
                    }
                 }`}
                  >
                    <div
                      className={`w-[1.5px] bg-gray-800  ${
                        post.link ===
                          "/blog/the-99-percent-that-remains-in-the-drawer" &&
                        "md:ml-12"
                      } h-5 absolute -left-8 top-1/2 transform -translate-y-1/2 group-hover:rotate-90 transition-all duration-500 ease-in-out`}
                    ></div>
                    <div className="group-hover:pl-5 transition-all duration-500 ease-in-out">
                      <h2 className="text-white text-2xl font-semibold mb-2">
                        {post.title}
                      </h2>
                      <p className="text-gray-400 text-base">{post.date}</p>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Projects;
