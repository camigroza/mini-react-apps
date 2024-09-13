import "./App.scss";
import { AddTask } from "./components/AddTask";

function App() {
  return (
    <>
      <h1>Task Tracker</h1>
      <div className="add-task-msg">
        <p>Click </p>
        <AddTask />
        <p>to add a new task</p>
      </div>
    </>
  );
}

export default App;
