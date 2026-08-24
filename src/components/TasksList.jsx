import TaskItem from './TasksItem';

const TaskList = ({ tasks = [], onToggle, onDelete }) => {
  // ✅ Asegurar que tasks sea un array
  const taskArray = Array.isArray(tasks) ? tasks : [];
  
  if (taskArray.length === 0) {
    return <p className="text-muted">No hay tareas pendientes.</p>;
  }

  return (
    <ul className="list-group">
      {taskArray.map((task) => {
        console.log('🔍 TaskList mapeando:', task);
        console.log('🔍 TaskList task.id:', task.id);
        return (
          <TaskItem
            key={task.id}
            task={task}
            onToggle={onToggle}
            onDelete={onDelete}
          />
        )
      })}
    </ul>
  );
};

export default TaskList;