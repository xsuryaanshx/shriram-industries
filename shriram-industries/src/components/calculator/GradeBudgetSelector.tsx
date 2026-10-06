// ─────────────────────────────────────────────
//  GradeBudgetSelector.tsx
//  Clean Architectural Quote Estimator
// ─────────────────────────────────────────────
import { useState } from 'react';
import { Check, MessageSquare, ArrowRight, Building, Crown, Wrench } from 'lucide-react';
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
        <div className="max-w-3xl mb-12">
          <p className="text-label text-[0.6rem] text-[var(--color-accent)] tracking-[0.2em] uppercase mb-3">
            Hardware Estimator
          </p>
          <h2 id="selector-heading" className="heading-lg text-[var(--color-foreground)]">
            Select Your Grade & Budget
          </h2>
          <p className="text-[var(--color-muted)] text-sm md:text-base mt-3 max-w-xl leading-relaxed">
            Get transparent factory estimates tailored whether you need economical high-volume SS 202 for apartment projects or lifetime rust-proof SS 304.
          </p>
        </div>

        <div className="bg-white border border-[var(--color-border)] rounded-2xl p-6 sm:p-10 shadow-xs">
          {/* Step 1: Grade Cards */}
          <div className="mb-10">
            <div className="flex items-center justify-between mb-4">
              <span className="text-label text-[0.65rem] text-[var(--color-muted)] tracking-[0.14em] uppercase font-semibold">
                Step 1: Choose Steel Grade / Purpose
              </span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* SS 202 Card */}
              <button
                type="button"
                onClick={() => setSelectedGrade('ss202')}
                className={`p-5 rounded-xl border text-left transition-all cursor-pointer ${
                  selectedGrade === 'ss202'
                    ? 'border-blue-600 bg-blue-50/50 shadow-xs ring-1 ring-blue-600'
                    : 'border-[var(--color-border)] hover:border-gray-400 bg-white'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold text-blue-700 tracking-wide uppercase">SS 202 Commercial</span>
                  <Building size={16} className="text-blue-600" />
                </div>
                <div className="text-sm font-semibold text-[var(--color-foreground)]">Best for: Bulk & Builders</div>
                <p className="text-xs text-[var(--color-muted)] mt-1.5 leading-relaxed">
                  High-tensile, cost-effective wire baskets designed for budget modular kitchens and commercial apartments.
                </p>
              </button>

              {/* SS 304 Card */}
              <button
                type="button"
                onClick={() => setSelectedGrade('ss304')}
                className={`p-5 rounded-xl border text-left transition-all cursor-pointer ${
                  selectedGrade === 'ss304'
                    ? 'border-[var(--color-accent)] bg-orange-50/50 shadow-xs ring-1 ring-[var(--color-accent)]'
                    : 'border-[var(--color-border)] hover:border-gray-400 bg-white'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold text-[var(--color-accent)] tracking-wide uppercase">SS 304 Premium</span>
                  <Crown size={16} className="text-[var(--color-accent)]" />
                </div>
                <div className="text-sm font-semibold text-[var(--color-foreground)]">Best for: Luxury & Architects</div>
                <p className="text-xs text-[var(--color-muted)] mt-1.5 leading-relaxed">
                  100% food-grade stainless steel with lifetime zero-rust guarantee. Mirror electro-polish finish.
                </p>
              </button>

              {/* Custom Size Card */}
              <button
                type="button"
                onClick={() => setSelectedGrade('custom')}
                className={`p-5 rounded-xl border text-left transition-all cursor-pointer ${
                  selectedGrade === 'custom'
                    ? 'border-emerald-600 bg-emerald-50/50 shadow-xs ring-1 ring-emerald-600'
                    : 'border-[var(--color-border)] hover:border-gray-400 bg-white'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold text-emerald-700 tracking-wide uppercase">Custom Size / OEM</span>
                  <Wrench size={16} className="text-emerald-600" />
                </div>
                <div className="text-sm font-semibold text-[var(--color-foreground)]">Odd Sizes & Bespoke Fit</div>
                <p className="text-xs text-[var(--color-muted)] mt-1.5 leading-relaxed">
                  Made-to-order dimensions (17″, 19″, 22″) welded inside our Polo Ground factory within 48–72 hours.
                </p>
              </button>
            </div>
          </div>

          {/* Step 2: Select Hardware Items */}
          <div className="mb-10">
            <span className="text-label text-[0.65rem] text-[var(--color-muted)] tracking-[0.14em] uppercase font-semibold block mb-4">
              Step 2: Select Required Fittings ({selectedItems.length} selected)
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {HARDWARE_ITEMS.map((item) => {
                const isChecked = selectedItems.includes(item.id);
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => toggleItem(item.id)}
                    className={`flex items-center justify-between p-3.5 rounded-xl border text-left text-xs transition-all cursor-pointer ${
                      isChecked
                        ? 'border-[var(--color-accent)] bg-orange-50/30'
                        : 'border-[var(--color-border)] hover:border-gray-300 bg-white'
                    }`}
                  >
                    <div>
                      <div className="font-medium text-[var(--color-foreground)] text-sm">{item.name}</div>
                      <div className="text-[0.7rem] text-[var(--color-muted)] mt-0.5">{item.category}</div>
                    </div>
                    <div
                      className={`w-5 h-5 rounded-md flex items-center justify-center border shrink-0 transition-colors ${
                        isChecked
                          ? 'bg-[var(--color-accent)] border-[var(--color-accent)] text-white'
                          : 'border-gray-300 bg-white'
                      }`}
                    >
                      {isChecked && <Check size={13} strokeWidth={2.5} />}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Step 3: Project Volume / Slab */}
          <div className="mb-10">
            <span className="text-label text-[0.65rem] text-[var(--color-muted)] tracking-[0.14em] uppercase font-semibold block mb-4">
              Step 3: Select Project Scale / Volume
            </span>
            <div className="grid grid-cols-3 gap-3">
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
                  className={`p-3.5 rounded-xl border text-center transition-all cursor-pointer ${
                    quantitySlab === slab.id
                      ? 'border-[var(--color-foreground)] bg-zinc-100 shadow-xs font-semibold'
                      : 'border-[var(--color-border)] hover:border-gray-300 bg-white'
                  }`}
                >
                  <div className="text-xs sm:text-sm text-[var(--color-foreground)] font-medium">{slab.label}</div>
                  <div className="text-[0.65rem] text-[var(--color-muted)] mt-0.5">{slab.sub}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Quote Summary Banner */}
          <div className="p-6 bg-[#1a1d21] text-white rounded-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-5">
            <div>
              <div className="text-label text-[0.6rem] text-[var(--color-accent)] tracking-[0.2em] uppercase font-semibold">
                Configured Specification Summary
              </div>
              <div className="text-base sm:text-lg font-medium text-white mt-1">
                {getGradeName()} · {getSlabLabel()}
              </div>
              <div className="text-xs text-white/65 mt-0.5">
                {selectedItems.length} fittings chosen · Direct factory wholesale pricing from Polo Ground, Indore
              </div>
            </div>

            <button
              type="button"
              onClick={handleSendWhatsAppQuote}
              className="w-full md:w-auto shrink-0 inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#25D366] hover:bg-[#20ba59] text-white font-medium text-xs tracking-wider uppercase rounded-lg shadow-md hover:shadow-lg transition-all cursor-pointer"
            >
              <MessageSquare size={16} className="fill-white/20" />
              <span>Get Factory Quote on WhatsApp</span>
              <ArrowRight size={14} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
