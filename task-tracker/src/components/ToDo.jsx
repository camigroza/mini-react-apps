import { EditTask } from "./EditTask";

export const ToDo = ({ task, taskList, setTaskList, index }) => {
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
          />
        </div>
        <p id="task-desc">{task.taskDescription}</p>
        <div className="delete-to-do">
          <button className="delete-button" onClick={handleDeleteTask}>
            Delete
          </button>
        </div>
      </div>
    </>
  );
};
