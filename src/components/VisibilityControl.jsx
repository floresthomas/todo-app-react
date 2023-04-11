import "./Visibility.css"

export const VisibilityControl = ({
  isChecked,
  cleanTasks,
  setShowCompleted,
}) => {
  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete all?")) {
      cleanTasks();
    }
  };

  return (
    <div className="container">
      <div>
        <input
          type="checkbox"
          className="form-check-input"
          checked={isChecked}
          onChange={(e) => setShowCompleted(e.target.checked)}
        />
        <label>Show tasks done</label>
      </div>
      <button className="button-clear" onClick={handleDelete}>
        Clear
      </button>
    </div>
  );
};
