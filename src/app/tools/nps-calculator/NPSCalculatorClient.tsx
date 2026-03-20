'use client';

import { useState } from 'react';
import AdSlot from '@/components/AdSlot';
import { formatCurrency } from '@/lib/utils';

export default function NPSCalculatorClient() {
  const [monthlyContribution, setMonthlyContribution] = useState<number>(5000);
  const [currentAge, setCurrentAge] = useState<number>(25);
  const [retirementAge, setRetirementAge] = useState<number>(60);
  const [expectedReturn, setExpectedReturn] = useState<number>(10);
  const [result, setResult] = useState<{ totalInvested: number; totalCorpus: number; totalReturns: number } | null>(null);

  const calculate = () => {
    const years = retirementAge - currentAge;
    const months = years * 12;
    const monthlyRate = expectedReturn / 12 / 100;
    const corpus = monthlyContribution * ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate) * (1 + monthlyRate);
    const totalInvested = monthlyContribution * months;
    setResult({ totalInvested, totalCorpus: corpus, totalReturns: corpus - totalInvested });
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: [{ '@type': 'Question', name: 'What is NPS?', acceptedAnswer: { '@type': 'Answer', text: 'National Pension System (NPS) is a government-backed retirement savings scheme. It offers tax benefits under Section 80CCD(1B) up to ₹50,000 additional deduction over 80C limit.' } }, { '@type': 'Question', name: 'What is the minimum contribution for NPS?', acceptedAnswer: { '@type': 'Answer', text: 'Minimum annual contribution is ₹1,000 for Tier-I account. There is no maximum limit. For Tier-II, minimum is ₹250.' } }, { '@type': 'Question', name: 'How much of NPS corpus is taxable?', acceptedAnswer: { '@type': 'Answer', text: 'At retirement, 60% of NPS corpus can be withdrawn tax-free. The remaining 40% must be used to purchase an annuity, which provides regular pension income (taxable as per slab).' } }] }) }} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <h1 className="text-3xl md:text-4xl font-bold text-[var(--color-text)] mb-3">NPS Calculator India 2024</h1>
            <p className="text-[var(--color-text-light)] text-lg mb-8">Calculate your National Pension System corpus at retirement based on monthly contributions.</p>
            <AdSlot />
            <div className="bg-white rounded-2xl p-6 md:p-8 border border-[var(--color-border)] shadow-sm mb-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div><label className="block text-sm font-medium text-[var(--color-text)] mb-2">Monthly Contribution (₹)</label><input type="number" value={monthlyContribution} onChange={(e) => setMonthlyContribution(Number(e.target.value))} className="calculator-input" min="500" step="500" /></div>
                <div><label className="block text-sm font-medium text-[var(--color-text)] mb-2">Current Age</label><input type="number" value={currentAge} onChange={(e) => setCurrentAge(Number(e.target.value))} className="calculator-input" min="18" max="60" /></div>
                <div><label className="block text-sm font-medium text-[var(--color-text)] mb-2">Retirement Age</label><input type="number" value={retirementAge} onChange={(e) => setRetirementAge(Number(e.target.value))} className="calculator-input" min="60" max="75" /></div>
                <div><label className="block text-sm font-medium text-[var(--color-text)] mb-2">Expected Return (% p.a.)</label><input type="number" value={expectedReturn} onChange={(e) => setExpectedReturn(Number(e.target.value))} className="calculator-input" min="8" max="14" step="0.5" /></div>
              </div>
              <button onClick={calculate} className="calculator-btn mt-6">Calculate NPS Corpus</button>
            </div>
            {result && (
              <div className="result-card mb-8">
                <h2 className="text-lg font-semibold mb-4">NPS Results</h2>
                <div className="result-item"><div className="text-sm opacity-80">Total Invested</div><div className="text-2xl font-bold">{formatCurrency(result.totalInvested)}</div></div>
                <div className="result-item"><div className="text-sm opacity-80">Total Returns</div><div className="text-2xl font-bold">{formatCurrency(result.totalReturns)}</div></div>
                <div className="result-item"><div className="text-sm opacity-80">Total Corpus at Retirement</div><div className="text-2xl font-bold">{formatCurrency(result.totalCorpus)}</div></div>
                <div className="result-item"><div className="text-sm opacity-80">Tax-free Withdrawal (60%)</div><div className="text-xl font-bold">{formatCurrency(result.totalCorpus * 0.6)}</div></div>
                <div className="result-item"><div className="text-sm opacity-80">Annuity Purchase (40%)</div><div className="text-xl font-bold">{formatCurrency(result.totalCorpus * 0.4)}</div></div>
              </div>
            )}
            <AdSlot />
            <div className="bg-white rounded-2xl p-6 md:p-8 border border-[var(--color-border)] mt-8">
              <h2 className="text-xl font-semibold text-[var(--color-text)] mb-4">How NPS Calculator Works</h2>
              <div className="prose text-[var(--color-text-light)] text-sm leading-relaxed space-y-3">
                <p>NPS corpus is calculated like SIP using the future value of annuity formula. At retirement, 60% is tax-free lump sum and 40% must buy an annuity.</p>
                <p>Tax benefits: Up to ₹1.5L under 80CCD(1) within 80C limit, plus extra ₹50,000 under 80CCD(1B).</p>
              </div>
            </div>
          </div>
          <div className="lg:col-span-1"><div className="sticky top-24"><AdSlot /></div></div>
        </div>
      </div>
    </>
  );
}
