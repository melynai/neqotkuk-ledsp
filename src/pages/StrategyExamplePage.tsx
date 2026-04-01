import { useState } from "react";
import { ChevronDown, ChevronUp, ArrowLeft, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

/* ── Neqotkuk Economic Development Opportunity Table ── */
const PRIORITY_PROJECTS = [
  { name: "Forestry Operations & Value-Added Processing", sector: "Natural Resources", partner: "Nation-owned", status: "Phase I Priority - capacity assessment underway", note: "High own-source revenue potential" },
  { name: "Economic Development Corporation", sector: "Governance", partner: "Nation-owned LP", status: "Phase I Priority - structure to be designed", note: "Revenue diversification anchor" },
  { name: "Wolastoqey Cultural Tourism Hub", sector: "Tourism & Culture", partner: "Tourism New Brunswick alignment", status: "Phase II - feasibility in progress", note: "Saint John River Valley advantage" },
  { name: "Cannabis Production & Retail", sector: "Agriculture & Cannabis", partner: "Licensed partners / Direct", status: "Near-term opportunity - regulatory pathway active", note: "Growing national market demand" },
  { name: "Commercial Real Estate Development", sector: "Real Estate", partner: "Private tenants", status: "Ongoing - reserve land leverage", note: "Low capital, recurring revenue" },
  { name: "EDAC Formation", sector: "Governance", partner: "Community-led", status: "Phase I Deliverable", note: "Required for grant eligibility" },
];

const CHALLENGES = {
  critical: [
    { title: "No Development Corporation", desc: "Neqotkuk currently lacks the corporate structure to hold equity, enter partnerships, or access certain federal business development programs. Forming a dev corp is a Phase I priority." },
    { title: "Grant Access Gap", desc: "Without an EDAC and formal economic development plan, Neqotkuk is ineligible for major federal programs including ISC Economic Development and ACOA funding streams." },
    { title: "Governance Bandwidth", desc: "Council and administration are managing a high volume of community priorities simultaneously - a dedicated economic development officer or coordinator is needed." },
  ],
  high: [
    { title: "Tourism Infrastructure", desc: "The Saint John River Valley has significant untapped eco-tourism potential, but Neqotkuk lacks developed tourism assets to capture its share of New Brunswick's growing tourism economy." },
    { title: "Revenue Concentration", desc: "Current own-source revenue is concentrated in a small number of streams. Diversification into forestry, cannabis, renewable energy, and real estate development reduces long-term risk." },
    { title: "Land Use Planning", desc: "Reserve and traditional territory along the Wolastoq (Saint John River) represent significant untapped economic potential - a formal land use plan would unlock development opportunities." },
  ],
  medium: [
    { title: "Community Engagement", desc: "Community members need visibility into economic development priorities and the ability to shape decisions - especially for land use and business ventures that affect daily life." },
    { title: "Workforce Readiness", desc: "Regional labour market competition requires attention. Training and Indigenous workforce development programs should be embedded in the strategy." },
    { title: "Technology & Reporting", desc: "No centralized system for tracking economic development initiatives, grant pipelines, or community benefit reporting. melyn Brain directly addresses this gap." },
  ],
  low: [
    { title: "Seasonal Tourism Concentration", desc: "Saint John River Valley tourism peaks in summer - revenue diversification across seasons (cultural events, winter eco-tourism, harvest festivals) will stabilize cash flows." },
    { title: "Regional Competition", desc: "Other First Nations and municipalities in the region are also developing tourism and commercial offerings - early mover advantage is valuable." },
  ],
};

const STRATEGIC_PRIORITIES = [
  {
    number: "01",
    title: "Corporate Structure & Governance",
    horizon: "Year 1",
    color: "hsl(200,41%,30%)",
    items: [
      "Establish Neqotkuk Economic Development Corporation (LP or Corp structure TBD with legal counsel)",
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
      "Advance forestry operations and value-added wood processing on reserve - target sustainable harvest revenue",
      "Expand commercial lease program on reserve lands",
      "Launch cannabis production and retail operations leveraging regulatory pathways",
      "Apply for ISC Economic Development and ACOA funding to support dev corp formation",
    ],
  },
  {
    number: "03",
    title: "Tourism & Cultural Economy",
    horizon: "Year 2-3",
    color: "hsl(160,50%,45%)",
    items: [
      "Develop Wolastoqey Cultural Tourism experience - guided river tours, cultural events, land-based programming",
      "Create Indigenous tourism certification through ITAC",
      "Partner with regional tourism operators and Tourism New Brunswick",
      "Explore eco-lodge, glamping, or boutique accommodation along the Saint John River corridor",
    ],
  },
  {
    number: "04",
    title: "Land Use & Long-Term Development",
    horizon: "Year 3-5",
    color: "hsl(210,60%,55%)",
    items: [
      "Complete formal Reserve Land Use Plan",
      "Identify commercial, residential, and conservation zones across Neqotkuk territory",
      "Evaluate joint venture opportunities with regional private sector partners and Wolastoqiyik Ajemseg",
      "Develop multi-year Capital Investment Plan tied to ACOA and federal grant opportunities",
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
            Neqotkuk (Tobique) First Nation - Economic Development Strategy
          </h1>
          <p className="text-muted-foreground text-sm mb-3">
            This is a <strong>sample deliverable</strong> showing what your completed Economic Development Strategic Plan will look like
            when built on the melyn platform. The final strategy will be co-created with Chief, Council, and community - this preview
            uses publicly available Neqotkuk data and melyn's initial research.
          </p>
          <div className="flex flex-wrap gap-2 text-xs">
            {["Saint John River Valley, NB", "Wolastoqey Territory", "Forestry, Cannabis, Renewable Energy", "Phase I: Dev Corp, EDAC, Forestry Ops"].map(tag => (
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

          <Section title="Land Base and Territory along the Wolastoq" defaultOpen>
            <ul className="space-y-2 text-sm text-foreground mt-4">
              <li className="flex gap-2"><span className="text-primary font-bold">-</span> Reserve lands along the Wolastoq (Saint John River) - rich in forestry, agriculture, and natural resource potential</li>
              <li className="flex gap-2"><span className="text-primary font-bold">-</span> Traditional Wolastoqey territory spanning the Saint John River Valley - active consultation and land use rights</li>
              <li className="flex gap-2"><span className="text-primary font-bold">-</span> Agricultural and forestry land base - timber, biomass, and food sovereignty potential</li>
              <li className="flex gap-2"><span className="text-primary font-bold">-</span> Proximity to Trans-Canada Highway and Route 105 corridor connecting northern New Brunswick</li>
            </ul>
          </Section>

          <Section title="Financial Position">
            <ul className="space-y-2 text-sm text-foreground mt-4">
              <li className="flex gap-2"><span className="text-primary font-bold">-</span> Existing own-source revenue streams - foundation for economic self-determination</li>
              <li className="flex gap-2"><span className="text-primary font-bold">-</span> Established revenue streams provide collateral and matched-funding capacity for ACOA and federal grants</li>
              <li className="flex gap-2"><span className="text-primary font-bold">-</span> Federal and provincial transfer funding - stable base for operational programs</li>
            </ul>
          </Section>

          <Section title="Tourism and Regional Context">
            <ul className="space-y-2 text-sm text-foreground mt-4">
              <li className="flex gap-2"><span className="text-primary font-bold">-</span> Saint John River Valley offers growing eco-tourism potential - river-based tourism, cultural experiences, outdoor recreation</li>
              <li className="flex gap-2"><span className="text-primary font-bold">-</span> New Brunswick's tourism sector is expanding with focus on Indigenous cultural tourism and nature-based experiences</li>
              <li className="flex gap-2"><span className="text-primary font-bold">-</span> Growing demand for Indigenous cultural tourism experiences across Atlantic Canada</li>
              <li className="flex gap-2"><span className="text-primary font-bold">-</span> Proximity to Mount Carleton Provincial Park and Tobique River wilderness areas</li>
            </ul>
          </Section>

          <Section title="Community and Governance Strengths">
            <ul className="space-y-2 text-sm text-foreground mt-4">
              <li className="flex gap-2"><span className="text-primary font-bold">-</span> Dedicated leadership with economic development as a stated priority</li>
              <li className="flex gap-2"><span className="text-primary font-bold">-</span> Active Chief and Council committed to community-driven economic growth</li>
              <li className="flex gap-2"><span className="text-primary font-bold">-</span> Engaged community members in Tobique and surrounding area</li>
              <li className="flex gap-2"><span className="text-primary font-bold">-</span> Wolastoqey Nation and Wolastoqiyik Ajemseg membership - access to regional advocacy and resources</li>
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
          <h3 className="font-display text-xl font-bold text-foreground mb-2">This is what your strategy looks like - built live.</h3>
          <p className="text-muted-foreground text-sm mb-4 max-w-xl mx-auto">
            The final Economic Development Strategic Plan for Neqotkuk will be built through community engagement,
            land assessments, and financial modeling - then published as a living digital platform your team can update,
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
