import React from 'react';
import { useFontSize } from '../contexts/FontSizeContext';
export function FontSizeControl() {
  const {
    fontSize,
    setFontSize
  } = useFontSize();
  const buttons = [{
    size: 'small',
    label: 'A-',
    title: 'Small Text'
  }, {
    size: 'medium',
    label: 'A',
    title: 'Medium Text'
  }, {
    size: 'large',
    label: 'A+',
    title: 'Large Text'
  }] as const;
  return <div className="flex items-center space-x-1 bg-gray-100 dark:bg-gray-800 rounded-lg p-1">
      {buttons.map(btn => <button key={btn.size} onClick={() => setFontSize(btn.size)} title={btn.title} className={`
            px-2 py-1 rounded text-sm font-bold transition-all
            ${fontSize === btn.size ? 'bg-orange-500 text-white shadow-sm' : 'text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700'}
          `}>
          {btn.label}
        </button>)}
    </div>;
}