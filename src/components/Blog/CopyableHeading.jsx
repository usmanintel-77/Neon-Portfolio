import React, { useState } from "react";
import { FaCheck, FaCopy, FaTimes } from "react-icons/fa";

const CopyableHeading = ({ title, id }) => {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = () => {
    const textToCopy = `https://demo.magic-portfolio.com/blog/the-rise-of-design-engineering#${id}`;
    navigator.clipboard.writeText(textToCopy).then(() => {
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 10000);
    });
  };

  const handleDismiss = () => {
    setIsCopied(false);
  };

  return (
    <>
      <div className="relative flex items-center justify-start gap-2 group mb-4">
        <h1
          className="relative text-white text-2xl font-bold cursor-pointer transition-all"
          onClick={handleCopy}
        >
          {title}

          <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-gray-300 transition-all group-hover:w-full"></span>
        </h1>

        <FaCopy
          className="text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer"
          onClick={handleCopy}
        />
      </div>

      {isCopied && (
        <div className="fixed bottom-5 backdrop-blur-lg left-1/2 transform -translate-x-1/2 bg-black bg-opacity-90 text-gray-300 border border-gray-500 rounded-lg w-full h-12 max-w-[500px] flex items-center justify-between px-4 shadow-lg transition-all duration-300 z-50">
          <div className="flex items-center gap-3">
            <FaCheck className="text-green-500 text-lg" />
            <span className="text-sm font-semibold">
              Link copied to clipboard.
            </span>
          </div>

          <div className="relative">
            <FaTimes
              className="text-gray-400 text-lg peer cursor-pointer hover:text-gray-200 transition"
              onClick={handleDismiss}
            />

            <span className="absolute -top-6 right-0 text-xs bg-black bg-opacity-90 border border-gray-500 text-gray-300 px-2 py-1 rounded opacity-0 peer-hover:opacity-100 transition-opacity duration-200">
              Hide
            </span>
          </div>
        </div>
      )}
    </>
  );
};

export default CopyableHeading;
