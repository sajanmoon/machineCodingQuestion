import React, { useState } from "react";

const CounterApp = () => {
  const [count, setCount] = useState(0);
  const [inputData, setInputData] = useState("");
  const handleIncrement = () => {
    setCount(count + Number(inputData));
  };

  const handleDecrement = () => {
    if (count > 0) {
      setCount(count - Number(inputData));
    }
  };

  const handleReset = () => {
    setCount(0);
    setInputData("");
  };
  return (
    <div>
      <h1>COUNTER APP</h1>
      <input
        className=" border border-black"
        type="number"
        placeholder="increment/decrement by"
        value={inputData}
        onChange={(e) => setInputData(e.target.value)}
      />
      <button className=" border border-black" onClick={handleReset}>
        RESET
      </button>
      <h1>{count}</h1>
      <button className=" border border-black" onClick={handleDecrement}>
        DECR
      </button>
      <button className=" border border-black" onClick={handleIncrement}>
        INCR
      </button>
    </div>
  );
};

export default CounterApp;
