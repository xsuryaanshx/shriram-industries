// ─────────────────────────────────────────────
//  WhatsAppCatalogModal.tsx — 1-Tap Catalog & B2B Funnel
// ─────────────────────────────────────────────
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, CheckCircle2, Building2, Compass, Store, Home, ArrowRight, ShieldCheck, Download } from 'lucide-react';
import { siteConfig } from '@/config/site';

interface WhatsAppCatalogModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultRole?: string;
  defaultGrade?: string;
}

const ROLES = [
  { id: 'builder', label: 'Builder / Contractor', desc: 'Bulk project pricing (SS 202 & SS 304)', icon: Building2 },
  { id: 'architect', label: 'Architect / Interior Designer', desc: 'Full catalog, CAD specs & finish kit', icon: Compass },
  { id: 'dealer', label: 'Hardware Retailer / Dealer', desc: 'Wholesale distributor slabs & margins', icon: Store },
  { id: 'homeowner', label: 'Homeowner / Renovator', desc: 'Direct factory kitchen package', icon: Home },
];

const GRADES = [
  { id: 'ss304', label: 'SS 304 Premium', sub: '100% Anti-rust food-grade' },
  { id: 'ss202', label: 'SS 202 Commercial', sub: 'Budget & bulk project grade' },
  { id: 'both', label: 'Both / Custom Sizes', sub: 'Complete product catalog' },
];

export default function WhatsAppCatalogModal({
  isOpen,
  onClose,
  defaultRole = 'architect',
  defaultGrade = 'both',
}: WhatsAppCatalogModalProps) {
  const [selectedRole, setSelectedRole] = useState(defaultRole);
  const [selectedGrade, setSelectedGrade] = useState(defaultGrade);
  const [city, setCity] = useState('Indore');
  const [name, setName] = useState('');

  const cleanPhone = siteConfig.contact.whatsapp?.replace(/[^0-9]/g, '') || '918047639215';

  const roleObj = ROLES.find((r) => r.id === selectedRole);
  const gradeObj = GRADES.find((g) => g.id === selectedGrade);

  const generateWhatsAppUrl = () => {
    const greeting = name ? `Namaste Shriram Industries, this is ${name}.` : 'Namaste Shriram Industries!';
    const message = `${greeting}
I would like to receive the 2024 Trade Catalog & Wholesale Price List.

• Requirement Type: ${roleObj?.label || 'General Inquiry'}
• Preferred Grade: ${gradeObj?.label || 'All Grades'}
• City/Location: ${city || 'Madhya Pradesh'}

Please share the digital PDF catalog and current wholesale rate card. Thank you!`;

    return `https://wa.me/${cleanPhone}?text=${encodeURIComponent(message)}`;
  };

  const handleLaunchWhatsApp = () => {
    window.open(generateWhatsAppUrl(), '_blank', 'noopener,noreferrer');
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6" role="dialog" aria-modal="true" aria-labelledby="catalog-modal-title">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-xs"
            onClick={onClose}
          />

          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 16 }}
            transition={{ duration: 0.2 }}
            className="relative w-full max-w-lg bg-white border border-[var(--color-border)] rounded-2xl shadow-2xl overflow-hidden z-10 flex flex-col max-h-[92vh]"
          >
            {/* Header banner */}
            <div className="bg-[#1a1d21] text-white p-5 sm:p-6 relative">
              <button
                onClick={onClose}
                className="absolute top-4 right-4 text-white/70 hover:text-white p-1 rounded-full hover:bg-white/10 transition-colors cursor-pointer"
                aria-label="Close dialog"
              >
                <X size={20} />
              </button>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#25D366]/20 border border-[#25D366]/40 text-[#25D366] text-xs font-semibold mb-2">
                <Download size={13} />
                Instant 1-Tap WhatsApp Catalog
              </div>
              <h3 id="catalog-modal-title" className="text-xl sm:text-2xl font-bold tracking-tight text-white">
                Get Factory Price List & 2024 Catalog
              </h3>
              <p className="text-white/75 text-xs sm:text-sm mt-1">
                Receive the complete SS 202 & SS 304 kitchen hardware specs & wholesale price slabs directly on WhatsApp.
              </p>
            </div>

            {/* Scrollable Form Body */}
            <div className="p-5 sm:p-6 overflow-y-auto space-y-5 bg-white text-[var(--color-foreground)]">
              {/* Role selection */}
              <div>
                <label className="block text-xs font-semibold text-[var(--color-foreground)] uppercase tracking-wider mb-2">
                  1. Who are you purchasing for?
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {ROLES.map((role) => {
                    const Icon = role.icon;
                    const isSelected = selectedRole === role.id;
                    return (
                      <button
                        key={role.id}
                        type="button"
                        onClick={() => setSelectedRole(role.id)}
                        className={`flex items-start gap-2.5 p-3 rounded-xl border text-left transition-all cursor-pointer ${
                          isSelected
                            ? 'border-[var(--color-accent)] bg-orange-50/50 shadow-xs'
                            : 'border-[var(--color-border)] hover:border-gray-400 bg-white'
                        }`}
                      >
                        <Icon size={18} className={`mt-0.5 shrink-0 ${isSelected ? 'text-[var(--color-accent)]' : 'text-gray-400'}`} />
                        <div>
                          <div className="text-xs font-semibold text-[var(--color-foreground)] leading-tight">
                            {role.label}
                          </div>
                          <div className="text-[0.65rem] text-[var(--color-muted)] mt-0.5 leading-snug">
                            {role.desc}
                          </div>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Grade selection */}
              <div>
                <label className="block text-xs font-semibold text-[var(--color-foreground)] uppercase tracking-wider mb-2">
                  2. Select Steel Grade / Requirement
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {GRADES.map((grade) => {
                    const isSelected = selectedGrade === grade.id;
                    return (
                      <button
                        key={grade.id}
                        type="button"
                        onClick={() => setSelectedGrade(grade.id)}
                        className={`p-2.5 rounded-xl border text-center transition-all cursor-pointer ${
                          isSelected
                            ? 'border-[var(--color-accent)] bg-orange-50/50 text-[var(--color-accent)] font-semibold'
                            : 'border-[var(--color-border)] hover:border-gray-400 text-gray-700 bg-white'
                        }`}
                      >
                        <div className="text-xs font-bold">{grade.label}</div>
                        <div className="text-[0.6rem] text-[var(--color-muted)] mt-0.5 leading-tight">{grade.sub}</div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Name & City fields */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label htmlFor="user-name" className="block text-xs font-semibold text-[var(--color-foreground)] mb-1">
                    Your Name (Optional)
                  </label>
                  <input
                    id="user-name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Rahul Sharma"
                    className="w-full px-3 py-2 text-xs border border-[var(--color-border)] rounded-lg bg-white text-[var(--color-foreground)] focus:outline-none focus:border-[var(--color-accent)]"
                  />
                </div>
                <div>
                  <label htmlFor="user-city" className="block text-xs font-semibold text-[var(--color-foreground)] mb-1">
                    Your City / Region
                  </label>
                  <input
                    id="user-city"
                    type="text"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    placeholder="e.g. Indore, Bhopal, Ujjain"
                    className="w-full px-3 py-2 text-xs border border-[var(--color-border)] rounded-lg bg-white text-[var(--color-foreground)] focus:outline-none focus:border-[var(--color-accent)]"
                  />
                </div>
              </div>

              {/* Trust highlights */}
              <div className="flex items-center gap-4 py-2 border-t border-b border-[var(--color-border)] text-[0.68rem] text-[var(--color-muted)]">
                <span className="inline-flex items-center gap-1">
                  <ShieldCheck size={14} className="text-emerald-600" /> Direct Factory Pricing
                </span>
                <span className="inline-flex items-center gap-1">
                  <CheckCircle2 size={14} className="text-emerald-600" /> Polo Ground Dispatch
                </span>
                <span className="inline-flex items-center gap-1">
                  <CheckCircle2 size={14} className="text-emerald-600" /> Verified SS 202 & SS 304
                </span>
              </div>
            </div>

            {/* Footer action */}
            <div className="p-4 sm:p-5 bg-zinc-50 border-t border-[var(--color-border)] flex items-center justify-between gap-3">
              <button
                type="button"
                onClick={onClose}
                className="text-xs text-[var(--color-muted)] hover:text-[var(--color-foreground)] py-2 px-3 cursor-pointer"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={handleLaunchWhatsApp}
                className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-[#25D366] hover:bg-[#20ba59] text-white font-medium text-xs tracking-wider uppercase shadow-md transition-all cursor-pointer"
              >
                <MessageCircle size={17} className="fill-white/20" />
                <span>Open WhatsApp & Receive Catalog</span>
                <ArrowRight size={14} />
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
