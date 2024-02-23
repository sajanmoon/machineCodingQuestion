import React, { useState } from "react";

const DarkMode = () => {
  const [color, setColor] = useState("light");
  const handleToggleBtn = () => {
    setColor(color === "light" ? "dark" : "light");
  };
  return (
    <div>
      <h1 className=" font-bold">Dark Mode</h1>
      <button
        className=" border border-black bg-orange-200"
        onClick={handleToggleBtn}
      >
        Toggle Dark/Light Mode
      </button>
      <div
        className={` border border-black h-[600px] w-1/2vw bg-black ${
          color === "dark" ? "bg-black" : "bg-white"
        }`}
      ></div>
    </div>
  );
};

export default DarkMode;
