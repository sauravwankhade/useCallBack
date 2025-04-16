import "./styles.css";
import { useState, useMemo, useCallback } from "react";
import Child from "./Child";

export default function App() {
  const [counterOne, setCounterOne] = useState(0);
  const [counterTwo, setCounterTwo] = useState([]);

  const handleCounterOne = () => {
    setCounterOne(counterOne + 1);
  };

  const fun = useCallback(() => {
    console.log("hello saurav");
  }, [counterTwo]);

  return (
    <div className="App">
      <Child counterTwo={counterTwo} setCounterTwo={fun} />
      <button onClick={handleCounterOne}>CounterOne {counterOne} </button>
    </div>
  );
}
