import React from 'react';
import { motion } from 'framer-motion';
import { User, BookOpen, BarChart } from 'lucide-react';
import { NewsFeed } from '../components/NewsFeed';
interface AnalysisPageProps {
  language: 'ID' | 'EN';
}
export function AnalysisPage({
  language
}: AnalysisPageProps) {
  const experts = [{
    name: 'John Doe',
    role: 'Senior Analyst',
    image: 'https://i.pravatar.cc/150?u=1'
  }, {
    name: 'Jane Smith',
    role: 'Forex Strategist',
    image: 'https://i.pravatar.cc/150?u=2'
  }, {
    name: 'Mike Johnson',
    role: 'Commodities Expert',
    image: 'https://i.pravatar.cc/150?u=3'
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
            {language === 'ID' ? 'Analisis Pasar' : 'Market Analysis'}
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl">
            Expert insights, technical analysis, and fundamental reports to
            guide your trading decisions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Featured Analysis */}
          <div className="lg:col-span-2">
            <div className="card-modern overflow-hidden mb-8">
              <div className="relative h-64">
                <img src="/image.png" alt="Featured Analysis" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <div className="absolute bottom-0 left-0 p-6">
                  <span className="px-3 py-1 bg-orange-600 text-white text-xs font-bold rounded-full mb-2 inline-block">
                    TECHNICAL
                  </span>
                  <h2 className="text-2xl font-bold text-white mb-2">
                    EUR/USD Technical Outlook: Testing Key Resistance Levels
                  </h2>
                  <div className="flex items-center text-gray-300 text-sm">
                    <User className="w-4 h-4 mr-2" />
                    <span>By John Doe</span>
                    <span className="mx-2">•</span>
                    <span>2 hours ago</span>
                  </div>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 border-l-4 border-orange-600 pl-4">
              Latest Analysis
            </h2>
            <NewsFeed language={language} />
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-8">
            <div className="card-modern p-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                Our Experts
              </h3>
              <div className="space-y-4">
                {experts.map(expert => <div key={expert.name} className="flex items-center space-x-4 p-2 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg transition-colors cursor-pointer">
                    <img src={expert.image} alt={expert.name} className="w-12 h-12 rounded-full" />
                    <div>
                      <div className="font-bold text-gray-900 dark:text-white">
                        {expert.name}
                      </div>
                      <div className="text-xs text-gray-500">{expert.role}</div>
                    </div>
                  </div>)}
              </div>
            </div>

            <div className="card-modern p-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                Categories
              </h3>
              <div className="space-y-2">
                {['Technical Analysis', 'Fundamental Analysis', 'Market Sentiment', 'Educational'].map(cat => <button key={cat} className="w-full text-left px-4 py-2 rounded-lg hover:bg-orange-50 dark:hover:bg-orange-900/20 text-gray-700 dark:text-gray-300 hover:text-orange-600 transition-colors flex justify-between items-center group">
                    <span>{cat}</span>
                    <BookOpen className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </button>)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>;
}