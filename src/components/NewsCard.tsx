import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, ArrowRight } from 'lucide-react';
interface NewsCardProps {
  image: string;
  date: string;
  title: string;
  excerpt: string;
  category?: string;
}
export function NewsCard({
  image,
  date,
  title,
  excerpt,
  category
}: NewsCardProps) {
  return <motion.article className="group bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 dark:border-gray-700 flex flex-col h-full" whileHover={{
    y: -4
  }}>
      <div className="relative h-48 overflow-hidden">
        <img src={image} alt={title} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" />
        {category && <span className="absolute top-3 left-3 bg-orange-600 text-white text-xs font-bold px-2 py-1 rounded">
            {category}
          </span>}
      </div>

      <div className="p-5 flex flex-col flex-grow">
        <div className="flex items-center text-gray-500 dark:text-gray-400 text-xs mb-3">
          <Calendar size={14} className="mr-1.5" />
          {date}
        </div>

        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3 leading-tight group-hover:text-orange-600 dark:group-hover:text-orange-500 transition-colors">
          {title}
        </h3>

        <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-3 flex-grow">
          {excerpt}
        </p>

        <div className="mt-auto pt-4 border-t border-gray-100 dark:border-gray-700">
          <button className="text-orange-600 dark:text-orange-500 text-sm font-semibold flex items-center group-hover:translate-x-1 transition-transform">
            Read More <ArrowRight size={14} className="ml-1" />
          </button>
        </div>
      </div>
    </motion.article>;
}