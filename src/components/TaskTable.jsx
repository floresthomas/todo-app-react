const TaskTable = ({ tasks }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Tasks</th>
        </tr>
      </thead>
      <tbody>
        {tasks.map((task) => (
          <tr key={task.name}>
            <td>
              {task.name}
              <input type="checkbox" value={task.done} />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TaskTable;
