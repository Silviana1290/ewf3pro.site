import React from 'react';
import { motion } from 'framer-motion';
import { Clock, ExternalLink } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
interface NewsCardProps {
  id: string;
  title: string;
  excerpt: string;
  source: string;
  timestamp: string;
  imageUrl: string;
  category: string;
  onClick?: () => void;
}
export function NewsCard({
  id,
  title,
  excerpt,
  source,
  timestamp,
  imageUrl,
  category,
  onClick
}: NewsCardProps) {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/article/${id}`);
  };
  return <motion.div whileHover={{
    y: -4
  }} transition={{
    duration: 0.2
  }} onClick={handleClick} className="bg-white dark:bg-dark-surface rounded-lg shadow-md overflow-hidden cursor-pointer group border border-gray-100 dark:border-gray-700 transition-colors duration-300">
      <div className="relative h-48 overflow-hidden">
        <motion.img whileHover={{
        scale: 1.05
      }} transition={{
        duration: 0.3
      }} src={imageUrl} alt={title} className="w-full h-full object-cover" />
        <div className="absolute top-3 left-3">
          <span className="px-3 py-1 bg-orange-600 text-white text-xs font-bold rounded-full shadow-lg">
            {source}
          </span>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      <div className="p-5">
        <div className="mb-3 flex items-center justify-between">
          <span className="text-xs font-bold text-orange-600 dark:text-orange-500 uppercase tracking-wider">
            {category}
          </span>
          <div className="flex items-center space-x-1 text-xs text-gray-500 dark:text-gray-400">
            <Clock className="w-3 h-3" />
            <span>{timestamp}</span>
          </div>
        </div>
        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3 line-clamp-2 group-hover:text-orange-600 dark:group-hover:text-orange-500 transition-colors">
          {title}
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 line-clamp-2 leading-relaxed">
          {excerpt}
        </p>
        <div className="flex items-center justify-end">
          <ExternalLink className="w-4 h-4 text-orange-600 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
        </div>
      </div>
    </motion.div>;
}