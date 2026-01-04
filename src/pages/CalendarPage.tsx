import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar as CalendarIcon, Filter, Bell, Clock, X, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
interface CalendarPageProps {
  language: 'ID' | 'EN';
}
type TimeFilter = 'today' | 'tomorrow' | 'week';
export function CalendarPage({
  language
}: CalendarPageProps) {
  const [activeFilter, setActiveFilter] = useState<TimeFilter>('today');
  const [showFilterModal, setShowFilterModal] = useState(false);
  const [selectedImpact, setSelectedImpact] = useState<string[]>(['high', 'medium', 'low']);
  const [selectedCurrencies, setSelectedCurrencies] = useState<string[]>(['USD', 'EUR', 'GBP', 'JPY', 'CAD']);
  const allEvents = [{
    time: '08:30',
    currency: 'USD',
    event: 'Core CPI (MoM)',
    impact: 'high',
    actual: '0.4%',
    forecast: '0.3%',
    previous: '0.4%',
    day: 'today',
    source: 'https://www.bls.gov/'
  }, {
    time: '08:30',
    currency: 'USD',
    event: 'CPI (YoY)',
    impact: 'high',
    actual: '3.5%',
    forecast: '3.4%',
    previous: '3.2%',
    day: 'today',
    source: 'https://www.bls.gov/'
  }, {
    time: '10:00',
    currency: 'CAD',
    event: 'BoC Interest Rate Decision',
    impact: 'high',
    actual: '5.00%',
    forecast: '5.00%',
    previous: '5.00%',
    day: 'today',
    source: 'https://www.bankofcanada.ca/'
  }, {
    time: '14:00',
    currency: 'USD',
    event: 'FOMC Meeting Minutes',
    impact: 'high',
    actual: '-',
    forecast: '-',
    previous: '-',
    day: 'today',
    source: 'https://www.federalreserve.gov/'
  }, {
    time: '18:50',
    currency: 'JPY',
    event: 'PPI (YoY)',
    impact: 'medium',
    actual: '-',
    forecast: '0.8%',
    previous: '0.6%',
    day: 'today',
    source: 'https://www.boj.or.jp/'
  }, {
    time: '09:00',
    currency: 'EUR',
    event: 'ECB Interest Rate Decision',
    impact: 'high',
    actual: '-',
    forecast: '4.50%',
    previous: '4.50%',
    day: 'tomorrow',
    source: 'https://www.ecb.europa.eu/'
  }, {
    time: '13:30',
    currency: 'USD',
    event: 'Unemployment Claims',
    impact: 'medium',
    actual: '-',
    forecast: '212K',
    previous: '210K',
    day: 'tomorrow',
    source: 'https://www.dol.gov/'
  }, {
    time: '08:30',
    currency: 'GBP',
    event: 'GDP (QoQ)',
    impact: 'high',
    actual: '-',
    forecast: '0.2%',
    previous: '0.1%',
    day: 'week',
    source: 'https://www.ons.gov.uk/'
  }, {
    time: '15:00',
    currency: 'USD',
    event: 'Retail Sales',
    impact: 'high',
    actual: '-',
    forecast: '0.4%',
    previous: '0.6%',
    day: 'week',
    source: 'https://www.census.gov/'
  }];
  const filteredEvents = allEvents.filter(event => {
    const matchesTime = event.day === activeFilter || activeFilter === 'week' && ['today', 'tomorrow', 'week'].includes(event.day);
    const matchesImpact = selectedImpact.includes(event.impact);
    const matchesCurrency = selectedCurrencies.includes(event.currency);
    return matchesTime && matchesImpact && matchesCurrency;
  });
  const getFilterLabel = () => {
    switch (activeFilter) {
      case 'today':
        return language === 'ID' ? 'Hari Ini' : 'Today';
      case 'tomorrow':
        return language === 'ID' ? 'Besok' : 'Tomorrow';
      case 'week':
        return language === 'ID' ? 'Minggu Ini' : 'This Week';
    }
  };
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
            {language === 'ID' ? 'Kalender Ekonomi' : 'Economic Calendar'}
          </h1>
          <p className="text-base md:text-xl text-gray-600 dark:text-gray-400">
            {language === 'ID' ? 'Jadwal acara ekonomi dan rilis data yang mempengaruhi pasar keuangan.' : 'Schedule of economic events and data releases that affect the financial markets.'}
          </p>
        </motion.div>

        <div className="card-modern overflow-hidden">
          {/* Toolbar - Responsive */}
          <div className="p-3 md:p-4 border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50">
            {/* Mobile Layout */}
            <div className="flex flex-col space-y-3 md:hidden">
              <div className="flex space-x-2 overflow-x-auto pb-2">
                <button onClick={() => setActiveFilter('today')} className={`px-4 py-2 rounded-lg text-sm font-semibold whitespace-nowrap transition-all ${activeFilter === 'today' ? 'bg-orange-600 text-white shadow-lg' : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-orange-50 dark:hover:bg-gray-600'}`}>
                  {language === 'ID' ? 'Hari Ini' : 'Today'}
                </button>
                <button onClick={() => setActiveFilter('tomorrow')} className={`px-4 py-2 rounded-lg text-sm font-semibold whitespace-nowrap transition-all ${activeFilter === 'tomorrow' ? 'bg-orange-600 text-white shadow-lg' : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-orange-50 dark:hover:bg-gray-600'}`}>
                  {language === 'ID' ? 'Besok' : 'Tomorrow'}
                </button>
                <button onClick={() => setActiveFilter('week')} className={`px-4 py-2 rounded-lg text-sm font-semibold whitespace-nowrap transition-all ${activeFilter === 'week' ? 'bg-orange-600 text-white shadow-lg' : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-orange-50 dark:hover:bg-gray-600'}`}>
                  {language === 'ID' ? 'Minggu Ini' : 'This Week'}
                </button>
              </div>

              <div className="flex items-center space-x-2">
                <button onClick={() => setShowFilterModal(true)} className="flex-1 flex items-center justify-center space-x-2 px-3 py-2 bg-white dark:bg-gray-700 rounded-lg shadow-sm text-sm font-semibold hover:bg-orange-50 dark:hover:bg-gray-600 transition-colors">
                  <Filter className="w-4 h-4" />
                  <span>{language === 'ID' ? 'Filter' : 'Filter'}</span>
                </button>
                <button className="flex-1 flex items-center justify-center space-x-2 px-3 py-2 bg-white dark:bg-gray-700 rounded-lg shadow-sm text-sm font-semibold hover:bg-orange-50 dark:hover:bg-gray-600 transition-colors">
                  <Bell className="w-4 h-4" />
                  <span>{language === 'ID' ? 'Notifikasi' : 'Alerts'}</span>
                </button>
              </div>
            </div>

            {/* Desktop Layout */}
            <div className="hidden md:flex flex-wrap gap-4 justify-between items-center">
              <div className="flex space-x-2">
                <button onClick={() => setActiveFilter('today')} className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all ${activeFilter === 'today' ? 'bg-orange-600 text-white shadow-lg' : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-orange-50 dark:hover:bg-gray-600'}`}>
                  {language === 'ID' ? 'Hari Ini' : 'Today'}
                </button>
                <button onClick={() => setActiveFilter('tomorrow')} className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all ${activeFilter === 'tomorrow' ? 'bg-orange-600 text-white shadow-lg' : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-orange-50 dark:hover:bg-gray-600'}`}>
                  {language === 'ID' ? 'Besok' : 'Tomorrow'}
                </button>
                <button onClick={() => setActiveFilter('week')} className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all ${activeFilter === 'week' ? 'bg-orange-600 text-white shadow-lg' : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-orange-50 dark:hover:bg-gray-600'}`}>
                  {language === 'ID' ? 'Minggu Ini' : 'This Week'}
                </button>
              </div>

              <div className="flex items-center space-x-3">
                <button onClick={() => setShowFilterModal(true)} className="flex items-center space-x-2 px-3 py-2 bg-white dark:bg-gray-700 rounded-lg shadow-sm text-sm font-semibold hover:bg-orange-50 dark:hover:bg-gray-600 transition-colors">
                  <Filter className="w-4 h-4" />
                  <span>{language === 'ID' ? 'Filter' : 'Filter'}</span>
                </button>
                <button className="flex items-center space-x-2 px-3 py-2 bg-white dark:bg-gray-700 rounded-lg shadow-sm text-sm font-semibold hover:bg-orange-50 dark:hover:bg-gray-600 transition-colors">
                  <Bell className="w-4 h-4" />
                  <span>{language === 'ID' ? 'Notifikasi' : 'Alerts'}</span>
                </button>
              </div>
            </div>
          </div>

          {/* Results Count */}
          <div className="px-4 py-3 bg-gray-50 dark:bg-gray-800/30 border-b border-gray-200 dark:border-gray-700">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              {language === 'ID' ? 'Menampilkan' : 'Showing'}{' '}
              <span className="font-bold text-orange-600">
                {filteredEvents.length}
              </span>{' '}
              {language === 'ID' ? 'acara untuk' : 'events for'}{' '}
              <span className="font-bold">{getFilterLabel()}</span>
            </p>
          </div>

          {/* Calendar Table - Desktop */}
          <div className="hidden md:block overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-100 dark:bg-gray-800">
                <tr>
                  <th className="px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">
                    Time
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">
                    Cur
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">
                    Event
                  </th>
                  <th className="px-6 py-4 text-center text-xs font-bold text-gray-500 uppercase tracking-wider">
                    Imp
                  </th>
                  <th className="px-6 py-4 text-right text-xs font-bold text-gray-500 uppercase tracking-wider">
                    Actual
                  </th>
                  <th className="px-6 py-4 text-right text-xs font-bold text-gray-500 uppercase tracking-wider">
                    Forecast
                  </th>
                  <th className="px-6 py-4 text-right text-xs font-bold text-gray-500 uppercase tracking-wider">
                    Previous
                  </th>
                  <th className="px-6 py-4 text-center text-xs font-bold text-gray-500 uppercase tracking-wider">
                    Source
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                <AnimatePresence mode="wait">
                  {filteredEvents.map((event, index) => <motion.tr key={`${event.time}-${event.event}-${index}`} initial={{
                  opacity: 0,
                  x: -20
                }} animate={{
                  opacity: 1,
                  x: 0
                }} exit={{
                  opacity: 0,
                  x: 20
                }} transition={{
                  delay: index * 0.05
                }} className="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        <div className="flex items-center">
                          <Clock className="w-4 h-4 mr-2 text-gray-400" />
                          {event.time}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-gray-900 dark:text-white">
                        {event.currency}
                      </td>
                      <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">
                        {event.event}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-center">
                        <span className={`px-2 py-1 text-xs font-bold rounded ${event.impact === 'high' ? 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400' : event.impact === 'medium' ? 'bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-400' : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400'}`}>
                          {event.impact.toUpperCase()}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-bold text-gray-900 dark:text-white">
                        {event.actual}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm text-gray-500">
                        {event.forecast}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm text-gray-500">
                        {event.previous}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-center">
                        <a href={event.source} target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:text-orange-700 text-xs font-semibold hover:underline">
                          View
                        </a>
                      </td>
                    </motion.tr>)}
                </AnimatePresence>
              </tbody>
            </table>
          </div>

          {/* Calendar Cards - Mobile/Tablet */}
          <div className="md:hidden divide-y divide-gray-200 dark:divide-gray-700">
            <AnimatePresence mode="wait">
              {filteredEvents.map((event, index) => <motion.div key={`${event.time}-${event.event}-${index}`} initial={{
              opacity: 0,
              y: 20
            }} animate={{
              opacity: 1,
              y: 0
            }} exit={{
              opacity: 0,
              y: -20
            }} transition={{
              delay: index * 0.05
            }} className="p-4 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center space-x-3">
                      <div className="flex flex-col items-center">
                        <Clock className="w-4 h-4 text-gray-400 mb-1" />
                        <span className="text-xs font-bold text-gray-500">
                          {event.time}
                        </span>
                      </div>
                      <div>
                        <div className="flex items-center space-x-2 mb-1">
                          <span className="text-sm font-bold text-gray-900 dark:text-white">
                            {event.currency}
                          </span>
                          <span className={`px-2 py-0.5 text-xs font-bold rounded ${event.impact === 'high' ? 'bg-red-100 text-red-800' : event.impact === 'medium' ? 'bg-orange-100 text-orange-800' : 'bg-yellow-100 text-yellow-800'}`}>
                            {event.impact.toUpperCase()}
                          </span>
                        </div>
                        <h3 className="text-sm font-bold text-gray-900 dark:text-white">
                          {event.event}
                        </h3>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-3 text-xs">
                    <div>
                      <div className="text-gray-500 mb-1">Actual</div>
                      <div className="font-bold text-gray-900 dark:text-white">
                        {event.actual}
                      </div>
                    </div>
                    <div>
                      <div className="text-gray-500 mb-1">Forecast</div>
                      <div className="font-semibold text-gray-700 dark:text-gray-300">
                        {event.forecast}
                      </div>
                    </div>
                    <div>
                      <div className="text-gray-500 mb-1">Previous</div>
                      <div className="font-semibold text-gray-700 dark:text-gray-300">
                        {event.previous}
                      </div>
                    </div>
                  </div>

                  <div className="mt-3 pt-3 border-t border-gray-200 dark:border-gray-700">
                    <a href={event.source} target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:text-orange-700 text-xs font-semibold hover:underline flex items-center">
                      View Source →
                    </a>
                  </div>
                </motion.div>)}
            </AnimatePresence>
          </div>
        </div>

        {/* Filter Modal */}
        <AnimatePresence>
          {showFilterModal && <motion.div initial={{
          opacity: 0
        }} animate={{
          opacity: 1
        }} exit={{
          opacity: 0
        }} className="fixed inset-0 bg-black/50 z-50 flex items-end md:items-center justify-center p-4" onClick={() => setShowFilterModal(false)}>
              <motion.div initial={{
            y: 100,
            opacity: 0
          }} animate={{
            y: 0,
            opacity: 1
          }} exit={{
            y: 100,
            opacity: 0
          }} className="bg-white dark:bg-gray-800 rounded-t-2xl md:rounded-2xl w-full max-w-lg max-h-[80vh] overflow-y-auto" onClick={e => e.stopPropagation()}>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                      {language === 'ID' ? 'Filter Acara' : 'Filter Events'}
                    </h3>
                    <button onClick={() => setShowFilterModal(false)} className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors">
                      <X className="w-5 h-5" />
                    </button>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <h4 className="text-sm font-bold text-gray-700 dark:text-gray-300 mb-3">
                        {language === 'ID' ? 'Dampak' : 'Impact Level'}
                      </h4>
                      <div className="space-y-2">
                        {['high', 'medium', 'low'].map(impact => <label key={impact} className="flex items-center space-x-3 cursor-pointer">
                            <input type="checkbox" checked={selectedImpact.includes(impact)} onChange={e => {
                        if (e.target.checked) {
                          setSelectedImpact([...selectedImpact, impact]);
                        } else {
                          setSelectedImpact(selectedImpact.filter(i => i !== impact));
                        }
                      }} className="w-4 h-4 text-orange-600 rounded focus:ring-orange-500" />
                            <span className="text-sm text-gray-700 dark:text-gray-300 capitalize">
                              {impact}
                            </span>
                          </label>)}
                      </div>
                    </div>

                    <div>
                      <h4 className="text-sm font-bold text-gray-700 dark:text-gray-300 mb-3">
                        {language === 'ID' ? 'Mata Uang' : 'Currencies'}
                      </h4>
                      <div className="grid grid-cols-2 gap-2">
                        {['USD', 'EUR', 'GBP', 'JPY', 'CAD', 'AUD'].map(currency => <label key={currency} className="flex items-center space-x-3 cursor-pointer">
                              <input type="checkbox" checked={selectedCurrencies.includes(currency)} onChange={e => {
                        if (e.target.checked) {
                          setSelectedCurrencies([...selectedCurrencies, currency]);
                        } else {
                          setSelectedCurrencies(selectedCurrencies.filter(c => c !== currency));
                        }
                      }} className="w-4 h-4 text-orange-600 rounded focus:ring-orange-500" />
                              <span className="text-sm text-gray-700 dark:text-gray-300">
                                {currency}
                              </span>
                            </label>)}
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700 flex space-x-3">
                    <button onClick={() => {
                  setSelectedImpact(['high', 'medium', 'low']);
                  setSelectedCurrencies(['USD', 'EUR', 'GBP', 'JPY', 'CAD']);
                }} className="flex-1 px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg font-semibold hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors">
                      {language === 'ID' ? 'Reset' : 'Reset'}
                    </button>
                    <button onClick={() => setShowFilterModal(false)} className="flex-1 px-4 py-2 bg-orange-600 text-white rounded-lg font-semibold hover:bg-orange-700 transition-colors">
                      {language === 'ID' ? 'Terapkan' : 'Apply'}
                    </button>
                  </div>
                </div>
              </motion.div>
            </motion.div>}
        </AnimatePresence>
      </div>
    </div>;
}