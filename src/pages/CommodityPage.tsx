import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, TrendingDown, Layers, Droplet, Zap } from 'lucide-react';
import { useMarketData } from '../hooks/useMarketData';
import { PriceChart } from '../components/PriceChart';
import { NewsFeed } from '../components/NewsFeed';
interface CommodityPageProps {
  language: 'ID' | 'EN';
}
export function CommodityPage({
  language
}: CommodityPageProps) {
  const {
    data
  } = useMarketData(5000);
  const commodities = data.filter(d => ['XAU/USD', 'WTI'].includes(d.symbol));
  const featuredCommodities = [{
    name: 'Gold',
    symbol: 'XAU/USD',
    icon: Layers,
    color: 'text-yellow-500',
    bg: 'bg-yellow-100 dark:bg-yellow-900/20'
  }, {
    name: 'Oil',
    symbol: 'WTI',
    icon: Droplet,
    color: 'text-black dark:text-gray-400',
    bg: 'bg-gray-100 dark:bg-gray-800'
  }, {
    name: 'Silver',
    symbol: 'XAG/USD',
    icon: Layers,
    color: 'text-gray-400',
    bg: 'bg-gray-100 dark:bg-gray-800'
  }, {
    name: 'Nat Gas',
    symbol: 'NG',
    icon: Zap,
    color: 'text-blue-500',
    bg: 'bg-blue-100 dark:bg-blue-900/20'
  }];
  return <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{
        opacity: 0,
        y: -20
      }} animate={{
        opacity: 1,
        y: 0
      }} className="mb-10">
          <h1 className="text-4xl font-black text-gray-900 dark:text-white mb-4">
            {language === 'ID' ? 'Komoditas' : 'Commodities'}
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl">
            Track prices of precious metals, energy, and agricultural
            commodities.
          </p>
        </motion.div>

        {/* Featured Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {featuredCommodities.map((item, index) => <motion.div key={item.name} initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          delay: index * 0.1
        }} className="card-modern p-6 hover:shadow-xl transition-all cursor-pointer group">
              <div className="flex items-center justify-between mb-4">
                <div className={`p-3 rounded-xl ${item.bg} ${item.color}`}>
                  <item.icon className="w-6 h-6" />
                </div>
                <span className={`flex items-center text-sm font-bold ${index % 2 === 0 ? 'text-green-500' : 'text-red-500'}`}>
                  {index % 2 === 0 ? <TrendingUp className="w-4 h-4 mr-1" /> : <TrendingDown className="w-4 h-4 mr-1" />}
                  {index % 2 === 0 ? '+1.2%' : '-0.5%'}
                </span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                {item.name}
              </h3>
              <div className="text-sm text-gray-500 mb-4">{item.symbol}</div>
              <PriceChart trend={index % 2 === 0 ? 'up' : 'down'} />
            </motion.div>)}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 border-l-4 border-orange-600 pl-4">
              Commodity News
            </h2>
            <NewsFeed language={language} />
          </div>

          <div className="lg:col-span-1 space-y-8">
            <div className="card-modern p-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                Supply & Demand
              </h3>
              <div className="space-y-4">
                <div className="relative pt-1">
                  <div className="flex mb-2 items-center justify-between">
                    <div>
                      <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-orange-600 bg-orange-200">
                        Gold Demand
                      </span>
                    </div>
                    <div className="text-right">
                      <span className="text-xs font-semibold inline-block text-orange-600">
                        85%
                      </span>
                    </div>
                  </div>
                  <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-orange-200">
                    <div style={{
                    width: '85%'
                  }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-orange-500"></div>
                  </div>
                </div>

                <div className="relative pt-1">
                  <div className="flex mb-2 items-center justify-between">
                    <div>
                      <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blue-600 bg-blue-200">
                        Oil Supply
                      </span>
                    </div>
                    <div className="text-right">
                      <span className="text-xs font-semibold inline-block text-blue-600">
                        60%
                      </span>
                    </div>
                  </div>
                  <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-blue-200">
                    <div style={{
                    width: '60%'
                  }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>;
}