import React from 'react';
import { motion } from 'framer-motion';
import { CalculatorTool } from '../components/CalculatorTool';
interface UtilitiesPageProps {
  language: 'ID' | 'EN';
}
export function UtilitiesPage({
  language
}: UtilitiesPageProps) {
  const tools = [{
    title: 'Pip Calculator',
    description: 'Calculate the value of a pip for various currency pairs.',
    type: 'pip'
  }, {
    title: 'Position Size Calculator',
    description: 'Determine the optimal position size based on your risk tolerance.',
    type: 'position'
  }, {
    title: 'Profit/Loss Calculator',
    description: 'Estimate potential profit or loss for your trades.',
    type: 'profit'
  }, {
    title: 'Currency Converter',
    description: 'Convert between different currencies using live market rates.',
    type: 'currency'
  }, {
    title: 'Margin Calculator',
    description: 'Calculate the required margin for opening positions.',
    type: 'pip'
  }, {
    title: 'Pivot Point Calculator',
    description: 'Find key support and resistance levels.',
    type: 'pip'
  }] as const;
  return <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{
        opacity: 0,
        y: -20
      }} animate={{
        opacity: 1,
        y: 0
      }} className="mb-10">
          <h1 className="text-4xl font-black text-gray-900 dark:text-white mb-4">
            {language === 'ID' ? 'Utilitas Trading' : 'Trading Utilities'}
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl">
            Essential tools and calculators to help you manage risk and plan
            your trades effectively.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tools.map((tool, index) => <motion.div key={tool.title} initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          delay: index * 0.1
        }}>
              <CalculatorTool {...tool} />
            </motion.div>)}
        </div>
      </div>
    </div>;
}