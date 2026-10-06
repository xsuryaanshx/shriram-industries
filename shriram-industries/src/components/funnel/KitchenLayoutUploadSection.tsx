// ─────────────────────────────────────────────
//  KitchenLayoutUploadSection.tsx
//  Clean Architectural BOQ Layout Estimator
// ─────────────────────────────────────────────
import { useState } from 'react';
import { UploadCloud, CheckCircle2, Clock, MessageSquare, ArrowRight, ShieldAlert } from 'lucide-react';
import { siteConfig } from '@/config/site';

const LAYOUT_TYPES = ['L-Shape Kitchen', 'Parallel Kitchen', 'U-Shape Kitchen', 'Straight Kitchen', 'Island Modular'];
const CABINET_COUNTS = ['3 to 6 Cabinets (Small)', '7 to 12 Cabinets (Standard 2BHK/3BHK)', '13+ Cabinets (Luxury Villa)'];
const STEEL_PREFERENCES = ['SS 304 Premium (Rust-Proof)', 'SS 202 Commercial (Value for Money)', 'Mixed / Technical Recommendation'];

export default function KitchenLayoutUploadSection() {
  const [layoutType, setLayoutType] = useState('L-Shape Kitchen');
  const [cabinetCount, setCabinetCount] = useState('7 to 12 Cabinets (Standard 2BHK/3BHK)');
  const [steelPref, setSteelPref] = useState('SS 304 Premium (Rust-Proof)');
  const [clientRole, setClientRole] = useState('Interior Designer / Architect');
  const [city, setCity] = useState('Indore');
  const [fileName, setFileName] = useState<string | null>(null);

  const cleanPhone = siteConfig.contact.whatsapp?.replace(/[^0-9]/g, '') || '918047639215';

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFileName(e.target.files[0].name);
    }
  };

  const handleWhatsAppSendPlan = () => {
    const text = `Namaste Shriram Industries!
I want a Free Hardware Bill-of-Quantities (BOQ) & Cost Estimation for my kitchen layout.

• Kitchen Type: ${layoutType}
• Cabinet Count: ${cabinetCount}
• Preferred Steel Grade: ${steelPref}
• Client Profile: ${clientRole}
• City: ${city}
${fileName ? `• Attached/Ready Drawing: ${fileName}` : '• I am sending my kitchen floor plan / drawing in this chat right now.'}

Please share the hardware recommendation (baskets, tandem boxes, channels, corner solutions) and wholesale factory estimate.`;

    const url = `https://wa.me/${cleanPhone}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="layout-quote" className="py-20 bg-[var(--color-background)] border-b border-[var(--color-border)]" aria-labelledby="boq-heading">
      <div className="container-ami">
        <div className="max-w-3xl mb-12">
          <p className="text-label text-[0.6rem] text-[var(--color-accent)] tracking-[0.2em] uppercase mb-3">
            Direct Factory Estimation
          </p>
          <h2 id="boq-heading" className="heading-lg text-[var(--color-foreground)]">
            Send Kitchen Layout for a Free BOQ
          </h2>
          <p className="text-[var(--color-muted)] text-sm md:text-base mt-3 max-w-xl leading-relaxed">
            Have a 2D floor plan, architectural blueprint, or cabinet dimensions? Get an exact hardware bill-of-quantities
            and wholesale price quote from our Polo Ground engineers in under 2 hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start max-w-5xl">
          {/* Interactive Form Card */}
          <div className="lg:col-span-7 bg-white border border-[var(--color-border)] rounded-2xl p-6 md:p-8 shadow-xs">
            <div className="flex items-center justify-between pb-4 mb-5 border-b border-[var(--color-border)]">
              <span className="text-label text-[0.65rem] text-[var(--color-muted)] tracking-[0.14em] uppercase font-semibold">
                Kitchen Specifications
              </span>
              <span className="text-xs text-[var(--color-accent)] font-medium flex items-center gap-1">
                <Clock size={13} /> 2-Hour Response
              </span>
            </div>

            <div className="space-y-4">
              {/* Layout shape */}
              <div>
                <label className="block text-xs font-semibold text-[var(--color-foreground)] mb-2">
                  1. Kitchen Layout Shape
                </label>
                <div className="flex flex-wrap gap-2">
                  {LAYOUT_TYPES.map((type) => (
                    <button
                      key={type}
                      type="button"
                      onClick={() => setLayoutType(type)}
                      className={`text-xs px-3.5 py-2 rounded-lg border transition-all cursor-pointer ${
                        layoutType === type
                          ? 'border-[var(--color-accent)] bg-orange-50/50 text-[var(--color-accent)] font-medium'
                          : 'border-[var(--color-border)] bg-white text-[var(--color-muted)] hover:border-gray-400 hover:text-[var(--color-foreground)]'
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              {/* Cabinet size */}
              <div>
                <label className="block text-xs font-semibold text-[var(--color-foreground)] mb-2">
                  2. Approximate Cabinet Count
                </label>
                <select
                  value={cabinetCount}
                  onChange={(e) => setCabinetCount(e.target.value)}
                  className="w-full text-xs bg-white border border-[var(--color-border)] text-[var(--color-foreground)] rounded-lg px-3.5 py-2.5 focus:outline-none focus:border-[var(--color-accent)] transition-colors"
                >
                  {CABINET_COUNTS.map((c) => (
                    <option key={c} value={c}>
                      {c}
                    </option>
                  ))}
                </select>
              </div>

              {/* Preferred Steel Grade */}
              <div>
                <label className="block text-xs font-semibold text-[var(--color-foreground)] mb-2">
                  3. Preferred Steel Grade
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  {STEEL_PREFERENCES.map((pref) => (
                    <button
                      key={pref}
                      type="button"
                      onClick={() => setSteelPref(pref)}
                      className={`text-[0.7rem] p-2.5 rounded-lg border text-left transition-all cursor-pointer ${
                        steelPref === pref
                          ? 'border-[var(--color-foreground)] bg-zinc-100 text-[var(--color-foreground)] font-semibold'
                          : 'border-[var(--color-border)] bg-white text-[var(--color-muted)] hover:border-gray-400'
                      }`}
                    >
                      {pref}
                    </button>
                  ))}
                </div>
              </div>

              {/* Client Profile & City */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                <div>
                  <label className="block text-xs font-semibold text-[var(--color-foreground)] mb-1">I am a</label>
                  <select
                    value={clientRole}
                    onChange={(e) => setClientRole(e.target.value)}
                    className="w-full text-xs bg-white border border-[var(--color-border)] text-[var(--color-foreground)] rounded-lg px-3 py-2.5 focus:outline-none focus:border-[var(--color-accent)]"
                  >
                    <option value="Interior Designer / Architect">Interior Designer / Architect</option>
                    <option value="Modular Kitchen Manufacturer">Modular Kitchen Manufacturer</option>
                    <option value="Builder / Contractor">Builder / Contractor</option>
                    <option value="Homeowner / Renovation">Homeowner / Renovation</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[var(--color-foreground)] mb-1">Project City</label>
                  <input
                    type="text"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    placeholder="e.g. Indore, Bhopal"
                    className="w-full text-xs bg-white border border-[var(--color-border)] text-[var(--color-foreground)] rounded-lg px-3 py-2.5 focus:outline-none focus:border-[var(--color-accent)]"
                  />
                </div>
              </div>

              {/* Drawing upload */}
              <div>
                <label className="block text-xs font-semibold text-[var(--color-foreground)] mb-1.5">
                  4. Attach Kitchen Drawing / Photo (Optional)
                </label>
                <div className="border border-dashed border-[var(--color-border)] hover:border-[var(--color-accent)] rounded-xl p-4 text-center transition-colors bg-zinc-50/50">
                  <input
                    type="file"
                    id="drawing-file"
                    onChange={handleFileChange}
                    accept="image/*,.pdf,.dwg"
                    className="hidden"
                  />
                  <label htmlFor="drawing-file" className="cursor-pointer block">
                    <UploadCloud className="mx-auto text-[var(--color-accent)] mb-2" size={22} />
                    <span className="text-xs text-[var(--color-foreground)] font-medium block">
                      {fileName ? `Attached: ${fileName}` : 'Click to select floor plan, sketch, or photo'}
                    </span>
                    <span className="text-[0.68rem] text-[var(--color-muted)] mt-1 block">
                      PNG, JPG, PDF, or CAD drawings (or attach directly on WhatsApp)
                    </span>
                  </label>
                </div>
              </div>

              {/* Submit CTA */}
              <button
                type="button"
                onClick={handleWhatsAppSendPlan}
                className="w-full mt-3 flex items-center justify-center gap-2 px-6 py-3.5 bg-[#25D366] hover:bg-[#20ba59] text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all text-xs tracking-wider uppercase cursor-pointer"
              >
                <MessageSquare size={16} className="fill-white/20" />
                <span>Send Specifications & Get Free BOQ on WhatsApp</span>
                <ArrowRight size={14} />
              </button>
            </div>
          </div>

          {/* Right Info Cards */}
          <div className="lg:col-span-5 space-y-4">
            <div className="bg-white border border-[var(--color-border)] rounded-2xl p-6 shadow-xs">
              <span className="text-label text-[0.6rem] text-[var(--color-accent)] tracking-[0.2em] uppercase font-semibold block mb-3">
                Included with Every BOQ
              </span>
              <ul className="space-y-3.5 text-xs text-[var(--color-muted)]">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 size={16} className="text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong className="text-[var(--color-foreground)]">Optimized Basket Sizing:</strong> Millimeter recommendations preventing dead corner cabinet space.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 size={16} className="text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong className="text-[var(--color-foreground)]">Grade Cost Comparison:</strong> Side-by-side cost for SS 202 commercial vs. SS 304 premium.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 size={16} className="text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong className="text-[var(--color-foreground)]">Factory-Direct Rates:</strong> Transparent wholesale per-unit and bulk package pricing.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 size={16} className="text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong className="text-[var(--color-foreground)]">Fittings Checklist:</strong> Soft-close channels, brackets, and runners quantified.</span>
                </li>
              </ul>
            </div>

            <div className="p-6 bg-orange-50/50 border border-orange-200/60 rounded-2xl">
              <div className="flex items-center gap-2 text-[var(--color-accent)] font-semibold text-xs mb-1">
                <ShieldAlert size={16} />
                Polo Ground Factory Direct
              </div>
              <p className="text-xs text-[var(--color-muted)] leading-relaxed">
                Zero third-party markups. Your quote comes directly from our production supervisors at Polo Ground Industrial Area, Indore.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
