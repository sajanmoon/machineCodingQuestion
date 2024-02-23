import React, { useState } from "react";

const WordCounter = () => {
  const [inputData, setInputData] = useState("");
  return (
    <div>
      <h1 className=" font-bold text-4xl m-4">Word Counter</h1>
      <h1>
        {inputData.split(" ").length} Words {inputData.length} characters
      </h1>

      <div>
        <textarea
          type="text"
          placeholder=" enter the Words"
          className=" border border-black h-[200px] w-[400px]"
          value={inputData}
          onChange={(e) => setInputData(e.target.value)}
        />
      </div>
    </div>
  );
};

export default WordCounter;
