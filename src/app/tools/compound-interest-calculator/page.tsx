import type { Metadata } from 'next';
import CompoundInterestClient from './CompoundInterestClient';
export const metadata: Metadata = { title: 'Compound Interest Calculator India - Calculate CI Online', description: 'Free Compound Interest Calculator. Calculate compound interest with monthly, quarterly, half-yearly, or yearly compounding.' };
export default function Page() { return <CompoundInterestClient />; }
