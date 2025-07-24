import { useState } from "react";
import "./App.css";

function App() {
  const [bgColor, setBgColor] = useState("bg-black");

  const addValue = (color) => {
    setBgColor(color);
  };

  return (
    <>
      <div
        className={`h-screen flex flex-col items-center justify-center ${bgColor}`}
      >
        <div className="space-x-4">
          <button
            onClick={() => addValue("bg-red-500")}
            className="px-4 py-2 rounded text-white bg-red-500"
          >
            Red
          </button>
          <button
            onClick={() => addValue("bg-green-500")}
            className="px-4 py-2 rounded text-white bg-green-500"
          >
            Green
          </button>
          <button
            onClick={() => addValue("bg-yellow-400")}
            className="px-4 py-2 rounded text-white bg-yellow-400"
          >
            Yellow
          </button>
          <button
            onClick={() => addValue("bg-purple-600")}
            className="px-4 py-2 rounded text-white bg-purple-600"
          >
            Purple
          </button>
          <button
            onClick={() => addValue("bg-pink-700")}
            className="px-4 py-2 rounded text-white bg-pink-700"
          >
            Pink
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
