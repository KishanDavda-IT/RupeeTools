import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy - RupeeTools',
  description: 'Privacy Policy for RupeeTools - Learn how we handle your data and privacy.',
};

export default function PrivacyPolicyPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl md:text-4xl font-bold text-[var(--color-text)] mb-6">Privacy Policy</h1>
      <p className="text-[var(--color-text-light)] mb-8">Last updated: March 20, 2025</p>

      <div className="bg-white rounded-2xl p-6 md:p-8 border border-[var(--color-border)] prose max-w-none">
        <div className="space-y-6 text-[var(--color-text-light)] text-sm leading-relaxed">
          <section>
            <h2 className="text-lg font-semibold text-[var(--color-text)] mb-3">1. Introduction</h2>
            <p>Welcome to RupeeTools (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;). We are committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[var(--color-text)] mb-3">2. Information We Collect</h2>
            <p><strong>Calculator Data:</strong> All financial calculations are performed entirely in your browser. We do not collect, store, or transmit any financial data you enter into our calculators.</p>
            <p><strong>Analytics:</strong> We may use third-party analytics tools (like Google Analytics) to collect anonymous usage data such as pages visited, time on site, and browser type to improve our services.</p>
            <p><strong>Cookies:</strong> We use cookies and similar technologies for analytics and advertising purposes. You can control cookies through your browser settings.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[var(--color-text)] mb-3">3. How We Use Information</h2>
            <p>We use the information we collect to:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Improve our website and user experience</li>
              <li>Analyze website traffic and usage patterns</li>
              <li>Display relevant advertisements</li>
              <li>Respond to your inquiries via the contact form</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[var(--color-text)] mb-3">4. Third-Party Services</h2>
            <p>Our website may use third-party services including Google AdSense for advertising and Google Analytics for analytics. These services may collect information through cookies and similar technologies. Please refer to their respective privacy policies for more information.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[var(--color-text)] mb-3">5. Data Security</h2>
            <p>We implement appropriate security measures to protect against unauthorized access, alteration, disclosure, or destruction of information. However, no method of transmission over the Internet is 100% secure.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[var(--color-text)] mb-3">6. Children&apos;s Privacy</h2>
            <p>Our website is not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[var(--color-text)] mb-3">7. Changes to This Policy</h2>
            <p>We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated revision date.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[var(--color-text)] mb-3">8. Contact Us</h2>
            <p>If you have questions about this Privacy Policy, please contact us through our <a href="/contact" className="text-[var(--color-primary)] hover:underline">contact page</a>.</p>
          </section>
        </div>
      </div>
    </div>
  );
}
