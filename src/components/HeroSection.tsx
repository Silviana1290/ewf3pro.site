import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';
export function HeroSection() {
  return <div className="relative w-full h-[500px] overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img src="/WhatsApp Image 2026-01-04 at 19.11.43.jpeg" alt="Market Studies Background" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center">
        <motion.div initial={{
        opacity: 0,
        y: 30
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.8
      }} className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-black text-white leading-tight mb-6 tracking-tight">
            LEARN & MAKE A <br />
            <span className="text-orange-500">RIGHT DECISION</span> <br />
            MARKET STUDIES
          </h1>

          <p className="text-lg text-gray-300 mb-8 max-w-xl leading-relaxed">
            Access real-time market data, expert analysis, and comprehensive
            educational resources to empower your trading journey.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link to="/utilities" className="btn-primary flex items-center space-x-2 group">
              <BookOpen className="w-5 h-5" />
              <span>Start Learning</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link to="/market" className="btn-secondary flex items-center space-x-2">
              <span>Market News</span>
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-[var(--bg-gradient-start)] to-transparent z-10" />
    </div>;
}
