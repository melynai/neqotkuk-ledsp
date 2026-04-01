import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ClipboardList, Users, BarChart3, CheckSquare, Leaf, Shield, ChevronDown, CheckCircle2 } from "lucide-react";

const phases = [
  {
    icon: ClipboardList,
    title: "Phase 1 - Project Initiation and Alignment",
    weeks: "Month 1",
    cost: "$5,000",
    gradient: "bg-gradient-brain",
    desc: "Project Charter, Engagement Plan, Work Breakdown Structure, BCR and Briefing Note - the disciplined foundation.",
    tasks: [
      { id: "1.1", label: "Project Kick-Off and Charter Confirmation", detail: "Joint session with PIB EDM. Confirm objectives, scope, roles, decision pathways, and co-leadership protocols." },
      { id: "1.2", label: "Engagement Plan Development", detail: "Identify who will be engaged, how, and when - Members, Elders, Youth, businesses, departments, and partners. Confirm formats and cultural safety protocols." },
      { id: "1.3", label: "Work Breakdown Structure and Project Schedule", detail: "Full task-based project schedule in Excel: all tasks, milestones, engagement activities, deliverables, and review periods across all four phases." },
      { id: "1.4", label: "Risk and Information Gap Log", detail: "Identify early risks, information gaps, and constraints that may affect sequencing or implementation." },
      { id: "1.5", label: "Tools and Document Management Setup", detail: "Confirm shared document tools, feedback mechanisms, approval pathways, and version control." },
      { id: "1.6", label: "BCR and Briefing Note Preparation", detail: "Band Council Briefing Note and BCR prepared and submitted for Phase 1 Council approval." },
      { id: "1.7", label: "Economic Development Advisory Committee (EDAC) — Setup and Terms of Reference", detail: "Draft EDAC Terms of Reference and BCR language. EDAC requires: BCR from Chief and Council, ToR covering mandate/membership (5-7 members)/quorum/conflict-of-interest policy, and quarterly reporting to C&C. Without EDAC, PIB cannot access ISC Economic Development programming. melyn delivers BCR + ToR in Month 1.", priority: "high" as const },
    ],
    deliverables: ["Project Charter", "Engagement Plan", "Work Breakdown Structure", "PowerPoint", "BCR", "Briefing Note", "EDAC Setup Guidance"],
  },
  {
    icon: Users,
    title: "Phase 2 - Engagement and Baseline Assessment",
    weeks: "Months 1-2",
    cost: "$16,000",
    gradient: "bg-gradient-website",
    desc: "Community engagement, stakeholder interviews, socio-economic baseline, and Pre-Planning Assessment Report.",
    tasks: [
      { id: "2.1", label: "Engagement Design and Materials", detail: "Finalize engagement formats with PIB EDM: surveys, interviews, focus groups, and workshops. Prepare all materials in plain language." },
      { id: "2.2", label: "Community Engagement Sessions", detail: "Facilitate engagement with PIB Members including Elders, Youth, and off-reserve members. All sessions facilitated with Syilx cultural protocols." },
      { id: "2.3", label: "Stakeholder Interviews", detail: "Structured interviews with PIB leadership, department managers, and key external partners including ONA and City of Penticton." },
      { id: "2.4", label: "Stakeholder Register", detail: "Maintain complete register of all internal and external stakeholders, their interests, influence, and engagement approach." },
      { id: "2.5", label: "Socio-Economic Baseline Analysis", detail: "Assess employment, labour force, education, housing, and demographic trends relevant to PIB economic development planning." },
      { id: "2.6", label: "Economic Context and Opportunity Scan", detail: "External scan of tourism, gas station, IR No.2 development, solar, wind, agri-business, and IBA opportunities in the Okanagan region." },
      { id: "2.7", label: "Pre-Planning Assessment Report", detail: "Synthesis of all engagement and technical analysis. Draft submitted for PIB review before Phase 3 advance." },
    ],
    deliverables: ["Stakeholder Register", "Engagement Summaries", "Pre-Planning Assessment Report", "PowerPoint", "BCR", "Briefing Note"],
  },
  {
    icon: BarChart3,
    title: "Phase 3 - Strategic Planning",
    weeks: "Months 2-4",
    cost: "$15,000",
    gradient: "bg-gradient-hr",
    desc: "Draft 5-Year Economic Development Strategic Plan - vision, priorities, sectors, implementation framework, KPIs, and live digital platform.",
    tasks: [
      { id: "3.1", label: "Synthesis of Phase 2 Findings", detail: "Integrate engagement and analysis into a coherent strategic narrative identifying key themes, tensions, and priorities." },
      { id: "3.2", label: "Vision, Mission, and Guiding Principles", detail: "Articulate PIB's long-term economic vision and mission grounded in Syilx values, collective benefit, and intergenerational thinking." },
      { id: "3.3", label: "Strategic Priorities and Opportunity Areas", detail: "Define 5-year strategic priorities across tourism, gas station, IR No.2 development, renewables, agri-business, IBA management, and workforce development." },
      { id: "3.4", label: "Implementation Framework", detail: "Governance, oversight, partnership considerations, funding pathways, risk management, and resourcing implications." },
      { id: "3.5", label: "KPIs and Performance Measurement", detail: "Practical KPIs and monitoring tools for each strategic priority, aligned to Chief and Council reporting." },
      { id: "3.6", label: "Draft 5-Year Economic Development Strategic Plan", detail: "Substantially complete draft submitted to PIB EDM for leadership review and Council direction." },
      { id: "3.7", label: "Live Digital Strategy Platform", detail: "Build and configure PIB's interactive digital platform: phase roadmap, grant pipeline matrix, Gantt chart, and community dashboard." },
    ],
    deliverables: ["Draft 5-Year Strategic Plan", "Live Digital Platform", "PowerPoint", "BCR", "Briefing Note"],
  },
  {
    icon: CheckSquare,
    title: "Phase 4 - Finalization and Close-Out",
    weeks: "Month 4",
    cost: "$6,500",
    gradient: "bg-gradient-phase4",
    desc: "Final Plan, community communications package, short-form summary video, Lessons Learned Register, and project close-out.",
    tasks: [
      { id: "4.1", label: "Incorporate Feedback and Finalize Plan", detail: "Review all feedback from PIB leadership and Chief and Council. Incorporate approved revisions into the final document." },
      { id: "4.2", label: "Final Presentation to Chief and Council", detail: "Prepare and deliver final presentation of the Economic Development Strategic Plan to PIB Chief and Council." },
      { id: "4.3", label: "Community Communications Package", detail: "Plain-language summary, digital graphics, presentation-ready visuals, and social-ready content on key priorities and strategic actions." },
      { id: "4.4", label: "Short-Form Summary Video", detail: "Community-facing video translating the final Economic Development Strategic Plan into an accessible format for digital distribution." },
      { id: "4.5", label: "Lessons Learned Register", detail: "Document observations, challenges, successes, and recommendations to support PIB's continuous improvement." },
      { id: "4.6", label: "Project Close-Out Package", detail: "All project materials transferred to PIB in fully editable digital formats. BCR for Chief and Council endorsement of the Final Plan." },
    ],
    deliverables: ["Final Economic Development Strategic Plan", "PowerPoint", "Community Comms Package", "Summary Video", "Lessons Learned Register", "Close-Out Package", "BCR Endorsement"],
  },
];

const fadeUp = { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true } };

const OverviewSection = () => {
  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <section id="overview" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          {...fadeUp}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
            Four Phases of <span className="text-gradient">Strategic Excellence</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            A co-leadership model that partners with PIB's EDM - combining community voice, technical rigour, and a living digital strategy platform.
          </p>
        </motion.div>

        {/* Phase cards */}
        <div className="space-y-4 mb-16">
          {phases.map((phase, i) => {
            const isOpen = expanded === i;
            return (
              <motion.div
                key={i}
                {...fadeUp}
                transition={{ delay: i * 0.08 }}
                className="card-elevated overflow-hidden"
              >
                {/* Header row - always visible */}
                <button
                  onClick={() => setExpanded(isOpen ? null : i)}
                  className="w-full flex items-center gap-5 p-6 text-left hover:bg-primary/3 transition-colors"
                >
                  <div className={`w-12 h-12 rounded-xl ${phase.gradient} flex items-center justify-center shrink-0`}>
                    <phase.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <h3 className="font-display text-lg font-semibold">{phase.title}</h3>
                      <span className="text-xs px-2 py-0.5 rounded-full bg-primary/10 text-primary font-medium shrink-0">{phase.weeks}</span>
                    </div>
                    <p className="text-sm text-muted-foreground">{phase.desc}</p>
                  </div>
                  <div className="flex items-center gap-4 shrink-0">
                    <span className="font-display text-xl font-bold text-gradient hidden sm:block">{phase.cost}</span>
                    <ChevronDown className={`w-5 h-5 text-muted-foreground transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} />
                  </div>
                </button>

                {/* Expandable task list */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 border-t border-border/60">
                        <div className="pt-5 grid md:grid-cols-2 gap-3 mb-5">
                          {phase.tasks.map((task, ti) => {
                            const isHighPriority = (task as any).priority === "high";
                            return (
                              <div key={ti} className={`flex gap-3 p-3 rounded-xl transition-colors ${isHighPriority ? "bg-amber-50/80 border border-amber-300/60 hover:bg-amber-50" : "bg-muted/40 hover:bg-muted/60"}`}>
                                <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded h-fit mt-0.5 shrink-0 ${isHighPriority ? "text-amber-700 bg-amber-100" : "text-primary bg-primary/10"}`}>{task.id}</span>
                                <div>
                                  <div className="flex items-center gap-2 flex-wrap mb-0.5">
                                    <p className="text-sm font-semibold text-foreground">{task.label}</p>
                                    {isHighPriority && <span className="text-[9px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded-full bg-amber-200 text-amber-800">Phase 1 Priority</span>}
                                  </div>
                                  <p className="text-xs text-muted-foreground leading-relaxed">{task.detail}</p>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                        {/* Deliverables row */}
                        <div className="flex flex-wrap items-center gap-2 pt-4 border-t border-border/40">
                          <span className="text-xs font-bold text-muted-foreground uppercase tracking-wide mr-1">Deliverables:</span>
                          {phase.deliverables.map((d, di) => {
                            const isEdac = d.includes("EDAC");
                            return (
                              <span key={di} className={`flex items-center gap-1 text-xs px-2 py-0.5 rounded-full border font-medium ${isEdac ? "bg-amber-100 text-amber-800 border-amber-300" : "bg-primary/8 text-primary border-primary/15"}`}>
                                <CheckCircle2 className="w-3 h-3" />
                                {d}
                              </span>
                            );
                          })}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* Benefits row */}
        <motion.div
          {...fadeUp}
          className="card-elevated rounded-2xl p-6 flex flex-wrap justify-center gap-8 mb-8"
        >
          {[
            { icon: Leaf, label: "Syilx Values-Grounded" },
            { icon: Shield, label: "Co-Leadership Model" },
            { icon: BarChart3, label: "Living Digital Deliverable" },
          ].map((b, i) => (
            <div key={i} className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                <b.icon className="w-5 h-5 text-primary" />
              </div>
              <span className="font-medium text-sm">{b.label}</span>
            </div>
          ))}
        </motion.div>

        {/* melyn Difference callout */}
        <motion.div
          {...fadeUp}
          className="card-elevated rounded-2xl p-6 border-l-4 border-primary"
        >
          <h3 className="font-display text-lg font-bold mb-2 text-foreground">The melyn Difference - A Living Strategy, Not a PDF</h3>
          <p className="text-muted-foreground text-sm leading-relaxed">
            Every other firm will hand PIB a PDF. melyn delivers a live interactive digital platform as your Economic Development Strategy - phase tracker, grant pipeline matrix, Gantt chart, and community dashboard. Built on the same framework delivered for AOPFN LP in February 2026.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default OverviewSection;
