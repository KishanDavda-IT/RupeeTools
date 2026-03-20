'use client';

import { useState } from 'react';
import AdSlot from '@/components/AdSlot';
import { formatCurrency } from '@/lib/utils';

export default function SalaryCalculatorClient() {
  const [ctc, setCTC] = useState<number>(1200000);
  const [result, setResult] = useState<{ basic: number; hra: number; pf: number; professionalTax: number; inHand: number; monthlyInHand: number } | null>(null);

  const calculate = () => {
    const basic = ctc * 0.4;
    const hra = basic * 0.5;
    const pfEmployee = Math.min(basic * 0.12, 21600);
    const pfEmployer = Math.min(basic * 0.12, 21600);
    const professionalTax = 2400; // ₹200/month
    const gratuity = basic * 0.0481;
    const specialAllowance = ctc - basic - hra - pfEmployer - gratuity;
    const annualInHand = ctc - pfEmployee - pfEmployer - professionalTax - gratuity;
    setResult({ basic, hra, pf: pfEmployee, professionalTax, inHand: annualInHand, monthlyInHand: annualInHand / 12 });
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: [{ '@type': 'Question', name: 'What is CTC vs In-hand salary?', acceptedAnswer: { '@type': 'Answer', text: 'CTC (Cost to Company) includes all components like basic, HRA, PF (employer), gratuity, etc. In-hand salary is what you receive after deductions like PF (employee), professional tax, and income tax.' } }, { '@type': 'Question', name: 'How much PF is deducted from salary?', acceptedAnswer: { '@type': 'Answer', text: '12% of basic salary is deducted as employee PF contribution, and employer matches it. The maximum PF contribution is capped at ₹1,800/month (on basic of ₹15,000).' } }, { '@type': 'Question', name: 'What is professional tax?', acceptedAnswer: { '@type': 'Answer', text: 'Professional tax is a state-level tax on salaried individuals, typically ₹200/month (₹2,400/year). The exact amount varies by state, with a maximum limit of ₹2,500/year.' } }] }) }} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <h1 className="text-3xl md:text-4xl font-bold text-[var(--color-text)] mb-3">Salary Calculator India 2024</h1>
            <p className="text-[var(--color-text-light)] text-lg mb-8">Calculate your in-hand salary from CTC after PF, professional tax, and other deductions.</p>
            <AdSlot />
            <div className="bg-white rounded-2xl p-6 md:p-8 border border-[var(--color-border)] shadow-sm mb-8">
              <div><label className="block text-sm font-medium text-[var(--color-text)] mb-2">Annual CTC (₹)</label><input type="number" value={ctc} onChange={(e) => setCTC(Number(e.target.value))} className="calculator-input" min="100000" step="10000" /></div>
              <button onClick={calculate} className="calculator-btn mt-6">Calculate In-hand Salary</button>
            </div>
            {result && (
              <div className="result-card mb-8">
                <h2 className="text-lg font-semibold mb-4">Salary Breakdown</h2>
                <div className="result-item"><div className="text-sm opacity-80">Basic Salary (40%)</div><div className="text-xl font-bold">{formatCurrency(result.basic)}/yr</div></div>
                <div className="result-item"><div className="text-sm opacity-80">HRA</div><div className="text-xl font-bold">{formatCurrency(result.hra)}/yr</div></div>
                <div className="result-item"><div className="text-sm opacity-80">PF Deduction (Employee)</div><div className="text-xl font-bold">- {formatCurrency(result.pf)}/yr</div></div>
                <div className="result-item"><div className="text-sm opacity-80">Professional Tax</div><div className="text-xl font-bold">- {formatCurrency(result.professionalTax)}/yr</div></div>
                <div className="result-item bg-white/25"><div className="text-sm opacity-80">Annual In-hand Salary</div><div className="text-2xl font-bold">{formatCurrency(result.inHand)}</div></div>
                <div className="result-item bg-white/25"><div className="text-sm opacity-80">Monthly In-hand Salary</div><div className="text-2xl font-bold">{formatCurrency(result.monthlyInHand)}</div></div>
              </div>
            )}
            <AdSlot />
            <div className="bg-white rounded-2xl p-6 md:p-8 border border-[var(--color-border)] mt-8">
              <h2 className="text-xl font-semibold text-[var(--color-text)] mb-4">How Salary Calculator Works</h2>
              <div className="prose text-[var(--color-text-light)] text-sm leading-relaxed space-y-3">
                <p>Your CTC is broken down into: Basic (40%), HRA (50% of Basic), PF (12% of Basic), Gratuity, and Special Allowances.</p>
                <p>In-hand = CTC - Employee PF - Employer PF - Professional Tax - Gratuity. Income tax is additional.</p>
              </div>
            </div>
          </div>
          <div className="lg:col-span-1"><div className="sticky top-24"><AdSlot /></div></div>
        </div>
      </div>
    </>
  );
}
