export const ListItem = ({ task, index, taskList, setTaskList }) => {
  const handleDelete = () => {
    const updatedTaskList = taskList.filter((_, i) => i !== index);
    setTaskList(updatedTaskList);
  };

  return (
    <>
      <div>{task}</div>
      <button onClick={handleDelete}>Delete</button>
    </>
  );
};
