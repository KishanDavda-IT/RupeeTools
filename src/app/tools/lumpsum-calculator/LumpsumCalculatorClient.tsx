'use client';

import { useState } from 'react';
import AdSlot from '@/components/AdSlot';
import ResultPieChart from '@/components/ResultPieChart';
import { formatCurrency } from '@/lib/utils';

export default function LumpsumCalculatorClient() {
  const [investment, setInvestment] = useState<number>(500000);
  const [returnRate, setReturnRate] = useState<number>(12);
  const [years, setYears] = useState<number>(10);
  const [result, setResult] = useState<{ invested: number; returns: number; total: number } | null>(null);

  const calculate = () => {
    const total = investment * Math.pow(1 + returnRate / 100, years);
    setResult({ invested: investment, returns: total - investment, total });
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: [{ '@type': 'Question', name: 'What is a lumpsum investment?', acceptedAnswer: { '@type': 'Answer', text: 'A lumpsum investment is a one-time investment of a large amount in mutual funds, as opposed to SIP which involves periodic smaller investments.' } }, { '@type': 'Question', name: 'Is lumpsum better than SIP?', acceptedAnswer: { '@type': 'Answer', text: 'Lumpsum works better in a rising market, while SIP is better for volatile markets due to rupee cost averaging. SIP is recommended for salaried individuals.' } }, { '@type': 'Question', name: 'How is lumpsum return calculated?', acceptedAnswer: { '@type': 'Answer', text: 'Lumpsum return uses compound interest: Future Value = P × (1 + r)^t, where P is the invested amount, r is the annual return rate, and t is the number of years.' } }] }) }} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <h1 className="text-3xl md:text-4xl font-bold text-[var(--color-text)] mb-3">Lumpsum Calculator India 2024</h1>
            <p className="text-[var(--color-text-light)] text-lg mb-8">Calculate returns on your one-time lump sum investment in mutual funds.</p>
            <AdSlot />
            <div className="bg-white rounded-2xl p-6 md:p-8 border border-[var(--color-border)] shadow-sm mb-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div><label className="block text-sm font-medium text-[var(--color-text)] mb-2">Investment Amount (₹)</label><input type="number" value={investment} onChange={(e) => setInvestment(Number(e.target.value))} className="calculator-input" min="1000" step="1000" /></div>
                <div><label className="block text-sm font-medium text-[var(--color-text)] mb-2">Expected Return (% p.a.)</label><input type="number" value={returnRate} onChange={(e) => setReturnRate(Number(e.target.value))} className="calculator-input" min="1" max="30" step="0.5" /></div>
                <div><label className="block text-sm font-medium text-[var(--color-text)] mb-2">Time Period (Years)</label><input type="number" value={years} onChange={(e) => setYears(Number(e.target.value))} className="calculator-input" min="1" max="30" /></div>
              </div>
              <button onClick={calculate} className="calculator-btn mt-6">Calculate Returns</button>
            </div>
            {result && (
              <div className="mb-8">
                <div className="result-card mb-6">
                  <h2 className="text-lg font-semibold mb-4">Lumpsum Results</h2>
                  <div className="result-item"><div className="text-sm opacity-80">Invested Amount</div><div className="text-2xl font-bold">{formatCurrency(result.invested)}</div></div>
                  <div className="result-item"><div className="text-sm opacity-80">Estimated Returns</div><div className="text-2xl font-bold">{formatCurrency(result.returns)}</div></div>
                  <div className="result-item"><div className="text-sm opacity-80">Total Value</div><div className="text-2xl font-bold">{formatCurrency(result.total)}</div></div>
                </div>
                <div className="bg-white rounded-2xl p-6 border border-[var(--color-border)]"><h3 className="text-lg font-semibold mb-4">Breakdown</h3><ResultPieChart data={[{ name: 'Invested', value: result.invested }, { name: 'Returns', value: result.returns }]} /></div>
              </div>
            )}
            <AdSlot />
            <div className="bg-white rounded-2xl p-6 md:p-8 border border-[var(--color-border)] mt-8">
              <h2 className="text-xl font-semibold text-[var(--color-text)] mb-4">How Lumpsum Calculator Works</h2>
              <div className="prose text-[var(--color-text-light)] text-sm leading-relaxed space-y-3">
                <p>Lumpsum returns use compound interest: <strong>FV = P × (1 + r)^t</strong></p>
                <p>Where P = Principal, r = Annual return rate (decimal), t = Time in years.</p>
              </div>
            </div>
          </div>
          <div className="lg:col-span-1"><div className="sticky top-24"><AdSlot /></div></div>
        </div>
      </div>
    </>
  );
}
