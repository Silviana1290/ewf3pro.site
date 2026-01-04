import React from 'react';
import { motion } from 'framer-motion';
interface PriceChartProps {
  color?: string;
  trend?: 'up' | 'down';
}
export function PriceChart({
  color = '#FF6B00',
  trend = 'up'
}: PriceChartProps) {
  // Generate a random-looking path for the chart
  const generatePath = () => {
    let points = 'M0,50 ';
    let y = 50;
    for (let x = 10; x <= 300; x += 10) {
      y += (Math.random() - 0.5) * 30;
      y = Math.max(10, Math.min(90, y)); // Clamp between 10 and 90
      points += `L${x},${y} `;
    }
    return points;
  };
  const path = generatePath();
  const areaColor = trend === 'up' ? 'rgba(34, 197, 94, 0.1)' : 'rgba(239, 68, 68, 0.1)';
  const strokeColor = trend === 'up' ? '#22c55e' : '#ef4444';
  return <div className="w-full h-32 overflow-hidden relative bg-gray-50 dark:bg-gray-800/50 rounded-lg">
      <svg viewBox="0 0 300 100" className="w-full h-full" preserveAspectRatio="none">
        <defs>
          <linearGradient id={`gradient-${trend}`} x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor={strokeColor} stopOpacity="0.2" />
            <stop offset="100%" stopColor={strokeColor} stopOpacity="0" />
          </linearGradient>
        </defs>
        <motion.path initial={{
        pathLength: 0,
        opacity: 0
      }} animate={{
        pathLength: 1,
        opacity: 1
      }} transition={{
        duration: 1.5,
        ease: 'easeInOut'
      }} d={path} fill="none" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d={`${path} L300,100 L0,100 Z`} fill={`url(#gradient-${trend})`} opacity="0.5" />
      </svg>

      {/* Interactive Tooltip Simulation */}
      <div className="absolute top-2 right-2 flex space-x-1">
        {['1H', '1D', '1W', '1M'].map(tf => <span key={tf} className="text-[10px] px-1.5 py-0.5 rounded cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-500">
            {tf}
          </span>)}
      </div>
    </div>;
}