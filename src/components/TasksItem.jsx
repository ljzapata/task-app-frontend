const TaskItem = ({ task, onToggle, onDelete }) => {
  // ✅ Asegurar que completed sea 0 o 1 (o booleano)
  const isCompleted = task.completed === 1 || task.completed === true;
  
  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      <div>
        <input
          type="checkbox"
          className="form-check-input me-2"
          checked={isCompleted}
          onChange={() => onToggle(task.id, !isCompleted)}
        />
        <span style={{ textDecoration: isCompleted ? 'line-through' : 'none' }}>
          <strong>{task.title}</strong>
          {task.description && ` - ${task.description}`}
        </span>
      </div>
      <button
        className="btn btn-danger btn-sm"
        onClick={() => onDelete(task.id)}
      >
        Eliminar
      </button>
    </li>
  );
};

export default TaskItem;