import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, TrendingDown, DollarSign, BarChart2, Activity } from 'lucide-react';
import { useMarketData } from '../hooks/useMarketData';
import { PriceChart } from '../components/PriceChart';
import { NewsFeed } from '../components/NewsFeed';
interface MarketPageProps {
  language: 'ID' | 'EN';
}
export function MarketPage({
  language
}: MarketPageProps) {
  const {
    data
  } = useMarketData(3000);
  const categories = [{
    name: 'Forex',
    icon: DollarSign,
    color: 'text-green-500'
  }, {
    name: 'Indices',
    icon: BarChart2,
    color: 'text-blue-500'
  }, {
    name: 'Commodities',
    icon: Activity,
    color: 'text-orange-500'
  }, {
    name: 'Crypto',
    icon: TrendingUp,
    color: 'text-purple-500'
  }];
  return <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div initial={{
        opacity: 0,
        y: -20
      }} animate={{
        opacity: 1,
        y: 0
      }} className="mb-10">
          <h1 className="text-4xl font-black text-gray-900 dark:text-white mb-4">
            {language === 'ID' ? 'Pasar Finansial' : 'Financial Markets'}
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl">
            Real-time quotes, charts, and analysis for Forex, Commodities,
            Indices, and Cryptocurrencies.
          </p>
        </motion.div>

        {/* Category Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {categories.map((cat, index) => <motion.div key={cat.name} initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          delay: index * 0.1
        }} className="card-modern p-6 hover:border-orange-500 transition-colors cursor-pointer">
              <div className="flex items-center justify-between mb-4">
                <div className={`p-3 bg-gray-100 dark:bg-gray-800 rounded-lg ${cat.color}`}>
                  <cat.icon className="w-6 h-6" />
                </div>
                <span className="text-xs font-bold text-gray-500 uppercase">
                  Live
                </span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                {cat.name}
              </h3>
              <div className="text-sm text-gray-500">
                View all {cat.name} pairs
              </div>
            </motion.div>)}
        </div>

        {/* Live Market Table */}
        <div className="card-modern overflow-hidden mb-12">
          <div className="p-6 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white">
              Live Quotes
            </h2>
            <div className="flex space-x-2">
              {['All', 'Forex', 'Commodities', 'Indices'].map(filter => <button key={filter} className="px-3 py-1 text-sm rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-orange-500 hover:text-white transition-colors">
                  {filter}
                </button>)}
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 dark:bg-gray-800/50">
                <tr>
                  <th className="px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">
                    Symbol
                  </th>
                  <th className="px-6 py-4 text-right text-xs font-bold text-gray-500 uppercase tracking-wider">
                    Price
                  </th>
                  <th className="px-6 py-4 text-right text-xs font-bold text-gray-500 uppercase tracking-wider">
                    Change
                  </th>
                  <th className="px-6 py-4 text-right text-xs font-bold text-gray-500 uppercase tracking-wider">
                    % Change
                  </th>
                  <th className="px-6 py-4 text-right text-xs font-bold text-gray-500 uppercase tracking-wider">
                    High/Low
                  </th>
                  <th className="px-6 py-4 text-center text-xs font-bold text-gray-500 uppercase tracking-wider">
                    Trend
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                {data.map(item => <tr key={item.symbol} className="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="font-bold text-gray-900 dark:text-white">
                          {item.symbol}
                        </div>
                        <div className="ml-2 text-xs text-gray-500">
                          {item.name}
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right font-mono font-bold text-gray-900 dark:text-white">
                      {item.price.toFixed(item.price > 100 ? 2 : 4)}
                    </td>
                    <td className={`px-6 py-4 whitespace-nowrap text-right font-semibold ${item.change >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                      {item.change > 0 ? '+' : ''}
                      {item.change.toFixed(4)}
                    </td>
                    <td className={`px-6 py-4 whitespace-nowrap text-right font-semibold ${item.change >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                      {item.changePercent.toFixed(2)}%
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-xs text-gray-500">
                      <div>H: {item.high}</div>
                      <div>L: {item.low}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap w-32">
                      <PriceChart trend={item.change >= 0 ? 'up' : 'down'} />
                    </td>
                  </tr>)}
              </tbody>
            </table>
          </div>
        </div>

        {/* Market News */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 border-l-4 border-orange-600 pl-4">
            Market News
          </h2>
          <NewsFeed language={language} />
        </div>
      </div>
    </div>;
}