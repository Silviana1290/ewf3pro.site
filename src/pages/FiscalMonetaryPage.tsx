import React from 'react';
import { motion } from 'framer-motion';
import { Building2, TrendingUp, FileText, AlertTriangle } from 'lucide-react';
import { NewsFeed } from '../components/NewsFeed';
interface FiscalMonetaryPageProps {
  language: 'ID' | 'EN';
}
export function FiscalMonetaryPage({
  language
}: FiscalMonetaryPageProps) {
  const centralBanks = [{
    name: 'Federal Reserve',
    rate: '5.50%',
    nextMeeting: 'May 1, 2024',
    stance: 'Hawkish'
  }, {
    name: 'ECB',
    rate: '4.50%',
    nextMeeting: 'Apr 11, 2024',
    stance: 'Neutral'
  }, {
    name: 'Bank of England',
    rate: '5.25%',
    nextMeeting: 'May 9, 2024',
    stance: 'Hawkish'
  }, {
    name: 'Bank of Japan',
    rate: '0.10%',
    nextMeeting: 'Apr 26, 2024',
    stance: 'Dovish'
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
            {language === 'ID' ? 'Fiskal & Moneter' : 'Fiscal & Monetary'}
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl">
            Central bank policies, interest rate decisions, and fiscal news
            impacting global markets.
          </p>
        </motion.div>

        {/* Central Bank Tracker */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {centralBanks.map((bank, index) => <motion.div key={bank.name} initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          delay: index * 0.1
        }} className="card-modern p-6 border-t-4 border-orange-500">
              <div className="flex items-center justify-between mb-4">
                <Building2 className="w-8 h-8 text-gray-400" />
                <span className={`px-2 py-1 text-xs font-bold rounded ${bank.stance === 'Hawkish' ? 'bg-red-100 text-red-800' : bank.stance === 'Dovish' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'}`}>
                  {bank.stance}
                </span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">
                {bank.name}
              </h3>
              <div className="text-3xl font-black text-orange-600 mb-4">
                {bank.rate}
              </div>
              <div className="text-sm text-gray-500">
                Next Meeting:{' '}
                <span className="font-semibold text-gray-700 dark:text-gray-300">
                  {bank.nextMeeting}
                </span>
              </div>
            </motion.div>)}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 border-l-4 border-orange-600 pl-4">
              Policy News
            </h2>
            <NewsFeed language={language} />
          </div>

          <div className="lg:col-span-1 space-y-8">
            <div className="card-modern p-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                <TrendingUp className="w-5 h-5 mr-2 text-orange-600" />
                Rate Probabilities (Fed)
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">
                    May Meeting (Hold)
                  </span>
                  <span className="text-sm font-bold text-orange-600">
                    95.4%
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                  <div className="bg-orange-600 h-2.5 rounded-full" style={{
                  width: '95.4%'
                }}></div>
                </div>

                <div className="flex justify-between items-center mt-4">
                  <span className="text-sm font-medium">
                    June Meeting (Cut)
                  </span>
                  <span className="text-sm font-bold text-blue-600">60.2%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                  <div className="bg-blue-600 h-2.5 rounded-full" style={{
                  width: '60.2%'
                }}></div>
                </div>
              </div>
            </div>

            <div className="card-modern p-6 bg-orange-50 dark:bg-orange-900/10 border-orange-200 dark:border-orange-900/30">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                <AlertTriangle className="w-5 h-5 mr-2 text-orange-600" />
                Key Takeaways
              </h3>
              <ul className="space-y-3 text-sm text-gray-700 dark:text-gray-300">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  Inflation remains sticky in service sector
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  Labor market shows signs of cooling but remains tight
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  Geopolitical risks could impact energy prices
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>;
}