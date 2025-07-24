import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(15); // setCounter
  // is the method which is controlling the variable counter

  // let counter = 15;

  const addValue = () => {
    // counter = counter + 1; // updating the counter

    if (counter <= 20) {
      console.log("value added", counter);
      setCounter(counter + 1); // updating the parameter of setcounter

      // setCounter(counter + 1);
      // setCounter(counter + 1);
      // setCounter(counter + 1);

      // if we call multiple same setCounter
      // then it will take it as a batch

      // for executing multiple same function use->
      // setCounter((counter) => counter + 1);
      // setCounter((counter) => counter + 1);
      // setCounter((counter) => counter + 1);
    } else {
      console.log(counter, "is greater than 20");
    }
  };

  const removeValue = () => {
    console.log("value added", counter);
    //counter = counter - 1;
    if (counter >= 0) {
      setCounter(counter - 1);
    } else {
      console.log(counter, " is less than 0");
    }
  };
  return (
    <>
      <h1>Vaibhav's Code</h1>
      <h2>Counter value is : {counter}</h2>

      <button onClick={addValue}>Add Value {counter}</button>

      <br />

      <button onClick={removeValue}>remove Value {counter}</button>
    </>
  );
}

export default App;
