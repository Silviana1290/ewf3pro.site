import { Clock, TrendingUp, TrendingDown, DollarSign, BarChart3, Globe, Activity } from 'lucide-react';

// Types
export interface NewsArticle {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  source: string;
  timestamp: string;
  imageUrl: string;
  category: string;
  originalUrl: string;
  publishedAt: Date;
  readTime?: string;
  author?: string;
}
export interface MarketData {
  symbol: string;
  name: string;
  price: number;
  change: number;
  changePercent: number;
  high: number;
  low: number;
  volume: string;
}
export interface EconomicEvent {
  id: string;
  time: string;
  date: Date;
  country: string;
  event: string;
  actual: string;
  forecast: string;
  previous: string;
  impact: 'high' | 'medium' | 'low';
}

// Mock Data Generators

const generatePrice = (base: number) => {
  const change = (Math.random() - 0.5) * (base * 0.02);
  return base + change;
};
export const fetchMarketData = async (): Promise<MarketData[]> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 500));
  return [{
    symbol: 'EUR/USD',
    name: 'Euro US Dollar',
    price: generatePrice(1.085),
    change: 0.0023,
    changePercent: 0.21,
    high: 1.088,
    low: 1.082,
    volume: '125K'
  }, {
    symbol: 'GBP/USD',
    name: 'British Pound',
    price: generatePrice(1.264),
    change: -0.0015,
    changePercent: -0.12,
    high: 1.268,
    low: 1.261,
    volume: '98K'
  }, {
    symbol: 'USD/JPY',
    name: 'US Dollar Yen',
    price: generatePrice(151.2),
    change: 0.45,
    changePercent: 0.3,
    high: 151.5,
    low: 150.8,
    volume: '150K'
  }, {
    symbol: 'XAU/USD',
    name: 'Gold',
    price: generatePrice(2345.5),
    change: 25.4,
    changePercent: 1.2,
    high: 2350.0,
    low: 2320.0,
    volume: '45K'
  }, {
    symbol: 'WTI',
    name: 'Crude Oil',
    price: generatePrice(85.4),
    change: -0.35,
    changePercent: -0.45,
    high: 86.2,
    low: 84.8,
    volume: '82K'
  }, {
    symbol: 'BTC/USD',
    name: 'Bitcoin',
    price: generatePrice(69420.0),
    change: 1250.0,
    changePercent: 2.5,
    high: 70000.0,
    low: 68000.0,
    volume: '2.1M'
  }, {
    symbol: 'DJIA',
    name: 'Dow Jones',
    price: generatePrice(39807.0),
    change: 150.0,
    changePercent: 0.38,
    high: 39900.0,
    low: 39600.0,
    volume: '350M'
  }, {
    symbol: 'SPX',
    name: 'S&P 500',
    price: generatePrice(5250.0),
    change: 25.0,
    changePercent: 0.48,
    high: 5260.0,
    low: 5230.0,
    volume: '2.5B'
  }, {
    symbol: 'NDX',
    name: 'Nasdaq 100',
    price: generatePrice(18300.0),
    change: 120.0,
    changePercent: 0.66,
    high: 18350.0,
    low: 18200.0,
    volume: '1.8B'
  }];
};
export const fetchNews = async (category?: string, limit: number = 10): Promise<NewsArticle[]> => {
  await new Promise(resolve => setTimeout(resolve, 800));
  const news: NewsArticle[] = [{
    id: '1',
    title: 'Fed Chair Powell Signals Rate Cuts Coming Later This Year',
    excerpt: 'Federal Reserve Chair Jerome Powell reiterated that the central bank expects to reduce interest rates this year, though the timing remains uncertain.',
    content: 'Full content...',
    source: 'CNBC',
    timestamp: '2 hours ago',
    imageUrl: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&h=600&fit=crop',
    category: 'Fiscal & Monetary',
    originalUrl: '#',
    publishedAt: new Date(),
    readTime: '5 min read',
    author: 'Jeff Cox'
  }, {
    id: '2',
    title: 'Gold Prices Hit Record Highs on Central Bank Buying',
    excerpt: 'Spot gold prices surged to a new all-time high as central banks continue to accumulate the precious metal amid geopolitical tensions.',
    content: 'Full content...',
    source: 'Reuters',
    timestamp: '4 hours ago',
    imageUrl: 'https://images.unsplash.com/photo-1610375461246-83df859d849d?w=800&h=600&fit=crop',
    category: 'Commodity',
    originalUrl: '#',
    publishedAt: new Date(),
    readTime: '4 min read',
    author: 'Peter Hobson'
  }, {
    id: '3',
    title: 'Tech Stocks Rally as AI Demand Shows No Signs of Slowing',
    excerpt: 'Major technology companies saw their shares jump today as earnings reports confirmed robust demand for artificial intelligence infrastructure.',
    content: 'Full content...',
    source: 'Bloomberg',
    timestamp: '5 hours ago',
    imageUrl: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=600&fit=crop',
    category: 'Market',
    originalUrl: '#',
    publishedAt: new Date(),
    readTime: '6 min read',
    author: 'Jeran Wittenstein'
  }, {
    id: '4',
    title: 'ECB Leaves Rates Unchanged, Hints at June Cut',
    excerpt: 'The European Central Bank kept interest rates at record highs but paved the way for a rate cut in June as inflation falls.',
    content: 'Full content...',
    source: 'Financial Times',
    timestamp: '6 hours ago',
    imageUrl: 'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=800&h=600&fit=crop',
    category: 'Economy',
    originalUrl: '#',
    publishedAt: new Date(),
    readTime: '3 min read',
    author: 'Martin Arnold'
  }, {
    id: '5',
    title: 'Oil Prices Stabilize After Volatile Week',
    excerpt: 'Crude oil futures held steady as traders weighed supply risks in the Middle East against demand concerns.',
    content: 'Full content...',
    source: 'Investing.com',
    timestamp: '8 hours ago',
    imageUrl: 'https://images.unsplash.com/photo-1564514239975-0d0b9e2d1f6f?w=800&h=600&fit=crop',
    category: 'Commodity',
    originalUrl: '#',
    publishedAt: new Date(),
    readTime: '4 min read',
    author: 'Barani Krishnan'
  }, {
    id: '6',
    title: 'Global Manufacturing PMI Shows Signs of Recovery',
    excerpt: 'Manufacturing activity across major economies expanded for the first time in months, suggesting a global economic turnaround.',
    content: 'Full content...',
    source: 'Trading Economics',
    timestamp: '10 hours ago',
    imageUrl: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop',
    category: 'Global',
    originalUrl: '#',
    publishedAt: new Date(),
    readTime: '5 min read',
    author: 'Economic Team'
  }];
  if (category && category !== 'all') {
    return news.filter(n => n.category.toLowerCase().includes(category.toLowerCase()) || category.toLowerCase().includes(n.category.toLowerCase()));
  }
  return news.slice(0, limit);
};
export const fetchEconomicCalendar = async (): Promise<EconomicEvent[]> => {
  await new Promise(resolve => setTimeout(resolve, 600));
  return [{
    id: '1',
    time: '13:30',
    date: new Date(),
    country: 'USA',
    event: 'Non-Farm Payrolls',
    actual: '303K',
    forecast: '200K',
    previous: '275K',
    impact: 'high'
  }, {
    id: '2',
    time: '13:30',
    date: new Date(),
    country: 'USA',
    event: 'Unemployment Rate',
    actual: '3.8%',
    forecast: '3.9%',
    previous: '3.9%',
    impact: 'high'
  }, {
    id: '3',
    time: '15:00',
    date: new Date(),
    country: 'CAN',
    event: 'Ivey PMI',
    actual: '57.5',
    forecast: '54.2',
    previous: '53.9',
    impact: 'medium'
  }, {
    id: '4',
    time: '09:00',
    date: new Date(),
    country: 'EUR',
    event: 'CPI (YoY)',
    actual: '2.4%',
    forecast: '2.4%',
    previous: '2.6%',
    impact: 'high'
  }, {
    id: '5',
    time: '07:00',
    date: new Date(),
    country: 'GBP',
    event: 'GDP (MoM)',
    actual: '0.1%',
    forecast: '0.1%',
    previous: '0.2%',
    impact: 'high'
  }, {
    id: '6',
    time: '19:00',
    date: new Date(),
    country: 'USA',
    event: 'Baker Hughes Oil Rig Count',
    actual: '508',
    forecast: '',
    previous: '506',
    impact: 'low'
  }];
};