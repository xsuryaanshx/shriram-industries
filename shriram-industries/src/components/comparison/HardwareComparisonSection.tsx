// ─────────────────────────────────────────────
//  HardwareComparisonSection.tsx
//  Interactive Comparison: Shriram vs. Cheap Chrome vs. Imported Brands
// ─────────────────────────────────────────────
import { useState } from 'react';
import { X, ShieldCheck, Scale, Sparkles, MessageSquare } from 'lucide-react';
import { siteConfig } from '@/config/site';

interface ComparisonRow {
  feature: string;
  cheapChrome: string;
  imported: string;
  shriram202: string;
  shriram304: string;
  highlight?: boolean;
}

const COMPARISON_DATA: ComparisonRow[] = [
  {
    feature: 'Core Material & Grade',
    cheapChrome: 'Iron / Mild Steel with thin chrome plating',
    imported: 'Zinc Alloy / Coated European Steel',
    shriram202: 'High-Tensile AISI SS 202 Stainless Steel',
    shriram304: '100% Food-Grade AISI SS 304 Stainless Steel',
  },
  {
    feature: 'Rust & Moisture Resistance',
    cheapChrome: 'Rusts in 6–12 months in wet Indian cooking zones',
    imported: 'Good corrosion protection, high maintenance',
    shriram202: 'Corrosion resistant for daily household cooking',
    shriram304: 'Lifetime Zero-Rust Guarantee (Acid & Salt resistant)',
    highlight: true,
  },
  {
    feature: 'Custom Size Fabrication',
    cheapChrome: 'Strictly standard low-cost mass sizes',
    imported: 'No custom sizes (only fixed 450mm/600mm European specs)',
    shriram202: 'Custom widths & depths fabricated in 48-72h',
    shriram304: 'Custom dimensions engineered at Polo Ground',
    highlight: true,
  },
  {
    feature: 'Price & Value Proposition',
    cheapChrome: 'Cheap initial cost, requires frequent replacement',
    imported: 'Expensive (250%–400% brand & import markup)',
    shriram202: 'High-Volume Wholesale Price (Best for Builders)',
    shriram304: 'Direct Factory Rate (1/3rd price of foreign brands)',
  },
  {
    feature: 'Certified Load Rating',
    cheapChrome: '15 kg – 20 kg max (bends under heavy brass pots)',
    imported: '30 kg – 40 kg standard',
    shriram202: '35 kg heavy-duty rated runner system',
    shriram304: '45 kg heavy-duty continuous load tested',
  },
  {
    feature: 'Spare Parts & Local Support',
    cheapChrome: 'No warranty, no replacement parts',
    imported: 'Imported parts take 2–6 weeks to arrive',
    shriram202: 'Same-day spares & advice from Indore factory',
    shriram304: 'Direct factory warranty & local Indore technician support',
  },
];

export default function HardwareComparisonSection({
  onOpenWhatsApp,
}: {
  onOpenWhatsApp?: (role?: string, grade?: string) => void;
}) {
  const [activeGradeView, setActiveGradeView] = useState<'ss304' | 'ss202'>('ss304');
  const cleanPhone = siteConfig.contact.whatsapp?.replace(/[^0-9]/g, '') || '918047639215';

  const handleQuickQuote = () => {
    if (onOpenWhatsApp) {
      onOpenWhatsApp('architect', activeGradeView);
    } else {
      const msg = `Namaste Shriram Industries! I checked the comparison on your website and want factory pricing for ${
        activeGradeView === 'ss304' ? 'SS 304 Premium Baskets' : 'SS 202 Commercial Project Range'
      }.`;
      window.open(`https://wa.me/${cleanPhone}?text=${encodeURIComponent(msg)}`, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <section id="comparison" className="py-20 bg-[var(--color-background)] border-b border-[var(--color-border)]" aria-labelledby="comparison-heading">
      <div className="container-ami">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[var(--color-accent-subtle,rgba(243,133,36,0.1))] text-[var(--color-accent)] text-xs font-semibold uppercase tracking-wider mb-3">
            <Scale size={13} />
            Hardware Engineering Comparison
          </div>
          <h2 id="comparison-heading" className="heading-xl text-[var(--color-foreground)]">
            How Shriram Hardware Compares
          </h2>
          <p className="text-[var(--color-muted)] text-sm md:text-base mt-3 max-w-xl mx-auto">
            Why builders, architects, and modular kitchen makers across Central India choose direct Polo Ground manufacturing over imported markups or cheap chrome.
          </p>

          {/* Toggle View: SS304 vs SS202 focus */}
          <div className="inline-flex p-1 bg-gray-200 dark:bg-zinc-800 rounded-xl mt-6">
            <button
              type="button"
              onClick={() => setActiveGradeView('ss304')}
              className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all ${
                activeGradeView === 'ss304'
                  ? 'bg-[var(--color-accent)] text-white shadow-sm'
                  : 'text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white'
              }`}
            >
              SS 304 Premium Architectural Range
            </button>
            <button
              type="button"
              onClick={() => setActiveGradeView('ss202')}
              className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all ${
                activeGradeView === 'ss202'
                  ? 'bg-[var(--color-foreground)] text-white shadow-sm'
                  : 'text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white'
              }`}
            >
              SS 202 Commercial / Bulk Project Range
            </button>
          </div>
        </div>

        {/* Responsive Comparison Table */}
        <div className="overflow-x-auto shadow-lg rounded-2xl border border-[var(--color-border)] bg-white dark:bg-zinc-900">
          <table className="w-full text-left border-collapse min-w-[720px]">
            <thead>
              <tr className="border-b border-[var(--color-border)] text-xs uppercase tracking-wider">
                <th className="p-4 sm:p-5 font-semibold text-[var(--color-muted)] bg-gray-50/70 dark:bg-zinc-900 w-1/4">
                  Feature / Parameter
                </th>
                <th className="p-4 sm:p-5 font-semibold text-red-600 bg-red-50/30 dark:bg-red-950/20 w-1/4">
                  Local Market Chrome
                </th>
                <th className="p-4 sm:p-5 font-semibold text-gray-700 dark:text-gray-300 bg-gray-50/50 dark:bg-zinc-800/40 w-1/4">
                  Imported German Brands
                </th>
                <th className="p-4 sm:p-5 font-bold text-white bg-[var(--color-accent)] w-1/4 relative">
                  <div className="flex items-center gap-1.5">
                    <Sparkles size={14} />
                    <span>Shriram Industries ({activeGradeView === 'ss304' ? 'SS 304' : 'SS 202'})</span>
                  </div>
                  <span className="block text-[0.65rem] font-normal text-white/90 mt-0.5">
                    {activeGradeView === 'ss304' ? '100% Rust-Proof Food Grade' : 'Cost-Effective High Volume'}
                  </span>
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[var(--color-border)] text-xs sm:text-sm">
              {COMPARISON_DATA.map((row, idx) => {
                const shriramText = activeGradeView === 'ss304' ? row.shriram304 : row.shriram202;
                return (
                  <tr
                    key={idx}
                    className={`transition-colors ${
                      row.highlight ? 'bg-amber-500/[0.04]' : 'hover:bg-gray-50/50 dark:hover:bg-zinc-800/20'
                    }`}
                  >
                    <td className="p-4 sm:p-5 font-semibold text-[var(--color-foreground)]">
                      {row.feature}
                    </td>
                    <td className="p-4 sm:p-5 text-gray-500 line-through decoration-red-400">
                      <div className="flex items-start gap-1.5">
                        <X size={15} className="text-red-500 shrink-0 mt-0.5" />
                        <span>{row.cheapChrome}</span>
                      </div>
                    </td>
                    <td className="p-4 sm:p-5 text-gray-600 dark:text-gray-400">
                      <span>{row.imported}</span>
                    </td>
                    <td className="p-4 sm:p-5 font-medium text-[var(--color-foreground)] bg-orange-500/[0.06] border-l border-r border-[var(--color-accent)]/20">
                      <div className="flex items-start gap-2">
                        <ShieldCheck size={16} className="text-[var(--color-accent)] shrink-0 mt-0.5" />
                        <span className="font-semibold text-gray-900 dark:text-gray-100">{shriramText}</span>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* CTA Bar below table */}
        <div className="mt-8 p-6 bg-gradient-to-r from-zinc-900 to-zinc-800 rounded-2xl text-white flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h4 className="text-sm sm:text-base font-bold">
              Looking for dealer price slabs for {activeGradeView === 'ss304' ? 'SS 304' : 'SS 202'}?
            </h4>
            <p className="text-xs text-gray-300 mt-0.5">
              Get direct factory rate card delivered to your WhatsApp in 60 seconds.
            </p>
          </div>
          <button
            type="button"
            onClick={handleQuickQuote}
            className="shrink-0 inline-flex items-center gap-2 px-5 py-2.5 bg-[#25D366] hover:bg-[#20ba59] text-white font-medium text-xs sm:text-sm rounded-xl transition-all shadow-md"
          >
            <MessageSquare size={16} className="fill-white/20" />
            <span>Get Factory Price on WhatsApp</span>
          </button>
        </div>
      </div>
    </section>
  );
}
