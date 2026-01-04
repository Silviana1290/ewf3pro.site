import React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import { motion } from 'framer-motion';
export function ThemeToggle() {
  const {
    theme,
    toggleTheme
  } = useTheme();
  return <button onClick={toggleTheme} className="relative p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors focus:outline-none focus:ring-2 focus:ring-orange-500" aria-label="Toggle theme">
      <motion.div initial={false} animate={{
      rotate: theme === 'dark' ? 180 : 0
    }} transition={{
      duration: 0.3
    }}>
        {theme === 'light' ? <Sun size={20} /> : <Moon size={20} />}
      </motion.div>
    </button>;
}