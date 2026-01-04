import React from 'react';
import { motion } from 'framer-motion';
import { Clock, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { NewsArticle } from '../services/api';
interface FeaturedNewsProps {
  news: NewsArticle[];
}
export function FeaturedNews({
  news
}: FeaturedNewsProps) {
  const featured = news.slice(0, 3);
  return <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
      {featured.map((article, index) => <motion.div key={article.id} initial={{
      opacity: 0,
      y: 20
    }} animate={{
      opacity: 1,
      y: 0
    }} transition={{
      delay: index * 0.1
    }} className="group relative h-[400px] rounded-xl overflow-hidden shadow-lg cursor-pointer">
          <Link to={`/article/${article.id}`}>
            {/* Image Background */}
            <div className="absolute inset-0">
              <img src={article.imageUrl} alt={article.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
            </div>

            {/* Content */}
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <div className="flex items-center space-x-2 mb-3">
                <span className="px-3 py-1 bg-orange-600 text-white text-xs font-bold rounded-full uppercase tracking-wider">
                  {article.category}
                </span>
                <span className="text-gray-300 text-xs flex items-center">
                  <Clock className="w-3 h-3 mr-1" />
                  {article.timestamp}
                </span>
              </div>

              <h3 className="text-xl font-bold text-white mb-2 leading-snug group-hover:text-orange-400 transition-colors">
                {article.title}
              </h3>

              <p className="text-gray-300 text-sm line-clamp-2 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">
                {article.excerpt}
              </p>

              <div className="flex items-center text-orange-500 text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Read Article <ArrowUpRight className="w-4 h-4 ml-1" />
              </div>
            </div>
          </Link>
        </motion.div>)}
    </div>;
}