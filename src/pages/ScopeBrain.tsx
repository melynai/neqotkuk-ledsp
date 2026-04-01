import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowLeft, ArrowRight, ArrowDown, CheckCircle2, ChevronRight,
  LayoutGrid, FolderKanban, Scale, Landmark, MessageSquareHeart,
  Network, Archive, Gem, Search, Bell, FileText, Users, Clock, Star,
  Headphones, GraduationCap, Rocket, Settings,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/*  8 Module Data                                                      */
/* ------------------------------------------------------------------ */

const capabilities = [
  {
    id: "departments",
    icon: LayoutGrid,
    title: "Departments",
    tagline: "Every team, one view",
    description:
      "See all departments at a glance  -  Housing, Health, Education, Public Works, Natural Resources, Finance, Economic Development, Social Services, Lands & Resources. Each one organized, each one connected to the whole.",
    color: "hsl(38, 70%, 55%)",
    mockType: "grid" as const,
    mockData: [
      { name: "Housing", projects: 8, status: "on-track" },
      { name: "Health", projects: 12, status: "on-track" },
      { name: "Education", projects: 6, status: "attention" },
      { name: "Public Works", projects: 9, status: "on-track" },
      { name: "Natural Resources", projects: 5, status: "on-track" },
      { name: "Finance", projects: 4, status: "attention" },
    ],
  },
  {
    id: "projects",
    icon: FolderKanban,
    title: "Projects & Initiatives",
    tagline: "From idea to impact",
    description:
      "Track every initiative from concept through completion  -  LEDSP, CCSF, CORP, CHRT-41, GMF, ILP, MARP, CIP, PID, EMAP, and more. Timelines, milestones, owners, and completion percentages  -  all visible.",
    color: "hsl(100, 30%, 48%)",
    mockType: "timeline" as const,
    mockData: [
      { name: "Community Center Renovation", progress: 72, phase: "Construction" },
      { name: "Solar Farm Phase II", progress: 45, phase: "Planning" },
      { name: "Youth Employment Program", progress: 90, phase: "Active" },
      { name: "Water Infrastructure Upgrade", progress: 30, phase: "Design" },
    ],
  },
  {
    id: "chambers",
    icon: Scale,
    title: "Chambers",
    tagline: "Run every committee at the Nation",
    description:
      "Brain is built to operate committees at the Nation level — Economic Development Advisory Committee (EDAC), Finance Committee, Housing Committee, and more. Each committee gets its own workspace: agenda management, meeting minutes, action tracking, and reporting to Chief and Council. Decisions flow through Draft → Under Review → Committee Vote → Approved. Nothing falls through the cracks.",
    color: "hsl(200, 22%, 52%)",
    mockType: "pipeline" as const,
    mockData: [
      { name: "NRCan Grant", stage: "Under Review", priority: "high" },
      { name: "Solar Partnership", stage: "Committee Vote", priority: "high" },
      { name: "Tourism Strategy", stage: "Draft", priority: "medium" },
      { name: "Housing Expansion", stage: "Approved", priority: "low" },
    ],
  },
  {
    id: "governance",
    icon: Landmark,
    title: "Governance",
    tagline: "Transparent by design",
    description:
      "Resolutions, approvals, and policy workflows tracked from proposal to ratification. Band Council Resolutions with full audit trail  -  dates, votes, status, full accountability.",
    color: "hsl(15, 55%, 53%)",
    mockType: "approvals" as const,
    mockData: [
      { title: "Resolution 2026-04", status: "Passed", votes: "7-0", date: "Jan 28" },
      { title: "Budget Amendment #3", status: "Pending", votes: " - ", date: "Feb 5" },
      { title: "Land Use Policy Update", status: "In Review", votes: " - ", date: "Feb 12" },
    ],
  },
  {
    id: "citizen",
    icon: MessageSquareHeart,
    title: "Citizen Engagement",
    tagline: "Every voice matters",
    description:
      "Citizen feedback, service requests, and community updates in one system. Community members can submit questions, feedback, and service requests. Staff can respond and track resolution.",
    color: "hsl(320, 22%, 52%)",
    mockType: "feedback" as const,
    mockData: [
      { from: "Maria T.", message: "When will the road repairs begin?", time: "2h ago", responded: true },
      { from: "James K.", message: "Thank you for the youth program update!", time: "5h ago", responded: false },
      { from: "Council Office", message: "Community meeting scheduled for Feb 15", time: "1d ago", responded: true },
    ],
  },
  {
    id: "relationships",
    icon: Network,
    title: "Relationships & Communications",
    tagline: "Stay connected effortlessly",
    description:
      "ISC, CMHC, FedNor, ESDC, Heritage Canada, NRCan  -  all funder and partner relationships organized. Every conversation, contact, and commitment searchable.",
    color: "hsl(80, 30%, 48%)",
    mockType: "contacts" as const,
    mockData: [
      { name: "NRCan Regional Office", type: "Federal", lastContact: "3 days ago" },
      { name: "Solar Co-op Partners", type: "Vendor", lastContact: "1 week ago" },
      { name: "Education Department", type: "Internal", lastContact: "Today" },
    ],
  },
  {
    id: "vault",
    icon: Archive,
    title: "Vault",
    tagline: "Your community's memory",
    description:
      "All project briefs, applications, BCRs, contracts, financial statements, reports, and community documents stored and searchable. Brain remembers so your community never forgets.",
    color: "hsl(45, 30%, 48%)",
    mockType: "search" as const,
    mockData: {
      query: "water infrastructure",
      results: [
        { title: "Water System Assessment 2025", type: "PDF", date: "Oct 2025" },
        { title: "Infrastructure Master Plan", type: "Doc", date: "Aug 2025" },
        { title: "EPA Compliance Report", type: "PDF", date: "Jan 2026" },
      ],
    },
  },
  {
    id: "grant-engine",
    icon: Gem,
    title: "Grant Engine",
    tagline: "Never miss a dollar",
    description:
      "Brain surfaces grants, deadlines, and funding opportunities matched to your priorities automatically. Match percentages help prioritize applications. Focus on applying, not searching.",
    color: "hsl(25, 65%, 55%)",
    mockType: "grants" as const,
    mockData: [
      { name: "NRCan Clean Energy Fund", match: 94, deadline: "Mar 15", amount: "$350K" },
      { name: "AAFC AgriInnovate Program", match: 88, deadline: "Apr 1", amount: "$500K" },
      { name: "CIRNAC Community Infrastructure", match: 76, deadline: "May 20", amount: "$1.2M" },
    ],
  },
];

/* ------------------------------------------------------------------ */
/*  Mock UI Components                                                 */
/* ------------------------------------------------------------------ */

function MockGrid({ data, color }: { data: any; color: string }) {
  const items = data as { name: string; projects: number; status: string }[];
  return (
    <div className="grid grid-cols-3 gap-2">
      {items.map((d) => (
        <div key={d.name} className="rounded-lg border border-border bg-background/60 p-3">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[10px] font-medium text-foreground">{d.name}</span>
            <span className={`w-2 h-2 rounded-full ${d.status === "on-track" ? "bg-emerald-500" : "bg-amber-500"}`} />
          </div>
          <span className="text-lg font-display font-bold" style={{ color }}>{d.projects}</span>
          <span className="text-[9px] text-muted-foreground ml-1">projects</span>
        </div>
      ))}
    </div>
  );
}

function MockTimeline({ data, color }: { data: any; color: string }) {
  const items = data as { name: string; progress: number; phase: string }[];
  return (
    <div className="space-y-3">
      {items.map((d) => (
        <div key={d.name} className="rounded-lg border border-border bg-background/60 p-3">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[11px] font-medium text-foreground">{d.name}</span>
            <span className="text-[9px] text-muted-foreground px-2 py-0.5 rounded-full border border-border">{d.phase}</span>
          </div>
          <div className="w-full h-1.5 rounded-full bg-secondary overflow-hidden">
            <motion.div className="h-full rounded-full" style={{ backgroundColor: color }}
              initial={{ width: 0 }} whileInView={{ width: `${d.progress}%` }}
              viewport={{ once: true }} transition={{ duration: 1, delay: 0.3 }} />
          </div>
          <span className="text-[9px] text-muted-foreground mt-1 inline-block">{d.progress}% complete</span>
        </div>
      ))}
    </div>
  );
}

function MockPipeline({ data, color }: { data: any; color: string }) {
  const items = data as { name: string; stage: string; priority: string }[];
  const stages = ["Draft", "Under Review", "Committee Vote", "Approved"];
  return (
    <div className="space-y-2">
      <div className="grid grid-cols-4 gap-1 mb-3">
        {stages.map((s) => (
          <div key={s} className="text-[8px] font-medium text-muted-foreground text-center uppercase tracking-wider">{s}</div>
        ))}
      </div>
      {items.map((d) => {
        const col = stages.indexOf(d.stage);
        return (
          <div key={d.name} className="grid grid-cols-4 gap-1">
            {stages.map((_, si) => (
              <div key={si} className={`h-10 rounded-md border ${si === col ? "border-border bg-background/80" : "border-transparent"} flex items-center justify-center`}>
                {si === col && <span className="text-[9px] text-foreground text-center px-1 leading-tight">{d.name}</span>}
              </div>
            ))}
          </div>
        );
      })}
    </div>
  );
}

function MockApprovals({ data, color }: { data: any; color: string }) {
  const items = data as { title: string; status: string; votes: string; date: string }[];
  return (
    <div className="space-y-2">
      {items.map((d) => (
        <div key={d.title} className="rounded-lg border border-border bg-background/60 p-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <FileText className="w-4 h-4 text-muted-foreground" />
            <div>
              <span className="text-[11px] font-medium text-foreground block">{d.title}</span>
              <span className="text-[9px] text-muted-foreground">{d.date}</span>
            </div>
          </div>
          <div className="text-right">
            <span className={`text-[10px] font-medium px-2 py-0.5 rounded-full ${
              d.status === "Passed" ? "bg-emerald-500/20 text-emerald-600" : d.status === "Pending" ? "bg-amber-500/20 text-amber-600" : "bg-muted text-muted-foreground"
            }`}>{d.status}</span>
            {d.votes !== " - " && <span className="text-[9px] text-muted-foreground block mt-1">{d.votes}</span>}
          </div>
        </div>
      ))}
    </div>
  );
}

function MockFeedback({ data, color }: { data: any; color: string }) {
  const items = data as { from: string; message: string; time: string; responded: boolean }[];
  return (
    <div className="space-y-2">
      {items.map((d) => (
        <div key={d.message} className="rounded-lg border border-border bg-background/60 p-3">
          <div className="flex items-center justify-between mb-1.5">
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center">
                <span className="text-[8px] font-bold text-primary">{d.from[0]}</span>
              </div>
              <span className="text-[10px] font-medium text-foreground">{d.from}</span>
            </div>
            <span className="text-[8px] text-muted-foreground">{d.time}</span>
          </div>
          <p className="text-[10px] text-muted-foreground leading-relaxed">{d.message}</p>
          {d.responded && (
            <span className="text-[8px] text-emerald-600 flex items-center gap-1 mt-1.5">
              <CheckCircle2 className="w-3 h-3" /> Responded
            </span>
          )}
        </div>
      ))}
    </div>
  );
}

function MockContacts({ data, color }: { data: any; color: string }) {
  const items = data as { name: string; type: string; lastContact: string }[];
  return (
    <div className="space-y-2">
      {items.map((d) => (
        <div key={d.name} className="rounded-lg border border-border bg-background/60 p-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
              <Users className="w-4 h-4 text-primary" />
            </div>
            <div>
              <span className="text-[11px] font-medium text-foreground block">{d.name}</span>
              <span className="text-[9px] text-muted-foreground">{d.type}</span>
            </div>
          </div>
          <span className="text-[9px] text-muted-foreground">{d.lastContact}</span>
        </div>
      ))}
    </div>
  );
}

function MockSearch({ data, color }: { data: any; color: string }) {
  const d = data as { query: string; results: { title: string; type: string; date: string }[] };
  return (
    <div>
      <div className="flex items-center gap-2 rounded-lg border border-border bg-background/60 px-3 py-2 mb-3">
        <Search className="w-3.5 h-3.5 text-muted-foreground" />
        <span className="text-[11px] text-foreground">{d.query}</span>
      </div>
      <div className="space-y-2">
        {d.results.map((r) => (
          <div key={r.title} className="rounded-lg border border-border bg-background/60 p-3 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <FileText className="w-4 h-4" style={{ color }} />
              <div>
                <span className="text-[11px] font-medium text-foreground block">{r.title}</span>
                <span className="text-[9px] text-muted-foreground">{r.date}</span>
              </div>
            </div>
            <span className="text-[9px] text-muted-foreground px-2 py-0.5 rounded border border-border">{r.type}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function MockGrants({ data, color }: { data: any; color: string }) {
  const items = data as { name: string; match: number; deadline: string; amount: string }[];
  return (
    <div className="space-y-2">
      {items.map((d) => (
        <div key={d.name} className="rounded-lg border border-border bg-background/60 p-3">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[11px] font-medium text-foreground">{d.name}</span>
            <span className="text-[11px] font-display font-bold" style={{ color }}>{d.match}% match</span>
          </div>
          <div className="flex items-center gap-4 text-[9px] text-muted-foreground">
            <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{d.deadline}</span>
            <span className="flex items-center gap-1"><Star className="w-3 h-3" />{d.amount}</span>
          </div>
          <div className="w-full h-1 rounded-full bg-secondary mt-2 overflow-hidden">
            <motion.div className="h-full rounded-full" style={{ backgroundColor: color }}
              initial={{ width: 0 }} whileInView={{ width: `${d.match}%` }}
              viewport={{ once: true }} transition={{ duration: 1, delay: 0.2 }} />
          </div>
        </div>
      ))}
    </div>
  );
}

const mockComponents: Record<string, React.FC<{ data: any; color: string }>> = {
  grid: MockGrid, timeline: MockTimeline, pipeline: MockPipeline,
  approvals: MockApprovals, feedback: MockFeedback, contacts: MockContacts,
  search: MockSearch, grants: MockGrants,
};

/* ------------------------------------------------------------------ */
/*  Node Map                                                           */
/* ------------------------------------------------------------------ */

function NodeMap({ activeIndex }: { activeIndex: number }) {
  const nodePositions = [
    { x: 50, y: 15 }, { x: 82, y: 22 }, { x: 92, y: 50 }, { x: 82, y: 78 },
    { x: 50, y: 85 }, { x: 18, y: 78 }, { x: 8, y: 50 }, { x: 18, y: 22 },
  ];
  return (
    <div className="relative w-full aspect-square max-w-[280px] mx-auto">
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="35" fill="none" stroke="hsl(var(--primary) / 0.08)" strokeWidth="0.4" />
        {nodePositions.map((pos, i) => (
          <motion.line key={i} x1="50" y1="50" x2={pos.x} y2={pos.y}
            stroke={i === activeIndex ? capabilities[i].color : "hsl(var(--primary) / 0.1)"}
            strokeWidth={i === activeIndex ? "0.8" : "0.3"}
            strokeDasharray={i === activeIndex ? "none" : "2 2"}
            animate={{ stroke: i === activeIndex ? capabilities[i].color : "hsl(var(--primary) / 0.1)", strokeWidth: i === activeIndex ? 0.8 : 0.3 }}
            transition={{ duration: 0.4 }}
          />
        ))}
        {nodePositions.map((pos, i) => {
          const next = nodePositions[(i + 1) % nodePositions.length];
          return <line key={`adj-${i}`} x1={pos.x} y1={pos.y} x2={next.x} y2={next.y} stroke="hsl(var(--primary) / 0.06)" strokeWidth="0.3" />;
        })}
      </svg>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 rounded-full border border-primary/30 bg-card flex items-center justify-center z-20 shadow-lg">
        <span className="font-display text-sm text-primary font-bold">Brain</span>
      </div>
      {nodePositions.map((pos, i) => {
        const cap = capabilities[i];
        const isActive = i === activeIndex;
        return (
          <motion.div key={cap.id} className="absolute z-10"
            style={{ top: `${pos.y}%`, left: `${pos.x}%`, transform: "translate(-50%, -50%)" }}
            animate={{ scale: isActive ? 1.15 : 0.9, opacity: isActive ? 1 : 0.5 }}
            transition={{ duration: 0.3 }}
          >
            <div className={`w-10 h-10 rounded-full flex items-center justify-center border ${isActive ? "border-primary/50 shadow-lg" : "border-border"} bg-card transition-all duration-300`}>
              <cap.icon className="w-4 h-4" style={{ color: isActive ? cap.color : "hsl(var(--muted-foreground))" }} />
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Implementation Phases                                              */
/* ------------------------------------------------------------------ */

const phases = [
  { icon: Search, title: "Discovery & Assessment", timeline: "Weeks 1–4",
    deliverables: ["Departmental audit across all departments", "Technology & governance process mapping", "Project portfolio review (16+ projects)", "Stakeholder & funder mapping", "Gap analysis report"] },
  { icon: Settings, title: "Platform Configuration & Data Migration", timeline: "Weeks 5–12",
    deliverables: ["All 8 modules configured for WLFN", "Data migration with validation", "Vault populated with all documents", "Grant Engine activated with funder relationships"] },
  { icon: Users, title: "Community & Departmental Engagement", timeline: "Weeks 10–16",
    deliverables: ["Chief & Council demo of all 8 modules", "Department-by-department onboarding", "Community information session", "Iterative feedback integration"] },
  { icon: GraduationCap, title: "Training & Capacity Building", timeline: "Weeks 14–18",
    deliverables: ["Administrator & department lead training", "Governance & Grant Engine training", "End user training for all staff", "Platform Champion Program"] },
  { icon: Rocket, title: "Go-Live & Stabilization", timeline: "Weeks 18–22",
    deliverables: ["Phased rollout of all 8 modules", "4-week intensive support window", "Adoption monitoring & issue resolution"] },
  { icon: Headphones, title: "Ongoing Support & Evolution", timeline: "Months 6–12",
    deliverables: ["Monthly check-ins & quarterly updates", "Grant Engine optimization", "Annual review & Year 2 strategy"] },
];

const benefits = [
  "8 integrated modules in one unified system",
  "Your community's calm center",
  "Transparent decision-making with full audit trails",
  "Grant Engine  -  never miss a dollar",
  "Institutional memory preserved in the Vault",
  "Data sovereignty aligned with OCAP® principles",
];

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */

const fadeUp = { initial: { opacity: 0, y: 24 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true } };

export default function ScopeBrain() {
  const [activeSection, setActiveSection] = useState(0);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    capabilities.forEach((cap, i) => {
      const el = document.getElementById(`cap-${cap.id}`);
      if (!el) return;
      const observer = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(i); },
        { threshold: 0.4, rootMargin: "-10% 0px -40% 0px" }
      );
      observer.observe(el);
      observers.push(observer);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Nav */}
      <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/" className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            <ArrowLeft className="w-4 h-4" /> Back to Overview
          </Link>
          <span className="text-sm font-semibold text-primary">Strategy Plus - Add On</span>
        </div>
      </nav>

      {/* Hero */}
      <section className="bg-gradient-brain relative py-24 md:py-32 px-6 overflow-hidden">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[160px] pointer-events-none" />
        <div className="max-w-5xl mx-auto relative z-10 text-center">
          <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            className="inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest bg-primary/10 text-primary border border-primary/20 mb-6">
            Strategy Plus - Add On
          </motion.span>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight mb-4">
            Your community's<br /><span className="text-gradient">calm center</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Brain is built to operate your Nation end-to-end — departments, committees (EDAC, Finance, Housing), projects, grants, and governance — so leadership can focus on what matters most: your people.
          </motion.p>

          {/* Module pills */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35 }}
            className="flex flex-wrap justify-center gap-2 mb-10">
            {capabilities.map((cap) => (
              <a key={cap.id} href={`#cap-${cap.id}`}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-border text-[11px] text-muted-foreground hover:text-foreground hover:border-primary/30 transition-all">
                <cap.icon className="w-3 h-3" />
                {cap.title}
              </a>
            ))}
          </motion.div>

          <div className="card-elevated inline-block px-8 py-4 rounded-2xl mb-10">
            <div className="text-sm text-muted-foreground mb-1">Investment</div>
            <div className="text-4xl font-display font-bold text-gradient">$59,500</div>
          </div>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
            <a href="#cap-departments" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
              Explore the 8 modules <ArrowDown className="w-4 h-4 animate-bounce" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Module Showcase with sticky NodeMap */}
      <section className="relative">
        <div className="lg:flex">
          {/* Sticky sidebar */}
          <div className="hidden lg:block lg:w-[340px] shrink-0">
            <div className="sticky top-24 pt-8 pb-8 px-6">
              <NodeMap activeIndex={activeSection} />
              <div className="mt-6 text-center">
                <span className="text-xs text-muted-foreground uppercase tracking-wider font-semibold">
                  {capabilities[activeSection]?.title}
                </span>
              </div>
            </div>
          </div>

          {/* Capability cards */}
          <div className="flex-1 px-6 lg:pr-12 lg:pl-0 pb-24">
            {capabilities.map((cap, i) => {
              const MockComponent = mockComponents[cap.mockType];
              return (
                <div key={cap.id} id={`cap-${cap.id}`} className="min-h-[70vh] flex items-center py-16">
                  <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.7 }} className="w-full">
                    <div className={`flex flex-col ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} gap-8 md:gap-12 items-center`}>
                      {/* Text */}
                      <div className="flex-1 max-w-lg">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-12 h-12 rounded-2xl flex items-center justify-center shadow-md" style={{ backgroundColor: cap.color }}>
                            <cap.icon className="w-6 h-6 text-white" />
                          </div>
                          <span className="text-[10px] font-medium tracking-[0.2em] uppercase text-muted-foreground">
                            {String(i + 1).padStart(2, "0")} / {String(capabilities.length).padStart(2, "0")}
                          </span>
                        </div>
                        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2">{cap.title}</h2>
                        <p className="font-display text-lg md:text-xl font-semibold mb-4" style={{ color: cap.color }}>{cap.tagline}</p>
                        <p className="text-muted-foreground leading-relaxed">{cap.description}</p>
                      </div>

                      {/* Mock UI */}
                      <div className="flex-1 w-full max-w-md">
                        <div className="rounded-2xl border border-border bg-card overflow-hidden shadow-lg">
                          <div className="px-4 py-2.5 border-b border-border flex items-center justify-between">
                            <div className="flex items-center gap-1.5">
                              <div className="w-2 h-2 rounded-full bg-red-400" />
                              <div className="w-2 h-2 rounded-full bg-amber-400" />
                              <div className="w-2 h-2 rounded-full bg-emerald-400" />
                            </div>
                            <span className="text-[9px] text-muted-foreground">{cap.title}</span>
                            <div className="flex items-center gap-2">
                              <Bell className="w-3 h-3 text-muted-foreground/40" />
                              <Search className="w-3 h-3 text-muted-foreground/40" />
                            </div>
                          </div>
                          <div className="p-4">
                            <MockComponent data={cap.mockData} color={cap.color} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Everything Connected */}
      <section className="py-24 px-6 bg-muted/30 border-y border-border">
        <motion.div {...fadeUp} className="max-w-4xl mx-auto text-center">
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-6">
            Everything flows through <span className="text-gradient">Brain</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-12">
            Departments inform projects. Projects flow into governance. Governance decisions unlock funding.
            Funding drives initiatives. Every piece connects  -  automatically.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {capabilities.map((cap, i) => (
              <motion.div key={cap.id} initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="flex items-center gap-2">
                <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-card">
                  <cap.icon className="w-4 h-4" style={{ color: cap.color }} />
                  <span className="text-sm text-foreground">{cap.title}</span>
                </div>
                {i < capabilities.length - 1 && <ChevronRight className="w-4 h-4 text-primary/30 hidden md:block" />}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Benefits */}
      <section className="py-16 px-6 border-b border-border">
        <div className="max-w-5xl mx-auto">
          <motion.h2 {...fadeUp} className="font-display text-2xl md:text-4xl font-bold mb-8 text-center">
            Key <span className="text-gradient">Benefits</span>
          </motion.h2>
          <div className="flex flex-wrap justify-center gap-3">
            {benefits.map((b, i) => (
              <motion.span key={i} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.06 }}
                className="inline-flex items-center gap-2 text-sm px-4 py-2 rounded-full bg-primary/8 text-foreground border border-primary/15 font-medium">
                <CheckCircle2 className="w-4 h-4 text-primary shrink-0" /> {b}
              </motion.span>
            ))}
          </div>
        </div>
      </section>

      {/* Implementation Phases */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.h2 {...fadeUp} className="font-display text-2xl md:text-4xl font-bold mb-12 text-center">
            Implementation <span className="text-gradient">Phases</span>
          </motion.h2>
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border hidden md:block" />
            <div className="space-y-8">
              {phases.map((phase, i) => (
                <motion.div key={i} initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="flex gap-6 md:ml-0">
                  <div className="hidden md:flex flex-col items-center">
                    <div className="w-4 h-4 rounded-full bg-primary shadow-glow shrink-0 relative z-10 mt-6" />
                  </div>
                  <div className="flex-1 card-interactive p-6 md:p-8">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-5">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                        <phase.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-display text-lg font-bold">{phase.title}</h3>
                        <span className="text-sm text-primary font-semibold">{phase.timeline}</span>
                      </div>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-3">
                      {phase.deliverables.map((d, di) => (
                        <div key={di} className="flex items-start gap-3 text-sm text-muted-foreground">
                          <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                          <span>{d}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="py-12 px-6 border-t border-border bg-muted/30">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <div />
          <Link to="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Back to Overview</Link>
          <Link to="/scope/ccp" className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:gap-3 transition-all">
            Comprehensive Community Plan <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
