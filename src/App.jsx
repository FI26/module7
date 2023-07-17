import React, { useState } from "react";

function TodoList() {
  const [taskInput, setTaskInput] = useState("");
  const [tasks, setTasks] = useState([]);

  const handleTaskInputChange = (event) => {
    setTaskInput(event.target.value);
  };

  const handleAddTask = () => {
    if (taskInput.trim() !== "") {
      const newTask = {
        id: Date.now(),
        description: taskInput,
        completed: false,
      };

      setTasks((prevTasks) => [...prevTasks, newTask]);
      setTaskInput("");
    }
  };

  const handleDeleteTask = (taskId) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  };

  return (
    <div>
      <input
        type="text"
        value={taskInput}
        onChange={handleTaskInputChange}
        placeholder="Enter a new task"
      />
      <button onClick={handleAddTask}>Add Task</button>

      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            {task.description}
            <button onClick={() => handleDeleteTask(task.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
