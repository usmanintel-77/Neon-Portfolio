import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { blogContent, newsletterContent } from "../constants";

import Aos from "aos";
import NewsLetter from "../components/Common/NewsLetter";

const Blog = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <>
      <div className="flex flex-col mt-2 md:mt-[58px] px-3 pt-4 md:pt-10 sm:items-center sm:justify-center my-8 md:my-16 md:px-16 w-full">
        <div className="w-full lg:max-w-[700px] sm:mx-auto">
          <h1 className="text-3xl md:text-[40px] font-bold text-white">
            {blogContent.title}
          </h1>
          <div className="flex flex-col space-y-6 md:space-y-10 p-3 sm:p-6">
            {blogContent.posts.map((post, index) => (
              <Link
                key={index}
                to={post.link}
                className="flex flex-col w-full sm:flex-row sm:items-center hover:pl-1.5 duration-500 ease-in-out transition-all gap-7"
              >
                {index === 0 && (
                  <div className="mt-6 min-w-[280px] max-w-[300px] h-40 relative rounded-lg cursor-pointer border-[0.0001px] border-gray-700">
                    <img
                      className="transition-transform duration-500 ease-in-out w-full h-full object-cover rounded-lg"
                      src={post.image}
                      alt="gallery image"
                    />
                  </div>
                )}
                <div className="flex flex-col">
                  <h1 className="text-xl font-semibold mb-1">{post.title}</h1>
                  <h2 className="text-sm text-gray-400 mb-3">{post.date}</h2>
                  <button
                    className={`px-4  ${
                      index === 2 ? "max-w-24" : "max-w-20"
                    }  py-[1.5px] bg-[rgba(0,0,0,0.3)] border-[0.4px] border-gray-700 text-white rounded-full hover:bg-[rgba(0,0,0,0.5)] transition text-[12px]`}
                  >
                    {post.buttonText}
                  </button>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="px-5 md:px-12 lg:px-40">
        <NewsLetter content={newsletterContent} />
      </div>
    </>
  );
};

export default Blog;
