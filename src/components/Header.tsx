'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white border-b border-[var(--color-border)] sticky top-0 z-50 backdrop-blur-lg bg-white/90">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-9 h-9 bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-accent)] rounded-lg flex items-center justify-center text-white font-bold text-lg shadow-md group-hover:shadow-lg transition-shadow">
              ₹
            </div>
            <span className="text-xl font-bold text-[var(--color-text)]">
              Rupee<span className="text-[var(--color-primary)]">Tools</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-sm font-medium text-[var(--color-text-light)] hover:text-[var(--color-primary)] transition-colors">
              Home
            </Link>
            <Link href="/tools" className="text-sm font-medium text-[var(--color-text-light)] hover:text-[var(--color-primary)] transition-colors">
              All Tools
            </Link>
            <Link href="/blog" className="text-sm font-medium text-[var(--color-text-light)] hover:text-[var(--color-primary)] transition-colors">
              Blog
            </Link>
            <Link href="/about" className="text-sm font-medium text-[var(--color-text-light)] hover:text-[var(--color-primary)] transition-colors">
              About
            </Link>
            <Link href="/contact" className="text-sm font-medium text-[var(--color-text-light)] hover:text-[var(--color-primary)] transition-colors">
              Contact
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-[var(--color-border)]">
            <div className="flex flex-col gap-3">
              <Link href="/" className="px-3 py-2 rounded-lg text-sm font-medium text-[var(--color-text-light)] hover:bg-gray-50 hover:text-[var(--color-primary)] transition-colors" onClick={() => setIsMenuOpen(false)}>
                Home
              </Link>
              <Link href="/tools" className="px-3 py-2 rounded-lg text-sm font-medium text-[var(--color-text-light)] hover:bg-gray-50 hover:text-[var(--color-primary)] transition-colors" onClick={() => setIsMenuOpen(false)}>
                All Tools
              </Link>
              <Link href="/blog" className="px-3 py-2 rounded-lg text-sm font-medium text-[var(--color-text-light)] hover:bg-gray-50 hover:text-[var(--color-primary)] transition-colors" onClick={() => setIsMenuOpen(false)}>
                Blog
              </Link>
              <Link href="/about" className="px-3 py-2 rounded-lg text-sm font-medium text-[var(--color-text-light)] hover:bg-gray-50 hover:text-[var(--color-primary)] transition-colors" onClick={() => setIsMenuOpen(false)}>
                About
              </Link>
              <Link href="/contact" className="px-3 py-2 rounded-lg text-sm font-medium text-[var(--color-text-light)] hover:bg-gray-50 hover:text-[var(--color-primary)] transition-colors" onClick={() => setIsMenuOpen(false)}>
                Contact
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
