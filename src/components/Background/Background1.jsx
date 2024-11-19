const Background1 = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute top-0 right-0 w-[400px] h-[200px] bg-[#721515] opacity-60 rounded-full blur-[80px] pointer-events-none" />

      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "repeating-linear-gradient(-135deg, rgba(40, 40, 40, 0.7), rgba(40, 40, 40, 0.7) 1px, transparent 1px, transparent 15px)",
          backgroundSize: "15px 15px",
          opacity: 0.7,
        }}
      />
    </div>
  );
};

export default Background1;
