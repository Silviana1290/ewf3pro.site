import React from 'react';
import { motion } from 'framer-motion';
import { FileText } from 'lucide-react';

interface MarketFactsProps {
  language: 'ID' | 'EN';
}

const facts = [
  { id: '1', title: 'UJ1010_BBJ & UJ10F_BBJ Overview', date: '23-Juli-2024' },
  { id: '2', title: 'UC1010_BBJ & UC10F_BBJ Overview', date: '23-Juli-2024' },
  { id: '3', title: 'GU1010_BBJ & GU10F_BBJ Overview', date: '23-Juli-2024' },
  { id: '4', title: 'EU1010_BBJ & EU10F_BBJ Overview', date: '23-Juli-2024' },
  { id: '5', title: 'A1010_BBJ & AU10F_BBUJ Overview', date: '23-Juli-2024' },
  { id: '6', title: 'JPK50_BBJ & JPK5U_BBJ Overview', date: '23-Juli-2024' },
  { id: '7', title: 'HKK50_BBJ & HKK5U_BBJ Overview', date: '23-Juli-2024' },
  { id: '8', title: 'XAG & XAGF Overview', date: '23-Juli-2024' }
];

export function MarketFacts({ language }: MarketFactsProps) {
  return (
    <div
      className="
        bg-white dark:bg-dark-surface
        rounded-lg shadow-sm
        border border-gray-200 dark:border-gray-700
        overflow-hidden
      "
    >
      {/* HEADER */}
      <div className="bg-black text-white px-6 py-4 border-l-4 border-orange-600 relative overflow-hidden">
        <h2 className="text-xl font-bold uppercase tracking-wider relative z-10">
          {language === 'ID' ? 'Fakta Pasar' : 'Market Facts'}
        </h2>
        <div className="absolute top-0 right-0 translate-x-1/3 -translate-y-1/2 w-24 h-24 bg-orange-600 rounded-full opacity-20" />
      </div>

      {/* CONTENT (SCROLL INTERNAL, BUKAN IKUT HALAMAN) */}
      <div className="p-4 space-y-3 max-h-96 overflow-auto">
        {facts.map((fact, index) => (
          <motion.a
            key={fact.id}
            href="#"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.05 }}
            className="
              flex items-start space-x-3 p-2 rounded-lg
              hover:bg-orange-50 dark:hover:bg-orange-900/20
              transition-colors group
            "
          >
            <FileText className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
            <h3 className="text-sm font-medium text-blue-600 dark:text-blue-400 group-hover:text-orange-600 dark:group-hover:text-orange-500 transition-colors">
              {fact.title} ({fact.date})
            </h3>
          </motion.a>
        ))}
      </div>
    </div>
  );
}
