import React from 'react';
import { motion } from 'framer-motion';
import { Clock, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useNews } from '../hooks/useNews';
interface PopularNewsProps {
  language: 'ID' | 'EN';
}
export function PopularNews({
  language
}: PopularNewsProps) {
  const {
    news,
    loading
  } = useNews(undefined, 5);
  if (loading) {
    return <div className="animate-pulse space-y-4">
        {[1, 2, 3, 4, 5].map(i => <div key={i} className="h-24 bg-gray-200 dark:bg-gray-700 rounded-lg" />)}
      </div>;
  }
  return <div className="bg-white dark:bg-dark-surface rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden">
      <div className="bg-black text-white px-6 py-4 border-l-4 border-orange-600">
        <h2 className="text-xl font-bold uppercase tracking-wider">
          {language === 'ID' ? 'Berita Populer' : 'Popular News'}
        </h2>
      </div>
      <div className="divide-y divide-gray-100 dark:divide-gray-700">
        {news.map((article, index) => <motion.div key={article.id} initial={{
        opacity: 0,
        x: -20
      }} animate={{
        opacity: 1,
        x: 0
      }} transition={{
        delay: index * 0.1
      }} className="p-4 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors group">
            <Link to={`/article/${article.id}`} className="block">
              <div className="text-xs text-gray-500 dark:text-gray-400 mb-1 flex items-center">
                <Clock className="w-3 h-3 mr-1" />
                {article.timestamp}
              </div>
              <h3 className="text-base font-bold text-gray-900 dark:text-gray-100 group-hover:text-orange-600 dark:group-hover:text-orange-500 transition-colors line-clamp-2">
                {article.title}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-1 line-clamp-2">
                {article.excerpt}
              </p>
            </Link>
          </motion.div>)}
      </div>
      <div className="p-4 bg-gray-50 dark:bg-gray-800 border-t border-gray-100 dark:border-gray-700 text-center">
        <Link to="/news" className="inline-flex items-center text-sm font-semibold text-orange-600 hover:text-orange-700 transition-colors">
          {language === 'ID' ? 'Lihat Semua Berita' : 'View All News'}
          <ChevronRight className="w-4 h-4 ml-1" />
        </Link>
      </div>
    </div>;
}