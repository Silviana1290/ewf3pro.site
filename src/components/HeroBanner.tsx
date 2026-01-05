import React from 'react';
import { motion } from 'framer-motion';

export function HeroBanner() {
  return (
    <div className="w-full bg-black relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative w-full h-[160px] sm:h-[200px] md:h-[240px]"
      >
        <img
          src="/Background1.png"
          alt="Market Banner"
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />

        {/* Subtle Glow */}
        <div className="absolute -right-32 top-0 w-96 h-96 bg-green-500/20 blur-[100px]" />
      </motion.div>
    </div>
  );
}
