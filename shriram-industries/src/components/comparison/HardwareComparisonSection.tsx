// ─────────────────────────────────────────────
//  HardwareComparisonSection.tsx
//  Clean Architectural Hardware Comparison Table
// ─────────────────────────────────────────────
import { useState } from 'react';
import { X, ShieldCheck, MessageSquare } from 'lucide-react';
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
    cheapChrome: 'Iron / Mild Steel with thin chrome wash',
    imported: 'Zinc Alloy / Coated European Steel',
    shriram202: 'High-Tensile AISI SS 202 Stainless Steel',
    shriram304: '100% Food-Grade AISI SS 304 Stainless Steel',
  },
  {
    feature: 'Rust & Moisture Life',
    cheapChrome: 'Rusts in 6–12 months in Indian spice/steam zones',
    imported: 'Good corrosion protection, high maintenance',
    shriram202: 'Corrosion resistant for daily household cooking',
    shriram304: 'Lifetime Zero-Rust Guarantee (Acid & Salt resistant)',
    highlight: true,
  },
  {
    feature: 'Custom Size Fabrication',
    cheapChrome: 'Standard low-cost mass sizes only',
    imported: 'Strict European sizes (450mm/600mm only, no custom)',
    shriram202: 'Custom widths & depths fabricated in 48-72h',
    shriram304: 'Custom dimensions engineered at Polo Ground',
    highlight: true,
  },
  {
    feature: 'Price & Value Proposition',
    cheapChrome: 'Low initial cost, frequent replacement',
    imported: 'High price (250%–400% import & brand markup)',
    shriram202: 'Wholesale Factory Rate (Best for Builders)',
    shriram304: 'Direct Factory Rate (1/3rd price of foreign brands)',
  },
  {
    feature: 'Certified Load Rating',
    cheapChrome: '15 kg – 20 kg max (bends under heavy cookware)',
    imported: '30 kg – 40 kg standard',
    shriram202: '35 kg heavy-duty rated runner system',
    shriram304: '45 kg heavy-duty continuous load tested',
  },
  {
    feature: 'Spare Parts & Support',
    cheapChrome: 'No warranty, no replacement parts',
    imported: 'Imported parts take 2–6 weeks to arrive',
    shriram202: 'Same-day spares & advice from Indore factory',
    shriram304: 'Direct factory warranty & Indore technician support',
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
        <div className="max-w-3xl mb-10">
          <p className="text-label text-[0.6rem] text-[var(--color-accent)] tracking-[0.2em] uppercase mb-3">
            Hardware Comparison
          </p>
          <h2 id="comparison-heading" className="heading-lg text-[var(--color-foreground)]">
            How Shriram Hardware Compares
          </h2>
          <p className="text-[var(--color-muted)] text-sm md:text-base mt-3 max-w-xl leading-relaxed">
            Why builders, architects, and modular kitchen makers across Central India choose direct Polo Ground manufacturing over imported markups or cheap chrome.
          </p>

          {/* Minimalist Segmented Control */}
          <div className="inline-flex p-1 bg-zinc-200/70 border border-[var(--color-border)] rounded-full mt-6">
            <button
              type="button"
              onClick={() => setActiveGradeView('ss304')}
              className={`px-5 py-2 rounded-full text-xs font-medium tracking-wide transition-all cursor-pointer ${
                activeGradeView === 'ss304'
                  ? 'bg-white text-[var(--color-foreground)] shadow-xs'
                  : 'text-[var(--color-muted)] hover:text-[var(--color-foreground)]'
              }`}
            >
              SS 304 Premium Architectural Range
            </button>
            <button
              type="button"
              onClick={() => setActiveGradeView('ss202')}
              className={`px-5 py-2 rounded-full text-xs font-medium tracking-wide transition-all cursor-pointer ${
                activeGradeView === 'ss202'
                  ? 'bg-white text-[var(--color-foreground)] shadow-xs'
                  : 'text-[var(--color-muted)] hover:text-[var(--color-foreground)]'
              }`}
            >
              SS 202 Commercial Project Range
            </button>
          </div>
        </div>

        {/* Crisp Light Table */}
        <div className="overflow-x-auto rounded-2xl border border-[var(--color-border)] bg-white shadow-xs">
          <table className="w-full text-left border-collapse min-w-[700px]">
            <thead>
              <tr className="border-b border-[var(--color-border)] text-[0.65rem] tracking-[0.12em] uppercase font-semibold text-[var(--color-muted)]">
                <th className="p-4 sm:p-5 bg-zinc-50 w-1/4">
                  Feature / Parameter
                </th>
                <th className="p-4 sm:p-5 bg-zinc-50 text-red-600 w-1/4">
                  Local Market Chrome
                </th>
                <th className="p-4 sm:p-5 bg-zinc-50 text-[var(--color-foreground)] w-1/4">
                  Imported European Brands
                </th>
                <th className="p-4 sm:p-5 bg-orange-50/80 text-[var(--color-accent)] border-l border-r border-[var(--color-border)] w-1/4">
                  <span>Shriram Industries ({activeGradeView === 'ss304' ? 'SS 304' : 'SS 202'})</span>
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[var(--color-border)] text-xs sm:text-sm">
              {COMPARISON_DATA.map((row, idx) => {
                const shriramText = activeGradeView === 'ss304' ? row.shriram304 : row.shriram202;
                return (
                  <tr
                    key={idx}
                    className={row.highlight ? 'bg-orange-50/[0.15]' : 'hover:bg-zinc-50/60'}
                  >
                    <td className="p-4 sm:p-5 font-medium text-[var(--color-foreground)]">
                      {row.feature}
                    </td>
                    <td className="p-4 sm:p-5 text-gray-500">
                      <div className="flex items-start gap-1.5 text-xs">
                        <X size={14} className="text-red-500 shrink-0 mt-0.5" />
                        <span className="line-through decoration-red-400">{row.cheapChrome}</span>
                      </div>
                    </td>
                    <td className="p-4 sm:p-5 text-[var(--color-muted)] text-xs">
                      {row.imported}
                    </td>
                    <td className="p-4 sm:p-5 font-semibold text-[var(--color-foreground)] bg-orange-50/[0.25] border-l border-r border-[var(--color-border)]">
                      <div className="flex items-start gap-2">
                        <ShieldCheck size={16} className="text-[var(--color-accent)] shrink-0 mt-0.5" />
                        <span className="text-xs sm:text-sm text-gray-900">{shriramText}</span>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* Clean Bottom Banner */}
        <div className="mt-8 p-6 bg-[#1a1d21] rounded-xl text-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <h4 className="text-sm sm:text-base font-medium text-white">
              Looking for dealer price slabs for {activeGradeView === 'ss304' ? 'SS 304' : 'SS 202'}?
            </h4>
            <p className="text-xs text-white/65 mt-0.5">
              Direct factory rate cards delivered to your WhatsApp in 60 seconds.
            </p>
          </div>
          <button
            type="button"
            onClick={handleQuickQuote}
            className="shrink-0 inline-flex items-center gap-2 px-5 py-3 bg-[#25D366] hover:bg-[#20ba59] text-white font-medium text-xs tracking-wider uppercase rounded-lg transition-all shadow-md cursor-pointer"
          >
            <MessageSquare size={15} className="fill-white/20" />
            <span>Get Factory Price on WhatsApp</span>
          </button>
        </div>
      </div>
    </section>
  );
}
