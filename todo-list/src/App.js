import { useState } from "react";
import "./App.scss";
import { Input } from "./components/Input";
import { ListItem } from "./components/ListItem";

function App() {
  const [taskList, setTaskList] = useState([]);

  return (
    <>
      <div className="up">
        <h1>To Do List</h1>
        <Input taskList={taskList} setTaskList={setTaskList} />
      </div>
      <div className="list-items">
        {taskList.map((task, index) => (
          <ListItem
            key={index}
            index={index}
            task={task}
            taskList={taskList}
            setTaskList={setTaskList}
          />
        ))}
      </div>
    </>
  );
}

export default App;
