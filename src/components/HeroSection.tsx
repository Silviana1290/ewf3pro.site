import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';

export function HeroSection() {
  return (
    <section className="relative w-full h-[520px] overflow-hidden bg-black">
      
      {/* ===== BACKGROUND IMAGE ===== */}
      <div className="absolute inset-0">
        <img
          src="/Background1.png"
          alt="Market Background"
          className="w-full h-full object-cover scale-105"
        />
      </div>

      {/* ===== GRADIENT OVERLAY ===== */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/20" />

      {/* ===== GREEN GLOW ACCENT ===== */}
      <motion.div
        initial={{ opacity: 0.3 }}
        animate={{ opacity: [0.25, 0.4, 0.25] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-32 -right-32 w-[500px] h-[500px] bg-green-500/20 blur-[120px] rounded-full"
      />

      {/* ===== CONTENT ===== */}
      <div className="relative z-10 max-w-7xl mx-auto h-full px-6 flex items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <h1 className="text-4xl md:text-6xl font-black text-white leading-tight tracking-tight mb-6">
            LEARN & MAKE A <br />
            <span className="text-orange-500">RIGHT DECISION</span> <br />
            MARKET STUDIES
          </h1>

          <p className="text-lg text-gray-300 max-w-xl mb-8 leading-relaxed">
            Access real-time market data, expert analysis, and comprehensive
            educational resources to empower your trading journey.
          </p>

          <div className="flex gap-4">
            <Link
              to="/utilities"
              className="btn-primary flex items-center gap-2 group"
            >
              <BookOpen className="w-5 h-5" />
              Start Learning
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link to="/market" className="btn-secondary">
              Market News
            </Link>
          </div>
        </motion.div>
      </div>

      {/* ===== BOTTOM FADE ===== */}
      <div className="absolute bottom-0 left-0 w-full h-28 bg-gradient-to-t from-black to-transparent z-10" />
    </section>
  );
}
