import React from "react";
import { aboutContent } from "../../constants";

const Sidebar = () => {
  const sidebarLinks = aboutContent.sidebarLinks;
  return (
    <aside className="fixed hidden md:block top-20 left-0 h-full max-w-62 transition-all duration-300 ease-in-out text-white mt-3 p-4">
      <ul className="space-y-6">
        {sidebarLinks.map((link, index) => (
          <li key={index}>
            <a
              className="flex items-center space-x-3 hover:pl-1.5 transition-all duration-500 ease-in-out"
              href={`#${link.id}`}
            >
              <div className="w-4 h-[0.5px] bg-gray-600"></div>
              <span className="text-white font-[500] text-[15px]">
                {link.title}
              </span>
            </a>

            {link.subLinks.length > 0 && (
              <ul className="ml-8 mt-1 space-y-2">
                {link.subLinks.map((subLink, subIndex) => (
                  <li key={subIndex}>
                    <a
                      href={`#${subLink.id}`}
                      className="flex items-center space-x-3 hover:pl-1.5 transition-all duration-500 ease-in-out"
                    >
                      <div className="w-2 h-[0.5px] bg-gray-600"></div>
                      <span className="text-white font-[500] text-[15px]">
                        {subLink.title}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
