import { useEffect, useState } from "react";

export const EditTask = ({ task, taskList, setTaskList, index }) => {
  const [editModal, setEditModal] = useState(false);
  const [projectName, setProjectName] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    setProjectName(task.projectName);
    setTaskDescription(task.taskDescription);
  }, [task]);

  const handleInput = (e) => {
    const { name, value } = e.target;

    if (name === "projectName") setProjectName(value);
    if (name === "taskDescription") setTaskDescription(value);
  };

  const handleUpdateTask = (e) => {
    e.preventDefault();
    if (projectName === "") {
      setErrorMessage("Project name cannot be empty!");
    } else {
      if (taskDescription === "") {
        setErrorMessage("Task description cannot be empty!");
      } else {
        const updatedTaskList = [...taskList];
        updatedTaskList[index] = { projectName, taskDescription };
        setTaskList(updatedTaskList);
        setEditModal(false);
        setProjectName("");
        setTaskDescription("");
        setErrorMessage("");
      }
    }
  };

  return (
    <>
      <button onClick={() => setEditModal(true)}>Edit</button>
      {editModal ? (
        <>
          <div className="modal-e">
            <div className="edit-task-modal-header">
              <h3>Edit Task</h3>
              <button
                id="btn-e"
                onClick={() => {
                  setEditModal(false);
                  setProjectName(task.projectName);
                  setTaskDescription(task.taskDescription);
                  setErrorMessage("");
                }}
              >
                X
              </button>
            </div>
            <form>
              <div className="label-input-e">
                <label htmlFor="project-name-e">Project name</label>
                <input
                  id="project-name-e"
                  type="text"
                  placeholder="Project name"
                  name="projectName"
                  value={projectName}
                  onChange={handleInput}
                  autoComplete="off"
                  required
                />
              </div>
              <div className="label-input-e">
                <label htmlFor="task-description-e"> Task description</label>
                <textarea
                  id="task-description-e"
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
            <div className="btn-container-e">
              <button id="btn-edit-task" onClick={handleUpdateTask}>
                Update Task
              </button>
              <p className="err-msg">{errorMessage}</p>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
};
