import { motion } from "framer-motion";
import { DollarSign, Calendar, Percent, CheckCircle2 } from "lucide-react";

const budgetItems = [
  { label: "Melyn Brain Platform Implementation", amount: 59500, percent: 29.8, barClass: "budget-bar-brain" },
  { label: "Comprehensive Community Plan  -  Phase 1", amount: 60000, percent: 30.1, barClass: "budget-bar-ccp" },
  { label: "Comprehensive Community Plan  -  Phase 2", amount: 60000, percent: 30.1, barClass: "budget-bar-ccp" },
  { label: "Website Update & Modernization", amount: 20000, percent: 10.0, barClass: "budget-bar-website" },
];

const timelinePhases = [
  { month: "1–2", label: "Discovery & Assessment", scopes: ["Brain", "CCP", "Website"] },
  { month: "2–4", label: "Configuration & Design", scopes: ["Brain", "CCP", "Website"] },
  { month: "3–5", label: "Engagement & Development", scopes: ["Brain", "CCP", "Website"] },
  { month: "4–6", label: "Training & Go-Live", scopes: ["Brain", "Website"] },
  { month: "5–7", label: "Strategic Planning & CCP Finalization", scopes: ["CCP"] },
  { month: "6–12", label: "Ongoing Support & Evolution", scopes: ["Brain", "CCP", "Website"] },
];

const paymentTerms = [
  "100% funded through P&ID Program",
  "Nation contribution: $0",
  "Continuous intake  -  no deadline",
  "Payment structured in milestone-based installments",
];

const BudgetTimeline = () => {
  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
            Investment <span className="text-gradient">Breakdown</span>
          </h2>
          <p className="text-muted-foreground text-lg">Total Project Cost: <span className="text-foreground font-display font-bold text-2xl text-gradient">$199,500</span></p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="card-elevated p-8"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                <DollarSign className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-display text-xl font-semibold">Budget Allocation</h3>
            </div>

            <div className="space-y-6">
              {budgetItems.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium">{item.label}</span>
                    <span className="text-sm font-display font-bold">${item.amount.toLocaleString()}</span>
                  </div>
                  <div className="h-3 rounded-full bg-secondary overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${item.percent}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.3 + i * 0.1, ease: "easeOut" }}
                      className={`h-full rounded-full ${item.barClass}`}
                    />
                  </div>
                  <div className="text-right text-xs text-muted-foreground mt-1">{item.percent}%</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="card-elevated p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Percent className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-display text-xl font-semibold">Funding Details</h3>
              </div>
              <div className="space-y-3">
                {paymentTerms.map((term, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                    <span className="text-sm text-muted-foreground">{term}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="card-elevated p-8">
              <h3 className="font-display text-lg font-semibold mb-6 text-center">Allocation by Scope</h3>
              <div className="flex items-center justify-center gap-8">
                <div className="relative w-40 h-40">
                  <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90">
                    <circle cx="50" cy="50" r="40" fill="none" strokeWidth="12"
                      stroke="hsl(250, 80%, 60%)" strokeDasharray={`${29.8 * 2.51} ${100 * 2.51}`} strokeDashoffset="0" />
                    <circle cx="50" cy="50" r="40" fill="none" strokeWidth="12"
                      stroke="hsl(160, 60%, 50%)" strokeDasharray={`${30.1 * 2.51} ${100 * 2.51}`} strokeDashoffset={`${-29.8 * 2.51}`} />
                    <circle cx="50" cy="50" r="40" fill="none" strokeWidth="12"
                      stroke="hsl(38, 95%, 55%)" strokeDasharray={`${30.1 * 2.51} ${100 * 2.51}`} strokeDashoffset={`${-59.9 * 2.51}`} />
                    <circle cx="50" cy="50" r="40" fill="none" strokeWidth="12"
                      stroke="hsl(12, 90%, 62%)" strokeDasharray={`${10 * 2.51} ${100 * 2.51}`} strokeDashoffset={`${-90 * 2.51}`} />
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-2xl font-display font-bold text-gradient">$199.5K</span>
                    <span className="text-[10px] text-muted-foreground">TOTAL</span>
                  </div>
                </div>
                <div className="space-y-3">
                  <LegendItem color="hsl(250, 80%, 60%)" label="Brain Platform" value="$59.5K" />
                  <LegendItem color="hsl(160, 60%, 50%)" label="CCP Phase 1" value="$60K" />
                  <LegendItem color="hsl(38, 95%, 55%)" label="CCP Phase 2" value="$60K" />
                  <LegendItem color="hsl(12, 90%, 62%)" label="Website" value="$20K" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8 text-center"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Unified <span className="text-gradient">Timeline</span>
          </h2>
        </motion.div>

        <div className="relative">
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 timeline-line hidden md:block" />

          <div className="space-y-8">
            {timelinePhases.map((phase, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`flex items-center gap-6 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
              >
                <div className={`flex-1 ${i % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                  <div className="card-elevated rounded-xl p-5 inline-block">
                    <div className="text-xs text-primary font-semibold mb-1">Month {phase.month}</div>
                    <h4 className="font-display font-semibold mb-2">{phase.label}</h4>
                    <div className="flex flex-wrap gap-1.5">
                      {phase.scopes.map((s, si) => (
                        <span key={si} className="text-[10px] px-2 py-0.5 rounded-full bg-primary/10 text-primary font-medium">
                          {s}
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

const LegendItem = ({ color, label, value }: { color: string; label: string; value: string }) => (
  <div className="flex items-center gap-2">
    <div className="w-3 h-3 rounded-sm shrink-0" style={{ backgroundColor: color }} />
    <span className="text-xs text-muted-foreground">{label}</span>
    <span className="text-xs font-semibold">{value}</span>
  </div>
);

export default BudgetTimeline;
