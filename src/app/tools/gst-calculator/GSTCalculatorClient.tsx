'use client';

import { useState } from 'react';
import AdSlot from '@/components/AdSlot';
import { formatCurrency } from '@/lib/utils';

export default function GSTCalculatorClient() {
  const [amount, setAmount] = useState<number>(10000);
  const [gstRate, setGstRate] = useState<number>(18);
  const [isInclusive, setIsInclusive] = useState<boolean>(false);
  const [result, setResult] = useState<{ gstAmount: number; totalPrice: number; priceBeforeGST: number } | null>(null);

  const calculate = () => {
    if (isInclusive) {
      const priceBeforeGST = amount / (1 + gstRate / 100);
      const gstAmount = amount - priceBeforeGST;
      setResult({ gstAmount, totalPrice: amount, priceBeforeGST });
    } else {
      const gstAmount = amount * (gstRate / 100);
      const totalPrice = amount + gstAmount;
      setResult({ gstAmount, totalPrice, priceBeforeGST: amount });
    }
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: [{ '@type': 'Question', name: 'What are the GST rates in India?', acceptedAnswer: { '@type': 'Answer', text: 'India has 4 GST rate slabs: 5%, 12%, 18%, and 28%. Essential items fall under 5%, standard goods under 12-18%, and luxury/demerit goods under 28%.' } }, { '@type': 'Question', name: 'How to calculate GST from total amount?', acceptedAnswer: { '@type': 'Answer', text: 'To extract GST from a GST-inclusive price: GST = Price - (Price / (1 + GST Rate/100)). For 18% GST on ₹11,800: GST = 11,800 - (11,800/1.18) = ₹1,800.' } }, { '@type': 'Question', name: 'What is CGST and SGST?', acceptedAnswer: { '@type': 'Answer', text: 'For intra-state transactions, GST is split equally into CGST (Central GST) and SGST (State GST). For 18% GST, 9% goes to CGST and 9% to SGST.' } }] }) }} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <h1 className="text-3xl md:text-4xl font-bold text-[var(--color-text)] mb-3">GST Calculator India 2024</h1>
            <p className="text-[var(--color-text-light)] text-lg mb-8">Calculate GST amount, total price with GST, and price before GST for all Indian GST slab rates.</p>
            <AdSlot />
            <div className="bg-white rounded-2xl p-6 md:p-8 border border-[var(--color-border)] shadow-sm mb-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-[var(--color-text)] mb-2">Amount (₹)</label>
                  <input type="number" value={amount} onChange={(e) => setAmount(Number(e.target.value))} className="calculator-input" min="1" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[var(--color-text)] mb-2">GST Rate (%)</label>
                  <select value={gstRate} onChange={(e) => setGstRate(Number(e.target.value))} className="calculator-input">
                    <option value={5}>5%</option>
                    <option value={12}>12%</option>
                    <option value={18}>18%</option>
                    <option value={28}>28%</option>
                  </select>
                </div>
              </div>
              <div className="mt-4 flex items-center gap-4">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="radio" checked={!isInclusive} onChange={() => setIsInclusive(false)} className="w-4 h-4 text-[var(--color-primary)]" />
                  <span className="text-sm">GST Exclusive (Add GST)</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="radio" checked={isInclusive} onChange={() => setIsInclusive(true)} className="w-4 h-4 text-[var(--color-primary)]" />
                  <span className="text-sm">GST Inclusive (Extract GST)</span>
                </label>
              </div>
              <button onClick={calculate} className="calculator-btn mt-6">Calculate GST</button>
            </div>
            {result && (
              <div className="mb-8">
                <div className="result-card mb-6">
                  <h2 className="text-lg font-semibold mb-4">GST Results</h2>
                  <div className="result-item"><div className="text-sm opacity-80">Price Before GST</div><div className="text-2xl font-bold">{formatCurrency(result.priceBeforeGST)}</div></div>
                  <div className="result-item"><div className="text-sm opacity-80">GST Amount ({gstRate}%)</div><div className="text-2xl font-bold">{formatCurrency(result.gstAmount)}</div></div>
                  <div className="result-item"><div className="text-sm opacity-80">CGST ({gstRate/2}%)</div><div className="text-xl font-bold">{formatCurrency(result.gstAmount / 2)}</div></div>
                  <div className="result-item"><div className="text-sm opacity-80">SGST ({gstRate/2}%)</div><div className="text-xl font-bold">{formatCurrency(result.gstAmount / 2)}</div></div>
                  <div className="result-item"><div className="text-sm opacity-80">Total Price</div><div className="text-2xl font-bold">{formatCurrency(result.totalPrice)}</div></div>
                </div>
              </div>
            )}
            <AdSlot />
            <div className="bg-white rounded-2xl p-6 md:p-8 border border-[var(--color-border)] mt-8">
              <h2 className="text-xl font-semibold text-[var(--color-text)] mb-4">How GST Calculator Works</h2>
              <div className="prose text-[var(--color-text-light)] text-sm leading-relaxed space-y-3">
                <p>GST (Goods and Services Tax) is an indirect tax in India with 4 slabs: 5%, 12%, 18%, and 28%.</p>
                <p className="bg-gray-50 p-4 rounded-lg font-mono text-sm">GST Amount = Price × (GST Rate / 100)<br/>Total = Price + GST Amount</p>
                <p>For GST-inclusive prices: Price before GST = Total / (1 + GST Rate / 100)</p>
                <p>For intra-state sales, GST is split equally into CGST (Central) and SGST (State). For inter-state sales, IGST applies at the full rate.</p>
              </div>
            </div>
          </div>
          <div className="lg:col-span-1"><div className="sticky top-24"><AdSlot /></div></div>
        </div>
      </div>
    </>
  );
}
