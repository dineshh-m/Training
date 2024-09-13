import { useReducer, useRef } from "react";
import TaskItem from "../TaskItem";
import "./tasklist.css";

function reducer(state, action) {
  if (action.type === "add") {
    return [...state, action.payload];
  } else if (action.type === "remove") {
    return state.filter((task) => task !== action.payload);
  }
}

export default function TaskList() {
  const [state, dispatch] = useReducer(reducer, []);
  const inputRef = useRef();
  return (
    <div>
      <h2>Tasks</h2>
      <div className="form-group flex">
        <input type="text" ref={inputRef} />
        <button
          onClick={() =>
            dispatch({ type: "add", payload: inputRef.current.value })
          }
        >
          Add Tasks
        </button>
      </div>
      <div className="list">
        {state.map((task) => {
          return <TaskItem key={task} task={task} dispatch={dispatch} />;
        })}
      </div>
    </div>
  );
}
