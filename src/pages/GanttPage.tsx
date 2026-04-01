import { motion } from "framer-motion";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

const TOTAL_WEEKS = 16;

// colour palette per phase
const PHASE_COLORS = {
  1: { bar: "bg-[hsl(200,41%,30%)]",   label: "text-[hsl(200,41%,30%)]",   badge: "bg-[hsl(200,41%,30%)/0.12] text-[hsl(200,41%,30%)]",   dot: "bg-[hsl(200,41%,30%)]"   },
  2: { bar: "bg-[hsl(200,42%,40%)]",   label: "text-[hsl(200,42%,40%)]",   badge: "bg-[hsl(200,42%,40%)/0.12] text-[hsl(200,42%,40%)]",   dot: "bg-[hsl(200,42%,40%)]"   },
  3: { bar: "bg-[hsl(210,60%,50%)]",   label: "text-[hsl(210,60%,50%)]",   badge: "bg-[hsl(210,60%,50%)/0.12] text-[hsl(210,60%,50%)]",   dot: "bg-[hsl(210,60%,50%)]"   },
  4: { bar: "bg-[hsl(160,50%,40%)]",   label: "text-[hsl(160,50%,40%)]",   badge: "bg-[hsl(160,50%,40%)/0.12] text-[hsl(160,50%,40%)]",   dot: "bg-[hsl(160,50%,40%)]"   },
} as const;

type PhaseKey = keyof typeof PHASE_COLORS;

interface GanttRow {
  id: string;
  label: string;
  start: number;
  end: number;
  phase: PhaseKey;
  isMilestone?: boolean;
  isPhaseHeader?: boolean;
}

const rows: GanttRow[] = [
  // Phase 1 — Month 1 (Wk 1-2)
  { id: "P1",   label: "PHASE 1 - Project Initiation and Alignment",          start: 1,  end: 2,  phase: 1, isPhaseHeader: true },
  { id: "1.1",  label: "Project Kick-Off and Charter Confirmation",            start: 1,  end: 1,  phase: 1 },
  { id: "1.2",  label: "Engagement Plan Development",                          start: 1,  end: 2,  phase: 1 },
  { id: "1.3",  label: "WBS and Project Schedule",                             start: 1,  end: 2,  phase: 1 },
  { id: "1.4",  label: "Risk and Information Gap Log",                         start: 2,  end: 2,  phase: 1 },
  { id: "1.5",  label: "Tools and Document Management Setup",                  start: 2,  end: 2,  phase: 1 },
  { id: "1.6",  label: "BCR and Briefing Note - Phase 1",                      start: 2,  end: 2,  phase: 1 },
  { id: "M1",   label: "Milestone: Phase 1 Complete",                          start: 2,  end: 2,  phase: 1, isMilestone: true },

  // Phase 2 — Months 1-2 (Wk 3-8)
  { id: "P2",   label: "PHASE 2 - Engagement and Baseline Assessment",         start: 3,  end: 8,  phase: 2, isPhaseHeader: true },
  { id: "2.1",  label: "Engagement Design and Materials",                      start: 3,  end: 3,  phase: 2 },
  { id: "2.2",  label: "Community Engagement Sessions",                        start: 3,  end: 7,  phase: 2 },
  { id: "2.3",  label: "Stakeholder Interviews",                               start: 4,  end: 6,  phase: 2 },
  { id: "2.4",  label: "Stakeholder Register",                                 start: 4,  end: 7,  phase: 2 },
  { id: "2.5",  label: "Socio-Economic Baseline Analysis",                     start: 6,  end: 7,  phase: 2 },
  { id: "2.6",  label: "Economic Context and Opportunity Scan",                start: 6,  end: 8,  phase: 2 },
  { id: "2.7",  label: "Pre-Planning Assessment Report",                       start: 7,  end: 8,  phase: 2 },
  { id: "M2",   label: "Milestone: Phase 2 Complete",                          start: 8,  end: 8,  phase: 2, isMilestone: true },

  // Phase 3 — Months 3-4 (Wk 9-13)
  { id: "P3",   label: "PHASE 3 - Strategic Planning",                         start: 9,  end: 13, phase: 3, isPhaseHeader: true },
  { id: "3.1",  label: "Synthesis of Phase 2 Findings",                        start: 9,  end: 9,  phase: 3 },
  { id: "3.2",  label: "Vision, Mission, and Guiding Principles",              start: 9,  end: 10, phase: 3 },
  { id: "3.3",  label: "Strategic Priorities and Opportunity Areas",           start: 10, end: 11, phase: 3 },
  { id: "3.4",  label: "Implementation Framework",                             start: 10, end: 12, phase: 3 },
  { id: "3.5",  label: "KPIs and Performance Measurement",                     start: 11, end: 12, phase: 3 },
  { id: "3.6",  label: "Draft 5-Year Economic Development Strategic Plan",     start: 12, end: 13, phase: 3 },
  { id: "3.7",  label: "Live Digital Strategy Platform Build",                 start: 12, end: 13, phase: 3 },
  { id: "M3",   label: "Milestone: Phase 3 Complete / Draft Plan",             start: 13, end: 13, phase: 3, isMilestone: true },

  // Phase 4 — Month 4 (Wk 14-16)
  { id: "P4",   label: "PHASE 4 - Finalization and Close-Out",                 start: 14, end: 16, phase: 4, isPhaseHeader: true },
  { id: "4.1",  label: "Incorporate Feedback and Finalize Plan",               start: 14, end: 14, phase: 4 },
  { id: "4.2",  label: "Final Presentation to Chief and Council",              start: 15, end: 15, phase: 4 },
  { id: "4.3",  label: "Community Communications Package",                     start: 14, end: 15, phase: 4 },
  { id: "4.4",  label: "Short-Form Summary Video",                             start: 15, end: 16, phase: 4 },
  { id: "4.5",  label: "Lessons Learned Register",                             start: 16, end: 16, phase: 4 },
  { id: "4.6",  label: "Project Close-Out Package",                            start: 16, end: 16, phase: 4 },
  { id: "M4",   label: "Milestone: Project Complete",                          start: 16, end: 16, phase: 4, isMilestone: true },
];

// 4 months, each = 4 weeks; week 1–16 maps to pct across months
const monthLabels = ["Month 1", "Month 2", "Month 3", "Month 4"];

// Bars use week-based positions internally, rendered as % of 16 weeks
const barLeft  = (start: number) => `${((start - 1) / TOTAL_WEEKS) * 100}%`;
const barWidth = (start: number, end: number) => `${((end - start + 1) / TOTAL_WEEKS) * 100}%`;

// Brain implementation — 12 months (overall Months 5–16)
const BRAIN_MONTHS = 12;
const brainRows = [
  { id: "B1", label: "Platform Setup & Configuration",      start: 1,  end: 2  },
  { id: "B2", label: "Data Migration & Integration",        start: 1,  end: 3  },
  { id: "B3", label: "Staff Training & Onboarding",         start: 2,  end: 4  },
  { id: "B4", label: "12-Month Platform License (Active)",  start: 1,  end: 12 },
  { id: "B5", label: "Dedicated melyn Support",             start: 3,  end: 12 },
];
const brainBarLeft  = (s: number) => `${((s - 1) / BRAIN_MONTHS) * 100}%`;
const brainBarWidth = (s: number, e: number) => `${((e - s + 1) / BRAIN_MONTHS) * 100}%`;

const GanttPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <NavBar />
      <section className="py-20 px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold bg-primary/10 text-primary border border-primary/20 mb-4">
              Project Schedule
            </span>
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
              4-Month <span className="text-gradient">Gantt Chart</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Full task schedule from March 30, 2026 across all four phases. Detailed Excel schedule submitted separately per RFP requirements.
            </p>
          </motion.div>

          {/* Legend */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {([1, 2, 3, 4] as PhaseKey[]).map((p) => (
              <div key={p} className="flex items-center gap-2">
                <div className={`w-3 h-3 rounded-sm ${PHASE_COLORS[p].bar}`} />
                <span className="text-xs text-muted-foreground font-medium">Phase {p}</span>
              </div>
            ))}
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-amber-500" />
              <span className="text-xs text-muted-foreground font-medium">Milestone</span>
            </div>
          </div>

          {/* Gantt table */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="card-elevated overflow-x-auto"
          >
            <div className="min-w-[900px]">
              {/* Month header — single row, no week sub-labels */}
              <div className="flex border-b-2 border-border bg-muted/60 sticky top-0 z-10">
                <div className="w-64 shrink-0 px-4 py-3 text-xs font-bold text-muted-foreground uppercase tracking-wide">
                  Task
                </div>
                <div className="flex-1 relative pr-4">
                  <div className="flex h-full">
                    {monthLabels.map((m) => (
                      <div
                        key={m}
                        className="flex-1 flex items-center justify-center py-3 border-r border-border/40 last:border-r-0"
                      >
                        <span className="text-xs font-bold text-foreground tracking-wide">{m}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Rows */}
              {rows.map((row) => {
                const colors = PHASE_COLORS[row.phase];
                const isHeader = row.isPhaseHeader;
                const isMilestone = row.isMilestone;

                return (
                  <div
                    key={row.id}
                    className={`flex items-center border-b border-border/40 ${
                      isHeader
                        ? "bg-muted/50 py-2"
                        : "py-1.5 hover:bg-muted/20 transition-colors"
                    }`}
                  >
                    {/* Label column */}
                    <div className="w-64 shrink-0 px-4">
                      {isHeader ? (
                        <div className="flex items-center gap-2">
                          <div className={`w-2 h-2 rounded-full ${colors.dot}`} />
                          <span className={`text-xs font-bold uppercase tracking-wide ${colors.label}`}>
                            {row.label}
                          </span>
                        </div>
                      ) : isMilestone ? (
                        <div className="flex items-center gap-2 pl-2">
                          <span className="text-amber-500 text-sm">◆</span>
                          <span className="text-xs font-semibold text-amber-600">{row.label}</span>
                        </div>
                      ) : (
                        <div className="flex items-center gap-2 pl-2">
                          <span className={`text-[10px] font-bold ${colors.label} bg-muted px-1 py-0.5 rounded shrink-0`}>
                            {row.id}
                          </span>
                          <span className="text-xs text-foreground truncate">{row.label}</span>
                        </div>
                      )}
                    </div>

                    {/* Bar column */}
                    <div className="flex-1 relative h-7 pr-4">
                      {/* Grid lines — month boundaries only */}
                      <div className="absolute inset-0 pointer-events-none">
                        {[25, 50, 75].map((pct) => (
                          <div
                            key={pct}
                            className="absolute top-0 bottom-0 border-r border-border/40"
                            style={{ left: `${pct}%` }}
                          />
                        ))}
                      </div>

                      {/* Bar */}
                      {isHeader ? (
                        <div
                          className={`absolute top-1 bottom-1 rounded-md opacity-20 ${colors.bar}`}
                          style={{ left: barLeft(row.start), width: barWidth(row.start, row.end) }}
                        />
                      ) : isMilestone ? (
                        <div
                          className="absolute top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-amber-500 shadow-sm"
                          style={{ left: barLeft(row.start) }}
                        />
                      ) : (
                        <div
                          className={`absolute top-1.5 bottom-1.5 rounded-full opacity-85 ${colors.bar}`}
                          style={{ left: barLeft(row.start), width: barWidth(row.start, row.end) }}
                        />
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* Phase summary strip */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4"
          >
            {(
              [
                { phase: 1 as PhaseKey, label: "Phase 1", weeks: "Month 1",    cost: "$5,000",  tasks: 6 },
                { phase: 2 as PhaseKey, label: "Phase 2", weeks: "Months 1-2", cost: "$16,000", tasks: 7 },
                { phase: 3 as PhaseKey, label: "Phase 3", weeks: "Months 3-4", cost: "$15,000", tasks: 7 },
                { phase: 4 as PhaseKey, label: "Phase 4", weeks: "Month 4",    cost: "$6,500",  tasks: 6 },
              ]
            ).map(({ phase, label, weeks, cost, tasks }) => (
              <div key={phase} className="card-elevated p-4">
                <div className={`w-2 h-2 rounded-full ${PHASE_COLORS[phase].bar} mb-2`} />
                <p className={`text-xs font-bold ${PHASE_COLORS[phase].label} mb-1`}>{label}</p>
                <p className="text-sm font-semibold text-foreground">{weeks}</p>
                <p className="text-xs text-muted-foreground">{tasks} tasks</p>
                <p className={`text-base font-display font-bold mt-2 ${PHASE_COLORS[phase].label}`}>{cost}</p>
              </div>
            ))}
          </motion.div>

          {/* Note */}
          <p className="text-center text-xs text-muted-foreground mt-6 italic">
            Full task-based project schedule with hours, milestones, review gates, and engagement sessions submitted as Excel in the Technical Proposal envelope per RFP Section 8.4.
          </p>

          {/* ── melyn Brain Implementation ── */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-16"
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <h2 className="font-display text-2xl md:text-3xl font-bold text-center">
                melyn Brain Implementation{" "}
                <span className="text-muted-foreground font-normal text-lg">— Months 5-16</span>
              </h2>
              <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-amber-100 text-amber-700 border border-amber-200">
                Strategy Plus
              </span>
            </div>

            <div className="card-elevated overflow-x-auto border-2 border-amber-200/40">
              <div className="min-w-[900px]">
                {/* Month header — Month 5 through Month 16 */}
                <div className="flex border-b-2 border-amber-200 bg-amber-50/60">
                  <div className="w-64 shrink-0 px-4 py-3 text-xs font-bold text-amber-700 uppercase tracking-wide">
                    Implementation Task
                  </div>
                  <div className="flex-1 relative pr-4">
                    <div className="flex h-full">
                      {Array.from({ length: BRAIN_MONTHS }, (_, i) => i + 5).map((m) => (
                        <div
                          key={m}
                          className="flex-1 flex items-center justify-center py-3 border-r border-amber-200/50 last:border-r-0"
                        >
                          <span className="text-[10px] font-bold text-amber-700">Mo {m}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Brain rows */}
                {brainRows.map((row) => (
                  <div
                    key={row.id}
                    className="flex items-center border-b border-border/40 py-1.5 hover:bg-amber-50/30 transition-colors"
                  >
                    <div className="w-64 shrink-0 px-4">
                      <div className="flex items-center gap-2 pl-2">
                        <span className="text-[10px] font-bold text-amber-700 bg-amber-50 px-1 py-0.5 rounded shrink-0">
                          {row.id}
                        </span>
                        <span className="text-xs text-foreground truncate">{row.label}</span>
                      </div>
                    </div>
                    <div className="flex-1 relative h-7 pr-4">
                      {/* Grid lines — quarterly (every 3 months) */}
                      <div className="absolute inset-0 pointer-events-none">
                        {[25, 50, 75].map((pct) => (
                          <div
                            key={pct}
                            className="absolute top-0 bottom-0 border-r border-amber-200/50"
                            style={{ left: `${pct}%` }}
                          />
                        ))}
                      </div>
                      {/* Bar */}
                      <div
                        className="absolute top-1.5 bottom-1.5 rounded-full opacity-85 bg-amber-500"
                        style={{ left: brainBarLeft(row.start), width: brainBarWidth(row.start, row.end) }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <p className="text-center text-xs text-muted-foreground mt-4 italic">
              melyn Brain implementation begins after Strategy delivery (Month 5) and runs for 12 months through Month 16.
            </p>
          </motion.div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default GanttPage;
