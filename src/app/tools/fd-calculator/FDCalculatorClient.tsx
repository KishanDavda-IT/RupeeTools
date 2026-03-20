'use client';

import { useState } from 'react';
import AdSlot from '@/components/AdSlot';
import { formatCurrency } from '@/lib/utils';

export default function FDCalculatorClient() {
  const [principal, setPrincipal] = useState<number>(100000);
  const [rate, setRate] = useState<number>(7);
  const [tenure, setTenure] = useState<number>(5);
  const [compounding, setCompounding] = useState<number>(4);
  const [result, setResult] = useState<{ maturity: number; interest: number } | null>(null);

  const calculate = () => {
    const maturity = principal * Math.pow(1 + rate / (100 * compounding), compounding * tenure);
    const interest = maturity - principal;
    setResult({ maturity, interest });
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: [{ '@type': 'Question', name: 'What is an FD Calculator?', acceptedAnswer: { '@type': 'Answer', text: 'An FD Calculator helps estimate the maturity amount and interest earned on a Fixed Deposit based on principal, interest rate, tenure, and compounding frequency.' } }, { '@type': 'Question', name: 'How often is FD interest compounded?', acceptedAnswer: { '@type': 'Answer', text: 'Most banks compound FD interest quarterly. Some may offer monthly or yearly compounding. Quarterly compounding gives higher returns than annual compounding at the same rate.' } }, { '@type': 'Question', name: 'Is FD interest taxable in India?', acceptedAnswer: { '@type': 'Answer', text: 'Yes, FD interest is taxable as per your income tax slab. TDS of 10% is deducted if interest exceeds ₹40,000/year (₹50,000 for senior citizens). You can submit Form 15G/15H to avoid TDS if total income is below taxable limit.' } }] }) }} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <h1 className="text-3xl md:text-4xl font-bold text-[var(--color-text)] mb-3">FD Calculator India 2024</h1>
            <p className="text-[var(--color-text-light)] text-lg mb-8">Calculate Fixed Deposit maturity amount and interest earned with different compounding frequencies.</p>
            <AdSlot />
            <div className="bg-white rounded-2xl p-6 md:p-8 border border-[var(--color-border)] shadow-sm mb-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div><label className="block text-sm font-medium text-[var(--color-text)] mb-2">Principal Amount (₹)</label><input type="number" value={principal} onChange={(e) => setPrincipal(Number(e.target.value))} className="calculator-input" min="1000" step="1000" /></div>
                <div><label className="block text-sm font-medium text-[var(--color-text)] mb-2">Interest Rate (% p.a.)</label><input type="number" value={rate} onChange={(e) => setRate(Number(e.target.value))} className="calculator-input" min="1" max="15" step="0.1" /></div>
                <div><label className="block text-sm font-medium text-[var(--color-text)] mb-2">Tenure (Years)</label><input type="number" value={tenure} onChange={(e) => setTenure(Number(e.target.value))} className="calculator-input" min="1" max="20" /></div>
                <div><label className="block text-sm font-medium text-[var(--color-text)] mb-2">Compounding Frequency</label><select value={compounding} onChange={(e) => setCompounding(Number(e.target.value))} className="calculator-input"><option value={1}>Yearly</option><option value={2}>Half-Yearly</option><option value={4}>Quarterly</option><option value={12}>Monthly</option></select></div>
              </div>
              <button onClick={calculate} className="calculator-btn mt-6">Calculate FD Returns</button>
            </div>
            {result && (
              <div className="result-card mb-8">
                <h2 className="text-lg font-semibold mb-4">FD Results</h2>
                <div className="result-item"><div className="text-sm opacity-80">Principal Amount</div><div className="text-2xl font-bold">{formatCurrency(principal)}</div></div>
                <div className="result-item"><div className="text-sm opacity-80">Interest Earned</div><div className="text-2xl font-bold">{formatCurrency(result.interest)}</div></div>
                <div className="result-item"><div className="text-sm opacity-80">Maturity Amount</div><div className="text-2xl font-bold">{formatCurrency(result.maturity)}</div></div>
              </div>
            )}
            <AdSlot />
            <div className="bg-white rounded-2xl p-6 md:p-8 border border-[var(--color-border)] mt-8">
              <h2 className="text-xl font-semibold text-[var(--color-text)] mb-4">How FD Calculator Works</h2>
              <div className="prose text-[var(--color-text-light)] text-sm leading-relaxed space-y-3">
                <p>Fixed Deposit maturity is calculated using compound interest formula:</p>
                <p className="bg-gray-50 p-4 rounded-lg font-mono text-sm">A = P × (1 + r/n)^(n×t)</p>
                <ul className="list-disc pl-5 space-y-1"><li><strong>A</strong> = Maturity amount</li><li><strong>P</strong> = Principal</li><li><strong>r</strong> = Annual interest rate (decimal)</li><li><strong>n</strong> = Compounding frequency per year</li><li><strong>t</strong> = Tenure in years</li></ul>
              </div>
            </div>
          </div>
          <div className="lg:col-span-1"><div className="sticky top-24"><AdSlot /></div></div>
        </div>
      </div>
    </>
  );
}
