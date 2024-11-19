import React from "react";
import { GalleryImages } from "../constants";
const Gallery = () => {
  return (
    <div className="px-6 lg:px-8 py-6 md:pt-24">
      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
        style={{
          gridAutoRows: "220px",
          gridAutoFlow: "dense",
        }}
      >
        {GalleryImages.map((img, index) => (
          <div
            key={index}
            className={`relative w-full overflow-hidden rounded-xl shadow-lg ${
              [0, 2, 4, 6, 9].includes(index) ? "row-span-3" : "lg:row-span-1"
            }`}
          >
            <img
              className="w-full h-full object-cover"
              src={img}
              alt={`img ${index}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
