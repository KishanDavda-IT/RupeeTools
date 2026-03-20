'use client';

import { useState } from 'react';
import AdSlot from '@/components/AdSlot';
import { formatCurrency } from '@/lib/utils';

export default function LoanEligibilityClient() {
  const [monthlyIncome, setMonthlyIncome] = useState<number>(80000);
  const [existingEMIs, setExistingEMIs] = useState<number>(5000);
  const [interestRate, setInterestRate] = useState<number>(8.5);
  const [tenure, setTenure] = useState<number>(240);
  const [result, setResult] = useState<{ maxEMI: number; maxLoan: number } | null>(null);

  const calculate = () => {
    // Banks typically allow up to 50% of income to go toward EMIs
    const maxEMI = monthlyIncome * 0.5 - existingEMIs;
    const monthlyRate = interestRate / 12 / 100;
    // Reverse EMI formula to find max principal
    const maxLoan = maxEMI * (Math.pow(1 + monthlyRate, tenure) - 1) / (monthlyRate * Math.pow(1 + monthlyRate, tenure));
    setResult({ maxEMI: Math.max(0, maxEMI), maxLoan: Math.max(0, maxLoan) });
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: [{ '@type': 'Question', name: 'How do banks decide loan eligibility?', acceptedAnswer: { '@type': 'Answer', text: 'Banks use the FOIR (Fixed Obligation to Income Ratio) method. Typically, your total EMIs (including the new loan) should not exceed 50-60% of your net monthly income.' } }, { '@type': 'Question', name: 'Does CIBIL score affect loan eligibility?', acceptedAnswer: { '@type': 'Answer', text: 'Yes, a CIBIL score of 750+ improves eligibility and may get you lower interest rates. Below 650, loan approval becomes difficult.' } }, { '@type': 'Question', name: 'How can I increase my loan eligibility?', acceptedAnswer: { '@type': 'Answer', text: 'Clear existing debts, add a co-applicant, choose longer tenure, improve CIBIL score, or show additional income sources to increase eligibility.' } }] }) }} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <h1 className="text-3xl md:text-4xl font-bold text-[var(--color-text)] mb-3">Loan Eligibility Calculator India 2024</h1>
            <p className="text-[var(--color-text-light)] text-lg mb-8">Check your maximum loan eligibility based on monthly income, existing EMIs, and loan terms.</p>
            <AdSlot />
            <div className="bg-white rounded-2xl p-6 md:p-8 border border-[var(--color-border)] shadow-sm mb-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div><label className="block text-sm font-medium text-[var(--color-text)] mb-2">Monthly Income (₹)</label><input type="number" value={monthlyIncome} onChange={(e) => setMonthlyIncome(Number(e.target.value))} className="calculator-input" min="10000" step="5000" /></div>
                <div><label className="block text-sm font-medium text-[var(--color-text)] mb-2">Existing EMIs (₹/month)</label><input type="number" value={existingEMIs} onChange={(e) => setExistingEMIs(Number(e.target.value))} className="calculator-input" min="0" step="1000" /></div>
                <div><label className="block text-sm font-medium text-[var(--color-text)] mb-2">Interest Rate (% p.a.)</label><input type="number" value={interestRate} onChange={(e) => setInterestRate(Number(e.target.value))} className="calculator-input" min="1" max="20" step="0.1" /></div>
                <div><label className="block text-sm font-medium text-[var(--color-text)] mb-2">Tenure (Months)</label><input type="number" value={tenure} onChange={(e) => setTenure(Number(e.target.value))} className="calculator-input" min="12" max="360" /></div>
              </div>
              <button onClick={calculate} className="calculator-btn mt-6">Check Eligibility</button>
            </div>
            {result && (
              <div className="result-card mb-8">
                <h2 className="text-lg font-semibold mb-4">Loan Eligibility Results</h2>
                <div className="result-item"><div className="text-sm opacity-80">Maximum Affordable EMI</div><div className="text-2xl font-bold">{formatCurrency(result.maxEMI)}/month</div></div>
                <div className="result-item"><div className="text-sm opacity-80">Maximum Loan Amount</div><div className="text-2xl font-bold">{formatCurrency(result.maxLoan)}</div></div>
              </div>
            )}
            <AdSlot />
            <div className="bg-white rounded-2xl p-6 md:p-8 border border-[var(--color-border)] mt-8">
              <h2 className="text-xl font-semibold text-[var(--color-text)] mb-4">How Loan Eligibility Works</h2>
              <div className="prose text-[var(--color-text-light)] text-sm leading-relaxed space-y-3">
                <p>Banks use FOIR (Fixed Obligation to Income Ratio): Max EMI = 50% of income - existing EMIs.</p>
                <p>Maximum loan is then derived using the reverse EMI formula based on the affordable EMI amount, interest rate, and tenure.</p>
              </div>
            </div>
          </div>
          <div className="lg:col-span-1"><div className="sticky top-24"><AdSlot /></div></div>
        </div>
      </div>
    </>
  );
}
