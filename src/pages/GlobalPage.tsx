import React from 'react';
import { motion } from 'framer-motion';
import { WorldMap } from '../components/WorldMap';
import { NewsFeed } from '../components/NewsFeed';
interface GlobalPageProps {
  language: 'ID' | 'EN';
}
export function GlobalPage({
  language
}: GlobalPageProps) {
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
            {language === 'ID' ? 'Pasar Global' : 'Global Markets'}
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl">
            Interactive map of global market performance and international
            financial news.
          </p>
        </motion.div>

        {/* World Map Section */}
        <div className="mb-12">
          <WorldMap />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 border-l-4 border-orange-600 pl-4">
              International News
            </h2>
            <NewsFeed language={language} />
          </div>

          <div className="lg:col-span-1 space-y-8">
            <div className="card-modern p-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                Major Indices
              </h3>
              <div className="space-y-4">
                {[{
                name: 'S&P 500',
                value: '5,204.34',
                change: '+1.11%'
              }, {
                name: 'Dow Jones',
                value: '38,904.04',
                change: '+0.80%'
              }, {
                name: 'Nasdaq',
                value: '16,248.52',
                change: '+1.24%'
              }, {
                name: 'FTSE 100',
                value: '7,911.16',
                change: '-0.81%'
              }, {
                name: 'DAX',
                value: '18,175.04',
                change: '-0.13%'
              }, {
                name: 'Nikkei 225',
                value: '38,992.08',
                change: '-1.96%'
              }].map(index => <div key={index.name} className="flex justify-between items-center border-b border-gray-100 dark:border-gray-700 pb-2 last:border-0">
                    <span className="font-medium text-gray-700 dark:text-gray-300">
                      {index.name}
                    </span>
                    <div className="text-right">
                      <div className="font-bold text-gray-900 dark:text-white">
                        {index.value}
                      </div>
                      <div className={`text-xs font-bold ${index.change.startsWith('+') ? 'text-green-500' : 'text-red-500'}`}>
                        {index.change}
                      </div>
                    </div>
                  </div>)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>;
}