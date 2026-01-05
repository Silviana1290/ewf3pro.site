import React, { useState, useRef } from 'react';
import {
  Menu, X, Search, Globe, Sun, Moon, Type, User, LogOut
} from 'lucide-react';
import {
  motion, AnimatePresence, useScroll, useMotionValueEvent
} from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { useTheme } from '../contexts/ThemeContext';
import { useFontSize } from '../contexts/FontSizeContext';

interface HeaderProps {
  language: 'ID' | 'EN';
  onLanguageChange: (lang: 'ID' | 'EN') => void;
}

export function Header({ language, onLanguageChange }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const [fontMenuOpen, setFontMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isHidden, setIsHidden] = useState(false);

  const navigate = useNavigate();
  const lastScrollY = useRef(0);

  const { user, logout, isAuthenticated } = useAuth();
  const { theme, toggleTheme } = useTheme();
  const { fontSize, setFontSize } = useFontSize();
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, 'change', latest => {
    const previous = lastScrollY.current;
    if (latest > previous && latest > 150) {
      setIsHidden(true);
    } else {
      setIsHidden(false);
    }
    lastScrollY.current = latest;
  });

  const handleSearch = () => {
    if (!searchQuery.trim()) return;
    navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
    setSearchQuery('');
  };

  const navItems = [
    { id: 'market', label: language === 'ID' ? 'Pasar' : 'Market' },
    { id: 'economy', label: language === 'ID' ? 'Ekonomi' : 'Economy' },
    { id: 'commodity', label: language === 'ID' ? 'Komoditas' : 'Commodity' },
    { id: 'calendar', label: language === 'ID' ? 'Kalender' : 'Calendar' },
    { id: 'analysis', label: language === 'ID' ? 'Analisis Pasar' : 'Market Analysis' },
    { id: 'utilities', label: language === 'ID' ? 'Utilitas' : 'Utilities' },
    { id: 'news', label: language === 'ID' ? 'Arsip Berita' : 'News Archive' },
    { id: 'glossary', label: language === 'ID' ? 'Glosarium' : 'Glossary' }
  ];

  return (
    <>
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

        {/* top bar */}
        <div className="bg-black border-b border-gray-800">
          <div className="max-w-7xl mx-auto px-6 h-12 flex items-center justify-between">

            <nav className="hidden xl:flex gap-4 text-xs uppercase tracking-wide">
              {navItems.map(item => (
                <Link
                  key={item.id}
                  to={`/${item.id}`}
                  className="text-gray-300 hover:text-orange-500 transition"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <button
              className="xl:hidden text-gray-300 hover:text-orange-500"
              onClick={() => setMobileMenuOpen(true)}
            >
              <Menu className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 text-xs">
              <button
                onClick={() => onLanguageChange('ID')}
                className={language === 'ID' ? 'text-orange-500 font-bold' : 'text-gray-400'}
              >
                ID
              </button>
              |
              <button
                onClick={() => onLanguageChange('EN')}
                className={language === 'EN' ? 'text-orange-500 font-bold' : 'text-gray-400'}
              >
                EN
              </button>

              <button onClick={toggleTheme}>
                {theme === 'dark'
                  ? <Sun className="w-4 h-4 text-gray-400" />
                  : <Moon className="w-4 h-4 text-gray-400" />}
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

        {/* ===== MAIN HEADER ===== */}
        <div className="bg-white dark:bg-gray-900 border-b py-4">
          <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">

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

            {/* SEARCH */}
            <div className="hidden md:flex relative">
              <input
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                onKeyDown={e => e.key === 'Enter' && handleSearch()}
                placeholder={language === 'ID' ? 'Cari...' : 'Search...'}
                className="w-64 pl-4 pr-10 py-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-sm focus:ring-2 focus:ring-orange-500"
              />
              <button
                onClick={handleSearch}
                className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 hover:text-orange-600"
              >
                <Search className="w-4 h-4" />
              </button>
            </div>

            {/* AUTH */}
            {isAuthenticated ? (
              <div className="relative">
                <button
                  onClick={() => setUserMenuOpen(!userMenuOpen)}
                  className="px-4 py-2 bg-orange-100 text-orange-700 rounded-lg flex items-center gap-2"
                >
                  <User className="w-4 h-4" />
                  {user?.name}
                </button>

                {userMenuOpen && (
                  <div className="absolute right-0 mt-2 bg-white shadow-lg rounded-lg">
                    <button
                      onClick={logout}
                      className="flex items-center gap-2 px-4 py-2 text-sm hover:bg-gray-100"
                    >
                      <LogOut className="w-4 h-4" />
                      Logout
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <div className="flex gap-2">
                <Link to="/login" className="px-4 py-2 bg-orange-500 text-white rounded-md">
                  Login
                </Link>
                <Link to="/register" className="px-4 py-2 bg-yellow-500 text-white rounded-md">
                  Register
                </Link>
              </div>
            )}

          </div>
        </div>
      </motion.header>

      {/* ===== MOBILE MENU ===== */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-black/50"
          >
            <div className="absolute right-0 top-0 bottom-0 w-80 bg-white p-6">
              <button onClick={() => setMobileMenuOpen(false)}>
                <X />
              </button>

              <nav className="mt-6 space-y-2">
                {navItems.map(item => (
                  <Link
                    key={item.id}
                    to={`/${item.id}`}
                    className="block px-4 py-2 rounded hover:bg-orange-50"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
