export default function ExerciseTwo() {
  const items = ["React", "Node.js", "Express.js"];
  return (
    <div>
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </div>
  );
}
