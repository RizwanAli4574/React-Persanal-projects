import { useState } from "react";

function Goal1() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount((prev) => prev === 20 ? prev = 20 : prev + 1);
  };

  const handleDecrement = () => {
      setCount((prev) => prev === 0 ? prev = 0 : prev - 1);
    
  };

  return (
    <div>
      <h2>Count {count}</h2>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement} disabled={count === 0}>Decrement</button>
    </div>
  );
}

export default  Goal1
