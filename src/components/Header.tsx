import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Search, Globe } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { ThemeToggle } from './ThemeToggle';
import { FontSizeControl } from './FontSizeControl';
const navItems = [{
  label: 'MARKET',
  path: '/market'
}, {
  label: 'ECONOMY',
  path: '/economy'
}, {
  label: 'COMMODITY',
  path: '/commodity'
}, {
  label: 'FISCAL & MONETARY',
  path: '/fiscal-monetary'
}, {
  label: 'CALENDAR',
  path: '/calendar'
}, {
  label: 'GLOBAL',
  path: '/global'
}, {
  label: 'MARKET ANALYSIS',
  path: '/market-analysis'
}, {
  label: 'UTILITIES',
  path: '/utilities'
}, {
  label: 'GLOSSARY',
  path: 'https://www.equityworld-futures.com/index.php/id/edukasi/glosarium',
  external: true
}];
export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [lang, setLang] = useState<'ID' | 'EN'>('ID');
  const location = useLocation();
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return <header className={`sticky top-0 z-50 w-full transition-all duration-300 ${isScrolled ? 'shadow-lg' : ''}`}>
      {/* Top Bar - Black */}
      <div className="bg-black text-white text-xs py-1 px-4 hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex space-x-4">
            <Link to="/" className="hover:text-orange-500 transition-colors">
              The Investor Understanding News
            </Link>
            <span className="text-gray-500">|</span>
            <span>Real-time Financial Updates</span>
          </div>
          <div className="flex items-center space-x-4">
            <button onClick={() => setLang(lang === 'ID' ? 'EN' : 'ID')} className="flex items-center hover:text-orange-500 transition-colors">
              <Globe size={12} className="mr-1" />
              {lang === 'ID' ? 'Indonesia' : 'English'}
            </button>
            <div className="flex items-center space-x-2">
              <Link to="/login" className="hover:text-orange-500 transition-colors">
                Login
              </Link>
              <span className="text-gray-500">/</span>
              <Link to="/register" className="hover:text-orange-500 transition-colors">
                Register
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <motion.div className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800" initial={{
      height: 100
    }} animate={{
      height: isScrolled ? 70 : 100
    }} transition={{
      duration: 0.3
    }}>
        <div className="max-w-7xl mx-auto px-4 h-full flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/">
              <img src="/ChatGPT_Image_Nov_30__2025__12_09_11_PM-removebg-preview.png" alt="EWF PRO" className={`transition-all duration-300 ${isScrolled ? 'h-10' : 'h-16'}`} />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center space-x-1 h-full">
            {navItems.map(item => {
            const isActive = location.pathname === item.path;
            if (item.external) {
              return <a key={item.label} href={item.path} target="_blank" rel="noopener noreferrer" className="relative px-3 py-2 text-xs font-bold text-gray-700 dark:text-gray-300 hover:text-orange-600 dark:hover:text-orange-500 transition-colors uppercase tracking-tight">
                    {item.label}
                  </a>;
            }
            return <Link key={item.label} to={item.path} className={`relative px-3 py-2 text-xs font-bold transition-colors uppercase tracking-tight ${isActive ? 'text-orange-600 dark:text-orange-500' : 'text-gray-700 dark:text-gray-300 hover:text-orange-600 dark:hover:text-orange-500'}`}>
                  {item.label}
                  {isActive && <motion.div layoutId="nav-underline" className="absolute bottom-0 left-0 right-0 h-0.5 bg-orange-600" initial={false} transition={{
                type: 'spring',
                stiffness: 500,
                damping: 30
              }} />}
                </Link>;
          })}
          </nav>

          {/* Controls */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="relative">
              <input type="text" placeholder="Search..." className="pl-8 pr-3 py-1.5 text-sm bg-gray-100 dark:bg-gray-800 rounded-full border-none focus:ring-2 focus:ring-orange-500 w-32 focus:w-48 transition-all duration-300" />
              <Search size={14} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>
            <div className="h-6 w-px bg-gray-200 dark:bg-gray-700"></div>
            <FontSizeControl />
            <ThemeToggle />
          </div>

          {/* Mobile Menu Button */}
          <button className="xl:hidden p-2 text-gray-600 dark:text-gray-300" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && <motion.div initial={{
        opacity: 0,
        height: 0
      }} animate={{
        opacity: 1,
        height: 'auto'
      }} exit={{
        opacity: 0,
        height: 0
      }} className="xl:hidden bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 overflow-hidden">
            <div className="p-4 space-y-4">
              <div className="flex justify-between items-center mb-4">
                <FontSizeControl />
                <ThemeToggle />
              </div>
              <div className="grid grid-cols-1 gap-2">
                {navItems.map(item => item.external ? <a key={item.label} href={item.path} target="_blank" rel="noopener noreferrer" className="block px-4 py-3 text-sm font-bold text-gray-700 dark:text-gray-300 hover:bg-orange-50 dark:hover:bg-gray-800 hover:text-orange-600 dark:hover:text-orange-500 rounded-lg transition-colors">
                      {item.label}
                    </a> : <Link key={item.label} to={item.path} onClick={() => setIsMobileMenuOpen(false)} className="block px-4 py-3 text-sm font-bold text-gray-700 dark:text-gray-300 hover:bg-orange-50 dark:hover:bg-gray-800 hover:text-orange-600 dark:hover:text-orange-500 rounded-lg transition-colors">
                      {item.label}
                    </Link>)}
              </div>
              <div className="pt-4 border-t border-gray-100 dark:border-gray-800 flex flex-col space-y-3">
                <Link to="/login" className="w-full py-2 bg-orange-600 text-white text-center rounded-lg font-bold">
                  Login
                </Link>
                <Link to="/register" className="w-full py-2 border border-gray-300 dark:border-gray-700 text-center rounded-lg font-bold text-gray-700 dark:text-gray-300">
                  Register
                </Link>
              </div>
            </div>
          </motion.div>}
      </AnimatePresence>
    </header>;
}