
import { useState } from 'react';
import type { TaskListProps, TaskStatus } from '../../types';
import TaskItem from '../TaskItem/TaskItem';
import TaskFilter from '../TaskFilter/TaskFilter';

// Display and filter the task list
function TaskList({ tasks, onStatusChange, onDelete }: TaskListProps) {
  // Store the selected filters
  const [statusFilter, setStatusFilter] = useState<TaskStatus | undefined>();
  const [priorityFilter, setPriorityFilter] = useState<
    'low' | 'medium' | 'high' | undefined
  >();

  // Show only matching tasks
  const filteredTasks = tasks.filter((task) => {
    const matchesStatus =
      !statusFilter || task.status === statusFilter;

    const matchesPriority =
      !priorityFilter || task.priority === priorityFilter;

    return matchesStatus && matchesPriority;
  });

  return (
    <div>
      {/* Show the filters */}
      <TaskFilter
        onFilterChange={(filters) => {
          setStatusFilter(filters.status);
          setPriorityFilter(filters.priority);
        }}
      />

      {/* Display matching tasks */}
      {filteredTasks.length === 0 ? (
        <p>No tasks found.</p>
      ) : (
        filteredTasks.map((task) => (
          // Use a unique task ID as the key
          <TaskItem
            key={task.id}
            task={task}
            onStatusChange={onStatusChange}
            onDelete={onDelete}
          />
        ))
      )}
    </div>
  );
}

export default TaskList;
