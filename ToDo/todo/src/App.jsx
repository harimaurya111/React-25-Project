import { useState } from 'react';

function App() {
  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState('');

  const addTodo = () => {
    if (task.trim()) {
      setTodos([...todos, { id: Date.now(), text: task, completed: false }]);
      setTask('');
    }
  };

  const toggleComplete = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white p-6 rounded shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4 text-center">Todo App</h1>

        <div className="flex mb-4">
          <input
            type="text"
            className="flex-grow p-2 border rounded-l"
            placeholder="Enter a task..."
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
          <button
            className="bg-blue-500 text-white px-4 rounded-r"
            onClick={addTodo}
          >
            Add
          </button>
        </div>

        <ul>
          {todos.map(todo => (
            <li
              key={todo.id}
              className="flex justify-between items-center mb-2 p-2 bg-gray-200 rounded"
            >
              <span
                onClick={() => toggleComplete(todo.id)}
                className={`flex-1 cursor-pointer ${todo.completed ? 'line-through text-gray-500' : ''}`}
              >
                {todo.text}
              </span>
              <button
                className="ml-4 text-red-600"
                onClick={() => deleteTodo(todo.id)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
