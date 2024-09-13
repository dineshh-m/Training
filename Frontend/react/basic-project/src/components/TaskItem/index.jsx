import "./taskitem.css";

export default function TaskItem({ task, dispatch }) {
  return (
    <div className="task-item">
      <h2>{task}</h2>
      <button
        className="btn-sm"
        onClick={() => dispatch({ type: "remove", payload: task })}
      >
        remove
      </button>
    </div>
  );
}
