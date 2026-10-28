
import type { TaskItemProps, TaskStatus } from '../../types';

// Display one task
function TaskItem({ task, onStatusChange, onDelete }: TaskItemProps) {
  return (
    <div className={`task-item ${task.status} priority-${task.priority}`}>
      {/* Show task title */}
      <h3>{task.title}</h3>

      {/* Show task description */}
      <p>{task.description}</p>
      {task.status === 'completed' && <p>Task completed!</p>}

{task.status === 'pending' && <p>Task not started yet.</p>}

{task.status === 'in-progress' && <p>Task is in progress.</p>}

      {/* Change task status */}
      <select
        value={task.status}
        onChange={(event) =>
          onStatusChange(task.id, event.target.value as TaskStatus)
        }
      >
        <option value="pending">Pending</option>
        <option value="in-progress">In Progress</option>
        <option value="completed">Completed</option>
      </select>

      {/* Show priority and due date */}
      <p>Priority: {task.priority}</p>
      <p>Due: {task.dueDate}</p>

      {/* Delete task */}
      <button onClick={() => onDelete(task.id)}>Delete</button>
    </div>
  );
}

export default TaskItem;
