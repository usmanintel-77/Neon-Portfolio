import React, { useEffect } from "react";
import { HiOutlineChevronRight } from "react-icons/hi2";
import avatarImage from "../../assets/avatar.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
import { useNavigate } from "react-router-dom";
import { HomePageContent } from "../../constants";

const Hero = () => {
  const navigate = useNavigate();
  const heroContent = HomePageContent.hero;
  //handle click event
  const handleClick = () => {
    navigate("/about");
  };
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <section className="flex flex-col  items-start space-y-5 px-1 sm:px-6 lg:px-20 py-2 md:py-10 w-full md:max-w-2xl">
      <h1
        data-aos="fade-right"
        data-aos-delay="400"
        data-aos-once="false"
        className="text-4xl md:text-6xl inter-font font-[750] text-white"
      >
        {heroContent.heading}
      </h1>
      <p
        data-aos="fade-right"
        data-aos-delay="700"
        className="text-gray-300 text-md sm:text-lg tracking-[0.5px]"
      >
        {heroContent.text}
      </p>
      <button
        data-aos="fade-right"
        data-aos-delay="900"
        className="flex items-center px-1 py-[2px] bg-transparent rounded-full border border-gray-700 hover:bg-[rgba(45,45,45,0.3)] hover:transition-all ease-in-out duration-400 space-x-2"
        onClick={handleClick}
      >
        <img
          src={avatarImage}
          alt="Avatar"
          className="w-8 h-8 rounded-full border border-gray-700"
        />
        <span className="text-sm font-bold text-white">{heroContent.btn}</span>
        <HiOutlineChevronRight className="text-white font-semibold text-2xl pr-2" />
      </button>
    </section>
  );
};

export default Hero;
