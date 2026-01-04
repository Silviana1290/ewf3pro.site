import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, TrendingDown } from 'lucide-react';
interface MarketItem {
  symbol: string;
  value: string;
  change: string;
  isUp: boolean;
}
const marketData: MarketItem[] = [{
  symbol: 'EUR/USD',
  value: '1.0845',
  change: '+0.12%',
  isUp: true
}, {
  symbol: 'GBP/USD',
  value: '1.2630',
  change: '-0.05%',
  isUp: false
}, {
  symbol: 'USD/JPY',
  value: '151.20',
  change: '+0.30%',
  isUp: true
}, {
  symbol: 'XAU/USD',
  value: '2,345.50',
  change: '+1.20%',
  isUp: true
}, {
  symbol: 'WTI Crude',
  value: '85.40',
  change: '-0.45%',
  isUp: false
}, {
  symbol: 'BTC/USD',
  value: '69,420.00',
  change: '+2.50%',
  isUp: true
}, {
  symbol: 'DJIA',
  value: '39,807.00',
  change: '+0.15%',
  isUp: true
}, {
  symbol: 'S&P 500',
  value: '5,254.00',
  change: '+0.10%',
  isUp: true
}, {
  symbol: 'NASDAQ',
  value: '16,428.00',
  change: '-0.10%',
  isUp: false
}, {
  symbol: 'USD/IDR',
  value: '15,890.00',
  change: '+0.05%',
  isUp: true
}];
export function MarketTicker() {
  return <div className="bg-black text-white overflow-hidden py-2 relative z-10 border-b border-orange-600">
      <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-black to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-black to-transparent z-10" />

      <div className="flex whitespace-nowrap">
        <motion.div className="flex space-x-8 px-4" animate={{
        x: [0, -1000]
      }} transition={{
        x: {
          repeat: Infinity,
          repeatType: 'loop',
          duration: 30,
          ease: 'linear'
        }
      }} whileHover={{
        animationPlayState: 'paused'
      }}>
          {[...marketData, ...marketData, ...marketData].map((item, index) => <div key={`${item.symbol}-${index}`} className="flex items-center space-x-2">
              <span className="font-bold text-gray-300">{item.symbol}</span>
              <span className="font-mono">{item.value}</span>
              <span className={`flex items-center text-xs ${item.isUp ? 'text-green-400' : 'text-red-400'}`}>
                {item.isUp ? <TrendingUp size={12} className="mr-1" /> : <TrendingDown size={12} className="mr-1" />}
                {item.change}
              </span>
            </div>)}
        </motion.div>
      </div>
    </div>;
}