import React from 'react';
import { motion } from 'framer-motion';
export function HeroBanner() {
  return <div className="w-full bg-black overflow-hidden relative">
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{
        opacity: 0
      }} animate={{
        opacity: 1
      }} transition={{
        duration: 0.8
      }} className="relative w-full h-[150px] sm:h-[200px] md:h-[250px]">
          <img src="/Background1.png" alt="Learn & Make a Right Decision Market Studies" className="w-full h-full object-cover object-center" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent pointer-events-none" />
        </motion.div>
      </div>
    </div>;
}
