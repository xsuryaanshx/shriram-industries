// ─────────────────────────────────────────────
//  CustomFabricationBanner.tsx
//  Clean Architectural Custom Size Section
// ─────────────────────────────────────────────
import { CheckCircle2, MessageSquare, ArrowRight, XCircle } from 'lucide-react';
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
    <section className="py-20 bg-white border-b border-[var(--color-border)]" aria-labelledby="custom-fab-heading">
      <div className="container-ami">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: The Problem & Solution */}
          <div className="lg:col-span-7 space-y-4">
            <p className="text-label text-[0.6rem] text-[var(--color-accent)] tracking-[0.2em] uppercase mb-2">
              Indian Carpentry Advantage
            </p>
            <h3 id="custom-fab-heading" className="heading-lg text-[var(--color-foreground)]">
              Odd Cabinet Size? We Fabricate Custom Widths in 48 Hours.
            </h3>
            <p className="text-sm md:text-base text-[var(--color-muted)] leading-relaxed">
              Imported European brands only manufacture rigid dimensions (450mm, 600mm, 900mm)—forcing carpenters to leave awkward dead filler panels in real Indian homes.
              Because our factory is in <strong>Polo Ground, Indore</strong>, our master fabricators weld bespoke wire baskets, pull-outs, and partitions to your exact millimeter dimensions.
            </p>

            {/* Comparison Callout Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-3">
              <div className="p-4 rounded-xl bg-red-50/50 border border-red-200/60">
                <div className="flex items-start gap-2">
                  <XCircle size={16} className="text-red-500 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs font-semibold text-red-900 block">Foreign Brands (Blum / Häfele)</span>
                    <p className="text-[0.7rem] text-red-800/80 mt-1 leading-relaxed">
                      Standard sizes only. Forced wood filler panels when widths do not match.
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-emerald-50/50 border border-emerald-200/60">
                <div className="flex items-start gap-2">
                  <CheckCircle2 size={16} className="text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs font-semibold text-emerald-900 block">Shriram Industries (Indore)</span>
                    <p className="text-[0.7rem] text-emerald-800/80 mt-1 leading-relaxed">
                      Any odd size (17″, 19″, 21″, 25″) wire-bent & argon welded in SS 202 or SS 304.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Clean Action Card */}
          <div className="lg:col-span-5 bg-[#1a1d21] text-white p-7 sm:p-8 rounded-2xl shadow-sm flex flex-col justify-between space-y-5">
            <div>
              <span className="text-label text-[0.6rem] text-[var(--color-accent)] tracking-[0.2em] uppercase font-semibold">
                For Carpenters, Designers & Dealers
              </span>
              <h4 className="text-lg sm:text-xl font-medium text-white mt-1.5">
                Need a bespoke size for an active site?
              </h4>
              <p className="text-xs sm:text-sm text-white/70 mt-2 leading-relaxed">
                Send your cabinet sketch or inside clearance width (W × D × H). Our factory supervisor confirms feasibility within 1 hour.
              </p>
            </div>

            <div className="space-y-3 pt-2 border-t border-white/10">
              <button
                type="button"
                onClick={handleCustomInquiry}
                className="w-full flex items-center justify-center gap-2 px-6 py-3.5 bg-[#25D366] hover:bg-[#20ba59] text-white font-medium text-xs tracking-wider uppercase rounded-lg shadow-md transition-all cursor-pointer"
              >
                <MessageSquare size={16} className="fill-white/20" />
                <span>Send Custom Size on WhatsApp</span>
                <ArrowRight size={14} />
              </button>
              <p className="text-center text-[0.68rem] text-white/50">
                48–72 Hour Dispatch across Indore & Central India
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
