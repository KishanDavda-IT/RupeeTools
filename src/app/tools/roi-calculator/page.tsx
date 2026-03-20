import type { Metadata } from 'next';
import ROICalculatorClient from './ROICalculatorClient';
export const metadata: Metadata = { title: 'ROI Calculator India 2024 - Return on Investment Calculator', description: 'Free ROI Calculator. Calculate ROI percentage and annualized return (CAGR) for any investment. Compare investment returns easily.' };
export default function Page() { return <ROICalculatorClient />; }
