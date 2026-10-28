
import { useState } from 'react';
import type { TaskFilterProps, TaskStatus } from '../../types';

// Display filters for task status and priority.
function TaskFilter({ onFilterChange }: TaskFilterProps) {
  const [status, setStatus] = useState<TaskStatus | undefined>();
  const [priority, setPriority] = useState<
    'low' | 'medium' | 'high' | undefined
  >();

  return (
    <div>
      {/* Filter tasks by status */}
      <label htmlFor="status">Status: </label>
      <select
        id="status"
        value={status ?? 'all'}
        onChange={(event) => {
          const newStatus =
            event.target.value === 'all'
              ? undefined
              : (event.target.value as TaskStatus);

          setStatus(newStatus);
          onFilterChange({ status: newStatus, priority });
        }}
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
        value={priority ?? 'all'}
        onChange={(event) => {
          const newPriority =
            event.target.value === 'all'
              ? undefined
              : (event.target.value as 'low' | 'medium' | 'high');

          setPriority(newPriority);
          onFilterChange({ status, priority: newPriority });
        }}
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
