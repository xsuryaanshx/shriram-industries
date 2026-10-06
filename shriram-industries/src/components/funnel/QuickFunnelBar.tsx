// ─────────────────────────────────────────────
//  QuickFunnelBar.tsx — High-Impact Lead Action Strip
// ─────────────────────────────────────────────
import { Download, UploadCloud, Calculator, Ruler } from 'lucide-react';

interface QuickFunnelBarProps {
  onOpenCatalogModal: (role?: string) => void;
  onScrollToBOQ: () => void;
  onScrollToSelector: () => void;
  onScrollToCustom: () => void;
}

export default function QuickFunnelBar({
  onOpenCatalogModal,
  onScrollToBOQ,
  onScrollToSelector,
  onScrollToCustom,
}: QuickFunnelBarProps) {
  return (
    <section className="bg-white dark:bg-zinc-900 border-y border-[var(--color-border)] py-4 sticky top-16 z-30 shadow-sm backdrop-blur-md bg-white/95 dark:bg-zinc-900/95" aria-label="Quick Actions">
      <div className="container-ami">
        <div className="flex items-center justify-between gap-3 overflow-x-auto no-scrollbar py-1">
          {/* Action 1: 1-Tap Catalog on WhatsApp */}
          <button
            type="button"
            onClick={() => onOpenCatalogModal('dealer')}
            className="shrink-0 inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#25D366]/10 hover:bg-[#25D366]/20 border border-[#25D366]/30 text-[#128C7E] dark:text-[#25D366] text-xs font-semibold transition-all hover:scale-[1.02] active:scale-95"
          >
            <Download size={14} className="shrink-0" />
            <span>1-Tap Wholesale Catalog</span>
          </button>

          {/* Action 2: Upload Layout for BOQ */}
          <button
            type="button"
            onClick={onScrollToBOQ}
            className="shrink-0 inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-blue-500/10 hover:bg-blue-500/20 border border-blue-500/30 text-blue-700 dark:text-blue-400 text-xs font-semibold transition-all hover:scale-[1.02] active:scale-95"
          >
            <UploadCloud size={14} className="shrink-0" />
            <span>Upload Kitchen Layout (Free BOQ)</span>
          </button>

          {/* Action 3: Grade & Budget Selector */}
          <button
            type="button"
            onClick={onScrollToSelector}
            className="shrink-0 inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-orange-500/10 hover:bg-orange-500/20 border border-orange-500/30 text-[var(--color-accent)] text-xs font-semibold transition-all hover:scale-[1.02] active:scale-95"
          >
            <Calculator size={14} className="shrink-0" />
            <span>SS202 vs SS304 Quote Selector</span>
          </button>

          {/* Action 4: Custom Size Fabrication */}
          <button
            type="button"
            onClick={onScrollToCustom}
            className="shrink-0 inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-gray-100 dark:bg-zinc-800 hover:bg-gray-200 dark:hover:bg-zinc-700 border border-[var(--color-border)] text-[var(--color-foreground)] text-xs font-semibold transition-all hover:scale-[1.02] active:scale-95"
          >
            <Ruler size={14} className="shrink-0" />
            <span>Custom Size Fabrication (48h)</span>
          </button>
        </div>
      </div>
    </section>
  );
}
