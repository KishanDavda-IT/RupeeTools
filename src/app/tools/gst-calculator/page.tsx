import type { Metadata } from 'next';
import GSTCalculatorClient from './GSTCalculatorClient';

export const metadata: Metadata = {
  title: 'GST Calculator India 2024 - Calculate GST Amount Online',
  description: 'Free GST Calculator for India. Calculate GST amount for 5%, 12%, 18%, 28% slabs. Get CGST, SGST breakdown instantly.',
};

export default function GSTCalculatorPage() {
  return <GSTCalculatorClient />;
}
