import React from "react";

const Background = () => {
  return (
    <div className="fixed inset-0  bg-[rgba(0,0,0,7)] ">
      <div className="absolute -top-24 -right-6 w-[700px] h-[250px]  bg-[#8B0000] opacity-45 rounded blur-[100px] pointer-events-none" />

      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle,rgba(20, 80, 160, 0.6) 0.5px, transparent 1px)",
          backgroundSize: "15px 15px",
        }}
      />
    </div>
  );
};

export default Background;
