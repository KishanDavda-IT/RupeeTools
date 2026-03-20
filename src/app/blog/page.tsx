import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { blogPosts } from '@/lib/blog';

export const metadata: Metadata = {
  title: 'Blog - Financial Tips & Guides for Indians',
  description: 'Read expert articles on SIP investment, EMI calculation, tax planning, and personal finance tips for Indians.',
};

export default function BlogPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-[var(--color-text)] mb-4">Blog</h1>
        <p className="text-[var(--color-text-light)] text-lg max-w-2xl mx-auto">Financial tips, guides, and insights to help you make better money decisions.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post) => (
          <Link key={post.slug} href={`/blog/${post.slug}`} className="group bg-white rounded-2xl overflow-hidden border border-[var(--color-border)] hover:shadow-xl hover:shadow-[var(--color-primary)]/5 transition-all duration-300 hover:-translate-y-1">
            <div className="relative h-48 bg-gray-100 flex items-center justify-center">
              <Image src={post.image} alt={post.title} fill className="object-cover" />
            </div>
            <div className="p-6">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-[var(--color-primary)]/10 text-[var(--color-primary)]">{post.category}</span>
                <span className="text-xs text-[var(--color-text-lighter)]">{post.readTime}</span>
              </div>
              <h2 className="text-lg font-semibold text-[var(--color-text)] group-hover:text-[var(--color-primary)] transition-colors mb-2">{post.title}</h2>
              <p className="text-sm text-[var(--color-text-light)] leading-relaxed">{post.excerpt}</p>
              <p className="text-xs text-[var(--color-text-lighter)] mt-3">{new Date(post.date).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
