import type { Metadata } from 'next';
import Image from 'next/image';
import AdSlot from '@/components/AdSlot';

export const metadata: Metadata = {
  title: 'How to Start SIP Investment in India 2024 - Complete Guide',
  description: 'Learn how to start a SIP in mutual funds in India. Step-by-step guide covering KYC, choosing funds, investing through apps, and building long-term wealth.',
};

export default function SIPArticle() {
  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-8">
        <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-[var(--color-primary)]/10 text-[var(--color-primary)]">Investment</span>
        <span className="text-xs text-[var(--color-text-lighter)] ml-3">8 min read · December 15, 2024</span>
      </div>
      <h1 className="text-3xl md:text-4xl font-bold text-[var(--color-text)] mb-6">How to Start SIP Investment in India 2024</h1>
      <AdSlot />
      <div className="relative w-full h-64 md:h-96 rounded-2xl overflow-hidden mb-8 shadow-md">
        <Image src="/images/sip_investment.png" alt="SIP Investment Guide" fill className="object-cover" priority />
      </div>

      <div className="bg-white rounded-2xl p-6 md:p-8 border border-[var(--color-border)] prose max-w-none">
        <div className="space-y-6 text-[var(--color-text-light)] leading-relaxed">
          <p className="text-lg">Systematic Investment Plan (SIP) is one of the best ways to build wealth over the long term. This guide walks you through everything you need to know to start your first SIP in mutual funds in India.</p>

          <h2 className="text-xl font-semibold text-[var(--color-text)]">What is a SIP?</h2>
          <p>A SIP allows you to invest a fixed amount (starting from as low as ₹500) in a mutual fund scheme at regular intervals — typically monthly. Instead of timing the market, SIP leverages <strong>rupee cost averaging</strong> to spread your investments over time, reducing the impact of market volatility.</p>

          <h2 className="text-xl font-semibold text-[var(--color-text)]">Benefits of SIP</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Disciplined investing:</strong> Automates your investment habit</li>
            <li><strong>Rupee cost averaging:</strong> Buy more units when prices are low, fewer when high</li>
            <li><strong>Power of compounding:</strong> Earnings generate their own earnings over time</li>
            <li><strong>Flexibility:</strong> Start, stop, increase, or decrease anytime</li>
            <li><strong>Low minimum:</strong> Start with as little as ₹500/month</li>
          </ul>

          <h2 className="text-xl font-semibold text-[var(--color-text)]">Step-by-Step: How to Start a SIP</h2>

          <h3 className="text-lg font-semibold text-[var(--color-text)]">Step 1: Complete KYC</h3>
          <p>You need to complete Know Your Customer (KYC) verification before investing. Most platforms offer e-KYC with Aadhaar. You&apos;ll need your PAN card, Aadhaar card, and a bank account.</p>

          <h3 className="text-lg font-semibold text-[var(--color-text)]">Step 2: Choose the Right Mutual Fund</h3>
          <p>For beginners, consider these fund types:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Large Cap Index Funds:</strong> Low risk, tracks Nifty 50 or Sensex (e.g., UTI Nifty 50 Index Fund)</li>
            <li><strong>Flexi Cap Funds:</strong> Moderate risk, invested across market caps</li>
            <li><strong>ELSS Funds:</strong> Tax saving under Section 80C with 3-year lock-in</li>
          </ul>

          <h3 className="text-lg font-semibold text-[var(--color-text)]">Step 3: Choose a Platform</h3>
          <p>Popular platforms to start SIP include Groww, Zerodha Coin, Kuvera, and Paytm Money. Look for direct plan options (lower expense ratio than regular plans).</p>

          <h3 className="text-lg font-semibold text-[var(--color-text)]">Step 4: Set Up Your SIP</h3>
          <p>Select your fund, choose the SIP amount (start with what you can afford — even ₹1,000/month), pick a date, and set up auto-debit from your bank account.</p>

          <h3 className="text-lg font-semibold text-[var(--color-text)]">Step 5: Stay Invested Long-Term</h3>
          <p>SIP works best over the long term (7+ years). Don&apos;t panic during market dips — that&apos;s when you get more units for the same investment. Consider step-up SIP to increase your investment annually with salary hikes.</p>

          <h2 className="text-xl font-semibold text-[var(--color-text)]">SIP Return Example</h2>
          <p>Here&apos;s what a ₹5,000/month SIP at 12% average return can grow to:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li><strong>5 years:</strong> ₹4.12 lakh (invested ₹3 lakh)</li>
            <li><strong>10 years:</strong> ₹11.62 lakh (invested ₹6 lakh)</li>
            <li><strong>20 years:</strong> ₹49.96 lakh (invested ₹12 lakh)</li>
            <li><strong>30 years:</strong> ₹1.76 crore (invested ₹18 lakh)</li>
          </ul>

          <p>Use our <a href="/tools/sip-calculator" className="text-[var(--color-primary)] hover:underline font-medium">SIP Calculator</a> to estimate returns based on your investment amount and expected return rate.</p>

          <h2 className="text-xl font-semibold text-[var(--color-text)]">Common SIP Mistakes to Avoid</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>Stopping SIP during market corrections</li>
            <li>Investing without financial goals</li>
            <li>Choosing regular plans over direct plans</li>
            <li>Not reviewing your portfolio annually</li>
            <li>Investing just for tax saving without considering returns</li>
          </ul>

          <h2 className="text-xl font-semibold text-[var(--color-text)]">Conclusion</h2>
          <p>SIP is one of the simplest and most effective ways to build wealth in India. Start early, stay consistent, and let the power of compounding work for you. The best time to start a SIP was yesterday. The second-best time is now.</p>
        </div>
      </div>
      <AdSlot />
    </article>
  );
}
