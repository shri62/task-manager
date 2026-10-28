
// Import useState
import { useState } from 'react';

// Import TaskList component
import TaskList from './components/TaskList/TaskList';

// Import task types
import type { Task, TaskStatus } from './types';

// Import CSS
import './App.css';

// Create sample tasks
const initialTasks: Task[] = [
  {
    id: '1',
    title: 'Task 1',
    description: 'Description 1',
    status: 'pending',
    priority: 'low',
    dueDate: '12/31/2026',
  },
  {
    id: '2',
    title: 'Task 2',
    description: 'Description 2',
    status: 'in-progress',
    priority: 'medium',
    dueDate: '01/01/2027',
  },
  {
    id: '3',
    title: 'Task 3',
    description: 'Description 3',
    status: 'completed',
    priority: 'high',
    dueDate: '01/02/2027',
  },
];

// Create the main app
function App() {
  // Store tasks
  const [tasks, setTasks] = useState<Task[]>(initialTasks);

  // Update task status
  const handleStatusChange = (taskId: string, newStatus: TaskStatus) => {
    setTasks((currentTasks) =>
      currentTasks.map((task) =>
        task.id === taskId ? { ...task, status: newStatus } : task
      )
    );
  };

  // Remove a task
  const handleDelete = (taskId: string) => {
    setTasks((currentTasks) =>
      currentTasks.filter((task) => task.id !== taskId)
    );
  };

  // Display the app
  return (
    <div className="app">
      <h1>Task Manager</h1>

      {/* Display all tasks */}
      <TaskList
        tasks={tasks}
        onStatusChange={handleStatusChange}
        onDelete={handleDelete}
      />
    </div>
  );
}

// Export the app
export default App;
