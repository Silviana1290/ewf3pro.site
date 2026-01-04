import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Header } from '../components/Header';
import { MarketTicker } from '../components/MarketTicker';
import { LoadingSpinner } from '../components/LoadingSpinner';
import { api, MarketData } from '../services/mockApi';
import { TrendingUp, TrendingDown, Activity, DollarSign } from 'lucide-react';
export function MarketPage() {
  const [marketData, setMarketData] = useState<MarketData[]>([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      const data = await api.getMarketData();
      setMarketData(data);
      setLoading(false);
    };
    fetchData();
  }, []);
  if (loading) return <div className="min-h-screen">
        <Header />
        <LoadingSpinner />
      </div>;
  return <div className="min-h-screen bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-gray-100">
      <Header />
      <MarketTicker />

      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold border-l-4 border-orange-600 pl-4">
            Market Overview
          </h1>
          <div className="text-sm text-gray-500">
            Last updated: {new Date().toLocaleTimeString()}
          </div>
        </div>

        {/* Market Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          {marketData.slice(0, 4).map(item => <motion.div key={item.symbol} initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-800">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="font-bold text-gray-500 dark:text-gray-400 text-sm">
                    {item.name}
                  </h3>
                  <p className="text-xl font-bold mt-1">{item.symbol}</p>
                </div>
                <div className={`p-2 rounded-full ${item.isUp ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'}`}>
                  {item.isUp ? <TrendingUp size={20} /> : <TrendingDown size={20} />}
                </div>
              </div>
              <div className="flex items-baseline space-x-2">
                <span className="text-2xl font-bold">{item.value}</span>
                <span className={`text-sm font-bold ${item.isUp ? 'text-green-600' : 'text-red-600'}`}>
                  {item.change} ({item.changePercent})
                </span>
              </div>
            </motion.div>)}
        </div>

        {/* Detailed Market Table */}
        <div className="bg-white dark:bg-gray-900 rounded-xl shadow-sm border border-gray-200 dark:border-gray-800 overflow-hidden mb-8">
          <div className="p-6 border-b border-gray-200 dark:border-gray-800 flex justify-between items-center">
            <h2 className="text-xl font-bold flex items-center">
              <Activity className="mr-2 text-orange-600" />
              Live Market Data
            </h2>
            <div className="flex space-x-2">
              <button className="px-3 py-1 text-sm bg-orange-100 text-orange-700 rounded-full font-bold">
                Forex
              </button>
              <button className="px-3 py-1 text-sm hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full">
                Indices
              </button>
              <button className="px-3 py-1 text-sm hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full">
                Commodities
              </button>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead className="bg-gray-50 dark:bg-gray-800 text-gray-500 dark:text-gray-400 text-xs uppercase">
                <tr>
                  <th className="p-4">Symbol</th>
                  <th className="p-4">Name</th>
                  <th className="p-4">Price</th>
                  <th className="p-4">Change</th>
                  <th className="p-4">% Change</th>
                  <th className="p-4 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-gray-800">
                {marketData.map(item => <tr key={item.symbol} className="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                    <td className="p-4 font-bold">{item.symbol}</td>
                    <td className="p-4 text-gray-500 dark:text-gray-400">
                      {item.name}
                    </td>
                    <td className="p-4 font-mono font-bold">{item.value}</td>
                    <td className={`p-4 font-bold ${item.isUp ? 'text-green-600' : 'text-red-600'}`}>
                      {item.change}
                    </td>
                    <td className={`p-4 font-bold ${item.isUp ? 'text-green-600' : 'text-red-600'}`}>
                      {item.changePercent}
                    </td>
                    <td className="p-4 text-right">
                      <button className="text-orange-600 hover:text-orange-700 font-bold text-sm">
                        Trade
                      </button>
                    </td>
                  </tr>)}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>;
}