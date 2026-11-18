
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Shield, CreditCard, RefreshCw } from 'lucide-react';

interface LegalPageProps {
  type: 'privacy' | 'refund' | 'terms';
  onNavigate: (view: 'home' | 'privacy' | 'refund' | 'terms') => void;
}

const LegalPage: React.FC<LegalPageProps> = ({ type, onNavigate }) => {
  const renderContent = () => {
    switch (type) {
      case 'privacy':
        // Served as static HTML from /privacy.html (public/privacy.html).
        return null;
      case 'refund':
        return (
          <div className="space-y-12">
            <header className="mb-20">
              <div className="inline-flex items-center gap-2 text-[#38A4BE] font-bold uppercase tracking-widest text-sm mb-6">
                <RefreshCw size={20} /> Billing Support
              </div>
              <h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-[#121E1F] mb-8">Cancellation & Refund Policy</h1>
              <p className="text-xl text-gray-400">Last Updated: October 2023</p>
            </header>

            <section className="space-y-10">
              <div className="legal-section p-8 bg-gray-50 rounded-3xl">
                <h2 className="text-2xl font-bold text-[#121E1F] mb-4">Cancellation Policy</h2>
                <p className="text-lg text-gray-500 leading-relaxed mb-6">
                  You may cancel your subscription anytime via your Account Settings on the app. Upon cancellation, your access to learning content continues until the end of the current billing cycle.
                </p>
                <div className="bg-white p-6 rounded-2xl border border-gray-200">
                   <p className="text-sm font-bold text-[#121E1F] uppercase mb-2">Example Case</p>
                   <p className="text-gray-500 italic">"If you subscribe on June 1st and cancel on June 10th, your access remains valid until the end of June. You will not be billed for July."</p>
                </div>
              </div>

              <div className="legal-section">
                <h2 className="text-2xl font-bold text-[#121E1F] mb-4">Refund Policy</h2>
                <p className="text-lg text-gray-500 leading-relaxed mb-6">
                  After payment is processed, Fika Learn follows a <strong>no-refund policy</strong> for monthly subscription plans.
                </p>
                <h3 className="text-lg font-bold text-[#121E1F] mb-2">Refunds will not be issued if:</h3>
                <ul className="list-disc pl-6 text-lg text-gray-500 space-y-2 mb-8">
                  <li>The current billing cycle has already started.</li>
                  <li>The user fails to cancel before the renewal date.</li>
                </ul>

                <h3 className="text-lg font-bold text-[#121E1F] mb-2">Exceptions (Case-by-Case):</h3>
                <ul className="list-disc pl-6 text-lg text-gray-500 space-y-2">
                  <li>Duplicate payments</li>
                  <li>Unauthorised or fraudulent transactions (proof required)</li>
                  <li>Technical issues preventing access (verified by support)</li>
                </ul>
              </div>

              <div className="legal-section bg-[#121E1F] text-white p-10 rounded-[2.5rem]">
                <h2 className="text-2xl font-bold mb-4">Auto-Renewal Notice</h2>
                <ul className="space-y-4 opacity-80">
                  <li>• All plans are billed automatically every month on the same date as original purchase.</li>
                  <li>• Cancellation must be completed before the next billing date to avoid renewal.</li>
                  <li>• Users are responsible for managing their subscription status.</li>
                </ul>
              </div>
            </section>
          </div>
        );

      case 'terms':
        return (
          <div className="space-y-12">
            <header className="mb-20">
              <div className="inline-flex items-center gap-2 text-[#38A4BE] font-bold uppercase tracking-widest text-sm mb-6">
                <CreditCard size={20} /> Financials
              </div>
              <h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-[#121E1F] mb-8">Payment Terms & Conditions</h1>
            </header>

            <section className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="legal-section border border-gray-100 p-8 rounded-3xl">
                <h2 className="text-xl font-bold text-[#121E1F] mb-4">1. Advance Payment</h2>
                <p className="text-gray-500 leading-relaxed">
                  For large-scale institutions (100+ users), an advance of 50% must be paid before deployment. 
                  For fewer than 100 users, full payment (100%) must be made online through the application for instant access.
                </p>
              </div>

              <div className="legal-section border border-gray-100 p-8 rounded-3xl">
                <h2 className="text-xl font-bold text-[#121E1F] mb-4">2. Credit Period</h2>
                <p className="text-gray-500 leading-relaxed">
                  The remaining 50% of the invoice value must be paid within 15 days from the date of the invoice.
                </p>
              </div>

              <div className="legal-section bg-gray-50 p-8 rounded-3xl md:col-span-2">
                <h2 className="text-xl font-bold text-[#121E1F] mb-6">3. Bank & Transfer Details</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <p className="text-sm text-gray-400">Account Holder</p>
                    <p className="font-bold">dVerse Technologies Pvt Ltd</p>
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm text-gray-400">Jurisdiction</p>
                    <p className="font-bold">Chennai, India</p>
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm text-gray-400">Taxes</p>
                    <p className="font-bold">GST charged extra at prevailing rates</p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        );
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white pt-40 pb-32"
    >
      <div className="max-w-4xl mx-auto px-6">
        <button 
          onClick={() => onNavigate('home')}
          className="inline-flex items-center gap-2 text-gray-400 hover:text-[#121E1F] transition-colors mb-12 group"
        >
          <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
          Back to Home
        </button>

        {renderContent()}
      </div>
    </motion.div>
  );
};

export default LegalPage;
