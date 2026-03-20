'use client';

import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl md:text-4xl font-bold text-[var(--color-text)] mb-3">Contact Us</h1>
      <p className="text-[var(--color-text-light)] text-lg mb-8">Have a question, suggestion, or feedback? We&apos;d love to hear from you.</p>

      {submitted ? (
        <div className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center">
          <div className="text-4xl mb-4">✅</div>
          <h2 className="text-xl font-semibold text-green-800 mb-2">Thank You!</h2>
          <p className="text-green-700">Your message has been submitted. We&apos;ll get back to you soon.</p>
          <button onClick={() => { setSubmitted(false); setFormData({ name: '', email: '', subject: '', message: '' }); }} className="mt-4 text-[var(--color-primary)] font-medium hover:underline">Send another message</button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-6 md:p-8 border border-[var(--color-border)] shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-sm font-medium text-[var(--color-text)] mb-2">Name</label>
              <input type="text" required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="calculator-input" placeholder="Your name" />
            </div>
            <div>
              <label className="block text-sm font-medium text-[var(--color-text)] mb-2">Email</label>
              <input type="email" required value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="calculator-input" placeholder="your@email.com" />
            </div>
          </div>
          <div className="mb-6">
            <label className="block text-sm font-medium text-[var(--color-text)] mb-2">Subject</label>
            <input type="text" required value={formData.subject} onChange={(e) => setFormData({ ...formData, subject: e.target.value })} className="calculator-input" placeholder="What's this about?" />
          </div>
          <div className="mb-6">
            <label className="block text-sm font-medium text-[var(--color-text)] mb-2">Message</label>
            <textarea required rows={5} value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} className="calculator-input resize-none" placeholder="Your message..." />
          </div>
          <button type="submit" className="calculator-btn">Send Message</button>
        </form>
      )}
    </div>
  );
}
