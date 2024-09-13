import { useState } from "react";
import "./exercise-three.css";

export default function ExerciseThree() {
  const [text, setText] = useState(true);

  const handleClick = () => {
    setText(!text);
  };
  return (
    <>
      <p className="text">
        {text
          ? "I am learning react"
          : "I am learning  react and hooks as well"}
      </p>
      <button className="btn" onClick={handleClick}>
        Update Me
      </button>
    </>
  );
}
