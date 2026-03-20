'use client';

import { useState } from 'react';
import AdSlot from '@/components/AdSlot';
import { formatCurrency } from '@/lib/utils';

export default function PPFCalculatorClient() {
  const [yearlyInvestment, setYearlyInvestment] = useState<number>(150000);
  const [years, setYears] = useState<number>(15);
  const [rate] = useState<number>(7.1);
  const [result, setResult] = useState<{ invested: number; interest: number; maturity: number } | null>(null);

  const calculate = () => {
    let balance = 0;
    const r = rate / 100;
    for (let i = 0; i < years; i++) {
      balance = (balance + yearlyInvestment) * (1 + r);
    }
    const invested = yearlyInvestment * years;
    setResult({ invested, interest: balance - invested, maturity: balance });
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: [{ '@type': 'Question', name: 'What is the current PPF interest rate?', acceptedAnswer: { '@type': 'Answer', text: 'The current PPF interest rate is 7.1% per annum (as of 2024), compounded annually. The rate is reviewed quarterly by the government.' } }, { '@type': 'Question', name: 'What is the lock-in period for PPF?', acceptedAnswer: { '@type': 'Answer', text: 'PPF has a lock-in period of 15 years. Partial withdrawals are allowed from the 7th financial year. The account can be extended in blocks of 5 years after maturity.' } }, { '@type': 'Question', name: 'Is PPF interest taxable?', acceptedAnswer: { '@type': 'Answer', text: 'No, PPF falls under the EEE (Exempt-Exempt-Exempt) category. The investment, interest earned, and maturity amount are all tax-free. You can claim up to ₹1.5 lakh deduction under Section 80C.' } }] }) }} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <h1 className="text-3xl md:text-4xl font-bold text-[var(--color-text)] mb-3">PPF Calculator India 2024</h1>
            <p className="text-[var(--color-text-light)] text-lg mb-8">Calculate your Public Provident Fund maturity amount. PPF offers tax-free returns with EEE status under Section 80C.</p>
            <AdSlot />
            <div className="bg-white rounded-2xl p-6 md:p-8 border border-[var(--color-border)] shadow-sm mb-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div><label className="block text-sm font-medium text-[var(--color-text)] mb-2">Yearly Investment (₹)</label><input type="number" value={yearlyInvestment} onChange={(e) => setYearlyInvestment(Number(e.target.value))} className="calculator-input" min="500" max="150000" step="1000" /></div>
                <div><label className="block text-sm font-medium text-[var(--color-text)] mb-2">Time Period (Years)</label><input type="number" value={years} onChange={(e) => setYears(Math.max(15, Number(e.target.value)))} className="calculator-input" min="15" max="50" /></div>
                <div><label className="block text-sm font-medium text-[var(--color-text)] mb-2">Interest Rate (% p.a.)</label><input type="number" value={rate} readOnly className="calculator-input bg-gray-50" /><p className="text-xs text-[var(--color-text-lighter)] mt-1">Current govt. rate</p></div>
              </div>
              <button onClick={calculate} className="calculator-btn mt-6">Calculate PPF Returns</button>
            </div>
            {result && (
              <div className="result-card mb-8">
                <h2 className="text-lg font-semibold mb-4">PPF Results</h2>
                <div className="result-item"><div className="text-sm opacity-80">Total Invested</div><div className="text-2xl font-bold">{formatCurrency(result.invested)}</div></div>
                <div className="result-item"><div className="text-sm opacity-80">Total Interest Earned</div><div className="text-2xl font-bold">{formatCurrency(result.interest)}</div></div>
                <div className="result-item"><div className="text-sm opacity-80">Maturity Amount</div><div className="text-2xl font-bold">{formatCurrency(result.maturity)}</div></div>
              </div>
            )}
            <AdSlot />
            <div className="bg-white rounded-2xl p-6 md:p-8 border border-[var(--color-border)] mt-8">
              <h2 className="text-xl font-semibold text-[var(--color-text)] mb-4">How PPF Calculator Works</h2>
              <div className="prose text-[var(--color-text-light)] text-sm leading-relaxed space-y-3">
                <p>PPF interest is compounded annually. For each year: Balance = (Previous Balance + Annual Deposit) × (1 + r)</p>
                <p>Key PPF features: Min ₹500/year, Max ₹1.5 lakh/year, 15-year lock-in, EEE tax benefit, Section 80C deduction.</p>
              </div>
            </div>
          </div>
          <div className="lg:col-span-1"><div className="sticky top-24"><AdSlot /></div></div>
        </div>
      </div>
    </>
  );
}
