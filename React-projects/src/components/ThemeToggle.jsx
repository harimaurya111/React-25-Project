import React, { useEffect, useState } from 'react';

const ThemeToggle = () => {
  const [theme, setTheme] = useState('light');

  // Load from localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
    applyTheme(savedTheme);
  }, []);

  // Apply theme class to <html>
  const applyTheme = (themeMode) => {
    if (themeMode === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  const handleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    applyTheme(newTheme);
  };

  return (
    <div className="flex justify-center items-center w-full h-screen bg-white dark:bg-gray-900 text-black dark:text-white transition-all">
      <div>
        <p className="text-xl font-bold">
          {theme === 'light' ? 'Light Mode' : 'Dark Mode'}
        </p>
        <button
          onClick={handleTheme}
          className="border rounded p-2 cursor-pointer my-3"
        >
          Toggle Theme
        </button>
      </div>
    </div>
  );
};

export default ThemeToggle;
