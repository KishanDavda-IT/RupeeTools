'use client';

import { useState } from 'react';
import AdSlot from '@/components/AdSlot';
import { formatCurrency, formatPercent } from '@/lib/utils';

export default function ROICalculatorClient() {
  const [initialInvestment, setInitialInvestment] = useState<number>(100000);
  const [finalValue, setFinalValue] = useState<number>(180000);
  const [timePeriod, setTimePeriod] = useState<number>(3);
  const [result, setResult] = useState<{ roi: number; annualizedReturn: number; profit: number } | null>(null);

  const calculate = () => {
    const profit = finalValue - initialInvestment;
    const roi = (profit / initialInvestment) * 100;
    const annualizedReturn = (Math.pow(finalValue / initialInvestment, 1 / timePeriod) - 1) * 100;
    setResult({ roi, annualizedReturn, profit });
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: [{ '@type': 'Question', name: 'What is ROI?', acceptedAnswer: { '@type': 'Answer', text: 'ROI (Return on Investment) measures the gain or loss on an investment relative to the original cost. It\'s expressed as a percentage: ROI = (Profit / Cost) × 100.' } }, { '@type': 'Question', name: 'What is annualized return?', acceptedAnswer: { '@type': 'Answer', text: 'Annualized return (CAGR) converts total return over multiple years to an equivalent yearly rate. It accounts for compounding and is better for comparing investments of different durations.' } }, { '@type': 'Question', name: 'What is a good ROI?', acceptedAnswer: { '@type': 'Answer', text: 'A "good" ROI depends on the investment type. Stock market: 12-15% annual, FDs: 6-8%, Real estate: 8-12%. Any ROI above the inflation rate (~6%) means positive real returns.' } }] }) }} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <h1 className="text-3xl md:text-4xl font-bold text-[var(--color-text)] mb-3">ROI Calculator India 2024</h1>
            <p className="text-[var(--color-text-light)] text-lg mb-8">Calculate Return on Investment (ROI) percentage and annualized returns for any investment.</p>
            <AdSlot />
            <div className="bg-white rounded-2xl p-6 md:p-8 border border-[var(--color-border)] shadow-sm mb-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div><label className="block text-sm font-medium text-[var(--color-text)] mb-2">Initial Investment (₹)</label><input type="number" value={initialInvestment} onChange={(e) => setInitialInvestment(Number(e.target.value))} className="calculator-input" min="100" /></div>
                <div><label className="block text-sm font-medium text-[var(--color-text)] mb-2">Final Value (₹)</label><input type="number" value={finalValue} onChange={(e) => setFinalValue(Number(e.target.value))} className="calculator-input" min="0" /></div>
                <div><label className="block text-sm font-medium text-[var(--color-text)] mb-2">Time Period (Years)</label><input type="number" value={timePeriod} onChange={(e) => setTimePeriod(Number(e.target.value))} className="calculator-input" min="0.5" step="0.5" /></div>
              </div>
              <button onClick={calculate} className="calculator-btn mt-6">Calculate ROI</button>
            </div>
            {result && (
              <div className="result-card mb-8">
                <h2 className="text-lg font-semibold mb-4">ROI Results</h2>
                <div className="result-item"><div className="text-sm opacity-80">Total Profit/Loss</div><div className="text-2xl font-bold">{formatCurrency(result.profit)}</div></div>
                <div className="result-item"><div className="text-sm opacity-80">Total ROI</div><div className="text-2xl font-bold">{formatPercent(result.roi)}</div></div>
                <div className="result-item"><div className="text-sm opacity-80">Annualized Return (CAGR)</div><div className="text-2xl font-bold">{formatPercent(result.annualizedReturn)}</div></div>
              </div>
            )}
            <AdSlot />
            <div className="bg-white rounded-2xl p-6 md:p-8 border border-[var(--color-border)] mt-8">
              <h2 className="text-xl font-semibold text-[var(--color-text)] mb-4">How ROI Calculator Works</h2>
              <div className="prose text-[var(--color-text-light)] text-sm leading-relaxed space-y-3">
                <p className="bg-gray-50 p-4 rounded-lg font-mono text-sm">ROI = ((Final Value - Initial Investment) / Initial Investment) × 100<br/>CAGR = (Final/Initial)^(1/years) - 1</p>
                <p>ROI gives total return, while CAGR (annualized return) accounts for compounding and time, making it better for comparing different investments.</p>
              </div>
            </div>
          </div>
          <div className="lg:col-span-1"><div className="sticky top-24"><AdSlot /></div></div>
        </div>
      </div>
    </>
  );
}
