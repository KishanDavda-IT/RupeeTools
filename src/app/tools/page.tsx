import Link from 'next/link';
import { tools, categories } from '@/lib/tools';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'All Financial Calculators India - Free Online Tools',
  description:
    'Browse all free Indian financial calculators: SIP, EMI, GST, FD, PPF, Income Tax, Salary, HRA, NPS, and more. 100% free, no sign-up.',
};

export default function ToolsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-[var(--color-text)] mb-4">
          All Financial Calculators
        </h1>
        <p className="text-[var(--color-text-light)] text-lg max-w-2xl mx-auto">
          Explore our full collection of free financial tools designed for the Indian financial system.
        </p>
      </div>

      {categories.map((category) => (
        <div key={category} className="mb-12">
          <h2 className="text-xl font-semibold text-[var(--color-text)] mb-6 flex items-center gap-2">
            <span className="w-1 h-6 bg-[var(--color-primary)] rounded-full"></span>
            {category} Calculators
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {tools
              .filter((t) => t.category === category)
              .map((tool) => (
                <Link
                  key={tool.slug}
                  href={`/tools/${tool.slug}`}
                  className="group bg-white rounded-2xl p-6 border border-[var(--color-border)] hover:border-[var(--color-primary)]/30 hover:shadow-xl hover:shadow-[var(--color-primary)]/5 transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="text-4xl mb-4">{tool.icon}</div>
                  <h3 className="text-lg font-semibold text-[var(--color-text)] group-hover:text-[var(--color-primary)] transition-colors mb-2">
                    {tool.name}
                  </h3>
                  <p className="text-sm text-[var(--color-text-light)] leading-relaxed">{tool.description}</p>
                </Link>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
}
