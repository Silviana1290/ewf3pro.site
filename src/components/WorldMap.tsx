import React from 'react';
import { motion } from 'framer-motion';
export function WorldMap() {
  const regions = [{
    id: 'na',
    name: 'North America',
    x: '20%',
    y: '30%',
    status: 'up'
  }, {
    id: 'eu',
    name: 'Europe',
    x: '50%',
    y: '25%',
    status: 'down'
  }, {
    id: 'asia',
    name: 'Asia',
    x: '75%',
    y: '35%',
    status: 'up'
  }, {
    id: 'sa',
    name: 'South America',
    x: '30%',
    y: '65%',
    status: 'neutral'
  }, {
    id: 'aus',
    name: 'Australia',
    x: '85%',
    y: '75%',
    status: 'up'
  }];
  return <div className="relative w-full h-[400px] bg-[#0F172A] rounded-xl overflow-hidden shadow-inner border border-gray-800">
      {/* Abstract Map Background */}
      <div className="absolute inset-0 opacity-30">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* World Map Silhouette (Simplified) */}
      <div className="absolute inset-0 flex items-center justify-center opacity-20 pointer-events-none">
        <h1 className="text-9xl font-black text-white tracking-tighter">
          WORLD MARKET
        </h1>
      </div>

      {/* Interactive Hotspots */}
      {regions.map(region => <motion.div key={region.id} className="absolute cursor-pointer group" style={{
      left: region.x,
      top: region.y
    }} whileHover={{
      scale: 1.1
    }}>
          <div className="relative">
            <div className={`w-4 h-4 rounded-full ${region.status === 'up' ? 'bg-green-500' : region.status === 'down' ? 'bg-red-500' : 'bg-yellow-500'} shadow-[0_0_15px_rgba(255,255,255,0.5)] animate-pulse`} />

            {/* Tooltip */}
            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-32 bg-white dark:bg-gray-800 p-2 rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10">
              <div className="text-xs font-bold text-gray-900 dark:text-white text-center">
                {region.name}
              </div>
              <div className={`text-xs text-center font-mono ${region.status === 'up' ? 'text-green-500' : region.status === 'down' ? 'text-red-500' : 'text-yellow-500'}`}>
                {region.status === 'up' ? '+1.2%' : region.status === 'down' ? '-0.5%' : '0.0%'}
              </div>
            </div>
          </div>
        </motion.div>)}
    </div>;
}