import React, { useEffect, useState } from 'react';

const App = () => {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
    document.documentElement.classList.toggle('dark', savedTheme === 'dark');
    console.log(document.documentElement.classList)
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
  };

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-white dark:bg-gray-900 text-black dark:text-white transition-all">
      <h1 className="text-3xl font-bold mb-4">
        {theme === 'light' ? 'Light Mode' : 'Dark Mode'}
      </h1>
      <button
        onClick={toggleTheme}
        className="px-6 py-2 rounded bg-black text-white dark:bg-white dark:text-black transition cursor-pointer"
      >
        Toggle Theme
      </button>
    </div>
  );
};

export default App;
