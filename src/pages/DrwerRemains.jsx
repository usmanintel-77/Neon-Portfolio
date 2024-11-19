import React, { useState, useEffect } from "react";
import { HiOutlineChevronLeft } from "react-icons/hi2";
import { Link } from "react-router-dom";
import { drawerRemainsContent } from "../constants";
import CopyableHeading from "../components/Blog/CopyableHeading";

const DrawerRemains = () => {
  const [isZoomed, setIsZoomed] = useState(false);
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
    <div className="flex flex-col mb-10 space-y-4 w-full px-6 lg:px-8 py-6 md:pt-28">
      <div className="w-full max-w-xl mx-auto">
        <Link
          to="/blog"
          className="flex items-center justify-center max-w-20 gap-1.5 border-[0.4px] border-gray-700 bg-[rgba(0,0,0,0.2)] text-[13px] hover:bg-[rgba(16,16,16,0.9)] active:bg-[rgba(16,16,16,0.9)] focus:bg-[rgba(16,16,16,0.9)] font-medium text-white px-2 py-1 rounded-[10px] transition-all duration-300"
        >
          <HiOutlineChevronLeft className="text-[16px]" />
          <span>Posts</span>
        </Link>
        <h1 className="text-3xl md:text-[40px] leading-[40px] md:leading-[48px] font-[800] text-white mt-4">
          {drawerRemainsContent.title}
        </h1>
      </div>

      <div className="w-full max-w-xl mx-auto">
        <div className="flex items-center gap-3">
          <div className="relative">
            <img
              src={drawerRemainsContent.avatar}
              alt="Right Avatar"
              className="w-6 h-6 rounded-full border border-gray-700 shadow-lg "
            />
          </div>
          <h2 className="text-sm text-gray-300">{drawerRemainsContent.date}</h2>
        </div>

        <div className="flex flex-col space-y-5">
          {drawerRemainsContent.content.map((section, index) => (
            <div key={index} className="pt-6">
              {index > 0 && (
                <CopyableHeading title={section.title} id={section.id} />
              )}

              <p className="text-gray-100 text-[15px]">{section.content}</p>

              {section.imgSrc && (
                <div
                  onClick={handleImageClick}
                  className={`mt-12 max-w-[600px] mb-4 h-auto relative rounded-lg cursor-pointer ${
                    isZoomed ? "z-50" : ""
                  }`}
                >
                  <img
                    src={section.imgSrc}
                    alt="About image"
                    className={`transition-transform duration-500 ease-in-out ${
                      isZoomed
                        ? "w-[70%] h-auto fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 scale-125 z-50"
                        : "w-full h-full object-cover rounded-lg "
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
        </div>
      </div>
    </div>
  );
};

export default DrawerRemains;
