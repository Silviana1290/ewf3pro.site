import React, { useState } from 'react';
import { Header } from '../components/Header';
import { Calculator, DollarSign, Percent, RefreshCw } from 'lucide-react';
export function UtilitiesPage() {
  const [amount, setAmount] = useState(1000);
  const [rate, setRate] = useState(1.085);
  return <div className="min-h-screen bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-gray-100">
      <Header />

      <main className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold border-l-4 border-orange-600 pl-4 mb-8">
          Trading Utilities
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Currency Converter */}
          <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-800">
            <div className="flex items-center mb-4 text-orange-600">
              <RefreshCw className="mr-2" />
              <h2 className="text-xl font-bold">Currency Converter</h2>
            </div>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">
                  Amount (USD)
                </label>
                <input type="number" value={amount} onChange={e => setAmount(Number(e.target.value))} className="w-full p-2 border rounded dark:bg-gray-800 dark:border-gray-700" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  Rate (EUR/USD)
                </label>
                <input type="number" value={rate} onChange={e => setRate(Number(e.target.value))} className="w-full p-2 border rounded dark:bg-gray-800 dark:border-gray-700" />
              </div>
              <div className="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg text-center">
                <div className="text-sm text-gray-500">Result (EUR)</div>
                <div className="text-2xl font-bold">
                  {(amount / rate).toFixed(2)}
                </div>
              </div>
            </div>
          </div>

          {/* Pip Calculator */}
          <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-800">
            <div className="flex items-center mb-4 text-orange-600">
              <Calculator className="mr-2" />
              <h2 className="text-xl font-bold">Pip Calculator</h2>
            </div>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Pair</label>
                <select className="w-full p-2 border rounded dark:bg-gray-800 dark:border-gray-700">
                  <option>EUR/USD</option>
                  <option>GBP/USD</option>
                  <option>USD/JPY</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  Lot Size
                </label>
                <input type="number" defaultValue={1} className="w-full p-2 border rounded dark:bg-gray-800 dark:border-gray-700" />
              </div>
              <button className="w-full bg-orange-600 text-white py-2 rounded font-bold hover:bg-orange-700">
                Calculate
              </button>
            </div>
          </div>

          {/* Margin Calculator */}
          <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-800">
            <div className="flex items-center mb-4 text-orange-600">
              <Percent className="mr-2" />
              <h2 className="text-xl font-bold">Margin Calculator</h2>
            </div>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">
                  Leverage
                </label>
                <select className="w-full p-2 border rounded dark:bg-gray-800 dark:border-gray-700">
                  <option>1:100</option>
                  <option>1:200</option>
                  <option>1:500</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  Account Currency
                </label>
                <select className="w-full p-2 border rounded dark:bg-gray-800 dark:border-gray-700">
                  <option>USD</option>
                  <option>EUR</option>
                  <option>IDR</option>
                </select>
              </div>
              <button className="w-full bg-orange-600 text-white py-2 rounded font-bold hover:bg-orange-700">
                Calculate
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>;
}