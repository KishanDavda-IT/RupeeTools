'use client';

import { useState } from 'react';
import AdSlot from '@/components/AdSlot';
import ResultPieChart from '@/components/ResultPieChart';
import { formatCurrency } from '@/lib/utils';

export default function SIPCalculator() {
  const [monthlyInvestment, setMonthlyInvestment] = useState<number>(5000);
  const [expectedReturn, setExpectedReturn] = useState<number>(12);
  const [years, setYears] = useState<number>(10);
  const [result, setResult] = useState<{ invested: number; returns: number; total: number } | null>(null);

  const calculate = () => {
    const monthlyRate = expectedReturn / 12 / 100;
    const months = years * 12;
    const futureValue = monthlyInvestment * ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate) * (1 + monthlyRate);
    const invested = monthlyInvestment * months;
    const returns = futureValue - invested;
    setResult({ invested, returns, total: futureValue });
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: [
              {
                '@type': 'Question',
                name: 'What is a SIP Calculator?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'A SIP Calculator helps you estimate the returns on your Systematic Investment Plan (SIP) in mutual funds. It calculates the future value of your regular monthly investments based on expected rate of return and investment duration.',
                },
              },
              {
                '@type': 'Question',
                name: 'How is SIP return calculated?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'SIP returns are calculated using the compound interest formula: FV = P × ((1 + r)^n - 1) / r × (1 + r), where P is the monthly investment, r is the monthly rate of return, and n is the total number of months.',
                },
              },
              {
                '@type': 'Question',
                name: 'What is a good SIP return rate in India?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Historically, equity mutual funds in India have given returns of 12-15% annually over long periods (10+ years). However, past performance does not guarantee future returns. Large-cap funds typically return 10-12%, while mid/small-cap funds can return 14-18%.',
                },
              },
            ],
          }),
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <h1 className="text-3xl md:text-4xl font-bold text-[var(--color-text)] mb-3">
              SIP Calculator India 2024
            </h1>
            <p className="text-[var(--color-text-light)] text-lg mb-8">
              Calculate the future value of your Systematic Investment Plan (SIP) in mutual funds. See how your monthly investments grow over time.
            </p>

            {/* Replace with AdSense code when approved */}
            <AdSlot />

            {/* Calculator Form */}
            <div className="bg-white rounded-2xl p-6 md:p-8 border border-[var(--color-border)] shadow-sm mb-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label className="block text-sm font-medium text-[var(--color-text)] mb-2">
                    Monthly Investment (₹)
                  </label>
                  <input
                    type="number"
                    value={monthlyInvestment}
                    onChange={(e) => setMonthlyInvestment(Number(e.target.value))}
                    className="calculator-input"
                    min="500"
                    step="500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[var(--color-text)] mb-2">
                    Expected Return (% p.a.)
                  </label>
                  <input
                    type="number"
                    value={expectedReturn}
                    onChange={(e) => setExpectedReturn(Number(e.target.value))}
                    className="calculator-input"
                    min="1"
                    max="30"
                    step="0.5"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[var(--color-text)] mb-2">
                    Time Period (Years)
                  </label>
                  <input
                    type="number"
                    value={years}
                    onChange={(e) => setYears(Number(e.target.value))}
                    className="calculator-input"
                    min="1"
                    max="40"
                  />
                </div>
              </div>
              <button onClick={calculate} className="calculator-btn mt-6">
                Calculate SIP Returns
              </button>
            </div>

            {/* Results */}
            {result && (
              <div className="mb-8">
                <div className="result-card mb-6">
                  <h2 className="text-lg font-semibold mb-4">SIP Results</h2>
                  <div className="result-item">
                    <div className="text-sm opacity-80">Total Invested</div>
                    <div className="text-2xl font-bold">{formatCurrency(result.invested)}</div>
                  </div>
                  <div className="result-item">
                    <div className="text-sm opacity-80">Estimated Returns</div>
                    <div className="text-2xl font-bold">{formatCurrency(result.returns)}</div>
                  </div>
                  <div className="result-item">
                    <div className="text-sm opacity-80">Total Value</div>
                    <div className="text-2xl font-bold">{formatCurrency(result.total)}</div>
                  </div>
                </div>

                <div className="bg-white rounded-2xl p-6 border border-[var(--color-border)]">
                  <h3 className="text-lg font-semibold mb-4">Investment Breakdown</h3>
                  <ResultPieChart
                    data={[
                      { name: 'Invested Amount', value: result.invested },
                      { name: 'Estimated Returns', value: result.returns },
                    ]}
                  />
                </div>
              </div>
            )}

            {/* Replace with AdSense code when approved */}
            <AdSlot />

            {/* How it works */}
            <div className="bg-white rounded-2xl p-6 md:p-8 border border-[var(--color-border)] mt-8">
              <h2 className="text-xl font-semibold text-[var(--color-text)] mb-4">How SIP Calculator Works</h2>
              <div className="prose text-[var(--color-text-light)] text-sm leading-relaxed space-y-3">
                <p>
                  A Systematic Investment Plan (SIP) allows you to invest a fixed amount in mutual funds at regular intervals (monthly). The SIP calculator uses the future value of annuity formula:
                </p>
                <p className="bg-gray-50 p-4 rounded-lg font-mono text-sm">
                  FV = P × ((1 + r)^n - 1) / r × (1 + r)
                </p>
                <p>Where:</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li><strong>FV</strong> = Future Value of the investment</li>
                  <li><strong>P</strong> = Monthly investment amount</li>
                  <li><strong>r</strong> = Monthly rate of return (annual rate / 12 / 100)</li>
                  <li><strong>n</strong> = Total number of months</li>
                </ul>
                <p>
                  The power of SIP lies in rupee cost averaging and the power of compounding. Starting early and investing consistently can help build significant wealth over time.
                </p>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Replace with AdSense code when approved */}
            <div className="sticky top-24">
              <AdSlot />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
