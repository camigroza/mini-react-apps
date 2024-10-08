import { useState } from "react";

export const AddTask = ({ taskList, setTaskList }) => {
  const [addModal, setAddModal] = useState(false);
  const [projectName, setProjectName] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleInput = (e) => {
    const { name, value } = e.target;

    if (name === "projectName") {
      setProjectName(value);
      setErrorMessage("");
    }
    if (name === "projectName" && value === "") {
      setErrorMessage("Enter project name to continue");
    }
    if (name === "taskDescription") setTaskDescription(value);
  };

  const handleAddTask = (e) => {
    e.preventDefault();
    if (!projectName) {
      setErrorMessage("Enter project name to continue");
    } else {
      setTaskList([...taskList, { projectName, taskDescription }]);
      setAddModal(false);
      setProjectName("");
      setTaskDescription("");
      setErrorMessage("");
    }
  };

  return (
    <>
      <button
        type="button"
        onClick={() => {
          setAddModal(true);
          if (projectName === "") {
            setErrorMessage("Enter project name to continue");
          }
        }}
      >
        + NEW
      </button>
      {addModal ? (
        <>
          <div className="modal">
            <div className="add-task-modal-header">
              <h3>Add New Task</h3>
              <button
                onClick={() => {
                  setAddModal(false);
                  setErrorMessage("");
                  setProjectName("");
                  setTaskDescription("");
                }}
              >
                X
              </button>
            </div>
            <form>
              <div className="label-input">
                <label htmlFor="project-name">Project name</label>
                <input
                  id="project-name"
                  type="text"
                  placeholder="Project name"
                  name="projectName"
                  value={projectName}
                  onChange={handleInput}
                  autoComplete="off"
                  required
                />
                <p className="err-msg">{errorMessage}</p>
              </div>
              <div className="label-input">
                <label htmlFor="task-description"> Task description</label>
                <textarea
                  id="task-description"
                  rows="3"
                  placeholder="Task description"
                  name="taskDescription"
                  value={taskDescription}
                  onChange={handleInput}
                  autoComplete="off"
                  required
                />
              </div>
            </form>
            <div className="btn-container">
              <button id="btn-add-task" onClick={handleAddTask}>
                Add Task
              </button>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
};
