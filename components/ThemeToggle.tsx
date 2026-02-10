
import React, { useEffect, useState } from 'react';

export const ThemeToggle: React.FC = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    // Explicitly check for 'dark' in localStorage.
    // If not found, default to 'light' (ignoring system preference to ensure Light default).
    const savedTheme = localStorage.getItem('theme');
    
    if (savedTheme === 'dark') {
      setTheme('dark');
      document.documentElement.classList.add('dark');
    } else {
      setTheme('light');
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleTheme = () => {
    if (theme === 'light') {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      setTheme('dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      setTheme('light');
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className="text-[10px] font-bold uppercase tracking-[0.2em] text-burgundy-900 dark:text-sandal-100 hover:opacity-60 transition-opacity px-2 py-1"
      aria-label="Toggle Theme"
    >
      {theme === 'light' ? 'Dark' : 'Light'}
    </button>
  );
};
