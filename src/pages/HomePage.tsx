import React from 'react';
import { HeroSection } from '../components/HeroSection';
import { FeaturedNews } from '../components/FeaturedNews';
import { MarketOverview } from '../components/MarketOverview';
import { PopularNews } from '../components/PopularNews';
import { MarketFacts } from '../components/MarketFacts';
import { EconomicIndicators } from '../components/EconomicIndicators';
import { useNews } from '../hooks/useNews';

interface HomePageProps {
  language: 'ID' | 'EN';
}

export function HomePage({ language }: HomePageProps) {
  const { news } = useNews(undefined, 6);

  return (
    <div className="min-h-screen pb-20">
      <HeroSection />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 relative z-20">
        <FeaturedNews news={news} />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            <section>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900 border-l-4 border-orange-600 pl-4">
                  {language === 'ID' ? 'Berita Populer' : 'Popular News'}
                </h2>
                <a
                  href="/news"
                  className="text-orange-600 hover:text-orange-700 font-semibold text-sm"
                >
                  View All
                </a>
              </div>
              <PopularNews language={language} />
            </section>

            <section>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900 border-l-4 border-orange-600 pl-4">
                  {language === 'ID'
                    ? 'Indikator Ekonomi'
                    : 'Economic Indicators'}
                </h2>
              </div>
              <EconomicIndicators language={language} />
            </section>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-8">
            <MarketOverview />
            <MarketFacts language={language} />
          </div>
        </div>
      </div>
    </div>
  );
}
