
// Import the filter types
import type { TaskFilterProps, TaskStatus } from '../../types';

// Create the filter component
function TaskFilter({ onFilterChange }: TaskFilterProps) {
  return (
    <div>
      {/* Filter tasks by status */}
      <label htmlFor="status">Status: </label>
      <select
        id="status"
        defaultValue="all"
        onChange={(event) =>
          onFilterChange({
            status:
              event.target.value === 'all'
                ? undefined
                : (event.target.value as TaskStatus),
          })
        }
      >
        <option value="all">All Statuses</option>
        <option value="pending">Pending</option>
        <option value="in-progress">In Progress</option>
        <option value="completed">Completed</option>
      </select>

      {/* Filter tasks by priority */}
      <label htmlFor="priority"> Priority: </label>
      <select
        id="priority"
        defaultValue="all"
        onChange={(event) =>
          onFilterChange({
            priority:
              event.target.value === 'all'
                ? undefined
                : (event.target.value as 'low' | 'medium' | 'high'),
          })
        }
      >
        <option value="all">All Priorities</option>
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
      </select>
    </div>
  );
}

export default TaskFilter;
