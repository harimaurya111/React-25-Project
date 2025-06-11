import React, { useState } from "react";

const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setnewTask] = useState("");

  function addNewTask() {
    if (newTask.trim()) {
      // Append the new task to the tasks array
      setTasks((prevTasks) => [...prevTasks, { id: Date.now(), text: newTask }]);
      setnewTask(""); // Clear the input field
    }
  }

  return (
    <>
      <div>
        <input
          type="text"
          placeholder="Enter your Task"
          onChange={(e) => {
            setnewTask(e.target.value);
          }}
          value={newTask}
        />
        <button onClick={addNewTask}>Add</button>

        <ul>
          {tasks.map((task) => (
            <li key={task.id}>{task.text}</li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default TaskList;
