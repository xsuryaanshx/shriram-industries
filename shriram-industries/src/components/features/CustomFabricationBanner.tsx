// ─────────────────────────────────────────────
//  CustomFabricationBanner.tsx
//  Their Biggest Unfair Advantage: Custom Size Fabrication (Where Blum & Häfele Fail)
// ─────────────────────────────────────────────
import { Ruler, CheckCircle2, MessageSquare, ArrowRight, XCircle } from 'lucide-react';
import { siteConfig } from '@/config/site';

export default function CustomFabricationBanner({
  onOpenWhatsApp,
}: {
  onOpenWhatsApp?: (role?: string, grade?: string) => void;
}) {
  const cleanPhone = siteConfig.contact.whatsapp?.replace(/[^0-9]/g, '') || '918047639215';

  const handleCustomInquiry = () => {
    if (onOpenWhatsApp) {
      onOpenWhatsApp('architect', 'both');
    } else {
      const msg = `Namaste Shriram Industries! I have an odd / non-standard kitchen cabinet size requirement.
Please connect me with your Polo Ground fabrication supervisor to discuss custom basket dimensions.`;
      window.open(`https://wa.me/${cleanPhone}?text=${encodeURIComponent(msg)}`, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <section className="py-16 bg-gradient-to-br from-amber-500/[0.07] via-orange-500/[0.04] to-transparent border-y border-[var(--color-border)] relative overflow-hidden" aria-labelledby="custom-fab-heading">
      <div className="container-ami relative z-10">
        <div className="bg-white dark:bg-zinc-900 border border-orange-500/20 rounded-3xl p-6 sm:p-10 shadow-lg">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Column: The Problem & Solution */}
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-500/10 text-[var(--color-accent)] text-xs font-bold uppercase tracking-wider">
                <Ruler size={13} />
                The Indian Carpentry Advantage
              </div>
              <h3 id="custom-fab-heading" className="text-2xl sm:text-3xl font-extrabold text-[var(--color-foreground)] tracking-tight">
                Odd Cabinet Size? We Fabricate Custom Widths in 48 Hours.
              </h3>
              <p className="text-sm text-[var(--color-muted)] leading-relaxed">
                Imported German brands only manufacture rigid European sizes (450mm, 600mm, 900mm)—leaving awkward dead space in real Indian homes.
                Because our manufacturing facility is right here in <strong>Polo Ground, Indore</strong>, our master fabricators weld bespoke wire baskets, pull-outs, and partitions to your exact millimeter dimensions.
              </p>

              {/* Comparison pills */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs">
                <div className="p-3 rounded-xl bg-red-50/60 dark:bg-red-950/20 border border-red-200/50 flex items-start gap-2">
                  <XCircle size={16} className="text-red-500 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-red-700 dark:text-red-400 block font-semibold">Foreign Brands (Blum/Häfele)</strong>
                    <span className="text-gray-600 dark:text-gray-400 text-[0.68rem]">
                      Strict standard sizes only. Force ugly filler wooden panels when widths don't match.
                    </span>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-green-50/60 dark:bg-green-950/20 border border-green-200/50 flex items-start gap-2">
                  <CheckCircle2 size={16} className="text-green-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-green-700 dark:text-green-400 block font-semibold">Shriram Industries (Indore)</strong>
                    <span className="text-gray-600 dark:text-gray-400 text-[0.68rem]">
                      Any odd size (17″, 19″, 21″, 27″) cut, wire-bent & argon welded in SS202 or SS304.
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Instant WhatsApp Call to Action */}
            <div className="lg:col-span-5 bg-gradient-to-br from-zinc-900 to-zinc-800 text-white p-6 sm:p-7 rounded-2xl shadow-xl flex flex-col justify-between space-y-4">
              <div>
                <span className="text-[0.65rem] uppercase font-bold tracking-wider text-[var(--color-accent)]">
                  For Carpenters, Designers & Dealers
                </span>
                <h4 className="text-lg font-bold text-white mt-1">
                  Need a bespoke size for an active site?
                </h4>
                <p className="text-xs text-gray-300 mt-2 leading-relaxed">
                  WhatsApp us your rough cabinet sketch or inside clearance width (W × D × H). Our factory supervisor will confirm fabrication feasibility within 1 hour.
                </p>
              </div>

              <div className="space-y-2 pt-2">
                <button
                  type="button"
                  onClick={handleCustomInquiry}
                  className="w-full flex items-center justify-center gap-2 px-5 py-3.5 bg-[#25D366] hover:bg-[#20ba59] text-white font-medium text-xs sm:text-sm rounded-xl shadow-md transition-all"
                >
                  <MessageSquare size={17} className="fill-white/20" />
                  <span>Send Custom Size on WhatsApp</span>
                  <ArrowRight size={15} />
                </button>
                <div className="text-center text-[0.68rem] text-gray-400">
                  ⚡ 48–72 Hour Ready for Dispatch in Indore & MP
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
