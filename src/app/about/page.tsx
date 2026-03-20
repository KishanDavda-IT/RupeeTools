import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us - RupeeTools',
  description: 'Learn about RupeeTools - free financial calculators built for Indians. Our mission is to help Indians make better financial decisions.',
};

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl md:text-4xl font-bold text-[var(--color-text)] mb-6">About RupeeTools</h1>

      <div className="prose max-w-none">
        <div className="bg-white rounded-2xl p-8 border border-[var(--color-border)] mb-8">
          <h2 className="text-xl font-semibold mb-4 text-[var(--color-text)]">Our Mission</h2>
          <p className="text-[var(--color-text-light)] leading-relaxed mb-4">
            RupeeTools was created with a simple mission: to provide free, easy-to-use financial calculators designed specifically for the Indian financial system. We believe that everyone deserves access to tools that help them make smarter money decisions.
          </p>
          <p className="text-[var(--color-text-light)] leading-relaxed">
            Whether you&apos;re planning your SIP investments, calculating EMI for a home loan, figuring out your income tax, or estimating your retirement corpus — our tools are built to give you accurate results instantly.
          </p>
        </div>

        <div className="bg-white rounded-2xl p-8 border border-[var(--color-border)] mb-8">
          <h2 className="text-xl font-semibold mb-4 text-[var(--color-text)]">Why RupeeTools?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex gap-3">
              <span className="text-2xl">🆓</span>
              <div>
                <h3 className="font-semibold text-[var(--color-text)]">100% Free</h3>
                <p className="text-sm text-[var(--color-text-light)]">All our tools are completely free. No hidden charges, no premium plans.</p>
              </div>
            </div>
            <div className="flex gap-3">
              <span className="text-2xl">🔒</span>
              <div>
                <h3 className="font-semibold text-[var(--color-text)]">Privacy First</h3>
                <p className="text-sm text-[var(--color-text-light)]">All calculations happen in your browser. We don&apos;t store any of your financial data.</p>
              </div>
            </div>
            <div className="flex gap-3">
              <span className="text-2xl">🇮🇳</span>
              <div>
                <h3 className="font-semibold text-[var(--color-text)]">Made for India</h3>
                <p className="text-sm text-[var(--color-text-light)]">Our tools account for Indian tax laws, GST slabs, PF rules, and more.</p>
              </div>
            </div>
            <div className="flex gap-3">
              <span className="text-2xl">📱</span>
              <div>
                <h3 className="font-semibold text-[var(--color-text)]">Mobile Friendly</h3>
                <p className="text-sm text-[var(--color-text-light)]">Use our calculators on any device — phone, tablet, or desktop.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-8 border border-[var(--color-border)]">
          <h2 className="text-xl font-semibold mb-4 text-[var(--color-text)]">Disclaimer</h2>
          <p className="text-[var(--color-text-light)] leading-relaxed text-sm">
            The calculators on RupeeTools are for informational and educational purposes only. Results are estimates based on the inputs provided and standard formulas. Actual returns, taxes, and loan terms may vary based on market conditions, regulatory changes, and individual circumstances. Please consult a qualified financial advisor before making investment or financial decisions.
          </p>
        </div>
      </div>
    </div>
  );
}
