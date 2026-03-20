import type { Metadata } from 'next';
import EMICalculatorClient from './EMICalculatorClient';

export const metadata: Metadata = {
  title: 'EMI Calculator India 2024 - Home Loan, Car Loan, Personal Loan EMI',
  description: 'Free EMI Calculator for home loan, car loan, personal loan. Calculate monthly EMI, total interest, and total payment instantly.',
};

export default function EMICalculatorPage() {
  return <EMICalculatorClient />;
}
