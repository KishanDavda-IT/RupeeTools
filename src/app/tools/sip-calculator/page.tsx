import type { Metadata } from 'next';
import SIPCalculatorClient from './SIPCalculatorClient';

export const metadata: Metadata = {
  title: 'SIP Calculator India 2024 - Calculate Mutual Fund SIP Returns',
  description:
    'Free SIP Calculator to estimate your mutual fund returns. Calculate future value of monthly SIP investments with expected return rate and tenure. Best SIP calculator India.',
};

export default function SIPCalculatorPage() {
  return <SIPCalculatorClient />;
}
