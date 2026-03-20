import type { Metadata } from 'next';
import SimpleInterestClient from './SimpleInterestClient';
export const metadata: Metadata = { title: 'Simple Interest Calculator India - Calculate SI Online', description: 'Free Simple Interest Calculator. Calculate simple interest and total amount on principal with rate and time period.' };
export default function Page() { return <SimpleInterestClient />; }
