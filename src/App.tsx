import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import { FontSizeProvider } from './contexts/FontSizeContext';
import { HomePage } from './pages/HomePage';
import { MarketPage } from './pages/MarketPage';
import { CalendarPage } from './pages/CalendarPage';
import { UtilitiesPage } from './pages/UtilitiesPage';
import { ArticleDetailPage } from './pages/ArticleDetailPage';
import { CategoryPage } from './pages/CategoryPage';
import { LoginPage } from './pages/LoginPage';
import { RegisterPage } from './pages/RegisterPage';
// Placeholder pages for those not fully implemented yet but needed for routing
const PlaceholderPage = ({
  title
}: {
  title: string;
}) => <div className="min-h-screen bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-gray-100">
    <div className="max-w-7xl mx-auto px-4 py-20 text-center">
      <h1 className="text-4xl font-bold mb-4">{title}</h1>
      <p className="text-xl text-gray-500">This page is under construction.</p>
    </div>
  </div>;
export function App() {
  return <ThemeProvider>
      <FontSizeProvider>
        <Router>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/market" element={<MarketPage />} />
            <Route path="/economy" element={<CategoryPage />} />
            <Route path="/commodity" element={<CategoryPage />} />
            <Route path="/fiscal-monetary" element={<CategoryPage />} />
            <Route path="/calendar" element={<CalendarPage />} />
            <Route path="/global" element={<CategoryPage />} />
            <Route path="/market-analysis" element={<CategoryPage />} />
            <Route path="/utilities" element={<UtilitiesPage />} />
            <Route path="/article/:id" element={<ArticleDetailPage />} />
            <Route path="/category/:category" element={<CategoryPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
          </Routes>
        </Router>
      </FontSizeProvider>
    </ThemeProvider>;
}