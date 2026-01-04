import React from 'react';
import { Filter, X } from 'lucide-react';
export function FilterSidebar() {
  return <div className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 p-5 sticky top-24">
      <div className="flex items-center justify-between mb-4 pb-4 border-b border-gray-100 dark:border-gray-800">
        <h3 className="font-bold text-lg flex items-center">
          <Filter size={18} className="mr-2 text-orange-600" />
          Filters
        </h3>
        <button className="text-sm text-gray-500 hover:text-orange-600">
          Reset
        </button>
      </div>

      <div className="space-y-6">
        {/* Date Range */}
        <div>
          <h4 className="font-bold text-sm mb-3 text-gray-700 dark:text-gray-300">
            Date Range
          </h4>
          <div className="space-y-2">
            <label className="flex items-center space-x-2">
              <input type="radio" name="date" className="text-orange-600 focus:ring-orange-500" defaultChecked />
              <span className="text-sm text-gray-600 dark:text-gray-400">
                Any time
              </span>
            </label>
            <label className="flex items-center space-x-2">
              <input type="radio" name="date" className="text-orange-600 focus:ring-orange-500" />
              <span className="text-sm text-gray-600 dark:text-gray-400">
                Past 24 hours
              </span>
            </label>
            <label className="flex items-center space-x-2">
              <input type="radio" name="date" className="text-orange-600 focus:ring-orange-500" />
              <span className="text-sm text-gray-600 dark:text-gray-400">
                Past week
              </span>
            </label>
            <label className="flex items-center space-x-2">
              <input type="radio" name="date" className="text-orange-600 focus:ring-orange-500" />
              <span className="text-sm text-gray-600 dark:text-gray-400">
                Past month
              </span>
            </label>
          </div>
        </div>

        {/* Source */}
        <div>
          <h4 className="font-bold text-sm mb-3 text-gray-700 dark:text-gray-300">
            Source
          </h4>
          <div className="space-y-2">
            {['CNBC', 'Reuters', 'Investing.com', 'Trading Economics'].map(source => <label key={source} className="flex items-center space-x-2">
                  <input type="checkbox" className="rounded text-orange-600 focus:ring-orange-500" defaultChecked />
                  <span className="text-sm text-gray-600 dark:text-gray-400">
                    {source}
                  </span>
                </label>)}
          </div>
        </div>

        {/* Categories */}
        <div>
          <h4 className="font-bold text-sm mb-3 text-gray-700 dark:text-gray-300">
            Category
          </h4>
          <div className="space-y-2">
            {['Market', 'Economy', 'Global', 'Commodity'].map(cat => <label key={cat} className="flex items-center space-x-2">
                <input type="checkbox" className="rounded text-orange-600 focus:ring-orange-500" defaultChecked />
                <span className="text-sm text-gray-600 dark:text-gray-400">
                  {cat}
                </span>
              </label>)}
          </div>
        </div>
      </div>

      <button className="w-full mt-6 bg-orange-600 hover:bg-orange-700 text-white font-bold py-2 rounded-lg transition-colors">
        Apply Filters
      </button>
    </div>;
}