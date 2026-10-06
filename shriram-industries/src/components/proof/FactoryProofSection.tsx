// ─────────────────────────────────────────────
//  FactoryProofSection.tsx
//  Polo Ground Factory Proof & Micro-Demos
// ─────────────────────────────────────────────
import { useState } from 'react';
import { ShieldCheck, Award, Flame, Gauge, CheckCircle2 } from 'lucide-react';

interface ProofDemo {
  id: string;
  badge: string;
  title: string;
  metric: string;
  metricLabel: string;
  description: string;
  testStandard: string;
  icon: typeof Gauge;
  accentColor: string;
}

const PROOF_DEMOS: ProofDemo[] = [
  {
    id: 'load-test',
    badge: 'Load Stress Demo',
    title: '45 KG Continuous Heavy-Load Glide Test',
    metric: '45 KG',
    metricLabel: 'Certified Dynamic Load',
    description:
      'Loaded with solid cast-iron cookware weights across 50,000 cycles. Full-extension telescopic runners maintain zero sag, silent soft-close damper activation, and effortless one-finger glide.',
    testStandard: 'Tested per IS 9844 Furniture Hardware Guidelines',
    icon: Gauge,
    accentColor: '#F38524',
  },
  {
    id: 'corrosion-test',
    badge: 'Chemical Resistance',
    title: 'Salt Spray & Nitric Acid Corrosion Proof',
    metric: '96 Hrs',
    metricLabel: 'Neutral Salt Spray Pass',
    description:
      'AISI 304 food-grade formulation undergoes rigorous salt fog and organic acid exposure. Zero rust spotting, pitting, or wire weld joint discoloration in humid Indian cooking environments.',
    testStandard: 'ASTM B117 Neutral Salt Spray Protocol',
    icon: ShieldCheck,
    accentColor: '#10b981',
  },
  {
    id: 'precision-welding',
    badge: 'Tooling Craft',
    title: 'Argon TIG Welding & Electro-Polish Finish',
    metric: '0.05 mm',
    metricLabel: 'Weld Precision Tolerance',
    description:
      'Automated CNC wire forming joined by high-frequency argon TIG welds. Mirror electro-chemical polishing ensures zero sharp wire burrs to snag delicate cloth, hands, or kitchenware.',
    testStandard: 'Manufactured at Polo Ground Industrial Plant',
    icon: Flame,
    accentColor: '#60a5fa',
  },
];

export default function FactoryProofSection() {
  const [activeDemo, setActiveDemo] = useState(PROOF_DEMOS[0].id);

  const selected = PROOF_DEMOS.find((d) => d.id === activeDemo) || PROOF_DEMOS[0];

  return (
    <section id="factory-proof" className="py-20 bg-[#1a1d21] text-white" aria-labelledby="proof-heading">
      <div className="container-ami">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <p className="text-label text-[0.6rem] text-[var(--color-accent)] tracking-[0.2em] uppercase mb-3">
            Polo Ground Factory Engineering
          </p>
          <h2 id="proof-heading" className="heading-lg text-white">
            Engineered to Outlast the House
          </h2>
          <p className="text-white/65 text-sm md:text-base mt-3 max-w-xl leading-relaxed">
            Every basket, runner, and carousel unit is tool-welded and stress-tested inside our Indore facility since 1991.
          </p>
        </div>

        {/* Demo Selector Tabs */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {PROOF_DEMOS.map((demo) => {
            const Icon = demo.icon;
            const isSelected = activeDemo === demo.id;
            return (
              <button
                key={demo.id}
                type="button"
                onClick={() => setActiveDemo(demo.id)}
                className={`p-5 rounded-xl border text-left transition-all cursor-pointer ${
                  isSelected
                    ? 'border-[var(--color-accent)] bg-white/10 shadow-md'
                    : 'border-white/10 bg-white/[0.03] hover:bg-white/[0.06] hover:border-white/20'
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <span className={`text-[0.65rem] font-semibold tracking-wider uppercase px-2.5 py-0.5 rounded-full ${
                    isSelected ? 'bg-[var(--color-accent)] text-white' : 'bg-white/10 text-white/70'
                  }`}>
                    {demo.badge}
                  </span>
                  <Icon size={18} style={{ color: demo.accentColor }} />
                </div>
                <h3 className="text-sm font-semibold text-white mb-1">
                  {demo.title}
                </h3>
                <div className="flex items-baseline gap-2 mt-2">
                  <span className="text-xl font-bold" style={{ color: isSelected ? demo.accentColor : '#ffffff' }}>
                    {demo.metric}
                  </span>
                  <span className="text-[0.68rem] text-white/50">{demo.metricLabel}</span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Dynamic Detail Showcase Card */}
        <div className="bg-white/[0.04] border border-white/10 rounded-2xl p-6 sm:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-4">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[var(--color-accent)]">
              <Award size={14} />
              <span>{selected.badge} · Quality Assurance</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-medium text-white tracking-tight">
              {selected.title}
            </h3>
            <p className="text-white/75 text-sm sm:text-base leading-relaxed">
              {selected.description}
            </p>

            <div className="pt-3 border-t border-white/10 flex flex-wrap items-center gap-4 text-xs text-white/60">
              <span className="inline-flex items-center gap-1.5 text-emerald-400 font-medium">
                <CheckCircle2 size={15} />
                {selected.testStandard}
              </span>
              <span>•</span>
              <span className="text-white/80">
                Polo Ground Factory Batch Certified
              </span>
            </div>
          </div>

          {/* Metric Panel */}
          <div className="lg:col-span-5 bg-white/[0.03] border border-white/10 rounded-xl p-6 flex flex-col justify-between min-h-[200px]">
            <div className="flex items-center justify-between text-xs text-white/50 pb-3 border-b border-white/10 font-mono">
              <span>TEST: {selected.id.toUpperCase()}</span>
              <span className="flex items-center gap-1 text-emerald-400">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                VERIFIED
              </span>
            </div>

            <div className="py-6 text-center space-y-1.5">
              <div className="text-4xl sm:text-5xl font-light text-white" style={{ color: selected.accentColor }}>
                {selected.metric}
              </div>
              <div className="text-xs uppercase tracking-wider text-white/70 font-medium">
                {selected.metricLabel}
              </div>
              <p className="text-[0.7rem] text-white/50 max-w-xs mx-auto">
                Continuous inspection performed on every batch before regional dispatch across MP.
              </p>
            </div>

            <div className="pt-3 border-t border-white/10 flex items-center justify-between text-[0.65rem] text-white/40">
              <span>Shriram Industries (Indore)</span>
              <span>AISI 202 & 304 Certified</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
