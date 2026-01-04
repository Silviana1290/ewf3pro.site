import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, TrendingDown } from 'lucide-react';
import { useMarketData } from '../hooks/useMarketData';
export function MarketTicker() {
  const {
    data: marketData
  } = useMarketData(10000);
  const duplicatedData = [...marketData, ...marketData];
  return <div className="bg-black text-white border-b border-gray-800 py-3 overflow-hidden">
      <div className="relative max-w-7xl mx-auto">
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-black to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-black to-transparent z-10" />

        <motion.div className="flex space-x-8" animate={{
        x: [0, -50 * marketData.length]
      }} transition={{
        x: {
          repeat: Infinity,
          repeatType: 'loop',
          duration: 40,
          ease: 'linear'
        }
      }}>
          {duplicatedData.map((item, index) => <div key={`${item.symbol}-${index}`} className="flex items-center space-x-3 flex-shrink-0">
              <div className="flex flex-col">
                <span className="text-xs font-bold text-gray-400">
                  {item.symbol}
                </span>
                <span className="text-sm font-bold">
                  {item.price.toFixed(2)}
                </span>
              </div>
              <div className={`flex items-center space-x-1 ${item.change >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                {item.change >= 0 ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
                <span className="text-xs font-bold">
                  {item.changePercent >= 0 ? '+' : ''}
                  {item.changePercent.toFixed(2)}%
                </span>
              </div>
            </div>)}
        </motion.div>
      </div>
    </div>;
}