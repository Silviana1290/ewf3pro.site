import React from 'react';
import { motion } from 'framer-motion';
export function LoadingSpinner() {
  return <div className="flex flex-col items-center justify-center py-20">
      <motion.div className="w-12 h-12 border-4 border-orange-200 border-t-orange-600 rounded-full" animate={{
      rotate: 360
    }} transition={{
      duration: 1,
      repeat: Infinity,
      ease: 'linear'
    }} />
      <p className="mt-4 text-gray-500 dark:text-gray-400 font-medium animate-pulse">
        Loading data...
      </p>
    </div>;
}