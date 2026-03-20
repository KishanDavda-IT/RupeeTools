import type { Metadata } from 'next';
import PPFCalculatorClient from './PPFCalculatorClient';
export const metadata: Metadata = { title: 'PPF Calculator India 2024 - Public Provident Fund Calculator', description: 'Free PPF Calculator. Calculate maturity amount and interest earned on Public Provident Fund with current 7.1% interest rate.' };
export default function PPFCalculatorPage() { return <PPFCalculatorClient />; }
