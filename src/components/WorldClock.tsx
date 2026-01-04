import React, { useEffect, useState } from 'react';
import { Clock } from 'lucide-react';
interface CityTime {
  city: string;
  timezone: string;
  label: string;
}
const cities: CityTime[] = [{
  city: 'Jakarta',
  timezone: 'Asia/Jakarta',
  label: 'Jakarta'
}, {
  city: 'Tokyo',
  timezone: 'Asia/Tokyo',
  label: 'Tokyo'
}, {
  city: 'Hong Kong',
  timezone: 'Asia/Hong_Kong',
  label: 'Hongkong'
}, {
  city: 'New York',
  timezone: 'America/New_York',
  label: 'New York'
}];
export function WorldClock() {
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);
  const formatTime = (timezone: string) => {
    return new Intl.DateTimeFormat('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: false,
      timeZone: timezone
    }).format(time);
  };
  return <div className="bg-gray-50 dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 py-2 px-4">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4 text-sm">
        <div className="flex items-center text-gray-500 dark:text-gray-400">
          <Clock size={16} className="mr-2" />
          <span className="font-medium">
            {time.toLocaleDateString('en-US', {
            weekday: 'long',
            day: 'numeric',
            month: 'long',
            year: 'numeric'
          })}
          </span>
        </div>

        <div className="flex items-center space-x-6 overflow-x-auto no-scrollbar">
          {cities.map(city => <div key={city.city} className="flex flex-col items-center">
              <span className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                {city.label}
              </span>
              <span className="font-bold text-orange-600 dark:text-orange-500 font-mono text-lg leading-none">
                {formatTime(city.timezone)}
              </span>
            </div>)}
        </div>
      </div>
    </div>;
}