import type { Metadata } from 'next';
import Image from 'next/image';
import AdSlot from '@/components/AdSlot';

export const metadata: Metadata = {
  title: 'How to Calculate EMI Before Taking a Loan - Complete Guide',
  description: 'Learn the EMI formula, understand how interest rates and tenure affect your monthly payments, and make informed borrowing decisions for home, car, and personal loans.',
};

export default function EMIArticle() {
  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-8">
        <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-[var(--color-primary)]/10 text-[var(--color-primary)]">Loans</span>
        <span className="text-xs text-[var(--color-text-lighter)] ml-3">6 min read · December 10, 2024</span>
      </div>
      <h1 className="text-3xl md:text-4xl font-bold text-[var(--color-text)] mb-6">How to Calculate EMI Before Taking a Loan</h1>
      <AdSlot />
      <div className="relative w-full h-64 md:h-96 rounded-2xl overflow-hidden mb-8 shadow-md">
        <Image src="/images/emi_calculator.png" alt="EMI Calculation Guide" fill className="object-cover" priority />
      </div>

      <div className="bg-white rounded-2xl p-6 md:p-8 border border-[var(--color-border)] prose max-w-none">
        <div className="space-y-6 text-[var(--color-text-light)] leading-relaxed">
          <p className="text-lg">Before taking any loan — whether it&apos;s a home loan, car loan, or personal loan — it&apos;s crucial to understand how EMI works and what you&apos;ll actually pay over the loan tenure.</p>

          <h2 className="text-xl font-semibold text-[var(--color-text)]">What is EMI?</h2>
          <p>EMI (Equated Monthly Installment) is a fixed amount you pay to the lender every month until the loan is fully repaid. Each EMI consists of two parts: <strong>principal repayment</strong> and <strong>interest payment</strong>. In the early months, a larger portion goes toward interest; over time, more goes toward the principal.</p>

          <h2 className="text-xl font-semibold text-[var(--color-text)]">The EMI Formula</h2>
          <p className="bg-gray-50 p-4 rounded-lg font-mono text-sm">EMI = P × r × (1 + r)^n / ((1 + r)^n - 1)</p>
          <p>Where:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li><strong>P</strong> = Loan principal amount</li>
            <li><strong>r</strong> = Monthly interest rate (annual rate ÷ 12 ÷ 100)</li>
            <li><strong>n</strong> = Number of monthly installments</li>
          </ul>

          <h2 className="text-xl font-semibold text-[var(--color-text)]">Example: Home Loan EMI</h2>
          <p>For a ₹50 lakh home loan at 8.5% for 20 years:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Monthly EMI: ₹43,391</li>
            <li>Total interest paid: ₹54,13,805</li>
            <li>Total amount paid: ₹1,04,13,805</li>
          </ul>
          <p>That&apos;s more than ₹54 lakh in interest alone! This is why understanding EMI before borrowing is so important.</p>

          <h2 className="text-xl font-semibold text-[var(--color-text)]">How to Reduce Your EMI</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Make a larger down payment:</strong> Reduces the loan principal</li>
            <li><strong>Choose a longer tenure:</strong> Lowers EMI but increases total interest</li>
            <li><strong>Negotiate interest rate:</strong> Even 0.25% lower makes a significant difference</li>
            <li><strong>Make prepayments:</strong> Reduces outstanding principal and future interest</li>
            <li><strong>Transfer to a lower-rate lender:</strong> Balance transfer can save lakhs</li>
          </ul>

          <h2 className="text-xl font-semibold text-[var(--color-text)]">Current Loan Interest Rates in India (2024)</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li><strong>Home Loan:</strong> 8.30% - 9.50%</li>
            <li><strong>Car Loan:</strong> 8.50% - 12.00%</li>
            <li><strong>Personal Loan:</strong> 10.50% - 24.00%</li>
            <li><strong>Education Loan:</strong> 8.50% - 15.00%</li>
          </ul>

          <h2 className="text-xl font-semibold text-[var(--color-text)]">Tips Before Taking a Loan</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>Keep total EMIs under 40-50% of your monthly income</li>
            <li>Maintain an emergency fund of 6 months of expenses</li>
            <li>Check your CIBIL score (750+ gets better rates)</li>
            <li>Compare offers from at least 3 lenders</li>
            <li>Read the fine print for processing fees and prepayment charges</li>
          </ul>

          <p>Use our <a href="/tools/emi-calculator" className="text-[var(--color-primary)] hover:underline font-medium">EMI Calculator</a> to check your monthly EMI before applying for any loan.</p>
        </div>
      </div>
      <AdSlot />
    </article>
  );
}
