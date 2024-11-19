import React from "react";
import { HiOutlineChevronLeft } from "react-icons/hi2";
import { Link } from "react-router-dom";
import { adaptiveDesignContent } from "../constants";

const AdaptiveDesignSystem = () => {
  const CONTENT = adaptiveDesignContent;
  return (
    <div className="flex flex-col mb-10 space-y-6 w-full px-6 lg:px-8 py-6 md:pt-28">
      <div className="w-full max-w-xl mx-auto">
        <Link
          to={CONTENT.header.backLink}
          className="flex items-center justify-center max-w-24 gap-1.5 border-[0.4px] border-gray-700 bg-[rgba(0,0,0,0.2)] text-[13px] hover:bg-[rgba(16,16,16,0.9)] active:bg-[rgba(16,16,16,0.9)] focus:bg-[rgba(16,16,16,0.9)] font-medium text-white px-2 py-1 rounded-[10px] transition-all duration-300"
        >
          <HiOutlineChevronLeft className="text-[16px]" />
          <span>{CONTENT.header.backText}</span>
        </Link>
        <h1 className="text-3xl md:text-[40px] leading-[40px] md:leading-[48px] font-[800] text-white py-4">
          {CONTENT.header.title}
        </h1>
      </div>
      <div className="max-w-[940px] mx-auto h-auto">
        <img className="rounded-lg" src={CONTENT.image} alt="image" />
      </div>
      <div className="w-full max-w-xl mx-auto">
        <div className="flex items-center gap-3 py-4">
          <div className="relative">
            <img
              src={CONTENT.avatar.avatar1}
              alt="Left Avatar"
              className="w-8 h-8 rounded-full border border-gray-700 shadow-lg -mr-2 absolute z-[100]"
            />
            <img
              src={CONTENT.avatar.avatar2}
              alt="Right Avatar"
              className="w-8 h-8 rounded-full border border-gray-700 shadow-lg ml-6"
            />
          </div>
          <h2 className="text-sm text-gray-300">{CONTENT.avatar.date}</h2>
        </div>
        <div className="flex flex-col space-y-6">
          {CONTENT.sections.map((section, index) => (
            <div key={index} className="pt-6">
              <h1 className="text-white text-2xl font-bold mb-4">
                {section.title}
              </h1>
              {section.content && (
                <p className="text-gray-100 text-[15px]">{section.content}</p>
              )}
              {section.list && (
                <ul className="list-disc list-inside space-y-2 text-white">
                  {section.list.map((item, subIndex) => (
                    <li key={subIndex} className="text-[15px]">
                      <span className="font-bold">{item.title}: </span>
                      {item.description}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdaptiveDesignSystem;
