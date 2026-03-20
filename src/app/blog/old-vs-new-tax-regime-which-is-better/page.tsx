import type { Metadata } from 'next';
import Image from 'next/image';
import AdSlot from '@/components/AdSlot';

export const metadata: Metadata = {
  title: 'Old vs New Tax Regime: Which is Better? - FY 2024-25 Comparison',
  description: 'Detailed comparison of Old and New income tax regimes for FY 2024-25. Find out which regime saves you more tax based on your salary and deductions.',
};

export default function TaxRegimeArticle() {
  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-8">
        <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-[var(--color-primary)]/10 text-[var(--color-primary)]">Tax</span>
        <span className="text-xs text-[var(--color-text-lighter)] ml-3">10 min read · December 5, 2024</span>
      </div>
      <h1 className="text-3xl md:text-4xl font-bold text-[var(--color-text)] mb-6">Old vs New Tax Regime: Which is Better for FY 2024-25?</h1>
      <AdSlot />
      <div className="relative w-full h-64 md:h-96 rounded-2xl overflow-hidden mb-8 shadow-md">
        <Image src="/images/tax_regime.png" alt="Old vs New Tax Regime" fill className="object-cover" priority />
      </div>

      <div className="bg-white rounded-2xl p-6 md:p-8 border border-[var(--color-border)] prose max-w-none">
        <div className="space-y-6 text-[var(--color-text-light)] leading-relaxed">
          <p className="text-lg">With the new tax regime being the default from FY 2023-24, many taxpayers are confused about which regime to choose. Let&apos;s break down the differences and help you decide.</p>

          <h2 className="text-xl font-semibold text-[var(--color-text)]">New Regime Tax Slabs (FY 2024-25)</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead><tr className="bg-gray-50"><th className="px-4 py-2 text-left">Income Slab</th><th className="px-4 py-2 text-left">Tax Rate</th></tr></thead>
              <tbody>
                <tr><td className="px-4 py-2 border-t">Up to ₹3,00,000</td><td className="px-4 py-2 border-t">Nil</td></tr>
                <tr><td className="px-4 py-2 border-t">₹3,00,001 - ₹7,00,000</td><td className="px-4 py-2 border-t">5%</td></tr>
                <tr><td className="px-4 py-2 border-t">₹7,00,001 - ₹10,00,000</td><td className="px-4 py-2 border-t">10%</td></tr>
                <tr><td className="px-4 py-2 border-t">₹10,00,001 - ₹12,00,000</td><td className="px-4 py-2 border-t">15%</td></tr>
                <tr><td className="px-4 py-2 border-t">₹12,00,001 - ₹15,00,000</td><td className="px-4 py-2 border-t">20%</td></tr>
                <tr><td className="px-4 py-2 border-t">Above ₹15,00,000</td><td className="px-4 py-2 border-t">30%</td></tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-xl font-semibold text-[var(--color-text)]">Old Regime Tax Slabs</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead><tr className="bg-gray-50"><th className="px-4 py-2 text-left">Income Slab</th><th className="px-4 py-2 text-left">Tax Rate</th></tr></thead>
              <tbody>
                <tr><td className="px-4 py-2 border-t">Up to ₹2,50,000</td><td className="px-4 py-2 border-t">Nil</td></tr>
                <tr><td className="px-4 py-2 border-t">₹2,50,001 - ₹5,00,000</td><td className="px-4 py-2 border-t">5%</td></tr>
                <tr><td className="px-4 py-2 border-t">₹5,00,001 - ₹10,00,000</td><td className="px-4 py-2 border-t">20%</td></tr>
                <tr><td className="px-4 py-2 border-t">Above ₹10,00,000</td><td className="px-4 py-2 border-t">30%</td></tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-xl font-semibold text-[var(--color-text)]">Key Deductions in Old Regime</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Section 80C:</strong> Up to ₹1.5 lakh (PF, PPF, ELSS, LIC, tuition fees)</li>
            <li><strong>Section 80D:</strong> Health insurance — ₹25,000 (self) + ₹25,000 (parents)</li>
            <li><strong>HRA Exemption:</strong> Based on salary, rent paid, and city</li>
            <li><strong>Section 24(b):</strong> Home loan interest up to ₹2 lakh</li>
            <li><strong>Section 80CCD(1B):</strong> NPS contribution up to ₹50,000</li>
            <li><strong>Standard Deduction:</strong> ₹50,000</li>
          </ul>

          <h2 className="text-xl font-semibold text-[var(--color-text)]">When Old Regime is Better</h2>
          <p>If your total deductions (80C + 80D + HRA + home loan interest + NPS + standard deduction) exceed approximately <strong>₹3.75 lakh</strong>, the old regime likely saves more tax. This is common for:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>People paying rent in metro cities (high HRA benefit)</li>
            <li>Home loan borrowers (Section 24(b) deduction)</li>
            <li>Those with health insurance for self and parents</li>
            <li>NPS contributors</li>
          </ul>

          <h2 className="text-xl font-semibold text-[var(--color-text)]">When New Regime is Better</h2>
          <p>The new regime is better if you:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Don&apos;t have many deductions to claim</li>
            <li>Live in own house (no HRA) and no home loan</li>
            <li>Have income below ₹7.75 lakh (zero tax with standard deduction)</li>
            <li>Prefer simplicity without tracking multiple deductions</li>
          </ul>

          <h2 className="text-xl font-semibold text-[var(--color-text)]">Quick Decision Rule</h2>
          <p>Calculate your total deductions. If they exceed ₹3.75 lakh → Old Regime. Otherwise → New Regime. But always calculate both to be sure.</p>

          <p>Use our <a href="/tools/income-tax-calculator" className="text-[var(--color-primary)] hover:underline font-medium">Income Tax Calculator</a> to compare tax under both regimes instantly.</p>
        </div>
      </div>
      <AdSlot />
    </article>
  );
}
