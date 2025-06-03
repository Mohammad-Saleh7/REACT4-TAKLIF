import { useState } from "react";

export default function ToDoList() {
  const [taskText, setTaskText] = useState("");
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    if (taskText.trim() === "") return;
    const newTask = {
      id: Date.now(),
      text: taskText,
      completed: false,
    };
    setTasks([...tasks, newTask]);
    setTaskText("");
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const toggleComplete = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <>
      <style>{`
        .todo-container {
          max-width: 400px;
          margin: 40px auto;
          padding: 20px;
          border: 1px solid #ccc;
          border-radius: 8px;
          font-family: Arial, sans-serif;
        }
        input[type="text"] {
          width: 70%;
          padding: 8px;
          font-size: 16px;
          border: 1px solid #999;
          border-radius: 4px;
        }
        button {
          padding: 8px 12px;
          margin-left: 8px;
          font-size: 16px;
          border: none;
          background-color: #007bff;
          color: white;
          border-radius: 4px;
          cursor: pointer;
        }
        button:hover {
          background-color: #0056b3;
        }
        ul {
          list-style-type: none;
          padding-left: 0;
          margin-top: 20px;
        }
        li {
          display: flex;
          align-items: center;
          margin-bottom: 10px;
        }
        li span {
          flex-grow: 1;
          margin-left: 8px;
        }
        li button {
          background-color: #dc3545;
          margin-left: 10px;
        }
        li button:hover {
          background-color: #a71d2a;
        }
      `}</style>

      <div className="todo-container">
        <h2 className="d-flex justify-content-center">ToDo List</h2>

        <input
          type="text"
          placeholder="Add new task..."
          value={taskText}
          onChange={(e) => setTaskText(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") addTask();
          }}
        />
        <button onClick={addTask}>Add</button>

        <ul>
          {tasks.map((task) => (
            <li key={task.id}>
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => toggleComplete(task.id)}
              />
              <span
                style={{
                  textDecoration: task.completed ? "line-through" : "none",
                }}
              >
                {task.text}
              </span>
              <button onClick={() => deleteTask(task.id)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
