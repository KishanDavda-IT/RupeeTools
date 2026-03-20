'use client';

import { useState } from 'react';
import AdSlot from '@/components/AdSlot';
import { formatCurrency } from '@/lib/utils';

export default function SimpleInterestCalculatorClient() {
  const [principal, setPrincipal] = useState<number>(100000);
  const [rate, setRate] = useState<number>(8);
  const [time, setTime] = useState<number>(5);
  const [result, setResult] = useState<{ interest: number; total: number } | null>(null);

  const calculate = () => {
    const interest = (principal * rate * time) / 100;
    setResult({ interest, total: principal + interest });
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: [{ '@type': 'Question', name: 'What is Simple Interest?', acceptedAnswer: { '@type': 'Answer', text: 'Simple Interest is calculated only on the original principal amount. Unlike compound interest, it does not earn interest on previously accumulated interest.' } }, { '@type': 'Question', name: 'What is the formula for Simple Interest?', acceptedAnswer: { '@type': 'Answer', text: 'SI = (P × R × T) / 100, where P = Principal, R = Annual Rate of Interest, T = Time in years.' } }, { '@type': 'Question', name: 'Where is Simple Interest used?', acceptedAnswer: { '@type': 'Answer', text: 'Simple interest is used in car loans, short-term personal loans, and some savings accounts. Most long-term investments use compound interest.' } }] }) }} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <h1 className="text-3xl md:text-4xl font-bold text-[var(--color-text)] mb-3">Simple Interest Calculator India</h1>
            <p className="text-[var(--color-text-light)] text-lg mb-8">Calculate simple interest and total amount for your investments or loans.</p>
            <AdSlot />
            <div className="bg-white rounded-2xl p-6 md:p-8 border border-[var(--color-border)] shadow-sm mb-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div><label className="block text-sm font-medium text-[var(--color-text)] mb-2">Principal (₹)</label><input type="number" value={principal} onChange={(e) => setPrincipal(Number(e.target.value))} className="calculator-input" min="100" /></div>
                <div><label className="block text-sm font-medium text-[var(--color-text)] mb-2">Rate (% p.a.)</label><input type="number" value={rate} onChange={(e) => setRate(Number(e.target.value))} className="calculator-input" min="0.1" step="0.1" /></div>
                <div><label className="block text-sm font-medium text-[var(--color-text)] mb-2">Time (Years)</label><input type="number" value={time} onChange={(e) => setTime(Number(e.target.value))} className="calculator-input" min="1" /></div>
              </div>
              <button onClick={calculate} className="calculator-btn mt-6">Calculate Simple Interest</button>
            </div>
            {result && (
              <div className="result-card mb-8">
                <h2 className="text-lg font-semibold mb-4">Results</h2>
                <div className="result-item"><div className="text-sm opacity-80">Principal</div><div className="text-2xl font-bold">{formatCurrency(principal)}</div></div>
                <div className="result-item"><div className="text-sm opacity-80">Simple Interest</div><div className="text-2xl font-bold">{formatCurrency(result.interest)}</div></div>
                <div className="result-item"><div className="text-sm opacity-80">Total Amount</div><div className="text-2xl font-bold">{formatCurrency(result.total)}</div></div>
              </div>
            )}
            <AdSlot />
            <div className="bg-white rounded-2xl p-6 md:p-8 border border-[var(--color-border)] mt-8">
              <h2 className="text-xl font-semibold text-[var(--color-text)] mb-4">How Simple Interest Works</h2>
              <div className="prose text-[var(--color-text-light)] text-sm leading-relaxed space-y-3">
                <p className="bg-gray-50 p-4 rounded-lg font-mono text-sm">SI = (P × R × T) / 100</p>
                <p>Where P = Principal, R = Annual Rate, T = Time in years. Simple interest is linear — it grows at a constant rate.</p>
              </div>
            </div>
          </div>
          <div className="lg:col-span-1"><div className="sticky top-24"><AdSlot /></div></div>
        </div>
      </div>
    </>
  );
}
