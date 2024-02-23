import React, { useState } from "react";

const Accordian = () => {
  const [accordian, setAccordian] = useState(false);

  const toggleAction = () => {
    setAccordian(!accordian);
  };
  return (
    <div className=" w-full h-screen bg-gradient-to-r from-indigo-400 to-blue-400">
      <button
        onClick={toggleAction}
        className=" p-4  bg-gray-300 rounded-sm flex justify-between"
      >
        <span className=" font-bold">Lorem ipsum dolor sit amet.</span>
        <span>{accordian ? "-" : "+"}</span>
      </button>

      {accordian && (
        <div>
          <div className=" w-[220px] bg-gray-300 rounded-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </div>
        </div>
      )}
    </div>
  );
};

export default Accordian;
