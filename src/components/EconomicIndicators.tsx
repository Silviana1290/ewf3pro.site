import React from 'react';
import { motion } from 'framer-motion';
interface IndicatorData {
  indicator: string;
  definition: string;
  effectUsd: string;
  effectGold: string;
}
const indicators: IndicatorData[] = [{
  indicator: 'CPI',
  definition: 'Indikator perubahan harga barang dan jasa yg dibeli oleh konsumen. Sebagai acuan indikator inflasi',
  effectUsd: 'CPI NAIK, EKONOMI NAIK, INFLASI NAIK, SUKU BUNGA NAIK, USD NAIK.',
  effectGold: 'TURUN'
}, {
  indicator: 'CORE CPI',
  definition: 'Indikator perubahan harga barang dan jasa yg dibeli oleh konsumen (tidak termasuk bahan pangan dan energi). Sebagai acuan indikator inflasi',
  effectUsd: 'CORE CPI NAIK, EKONOMI NAIK, INFLASI NAIK, SUKU BUNGA NAIK, USD NAIK.',
  effectGold: 'TURUN'
}, {
  indicator: 'PPI',
  definition: 'Indikator perubahan harga bahan baku yg dibeli oleh produsen. Sebagai acuan indikator inflasi',
  effectUsd: 'PPI NAIK, EKONOMI NAIK, INFLASI NAIK, SUKU BUNGA NAIK, USD NAIK.',
  effectGold: 'TURUN'
}, {
  indicator: 'CORE PPI',
  definition: 'Indikator perubahan harga bahan baku yg dibeli oleh produsen (tidak termasuk energi). Sebagai acuan indikator inflasi',
  effectUsd: 'CORE PPI NAIK, EKONOMI NAIK, INFLASI NAIK, SUKU BUNGA NAIK, USD NAIK.',
  effectGold: 'TURUN'
}, {
  indicator: 'INDUSTRIAL PRODUCTIONS',
  definition: 'Tingkat volume produksi semua sektor (pabrik, pertambangan, perusahaan energi)',
  effectUsd: 'INDUSTRIAL PRODUCTION NAIK, EKONOMI NAIK, INFLASI NAIK, SUKU BUNGA NAIK, USD NAIK.',
  effectGold: 'TURUN'
}, {
  indicator: 'DURABLE GOODS',
  definition: 'Tingkat penjualan barang yg memiliki masa hidup 10 tahun atau lebih. Menunjukkan keyakinan masyarakat terhadap ekonomi kedepan.',
  effectUsd: 'DURABLE GOODS NAIK, EKONOMI NAIK, INFLASI NAIK, SUKU BUNGA NAIK, USD NAIK.',
  effectGold: 'TURUN'
}, {
  indicator: 'TRADE BALANCE',
  definition: 'Besar net ekspor suatu negara = volume ekspor - volume impor',
  effectUsd: 'TRADE BALANCE NAIK, EKONOMI NAIK, INFLASI NAIK, SUKU BUNGA NAIK, USD NAIK.',
  effectGold: 'TURUN'
}, {
  indicator: 'BUILDING PERMITS',
  definition: 'Pertumbuhan perijinan pembangunan tempat tinggal/ perumahan',
  effectUsd: 'BUILDING PERMITS NAIK, EKONOMI NAIK, INFLASI NAIK, SUKU BUNGA NAIK, USD NAIK.',
  effectGold: 'TURUN'
}, {
  indicator: 'PENDING HOME SALES',
  definition: 'Jumlah pesanan (orderan) pembelian rumah/ apartemen/ tempat tinggal',
  effectUsd: 'PENDING HOME SALES NAIK, EKONOMI NAIK, INFLASI NAIK, SUKU BUNGA NAIK, USD NAIK.',
  effectGold: 'TURUN'
}, {
  indicator: 'HOUSING STARTS',
  definition: 'Jumlah pembangunan rumah baru',
  effectUsd: 'HOUSING STARTS NAIK, EKONOMI NAIK, INFLASI NAIK, SUKU BUNGA NAIK, USD NAIK.',
  effectGold: 'TURUN'
}, {
  indicator: 'EXISTING HOME SALES',
  definition: 'Jumlah volume transaksi penjualan rumah',
  effectUsd: 'EXISTING HOME SALES NAIK, EKONOMI NAIK, INFLASI NAIK, SUKU BUNGA NAIK, USD NAIK.',
  effectGold: 'TURUN'
}, {
  indicator: 'NEW HOME SALES',
  definition: 'Jumlah volume transaksi penjualan rumah BARU',
  effectUsd: 'NEW HOME SALES NAIK, EKONOMI NAIK, INFLASI NAIK, SUKU BUNGA NAIK, USD NAIK.',
  effectGold: 'TURUN'
}, {
  indicator: 'UNEMPLOYMENT RATE',
  definition: 'Tingkat pertumbuhan pengangguran',
  effectUsd: 'UNEMPLOYMENT RATE NAIK, EKONOMI TURUN, INFLASI TURUN, SUKU BUNGA TURUN, USD TURUN.',
  effectGold: 'NAIK'
}, {
  indicator: 'INITIAL JOBLESS CLAIMS',
  definition: 'Tunjangan sosial yg dibayarkan kepada pengangguran',
  effectUsd: 'INITIAL JOBLESS CLAIMS NAIK, EKONOMI TURUN, INFLASI TURUN, SUKU BUNGA TURUN, USD TURUN.',
  effectGold: 'NAIK'
}, {
  indicator: 'NONFARM PAYROLL',
  definition: 'Pertambahan tenaga kerja baru diluar sektor pertanian',
  effectUsd: 'NONFARM PAYROLL NAIK, EKONOMI NAIK, INFLASI NAIK, SUKU BUNGA NAIK, USD NAIK.',
  effectGold: 'TURUN'
}, {
  indicator: 'RETAIL SALES',
  definition: 'Tingkat penjualan barang retail di negara tersebut',
  effectUsd: 'RETAIL SALES NAIK, EKONOMI NAIK, INFLASI NAIK, SUKU BUNGA NAIK, USD NAIK.',
  effectGold: 'TURUN'
}, {
  indicator: 'FOMC MEETING',
  definition: 'Federal open market commitee = Pertemuan Perwakilan Bank Sentral dari Negara Bagian di US untuk menyampaikan pandangan ekonomi US di negara bagian masing2. Ini berguba untuk menentukan perlu / tidaknya menaikkan suku bunga',
  effectUsd: 'SUKU BUNGA NAIK, USD NAIK',
  effectGold: 'TURUN'
}];
export function EconomicIndicators() {
  return <div className="w-full bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden">
      <div className="p-6 border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center">
          <span className="w-2 h-8 bg-orange-600 mr-3 rounded-full"></span>
          INDIKATOR EKONOMI
        </h2>
        <p className="mt-2 text-gray-600 dark:text-gray-400">
          Panduan lengkap pengaruh indikator ekonomi terhadap USD dan Emas
        </p>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300 text-sm uppercase tracking-wider">
              <th className="p-4 border-b border-gray-200 dark:border-gray-700 font-bold w-1/6">
                Indikator
              </th>
              <th className="p-4 border-b border-gray-200 dark:border-gray-700 font-bold w-1/3">
                Definisi
              </th>
              <th className="p-4 border-b border-gray-200 dark:border-gray-700 font-bold w-1/3">
                Efek ke Ekonomi (USD)
              </th>
              <th className="p-4 border-b border-gray-200 dark:border-gray-700 font-bold w-1/6 text-center">
                Efek ke Emas
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
            {indicators.map((item, index) => <motion.tr key={item.indicator} initial={{
            opacity: 0,
            y: 10
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            delay: index * 0.05
          }} className="hover:bg-orange-50 dark:hover:bg-gray-700/50 transition-colors">
                <td className="p-4 font-bold text-orange-600 dark:text-orange-500 align-top">
                  {item.indicator}
                </td>
                <td className="p-4 text-gray-600 dark:text-gray-300 align-top text-sm leading-relaxed">
                  {item.definition}
                </td>
                <td className="p-4 text-gray-700 dark:text-gray-200 font-medium align-top text-sm leading-relaxed">
                  {item.effectUsd}
                </td>
                <td className="p-4 align-top text-center">
                  <span className={`
                    inline-block px-3 py-1 rounded-full text-xs font-bold
                    ${item.effectGold === 'NAIK' ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400' : 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400'}
                  `}>
                    {item.effectGold}
                  </span>
                </td>
              </motion.tr>)}
          </tbody>
        </table>
      </div>
    </div>;
}