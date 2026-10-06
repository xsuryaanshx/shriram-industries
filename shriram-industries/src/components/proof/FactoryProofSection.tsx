// ─────────────────────────────────────────────
//  FactoryProofSection.tsx
//  Raw Factory Proof & Micro-Demos (Unshakable Trust)
// ─────────────────────────────────────────────
import { useState } from 'react';
import { ShieldCheck, Award, Flame, Gauge, CheckCircle2, Factory } from 'lucide-react';

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
      'AISI 304 food-grade formulation undergoes rigorous salt fog and organic acid exposure. Zero rust spotting, pitting, or wire weld joint discoloration in humid, turmeric, and Indian spice vapor environments.',
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
    accentColor: '#3b82f6',
  },
];

export default function FactoryProofSection() {
  const [activeDemo, setActiveDemo] = useState(PROOF_DEMOS[0].id);

  const selected = PROOF_DEMOS.find((d) => d.id === activeDemo) || PROOF_DEMOS[0];

  return (
    <section id="factory-proof" className="py-20 bg-zinc-950 text-white relative overflow-hidden" aria-labelledby="proof-heading">
      <div className="container-ami relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-[var(--color-accent)] text-xs font-semibold uppercase tracking-wider mb-3">
            <Factory size={13} />
            Raw Manufacturing Proof · Polo Ground, Indore
          </div>
          <h2 id="proof-heading" className="text-3xl md:text-4xl font-bold tracking-tight">
            Engineered to Outlast the House
          </h2>
          <p className="text-gray-400 text-sm md:text-base mt-3 max-w-2xl mx-auto">
            We don’t just assemble imported knock-offs. Every basket, runner, and carousel unit is tool-welded and stress-tested inside our Indore facility since 1991.
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
                className={`p-5 rounded-2xl border text-left transition-all ${
                  isSelected
                    ? 'border-[var(--color-accent)] bg-zinc-900 shadow-xl'
                    : 'border-white/10 bg-zinc-900/40 hover:bg-zinc-900/70 hover:border-white/20'
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <span className={`text-[0.65rem] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full ${
                    isSelected ? 'bg-[var(--color-accent)] text-white' : 'bg-white/10 text-gray-400'
                  }`}>
                    {demo.badge}
                  </span>
                  <Icon size={18} style={{ color: demo.accentColor }} />
                </div>
                <h3 className="text-sm font-bold text-white mb-1 line-clamp-1">
                  {demo.title}
                </h3>
                <div className="flex items-baseline gap-2 mt-2">
                  <span className="text-xl font-extrabold text-white" style={{ color: isSelected ? demo.accentColor : 'white' }}>
                    {demo.metric}
                  </span>
                  <span className="text-[0.65rem] text-gray-400">{demo.metricLabel}</span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Dynamic Detail Showcase Card */}
        <div className="bg-zinc-900 border border-white/10 rounded-2xl p-6 sm:p-10 shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-4">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[var(--color-accent)]">
              <Award size={14} />
              <span>{selected.badge} · Factory Verification</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              {selected.title}
            </h3>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              {selected.description}
            </p>

            <div className="pt-3 border-t border-white/10 flex flex-wrap items-center gap-4 text-xs text-gray-400">
              <span className="inline-flex items-center gap-1.5 text-green-400 font-medium">
                <CheckCircle2 size={15} />
                {selected.testStandard}
              </span>
              <span>•</span>
              <span className="text-gray-300">
                Polo Ground Factory Batch Certified
              </span>
            </div>
          </div>

          {/* Simulated Visual Proof Graphic / Animation */}
          <div className="lg:col-span-5 bg-zinc-950 border border-white/10 rounded-xl p-6 relative overflow-hidden flex flex-col justify-between min-h-[220px]">
            <div className="flex items-center justify-between text-xs text-gray-400 pb-3 border-b border-white/10">
              <span className="font-mono">BENCH_TEST: {selected.id.toUpperCase()}</span>
              <span className="flex items-center gap-1 text-green-400">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                LIVE SPEC
              </span>
            </div>

            <div className="py-6 text-center space-y-2">
              <div className="text-4xl sm:text-5xl font-black tracking-tight" style={{ color: selected.accentColor }}>
                {selected.metric}
              </div>
              <div className="text-xs uppercase tracking-widest text-gray-300 font-semibold">
                {selected.metricLabel}
              </div>
              <p className="text-[0.7rem] text-gray-400 max-w-xs mx-auto">
                Continuous inspection performed on every batch before regional dispatch across MP.
              </p>
            </div>

            <div className="pt-3 border-t border-white/10 flex items-center justify-between text-[0.65rem] text-gray-500">
              <span>Origin: Shriram Industries (Indore)</span>
              <span>Grade: AISI 202 & 304 Certified</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
