'use client';

import { useState } from 'react';
import AdSlot from '@/components/AdSlot';
import { formatCurrency } from '@/lib/utils';

export default function HRACalculatorClient() {
  const [basicSalary, setBasicSalary] = useState<number>(50000);
  const [hraReceived, setHRAReceived] = useState<number>(25000);
  const [rentPaid, setRentPaid] = useState<number>(20000);
  const [isMetro, setIsMetro] = useState<boolean>(true);
  const [result, setResult] = useState<{ exemption: number; taxableHRA: number; method: string } | null>(null);

  const calculate = () => {
    const monthlyBasic = basicSalary;
    const annualBasic = monthlyBasic * 12;
    const annualHRA = hraReceived * 12;
    const annualRent = rentPaid * 12;

    const actualHRA = annualHRA;
    const rentMinus10 = annualRent - 0.1 * annualBasic;
    const percentBasic = isMetro ? 0.5 * annualBasic : 0.4 * annualBasic;

    const exemption = Math.max(0, Math.min(actualHRA, rentMinus10, percentBasic));
    const taxableHRA = annualHRA - exemption;

    let method = '';
    if (exemption === actualHRA) method = 'Actual HRA received';
    else if (exemption === rentMinus10) method = 'Rent paid minus 10% of basic salary';
    else method = `${isMetro ? '50%' : '40%'} of basic salary`;

    setResult({ exemption, taxableHRA, method });
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: [{ '@type': 'Question', name: 'How is HRA exemption calculated?', acceptedAnswer: { '@type': 'Answer', text: 'HRA exemption is the minimum of: (1) Actual HRA received, (2) Rent paid minus 10% of basic salary, (3) 50% of basic salary for metro cities or 40% for non-metro cities.' } }, { '@type': 'Question', name: 'Which cities are considered metro for HRA?', acceptedAnswer: { '@type': 'Answer', text: 'Delhi, Mumbai, Kolkata, and Chennai are the four metro cities for HRA calculation purposes. All other cities are considered non-metro.' } }, { '@type': 'Question', name: 'Can I claim HRA without rent receipts?', acceptedAnswer: { '@type': 'Answer', text: 'Rent receipts are required if annual rent exceeds ₹1 lakh. For rent above ₹1 lakh/year, you also need the landlord\'s PAN number. Self-declaration may suffice for lower amounts.' } }] }) }} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <h1 className="text-3xl md:text-4xl font-bold text-[var(--color-text)] mb-3">HRA Exemption Calculator India 2024</h1>
            <p className="text-[var(--color-text-light)] text-lg mb-8">Calculate your HRA tax exemption based on salary, rent paid, and city type.</p>
            <AdSlot />
            <div className="bg-white rounded-2xl p-6 md:p-8 border border-[var(--color-border)] shadow-sm mb-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div><label className="block text-sm font-medium text-[var(--color-text)] mb-2">Basic Salary (₹/month)</label><input type="number" value={basicSalary} onChange={(e) => setBasicSalary(Number(e.target.value))} className="calculator-input" min="1000" /></div>
                <div><label className="block text-sm font-medium text-[var(--color-text)] mb-2">HRA Received (₹/month)</label><input type="number" value={hraReceived} onChange={(e) => setHRAReceived(Number(e.target.value))} className="calculator-input" min="0" /></div>
                <div><label className="block text-sm font-medium text-[var(--color-text)] mb-2">Rent Paid (₹/month)</label><input type="number" value={rentPaid} onChange={(e) => setRentPaid(Number(e.target.value))} className="calculator-input" min="0" /></div>
                <div><label className="block text-sm font-medium text-[var(--color-text)] mb-2">City Type</label><select value={isMetro ? 'metro' : 'non-metro'} onChange={(e) => setIsMetro(e.target.value === 'metro')} className="calculator-input"><option value="metro">Metro (Delhi, Mumbai, Kolkata, Chennai)</option><option value="non-metro">Non-Metro</option></select></div>
              </div>
              <button onClick={calculate} className="calculator-btn mt-6">Calculate HRA Exemption</button>
            </div>
            {result && (
              <div className="result-card mb-8">
                <h2 className="text-lg font-semibold mb-4">HRA Exemption Results</h2>
                <div className="result-item"><div className="text-sm opacity-80">Annual HRA Exemption</div><div className="text-2xl font-bold">{formatCurrency(result.exemption)}</div></div>
                <div className="result-item"><div className="text-sm opacity-80">Taxable HRA</div><div className="text-2xl font-bold">{formatCurrency(result.taxableHRA)}</div></div>
                <div className="result-item"><div className="text-sm opacity-80">Exemption based on</div><div className="text-sm font-medium">{result.method}</div></div>
              </div>
            )}
            <AdSlot />
            <div className="bg-white rounded-2xl p-6 md:p-8 border border-[var(--color-border)] mt-8">
              <h2 className="text-xl font-semibold text-[var(--color-text)] mb-4">How HRA Exemption Works</h2>
              <div className="prose text-[var(--color-text-light)] text-sm leading-relaxed space-y-3">
                <p>HRA exemption is the <strong>minimum</strong> of these three:</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Actual HRA received from employer</li>
                  <li>Rent paid minus 10% of basic salary</li>
                  <li>50% of basic salary (metro) or 40% (non-metro)</li>
                </ul>
                <p>Note: HRA exemption is only available under the Old Tax Regime. The New Regime does not allow HRA deduction.</p>
              </div>
            </div>
          </div>
          <div className="lg:col-span-1"><div className="sticky top-24"><AdSlot /></div></div>
        </div>
      </div>
    </>
  );
}
