import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service - RupeeTools',
  description: 'Terms of Service for RupeeTools - Read our terms and conditions for using our free financial calculators.',
};

export default function TermsOfServicePage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl md:text-4xl font-bold text-[var(--color-text)] mb-6">Terms of Service</h1>
      <p className="text-[var(--color-text-light)] mb-8">Last updated: March 20, 2025</p>

      <div className="bg-white rounded-2xl p-6 md:p-8 border border-[var(--color-border)] prose max-w-none">
        <div className="space-y-6 text-[var(--color-text-light)] text-sm leading-relaxed">
          <section>
            <h2 className="text-lg font-semibold text-[var(--color-text)] mb-3">1. Acceptance of Terms</h2>
            <p>By accessing and using RupeeTools, you agree to be bound by these Terms of Service. If you do not agree with any part of these terms, please do not use our website.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[var(--color-text)] mb-3">2. Use of Calculators</h2>
            <p>Our financial calculators are provided for informational and educational purposes only. The results are estimates based on the inputs you provide and standard financial formulas.</p>
            <p><strong>Important:</strong> Calculator results should not be considered as financial advice. Actual returns, taxes, EMIs, and other financial figures may differ from the estimates provided. Always consult a qualified financial advisor before making financial decisions.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[var(--color-text)] mb-3">3. Accuracy of Information</h2>
            <p>While we strive to provide accurate calculators and content, we make no warranties or representations about the accuracy, completeness, or reliability of the information on this website. Tax rates, interest rates, and financial regulations may change, and our tools may not always reflect the latest changes immediately.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[var(--color-text)] mb-3">4. Limitation of Liability</h2>
            <p>RupeeTools shall not be liable for any direct, indirect, incidental, special, or consequential damages arising from your use of, or inability to use, our website or the calculators. This includes but is not limited to financial losses resulting from reliance on calculator results.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[var(--color-text)] mb-3">5. Intellectual Property</h2>
            <p>All content on RupeeTools, including text, graphics, logos, and calculator designs, is the property of RupeeTools and is protected by applicable copyright and trademark laws.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[var(--color-text)] mb-3">6. Third-Party Links</h2>
            <p>Our website may contain links to third-party websites. We are not responsible for the content or privacy practices of these sites. Visiting third-party links is at your own risk.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[var(--color-text)] mb-3">7. Advertising</h2>
            <p>We display advertisements on our website through third-party advertising networks. We are not responsible for the content of these advertisements. Any interaction with advertisements is between you and the advertiser.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[var(--color-text)] mb-3">8. Modifications</h2>
            <p>We reserve the right to modify these Terms of Service at any time. Changes will be effective immediately upon posting. Your continued use of the website after changes constitutes acceptance of the modified terms.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[var(--color-text)] mb-3">9. Governing Law</h2>
            <p>These Terms of Service are governed by and construed in accordance with the laws of India. Any disputes arising from these terms shall be subject to the exclusive jurisdiction of the courts in India.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[var(--color-text)] mb-3">10. Contact</h2>
            <p>For questions about these Terms of Service, please reach out via our <a href="/contact" className="text-[var(--color-primary)] hover:underline">contact page</a>.</p>
          </section>
        </div>
      </div>
    </div>
  );
}
