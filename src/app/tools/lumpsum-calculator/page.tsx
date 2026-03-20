import type { Metadata } from 'next';
import LumpsumCalculatorClient from './LumpsumCalculatorClient';
export const metadata: Metadata = { title: 'Lumpsum Calculator India 2024 - Mutual Fund Lumpsum Returns', description: 'Free Lumpsum Calculator for mutual funds. Calculate one-time investment returns with expected return rate and time period.' };
export default function LumpsumCalculatorPage() { return <LumpsumCalculatorClient />; }
