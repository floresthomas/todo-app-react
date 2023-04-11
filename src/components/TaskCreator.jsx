import { useState } from "react";

const TaskCreator = ({createTask}) => {
  const [newTaskName, setNewTaskName] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    createTask(newTaskName)
    setNewTaskName("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={newTaskName}
        placeholder="Enter a new task"
        onChange={(e) => setNewTaskName(e.target.value)}
      />

      <button>Save task</button>
    </form>
  );
};

export default TaskCreator
