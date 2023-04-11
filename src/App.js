import { useState, useEffect } from "react";
import TaskCreator from "./components/TaskCreator";
import TaskTable from "./components/TaskTable";
import { VisibilityControl } from "./components/VisibilityControl";
import "./App.css";

function App() {
  const [taskItems, setTaskItems] = useState([]);
  const [showCompleted, setShowCompleted] = useState(false);

  useEffect(() => {
    let data = localStorage.getItem("tasks");
    if (data) {
      setTaskItems(JSON.parse(data));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(taskItems));
  }, [taskItems]);

  const createTask = (taskName) => {
    if (!taskItems.find((task) => task.name === taskName)) {
      setTaskItems([...taskItems, { name: taskName, done: false }]);
    }
  };

  const toggleTask = (task) => {
    setTaskItems(
      taskItems.map((t) => (t.name === task.name ? { ...t, done: !t.done } : t))
    );
  };

  const deleteTasks = () => {
    setTaskItems(taskItems.filter((task) => !task.done));
  };

  return (
    <div className="app">
      <TaskCreator createTask={createTask} />

      <TaskTable tasks={taskItems} toggleTask={toggleTask} />

      <VisibilityControl
        showCompleted={showCompleted}
        setShowCompleted={(checked) => setShowCompleted(checked)}
        cleanTasks={deleteTasks}
      />

      {showCompleted === true && (
        <TaskTable
          tasks={taskItems}
          toggleTask={toggleTask}
          showCompleted={showCompleted}
        />
      )}
      
    </div>
  );
}

export default App;
