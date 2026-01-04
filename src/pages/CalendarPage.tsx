import React, { useEffect, useState } from 'react';
import { Header } from '../components/Header';
import { LoadingSpinner } from '../components/LoadingSpinner';
import { api, EconomicEvent } from '../services/mockApi';
import { Calendar as CalendarIcon, Filter, Download } from 'lucide-react';
export function CalendarPage() {
  const [events, setEvents] = useState<EconomicEvent[]>([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      const data = await api.getEconomicCalendar();
      setEvents(data);
      setLoading(false);
    };
    fetchData();
  }, []);
  if (loading) return <div className="min-h-screen">
        <Header />
        <LoadingSpinner />
      </div>;
  return <div className="min-h-screen bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-gray-100">
      <Header />

      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <h1 className="text-3xl font-bold border-l-4 border-orange-600 pl-4">
            Economic Calendar
          </h1>
          <div className="flex space-x-2">
            <button className="flex items-center px-4 py-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg text-sm font-bold hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
              <Filter size={16} className="mr-2" /> Filter
            </button>
            <button className="flex items-center px-4 py-2 bg-orange-600 text-white rounded-lg text-sm font-bold hover:bg-orange-700 transition-colors">
              <Download size={16} className="mr-2" /> Export
            </button>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-900 rounded-xl shadow-sm border border-gray-200 dark:border-gray-800 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead className="bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 text-xs uppercase font-bold">
                <tr>
                  <th className="p-4 w-24">Time</th>
                  <th className="p-4 w-20">Curr</th>
                  <th className="p-4 w-24">Imp</th>
                  <th className="p-4">Event</th>
                  <th className="p-4 w-24">Actual</th>
                  <th className="p-4 w-24">Forecast</th>
                  <th className="p-4 w-24">Previous</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-gray-800">
                {events.map(event => <tr key={event.id} className="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                    <td className="p-4 font-mono text-sm">{event.time}</td>
                    <td className="p-4 font-bold text-sm">{event.country}</td>
                    <td className="p-4">
                      <span className={`
                        inline-block px-2 py-1 rounded text-xs font-bold uppercase
                        ${event.importance === 'high' ? 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400' : event.importance === 'medium' ? 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400' : 'bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300'}
                      `}>
                        {event.importance}
                      </span>
                    </td>
                    <td className="p-4 font-medium">{event.event}</td>
                    <td className="p-4 font-bold">{event.actual || '-'}</td>
                    <td className="p-4 text-gray-500 dark:text-gray-400">
                      {event.forecast}
                    </td>
                    <td className="p-4 text-gray-500 dark:text-gray-400">
                      {event.previous}
                    </td>
                  </tr>)}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>;
}