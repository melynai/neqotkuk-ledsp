import React, { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown, DollarSign, Calendar, CheckCircle2, Brain } from "lucide-react";

const fadeUp = { initial: { opacity: 0, y: 24 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true } };

/* ── Budget data ── */
const budgetItems = [
  { label: "Phase 1  -  Project Initiation", amount: 5000, percent: 10.8, barClass: "budget-bar-brain" },
  { label: "Phase 2  -  Engagement and Baseline", amount: 16000, percent: 34.4, barClass: "budget-bar-website" },
  { label: "Phase 3  -  Strategic Planning", amount: 15000, percent: 32.3, barClass: "budget-bar-hr" },
  { label: "Phase 4  -  Finalization", amount: 6500, percent: 14.0, barClass: "budget-bar-phase4" },
  { label: "PM and Admin", amount: 4000, percent: 8.6, barClass: "budget-bar-pm" },
];

/* ── melyn Brain add-on line items ── */
const brainItems = [
  { label: "Platform Setup & Configuration", amount: 12000 },
  { label: "Data Migration & Integration", amount: 10000 },
  { label: "Training & Onboarding", amount: 8000 },
  { label: "12-Month Platform License", amount: 20000 },
  { label: "Dedicated Support (12 months)", amount: 9500 },
];

/* ── Step data per phase ── */
type BudgetStep = { step: string; label: string; cost: string; roles: { role: string; hrs: number | null; rate: number | null; cost: number }[] };

const phase1Steps: BudgetStep[] = [
  {
    step: "1.1", label: "Project Kick-Off and Charter", cost: "$1,700",
    roles: [
      { role: "Project Lead", hrs: 2, rate: 350, cost: 700 },
      { role: "Lead Analyst", hrs: 3.5, rate: 200, cost: 700 },
      { role: "Project Coordinator", hrs: 4, rate: 75, cost: 300 },
    ],
  },
  {
    step: "1.2", label: "Engagement Plan", cost: "$1,650",
    roles: [
      { role: "Lead Analyst", hrs: 5, rate: 200, cost: 1000 },
      { role: "BC Cultural Advisor", hrs: 2, rate: 175, cost: 350 },
      { role: "Project Coordinator", hrs: 4, rate: 75, cost: 300 },
    ],
  },
  {
    step: "1.3", label: "WBS and Project Schedule", cost: "$1,100",
    roles: [
      { role: "Lead Analyst", hrs: 4, rate: 200, cost: 800 },
      { role: "Project Coordinator", hrs: 4, rate: 75, cost: 300 },
    ],
  },
  {
    step: "1.4", label: "BCR and Briefing Note", cost: "$350",
    roles: [
      { role: "Lead Analyst", hrs: 1, rate: 200, cost: 200 },
      { role: "Project Coordinator", hrs: 2, rate: 75, cost: 150 },
    ],
  },
  {
    step: "PM", label: "Phase 1 Project Management", cost: "$200",
    roles: [
      { role: "Lead Analyst", hrs: 1, rate: 200, cost: 200 },
    ],
  },
];

const phase2Steps: BudgetStep[] = [
  {
    step: "2.1", label: "Engagement Design", cost: "$1,750",
    roles: [
      { role: "Lead Analyst", hrs: 5, rate: 200, cost: 1000 },
      { role: "BC Cultural Advisor", hrs: 3, rate: 175, cost: 525 },
      { role: "Project Coordinator", hrs: 3, rate: 75, cost: 225 },
    ],
  },
  {
    step: "2.2", label: "Community Engagement Sessions", cost: "$4,700",
    roles: [
      { role: "Lead Analyst", hrs: 8, rate: 200, cost: 1600 },
      { role: "Indigenous Engagement Advisor", hrs: 8, rate: 175, cost: 1400 },
      { role: "BC Cultural Advisor", hrs: 4, rate: 175, cost: 700 },
      { role: "Research Analyst", hrs: 7, rate: 100, cost: 700 },
      { role: "Project Coordinator", hrs: 4, rate: 75, cost: 300 },
    ],
  },
  {
    step: "2.3", label: "Stakeholder Interviews", cost: "$2,150",
    roles: [
      { role: "Lead Analyst", hrs: 5, rate: 200, cost: 1000 },
      { role: "Indigenous Engagement Advisor", hrs: 4, rate: 175, cost: 700 },
      { role: "Research Analyst", hrs: 3, rate: 100, cost: 300 },
      { role: "Project Coordinator", hrs: 2, rate: 75, cost: 150 },
    ],
  },
  {
    step: "2.4", label: "Stakeholder Register", cost: "$750",
    roles: [
      { role: "Lead Analyst", hrs: 2, rate: 200, cost: 400 },
      { role: "Research Analyst", hrs: 2, rate: 100, cost: 200 },
      { role: "Project Coordinator", hrs: 2, rate: 75, cost: 150 },
    ],
  },
  {
    step: "2.5", label: "Socio-Economic Baseline", cost: "$2,150",
    roles: [
      { role: "Lead Analyst", hrs: 5, rate: 200, cost: 1000 },
      { role: "Research Analyst", hrs: 10, rate: 100, cost: 1000 },
      { role: "Project Coordinator", hrs: 2, rate: 75, cost: 150 },
    ],
  },
  {
    step: "2.6", label: "Economic Opportunity Scan", cost: "$2,750",
    roles: [
      { role: "Lead Analyst", hrs: 8, rate: 200, cost: 1600 },
      { role: "Research Analyst", hrs: 7, rate: 100, cost: 700 },
      { role: "Project Coordinator", hrs: 6, rate: 75, cost: 450 },
    ],
  },
  {
    step: "2.7", label: "Pre-Planning Assessment Report", cost: "$1,750",
    roles: [
      { role: "Lead Analyst", hrs: 6, rate: 200, cost: 1200 },
      { role: "Research Analyst", hrs: 4, rate: 100, cost: 400 },
      { role: "Project Coordinator", hrs: 2, rate: 75, cost: 150 },
    ],
  },
];

const phase3Steps: BudgetStep[] = [
  {
    step: "3.1", label: "Synthesis and Findings", cost: "$1,550",
    roles: [
      { role: "Lead Analyst", hrs: 5, rate: 200, cost: 1000 },
      { role: "Research Analyst", hrs: 4, rate: 100, cost: 400 },
      { role: "Project Coordinator", hrs: 2, rate: 75, cost: 150 },
    ],
  },
  {
    step: "3.2", label: "Vision and Guiding Principles", cost: "$1,400",
    roles: [
      { role: "Lead Analyst", hrs: 4, rate: 200, cost: 800 },
      { role: "Indigenous Engagement Advisor", hrs: 2, rate: 175, cost: 350 },
      { role: "Research Analyst", hrs: 1, rate: 100, cost: 100 },
      { role: "Project Coordinator", hrs: 2, rate: 75, cost: 150 },
    ],
  },
  {
    step: "3.3", label: "Strategic Priorities", cost: "$2,850",
    roles: [
      { role: "Project Lead", hrs: 1, rate: 350, cost: 350 },
      { role: "Lead Analyst", hrs: 8, rate: 200, cost: 1600 },
      { role: "BC Cultural Advisor", hrs: 2, rate: 175, cost: 350 },
      { role: "Research Analyst", hrs: 4, rate: 100, cost: 400 },
      { role: "Project Coordinator", hrs: 2, rate: 75, cost: 150 },
    ],
  },
  {
    step: "3.4", label: "Implementation Framework", cost: "$3,050",
    roles: [
      { role: "Project Lead", hrs: 2, rate: 350, cost: 700 },
      { role: "Lead Analyst", hrs: 8, rate: 200, cost: 1600 },
      { role: "BC Cultural Advisor", hrs: 2, rate: 175, cost: 350 },
      { role: "Research Analyst", hrs: 4, rate: 100, cost: 400 },
    ],
  },
  {
    step: "3.5", label: "KPIs and Performance Measurement", cost: "$1,700",
    roles: [
      { role: "Lead Analyst", hrs: 4, rate: 200, cost: 800 },
      { role: "Research Analyst", hrs: 6, rate: 100, cost: 600 },
      { role: "Project Coordinator", hrs: 4, rate: 75, cost: 300 },
    ],
  },
  {
    step: "3.6", label: "Draft Strategic Plan", cost: "$2,450",
    roles: [
      { role: "Lead Analyst", hrs: 9, rate: 200, cost: 1800 },
      { role: "Research Analyst", hrs: 5, rate: 100, cost: 500 },
      { role: "Project Coordinator", hrs: 2, rate: 75, cost: 150 },
    ],
  },
  {
    step: "3.7", label: "Live Digital Platform", cost: "$2,000",
    roles: [
      { role: "Lead Analyst", hrs: 6, rate: 200, cost: 1200 },
      { role: "Research Analyst", hrs: 8, rate: 100, cost: 800 },
    ],
  },
];

const phase4Steps: BudgetStep[] = [
  {
    step: "4.1", label: "Finalize and Incorporate Feedback", cost: "$1,700",
    roles: [
      { role: "Lead Analyst", hrs: 6, rate: 200, cost: 1200 },
      { role: "BC Cultural Advisor", hrs: 2, rate: 175, cost: 350 },
      { role: "Project Coordinator", hrs: 2, rate: 75, cost: 150 },
    ],
  },
  {
    step: "4.2", label: "Final Presentation to Chief and Council", cost: "$1,150",
    roles: [
      { role: "Lead Analyst", hrs: 4, rate: 200, cost: 800 },
      { role: "Indigenous Engagement Advisor", hrs: 2, rate: 175, cost: 350 },
    ],
  },
  {
    step: "4.3", label: "Community Communications Package", cost: "$1,550",
    roles: [
      { role: "Lead Analyst", hrs: 4, rate: 200, cost: 800 },
      { role: "BC Cultural Advisor", hrs: 2, rate: 175, cost: 350 },
      { role: "Research Analyst", hrs: 4, rate: 100, cost: 400 },
    ],
  },
  {
    step: "4.4", label: "Short-Form Summary Video", cost: "$950",
    roles: [
      { role: "Lead Analyst", hrs: 3, rate: 200, cost: 600 },
      { role: "Research Analyst", hrs: 2, rate: 100, cost: 200 },
      { role: "Project Coordinator", hrs: 2, rate: 75, cost: 150 },
    ],
  },
  {
    step: "4.5", label: "Lessons Learned and Close-Out", cost: "$1,150",
    roles: [
      { role: "Lead Analyst", hrs: 4, rate: 200, cost: 800 },
      { role: "Research Analyst", hrs: 2, rate: 100, cost: 200 },
      { role: "Project Coordinator", hrs: 2, rate: 75, cost: 150 },
    ],
  },
];

const paymentTerms = [
  "Nation contribution: $0 upfront",
  "Milestone-based invoicing per RFP Section 8.4",
  "HST applicable on all fees",
  "Project start: March 30, 2026",
  "Strategy Plus implementation may qualify for PIB and provincial grant funding",
];

/* ── CollapsiblePhase wrapper ── */
const CollapsiblePhase = ({ title, dotColor, totalCost, children }: {
  title: string; dotColor: string; totalCost: string; children: React.ReactNode
}) => {
  const [open, setOpen] = useState(false);
  return (
    <motion.div {...fadeUp} className="card-elevated overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-6 py-4 hover:bg-primary/5 transition-colors"
      >
        <div className="flex items-center gap-2">
          <span className={`inline-block w-3 h-3 rounded-full ${dotColor}`} />
          <span className="font-display font-bold text-sm">{title}</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="font-display font-bold text-sm text-primary">{totalCost}</span>
          <ChevronDown className={`w-4 h-4 text-muted-foreground transition-transform duration-200 ${open ? 'rotate-180' : ''}`} />
        </div>
      </button>
      {open && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.2 }}
          className="border-t border-border"
        >
          {children}
        </motion.div>
      )}
    </motion.div>
  );
};

/* ── Collapsible step table ── */
const BudgetStepTable = ({
  stepColor, steps, totalLabel, totalCost,
}: {
  stepColor: string;
  steps: BudgetStep[]; totalLabel: string; totalCost: string;
}) => {
  const [expanded, setExpanded] = useState<number | null>(null);
  return (
    <div className="p-6">
      <div className="overflow-x-auto">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="border-b border-border">
              <th className="text-left py-2 px-3 font-display font-bold text-xs">Step</th>
              <th className="text-left py-2 px-3 font-display font-bold text-xs">Activity</th>
              <th className="text-right py-2 px-3 font-display font-bold text-xs">Cost</th>
              {steps.some(s => s.roles.length > 0) && <th className="w-8" />}
            </tr>
          </thead>
          <tbody>
            {steps.map((row, i) => (
              <React.Fragment key={i}>
                <tr
                  className={`border-b border-border/50 transition-colors ${row.roles.length > 0 ? "hover:bg-primary/5 cursor-pointer" : ""}`}
                  onClick={() => row.roles.length > 0 && setExpanded(expanded === i ? null : i)}
                >
                  <td className={`py-2 px-3 text-xs font-semibold ${stepColor}`}>{row.step}</td>
                  <td className="py-2 px-3 text-xs">{row.label}</td>
                  <td className="py-2 px-3 text-xs text-right font-bold">{row.cost}</td>
                  {steps.some(s => s.roles.length > 0) && (
                    <td className="py-2 px-1 text-center">
                      {row.roles.length > 0 && (
                        <ChevronDown className={`w-3.5 h-3.5 text-muted-foreground transition-transform ${expanded === i ? "rotate-180" : ""}`} />
                      )}
                    </td>
                  )}
                </tr>
                {expanded === i && row.roles.map((r, ri) => (
                  <tr key={ri} className="bg-muted/30">
                    <td className="py-1.5 px-3" />
                    <td className="py-1.5 px-3 text-[11px] text-muted-foreground">{r.role}</td>
                    <td className="py-1.5 px-3 text-[11px] text-right text-muted-foreground whitespace-nowrap" colSpan={2}>
                      {r.hrs !== null && r.rate !== null ? `${r.hrs} hrs × $${r.rate} = ` : ""}
                      <span className="font-medium text-foreground">${r.cost.toLocaleString()}</span>
                    </td>
                  </tr>
                ))}
              </React.Fragment>
            ))}
            <tr className="border-t-2 border-border bg-primary/5">
              <td className="py-2 px-3 font-display font-bold text-xs" colSpan={2}>{totalLabel}</td>
              <td className="py-2 px-3 text-xs text-right font-bold text-primary">{totalCost}</td>
              {steps.some(s => s.roles.length > 0) && <td />}
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

const BudgetSection = () => {
  const [option, setOption] = useState<"strategy" | "brain">("strategy");
  const isBrain = option === "brain";
  const totalDisplay = isBrain ? "$106K" : "$46.5K";

  const displayBudgetItems = isBrain
    ? [...budgetItems, { label: "Phase 5  -  melyn Brain", amount: 59500, percent: 0, barClass: "bg-amber-500" }]
    : budgetItems;

  // Recalculate percentages when brain is selected
  const totalAmount = displayBudgetItems.reduce((sum, item) => sum + item.amount, 0);
  const finalBudgetItems = displayBudgetItems.map(item => ({
    ...item,
    percent: Math.round((item.amount / totalAmount) * 1000) / 10,
  }));

  // Pie chart segments
  const circumference = 2 * Math.PI * 40; // r=40 → 251.3
  const baseSegments = [
    { percent: 10.8, color: "hsl(200,41%,30%)", label: "Phase 1", value: "$5K" },
    { percent: 34.4, color: "hsl(200,42%,40%)", label: "Phase 2", value: "$16K" },
    { percent: 32.3, color: "hsl(160,50%,45%)", label: "Phase 3", value: "$15K" },
    { percent: 14.0, color: "hsl(210,60%,55%)", label: "Phase 4", value: "$6.5K" },
    { percent: 8.6,  color: "hsl(200,50%,60%)", label: "PM & Admin", value: "$4K" },
  ];
  const brainSegments = [
    { percent: 4.7, color: "hsl(200,41%,30%)", label: "Phase 1", value: "$5K" },
    { percent: 15.1, color: "hsl(200,42%,40%)", label: "Phase 2", value: "$16K" },
    { percent: 14.2, color: "hsl(160,50%,45%)", label: "Phase 3", value: "$15K" },
    { percent: 6.1, color: "hsl(210,60%,55%)", label: "Phase 4", value: "$6.5K" },
    { percent: 3.8,  color: "hsl(200,50%,60%)", label: "PM & Admin", value: "$4K" },
    { percent: 56.1, color: "hsl(38,92%,50%)", label: "Phase 5 (Brain)", value: "$59.5K" },
  ];
  const segments = isBrain ? brainSegments : baseSegments;
  let offset = 0;

  return (
    <section id="budget" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div {...fadeUp} className="text-center mb-10">
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
            Investment <span className="text-gradient">Breakdown</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Total: <span className="text-foreground font-display font-bold text-2xl text-gradient">{isBrain ? "$106,000" : "$46,500"}</span>
          </p>
        </motion.div>

        {/* Option toggle */}
        <motion.div {...fadeUp} className="flex justify-center gap-3 mb-16">
          <button
            onClick={() => setOption("strategy")}
            className={`px-6 py-3 rounded-xl font-display font-semibold text-sm transition-all duration-300 border ${
              !isBrain
                ? "bg-primary text-primary-foreground border-primary shadow-lg scale-105"
                : "bg-card text-muted-foreground border-border hover:border-primary/40 hover:text-foreground"
            }`}
          >
            Strategy — $46,500
          </button>
          <div className="flex flex-col items-center gap-1">
            <button
              onClick={() => setOption("brain")}
              className={`px-6 py-3 rounded-xl font-display font-semibold text-sm transition-all duration-300 border ${
                isBrain
                  ? "bg-primary text-primary-foreground border-primary shadow-lg scale-105"
                  : "bg-card text-muted-foreground border-border hover:border-primary/40 hover:text-foreground"
              }`}
            >
              Strategy Plus — $106,000
            </button>
          </div>
        </motion.div>

        {/* Summary bars + payment terms */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          <motion.div {...fadeUp} className="card-elevated p-8">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                <DollarSign className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-display text-xl font-semibold">Budget Allocation</h3>
            </div>
            <div className="space-y-6">
              {finalBudgetItems.map((item, i) => (
                <motion.div key={i} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
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

          <div className="space-y-6">
            <motion.div {...fadeUp} className="card-elevated p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Calendar className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-display text-xl font-semibold">Payment Terms</h3>
              </div>
              <div className="space-y-3">
                {paymentTerms.map((term, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                    <span className="text-sm text-muted-foreground">{term}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div {...fadeUp} className="card-elevated p-8">
              <h3 className="font-display text-lg font-semibold mb-6 text-center">Allocation by Phase</h3>
              <div className="flex items-center justify-center gap-8">
                <div className="relative w-36 h-36 shrink-0">
                  <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90">
                    {segments.map((seg, i) => {
                      const dash = (seg.percent / 100) * circumference;
                      const el = (
                        <circle
                          key={i}
                          cx="50" cy="50" r="40"
                          fill="none"
                          strokeWidth="14"
                          stroke={seg.color}
                          strokeDasharray={`${dash} ${circumference}`}
                          strokeDashoffset={`${-offset}`}
                        />
                      );
                      offset += dash;
                      return el;
                    })}
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-xl font-display font-bold text-gradient">{totalDisplay}</span>
                    <span className="text-[9px] text-muted-foreground">TOTAL</span>
                  </div>
                </div>
                <div className="space-y-2">
                  {segments.map((seg, i) => (
                    <LegendItem key={i} color={seg.color} label={seg.label} value={seg.value} />
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Collapsible step tables  -  4 phases */}
        <div className="space-y-6 mb-12">
          <CollapsiblePhase title="Phase 1  -  Project Initiation and Alignment" dotColor="bg-primary" totalCost="$5,000">
            <BudgetStepTable stepColor="text-primary" steps={phase1Steps} totalLabel="TOTAL  -  PHASE 1" totalCost="$5,000" />
          </CollapsiblePhase>
          <CollapsiblePhase title="Phase 2  -  Engagement and Baseline Assessment" dotColor="bg-[hsl(200,42%,40%)]" totalCost="$16,000">
            <BudgetStepTable stepColor="text-[hsl(200,42%,40%)]" steps={phase2Steps} totalLabel="TOTAL  -  PHASE 2" totalCost="$16,000" />
          </CollapsiblePhase>
          <CollapsiblePhase title="Phase 3  -  Strategic Planning" dotColor="bg-[hsl(160,50%,45%)]" totalCost="$15,000">
            <BudgetStepTable stepColor="text-[hsl(160,50%,45%)]" steps={phase3Steps} totalLabel="TOTAL  -  PHASE 3" totalCost="$15,000" />
          </CollapsiblePhase>
          <CollapsiblePhase title="Phase 4  -  Finalization and Close-Out" dotColor="bg-[hsl(210,60%,55%)]" totalCost="$6,500">
            <BudgetStepTable stepColor="text-[hsl(210,60%,55%)]" steps={phase4Steps} totalLabel="TOTAL  -  PHASE 4" totalCost="$6,500" />
          </CollapsiblePhase>
          {isBrain && (
            <CollapsiblePhase title="Phase 5  -  melyn Brain Implementation (Months 5–16)" dotColor="bg-amber-500" totalCost="$59,500">
              <div className="p-6">
                <span className="inline-block text-[10px] px-2 py-0.5 rounded-full bg-amber-100 text-amber-700 font-bold uppercase tracking-wider mb-4">Strategy Plus</span>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm border-collapse">
                    <thead>
                      <tr className="border-b border-border">
                        <th className="text-left py-2 px-3 font-display font-bold text-xs">Item</th>
                        <th className="text-right py-2 px-3 font-display font-bold text-xs">Cost</th>
                      </tr>
                    </thead>
                    <tbody>
                      {brainItems.map((item, i) => (
                        <tr key={i} className="border-b border-border/50 hover:bg-amber-50/50 transition-colors">
                          <td className="py-2 px-3 text-xs font-medium">{item.label}</td>
                          <td className="py-2 px-3 text-xs text-right font-bold">${item.amount.toLocaleString()}</td>
                        </tr>
                      ))}
                      <tr className="border-t-2 border-border bg-amber-50/50">
                        <td className="py-2 px-3 font-display font-bold text-xs">TOTAL  -  Phase 5 (melyn Brain)</td>
                        <td className="py-2 px-3 text-xs text-right font-bold text-amber-600">$59,500</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-xs text-emerald-600 mt-4 font-medium">Can be funded through PIB and provincial grants</p>
              </div>
            </CollapsiblePhase>
          )}
        </div>

        {/* melyn Brain add-on (shown when Strategy + Brain selected) */}
        {isBrain && (
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="card-elevated p-8 mb-12 border-2 border-primary/20"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                <Brain className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-display text-xl font-semibold">melyn Brain Add-On</h3>
                <p className="text-sm text-muted-foreground">1-Year AI Platform License & Implementation</p>
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-2 px-4 font-display font-bold text-xs">Item</th>
                    <th className="text-right py-2 px-4 font-display font-bold text-xs">Cost</th>
                  </tr>
                </thead>
                <tbody>
                  {brainItems.map((item, i) => (
                    <tr key={i} className="border-b border-border/50 hover:bg-primary/5 transition-colors">
                      <td className="py-2 px-4 text-xs font-medium">{item.label}</td>
                      <td className="py-2 px-4 text-xs text-right font-bold">${item.amount.toLocaleString()}</td>
                    </tr>
                  ))}
                  <tr className="border-t-2 border-border bg-primary/5">
                    <td className="py-2 px-4 font-display font-bold text-xs">TOTAL  -  melyn Brain</td>
                    <td className="py-2 px-4 text-xs text-right font-bold text-primary">$59,500</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </motion.div>
        )}

        {/* Rate card */}
        <motion.div {...fadeUp} className="card-elevated p-6">
          <h3 className="font-display text-base font-bold mb-4 text-center">Rate Card</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-2 px-4 font-display font-bold text-xs">Role</th>
                  <th className="text-right py-2 px-4 font-display font-bold text-xs">Rate (CAD/hr)</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { role: "Project Lead (TJ Galiardi)", rate: "$350" },
                  { role: "Strategic Oversight (Cherag Kapoor)", rate: "$350" },
                  { role: "Lead Analyst (Mackenzie Kreutzer)", rate: "$200" },
                  { role: "Indigenous Engagement Advisor (Ramona Horseman)", rate: "$175" },
                  { role: "BC Cultural Advisor (Dr. Stan Chung)", rate: "$175" },
                  { role: "Research Analyst", rate: "$100" },
                  { role: "Project Coordinator", rate: "$75" },
                ].map((r, i) => (
                  <tr key={i} className="border-b border-border/50 hover:bg-primary/5 transition-colors">
                    <td className="py-2 px-4 text-xs font-medium">{r.role}</td>
                    <td className="py-2 px-4 text-xs text-right font-bold text-primary">{r.rate}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
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

export default BudgetSection;
