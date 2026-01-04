import React, { useState } from 'react';
import { Calculator, ArrowRight } from 'lucide-react';
interface CalculatorToolProps {
  title: string;
  description: string;
  type: 'pip' | 'position' | 'profit' | 'currency';
}
export function CalculatorTool({
  title,
  description,
  type
}: CalculatorToolProps) {
  const [isOpen, setIsOpen] = useState(false);
  return <div className="card-modern p-6 hover:border-orange-500/50 transition-colors group">
      <div className="flex items-start justify-between mb-4">
        <div className="p-3 bg-orange-100 dark:bg-orange-900/20 rounded-lg text-orange-600">
          <Calculator className="w-6 h-6" />
        </div>
        <button onClick={() => setIsOpen(!isOpen)} className="text-sm font-semibold text-orange-600 hover:text-orange-700 flex items-center">
          {isOpen ? 'Close' : 'Open Tool'}{' '}
          <ArrowRight className="w-4 h-4 ml-1" />
        </button>
      </div>

      <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 group-hover:text-orange-600 transition-colors">
        {title}
      </h3>
      <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
        {description}
      </p>

      {isOpen && <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700 animate-fade-in">
          {/* Mock Calculator UI based on type */}
          <div className="space-y-3">
            <div>
              <label className="block text-xs font-medium text-gray-500 mb-1">
                Input Value
              </label>
              <input type="number" className="w-full px-3 py-2 bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-md focus:ring-2 focus:ring-orange-500 outline-none" placeholder="0.00" />
            </div>
            <button className="w-full btn-primary py-2 text-sm">
              Calculate
            </button>
          </div>
        </div>}
    </div>;
}