import { useState } from "react";
import { ChevronDown, ChevronUp, ArrowLeft, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

/* ── PIB Economic Development Opportunity Table ── */
const PRIORITY_PROJECTS = [
  { name: "Gas Station & Convenience Retail", sector: "Retail Energy", partner: "Nation-owned", status: "Phase I Priority — site identified", note: "High own-source revenue potential" },
  { name: "Development Corporation", sector: "Governance", partner: "Nation-owned LP", status: "Phase I Priority — structure to be designed", note: "Revenue diversification anchor" },
  { name: "Snpink'tn Tourism Hub", sector: "Tourism & Culture", partner: "Destination BC alignment", status: "Phase II — feasibility in progress", note: "46,000+ acre territory advantage" },
  { name: "Short-Term Rental (Okanagan)", sector: "Hospitality", partner: "Airbnb / Direct", status: "Near-term opportunity — land available", note: "High Okanagan tourism demand" },
  { name: "Commercial Lease Expansion", sector: "Real Estate", partner: "Private tenants", status: "Ongoing — reserve land leverage", note: "Low capital, recurring revenue" },
  { name: "EDAC Formation", sector: "Governance", partner: "Community-led", status: "Phase I Deliverable", note: "Required for grant eligibility" },
];

const CHALLENGES = {
  critical: [
    { title: "No Development Corporation", desc: "PIB currently lacks the corporate structure to hold equity, enter partnerships, or access certain federal business development programs. Forming a dev corp is a Phase I priority." },
    { title: "Grant Access Gap", desc: "Without an EDAC and formal economic development plan, PIB is ineligible for major federal programs including ISC Economic Development and PrairiesCan REGI." },
    { title: "Governance Bandwidth", desc: "Council and administration are managing a high volume of community priorities simultaneously — a dedicated economic development officer or coordinator is needed." },
  ],
  high: [
    { title: "Tourism Infrastructure", desc: "The Okanagan is one of Canada's premier tourism destinations, but PIB lacks developed tourism assets to capture its share of the $1.2B regional tourism economy." },
    { title: "Revenue Concentration", desc: "Current own-source revenue is concentrated in a small number of streams. Diversification into retail, hospitality, and land development reduces long-term risk." },
    { title: "Land Use Planning", desc: "46,000+ acres of reserve and traditional territory represent significant untapped economic potential — a formal land use plan would unlock development opportunities." },
  ],
  medium: [
    { title: "Community Engagement", desc: "Community members need visibility into economic development priorities and the ability to shape decisions — especially for land use and business ventures that affect daily life." },
    { title: "Workforce Readiness", desc: "Okanagan labour market competition is intense. Training and Indigenous workforce development programs should be embedded in the strategy." },
    { title: "Technology & Reporting", desc: "No centralized system for tracking economic development initiatives, grant pipelines, or community benefit reporting. melyn Brain directly addresses this gap." },
  ],
  low: [
    { title: "Seasonal Tourism Concentration", desc: "Okanagan tourism peaks in summer — revenue diversification across seasons (wine, skiing, cultural events) will stabilize cash flows." },
    { title: "Regional Competition", desc: "Other South Okanagan municipalities and First Nations are also developing tourism and commercial offerings — early mover advantage is valuable." },
  ],
};

const STRATEGIC_PRIORITIES = [
  {
    number: "01",
    title: "Corporate Structure & Governance",
    horizon: "Year 1",
    color: "hsl(200,41%,30%)",
    items: [
      "Establish PIB Development Corporation (LP or Corp structure TBD with legal counsel)",
      "Form Economic Development Advisory Committee (EDAC)",
      "Hire or designate Economic Development Officer",
      "Develop Community Economic Development Policy",
    ],
  },
  {
    number: "02",
    title: "Immediate Revenue Opportunities",
    horizon: "Year 1-2",
    color: "hsl(200,42%,40%)",
    items: [
      "Develop gas station and convenience retail on reserve — target $500K+ annual revenue",
      "Expand commercial lease program on reserve lands",
      "Launch short-term rental pilot using available reserve land in high-demand Okanagan tourism corridor",
      "Apply for ISC Economic Development funding to support dev corp formation",
    ],
  },
  {
    number: "03",
    title: "Tourism & Cultural Economy",
    horizon: "Year 2-3",
    color: "hsl(160,50%,45%)",
    items: [
      "Develop Snpink'tn Cultural Tourism experience — guided tours, cultural events, land-based programming",
      "Create Indigenous tourism certification through ITAC",
      "Partner with Okanagan tourism operators and Destination BC",
      "Explore glamping, eco-lodge, or boutique accommodation on the 46,000+ acre territory",
    ],
  },
  {
    number: "04",
    title: "Land Use & Long-Term Development",
    horizon: "Year 3-5",
    color: "hsl(210,60%,55%)",
    items: [
      "Complete formal Reserve Land Use Plan",
      "Identify commercial, residential, and conservation zones across PIB territory",
      "Evaluate joint venture opportunities with Okanagan private sector partners",
      "Develop multi-year Capital Investment Plan tied to grant opportunities",
    ],
  },
];

function Section({ title, children, defaultOpen = false }: {
  title: string; children: React.ReactNode; defaultOpen?: boolean;
}) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="card-elevated mb-4 overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-6 py-4 text-left hover:bg-primary/5 transition-colors"
      >
        <h3 className="font-display font-bold text-sm text-foreground">{title}</h3>
        {open
          ? <ChevronUp className="text-muted-foreground shrink-0" size={18} />
          : <ChevronDown className="text-muted-foreground shrink-0" size={18} />}
      </button>
      {open && <div className="px-6 pb-6 border-t border-border">{children}</div>}
    </div>
  );
}

const fadeUp = { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true } };

export default function StrategyExamplePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="sticky top-0 z-40 bg-card/90 backdrop-blur-md border-b border-border">
        <div className="max-w-5xl mx-auto px-6 h-14 flex items-center gap-4">
          <Link to="/" className="flex items-center gap-1.5 text-muted-foreground hover:text-foreground transition-colors text-sm">
            <ArrowLeft size={16} />
            Back
          </Link>
          <span className="text-border">|</span>
          <span className="font-display font-bold text-primary text-sm">melyn</span>
          <span className="text-muted-foreground text-sm">Strategy Example</span>
          <span className="ml-auto flex items-center gap-1.5 text-xs text-amber-600 bg-amber-50 px-2.5 py-1 rounded-full font-medium">
            <Sparkles size={12} />
            Sample Deliverable
          </span>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-10">

        {/* Intro Banner */}
        <motion.div {...fadeUp} className="card-elevated p-6 mb-10 border-l-4 border-primary bg-primary/5">
          <h1 className="font-display text-2xl font-bold text-foreground mb-2">
            snpink'tn (Penticton) Indian Band — Economic Development Strategy
          </h1>
          <p className="text-muted-foreground text-sm mb-3">
            This is a <strong>sample deliverable</strong> showing what your completed Economic Development Strategic Plan will look like
            when built on the melyn platform. The final strategy will be co-created with Chief, Council, and community — this preview
            uses publicly available PIB data and melyn's initial research.
          </p>
          <div className="flex flex-wrap gap-2 text-xs">
            {["South Okanagan, BC", "46,000+ Acres", "$11M+ Own-Source Revenue", "Phase I: Gas Station, Dev Corp, EDAC"].map(tag => (
              <span key={tag} className="bg-primary/10 text-primary px-2.5 py-1 rounded-full font-medium">{tag}</span>
            ))}
          </div>
        </motion.div>

        {/* Priority Projects Table */}
        <motion.div {...fadeUp}>
          <h2 className="font-display text-xl font-bold text-foreground mb-4">Priority Opportunities</h2>
          <div className="card-elevated overflow-hidden mb-10">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border bg-muted/30">
                    <th className="text-left py-3 px-4 font-display font-bold text-xs text-muted-foreground">Opportunity</th>
                    <th className="text-left py-3 px-4 font-display font-bold text-xs text-muted-foreground">Sector</th>
                    <th className="text-left py-3 px-4 font-display font-bold text-xs text-muted-foreground">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {PRIORITY_PROJECTS.map((p, i) => (
                    <tr key={i} className="border-b border-border/50 hover:bg-primary/5 transition-colors">
                      <td className="py-3 px-4">
                        <div className="font-medium text-foreground text-xs">{p.name}</div>
                        {p.note && (
                          <span className="mt-1 inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-medium bg-primary/10 text-primary">
                            {p.note}
                          </span>
                        )}
                      </td>
                      <td className="py-3 px-4 text-xs text-muted-foreground">{p.sector}</td>
                      <td className="py-3 px-4 text-xs text-muted-foreground">{p.status}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </motion.div>

        {/* Key Assets */}
        <motion.div {...fadeUp}>
          <h2 className="font-display text-xl font-bold text-foreground mb-4">Key Assets</h2>

          <Section title="Land Base and Territory (46,000+ Acres)" defaultOpen>
            <ul className="space-y-2 text-sm text-foreground mt-4">
              <li className="flex gap-2"><span className="text-primary font-bold">-</span> South Okanagan reserve lands — some of the most valuable real estate in BC based on tourism and agricultural demand</li>
              <li className="flex gap-2"><span className="text-primary font-bold">-</span> Traditional territory spanning the full Okanagan valley — active consultation and land use rights</li>
              <li className="flex gap-2"><span className="text-primary font-bold">-</span> Agricultural land base — viticulture, orchards, and food sovereignty potential</li>
              <li className="flex gap-2"><span className="text-primary font-bold">-</span> Proximity to Penticton (pop. 35,000+) and Highway 97 commercial corridor</li>
            </ul>
          </Section>

          <Section title="Financial Position">
            <ul className="space-y-2 text-sm text-foreground mt-4">
              <li className="flex gap-2"><span className="text-primary font-bold">-</span> $11M+ in own-source revenue — strong foundation for economic self-determination</li>
              <li className="flex gap-2"><span className="text-primary font-bold">-</span> Established own-source revenue streams provide collateral and matched-funding capacity for grants</li>
              <li className="flex gap-2"><span className="text-primary font-bold">-</span> Federal and provincial transfer funding — stable base for operational programs</li>
            </ul>
          </Section>

          <Section title="Tourism and Regional Context">
            <ul className="space-y-2 text-sm text-foreground mt-4">
              <li className="flex gap-2"><span className="text-primary font-bold">-</span> Okanagan is BC's fastest-growing tourism region — wine, beaches, skiing, cultural tourism</li>
              <li className="flex gap-2"><span className="text-primary font-bold">-</span> Penticton hosts major events (Ironman, Peach Fest, Okanagan Wine Festival) driving peak visitor traffic</li>
              <li className="flex gap-2"><span className="text-primary font-bold">-</span> Growing demand for Indigenous cultural tourism experiences across BC</li>
              <li className="flex gap-2"><span className="text-primary font-bold">-</span> Proximity to Okanagan Mountain Provincial Park and Skaha Bluffs Provincial Park</li>
            </ul>
          </Section>

          <Section title="Community and Governance Strengths">
            <ul className="space-y-2 text-sm text-foreground mt-4">
              <li className="flex gap-2"><span className="text-primary font-bold">-</span> New EDO Logan Tait-Reaume providing dedicated economic development capacity</li>
              <li className="flex gap-2"><span className="text-primary font-bold">-</span> Active Chief and Council with economic development as a stated priority</li>
              <li className="flex gap-2"><span className="text-primary font-bold">-</span> Engaged community members in Penticton and surrounding area</li>
              <li className="flex gap-2"><span className="text-primary font-bold">-</span> Okanagan Nation Alliance membership — access to regional advocacy and resources</li>
            </ul>
          </Section>
        </motion.div>

        {/* Strategic Priorities */}
        <motion.div {...fadeUp} className="mt-10 mb-10">
          <h2 className="font-display text-xl font-bold text-foreground mb-6">Strategic Priorities</h2>
          <div className="space-y-4">
            {STRATEGIC_PRIORITIES.map((sp) => (
              <div key={sp.number} className="card-elevated p-6 border-l-4" style={{ borderLeftColor: sp.color }}>
                <div className="flex items-start justify-between gap-4 mb-3">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground">{sp.number}</span>
                    <h3 className="font-display font-bold text-base text-foreground mt-0.5">{sp.title}</h3>
                  </div>
                  <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-muted text-muted-foreground shrink-0">{sp.horizon}</span>
                </div>
                <ul className="space-y-1.5">
                  {sp.items.map((item, i) => (
                    <li key={i} className="text-sm text-muted-foreground flex gap-2">
                      <span className="text-primary font-bold mt-0.5 shrink-0">-</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Challenges */}
        <motion.div {...fadeUp}>
          <h2 className="font-display text-xl font-bold text-foreground mb-6">Challenges and Gaps</h2>

          {Object.entries(CHALLENGES).map(([severity, items]) => {
            const styles: Record<string, { border: string; badge: string; label: string }> = {
              critical: { border: "border-l-red-500",   badge: "bg-red-50 text-red-700",    label: "Critical" },
              high:     { border: "border-l-orange-400", badge: "bg-orange-50 text-orange-700", label: "High" },
              medium:   { border: "border-l-yellow-400", badge: "bg-yellow-50 text-yellow-700", label: "Medium" },
              low:      { border: "border-l-slate-300",  badge: "bg-slate-50 text-slate-600",  label: "Low" },
            };
            const s = styles[severity];
            return (
              <div key={severity} className="mb-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className={`text-xs font-bold uppercase tracking-wider px-2 py-0.5 rounded ${s.badge}`}>{s.label}</span>
                </div>
                <div className="space-y-2">
                  {items.map((item) => (
                    <div key={item.title} className={`card-elevated p-4 border-l-4 ${s.border}`}>
                      <h4 className="font-display font-semibold text-sm text-foreground">{item.title}</h4>
                      <p className="text-xs text-muted-foreground mt-1">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </motion.div>

        {/* Footer CTA */}
        <motion.div {...fadeUp} className="mt-12 card-elevated p-8 text-center border-2 border-primary/20 bg-primary/5">
          <h3 className="font-display text-xl font-bold text-foreground mb-2">This is what your strategy looks like — built live.</h3>
          <p className="text-muted-foreground text-sm mb-4 max-w-xl mx-auto">
            The final Economic Development Strategic Plan for snpink'tn will be built through community engagement,
            land assessments, and financial modeling — then published as a living digital platform your team can update,
            share, and act from.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link to="/#budget" className="px-5 py-2.5 rounded-xl bg-primary text-primary-foreground font-display font-semibold text-sm hover:opacity-90 transition-opacity">
              View Investment Breakdown
            </Link>
            <Link to="/melyn-brain" className="px-5 py-2.5 rounded-xl border border-border text-foreground font-display font-semibold text-sm hover:bg-primary/5 transition-colors">
              Explore melyn Brain
            </Link>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
