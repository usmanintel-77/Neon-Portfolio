import React from "react";

const Video = ({ content }) => {
  const { videoUrl, title } = content;

  return (
    <div
      data-aos="fade-up"
      data-aos-delay="400"
      className="flex flex-col items-center justify-center my-2 py-8 px-5 md:px-16 w-full opacity-85"
    >
      <div className="w-full lg:max-w-[870px] mx-auto">
        <div className="w-full relative overflow-hidden rounded-2xl">
          <video
            data-aos="fade-up"
            data-aos-delay="500"
            src={videoUrl}
            autoPlay
            loop
            muted
            className="w-full h-auto object-cover rounded-2xl"
          />
        </div>
        <div className="w-full px-4 py-8">
          <h1
            data-aos="fade-up"
            data-aos-delay="500"
            className="text-2xl inter-font font-[750] text-white"
          >
            {title}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Video;
