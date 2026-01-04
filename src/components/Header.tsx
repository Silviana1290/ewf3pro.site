import React, { useEffect, useState, useRef } from 'react';
import { Menu, X, Search, Globe, Sun, Moon, Type, User, LogOut } from 'lucide-react';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { useTheme } from '../contexts/ThemeContext';
import { useFontSize } from '../contexts/FontSizeContext';
interface HeaderProps {
  language: 'ID' | 'EN';
  onLanguageChange: (lang: 'ID' | 'EN') => void;
}
export function Header({
  language,
  onLanguageChange
}: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const [fontMenuOpen, setFontMenuOpen] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const {
    user,
    logout,
    isAuthenticated
  } = useAuth();
  const {
    theme,
    toggleTheme
  } = useTheme();
  const {
    fontSize,
    setFontSize
  } = useFontSize();
  const {
    scrollY
  } = useScroll();
  const lastScrollY = useRef(0);
  useMotionValueEvent(scrollY, 'change', latest => {
    const previous = lastScrollY.current;
    if (latest > previous && latest > 150) {
      setIsHidden(true);
    } else {
      setIsHidden(false);
    }
    lastScrollY.current = latest;
  });
  const navItems = [{
    id: 'market',
    label: language === 'ID' ? 'Pasar' : 'Market'
  }, {
    id: 'economy',
    label: language === 'ID' ? 'Ekonomi' : 'Economy'
  }, {
    id: 'commodity',
    label: language === 'ID' ? 'Komoditas' : 'Commodity'
  }, {
    id: 'fiscal',
    label: language === 'ID' ? 'Fiskal & Moneter' : 'Fiscal & Monetary'
  }, {
    id: 'calendar',
    label: language === 'ID' ? 'Kalender' : 'Calendar'
  }, {
    id: 'global',
    label: 'Global'
  }, {
    id: 'analysis',
    label: language === 'ID' ? 'Analisis Pasar' : 'Market Analysis'
  }, {
    id: 'utilities',
    label: language === 'ID' ? 'Utilitas' : 'Utilities'
  }, {
    id: 'news',
    label: language === 'ID' ? 'Arsip Berita' : 'News Archive'
  }, {
    id: 'glossary',
    label: language === 'ID' ? 'Glosarium' : 'Glossary'
  }];
  return <>
      <motion.header variants={{
      visible: {
        y: 0
      },
      hidden: {
        y: '-100%'
      }
    }} animate={isHidden ? 'hidden' : 'visible'} transition={{
      duration: 0.3,
      ease: 'easeInOut'
    }} className="fixed top-0 left-0 right-0 bg-black text-white z-50 shadow-md">
        {/* Top Bar - Black Background */}
        <div className="bg-black border-b border-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-12">
              {/* Desktop Navigation */}
              <nav className="hidden xl:flex items-center space-x-4 overflow-x-auto no-scrollbar">
                {navItems.map(item => item.id === 'glossary' ? <a key={item.id} href="https://www.equityworld-futures.com/index.php/id/edukasi/glosarium" target="_blank" rel="noopener noreferrer" className="text-xs font-medium text-gray-300 hover:text-orange-500 transition-colors whitespace-nowrap uppercase tracking-wide">
                      {item.label}
                    </a> : <Link key={item.id} to={`/${item.id}`} className="text-xs font-medium text-gray-300 hover:text-orange-500 transition-colors whitespace-nowrap uppercase tracking-wide">
                      {item.label}
                    </Link>)}
              </nav>

              {/* Mobile Menu Button */}
              <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="xl:hidden p-2 text-gray-300 hover:text-orange-500">
                <Menu className="w-5 h-5" />
              </button>

              {/* Right Actions */}
              <div className="flex items-center space-x-4">
                {/* Language */}
                <div className="flex items-center space-x-2 text-xs">
                  <button onClick={() => onLanguageChange('ID')} className={`hover:text-orange-500 transition-colors ${language === 'ID' ? 'text-orange-500 font-bold' : 'text-gray-400'}`}>
                    ID
                  </button>
                  <span className="text-gray-600">|</span>
                  <button onClick={() => onLanguageChange('EN')} className={`hover:text-orange-500 transition-colors ${language === 'EN' ? 'text-orange-500 font-bold' : 'text-gray-400'}`}>
                    EN
                  </button>
                </div>

                {/* Theme Toggle */}
                <button onClick={toggleTheme} className="p-1.5 text-gray-400 hover:text-orange-500 transition-colors rounded-full hover:bg-gray-800" aria-label="Toggle Theme">
                  {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
                </button>

                {/* Font Size */}
                <div className="relative">
                  <button onClick={() => setFontMenuOpen(!fontMenuOpen)} className="p-1.5 text-gray-400 hover:text-orange-500 transition-colors rounded-full hover:bg-gray-800">
                    <Type className="w-4 h-4" />
                  </button>
                  {fontMenuOpen && <div className="absolute right-0 mt-2 w-32 bg-white dark:bg-gray-800 rounded-lg shadow-xl py-2 border border-gray-200 dark:border-gray-700">
                      <div className="px-4 py-1 text-xs text-gray-500 dark:text-gray-400">
                        Text Size
                      </div>
                      <button onClick={() => setFontSize('small')} className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700 ${fontSize === 'small' ? 'text-orange-600 font-bold' : 'text-gray-700 dark:text-gray-300'}`}>
                        Small
                      </button>
                      <button onClick={() => setFontSize('medium')} className={`w-full text-left px-4 py-2 text-base hover:bg-gray-100 dark:hover:bg-gray-700 ${fontSize === 'medium' ? 'text-orange-600 font-bold' : 'text-gray-700 dark:text-gray-300'}`}>
                        Medium
                      </button>
                      <button onClick={() => setFontSize('large')} className={`w-full text-left px-4 py-2 text-lg hover:bg-gray-100 dark:hover:bg-gray-700 ${fontSize === 'large' ? 'text-orange-600 font-bold' : 'text-gray-700 dark:text-gray-300'}`}>
                        Large
                      </button>
                    </div>}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Header - White/Dark Background */}
        <div className="bg-white dark:bg-dark-surface border-b border-gray-200 dark:border-gray-700 py-4 transition-colors duration-300">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between">
              {/* Logo */}
              <Link to="/" className="flex items-center space-x-2 group">
                <div className="flex items-center">
                  <span className="text-4xl font-black text-gray-900 dark:text-white tracking-tighter">
                    EWF
                  </span>
                  <span className="text-4xl font-black text-orange-600 tracking-tighter">
                    PRO
                  </span>
                  <div className="ml-2 w-10 h-10 border-2 border-orange-600 rounded-full flex items-center justify-center group-hover:rotate-180 transition-transform duration-500">
                    <Globe className="w-6 h-6 text-orange-600" />
                  </div>
                </div>
                <div className="hidden md:block border-l border-gray-300 dark:border-gray-600 h-10 mx-4"></div>
                <p className="hidden md:block text-xs text-gray-500 dark:text-gray-400 uppercase tracking-widest font-semibold max-w-[120px] leading-tight">
                  The Investor Understanding News
                </p>
              </Link>

              {/* Search & Auth */}
              <div className="flex items-center space-x-4">
                <div className="hidden md:flex relative">
                  <input type="text" placeholder={language === 'ID' ? 'Cari...' : 'Search...'} className="w-64 pl-4 pr-10 py-2 bg-gray-100 dark:bg-gray-800 border-none rounded-lg text-sm focus:ring-2 focus:ring-orange-500 dark:text-white transition-all" />
                  <button className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 hover:text-orange-600">
                    <Search className="w-4 h-4" />
                  </button>
                </div>

                {isAuthenticated ? <div className="relative">
                    <button onClick={() => setUserMenuOpen(!userMenuOpen)} className="flex items-center space-x-2 px-4 py-2 bg-orange-50 dark:bg-orange-900/20 text-orange-700 dark:text-orange-400 rounded-lg hover:bg-orange-100 dark:hover:bg-orange-900/40 transition-colors">
                      <User className="w-4 h-4" />
                      <span className="text-sm font-medium">{user?.name}</span>
                    </button>
                    {userMenuOpen && <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-lg shadow-xl border border-gray-200 dark:border-gray-700 py-2 z-50">
                        <button onClick={() => {
                    logout();
                    setUserMenuOpen(false);
                  }} className="w-full flex items-center space-x-2 px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700">
                          <LogOut className="w-4 h-4" />
                          <span>{language === 'ID' ? 'Keluar' : 'Logout'}</span>
                        </button>
                      </div>}
                  </div> : <div className="flex items-center space-x-2">
                    <Link to="/login" className="px-6 py-2 text-sm font-bold text-white bg-orange-500 hover:bg-orange-600 rounded-md transition-colors shadow-sm">
                      {language === 'ID' ? 'Login' : 'Login'}
                    </Link>
                    <Link to="/register" className="px-6 py-2 text-sm font-bold text-white bg-yellow-500 hover:bg-yellow-600 rounded-md transition-colors shadow-sm">
                      {language === 'ID' ? 'Daftar' : 'Register'}
                    </Link>
                  </div>}
              </div>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && <motion.div initial={{
        opacity: 0,
        x: '100%'
      }} animate={{
        opacity: 1,
        x: 0
      }} exit={{
        opacity: 0,
        x: '100%'
      }} transition={{
        type: 'tween',
        duration: 0.3
      }} className="fixed inset-0 z-50 xl:hidden">
            <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setMobileMenuOpen(false)} />
            <div className="fixed right-0 top-0 bottom-0 w-80 bg-white dark:bg-gray-900 shadow-2xl overflow-y-auto">
              <div className="p-6">
                <div className="flex items-center justify-between mb-8">
                  <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                    Menu
                  </h2>
                  <button onClick={() => setMobileMenuOpen(false)} className="p-2 text-gray-500 hover:text-orange-600">
                    <X className="w-6 h-6" />
                  </button>
                </div>
                <nav className="space-y-1">
                  {navItems.map(item => <Link key={item.id} to={`/${item.id}`} className="block px-4 py-3 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-orange-50 dark:hover:bg-gray-800 hover:text-orange-600 rounded-lg transition-colors" onClick={() => setMobileMenuOpen(false)}>
                      {item.label}
                    </Link>)}
                </nav>
              </div>
            </div>
          </motion.div>}
      </AnimatePresence>
    </>;
}