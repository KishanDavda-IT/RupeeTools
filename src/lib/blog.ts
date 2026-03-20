export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'how-to-start-sip-investment-india-2024',
    title: 'How to Start SIP Investment in India 2024',
    excerpt: 'A complete beginner\'s guide to starting your first SIP in mutual funds. Learn about choosing funds, KYC, and building wealth through systematic investing.',
    date: '2024-12-15',
    readTime: '8 min read',
    category: 'Investment',
    image: '/images/sip_investment.png',
  },
  {
    slug: 'how-to-calculate-emi-before-taking-loan',
    title: 'How to Calculate EMI Before Taking a Loan',
    excerpt: 'Learn the EMI formula, understand how interest rates and tenure affect your monthly payments, and make informed borrowing decisions.',
    date: '2024-12-10',
    readTime: '6 min read',
    category: 'Loans',
    image: '/images/emi_calculator.png',
  },
  {
    slug: 'old-vs-new-tax-regime-which-is-better',
    title: 'Old vs New Tax Regime: Which is Better?',
    excerpt: 'A detailed comparison of Old and New income tax regimes for FY 2024-25. Find out which regime saves you more tax based on your deductions.',
    date: '2024-12-05',
    readTime: '10 min read',
    category: 'Tax',
    image: '/images/tax_regime.png',
  },
];
