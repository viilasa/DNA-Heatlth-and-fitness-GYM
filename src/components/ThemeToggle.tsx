import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full transition-colors duration-300 hover:bg-opacity-20 hover:bg-current focus:outline-none focus:ring-2 focus:ring-[var(--text-primary)] focus:ring-opacity-50"
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
    >
      {theme === 'dark' ? (
        <Sun className="w-5 h-5 text-[#C5A572]" />
      ) : (
        <Moon className="w-5 h-5 text-[#8B7355]" />
      )}
    </button>
  );
}