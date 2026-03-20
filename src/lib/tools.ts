export interface Tool {
  slug: string;
  name: string;
  description: string;
  icon: string;
  category: string;
}

export const tools: Tool[] = [
  {
    slug: 'sip-calculator',
    name: 'SIP Calculator',
    description: 'Calculate returns on your Systematic Investment Plan with expected growth rate.',
    icon: '📈',
    category: 'Investment',
  },
  {
    slug: 'emi-calculator',
    name: 'EMI Calculator',
    description: 'Calculate your monthly EMI for home loans, car loans, and personal loans.',
    icon: '🏦',
    category: 'Loan',
  },
  {
    slug: 'gst-calculator',
    name: 'GST Calculator',
    description: 'Calculate GST amount and total price with different GST rate slabs.',
    icon: '🧾',
    category: 'Tax',
  },
  {
    slug: 'fd-calculator',
    name: 'FD Calculator',
    description: 'Calculate maturity amount and interest earned on Fixed Deposits.',
    icon: '🏧',
    category: 'Investment',
  },
  {
    slug: 'ppf-calculator',
    name: 'PPF Calculator',
    description: 'Calculate Public Provident Fund maturity amount over 15+ years.',
    icon: '🏛️',
    category: 'Investment',
  },
  {
    slug: 'income-tax-calculator',
    name: 'Income Tax Calculator',
    description: 'Calculate income tax under Old and New regime for FY 2024-25.',
    icon: '💰',
    category: 'Tax',
  },
  {
    slug: 'lumpsum-calculator',
    name: 'Lumpsum Calculator',
    description: 'Calculate returns on one-time lump sum mutual fund investments.',
    icon: '💎',
    category: 'Investment',
  },
  {
    slug: 'simple-interest-calculator',
    name: 'Simple Interest Calculator',
    description: 'Calculate simple interest and total amount on your principal.',
    icon: '📊',
    category: 'Basic',
  },
  {
    slug: 'compound-interest-calculator',
    name: 'Compound Interest Calculator',
    description: 'Calculate compound interest with various compounding frequencies.',
    icon: '📉',
    category: 'Basic',
  },
  {
    slug: 'salary-calculator',
    name: 'Salary Calculator',
    description: 'Calculate in-hand salary from CTC after PF and professional tax deductions.',
    icon: '💼',
    category: 'Salary',
  },
  {
    slug: 'hra-calculator',
    name: 'HRA Exemption Calculator',
    description: 'Calculate HRA tax exemption based on salary, rent, and city type.',
    icon: '🏠',
    category: 'Tax',
  },
  {
    slug: 'nps-calculator',
    name: 'NPS Calculator',
    description: 'Calculate your National Pension System corpus at retirement.',
    icon: '👴',
    category: 'Retirement',
  },
  {
    slug: 'stepup-sip-calculator',
    name: 'Step-up SIP Calculator',
    description: 'Calculate SIP returns with annual step-up in monthly investment.',
    icon: '🚀',
    category: 'Investment',
  },
  {
    slug: 'loan-eligibility-calculator',
    name: 'Loan Eligibility Calculator',
    description: 'Check your maximum loan eligibility based on income and existing EMIs.',
    icon: '✅',
    category: 'Loan',
  },
  {
    slug: 'roi-calculator',
    name: 'ROI Calculator',
    description: 'Calculate Return on Investment percentage and annualized returns.',
    icon: '🎯',
    category: 'Investment',
  },
];

export const categories = [...new Set(tools.map((t) => t.category))];
