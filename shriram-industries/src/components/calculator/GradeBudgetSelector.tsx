// ─────────────────────────────────────────────
//  GradeBudgetSelector.tsx
//  The "Select Your Grade & Budget" Interactive Quote Tool
// ─────────────────────────────────────────────
import { useState } from 'react';
import { Calculator, Check, MessageSquare, ArrowRight, Building, Crown, Wrench } from 'lucide-react';
import { siteConfig } from '@/config/site';

interface HardwareItem {
  id: string;
  name: string;
  category: string;
}

const HARDWARE_ITEMS: HardwareItem[] = [
  { id: 'plain-basket', name: 'Plain Wire Baskets (15″–24″)', category: 'Base Drawers' },
  { id: 'thali-basket', name: 'Thali & Plate Storage Rack', category: 'Base Drawers' },
  { id: 'cutlery-basket', name: 'Cutlery Organizer Basket', category: 'Top Drawers' },
  { id: 'telescopic-channel', name: 'SS Telescopic Drawer Slides', category: 'Runners' },
  { id: 'tandem-box', name: 'Tandem Box Soft-Close System', category: 'Drawers' },
  { id: 'corner-carousel', name: 'Two-Tier Corner Carousel Unit', category: 'Corner Storage' },
  { id: 'tall-pantry', name: 'Tall Pull-Out Pantry (5-Tier)', category: 'Tall Units' },
  { id: 'custom-rack', name: 'Custom Non-Standard Size Rack', category: 'Custom Sizing' },
];

export default function GradeBudgetSelector({
  onOpenWhatsApp,
}: {
  onOpenWhatsApp?: (role?: string, grade?: string) => void;
}) {
  const [selectedGrade, setSelectedGrade] = useState<'ss202' | 'ss304' | 'custom'>('ss304');
  const [selectedItems, setSelectedItems] = useState<string[]>([
    'plain-basket',
    'thali-basket',
    'cutlery-basket',
    'telescopic-channel',
  ]);
  const [quantitySlab, setQuantitySlab] = useState<'retail' | 'project' | 'bulk'>('retail');

  const cleanPhone = siteConfig.contact.whatsapp?.replace(/[^0-9]/g, '') || '918047639215';

  const toggleItem = (id: string) => {
    setSelectedItems((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const getGradeName = () => {
    if (selectedGrade === 'ss202') return 'SS 202 Commercial Project Grade';
    if (selectedGrade === 'ss304') return 'SS 304 Premium Architectural Grade';
    return 'Custom Dimension / OEM Fabrication';
  };

  const getSlabLabel = () => {
    if (quantitySlab === 'retail') return '1–2 Kitchens (Retail / Homeowner)';
    if (quantitySlab === 'project') return '3–10 Kitchens (Contractor / Villa Project)';
    return '10+ Kitchens (Bulk Builder / Dealer Stock)';
  };

  const handleSendWhatsAppQuote = () => {
    if (onOpenWhatsApp) {
      onOpenWhatsApp(quantitySlab === 'bulk' ? 'builder' : 'architect', selectedGrade);
      return;
    }

    const selectedNames = HARDWARE_ITEMS.filter((i) => selectedItems.includes(i.id))
      .map((i) => i.name)
      .join(', ');

    const text = `Namaste Shriram Industries!
I configured a custom quote on your website:

• Grade Selected: ${getGradeName()}
• Project Quantity: ${getSlabLabel()}
• Products Needed: ${selectedNames || 'Complete Kitchen Set'}

Please share the factory rate card & discount slabs for Indore / MP dispatch.`;

    window.open(`https://wa.me/${cleanPhone}?text=${encodeURIComponent(text)}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="quote-selector" className="py-20 bg-[var(--color-background)] border-b border-[var(--color-border)]" aria-labelledby="selector-heading">
      <div className="container-ami">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[var(--color-accent-subtle,rgba(243,133,36,0.1))] text-[var(--color-accent)] text-xs font-semibold uppercase tracking-wider mb-3">
            <Calculator size={13} />
            Interactive Hardware Estimator
          </div>
          <h2 id="selector-heading" className="heading-xl text-[var(--color-foreground)]">
            Select Your Grade & Budget
          </h2>
          <p className="text-[var(--color-muted)] text-sm md:text-base mt-3 max-w-xl mx-auto">
            Get transparent factory estimates tailored whether you need economical high-volume SS202 for apartment projects or lifetime rust-proof SS304.
          </p>
        </div>

        <div className="max-w-4xl mx-auto bg-white dark:bg-zinc-900 border border-[var(--color-border)] rounded-3xl p-6 sm:p-10 shadow-xl">
          {/* Step 1: Grade Cards */}
          <div className="mb-8">
            <label className="block text-xs font-bold uppercase tracking-wider text-[var(--color-foreground)] mb-3">
              Step 1: Choose Steel Grade / Purpose
            </label>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {/* SS 202 Card */}
              <button
                type="button"
                onClick={() => setSelectedGrade('ss202')}
                className={`p-4 rounded-2xl border text-left transition-all ${
                  selectedGrade === 'ss202'
                    ? 'border-blue-500 bg-blue-50/50 dark:bg-blue-950/20 shadow-md ring-2 ring-blue-500/20'
                    : 'border-[var(--color-border)] hover:border-gray-400 bg-transparent'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-extrabold text-blue-600 dark:text-blue-400">SS 202 Commercial</span>
                  <Building size={16} className="text-blue-500" />
                </div>
                <div className="text-xs font-bold text-[var(--color-foreground)]">Best For: Bulk & Builder Projects</div>
                <p className="text-[0.68rem] text-[var(--color-muted)] mt-1 leading-snug">
                  Cost-effective, high-tensile wire baskets for budget modular kitchens, rentals, and commercial apartments.
                </p>
              </button>

              {/* SS 304 Card */}
              <button
                type="button"
                onClick={() => setSelectedGrade('ss304')}
                className={`p-4 rounded-2xl border text-left transition-all ${
                  selectedGrade === 'ss304'
                    ? 'border-[var(--color-accent)] bg-orange-50/50 dark:bg-orange-950/20 shadow-md ring-2 ring-orange-500/20'
                    : 'border-[var(--color-border)] hover:border-gray-400 bg-transparent'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-extrabold text-[var(--color-accent)]">SS 304 Premium</span>
                  <Crown size={16} className="text-[var(--color-accent)]" />
                </div>
                <div className="text-xs font-bold text-[var(--color-foreground)]">Best For: Luxury & Architects</div>
                <p className="text-[0.68rem] text-[var(--color-muted)] mt-1 leading-snug">
                  100% food-grade stainless steel with lifetime zero-rust guarantee. Mirror electro-polish finish.
                </p>
              </button>

              {/* Custom Size Card */}
              <button
                type="button"
                onClick={() => setSelectedGrade('custom')}
                className={`p-4 rounded-2xl border text-left transition-all ${
                  selectedGrade === 'custom'
                    ? 'border-emerald-500 bg-emerald-50/50 dark:bg-emerald-950/20 shadow-md ring-2 ring-emerald-500/20'
                    : 'border-[var(--color-border)] hover:border-gray-400 bg-transparent'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-extrabold text-emerald-600 dark:text-emerald-400">Custom Size / OEM</span>
                  <Wrench size={16} className="text-emerald-500" />
                </div>
                <div className="text-xs font-bold text-[var(--color-foreground)]">Odd Sizes & Bespoke Fit</div>
                <p className="text-[0.68rem] text-[var(--color-muted)] mt-1 leading-snug">
                  Made-to-order dimensions (17″, 19″, 22″) welded inside our Polo Ground factory within 48–72 hours.
                </p>
              </button>
            </div>
          </div>

          {/* Step 2: Select Hardware Items */}
          <div className="mb-8">
            <label className="block text-xs font-bold uppercase tracking-wider text-[var(--color-foreground)] mb-3">
              Step 2: Select Required Fittings ({selectedItems.length} selected)
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {HARDWARE_ITEMS.map((item) => {
                const isChecked = selectedItems.includes(item.id);
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => toggleItem(item.id)}
                    className={`flex items-center justify-between p-3 rounded-xl border text-left text-xs transition-all ${
                      isChecked
                        ? 'border-[var(--color-accent)] bg-[var(--color-accent-subtle,rgba(243,133,36,0.06))] text-[var(--color-foreground)] font-medium'
                        : 'border-[var(--color-border)] text-gray-600 dark:text-gray-400 hover:border-gray-400'
                    }`}
                  >
                    <div>
                      <div className="font-semibold text-[var(--color-foreground)]">{item.name}</div>
                      <div className="text-[0.65rem] text-[var(--color-muted)]">{item.category}</div>
                    </div>
                    <div
                      className={`w-5 h-5 rounded-md flex items-center justify-center border shrink-0 ${
                        isChecked
                          ? 'bg-[var(--color-accent)] border-[var(--color-accent)] text-white'
                          : 'border-gray-300 dark:border-zinc-700'
                      }`}
                    >
                      {isChecked && <Check size={12} strokeWidth={3} />}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Step 3: Project Volume / Slab */}
          <div className="mb-8">
            <label className="block text-xs font-bold uppercase tracking-wider text-[var(--color-foreground)] mb-2">
              Step 3: Select Project Scale / Volume
            </label>
            <div className="grid grid-cols-3 gap-2">
              {(
                [
                  { id: 'retail', label: '1–2 Kitchens', sub: 'Home / Villa' },
                  { id: 'project', label: '3–10 Kitchens', sub: 'Designer / Contractor' },
                  { id: 'bulk', label: '10+ Kitchens', sub: 'Builder / Dealer Slabs' },
                ] as const
              ).map((slab) => (
                <button
                  key={slab.id}
                  type="button"
                  onClick={() => setQuantitySlab(slab.id)}
                  className={`p-2.5 rounded-xl border text-center transition-all ${
                    quantitySlab === slab.id
                      ? 'border-[var(--color-foreground)] bg-gray-100 dark:bg-zinc-800 font-bold'
                      : 'border-[var(--color-border)] text-gray-500 hover:border-gray-400'
                  }`}
                >
                  <div className="text-xs text-[var(--color-foreground)]">{slab.label}</div>
                  <div className="text-[0.65rem] text-[var(--color-muted)]">{slab.sub}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Quote Summary Banner & Action */}
          <div className="p-5 bg-gradient-to-r from-zinc-900 to-zinc-800 text-white rounded-2xl flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <div className="text-[0.65rem] uppercase tracking-wider text-[var(--color-accent)] font-bold">
                Configured Specification Summary
              </div>
              <div className="text-sm sm:text-base font-bold mt-0.5">
                {getGradeName()} · {getSlabLabel()}
              </div>
              <div className="text-xs text-gray-300 mt-1">
                {selectedItems.length} fittings chosen · Direct factory wholesale pricing
              </div>
            </div>

            <button
              type="button"
              onClick={handleSendWhatsAppQuote}
              className="w-full md:w-auto shrink-0 inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#25D366] hover:bg-[#20ba59] text-white font-medium text-xs sm:text-sm rounded-xl shadow-lg transition-all"
            >
              <MessageSquare size={17} className="fill-white/20" />
              <span>Get Instant Factory Quote on WhatsApp</span>
              <ArrowRight size={15} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
