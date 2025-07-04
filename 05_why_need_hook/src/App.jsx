import React, { useState } from "react";

const App = () => {
  const [counter, setCounter] = useState(1);

  const handleAddValue = () => {
    setCounter(counter >= 0 && counter < 20 ? counter + 1 : counter);
    console.log("Clicked");
  };

  const handleSubValue = () => {
    setCounter(counter > 0 ? counter - 1 : counter);
  };

  return (
    <div>
      Counter Program
      <h2>Counter Value: {counter}</h2>
      <br />
      <br />
      <button onClick={handleAddValue}>Add Value</button>
      <br />
      <button onClick={handleSubValue}>Decrease Value</button>
      <p>
        Count kara : <b>{counter}</b>
      </p>
    </div>
  );
};

export default App;
