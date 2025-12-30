import { useState } from "react";

function Goal2() {
  const [input, setInput] = useState("");
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  const handleIncrement = () => {
    setCount(prev => Math.min(prev + step, 20));
  };

  const handleDecrement = () => {
    setCount(prev => Math.max(prev - step, 0));
  };

  const handleInput = () => {
    if (!input || input <= 0) {
      alert("Please Enter correct Value");
    } else {
      setCount(Number(input));
      setInput("");
    }
  };

  const handleStep = () => {
    if (!step || step <= 0) {
      alert("Please Enter correct Value");
    } else{
        setStep(Number(step))
    }
  };

  return (
    <div>
      <h3>Enter Number</h3>
      <input
        type="number"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <br />
      <br />
      <button onClick={handleInput}>Start Increment From</button>
      <br />
      <br />
      <h3>Enter Steps for increment</h3>
      <input
        type="number"
        value={step}
        onChange={(e) => setStep(Number(e.target.value))}
      />
      <br />
      <br />
      <h2>Count {count}</h2>
      <button onClick={handleIncrement} disabled={count === 20}>
        Increment
      </button>
      <button onClick={handleDecrement} disabled={count === 0}>
        Decrement
      </button>
      <br />
      <h4>{count % 2 === 0 ? "Even Number" : "Odd Number"}</h4>
    </div>
  );
}

export default Goal2;
