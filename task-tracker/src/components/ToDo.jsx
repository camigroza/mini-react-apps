import { EditTask } from "./EditTask";

export const ToDo = ({ task }) => {
  return (
    <>
      <div className="todo-card">
        <div className="edit-pn-container">
          <p id="project-name">{task.projectName}</p>
          <EditTask />
        </div>
        <p id="task-desc">{task.taskDescription}</p>
        <div className="delete-to-do">
          <button className="delete-button">Delete</button>
        </div>
      </div>
    </>
  );
};
