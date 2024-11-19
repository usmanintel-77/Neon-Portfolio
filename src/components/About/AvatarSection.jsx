import React from "react";
import { aboutContent } from "../../constants";

const AvatarSection = () => {
  const content = aboutContent.avatarSection;
  return (
    <section className="flex flex-col space-y-6 items-center text-center md:text-start justify-center md:justify-start">
      {/* Avatar */}
      <div className="overflow-hidden">
        <img
          src={content.avatarSrc}
          alt="Avatar"
          className="w-36 h-36 rounded-full border-[0.4px] border-gray-700"
        />
      </div>

      {/* Location */}
      <h2 className="text-md font-[500] text-white">{content.location}</h2>

      {/* Buttons */}
      <div className="flex gap-4">
        {content.buttons.map((button, index) => (
          <button
            key={index}
            className="px-4 py-[1.5px] bg-[rgba(0,0,0,0.3)] border-[0.4px] border-gray-700 text-white rounded-full hover:bg-[rgba(0,0,0,0.5)] transition text-center text-[12px]"
          >
            {button.label}
          </button>
        ))}
      </div>
    </section>
  );
};

export default AvatarSection;
