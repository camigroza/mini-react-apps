import { useState } from "react";

export const AddTask = () => {
  const [addModal, setAddModal] = useState(false);

  return (
    <>
      <button type="button" onClick={() => setAddModal(true)}>
        + NEW
      </button>
      {addModal ? (
        <>
          <div className="modal">
            <div className="add-task-modal-header">
              <h3>Add New Task</h3>
              <button onClick={() => setAddModal(false)}>X</button>
            </div>
            <form>
              <div className="label-input">
                <label for="project-name">Project name</label>
                <input
                  id="project-name"
                  type="text"
                  placeholder="Project name"
                  required
                />
              </div>
              <div className="label-input">
                <label for="task-description"> Task description</label>
                <textarea
                  id="task-description"
                  rows="3"
                  placeholder="Task description"
                  required
                />
              </div>
            </form>
            <div className="btn-container">
              <button id="btn-add-task">Add Task</button>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
};
