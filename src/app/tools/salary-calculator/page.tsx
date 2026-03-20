import type { Metadata } from 'next';
import SalaryCalculatorClient from './SalaryCalculatorClient';
export const metadata: Metadata = { title: 'Salary Calculator India 2024 - CTC to In-hand Salary', description: 'Free Salary Calculator. Calculate in-hand salary from CTC after PF, professional tax, and other deductions.' };
export default function Page() { return <SalaryCalculatorClient />; }
