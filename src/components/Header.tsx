import { useState, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  Menu,
  X,
  Search,
  Globe,
  Sun,
  Moon,
  Type,
  User,
  LogOut
} from 'lucide-react';
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent
} from 'framer-motion';

import { useAuth } from '../hooks/useAuth';
import { useTheme } from '../contexts/ThemeContext';
import { useFontSize } from '../contexts/FontSizeContext';

interface HeaderProps {
  language: 'ID' | 'EN';
  onLanguageChange: (lang: 'ID' | 'EN') => void;
}

export function Header({ language, onLanguageChange }: HeaderProps) {
  const navigate = useNavigate();
  const lastScrollY = useRef(0);

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const [fontMenuOpen, setFontMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isHidden, setIsHidden] = useState(false);

  const { user, logout, isAuthenticated } = useAuth();
  const { theme, toggleTheme } = useTheme();
  const { fontSize, setFontSize } = useFontSize();
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, 'change', latest => {
    const prev = lastScrollY.current;
    setIsHidden(latest > prev && latest > 150);
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
      {/* ===== HEADER ===== */}
      <motion.header
        animate={{ y: isHidden ? '-100%' : 0 }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className="fixed inset-x-0 top-0 z-50 bg-black text-white shadow-md"
      >
        {/* TOP BAR */}
        <div className="border-b border-gray-800">
          <div className="max-w-7xl mx-auto px-6 h-12 flex items-center justify-between">

            <nav className="hidden xl:flex gap-4 text-xs uppercase">
              {navItems.map(item => (
                <Link
                  key={item.id}
                  to={`/${item.id}`}
                  className="text-gray-300 hover:text-orange-500"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <button
              className="xl:hidden text-gray-400 hover:text-orange-500"
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

              {/* FONT SIZE */}
              <div className="relative">
                <button
                  onClick={() => setFontMenuOpen(v => !v)}
                  className="p-1.5 rounded-full hover:bg-gray-800"
                >
                  <Type className="w-4 h-4" />
                </button>

                {fontMenuOpen && (
                  <div className="absolute right-0 mt-2 w-32 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
                    {['small', 'medium', 'large'].map(size => (
                      <button
                        key={size}
                        onClick={() => setFontSize(size as any)}
                        className={`block w-full px-4 py-2 text-left hover:bg-gray-100 dark:hover:bg-gray-700
                          ${fontSize === size ? 'text-orange-600 font-bold' : ''}`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* MAIN HEADER */}
        <div className="bg-white dark:bg-gray-900 border-b py-4">
          <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">

            <Link to="/" className="flex items-center gap-2">
              <span className="text-4xl font-black text-gray-900 dark:text-white">EWF</span>
              <span className="text-4xl font-black text-orange-600">PRO</span>
              <Globe className="w-6 h-6 text-orange-600 ml-2" />
            </Link>

            <div className="hidden md:flex relative">
              <input
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                onKeyDown={e => e.key === 'Enter' && handleSearch()}
                placeholder={language === 'ID' ? 'Cari...' : 'Search...'}
                className="w-64 pl-4 pr-10 py-2 rounded-lg bg-gray-100 dark:bg-gray-800"
              />
              <button
                onClick={handleSearch}
                className="absolute right-3 top-1/2 -translate-y-1/2"
              >
                <Search className="w-4 h-4 text-gray-400" />
              </button>
            </div>

            {isAuthenticated ? (
              <div className="relative">
                <button
                  onClick={() => setUserMenuOpen(v => !v)}
                  className="px-4 py-2 bg-orange-100 text-orange-700 rounded-lg flex items-center gap-2"
                >
                  <User className="w-4 h-4" />
                  {user?.name}
                </button>

                {userMenuOpen && (
                  <div className="absolute right-0 mt-2 bg-white rounded-lg shadow">
                    <button
                      onClick={logout}
                      className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 w-full"
                    >
                      <LogOut className="w-4 h-4" />
                      Logout
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <div className="flex gap-2">
                <Link to="/login" className="px-4 py-2 bg-orange-500 text-white rounded">
                  Login
                </Link>
                <Link to="/register" className="px-4 py-2 bg-yellow-500 text-white rounded">
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
            <div className="absolute right-0 w-80 h-full bg-white p-6">
              <button onClick={() => setMobileMenuOpen(false)}>
                <X />
              </button>

              <nav className="mt-6 space-y-2">
                {navItems.map(item => (
                  <Link
                    key={item.id}
                    to={`/${item.id}`}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block px-4 py-2 rounded hover:bg-orange-50"
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
