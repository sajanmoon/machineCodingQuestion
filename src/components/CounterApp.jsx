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
        type="number"
        placeholder="increment/decrement by"
        value={inputData}
        onChange={(e) => setInputData(e.target.value)}
      />
      <button onClick={handleReset}>RESET</button>
      <h1>{count}</h1>
      <button onClick={handleDecrement}>DECR</button>
      <button onClick={handleIncrement}>INCR</button>
    </div>
  );
};

export default CounterApp;
