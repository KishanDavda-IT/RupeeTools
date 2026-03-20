'use client';

import { useState } from 'react';
import AdSlot from '@/components/AdSlot';
import { formatCurrency } from '@/lib/utils';

export default function CompoundInterestClient() {
  const [principal, setPrincipal] = useState<number>(100000);
  const [rate, setRate] = useState<number>(8);
  const [time, setTime] = useState<number>(5);
  const [frequency, setFrequency] = useState<number>(4);
  const [result, setResult] = useState<{ amount: number; interest: number } | null>(null);

  const calculate = () => {
    const amount = principal * Math.pow(1 + rate / (100 * frequency), frequency * time);
    setResult({ amount, interest: amount - principal });
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: [{ '@type': 'Question', name: 'What is Compound Interest?', acceptedAnswer: { '@type': 'Answer', text: 'Compound Interest is interest calculated on both the initial principal and the accumulated interest from previous periods. This "interest on interest" effect makes money grow faster.' } }, { '@type': 'Question', name: 'What is the formula for Compound Interest?', acceptedAnswer: { '@type': 'Answer', text: 'A = P × (1 + r/n)^(n×t), where P = Principal, r = Annual rate, n = Compounding frequency per year, t = Time in years.' } }, { '@type': 'Question', name: 'How does compounding frequency affect returns?', acceptedAnswer: { '@type': 'Answer', text: 'More frequent compounding results in higher returns. Monthly compounding gives more than quarterly, which gives more than annual compounding, for the same rate and principal.' } }] }) }} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <h1 className="text-3xl md:text-4xl font-bold text-[var(--color-text)] mb-3">Compound Interest Calculator India</h1>
            <p className="text-[var(--color-text-light)] text-lg mb-8">Calculate compound interest with various compounding frequencies — monthly, quarterly, half-yearly, or yearly.</p>
            <AdSlot />
            <div className="bg-white rounded-2xl p-6 md:p-8 border border-[var(--color-border)] shadow-sm mb-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div><label className="block text-sm font-medium text-[var(--color-text)] mb-2">Principal (₹)</label><input type="number" value={principal} onChange={(e) => setPrincipal(Number(e.target.value))} className="calculator-input" min="100" /></div>
                <div><label className="block text-sm font-medium text-[var(--color-text)] mb-2">Rate (% p.a.)</label><input type="number" value={rate} onChange={(e) => setRate(Number(e.target.value))} className="calculator-input" min="0.1" step="0.1" /></div>
                <div><label className="block text-sm font-medium text-[var(--color-text)] mb-2">Time (Years)</label><input type="number" value={time} onChange={(e) => setTime(Number(e.target.value))} className="calculator-input" min="1" /></div>
                <div><label className="block text-sm font-medium text-[var(--color-text)] mb-2">Compounding Frequency</label><select value={frequency} onChange={(e) => setFrequency(Number(e.target.value))} className="calculator-input"><option value={1}>Yearly</option><option value={2}>Half-Yearly</option><option value={4}>Quarterly</option><option value={12}>Monthly</option></select></div>
              </div>
              <button onClick={calculate} className="calculator-btn mt-6">Calculate Compound Interest</button>
            </div>
            {result && (
              <div className="result-card mb-8">
                <h2 className="text-lg font-semibold mb-4">Results</h2>
                <div className="result-item"><div className="text-sm opacity-80">Principal</div><div className="text-2xl font-bold">{formatCurrency(principal)}</div></div>
                <div className="result-item"><div className="text-sm opacity-80">Compound Interest</div><div className="text-2xl font-bold">{formatCurrency(result.interest)}</div></div>
                <div className="result-item"><div className="text-sm opacity-80">Total Amount</div><div className="text-2xl font-bold">{formatCurrency(result.amount)}</div></div>
              </div>
            )}
            <AdSlot />
            <div className="bg-white rounded-2xl p-6 md:p-8 border border-[var(--color-border)] mt-8">
              <h2 className="text-xl font-semibold text-[var(--color-text)] mb-4">How Compound Interest Works</h2>
              <div className="prose text-[var(--color-text-light)] text-sm leading-relaxed space-y-3">
                <p className="bg-gray-50 p-4 rounded-lg font-mono text-sm">A = P × (1 + r/n)^(n×t)</p>
                <p>Where P = Principal, r = Annual rate (decimal), n = Compounding frequency, t = Time in years. The magic of compounding makes your money grow exponentially over time.</p>
              </div>
            </div>
          </div>
          <div className="lg:col-span-1"><div className="sticky top-24"><AdSlot /></div></div>
        </div>
      </div>
    </>
  );
}
