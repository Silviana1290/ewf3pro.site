import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, TrendingUp, TrendingDown, Globe, AlertCircle, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import { EconomicIndicators } from '../components/EconomicIndicators';
import { NewsFeed } from '../components/NewsFeed';
interface EconomyPageProps {
  language: 'ID' | 'EN';
}
export function EconomyPage({
  language
}: EconomyPageProps) {
  const upcomingEvents = [{
    time: '14:30',
    currency: 'USD',
    event: 'CPI (YoY)',
    description: 'Consumer Price Index',
    forecast: '3.4%',
    impact: 'high',
    source: 'https://www.bls.gov/'
  }, {
    time: '09:00',
    currency: 'EUR',
    event: 'ECB Rate Decision',
    description: 'European Central Bank',
    forecast: '4.50%',
    impact: 'high',
    source: 'https://www.ecb.europa.eu/'
  }, {
    time: '13:30',
    currency: 'USD',
    event: 'Unemployment Claims',
    description: 'Weekly Jobless Claims',
    forecast: '212K',
    impact: 'medium',
    source: 'https://www.dol.gov/'
  }];
  const gdpData = [{
    country: 'USA',
    value: '2.5%',
    trend: 'up' as const,
    source: 'https://www.bea.gov/'
  }, {
    country: 'China',
    value: '5.2%',
    trend: 'up' as const,
    source: 'https://www.stats.gov.cn/'
  }, {
    country: 'Eurozone',
    value: '0.8%',
    trend: 'down' as const,
    source: 'https://ec.europa.eu/eurostat'
  }, {
    country: 'Japan',
    value: '1.2%',
    trend: 'neutral' as const,
    source: 'https://www.esri.cao.go.jp/'
  }];
  const keyRates = [{
    bank: 'Fed',
    fullName: 'Federal Reserve',
    rate: '5.50%',
    source: 'https://www.federalreserve.gov/'
  }, {
    bank: 'ECB',
    fullName: 'European Central Bank',
    rate: '4.50%',
    source: 'https://www.ecb.europa.eu/'
  }, {
    bank: 'BoE',
    fullName: 'Bank of England',
    rate: '5.25%',
    source: 'https://www.bankofengland.co.uk/'
  }, {
    bank: 'BoJ',
    fullName: 'Bank of Japan',
    rate: '0.10%',
    source: 'https://www.boj.or.jp/'
  }];
  return <div className="min-h-screen py-6 md:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{
        opacity: 0,
        y: -20
      }} animate={{
        opacity: 1,
        y: 0
      }} className="mb-6 md:mb-10">
          <h1 className="text-3xl md:text-4xl font-black text-gray-900 dark:text-white mb-3 md:mb-4">
            {language === 'ID' ? 'Ekonomi Global' : 'Global Economy'}
          </h1>
          <p className="text-base md:text-xl text-gray-600 dark:text-gray-400">
            {language === 'ID' ? 'Lacak indikator ekonomi utama, keputusan bank sentral, dan tren ekonomi global.' : 'Track key economic indicators, central bank decisions, and global economic trends.'}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 mb-8 md:mb-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6 md:space-y-8">
            {/* Upcoming Events Card */}
            <div className="card-modern p-4 md:p-6">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 md:mb-6 gap-3">
                <h2 className="text-lg md:text-xl font-bold text-gray-900 dark:text-white flex items-center">
                  <Calendar className="w-5 h-5 mr-2 text-orange-600" />
                  {language === 'ID' ? 'Acara Ekonomi Mendatang' : 'Upcoming Economic Events'}
                </h2>
                <Link to="/calendar" className="text-sm text-orange-600 hover:text-orange-700 font-semibold hover:underline flex items-center">
                  {language === 'ID' ? 'Lihat Kalender Lengkap' : 'View Full Calendar'}
                  <ExternalLink className="w-3 h-3 ml-1" />
                </Link>
              </div>

              <div className="space-y-3 md:space-y-4">
                {upcomingEvents.map((event, i) => <motion.div key={i} initial={{
                opacity: 0,
                x: -20
              }} animate={{
                opacity: 1,
                x: 0
              }} transition={{
                delay: i * 0.1
              }} className="flex flex-col sm:flex-row sm:items-center sm:justify-between p-3 md:p-4 bg-gray-50 dark:bg-gray-800 rounded-lg border-l-4 border-orange-500 gap-3">
                    <div className="flex items-start sm:items-center space-x-3 md:space-x-4 flex-1">
                      <div className="text-center flex-shrink-0">
                        <div className="text-xs font-bold text-gray-500">
                          {event.time}
                        </div>
                        <div className="text-xs font-bold text-gray-900 dark:text-white mt-1">
                          {event.currency}
                        </div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="font-bold text-sm md:text-base text-gray-900 dark:text-white truncate">
                          {event.event}
                        </div>
                        <div className="text-xs text-gray-500 mt-1">
                          {event.description}
                        </div>
                        <a href={event.source} target="_blank" rel="noopener noreferrer" className="text-xs text-orange-600 hover:text-orange-700 mt-1 inline-flex items-center hover:underline">
                          Source <ExternalLink className="w-3 h-3 ml-1" />
                        </a>
                      </div>
                    </div>
                    <div className="flex items-center justify-between sm:justify-end space-x-3 md:space-x-4">
                      <div className="text-right">
                        <div className="text-xs text-gray-500">
                          {language === 'ID' ? 'Prakiraan' : 'Forecast'}
                        </div>
                        <div className="font-bold text-sm md:text-base text-gray-900 dark:text-white">
                          {event.forecast}
                        </div>
                      </div>
                      <span className={`px-2 py-1 text-xs font-bold rounded whitespace-nowrap ${event.impact === 'high' ? 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400' : 'bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-400'}`}>
                        {event.impact.toUpperCase()}
                      </span>
                    </div>
                  </motion.div>)}
              </div>
            </div>

            {/* Economic Indicators */}
            <EconomicIndicators language={language} />
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6 md:space-y-8">
            {/* GDP Growth Card */}
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            delay: 0.2
          }} className="card-modern p-4 md:p-6 bg-gradient-to-br from-blue-900 to-blue-800 text-white border-none">
              <h3 className="text-lg md:text-xl font-bold mb-4 flex items-center">
                <Globe className="w-5 h-5 mr-2" />
                {language === 'ID' ? 'Pertumbuhan GDP Global' : 'Global GDP Growth'}
              </h3>
              <div className="space-y-3 md:space-y-4">
                {gdpData.map(item => <div key={item.country}>
                    <div className="flex justify-between items-center pb-2 border-b border-blue-700">
                      <span className="font-medium">{item.country}</span>
                      <span className="font-bold flex items-center">
                        {item.value}
                        {item.trend === 'up' ? <TrendingUp className="w-4 h-4 ml-2 text-green-400" /> : item.trend === 'down' ? <TrendingDown className="w-4 h-4 ml-2 text-red-400" /> : null}
                      </span>
                    </div>
                    <a href={item.source} target="_blank" rel="noopener noreferrer" className="text-xs text-blue-200 hover:text-white mt-1 inline-flex items-center hover:underline">
                      View Source <ExternalLink className="w-3 h-3 ml-1" />
                    </a>
                  </div>)}
              </div>
            </motion.div>

            {/* Key Rates Card */}
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            delay: 0.3
          }} className="card-modern p-4 md:p-6">
              <h3 className="text-lg md:text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                <AlertCircle className="w-5 h-5 mr-2 text-orange-600" />
                {language === 'ID' ? 'Suku Bunga Utama' : 'Key Interest Rates'}
              </h3>
              <div className="space-y-3">
                {keyRates.map(item => <div key={item.bank}>
                    <div className="flex justify-between items-center p-2 hover:bg-gray-50 dark:hover:bg-gray-800 rounded transition-colors">
                      <div>
                        <div className="font-bold text-gray-900 dark:text-white">
                          {item.bank}
                        </div>
                        <div className="text-xs text-gray-500">
                          {item.fullName}
                        </div>
                      </div>
                      <span className="font-mono font-bold text-gray-900 dark:text-white">
                        {item.rate}
                      </span>
                    </div>
                    <a href={item.source} target="_blank" rel="noopener noreferrer" className="text-xs text-orange-600 hover:text-orange-700 ml-2 inline-flex items-center hover:underline">
                      Official Site <ExternalLink className="w-3 h-3 ml-1" />
                    </a>
                  </div>)}
              </div>
            </motion.div>

            {/* Quick Links Card */}
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            delay: 0.4
          }} className="card-modern p-4 md:p-6 bg-orange-50 dark:bg-orange-900/10 border-orange-200 dark:border-orange-900/30">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
                {language === 'ID' ? 'Tautan Cepat' : 'Quick Links'}
              </h3>
              <div className="space-y-2">
                <Link to="/calendar" className="flex items-center justify-between p-2 hover:bg-orange-100 dark:hover:bg-orange-900/20 rounded-lg transition-colors group">
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    {language === 'ID' ? 'Kalender Ekonomi' : 'Economic Calendar'}
                  </span>
                  <ExternalLink className="w-4 h-4 text-orange-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
                <Link to="/fiscal-monetary" className="flex items-center justify-between p-2 hover:bg-orange-100 dark:hover:bg-orange-900/20 rounded-lg transition-colors group">
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    {language === 'ID' ? 'Kebijakan Fiskal & Moneter' : 'Fiscal & Monetary Policy'}
                  </span>
                  <ExternalLink className="w-4 h-4 text-orange-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
                <Link to="/global" className="flex items-center justify-between p-2 hover:bg-orange-100 dark:hover:bg-orange-900/20 rounded-lg transition-colors group">
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    {language === 'ID' ? 'Pasar Global' : 'Global Markets'}
                  </span>
                  <ExternalLink className="w-4 h-4 text-orange-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Economy News Section */}
        <div>
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-4 md:mb-6 border-l-4 border-orange-600 pl-4">
            {language === 'ID' ? 'Berita Ekonomi' : 'Economy News'}
          </h2>
          <NewsFeed language={language} />
        </div>
      </div>
    </div>;
}