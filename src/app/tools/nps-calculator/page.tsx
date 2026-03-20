import type { Metadata } from 'next';
import NPSCalculatorClient from './NPSCalculatorClient';
export const metadata: Metadata = { title: 'NPS Calculator India 2024 - National Pension System Calculator', description: 'Free NPS Calculator. Calculate your pension corpus at retirement based on monthly contributions, age, and expected returns.' };
export default function Page() { return <NPSCalculatorClient />; }
