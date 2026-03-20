'use client';

import { useState } from 'react';
import AdSlot from '@/components/AdSlot';
import { formatCurrency } from '@/lib/utils';

export default function IncomeTaxCalculatorClient() {
  const [income, setIncome] = useState<number>(1200000);
  const [regime, setRegime] = useState<string>('new');
  const [result, setResult] = useState<{ slabs: { slab: string; tax: number }[]; totalTax: number; cess: number; totalTaxWithCess: number; takeHome: number } | null>(null);

  const calculate = () => {
    let slabs: { slab: string; tax: number }[] = [];
    let totalTax = 0;

    if (regime === 'new') {
      // New Regime FY 2024-25
      const brackets = [
        { min: 0, max: 300000, rate: 0, label: 'Up to ₹3,00,000' },
        { min: 300000, max: 700000, rate: 5, label: '₹3,00,001 - ₹7,00,000' },
        { min: 700000, max: 1000000, rate: 10, label: '₹7,00,001 - ₹10,00,000' },
        { min: 1000000, max: 1200000, rate: 15, label: '₹10,00,001 - ₹12,00,000' },
        { min: 1200000, max: 1500000, rate: 20, label: '₹12,00,001 - ₹15,00,000' },
        { min: 1500000, max: Infinity, rate: 30, label: 'Above ₹15,00,000' },
      ];
      brackets.forEach((b) => {
        if (income > b.min) {
          const taxable = Math.min(income, b.max) - b.min;
          const tax = taxable * (b.rate / 100);
          slabs.push({ slab: `${b.label} @ ${b.rate}%`, tax });
          totalTax += tax;
        }
      });
      // Standard deduction of ₹75,000 for new regime FY 2024-25
      if (income <= 700000 + 75000) {
        // Rebate u/s 87A
        totalTax = 0;
        slabs = slabs.map((s) => ({ ...s, tax: 0 }));
      }
    } else {
      // Old Regime
      const brackets = [
        { min: 0, max: 250000, rate: 0, label: 'Up to ₹2,50,000' },
        { min: 250000, max: 500000, rate: 5, label: '₹2,50,001 - ₹5,00,000' },
        { min: 500000, max: 1000000, rate: 20, label: '₹5,00,001 - ₹10,00,000' },
        { min: 1000000, max: Infinity, rate: 30, label: 'Above ₹10,00,000' },
      ];
      brackets.forEach((b) => {
        if (income > b.min) {
          const taxable = Math.min(income, b.max) - b.min;
          const tax = taxable * (b.rate / 100);
          slabs.push({ slab: `${b.label} @ ${b.rate}%`, tax });
          totalTax += tax;
        }
      });
      if (income <= 500000) {
        totalTax = 0;
        slabs = slabs.map((s) => ({ ...s, tax: 0 }));
      }
    }

    const cess = totalTax * 0.04;
    const totalTaxWithCess = totalTax + cess;
    setResult({ slabs, totalTax, cess, totalTaxWithCess, takeHome: income - totalTaxWithCess });
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: [{ '@type': 'Question', name: 'Which tax regime is better - Old or New?', acceptedAnswer: { '@type': 'Answer', text: 'The new regime is better if you don\'t have many deductions. If you claim HRA, 80C, 80D, and other deductions totaling more than ₹3.75 lakh, the old regime may be better. Calculate under both to compare.' } }, { '@type': 'Question', name: 'What is the standard deduction in new regime?', acceptedAnswer: { '@type': 'Answer', text: 'The new tax regime for FY 2024-25 offers a standard deduction of ₹75,000 for salaried individuals. This is an increase from ₹50,000 offered previously.' } }, { '@type': 'Question', name: 'What is the tax rebate under Section 87A?', acceptedAnswer: { '@type': 'Answer', text: 'Under the new regime, if taxable income is up to ₹7 lakh (after standard deduction), full tax rebate is available under Section 87A, making the effective tax zero.' } }] }) }} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <h1 className="text-3xl md:text-4xl font-bold text-[var(--color-text)] mb-3">Income Tax Calculator India 2024</h1>
            <p className="text-[var(--color-text-light)] text-lg mb-8">Calculate your income tax under Old and New regime for FY 2024-25. Get detailed slab-wise breakdown and take-home salary.</p>
            <AdSlot />
            <div className="bg-white rounded-2xl p-6 md:p-8 border border-[var(--color-border)] shadow-sm mb-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div><label className="block text-sm font-medium text-[var(--color-text)] mb-2">Annual Income (₹)</label><input type="number" value={income} onChange={(e) => setIncome(Number(e.target.value))} className="calculator-input" min="0" step="10000" /></div>
                <div><label className="block text-sm font-medium text-[var(--color-text)] mb-2">Tax Regime</label><select value={regime} onChange={(e) => setRegime(e.target.value)} className="calculator-input"><option value="new">New Regime (FY 2024-25)</option><option value="old">Old Regime</option></select></div>
              </div>
              <button onClick={calculate} className="calculator-btn mt-6">Calculate Income Tax</button>
            </div>
            {result && (
              <div className="mb-8">
                <div className="result-card mb-6">
                  <h2 className="text-lg font-semibold mb-4">Tax Breakdown ({regime === 'new' ? 'New' : 'Old'} Regime)</h2>
                  {result.slabs.map((s, i) => (
                    <div key={i} className="result-item"><div className="text-sm opacity-80">{s.slab}</div><div className="text-lg font-bold">{formatCurrency(s.tax)}</div></div>
                  ))}
                  <div className="result-item"><div className="text-sm opacity-80">Total Tax</div><div className="text-xl font-bold">{formatCurrency(result.totalTax)}</div></div>
                  <div className="result-item"><div className="text-sm opacity-80">Health &amp; Education Cess (4%)</div><div className="text-lg font-bold">{formatCurrency(result.cess)}</div></div>
                  <div className="result-item"><div className="text-sm opacity-80">Total Tax + Cess</div><div className="text-2xl font-bold">{formatCurrency(result.totalTaxWithCess)}</div></div>
                  <div className="result-item bg-white/25"><div className="text-sm opacity-80">Take-Home Salary</div><div className="text-2xl font-bold">{formatCurrency(result.takeHome)}</div></div>
                </div>
              </div>
            )}
            <AdSlot />
            <div className="bg-white rounded-2xl p-6 md:p-8 border border-[var(--color-border)] mt-8">
              <h2 className="text-xl font-semibold text-[var(--color-text)] mb-4">How Income Tax Calculator Works</h2>
              <div className="prose text-[var(--color-text-light)] text-sm leading-relaxed space-y-3">
                <p>India has two tax regimes. The <strong>New Regime (default from FY 2024-25)</strong> has lower rates but fewer deductions. The <strong>Old Regime</strong> allows deductions under 80C, 80D, HRA, etc.</p>
                <p>New Regime FY 2024-25 slabs: 0% up to ₹3L, 5% ₹3-7L, 10% ₹7-10L, 15% ₹10-12L, 20% ₹12-15L, 30% above ₹15L.</p>
                <p>4% Health &amp; Education Cess is added on total tax. Section 87A rebate makes tax zero for income up to ₹7L (new regime).</p>
              </div>
            </div>
          </div>
          <div className="lg:col-span-1"><div className="sticky top-24"><AdSlot /></div></div>
        </div>
      </div>
    </>
  );
}
