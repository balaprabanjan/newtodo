import React from "react";

export default function TodoInput({ taskInput, setTaskInput, addTask }) {
  return (
    <div className="flex justify-between gap-2 mb-4">
      <input
        type="text"
        id="taskInput"
        placeholder="Enter a new task..."
        value={taskInput}
        onChange={(e) => setTaskInput(e.target.value)}
        className="block flex-1 px-4 py-2 border border-gray-300 rounded-lg"
      />
      <button
        onClick={addTask}
        className="text-white px-4 py-2 rounded-lg hover:bg-orange-600 "
      >
        Add Task
      </button>
    </div>
  );
}
