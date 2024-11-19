import { useState } from "react";
import Background1 from "../Background/Background1";

const NewsLetter = ({ content }) => {
  const [inputData, setInputData] = useState("");

  const handleChange = (e) => {
    setInputData(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputData);
  };

  return (
    <section
      data-aos="fade-up"
      data-aos-delay="500"
      className="relative z-50 mx-2 sm:mx-6 lg:mx-16  md:mb-12 p-8 md:py-16 my-8 bg-black border border-gray-700 flex items-center justify-center rounded-xl overflow-hidden"
    >
      <Background1 />
      <div className="relative z-10  text-center text-white w-full max-w-xl mx-auto space-y-6">
        <h2
          data-aos="fade-up"
          data-aos-delay="500"
          className="text-3xl font-bold text-white"
        >
          {content.title}
        </h2>

        <p
          data-aos="fade-up"
          data-aos-delay="500"
          className="text-gray-100 text-[15px] md:px-20"
        >
          {content.description}
        </p>

        <form onSubmit={handleSubmit}>
          <div
            data-aos="fade-up"
            data-aos-delay="500"
            className="flex items-center justify-center gap-3 mt-4"
          >
            <input
              type="email"
              placeholder={content.placeholder}
              name="email"
              value={inputData}
              onChange={handleChange}
              className="w-full py-2 px-4 max-w-60 bg-[rgba(30,30,30,1)] border border-gray-700 rounded-xl text-gray-300 placeholder-white hover:bg-[rgba(45,45,45,1)] focus:bg-[rgba(45,45,45,1)] focus:outline-none transition-all duration-300 outline-none"
            />
            <button
              type="submit"
              className="bg-white min-h-8 min-w-16 sm:p-2  text-black text-sm  rounded-xl font-semibold hover:bg-gray-200 transition duration-300"
            >
              {content.buttonText}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default NewsLetter;
