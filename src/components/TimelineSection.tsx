import { motion } from "framer-motion";

const phases = [
  {
    period: "Month 1",
    label: "Phase 1: Project Initiation and Alignment",
    tags: ["Charter", "Engagement Plan", "WBS", "EDAC Setup"],
  },
  {
    period: "Months 1-2",
    label: "Phase 2: Community Engagement and Baseline Assessment",
    tags: ["Engagement", "Baseline", "Assessment Report"],
  },
  {
    period: "Months 2-4",
    label: "Phase 3: Strategic Planning",
    tags: ["Draft Plan", "Digital Platform", "KPIs"],
  },
  {
    period: "Month 4",
    label: "Phase 4: Finalization and Close-Out",
    tags: ["Final Plan", "Video", "Comms", "Close-Out"],
  },
  {
    period: "Months 5-16",
    label: "Phase 5: melyn Brain Implementation",
    tags: ["Platform Setup", "Data Migration", "Training", "12-Month License", "Dedicated Support"],
    highlight: true,
  },
];

const TimelineSection = () => {
  return (
    <section className="py-24 px-6 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
            Delivery <span className="text-gradient">Timeline</span>
          </h2>
          <p className="text-muted-foreground text-lg">4-month strategy + 12-month melyn Brain implementation  -  starting March 30, 2026.</p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 timeline-line hidden md:block" />
          <div className="space-y-8">
            {phases.map((phase, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`flex items-center gap-6 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
              >
                <div className={`flex-1 ${i % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                  <div className={`card-elevated rounded-xl p-5 inline-block ${(phase as any).highlight ? "border-2 border-amber-400/50 bg-amber-50/30 dark:bg-amber-950/20" : ""}`}>
                    <div className={`text-xs font-semibold mb-1 ${(phase as any).highlight ? "text-amber-600" : "text-primary"}`}>{phase.period}</div>
                    {(phase as any).highlight && (
                      <span className="inline-block text-[9px] px-2 py-0.5 rounded-full bg-amber-100 text-amber-700 font-bold uppercase tracking-wider mb-2">Strategy Plus</span>
                    )}
                    <h4 className="font-display font-semibold mb-2">{phase.label}</h4>
                    <div className={`flex flex-wrap gap-1.5 ${i % 2 === 0 ? "md:justify-end" : "md:justify-start"}`}>
                      {phase.tags.map((t, ti) => (
                        <span key={ti} className={`text-[10px] px-2 py-0.5 rounded-full font-medium ${(phase as any).highlight ? "bg-amber-100/60 text-amber-700" : "bg-primary/10 text-primary"}`}>
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="hidden md:flex w-4 h-4 rounded-full bg-primary shadow-glow shrink-0 relative z-10" />
                <div className="flex-1" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
