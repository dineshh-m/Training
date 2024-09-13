import { useReducer, useState } from "react";
import "./exercise-five.css";

function reducer(state, action) {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    default:
      return state;
  }
}

export default function ExerciseFive() {
  // const [count, setCount] = useState(0);
  const [count, dispatch] = useReducer(reducer, 0);

  const handleIncrementClick = () => {
    if (count >= 25) {
      return;
    }

    dispatch({ type: "INCREMENT" });
  };

  const handleDecrementClick = () => {
    if (count <= 0) {
      return;
    }
    dispatch({ type: "DECREMENT" });
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
