import type { Metadata } from 'next';
import IncomeTaxCalculatorClient from './IncomeTaxCalculatorClient';
export const metadata: Metadata = { title: 'Income Tax Calculator India 2024-25 - Old vs New Regime', description: 'Free Income Tax Calculator for FY 2024-25. Calculate tax under Old and New regime with slab-wise breakdown, cess, and take-home salary.' };
export default function IncomeTaxCalculatorPage() { return <IncomeTaxCalculatorClient />; }
