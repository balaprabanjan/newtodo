import { useState, useEffect } from 'react';

const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [dueTime, setDueTime] = useState('');

  const addTask = () => {
    if (!title || !description || !dueDate || !dueTime) return;

    const dueDateTime = new Date(`${dueDate}T${dueTime}:00`);
    setTasks([...tasks, { id: Date.now(), title, description, dueDateTime }]);
    setTitle('');
    setDescription('');
    setDueDate('');
    setDueTime('');
  };

  const removeTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const updateTask = (id, updatedTask) => {
    setTasks(tasks.map(task => (task.id === id ? updatedTask : task)));
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold">To-Do List</h1>
      <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
      <input type="text" placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} />
      <input type="date" value={dueDate} onChange={(e) => setDueDate(e.target.value)} />
      <input type="time" value={dueTime} onChange={(e) => setDueTime(e.target.value)} />
      <button onClick={addTask}>Add Task</button>

      <ul>
        {tasks.map(task => (
          <li key={task.id}>
            <h2>{task.title}</h2>
            <p>{task.description}</p>
            <p>Due: {task.dueDateTime.toLocaleString()}</p>
            <button onClick={() => removeTask(task.id)}>Delete</button>
            <button onClick={() => updateTask(task.id, { ...task, title: 'Updated Title' })}>Update</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;