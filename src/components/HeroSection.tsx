import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';

export function HeroSection() {
  return (
    <div className="relative w-full h-[520px] overflow-hidden bg-black">
      
      <div className="absolute inset-0 z-0">

        {/* Base Image */}
        <motion.img
          src="/Background1.png"
          alt="Market Background"
          className="w-full h-full object-cover scale-105"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1.05 }}
          transition={{ duration: 20, repeat: Infinity, repeatType: 'reverse' }}
        />

        {/* Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/30" />

        {/* Green Glow Layer */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_40%,rgba(34,197,94,0.25),transparent_60%)]" />

        {/* Noise Texture */}
        <div className="absolute inset-0 opacity-[0.04] bg-[url('/noise.png')] pointer-events-none" />
      </div>

      {/* === CONTENT === */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 h-full flex items-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
          className="max-w-3xl"
        >
          <h1 className="text-4xl md:text-6xl font-black text-white leading-tight mb-6 tracking-tight">
            LEARN & MAKE A <br />
            <span className="text-orange-500 drop-shadow-[0_0_12px_rgba(249,115,22,0.6)]">
              RIGHT DECISION
            </span>
            <br />
            MARKET STUDIES
          </h1>

          <p className="text-lg text-gray-300 mb-8 max-w-xl leading-relaxed">
            Access real-time market data, expert analysis, and comprehensive
            educational resources to empower your trading journey.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link
              to="/utilities"
              className="btn-primary flex items-center space-x-2 group shadow-lg shadow-orange-500/30"
            >
              <BookOpen className="w-5 h-5" />
              <span>Start Learning</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link
              to="/market"
              className="btn-secondary flex items-center space-x-2 border-white/20 hover:border-white/40"
            >
              <span>Market News</span>
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-28 bg-gradient-to-t from-black to-transparent z-10" />
    </div>
  );
}
