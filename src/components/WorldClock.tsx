import React, { useEffect, useState } from 'react';
import { Clock } from 'lucide-react';
interface ClockData {
  city: string;
  timezone: string;
  time: string;
}
export function WorldClock() {
  const [clocks, setClocks] = useState<ClockData[]>([{
    city: 'Jakarta',
    timezone: 'Asia/Jakarta',
    time: ''
  }, {
    city: 'Tokyo',
    timezone: 'Asia/Tokyo',
    time: ''
  }, {
    city: 'Hongkong',
    timezone: 'Asia/Hong_Kong',
    time: ''
  }, {
    city: 'New York',
    timezone: 'America/New_York',
    time: ''
  }]);
  const [currentDate, setCurrentDate] = useState('');
  useEffect(() => {
    const updateTimes = () => {
      const now = new Date();
      setCurrentDate(now.toLocaleDateString('en-GB', {
        weekday: 'long',
        day: 'numeric',
        month: 'long',
        year: 'numeric'
      }));
      setClocks(prevClocks => prevClocks.map(clock => ({
        ...clock,
        time: new Date().toLocaleTimeString('en-GB', {
          timeZone: clock.timezone,
          hour: '2-digit',
          minute: '2-digit',
          hour12: false
        })
      })));
    };
    updateTimes();
    const interval = setInterval(updateTimes, 1000);
    return () => clearInterval(interval);
  }, []);
  return <div className="bg-white dark:bg-dark-surface border-b border-gray-200 dark:border-gray-700 py-3 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center text-gray-600 dark:text-gray-300">
            <Clock className="w-5 h-5 mr-2 text-orange-600" />
            <span className="font-medium">{currentDate}</span>
          </div>

          <div className="flex items-center space-x-6 overflow-x-auto no-scrollbar w-full sm:w-auto justify-center sm:justify-end">
            {clocks.map(clock => <div key={clock.city} className="flex flex-col items-center">
                <span className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-0.5">
                  {clock.city}
                </span>
                <span className="text-lg font-bold text-orange-600 font-mono">
                  {clock.time}
                </span>
              </div>)}
          </div>
        </div>
      </div>
    </div>;
}