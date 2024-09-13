import { useState } from "react";
import "./exercise-five.css";

export default function ExerciseFive() {
  const [count, setCount] = useState(0);
  const handleIncrementClick = () => {
    if (count >= 25) {
      return;
    }

    setCount(count + 1);
  };

  const handleDecrementClick = () => {
    if (count <= 0) {
      return;
    }
    setCount(count - 1);
  };
  return (
    <>
      <p className="count">
        <strong>Count: </strong>
        {count}
      </p>
      <div className="btn-group">
        <button onClick={handleIncrementClick}>Increment</button>
        <button className="btn-no-bg" onClick={handleDecrementClick}>
          Decrement
        </button>
      </div>
    </>
  );
}
