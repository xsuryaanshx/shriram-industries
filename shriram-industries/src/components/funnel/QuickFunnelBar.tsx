// ─────────────────────────────────────────────
//  QuickFunnelBar.tsx — Refined Architectural Quick Actions
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
    <div className="bg-white border-b border-[var(--color-border)] py-3.5 sticky top-16 z-30 shadow-xs" aria-label="Quick Actions">
      <div className="container-ami">
        <div className="flex items-center justify-between gap-2 sm:gap-4 overflow-x-auto no-scrollbar py-0.5">
          {/* Action 1: 1-Tap Wholesale Catalog */}
          <button
            type="button"
            onClick={() => onOpenCatalogModal('dealer')}
            className="shrink-0 inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#25D366]/40 bg-[#25D366]/5 hover:bg-[#25D366]/15 text-[#128C7E] text-[0.7rem] font-medium tracking-wide transition-all hover:scale-[1.02] active:scale-98 cursor-pointer"
          >
            <Download size={13} className="shrink-0 text-[#25D366]" />
            <span>1-Tap Wholesale Catalog</span>
          </button>

          {/* Action 2: Quote Selector */}
          <button
            type="button"
            onClick={onScrollToSelector}
            className="shrink-0 inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[var(--color-border)] hover:border-[var(--color-accent)] bg-[var(--color-background)] hover:bg-white text-[var(--color-foreground)] text-[0.7rem] font-medium tracking-wide transition-all cursor-pointer"
          >
            <Calculator size={13} className="shrink-0 text-[var(--color-accent)]" />
            <span>SS202 & SS304 Quote Calculator</span>
          </button>

          {/* Action 3: Custom Size Fabrication */}
          <button
            type="button"
            onClick={onScrollToCustom}
            className="shrink-0 inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[var(--color-border)] hover:border-[var(--color-foreground)] bg-[var(--color-background)] hover:bg-white text-[var(--color-foreground)] text-[0.7rem] font-medium tracking-wide transition-all cursor-pointer"
          >
            <Ruler size={13} className="shrink-0 text-[var(--color-muted)]" />
            <span>Custom Size Fabrication (48h)</span>
          </button>

          {/* Action 4: Upload Layout for BOQ */}
          <button
            type="button"
            onClick={onScrollToBOQ}
            className="shrink-0 inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[var(--color-border)] hover:border-blue-500 bg-[var(--color-background)] hover:bg-white text-[var(--color-foreground)] text-[0.7rem] font-medium tracking-wide transition-all cursor-pointer"
          >
            <UploadCloud size={13} className="shrink-0 text-blue-600" />
            <span>Send Layout for Free BOQ</span>
          </button>
        </div>
      </div>
    </div>
  );
}
