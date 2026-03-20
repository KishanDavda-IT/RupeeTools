import type { Metadata } from 'next';
import LoanEligibilityClient from './LoanEligibilityClient';
export const metadata: Metadata = { title: 'Loan Eligibility Calculator India 2024 - Check Max Loan Amount', description: 'Free Loan Eligibility Calculator. Check maximum loan amount you can get based on income, existing EMIs, interest rate, and tenure.' };
export default function Page() { return <LoanEligibilityClient />; }
