'use client';

import { useState } from 'react';
import AdSlot from '@/components/AdSlot';
import { formatCurrency } from '@/lib/utils';

export default function StepupSIPClient() {
  const [monthlySIP, setMonthlySIP] = useState<number>(5000);
  const [stepUpPercent, setStepUpPercent] = useState<number>(10);
  const [returnRate, setReturnRate] = useState<number>(12);
  const [years, setYears] = useState<number>(20);
  const [result, setResult] = useState<{ totalInvested: number; totalCorpus: number; totalReturns: number } | null>(null);

  const calculate = () => {
    const monthlyRate = returnRate / 12 / 100;
    let totalCorpus = 0;
    let totalInvested = 0;
    let currentSIP = monthlySIP;

    for (let year = 0; year < years; year++) {
      for (let month = 0; month < 12; month++) {
        totalInvested += currentSIP;
        const remainingMonths = (years - year) * 12 - month;
        totalCorpus += currentSIP * Math.pow(1 + monthlyRate, remainingMonths);
      }
      currentSIP = currentSIP * (1 + stepUpPercent / 100);
    }

    setResult({ totalInvested, totalCorpus, totalReturns: totalCorpus - totalInvested });
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: [{ '@type': 'Question', name: 'What is a Step-up SIP?', acceptedAnswer: { '@type': 'Answer', text: 'A Step-up SIP (also called Top-up SIP) is where you increase your SIP amount annually by a fixed percentage. This helps align investments with salary growth and builds wealth faster.' } }, { '@type': 'Question', name: 'How much should I step up my SIP?', acceptedAnswer: { '@type': 'Answer', text: 'A 10% annual step-up is common, matching average salary increments. Even a 5% step-up can significantly increase your corpus over 20+ years compared to a flat SIP.' } }, { '@type': 'Question', name: 'How does step-up SIP compare to regular SIP?', acceptedAnswer: { '@type': 'Answer', text: 'A ₹5,000 monthly SIP with 10% annual step-up at 12% returns for 20 years gives approximately ₹76 lakh vs ₹49 lakh for regular SIP — that is 55% more corpus.' } }] }) }} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <h1 className="text-3xl md:text-4xl font-bold text-[var(--color-text)] mb-3">Step-up SIP Calculator India 2024</h1>
            <p className="text-[var(--color-text-light)] text-lg mb-8">Calculate SIP returns with annual step-up in monthly investment. Grow your wealth faster with increasing SIP amounts.</p>
            <AdSlot />
            <div className="bg-white rounded-2xl p-6 md:p-8 border border-[var(--color-border)] shadow-sm mb-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div><label className="block text-sm font-medium text-[var(--color-text)] mb-2">Monthly SIP (₹)</label><input type="number" value={monthlySIP} onChange={(e) => setMonthlySIP(Number(e.target.value))} className="calculator-input" min="500" step="500" /></div>
                <div><label className="block text-sm font-medium text-[var(--color-text)] mb-2">Annual Step-up (%)</label><input type="number" value={stepUpPercent} onChange={(e) => setStepUpPercent(Number(e.target.value))} className="calculator-input" min="0" max="50" step="1" /></div>
                <div><label className="block text-sm font-medium text-[var(--color-text)] mb-2">Expected Return (% p.a.)</label><input type="number" value={returnRate} onChange={(e) => setReturnRate(Number(e.target.value))} className="calculator-input" min="1" max="30" step="0.5" /></div>
                <div><label className="block text-sm font-medium text-[var(--color-text)] mb-2">Time Period (Years)</label><input type="number" value={years} onChange={(e) => setYears(Number(e.target.value))} className="calculator-input" min="1" max="40" /></div>
              </div>
              <button onClick={calculate} className="calculator-btn mt-6">Calculate Step-up SIP</button>
            </div>
            {result && (
              <div className="result-card mb-8">
                <h2 className="text-lg font-semibold mb-4">Step-up SIP Results</h2>
                <div className="result-item"><div className="text-sm opacity-80">Total Invested</div><div className="text-2xl font-bold">{formatCurrency(result.totalInvested)}</div></div>
                <div className="result-item"><div className="text-sm opacity-80">Estimated Returns</div><div className="text-2xl font-bold">{formatCurrency(result.totalReturns)}</div></div>
                <div className="result-item"><div className="text-sm opacity-80">Total Corpus</div><div className="text-2xl font-bold">{formatCurrency(result.totalCorpus)}</div></div>
              </div>
            )}
            <AdSlot />
            <div className="bg-white rounded-2xl p-6 md:p-8 border border-[var(--color-border)] mt-8">
              <h2 className="text-xl font-semibold text-[var(--color-text)] mb-4">How Step-up SIP Works</h2>
              <div className="prose text-[var(--color-text-light)] text-sm leading-relaxed space-y-3">
                <p>Each year, your SIP amount increases by the step-up percentage. This aligns with salary increments and accelerates wealth creation through compounding.</p>
                <p className="bg-gray-50 p-4 rounded-lg font-mono text-sm">SIP Year(n) = SIP Year(1) × (1 + step-up%)^(n-1)</p>
              </div>
            </div>
          </div>
          <div className="lg:col-span-1"><div className="sticky top-24"><AdSlot /></div></div>
        </div>
      </div>
    </>
  );
}
