import { useEffect, useState } from "react";
import { EditTask } from "./EditTask";

export const ToDo = ({ task, taskList, setTaskList, index }) => {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    let interval;
    if (running) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [running]);

  const handleDeleteTask = () => {
    const updatedTaskList = taskList.filter((_, i) => i !== index);
    setTaskList(updatedTaskList);
  };

  return (
    <>
      <div className="todo-card">
        <div className="edit-pn-container">
          <p id="project-name">{task.projectName}</p>
          <EditTask
            task={task}
            taskList={taskList}
            setTaskList={setTaskList}
            index={index}
            setTime={setTime}
            setRunning={setRunning}
          />
        </div>
        <p id="task-desc">{task.taskDescription}</p>
        <div className="timer">
          <div className="time-display">
            <span>{("0" + Math.floor((time / 3600000) % 24)).slice(-2)}:</span>
            <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
            <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
            <span style={{ fontSize: "14px" }}>
              {("0" + Math.floor((time / 10) % 100)).slice(-2)}
            </span>
          </div>
          <div className="controls">
            {running ? (
              <button onClick={() => setRunning(false)}>Stop</button>
            ) : (
              <button onClick={() => setRunning(true)}>Start</button>
            )}
            <button
              onClick={() => {
                setRunning(false);
                setTime(0);
              }}
            >
              Reset
            </button>
          </div>
        </div>
        <div className="delete-to-do">
          <button className="delete-button" onClick={handleDeleteTask}>
            Delete
          </button>
        </div>
      </div>
    </>
  );
};
