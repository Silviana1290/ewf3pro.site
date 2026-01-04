import { Calendar, TrendingUp, DollarSign, Globe, BarChart2 } from 'lucide-react';

// Types
export interface Article {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  date: string;
  author: string;
  category: string;
  source: 'CNBC' | 'Reuters' | 'Investing.com' | 'Trading Economics';
  sourceUrl: string;
  tags: string[];
  readTime: number;
}
export interface MarketData {
  symbol: string;
  name: string;
  value: string;
  change: string;
  changePercent: string;
  isUp: boolean;
  timestamp: string;
}
export interface EconomicEvent {
  id: string;
  date: string;
  time: string;
  country: string;
  event: string;
  importance: 'high' | 'medium' | 'low';
  forecast: string;
  previous: string;
  actual?: string;
}

// Mock Data
const MOCK_ARTICLES: Article[] = [{
  id: '1',
  title: 'Data JOLTS Jadi Kunci Arah Pasar Tenaga Kerja',
  excerpt: 'Laporan lowongan pekerjaan AS (JOLTS) menjadi sorotan utama investor minggu ini sebagai indikator kesehatan pasar tenaga kerja di tengah ketidakpastian kebijakan The Fed.',
  content: `<p>Laporan lowongan pekerjaan AS (JOLTS) menjadi sorotan utama investor minggu ini sebagai indikator kesehatan pasar tenaga kerja di tengah ketidakpastian kebijakan The Fed. Data ini diharapkan memberikan gambaran lebih jelas mengenai apakah pasar tenaga kerja mulai mendingin atau masih tetap ketat.</p>
    <h2>Pentingnya Data JOLTS</h2>
    <p>JOLTS (Job Openings and Labor Turnover Survey) adalah salah satu indikator favorit The Fed untuk mengukur ketatnya pasar tenaga kerja. Jika jumlah lowongan kerja masih tinggi, ini bisa menjadi sinyal bahwa tekanan upah masih ada, yang pada gilirannya dapat memicu inflasi.</p>
    <p>Sebaliknya, penurunan tajam dalam lowongan kerja bisa menjadi tanda awal resesi atau perlambatan ekonomi yang lebih dalam dari yang diperkirakan. Investor akan mencermati rasio lowongan kerja terhadap jumlah pengangguran.</p>
    <h2>Reaksi Pasar</h2>
    <p>Pasar saham dan obligasi diperkirakan akan bereaksi volatil terhadap rilis data ini. Angka yang lebih kuat dari perkiraan dapat mendorong imbal hasil obligasi naik dan menekan aset berisiko, sementara angka yang lemah bisa memicu harapan pemangkasan suku bunga lebih cepat.</p>`,
  image: 'https://images.unsplash.com/photo-1611974765270-ca1258634369?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  date: 'Tuesday, 9 December 2025',
  author: 'Market Analyst',
  category: 'ECONOMY',
  source: 'CNBC',
  sourceUrl: 'https://www.cnbc.com',
  tags: ['JOLTS', 'Labor Market', 'The Fed', 'USD'],
  readTime: 5
}, {
  id: '2',
  title: 'Lowongan JOLTS AS Lampaui Ekspektasi, Dukung Prospek Penguatan Dolar',
  excerpt: 'Angka JOLTS yang lebih tinggi dari perkiraan menunjukkan permintaan tenaga kerja yang masih kuat, memberikan alasan bagi The Fed untuk mempertahankan suku bunga tinggi lebih lama.',
  content: `<p>Angka JOLTS yang lebih tinggi dari perkiraan menunjukkan permintaan tenaga kerja yang masih kuat, memberikan alasan bagi The Fed untuk mempertahankan suku bunga tinggi lebih lama. Dolar AS menguat tajam terhadap mata uang utama lainnya segera setelah rilis data tersebut.</p>
    <h2>Detail Laporan</h2>
    <p>Biro Statistik Tenaga Kerja AS melaporkan bahwa lowongan pekerjaan meningkat menjadi 9,6 juta pada bulan lalu, jauh di atas ekspektasi pasar sebesar 9,3 juta. Sektor jasa dan perhotelan menjadi penyumbang terbesar kenaikan ini.</p>
    <p>Kenaikan ini mengejutkan banyak analis yang memperkirakan tren penurunan akan berlanjut seiring dengan dampak kumulatif dari kenaikan suku bunga The Fed selama setahun terakhir.</p>
    <h2>Implikasi Kebijakan</h2>
    <p>Dengan pasar tenaga kerja yang masih sangat ketat, The Fed mungkin merasa perlu untuk mempertahankan sikap hawkish mereka. "Higher for longer" tampaknya masih menjadi narasi utama yang akan mendominasi pasar dalam beberapa bulan ke depan.</p>`,
  image: 'https://images.unsplash.com/photo-1526304640152-d4619684e484?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  date: 'Tuesday, 9 December 2025',
  author: 'Forex Strategist',
  category: 'MARKET',
  source: 'Investing.com',
  sourceUrl: 'https://www.investing.com',
  tags: ['USD', 'Forex', 'Interest Rates'],
  readTime: 4
}, {
  id: '3',
  title: 'Pasar Eropa Lesu Di Awal Pekan, Semua Mata Tertuju Ke The Fed',
  excerpt: 'Bursa saham Eropa dibuka melemah pada awal pekan ini karena investor mengambil sikap hati-hati menjelang serangkaian data ekonomi penting dari AS dan keputusan bank sentral.',
  content: `<p>Bursa saham Eropa dibuka melemah pada awal pekan ini karena investor mengambil sikap hati-hati menjelang serangkaian data ekonomi penting dari AS dan keputusan bank sentral. Indeks STOXX 600 turun 0,5% di awal perdagangan.</p>
    <p>Sektor teknologi dan pertambangan memimpin penurunan, sementara sektor defensif seperti utilitas dan kesehatan relatif stabil. Ketidakpastian mengenai arah kebijakan moneter global terus membayangi sentimen investor.</p>`,
  image: 'https://images.unsplash.com/photo-1518186285589-2f7649de83e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  date: 'Monday, 8 December 2025',
  author: 'Global Desk',
  category: 'GLOBAL',
  source: 'Reuters',
  sourceUrl: 'https://www.reuters.com',
  tags: ['Europe', 'Stocks', 'ECB'],
  readTime: 3
}, {
  id: '4',
  title: 'Harga Emas Tertekan Menguatnya Dolar AS',
  excerpt: 'Harga emas dunia kembali tertekan di bawah level psikologis $2000 per troy ons seiring dengan penguatan indeks Dolar AS pasca rilis data ekonomi yang solid.',
  content: `<p>Harga emas dunia kembali tertekan di bawah level psikologis $2000 per troy ons seiring dengan penguatan indeks Dolar AS pasca rilis data ekonomi yang solid. Logam mulia ini sangat sensitif terhadap pergerakan suku bunga AS karena tidak memberikan imbal hasil (yield).</p>
    <p>Analisis teknikal menunjukkan bahwa jika level support $1980 ditembus, emas bisa meluncur lebih jauh ke area $1950. Namun, permintaan fisik dari bank sentral negara berkembang masih menjadi penopang harga dalam jangka panjang.</p>`,
  image: 'https://images.unsplash.com/photo-1610375461246-83df859d849d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  date: 'Wednesday, 10 December 2025',
  author: 'Commodity Expert',
  category: 'COMMODITY',
  source: 'Trading Economics',
  sourceUrl: 'https://tradingeconomics.com',
  tags: ['Gold', 'XAUUSD', 'Commodities'],
  readTime: 4
}, {
  id: '5',
  title: 'Analisa Teknikal: IHSG Berpotensi Rebound',
  excerpt: 'Indeks Harga Saham Gabungan (IHSG) berpotensi melakukan rebound teknikal setelah menyentuh area oversold pada perdagangan kemarin.',
  content: `<p>Indeks Harga Saham Gabungan (IHSG) berpotensi melakukan rebound teknikal setelah menyentuh area oversold pada perdagangan kemarin. Indikator RSI menunjukkan divergensi positif yang bisa menjadi sinyal pembalikan arah jangka pendek.</p>
    <p>Level support kuat berada di 6.800, sementara resisten terdekat di 6.950. Investor disarankan untuk melakukan akumulasi bertahap pada saham-saham blue chip yang memiliki fundamental kuat namun harganya sudah terdiskon cukup dalam.</p>`,
  image: 'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  date: 'Wednesday, 10 December 2025',
  author: 'Technical Analyst',
  category: 'MARKET ANALYSIS',
  source: 'EWF PRO',
  sourceUrl: '#',
  tags: ['IHSG', 'Technical Analysis', 'Stocks'],
  readTime: 6
}];
const MOCK_MARKET_DATA: MarketData[] = [{
  symbol: 'EUR/USD',
  name: 'Euro US Dollar',
  value: '1.0845',
  change: '+0.0012',
  changePercent: '+0.12%',
  isUp: true,
  timestamp: 'Now'
}, {
  symbol: 'GBP/USD',
  name: 'British Pound',
  value: '1.2630',
  change: '-0.0005',
  changePercent: '-0.05%',
  isUp: false,
  timestamp: 'Now'
}, {
  symbol: 'USD/JPY',
  name: 'US Dollar Yen',
  value: '151.20',
  change: '+0.45',
  changePercent: '+0.30%',
  isUp: true,
  timestamp: 'Now'
}, {
  symbol: 'XAU/USD',
  name: 'Gold',
  value: '2,345.50',
  change: '+28.50',
  changePercent: '+1.20%',
  isUp: true,
  timestamp: 'Now'
}, {
  symbol: 'WTI',
  name: 'Crude Oil',
  value: '85.40',
  change: '-0.38',
  changePercent: '-0.45%',
  isUp: false,
  timestamp: 'Now'
}, {
  symbol: 'BTC/USD',
  name: 'Bitcoin',
  value: '69,420.00',
  change: '+1500.00',
  changePercent: '+2.50%',
  isUp: true,
  timestamp: 'Now'
}, {
  symbol: 'DJIA',
  name: 'Dow Jones',
  value: '39,807.00',
  change: '+65.00',
  changePercent: '+0.15%',
  isUp: true,
  timestamp: 'Now'
}, {
  symbol: 'S&P 500',
  name: 'S&P 500',
  value: '5,254.00',
  change: '+5.20',
  changePercent: '+0.10%',
  isUp: true,
  timestamp: 'Now'
}, {
  symbol: 'NASDAQ',
  name: 'Nasdaq 100',
  value: '16,428.00',
  change: '-16.50',
  changePercent: '-0.10%',
  isUp: false,
  timestamp: 'Now'
}, {
  symbol: 'IHSG',
  name: 'Jakarta Composite',
  value: '7,250.00',
  change: '+35.00',
  changePercent: '+0.48%',
  isUp: true,
  timestamp: 'Now'
}];
const MOCK_CALENDAR: EconomicEvent[] = [{
  id: '1',
  date: '2025-12-09',
  time: '19:30',
  country: 'USD',
  event: 'CPI m/m',
  importance: 'high',
  forecast: '0.3%',
  previous: '0.2%'
}, {
  id: '2',
  date: '2025-12-09',
  time: '19:30',
  country: 'USD',
  event: 'Core CPI m/m',
  importance: 'high',
  forecast: '0.3%',
  previous: '0.3%'
}, {
  id: '3',
  date: '2025-12-10',
  time: '01:00',
  country: 'USD',
  event: 'FOMC Meeting Minutes',
  importance: 'high',
  forecast: '-',
  previous: '-'
}, {
  id: '4',
  date: '2025-12-10',
  time: '13:00',
  country: 'GBP',
  event: 'GDP m/m',
  importance: 'medium',
  forecast: '0.1%',
  previous: '0.2%'
}, {
  id: '5',
  date: '2025-12-11',
  time: '19:15',
  country: 'EUR',
  event: 'Main Refinancing Rate',
  importance: 'high',
  forecast: '4.50%',
  previous: '4.50%'
}];

// API Service
export const api = {
  getArticles: async (category?: string): Promise<Article[]> => {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 800));
    if (category && category !== 'ALL') {
      return MOCK_ARTICLES.filter(a => a.category === category);
    }
    return MOCK_ARTICLES;
  },
  getArticleById: async (id: string): Promise<Article | undefined> => {
    await new Promise(resolve => setTimeout(resolve, 500));
    return MOCK_ARTICLES.find(a => a.id === id);
  },
  getMarketData: async (): Promise<MarketData[]> => {
    await new Promise(resolve => setTimeout(resolve, 300));
    return MOCK_MARKET_DATA;
  },
  getEconomicCalendar: async (): Promise<EconomicEvent[]> => {
    await new Promise(resolve => setTimeout(resolve, 600));
    return MOCK_CALENDAR;
  },
  getRelatedArticles: async (currentId: string): Promise<Article[]> => {
    await new Promise(resolve => setTimeout(resolve, 400));
    return MOCK_ARTICLES.filter(a => a.id !== currentId).slice(0, 3);
  }
};