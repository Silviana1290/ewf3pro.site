import React from 'react';
import { motion } from 'framer-motion';
import { Header } from '../components/Header';
import { WorldClock } from '../components/WorldClock';
import { MarketTicker } from '../components/MarketTicker';
import { NewsCard } from '../components/NewsCard';
import { EconomicIndicators } from '../components/EconomicIndicators';
import { FileText, ArrowRight, TrendingUp } from 'lucide-react';
const newsData = [{
  image: 'https://images.unsplash.com/photo-1611974765270-ca1258634369?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  date: 'Tuesday, 9 December 2025',
  title: 'Data JOLTS Jadi Kunci Arah Pasar Tenaga Kerja',
  excerpt: 'Laporan lowongan pekerjaan AS (JOLTS) menjadi sorotan utama investor minggu ini sebagai indikator kesehatan pasar tenaga kerja di tengah ketidakpastian kebijakan The Fed.',
  category: 'ECONOMY'
}, {
  image: 'https://images.unsplash.com/photo-1526304640152-d4619684e484?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  date: 'Tuesday, 9 December 2025',
  title: 'Lowongan JOLTS AS Lampaui Ekspektasi, Dukung Prospek Penguatan Dolar',
  excerpt: 'Angka JOLTS yang lebih tinggi dari perkiraan menunjukkan permintaan tenaga kerja yang masih kuat, memberikan alasan bagi The Fed untuk mempertahankan suku bunga tinggi lebih lama.',
  category: 'MARKET'
}, {
  image: 'https://images.unsplash.com/photo-1518186285589-2f7649de83e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  date: 'Monday, 8 December 2025',
  title: 'Pasar Eropa Lesu Di Awal Pekan, Semua Mata Tertuju Ke The Fed',
  excerpt: 'Bursa saham Eropa dibuka melemah pada awal pekan ini karena investor mengambil sikap hati-hati menjelang serangkaian data ekonomi penting dari AS dan keputusan bank sentral.',
  category: 'GLOBAL'
}, {
  image: 'https://images.unsplash.com/photo-1642543492481-44e81e3914a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  date: 'Tuesday, 9 December 2025',
  title: 'Bursa Eropa Naik Tipis Jelang Keputusan Penting The Fed',
  excerpt: 'Indeks STOXX 600 mencatat kenaikan tipis didorong oleh sektor teknologi, namun volume perdagangan tetap tipis menjelang rilis data inflasi AS.',
  category: 'MARKET ANALYSIS'
}];
const marketFacts = ['UJ1010_BBJ & UJ10F_BBJ Overview (23-Juli-2024)', 'UC1010_BBJ & UC10F_BBJ Overview (23-Juli-2024)', 'GU1010_BBJ & GU10F_BBJ Overview (23-Juli-2024)', 'EU1010_BBJ & EU10F_BBJ Overview (23-Juli-2024)', 'A1010_BBJ & AU10F_BBUJ Overview (23-Juli-2024)', 'JPK50_BBJ & JPK5U_BBJ Overview (23-Juli-2024)', 'HKK50_BBJ & HKK5U_BBJ Overview (23-Juli-2024)', 'XAG & XAGF Overview (23-Juli-2024)'];
export function HomePage() {
  return <div className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 transition-colors duration-300 font-sans">
      <Header />
      <WorldClock />
      <MarketTicker />

      <main className="pb-20">
        {/* Hero Section */}
        <section className="relative w-full h-[400px] md:h-[500px] overflow-hidden">
          <div className="absolute inset-0 bg-black/50 z-10" />
          <img src="/Cuplikan_layar_2025-12-10_214504.png" alt="Market Studies" className="w-full h-full object-cover" />
          <div className="absolute inset-0 z-20 flex flex-col justify-center items-center text-center px-4">
            <motion.h1 initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            delay: 0.2
          }} className="text-4xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg">
              LEARN & MAKE A RIGHT DECISION
            </motion.h1>
            <motion.p initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            delay: 0.4
          }} className="text-xl md:text-2xl text-orange-400 font-bold tracking-wider mb-8 drop-shadow-md">
              MARKET STUDIES
            </motion.p>
            <motion.div initial={{
            opacity: 0,
            scale: 0.9
          }} animate={{
            opacity: 1,
            scale: 1
          }} transition={{
            delay: 0.6
          }} className="flex space-x-4">
              <button className="px-8 py-3 bg-orange-600 hover:bg-orange-700 text-white font-bold rounded-lg transition-colors shadow-lg">
                Start Learning
              </button>
              <button className="px-8 py-3 bg-white hover:bg-gray-100 text-gray-900 font-bold rounded-lg transition-colors shadow-lg">
                Market News
              </button>
            </motion.div>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content - Popular News */}
            <div className="lg:col-span-2 space-y-8">
              <div className="flex items-center justify-between border-b-2 border-orange-600 pb-2 mb-6">
                <h2 className="text-2xl font-bold flex items-center">
                  <div className="w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-t-[10px] border-t-black dark:border-t-white mr-3"></div>
                  POPULAR NEWS
                </h2>
                <a href="#" className="text-sm font-bold text-orange-600 hover:underline">
                  View All
                </a>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {newsData.map((news, index) => <motion.div key={index} initial={{
                opacity: 0,
                y: 20
              }} whileInView={{
                opacity: 1,
                y: 0
              }} viewport={{
                once: true
              }} transition={{
                delay: index * 0.1
              }}>
                    <NewsCard {...news} />
                  </motion.div>)}
              </div>
            </div>

            {/* Sidebar - Market Facts */}
            <div className="lg:col-span-1">
              <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-xl border border-gray-200 dark:border-gray-800 sticky top-32">
                <div className="flex items-center border-b-2 border-black dark:border-white pb-2 mb-6">
                  <h2 className="text-xl font-bold flex items-center">
                    <div className="w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-t-[8px] border-t-orange-600 mr-3"></div>
                    MARKET FACTS
                  </h2>
                </div>

                <ul className="space-y-4">
                  {marketFacts.map((fact, index) => <motion.li key={index} initial={{
                  opacity: 0,
                  x: -10
                }} whileInView={{
                  opacity: 1,
                  x: 0
                }} viewport={{
                  once: true
                }} transition={{
                  delay: index * 0.05
                }} className="group">
                      <a href="#" className="flex items-start text-sm text-gray-700 dark:text-gray-300 hover:text-orange-600 dark:hover:text-orange-500 transition-colors">
                        <FileText size={16} className="mr-2 mt-0.5 flex-shrink-0 text-gray-400 group-hover:text-orange-600" />
                        <span className="line-clamp-2">{fact}</span>
                      </a>
                    </motion.li>)}
                </ul>

                <div className="mt-8 p-4 bg-orange-50 dark:bg-gray-800 rounded-lg border border-orange-100 dark:border-gray-700">
                  <h3 className="font-bold text-orange-800 dark:text-orange-400 mb-2 flex items-center">
                    <TrendingUp size={18} className="mr-2" />
                    Market Insight
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                    Dapatkan analisa pasar harian eksklusif dari tim ahli kami
                    langsung ke email Anda.
                  </p>
                  <button className="w-full py-2 bg-orange-600 hover:bg-orange-700 text-white text-sm font-bold rounded transition-colors">
                    Subscribe Now
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Economic Indicators Section */}
          <div className="mt-16">
            <EconomicIndicators />
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-black text-white py-12 border-t-4 border-orange-600">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div className="col-span-1 md:col-span-2">
              <img src="/ChatGPT_Image_Nov_30__2025__12_09_11_PM-removebg-preview.png" alt="EWF PRO" className="h-12 mb-4 brightness-0 invert" />
              <p className="text-gray-400 max-w-md">
                The Investor Understanding News. Memberikan berita finansial
                terkini, analisa pasar mendalam, dan data ekonomi real-time
                untuk membantu keputusan investasi Anda.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4 text-orange-500">
                Quick Links
              </h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Market Analysis
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Economic Calendar
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Commodities
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Glossary
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4 text-orange-500">
                Contact
              </h4>
              <ul className="space-y-2 text-gray-400">
                <li>Jakarta, Indonesia</li>
                <li>support@ewfpro.com</li>
                <li>+62 21 1234 5678</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
            &copy; 2025 EWF PRO. All rights reserved.
          </div>
        </div>
      </footer>
    </div>;
}