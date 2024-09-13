import Card from "./components/Card";
import ExerciseFive from "./components/ExerciseFive";
import ExerciseOne from "./components/ExerciseOne";
import ExerciseThree from "./components/ExerciseThree";
import ExerciseTwo from "./components/ExerciseTwo";
import { Link } from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Card title="Exercise One">
        <ExerciseOne />
      </Card>
      <Card title="Exercise Two">
        <ExerciseTwo />
      </Card>
      <Card title="Exercise Three">
        <ExerciseThree />
      </Card>
      <Card title="Exercise Five">
        <ExerciseFive />
      </Card>
    </>
  );
}

export default App;
