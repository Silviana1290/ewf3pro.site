import React from 'react';
import { Link } from 'react-router-dom';
import { Article } from '../services/mockApi';
import { Calendar } from 'lucide-react';
interface RelatedArticlesProps {
  articles: Article[];
}
export function RelatedArticles({
  articles
}: RelatedArticlesProps) {
  return <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800">
      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
        <div className="w-1 h-6 bg-orange-600 mr-3"></div>
        Related News
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {articles.map(article => <Link key={article.id} to={`/article/${article.id}`} className="group block">
            <div className="relative h-48 rounded-lg overflow-hidden mb-3">
              <img src={article.image} alt={article.title} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" />
              <span className="absolute top-2 left-2 bg-orange-600 text-white text-xs font-bold px-2 py-1 rounded">
                {article.category}
              </span>
            </div>
            <div className="flex items-center text-gray-500 dark:text-gray-400 text-xs mb-2">
              <Calendar size={12} className="mr-1" />
              {article.date}
            </div>
            <h4 className="font-bold text-gray-900 dark:text-white leading-tight group-hover:text-orange-600 dark:group-hover:text-orange-500 transition-colors">
              {article.title}
            </h4>
          </Link>)}
      </div>
    </div>;
}