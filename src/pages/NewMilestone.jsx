import React from "react";
import { HiOutlineChevronLeft } from "react-icons/hi2";
import { Link } from "react-router-dom";
import { milestoneContent } from "../constants";
import CopyableHeading from "../components/Blog/CopyableHeading";

const NewMilestone = () => {
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
          {milestoneContent.title}
        </h1>
      </div>

      <div className="w-full max-w-xl mx-auto">
        <div className="flex items-center gap-3">
          <div className="relative">
            <img
              src={milestoneContent.avatar}
              alt="Right Avatar"
              className="w-6 h-6 rounded-full border border-gray-700 shadow-lg "
            />
          </div>
          <h2 className="text-sm text-gray-300">{milestoneContent.date}</h2>
        </div>
        <div className="flex flex-col space-y-5">
          {milestoneContent.content.map((section, index) => (
            <div key={index} className="pt-6">
              {index > 0 && (
                <CopyableHeading title={section.title} id={section.id} />
              )}
              <p className="text-gray-100 text-[15px]">{section.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewMilestone;
