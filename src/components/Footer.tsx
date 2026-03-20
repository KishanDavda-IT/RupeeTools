import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[var(--color-bg-dark)] text-white mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 bg-gradient-to-br from-[var(--color-primary-light)] to-[var(--color-accent)] rounded-lg flex items-center justify-center text-white font-bold text-lg">
                ₹
              </div>
              <span className="text-xl font-bold">
                Rupee<span className="text-[var(--color-primary-light)]">Tools</span>
              </span>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              Free financial calculators designed for Indians. Make smarter money decisions with our easy-to-use tools.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4 text-gray-200">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-sm text-gray-400 hover:text-[var(--color-accent)] transition-colors">Home</Link></li>
              <li><Link href="/about" className="text-sm text-gray-400 hover:text-[var(--color-accent)] transition-colors">About Us</Link></li>
              <li><Link href="/blog" className="text-sm text-gray-400 hover:text-[var(--color-accent)] transition-colors">Blog</Link></li>
              <li><Link href="/contact" className="text-sm text-gray-400 hover:text-[var(--color-accent)] transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Popular Tools */}
          <div>
            <h3 className="font-semibold mb-4 text-gray-200">Popular Tools</h3>
            <ul className="space-y-2">
              <li><Link href="/tools/sip-calculator" className="text-sm text-gray-400 hover:text-[var(--color-accent)] transition-colors">SIP Calculator</Link></li>
              <li><Link href="/tools/emi-calculator" className="text-sm text-gray-400 hover:text-[var(--color-accent)] transition-colors">EMI Calculator</Link></li>
              <li><Link href="/tools/gst-calculator" className="text-sm text-gray-400 hover:text-[var(--color-accent)] transition-colors">GST Calculator</Link></li>
              <li><Link href="/tools/income-tax-calculator" className="text-sm text-gray-400 hover:text-[var(--color-accent)] transition-colors">Income Tax Calculator</Link></li>
              <li><Link href="/tools/fd-calculator" className="text-sm text-gray-400 hover:text-[var(--color-accent)] transition-colors">FD Calculator</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold mb-4 text-gray-200">Legal</h3>
            <ul className="space-y-2">
              <li><Link href="/privacy-policy" className="text-sm text-gray-400 hover:text-[var(--color-accent)] transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms-of-service" className="text-sm text-gray-400 hover:text-[var(--color-accent)] transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} RupeeTools. All rights reserved.
          </p>
          <p className="text-sm text-gray-500">
            Made with ❤️ for India
          </p>
        </div>
      </div>
    </footer>
  );
}
