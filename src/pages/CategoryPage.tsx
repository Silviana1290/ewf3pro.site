import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Header } from '../components/Header';
import { NewsCard } from '../components/NewsCard';
import { FilterSidebar } from '../components/FilterSidebar';
import { LoadingSpinner } from '../components/LoadingSpinner';
import { api, Article } from '../services/mockApi';
export function CategoryPage() {
  const {
    category
  } = useParams<{
    category: string;
  }>();
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const data = await api.getArticles(category?.toUpperCase());
      setArticles(data);
      setLoading(false);
    };
    fetchData();
  }, [category]);
  const displayTitle = category ? category.charAt(0).toUpperCase() + category.slice(1).replace('-', ' ') : 'News';
  return <div className="min-h-screen bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-gray-100">
      <Header />

      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold border-l-4 border-orange-600 pl-4 mb-2">
            {displayTitle} News
          </h1>
          <p className="text-gray-500 dark:text-gray-400 ml-5">
            Latest updates and analysis for {displayTitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <FilterSidebar />
          </div>

          {/* Content */}
          <div className="lg:col-span-3">
            {loading ? <LoadingSpinner /> : <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {articles.map(article => <NewsCard key={article.id} image={article.image} date={article.date} title={article.title} excerpt={article.excerpt} category={article.category} link={`/article/${article.id}`} />)}
              </div>}

            {!loading && articles.length > 0 && <div className="mt-12 flex justify-center">
                <button className="px-6 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg font-bold hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                  Load More Articles
                </button>
              </div>}
          </div>
        </div>
      </main>
    </div>;
}