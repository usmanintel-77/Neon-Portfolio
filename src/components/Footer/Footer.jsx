import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { footerContent } from "../../constants";

const Footer = () => {
  return (
    <footer className="flex flex-col md:flex-row items-center justify-between w-full lg:px-20 p-4 mb-20 md:mb-0 text-gray-100">
      <div className="text-center md:text-left mb-4 md:mb-0">
        <p>{footerContent.copyrightText}</p>
      </div>

      <div className="flex gap-6">
        {footerContent.socialLinks.map((link, index) => {
          const iconMap = {
            FaGithub: <FaGithub size={20} />,
            FaLinkedin: <FaLinkedin size={20} />,
            FaEnvelope: <FaEnvelope size={20} />,
          };
          return (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
              className="hover:text-white transition duration-300"
            >
              {iconMap[link.icon]}
            </a>
          );
        })}
      </div>
    </footer>
  );
};

export default Footer;
