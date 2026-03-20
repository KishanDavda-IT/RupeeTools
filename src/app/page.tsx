'use client';

import Link from 'next/link';
import { useState } from 'react';
import { tools, categories } from '@/lib/tools';

export default function HomePage() {
  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredTools = tools.filter((tool) => {
    const matchesSearch =
      tool.name.toLowerCase().includes(search.toLowerCase()) ||
      tool.description.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = activeCategory === 'All' || tool.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[var(--color-primary)] via-[#1e40af] to-[var(--color-bg-dark)] text-white">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-[var(--color-accent)] rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-20 w-96 h-96 bg-[var(--color-primary-light)] rounded-full blur-3xl"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-1.5 mb-6 text-sm">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
            100% Free &amp; No Sign-up Required
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
            Free Financial Calculators
            <br />
            <span className="text-[var(--color-accent)]">for Indians</span>
          </h1>
          <p className="text-lg md:text-xl text-blue-100 max-w-2xl mx-auto mb-10">
            Make smarter money decisions with our easy-to-use SIP, EMI, GST, Tax calculators and more. Built for the Indian financial system.
          </p>

          {/* Search Bar */}
          <div className="max-w-xl mx-auto relative">
            <svg
              className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              type="text"
              placeholder="Search calculators... (e.g., SIP, EMI, Tax)"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-12 pr-4 py-4 rounded-2xl text-[var(--color-text)] text-lg bg-white shadow-2xl focus:outline-none focus:ring-4 focus:ring-[var(--color-accent)]/30 transition-all"
            />
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Category Filter */}
        <div className="flex flex-wrap gap-2 mb-10 justify-center">
          <button
            onClick={() => setActiveCategory('All')}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
              activeCategory === 'All'
                ? 'bg-[var(--color-primary)] text-white shadow-lg shadow-[var(--color-primary)]/30'
                : 'bg-white text-[var(--color-text-light)] hover:bg-gray-50 border border-[var(--color-border)]'
            }`}
          >
            All Tools
          </button>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === cat
                  ? 'bg-[var(--color-primary)] text-white shadow-lg shadow-[var(--color-primary)]/30'
                  : 'bg-white text-[var(--color-text-light)] hover:bg-gray-50 border border-[var(--color-border)]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Tools Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTools.map((tool) => (
            <Link
              key={tool.slug}
              href={`/tools/${tool.slug}`}
              className="group bg-white rounded-2xl p-6 border border-[var(--color-border)] hover:border-[var(--color-primary)]/30 hover:shadow-xl hover:shadow-[var(--color-primary)]/5 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="text-4xl mb-4">{tool.icon}</div>
              <h3 className="text-lg font-semibold text-[var(--color-text)] group-hover:text-[var(--color-primary)] transition-colors mb-2">
                {tool.name}
              </h3>
              <p className="text-sm text-[var(--color-text-light)] leading-relaxed">
                {tool.description}
              </p>
              <div className="mt-4 flex items-center gap-1 text-[var(--color-primary)] text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                Use Calculator
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </Link>
          ))}
        </div>

        {filteredTools.length === 0 && (
          <div className="text-center py-16">
            <p className="text-[var(--color-text-light)] text-lg">No calculators found. Try a different search term.</p>
          </div>
        )}
      </section>

      {/* Stats Section */}
      <section className="bg-white border-y border-[var(--color-border)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-[var(--color-primary)]">15+</div>
              <div className="text-sm text-[var(--color-text-light)] mt-1">Financial Tools</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-[var(--color-primary)]">100%</div>
              <div className="text-sm text-[var(--color-text-light)] mt-1">Free to Use</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-[var(--color-primary)]">0</div>
              <div className="text-sm text-[var(--color-text-light)] mt-1">Sign-up Required</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-[var(--color-primary)]">🇮🇳</div>
              <div className="text-sm text-[var(--color-text-light)] mt-1">Made for India</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
