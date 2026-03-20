import type { Metadata } from 'next';
import FDCalculatorClient from './FDCalculatorClient';
export const metadata: Metadata = { title: 'FD Calculator India 2024 - Fixed Deposit Maturity Calculator', description: 'Free FD Calculator. Calculate Fixed Deposit maturity amount and interest earned with quarterly, monthly, yearly compounding.' };
export default function FDCalculatorPage() { return <FDCalculatorClient />; }
