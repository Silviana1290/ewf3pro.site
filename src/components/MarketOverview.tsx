import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, TrendingDown, Activity } from 'lucide-react';
import { useMarketData } from '../hooks/useMarketData';
export function MarketOverview() {
  const {
    data
  } = useMarketData(5000);
  return <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-gray-900 dark:text-white flex items-center">
          <Activity className="w-5 h-5 mr-2 text-orange-600" />
          Market Overview
        </h2>
        <span className="flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-2 w-2 rounded-full bg-green-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
        </span>
      </div>

      <div className="space-y-4">
        {data.slice(0, 5).map(item => <div key={item.symbol} className="flex items-center justify-between p-3 hover:bg-gray-50 dark:hover:bg-gray-700/50 rounded-lg transition-colors cursor-pointer group">
            <div className="flex items-center space-x-3">
              <div className={`w-1 h-8 rounded-full ${item.change >= 0 ? 'bg-green-500' : 'bg-red-500'}`} />
              <div>
                <div className="font-bold text-gray-900 dark:text-white group-hover:text-orange-600 transition-colors">
                  {item.symbol}
                </div>
                <div className="text-xs text-gray-500 dark:text-gray-400">
                  {item.name}
                </div>
              </div>
            </div>

            <div className="text-right">
              <div className="font-mono font-bold text-gray-900 dark:text-white">
                {item.price.toFixed(item.price > 1000 ? 0 : item.price > 10 ? 2 : 4)}
              </div>
              <div className={`flex items-center justify-end text-xs font-semibold ${item.change >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                {item.change >= 0 ? <TrendingUp className="w-3 h-3 mr-1" /> : <TrendingDown className="w-3 h-3 mr-1" />}
                {item.changePercent > 0 ? '+' : ''}
                {item.changePercent.toFixed(2)}%
              </div>
            </div>
          </div>)}
      </div>

      <button className="w-full mt-4 py-2 text-sm font-semibold text-orange-600 hover:bg-orange-50 dark:hover:bg-orange-900/20 rounded-lg transition-colors">
        View All Markets
      </button>
    </div>;
}