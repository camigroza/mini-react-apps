import { useState } from "react";
import "./App.scss";
import { AddTask } from "./components/AddTask";
import { ToDo } from "./components/ToDo";

function App() {
  const [taskList, setTaskList] = useState([]);

  return (
    <>
      <h1>Task Tracker</h1>
      <div className="add-task-msg">
        <p>Click </p>
        <AddTask taskList={taskList} setTaskList={setTaskList} />
        <p>to add a new task</p>
      </div>
      <div className="todo-list">
        <h2>To Do:</h2>
        {taskList.map((task, index) => (
          <>
            <ToDo
              key={index}
              task={task}
              taskList={taskList}
              setTaskList={setTaskList}
              index={index}
            />
          </>
        ))}
      </div>
    </>
  );
}

export default App;
