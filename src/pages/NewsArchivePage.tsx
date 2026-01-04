import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Filter, Calendar } from 'lucide-react';
import { NewsFeed } from '../components/NewsFeed';
interface NewsArchivePageProps {
  language: 'ID' | 'EN';
}
export function NewsArchivePage({
  language
}: NewsArchivePageProps) {
  const [searchQuery, setSearchQuery] = useState('');
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
            {language === 'ID' ? 'Arsip Berita' : 'News Archive'}
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl">
            Browse our complete history of market news and analysis.
          </p>
        </motion.div>

        {/* Search and Filter Bar */}
        <div className="card-modern p-6 mb-12">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
            <div className="md:col-span-6 relative">
              <input type="text" placeholder="Search news..." className="w-full pl-10 pr-4 py-3 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-orange-500 outline-none transition-all" value={searchQuery} onChange={e => setSearchQuery(e.target.value)} />
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
            </div>

            <div className="md:col-span-3">
              <div className="relative">
                <select className="w-full pl-10 pr-4 py-3 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-orange-500 outline-none appearance-none cursor-pointer">
                  <option>All Categories</option>
                  <option>Market</option>
                  <option>Economy</option>
                  <option>Commodities</option>
                </select>
                <Filter className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
              </div>
            </div>

            <div className="md:col-span-3">
              <div className="relative">
                <input type="date" className="w-full pl-10 pr-4 py-3 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-orange-500 outline-none" />
                <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
              </div>
            </div>
          </div>
        </div>

        <NewsFeed language={language} />
      </div>
    </div>;
}