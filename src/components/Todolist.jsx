import { useState } from "react";

const Todolist = () => {
  const [inputText, setInputText] = useState("");
  const [inputData, setInputData] = useState([]);
  const [removeData, setRemoveData] = useState([]);

  const handleInputItems = () => {
    const newObj = {
      inputText: inputText,
      number: 1,
    };
    setInputData([...inputData, newObj]);
    setInputText("");
  };

  const handleDeleteItem = (index) => {
    const inpData = inputData[index];
    const delItem = inputData.filter((elem, i) => i !== index);
    setInputData(delItem);
    setRemoveData([...removeData, inpData]);
  };

  const handleRestoreData = (index) => {
    const restData = removeData[index];
    const restItem = removeData.filter((elem, i) => i !== index);
    setRemoveData(restItem);
    setInputData([...inputData, restData]);
  };

  return (
    <div>
      <h1>Todo</h1>
      <div className="container">
        <input
          className=" border border-black"
          type="text"
          placeholder="add task here"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />
        <button className=" border border-black" onClick={handleInputItems}>
          ADD
        </button>
      </div>
      <div className="items">
        {inputData.map((elem, index) => (
          <div key={index}>
            <li>{elem.inputText}</li>
            <button
              className=" border border-black"
              onClick={() => handleDeleteItem(index)}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
      <div className="restoreData">
        <h1>Remove Items</h1>
        {removeData.map((elem, index) => (
          <div key={index}>
            <li>{elem.inputText}</li>
            <button
              className=" border border-black"
              onClick={() => handleRestoreData(index)}
            >
              Restore
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Todolist;
