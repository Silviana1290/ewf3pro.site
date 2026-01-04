import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, User, Clock, Tag, ExternalLink } from 'lucide-react';
import { Header } from '../components/Header';
import { Breadcrumb } from '../components/Breadcrumb';
import { ShareButtons } from '../components/ShareButtons';
import { RelatedArticles } from '../components/RelatedArticles';
import { LoadingSpinner } from '../components/LoadingSpinner';
import { api, Article } from '../services/mockApi';
export function ArticleDetailPage() {
  const {
    id
  } = useParams<{
    id: string;
  }>();
  const [article, setArticle] = useState<Article | null>(null);
  const [related, setRelated] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      window.scrollTo(0, 0);
      if (id) {
        const data = await api.getArticleById(id);
        if (data) {
          setArticle(data);
          const relatedData = await api.getRelatedArticles(id);
          setRelated(relatedData);
        }
      }
      setLoading(false);
    };
    fetchData();
  }, [id]);
  if (loading) {
    return <div className="min-h-screen bg-white dark:bg-gray-950">
        <Header />
        <LoadingSpinner />
      </div>;
  }
  if (!article) {
    return <div className="min-h-screen bg-white dark:bg-gray-950">
        <Header />
        <div className="max-w-7xl mx-auto px-4 py-20 text-center">
          <h1 className="text-2xl font-bold mb-4">Article Not Found</h1>
          <Link to="/" className="text-orange-600 hover:underline">
            Return Home
          </Link>
        </div>
      </div>;
  }
  return <div className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 font-sans">
      <Header />

      <main className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb items={[{
        label: article.category,
        path: `/category/${article.category.toLowerCase()}`
      }, {
        label: article.title
      }]} />

        <motion.article initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.5
      }}>
          {/* Header */}
          <header className="mb-8">
            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 dark:text-gray-400 mb-4">
              <span className="bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-400 px-3 py-1 rounded-full font-bold text-xs uppercase">
                {article.category}
              </span>
              <div className="flex items-center">
                <Calendar size={14} className="mr-1" />
                {article.date}
              </div>
              <div className="flex items-center">
                <User size={14} className="mr-1" />
                {article.author}
              </div>
              <div className="flex items-center">
                <Clock size={14} className="mr-1" />
                {article.readTime} min read
              </div>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6 text-gray-900 dark:text-white">
              {article.title}
            </h1>

            <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed border-l-4 border-orange-500 pl-4 italic">
              {article.excerpt}
            </p>
          </header>

          {/* Featured Image */}
          <div className="relative aspect-video w-full rounded-2xl overflow-hidden mb-10 shadow-lg">
            <img src={article.image} alt={article.title} className="w-full h-full object-cover" />
          </div>

          {/* Content */}
          <div className="prose prose-lg dark:prose-invert max-w-none mb-10 prose-headings:font-bold prose-a:text-orange-600 hover:prose-a:text-orange-700" dangerouslySetInnerHTML={{
          __html: article.content
        }} />

          {/* Source Link */}
          <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-xl border border-gray-200 dark:border-gray-800 mb-10 flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">
                Source
              </p>
              <p className="font-bold text-lg">{article.source}</p>
            </div>
            <a href={article.sourceUrl} target="_blank" rel="noopener noreferrer" className="flex items-center px-6 py-3 bg-orange-600 hover:bg-orange-700 text-white font-bold rounded-lg transition-colors">
              Read Original <ExternalLink size={16} className="ml-2" />
            </a>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-10">
            {article.tags.map(tag => <span key={tag} className="flex items-center px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 rounded-full text-sm hover:bg-gray-200 dark:hover:bg-gray-700 cursor-pointer transition-colors">
                <Tag size={12} className="mr-1" />
                {tag}
              </span>)}
          </div>

          {/* Share */}
          <div className="border-t border-b border-gray-200 dark:border-gray-800 py-6 mb-12">
            <ShareButtons url={window.location.href} title={article.title} />
          </div>

          {/* Related Articles */}
          <RelatedArticles articles={related} />
        </motion.article>
      </main>
    </div>;
}