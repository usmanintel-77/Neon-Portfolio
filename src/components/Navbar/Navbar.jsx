import React, { useState, useEffect } from "react";
import dayjs from "dayjs";
import { Link, useLocation } from "react-router-dom";
import { navLinks } from "../../constants";

const Navbar = () => {
  const location = useLocation();
  const [currentTime, setCurrentTime] = useState(dayjs().format("HH:mm:ss"));
  const [isSticky, setIsSticky] = useState(false);
  const [active, setActive] = useState(() => {
    const savedLink = localStorage.getItem("activeLink");
    return savedLink || "Home";
  });
  useEffect(() => {
    const currentPath = location.pathname.slice(1);

    if (currentPath.startsWith("work")) {
      setActive("Work");
    } else if (currentPath.startsWith("blog")) {
      setActive("Blog");
    } else {
      setActive(
        currentPath.charAt(0).toUpperCase() + currentPath.slice(1) || "Home"
      );
    }
  }, [location]);

  // Handle scroll event
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  //Handle time event
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(dayjs().format("HH:mm:ss"));
    }, 1000);

    return () => clearInterval(interval);
  }, []);
  //Handle active link envent
  useEffect(() => {
    localStorage.setItem("activeLink", active);
  }, [active]);

  return (
    <nav
      className={`fixed top-0 w-full flex z-50 transition-all bg-transparent duration-300 items-center justify-between px-4 opacity-100   text-white  ${
        isSticky ? " py-2" : " py-[23px]"
      }`}
    >
      <div className="inter-font text-[12px] tracking-wider hidden md:block">
        Asia/Jakarta
      </div>

      <div
        className={`bg-[rgba(0,0,0,0.5)]  backdrop-blur-xl md:static md:mx-auto md:flex md:justify-center fixed bottom-8 left-1/2 transform md:transform-none -translate-x-1/2 p-[4px] rounded-[16px] border-[0.1px] border-gray-700  flex items-center space-x-1 md:w-auto w-max`}
      >
        {navLinks.map((link, index) => (
          <Link
            key={index}
            to={link.path}
            className={`${
              active === link.label
                ? "bg-[rgba(84,84,84,0.5)] border-[0.4px] border-gray-700"
                : ""
            } ${
              active !== link.label &&
              "hover:outline outline-gray-700 hover:bg-[rgba(48,48,48,0.4)]"
            } flex items-center justify-center space-x-2   px-[14px] py-[6px] md:py-[3px] rounded-[11px]`}
            style={active !== link.label ? { outlineWidth: "0.4px" } : {}}
            onClick={() => setActive(link.label)}
          >
            {link.icon}
            <span className="text-[13px] font-semibold hidden md:inline">
              {link.label}
            </span>
          </Link>
        ))}
      </div>

      <div className="text-[13px] w-[50px] hidden md:block text-center">
        {currentTime}
      </div>
    </nav>
  );
};

export default Navbar;
