import "./App.css";
import { useState } from "react";

function App() {
  const colorArray = ["blue", "red", "yellow", "green"];

  const [index, setIndex] = useState(0);

  const handleClick = () => {
    index === 3 ? setIndex(0) : setIndex(index + 1);
    console.log("index: " + index);
  };

  return (
    <div className="App">
      <div
        style={{
          height: "100px",
          width: "100px",
          backgroundColor: colorArray[index],
        }}
        onClick={() => handleClick()}
      />
      <div
        style={{
          height: "100px",
          width: "100px",
          backgroundColor: colorArray[index + 1],
        }}
        onClick={() => handleClick()}
      />
      <div
        style={{
          height: "100px",
          width: "100px",
          backgroundColor: colorArray[index + 2],
        }}
        onClick={() => handleClick()}
      />
      <div
        style={{
          height: "100px",
          width: "100px",
          backgroundColor: colorArray[index + 3],
        }}
        onClick={() => handleClick()}
      />
    </div>
  );
}

export default App;
