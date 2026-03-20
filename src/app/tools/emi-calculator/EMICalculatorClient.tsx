'use client';

import { useState } from 'react';
import AdSlot from '@/components/AdSlot';
import ResultPieChart from '@/components/ResultPieChart';
import { formatCurrency } from '@/lib/utils';

export default function EMICalculatorClient() {
  const [loanAmount, setLoanAmount] = useState<number>(2000000);
  const [interestRate, setInterestRate] = useState<number>(8.5);
  const [tenure, setTenure] = useState<number>(240);
  const [result, setResult] = useState<{ emi: number; totalInterest: number; totalPayment: number } | null>(null);

  const calculate = () => {
    const monthlyRate = interestRate / 12 / 100;
    const emi = loanAmount * monthlyRate * Math.pow(1 + monthlyRate, tenure) / (Math.pow(1 + monthlyRate, tenure) - 1);
    const totalPayment = emi * tenure;
    const totalInterest = totalPayment - loanAmount;
    setResult({ emi, totalInterest, totalPayment });
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: [{ '@type': 'Question', name: 'What is EMI?', acceptedAnswer: { '@type': 'Answer', text: 'EMI (Equated Monthly Installment) is a fixed monthly payment made by a borrower to a lender. It includes both principal and interest components.' } }, { '@type': 'Question', name: 'How is EMI calculated?', acceptedAnswer: { '@type': 'Answer', text: 'EMI = P × r × (1 + r)^n / ((1 + r)^n - 1), where P is loan amount, r is monthly interest rate, and n is tenure in months.' } }, { '@type': 'Question', name: 'What factors affect EMI?', acceptedAnswer: { '@type': 'Answer', text: 'Three key factors: loan amount (higher amount = higher EMI), interest rate (higher rate = higher EMI), and tenure (longer tenure = lower EMI but more total interest).' } }] }) }} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <h1 className="text-3xl md:text-4xl font-bold text-[var(--color-text)] mb-3">EMI Calculator India 2024</h1>
            <p className="text-[var(--color-text-light)] text-lg mb-8">Calculate your monthly EMI for home loans, car loans, and personal loans. Know your total interest outgo before borrowing.</p>
            <AdSlot />
            <div className="bg-white rounded-2xl p-6 md:p-8 border border-[var(--color-border)] shadow-sm mb-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label className="block text-sm font-medium text-[var(--color-text)] mb-2">Loan Amount (₹)</label>
                  <input type="number" value={loanAmount} onChange={(e) => setLoanAmount(Number(e.target.value))} className="calculator-input" min="10000" step="10000" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[var(--color-text)] mb-2">Interest Rate (% p.a.)</label>
                  <input type="number" value={interestRate} onChange={(e) => setInterestRate(Number(e.target.value))} className="calculator-input" min="1" max="30" step="0.1" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[var(--color-text)] mb-2">Tenure (Months)</label>
                  <input type="number" value={tenure} onChange={(e) => setTenure(Number(e.target.value))} className="calculator-input" min="1" max="360" />
                </div>
              </div>
              <button onClick={calculate} className="calculator-btn mt-6">Calculate EMI</button>
            </div>
            {result && (
              <div className="mb-8">
                <div className="result-card mb-6">
                  <h2 className="text-lg font-semibold mb-4">EMI Results</h2>
                  <div className="result-item"><div className="text-sm opacity-80">Monthly EMI</div><div className="text-2xl font-bold">{formatCurrency(result.emi)}</div></div>
                  <div className="result-item"><div className="text-sm opacity-80">Total Interest</div><div className="text-2xl font-bold">{formatCurrency(result.totalInterest)}</div></div>
                  <div className="result-item"><div className="text-sm opacity-80">Total Payment</div><div className="text-2xl font-bold">{formatCurrency(result.totalPayment)}</div></div>
                </div>
                <div className="bg-white rounded-2xl p-6 border border-[var(--color-border)]">
                  <h3 className="text-lg font-semibold mb-4">Payment Breakdown</h3>
                  <ResultPieChart data={[{ name: 'Principal', value: loanAmount }, { name: 'Total Interest', value: result.totalInterest }]} />
                </div>
              </div>
            )}
            <AdSlot />
            <div className="bg-white rounded-2xl p-6 md:p-8 border border-[var(--color-border)] mt-8">
              <h2 className="text-xl font-semibold text-[var(--color-text)] mb-4">How EMI Calculator Works</h2>
              <div className="prose text-[var(--color-text-light)] text-sm leading-relaxed space-y-3">
                <p>EMI (Equated Monthly Installment) is calculated using the formula:</p>
                <p className="bg-gray-50 p-4 rounded-lg font-mono text-sm">EMI = P × r × (1 + r)^n / ((1 + r)^n - 1)</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li><strong>P</strong> = Principal loan amount</li>
                  <li><strong>r</strong> = Monthly interest rate (annual rate / 12 / 100)</li>
                  <li><strong>n</strong> = Loan tenure in months</li>
                </ul>
                <p>A longer tenure reduces your monthly EMI but increases total interest paid. Consider making prepayments to reduce your interest burden.</p>
              </div>
            </div>
          </div>
          <div className="lg:col-span-1"><div className="sticky top-24"><AdSlot /></div></div>
        </div>
      </div>
    </>
  );
}
