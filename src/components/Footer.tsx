import React from 'react';
import { Globe } from 'lucide-react';
interface FooterProps {
  language: 'ID' | 'EN';
}
export function Footer({
  language
}: FooterProps) {
  return <footer className="bg-black text-white py-16 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <span className="text-3xl font-black tracking-tighter">EWF</span>
              <span className="text-3xl font-black text-orange-600 tracking-tighter">
                PRO
              </span>
              <div className="w-8 h-8 border-2 border-orange-600 rounded-full flex items-center justify-center">
                <Globe className="w-4 h-4 text-orange-600" />
              </div>
            </div>
            <p className="text-gray-400 text-sm mb-6 max-w-md leading-relaxed">
              {language === 'ID' ? 'Platform berita finansial terpercaya dengan update real-time dari sumber global terkemuka. Memberikan wawasan pasar yang akurat dan tepat waktu untuk keputusan investasi Anda.' : 'Trusted financial news platform with real-time updates from leading global sources. Providing accurate and timely market insights for your investment decisions.'}
            </p>
            <p className="text-gray-600 text-xs">
              © 2025 EWFPRO.{' '}
              {language === 'ID' ? 'Hak Cipta Dilindungi.' : 'All rights reserved.'}
            </p>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider mb-6 text-orange-600">
              {language === 'ID' ? 'Navigasi' : 'Navigation'}
            </h3>
            <ul className="space-y-3 text-sm text-gray-400">
              {['Market', 'Economy', 'Commodity', 'Calendar', 'Analysis'].map(item => <li key={item}>
                    <a href={`#${item.toLowerCase()}`} className="hover:text-white hover:translate-x-1 transition-all duration-200 inline-block">
                      {item}
                    </a>
                  </li>)}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider mb-6 text-orange-600">
              {language === 'ID' ? 'Sumber Berita' : 'News Sources'}
            </h3>
            <ul className="space-y-3 text-sm text-gray-400">
              {['CNBC', 'Reuters', 'Investing.com', 'Trading Economics'].map(source => <li key={source} className="flex items-center">
                    <span className="w-1.5 h-1.5 bg-orange-600 rounded-full mr-2"></span>
                    {source}
                  </li>)}
            </ul>
          </div>
        </div>
      </div>
    </footer>;
}