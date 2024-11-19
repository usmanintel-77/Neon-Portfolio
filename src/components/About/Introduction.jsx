import React from "react";
import { SlCalender } from "react-icons/sl";
import { HiOutlineChevronRight } from "react-icons/hi2";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { aboutContent } from "../../constants";

const iconMapping = {
  FaGithub: <FaGithub className="text-sm" />,
  FaLinkedin: <FaLinkedin className="text-sm" />,
  FaEnvelope: <FaEnvelope className="text-sm" />,
};

const Introduction = () => {
  const { scheduleCall, name, title, socialLinks, description } =
    aboutContent.introduction;

  return (
    <div id="introduction" className="w-full">
      <div className="w-full items-center md:items-start text-center md:text-start justify-center md:justify-start">
        {/* Schedule a Call Button */}
        <div className="inline-flex p-1 py-[2px] bg-[rgba(154,80,138,0.2)] border-[0.6px] border-[rgba(154,80,138,0.5)] text-white rounded-full transition text-center text-md items-center gap-4">
          <SlCalender className="ms-3" />
          <span>{scheduleCall.label}</span>
          <a
            className="p-1.5 rounded-full bg-transparent border-[0.4px] border-gray-700 hover:bg-[rgba(0,0,0,0.4)] transition-all duration-300"
            href={scheduleCall.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <HiOutlineChevronRight />
          </a>
        </div>

        {/* Name and Title */}
        <div className="flex flex-col space-y-1 mt-6">
          <h1 className="text-3xl md:text-7xl font-bold">{name}</h1>
          <h2 className="text-xl md:text-3xl text-gray-300">{title}</h2>

          {/* Social Links */}
          <div className="flex items-center justify-center md:justify-start space-x-2 py-4">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-1.5 border-[0.4px] border-gray-700 bg-[rgba(0,0,0,0.2)] text-[13px] hover:bg-[rgba(16,16,16,0.9)] active:bg-[rgba(16,16,16,0.9)] focus:bg-[rgba(16,16,16,0.9)] font-medium text-white px-2 py-1 rounded-[10px] transition-all duration-300"
              >
                {iconMapping[link.icon]}
                <span>{link.label}</span>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Description */}
      <div className="mt-5">
        <p className="text-[17px] leading-[23px]">{description}</p>
      </div>
    </div>
  );
};

export default Introduction;
