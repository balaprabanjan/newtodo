'use client'
import { useState } from "react";
import TodoInput from "@/component/TodoInput";
import TodoList from "@/component/TodoList";
export default function Home() {
    const [tasks, setTasks] = useState([]);
    const [taskInput, setTaskInput] = useState("");

    const addTask = () => {
        if (taskInput.trim()) {
            const newTask = {
                id: Date.now(),
                text: taskInput,
                dateTime: new Date().toLocaleString(),
                completed: false,
            };
            setTasks([...tasks, newTask]);
            setTaskInput(""); // Clear input field
        }
    };

    const toggleTask = (id) => {
        setTasks(
            tasks.map((task) =>
                task.id === id ? { ...task, completed: !task.completed } : task
            )
        );
    };

    const deleteTask = (id) => {
        setTasks(tasks.filter((task) => task.id !== id));
    };

    return (
        <div className="bg-gradient-to-tl from-zinc-500 via-white to-zinc-500 min-h-screen flex items-center justify-center">
            <div className="container mx-auto my-80 w-4/12 rounded-2xl px-7 bg-black flex flex-col">
                <h1 className="text-2xl font-bold text-center mb-4 text-orange-500">To-Do List</h1>
                <TodoInput
                    taskInput={taskInput}
                    setTaskInput={setTaskInput}
                    addTask={addTask}
                />
                <TodoList
                    tasks={tasks}
                    toggleTask={toggleTask}
                    deleteTask={deleteTask}
                />
            </div>
        </div>
    );
}
