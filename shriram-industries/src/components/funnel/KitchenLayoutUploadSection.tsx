// ─────────────────────────────────────────────
//  KitchenLayoutUploadSection.tsx
//  Upload Kitchen Layout for Free BOQ / Quote
// ─────────────────────────────────────────────
import { useState } from 'react';
import { UploadCloud, CheckCircle2, Clock, MessageSquare, ArrowRight, ShieldAlert, Sparkles } from 'lucide-react';
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
    <section id="layout-quote" className="py-20 bg-[#16181b] text-white relative overflow-hidden" aria-labelledby="boq-heading">
      {/* Subtle backdrop glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[var(--color-accent)] opacity-10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500 opacity-5 rounded-full blur-3xl pointer-events-none" />

      <div className="container-ami relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--color-accent)]/10 border border-[var(--color-accent)]/30 text-[var(--color-accent)] text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles size={13} />
            Direct Factory Engineering
          </div>
          <h2 id="boq-heading" className="text-3xl md:text-4xl font-bold tracking-tight">
            Send Kitchen Layout for a Free Hardware BOQ
          </h2>
          <p className="text-gray-300 text-sm md:text-base mt-3 leading-relaxed">
            Have a 2D floor plan, architectural blueprint, or cabinet dimensions? Get an exact hardware bill-of-quantities
            and wholesale price quote from our Polo Ground engineers in under 2 hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start max-w-5xl mx-auto">
          {/* Interactive Form Card */}
          <div className="lg:col-span-7 bg-[#1f2228] border border-white/10 rounded-2xl p-6 md:p-8 shadow-xl">
            <h3 className="text-lg font-semibold text-white mb-5 flex items-center justify-between">
              <span>Kitchen Specifications</span>
              <span className="text-xs text-[var(--color-accent)] font-normal flex items-center gap-1">
                <Clock size={13} /> 2-Hour Response
              </span>
            </h3>

            <div className="space-y-4">
              {/* Layout shape */}
              <div>
                <label className="block text-xs font-medium text-gray-300 mb-1.5">
                  1. Kitchen Layout Shape
                </label>
                <div className="flex flex-wrap gap-2">
                  {LAYOUT_TYPES.map((type) => (
                    <button
                      key={type}
                      type="button"
                      onClick={() => setLayoutType(type)}
                      className={`text-xs px-3 py-1.5 rounded-lg border transition-all ${
                        layoutType === type
                          ? 'border-[var(--color-accent)] bg-[var(--color-accent)] text-white font-medium'
                          : 'border-white/10 bg-white/5 text-gray-300 hover:border-white/30'
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              {/* Cabinet size */}
              <div>
                <label className="block text-xs font-medium text-gray-300 mb-1.5">
                  2. Approximate Cabinet Count
                </label>
                <select
                  value={cabinetCount}
                  onChange={(e) => setCabinetCount(e.target.value)}
                  className="w-full text-xs bg-white/5 border border-white/10 text-white rounded-lg px-3 py-2.5 focus:outline-none focus:border-[var(--color-accent)]"
                >
                  {CABINET_COUNTS.map((c) => (
                    <option key={c} value={c} className="bg-[#1f2228] text-white">
                      {c}
                    </option>
                  ))}
                </select>
              </div>

              {/* Preferred Steel Grade */}
              <div>
                <label className="block text-xs font-medium text-gray-300 mb-1.5">
                  3. Preferred Steel Grade
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  {STEEL_PREFERENCES.map((pref) => (
                    <button
                      key={pref}
                      type="button"
                      onClick={() => setSteelPref(pref)}
                      className={`text-[0.7rem] p-2 rounded-lg border text-left transition-all ${
                        steelPref === pref
                          ? 'border-[var(--color-accent)] bg-[var(--color-accent)]/20 text-white font-medium'
                          : 'border-white/10 bg-white/5 text-gray-400 hover:text-white'
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
                  <label className="block text-xs font-medium text-gray-300 mb-1">I am a</label>
                  <select
                    value={clientRole}
                    onChange={(e) => setClientRole(e.target.value)}
                    className="w-full text-xs bg-white/5 border border-white/10 text-white rounded-lg px-3 py-2 focus:outline-none focus:border-[var(--color-accent)]"
                  >
                    <option value="Interior Designer / Architect" className="bg-[#1f2228]">Interior Designer / Architect</option>
                    <option value="Modular Kitchen Manufacturer" className="bg-[#1f2228]">Modular Kitchen Manufacturer</option>
                    <option value="Builder / Contractor" className="bg-[#1f2228]">Builder / Contractor</option>
                    <option value="Homeowner / Renovation" className="bg-[#1f2228]">Homeowner / Renovation</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-300 mb-1">Project City</label>
                  <input
                    type="text"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    placeholder="e.g. Indore, Bhopal"
                    className="w-full text-xs bg-white/5 border border-white/10 text-white rounded-lg px-3 py-2 focus:outline-none focus:border-[var(--color-accent)]"
                  />
                </div>
              </div>

              {/* Drawing upload / attach preview */}
              <div>
                <label className="block text-xs font-medium text-gray-300 mb-1.5">
                  4. Attach Kitchen Drawing / Image (Optional)
                </label>
                <div className="border border-dashed border-white/20 rounded-xl p-4 text-center hover:border-[var(--color-accent)]/50 transition-colors bg-white/[0.02]">
                  <input
                    type="file"
                    id="drawing-file"
                    onChange={handleFileChange}
                    accept="image/*,.pdf,.dwg"
                    className="hidden"
                  />
                  <label htmlFor="drawing-file" className="cursor-pointer block">
                    <UploadCloud className="mx-auto text-[var(--color-accent)] mb-2" size={24} />
                    <span className="text-xs text-gray-200 font-medium block">
                      {fileName ? `Attached: ${fileName}` : 'Click to select blueprint, floor plan, or photo'}
                    </span>
                    <span className="text-[0.65rem] text-gray-400 mt-1 block">
                      PNG, JPG, PDF, or CAD drawings (or attach directly on WhatsApp)
                    </span>
                  </label>
                </div>
              </div>

              {/* Submit CTA */}
              <button
                type="button"
                onClick={handleWhatsAppSendPlan}
                className="w-full mt-4 flex items-center justify-center gap-2 px-6 py-3.5 bg-[#25D366] hover:bg-[#20ba59] text-white font-medium rounded-xl shadow-lg hover:shadow-xl transition-all text-xs md:text-sm"
              >
                <MessageSquare size={18} className="fill-white/20" />
                <span>Send Specifications & Get Free BOQ on WhatsApp</span>
                <ArrowRight size={15} />
              </button>
            </div>
          </div>

          {/* Right info / Value cards */}
          <div className="lg:col-span-5 space-y-4">
            <div className="bg-[#1f2228] border border-white/10 rounded-2xl p-6">
              <h4 className="text-sm font-bold uppercase tracking-wider text-[var(--color-accent)] mb-3">
                What You Receive in the BOQ
              </h4>
              <ul className="space-y-3 text-xs text-gray-300">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 size={16} className="text-[#25D366] shrink-0 mt-0.5" />
                  <span><strong>Optimized Basket Sizing:</strong> Exact millimeter recommendations to prevent dead corner space.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 size={16} className="text-[#25D366] shrink-0 mt-0.5" />
                  <span><strong>Grade Comparison:</strong> Side-by-side cost difference for SS202 commercial vs. SS304 premium.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 size={16} className="text-[#25D366] shrink-0 mt-0.5" />
                  <span><strong>Factory-Direct Wholesale Rates:</strong> Transparent per-piece and bulk combo pricing.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 size={16} className="text-[#25D366] shrink-0 mt-0.5" />
                  <span><strong>Hardware Fittings Checklist:</strong> Full tally of soft-close channels, brackets, and runners.</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-amber-500/10 to-orange-500/10 border border-amber-500/20 rounded-2xl p-6">
              <div className="flex items-center gap-2 text-amber-400 font-semibold text-xs mb-1">
                <ShieldAlert size={16} />
                Polo Ground Factory Direct
              </div>
              <p className="text-xs text-gray-300 leading-relaxed">
                No third-party dealer markups. Your quote comes directly from our production supervisors at Polo Ground Industrial Area, Indore.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
