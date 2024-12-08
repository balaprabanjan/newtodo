import React from "react";

export default function TodoItem({ task, toggleTask, deleteTask }) {
    return (
        <li
            className={`task-item flex justify-between items-center p-4 mb-4 bg-black rounded-lg ${
                task.completed ? "line-through bg-green-500" : ""
            }`}
        >
            <input
                type="checkbox"
                checked={task.completed}
                onChange={() => toggleTask(task.id)}
                className="mr-2"
            />
            <div className="flex-1">
                <span className="font-medium text-orange-500">{task.text}</span>
                <p className="text-xs text-white">Added on: {task.dateTime}</p>
            </div>
            <button
                onClick={() => deleteTask(task.id)}
                className="text-red-500 text-lg ml-4"
            >
                &#10005;
            </button>
        </li>
    );
}
