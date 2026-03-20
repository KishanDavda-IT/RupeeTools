import type { Metadata } from 'next';
import HRACalculatorClient from './HRACalculatorClient';
export const metadata: Metadata = { title: 'HRA Exemption Calculator India 2024 - Calculate HRA Tax Benefit', description: 'Free HRA Calculator. Calculate HRA exemption amount based on basic salary, rent paid, and metro/non-metro city type.' };
export default function Page() { return <HRACalculatorClient />; }
