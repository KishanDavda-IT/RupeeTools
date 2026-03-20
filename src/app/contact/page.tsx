import type { Metadata } from 'next';
import ContactClient from './ContactClient';
export const metadata: Metadata = { title: 'Contact Us - RupeeTools', description: 'Contact RupeeTools team for questions, suggestions, or feedback about our free Indian financial calculators.' };
export default function Page() { return <ContactClient />; }
