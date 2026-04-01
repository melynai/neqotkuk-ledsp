import { motion } from "framer-motion";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { Mail, MapPin, Phone } from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

/* ── Color palette for avatar backgrounds ── */
const avatarColors = [
  "hsl(200,41%,30%)",   // teal
  "hsl(200,42%,40%)",   // teal2
  "hsl(160,50%,45%)",   // mint
  "hsl(210,60%,55%)",   // sky
  "hsl(200,35%,35%)",   // mid-teal
];

/* ── Types ── */
type ExperienceItem = {
  title: string;
  org: string;
  period: string;
  bullets: string[];
};

type TeamMember = {
  name: string;
  title: string;
  melynRole: string;
  contact: { email?: string; phone?: string; location?: string };
  summary: string;
  experience: ExperienceItem[];
  education: string[];
  skills?: string[];
  certifications?: string[];
  relevantProjects?: string[];
};

/* ── Full team data ── */
const team: TeamMember[] = [
  {
    name: "TJ Galiardi",
    title: "CEO & Project Lead",
    melynRole: "CEO & Project Lead",
    contact: { email: "tj@melyn.ca", phone: "587-575-9332", location: "Calgary, AB" },
    summary:
      "Co-founder and CEO of melyn. Former National Hockey League professional athlete (Dartmouth College graduate, Ivy League Rookie of the Year). Brings elite-level discipline, executive leadership, and deep commitment to Indigenous economic self-determination. Personally leads all economic development strategy engagements across Canada.",
    experience: [
      {
        title: "Co-Founder & CEO",
        org: "melyn",
        period: "Aug 2025 - Present",
        bullets: [
          "Co-founded and leads melyn, Canada's first platform built specifically for First Nations governance and funding",
          "Personally leads all economic development strategy engagements, having delivered LEDSP-funded strategies for multiple First Nations across Canada",
          "Oversees portfolio of 30+ active grant files across every province and territory",
          "Leads strategic relationships with Chief and Council across Canada",
        ],
      },
      {
        title: "President",
        org: "Steel River Group",
        period: "Oct 2023 - Aug 2025",
        bullets: [
          "Led Indigenous relations, business development, and consulting services for a national Indigenous-focused firm",
          "Secured key partnerships and directed multi-year growth strategy",
        ],
      },
      {
        title: "Chief Development Officer",
        org: "Steel River Group",
        period: "Jan 2023 - Oct 2023",
        bullets: [
          "Spearheaded initiatives to foster Indigenous relations and community development",
          "Directed business development strategies across consulting and development sectors",
        ],
      },
      {
        title: "EVP, Corporate Development",
        org: "Steel River Group",
        period: "Jun 2022 - Jan 2023",
        bullets: [
          "Executive leadership across corporate development and partnership expansion",
        ],
      },
      {
        title: "Venture Partner",
        org: "Redstick Ventures",
        period: "May 2024 - Present",
        bullets: ["Venture partner focused on growth-stage companies"],
      },
      {
        title: "Co-Founder",
        org: "Outcast Foods",
        period: "Nov 2017 - Feb 2022",
        bullets: [
          "Co-founded sustainable food company; achieved 1500% growth in first 3 years",
          "Oversaw government relations and grant sourcing, securing $5M through federal programs",
          "Led fundraising, securing over $22M in angel and venture capital",
        ],
      },
      {
        title: "Professional Hockey Player",
        org: "NHL Alumni",
        period: "May 2008 - Oct 2017",
        bullets: [
          "Colorado Avalanche, San Jose Sharks, Calgary Flames, Winnipeg Jets",
          "9.5 years professional career in the National Hockey League",
        ],
      },
    ],
    education: [
      "Dartmouth College, Class of 2010 (Ivy League Rookie of the Year - Ice Hockey)",
    ],
    relevantProjects: [
      "AOPFN LP LEDSP Economic Development Strategy (2026)",
      "Witchekan Lake FN LEDSP Corporate Strategic Planning (2025-26)",
      "Whitefish Lake FN LEDSP Economic Development Master Plan (2025-26)",
      "Neqotkuk (Tobique) FN Economic Development Sustainability Plan (2026)",
    ],
  },
  {
    name: "Cherag Kapoor",
    title: "COO & Co-Founder",
    melynRole: "COO, Co-Founder & Strategic Oversight",
    contact: { email: "cherag@melyn.ca", location: "Calgary, AB" },
    summary:
      "Co-founder and COO of melyn. Combines operational rigour with deep expertise in financial modelling, data analytics, and First Nations economic development. UBC Sauder School of Business graduate with a double specialization in Business Technology Management and Operations & Logistics.",
    experience: [
      {
        title: "COO & Co-Founder",
        org: "melyn",
        period: "Aug 2025 - Present",
        bullets: [
          "Co-founded melyn and oversees all operations, financial management, and project delivery architecture",
          "Provides strategic and financial oversight on all economic development strategy engagements",
          "Leads complex financial modelling and feasibility analysis ensuring recommendations are financially grounded",
          "Oversees portfolio of 30+ active First Nations client relationships across Canada",
        ],
      },
      {
        title: "Vice President, Strategic Initiatives",
        org: "Steel River Group",
        period: "Jan 2023 - Aug 2025",
        bullets: [
          "Led consulting services delivering high-impact social and economic development to First Nations communities",
          "Collaborated with Chief, Council and leadership to understand community needs and tailor consulting services",
          "Conducted comprehensive feasibility studies and analytics research for First Nations across multiple sectors",
          "Managed grant processes, identified and applied for funding aligned with Nations' development goals",
        ],
      },
      {
        title: "IT Business Analyst, Data & Process Improvement",
        org: "MasTec Canada",
        period: "Jun 2021 - Jan 2023",
        bullets: [
          "In-house SME for SharePoint and Power Platform (PowerBI, PowerAutomate, PowerApps)",
          "Built executive dashboards integrating data pipelines from SQL, Web APIs, and Azure Data Factory",
          "Led Data Centre of Excellence and device management/tracking programs",
        ],
      },
      {
        title: "Business and IT Analytics Co-op",
        org: "CNOOC International",
        period: "May 2019 - Aug 2020",
        bullets: [
          "Led analytics platform upgrade and presented KPI models to Chief Information Officer",
          "Performed text mining and trend analysis using R on ServiceNow data",
        ],
      },
    ],
    education: [
      "University of British Columbia - Sauder School of Business",
      "Bachelor of Commerce, Double Specialization in Business Technology Management and Operations & Logistics",
      "Dean's Honor Roll 2020-2021",
    ],
  },
  {
    name: "Mackenzie Kreutzer",
    title: "Team Lead, Empower Services",
    melynRole: "Team Lead, Empower Services & Project Co-Lead",
    contact: { email: "mackenzie@melyn.ca", location: "Calgary, AB" },
    summary:
      "Team Lead of melyn's Empower Services division. Brings a unique combination of data science, business analytics, and Indigenous consulting expertise developed at Steel River Group. Holds an M.Sc. in Data Science and Analytics and a B.Comm. in Business Technology Management from the University of Calgary.",
    experience: [
      {
        title: "Team Lead, Empower Services",
        org: "melyn",
        period: "Jan 2026 - Present",
        bullets: [
          "Leads the Empower Services team, managing concurrent grant files, economic development strategies, and community engagement projects across Canada",
          "Serves as Project Co-Lead on economic development strategy engagements, providing day-to-day analytical and project management support",
          "Translates complex research and engagement findings into clear, community-accessible strategic documents for First Nations clients",
          "Led analytical foundation of melyn's economic development strategy work across multiple nations",
        ],
      },
      {
        title: "Manager, Advisory Services",
        org: "Steel River Group",
        period: "Apr 2025 - Dec 2025",
        bullets: [
          "Led portfolio of 40+ concurrent projects spanning strategic planning, governance, economic development, and infrastructure for Indigenous governments",
          "Secured multi-million-dollar funding by authoring high-quality proposals and grant applications for major infrastructure, housing, and community development initiatives",
          "Delivered strategic guidance to executive leadership teams on governance, finance, and long-term sustainability",
        ],
      },
      {
        title: "Consulting Business Analyst",
        org: "Steel River Group",
        period: "Mar 2024 - Apr 2025",
        bullets: [
          "Produced market, competitor, and trend analyses informing strategic decisions across energy, infrastructure, and Indigenous business sectors",
          "Contributed to proposal development and client presentations securing repeat engagements",
        ],
      },
      {
        title: "Quality Analyst",
        org: "CBI Health",
        period: "Jun 2022 - Mar 2024",
        bullets: [
          "Led comprehensive data cleansing for accreditation reporting across Western Canada",
          "Facilitated training and mentored quality team members",
        ],
      },
      {
        title: "Head Teaching Assistant, Entrepreneurship",
        org: "University of Calgary",
        period: "May 2021 - May 2022",
        bullets: [
          "Led team of 12, delivering course content to 200+ students per semester",
        ],
      },
    ],
    education: [
      "M.Sc. Data Science and Analytics - University of Calgary",
      "B.Comm. Business Technology Management - University of Calgary (CaseIT International Finalist 2021)",
    ],
    certifications: [
      "Microsoft Azure Data Fundamentals (2023)",
      "Microsoft Azure AI Fundamentals (2023)",
    ],
  },
  {
    name: "Deepak Balakrishnan",
    title: "Market Research & Business Analyst",
    melynRole: "Market Research and Business Analyst",
    contact: { email: "deepak@melyn.ca" },
    summary:
      "Market Research and Business Analyst at melyn with 10+ years of experience in data analysis, business intelligence, and market research. Expert in transforming complex data into actionable insights. Supports melyn's grant intelligence, nation profiling, and BD pipeline research.",
    experience: [
      {
        title: "Market Research and Business Analyst",
        org: "melyn",
        period: "Sept 2025 - Present",
        bullets: [
          "Conducts grant opportunity research across federal and provincial programs for First Nations clients",
          "Builds nation intelligence briefs and grant eligibility analyses supporting new client onboarding",
          "Supports BD pipeline through competitor analysis, nation profiling, and opportunity screening",
          "Contributes to grant application data and research across 30+ active client files",
        ],
      },
      {
        title: "Sr. Market Research Analyst",
        org: "CBTS, Cincinnati Bell Technology Solutions",
        period: "May 2019 - Present",
        bullets: [
          "Interpreted insights from verbatim surveys for major brand clients including Nielsen, Kantar, Coca-Cola, Walmart, BMW, Disney, Netflix",
          "Built codebooks and category frameworks transforming open-ended data into structured intelligence",
        ],
      },
      {
        title: "Sr. Market Research Analyst",
        org: "Contus",
        period: "Feb 2017 - Mar 2019",
        bullets: [
          "Managed 2,000+ inbound leads per month through CRM automation and lead scoring",
          "Designed email marketing campaigns across IT, Automotive, and Media sectors",
          "Implemented CRM workflow automation streamlining day-to-day activities",
        ],
      },
      {
        title: "Pre-Sales Executive",
        org: "MRCC Solutions",
        period: "Apr 2016 - Jan 2017",
        bullets: [
          "Identified new prospects across India, Middle East and US",
          "Conducted SWOT and competitor analysis for business development",
        ],
      },
      {
        title: "Data Analyst",
        org: "Scope e-Knowledge Center",
        period: "Nov 2014 - Apr 2016",
        bullets: [],
      },
    ],
    education: [],
    skills: [
      "Market Research",
      "Business Intelligence",
      "Power BI",
      "ZoomInfo",
      "LinkedIn Sales Navigator",
      "HubSpot",
      "Salesforce",
      "AI Prompt Engineering",
      "CRM Management",
      "SWOT Analysis",
      "Data Visualization",
    ],
    certifications: [
      "HubSpot Software Certificate",
      "Market Research Foundations (LinkedIn Learning)",
      "IBM SPSS Certificate",
    ],
  },
  {
    name: "Ezgi Gül",
    title: "Project Coordinator",
    melynRole: "Project Coordinator",
    contact: { email: "ezgi@melyn.ca" },
    summary:
      "Project Coordinator at melyn supporting grant application workflows, client deliverables, and digital platform development. Multidisciplinary UI Designer and Illustrator with 7+ years of experience. Brings design and visual communication expertise to melyn's client-facing deliverables.",
    experience: [
      {
        title: "Project Coordinator",
        org: "melyn",
        period: "Oct 2025 - Present",
        bullets: [
          "Coordinates grant applications and deliverables across multiple active client files",
          "Manages submission timelines, document preparation, and client communications",
          "Supports development of digital platforms and visual materials for client deliverables",
          "Contributes to quality control and formatting of grant applications across all active files",
        ],
      },
      {
        title: "UI Designer",
        org: "SEBIT Educational Technology",
        period: "2022 - 2025",
        bullets: [
          "Improved and supervised UI components for educational platforms",
          "Transitioned existing products to no-code platforms with new design systems",
        ],
      },
      {
        title: "UI Designer",
        org: "Avocode UK / Catchy Games",
        period: "2020 - 2022",
        bullets: [
          "Redesigned characters and interfaces for educational math game",
          "Created game screens, buttons, and animation assets for published mobile game on Android and iOS",
        ],
      },
      {
        title: "Visual Designer",
        org: "Erka Turizm / Customoz",
        period: "2017 - 2020",
        bullets: [
          "Designed B2B and B2C print and digital materials for tourism campaigns",
          "Led multiple branding and visual identity projects",
        ],
      },
    ],
    education: [],
    skills: [
      "Figma",
      "Illustrator",
      "Photoshop",
      "Adobe XD",
      "After Effects",
      "HTML/CSS",
      "Component-based Design",
      "Design Systems",
      "Mobile-first UI",
      "Accessibility-conscious Design",
    ],
    certifications: [
      "Interaction Design Foundation",
      "IELTS Academic Overall 7 (C1)",
    ],
  },
];

/* ── Experience timeline item ── */
const TimelineItem = ({
  item,
  isLast,
  color,
}: {
  item: ExperienceItem;
  isLast: boolean;
  color: string;
}) => (
  <div className="relative pl-6">
    {/* Dot */}
    <div
      className="absolute left-0 top-[6px] w-3 h-3 rounded-full border-2 border-white z-10"
      style={{ backgroundColor: color }}
    />
    {/* Line */}
    {!isLast && (
      <div
        className="absolute left-[5px] top-[18px] w-[2px] bottom-0"
        style={{ backgroundColor: `${color}33` }}
      />
    )}
    <div className="pb-5">
      <div className="font-display text-sm font-bold text-foreground leading-tight">
        {item.title}
      </div>
      <div className="text-xs text-muted-foreground mt-0.5">
        {item.org} &middot; {item.period}
      </div>
      {item.bullets.length > 0 && (
        <ul className="mt-2 space-y-1">
          {item.bullets.map((b, i) => (
            <li key={i} className="text-xs text-muted-foreground leading-relaxed flex gap-2">
              <span className="shrink-0 mt-1.5 w-1 h-1 rounded-full bg-muted-foreground/40" />
              <span>{b}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  </div>
);

/* ── Resume card ── */
const ResumeCard = ({
  member,
  index,
}: {
  member: TeamMember;
  index: number;
}) => {
  const color = avatarColors[index % avatarColors.length];
  const initials = member.name
    .split(" ")
    .map((n) => n[0])
    .join("");

  return (
    <motion.div
      {...fadeUp}
      transition={{ delay: index * 0.08 }}
      className="card-elevated overflow-hidden"
    >
      {/* Header band */}
      <div
        className="px-8 py-6"
        style={{
          background: `linear-gradient(135deg, ${color}0D, ${color}06)`,
        }}
      >
        <div className="flex items-start gap-5">
          {/* Avatar */}
          <div
            className="w-16 h-16 rounded-2xl flex items-center justify-center shrink-0 shadow-md"
            style={{ backgroundColor: color }}
          >
            <span className="font-display font-bold text-white text-xl">
              {initials}
            </span>
          </div>

          <div className="flex-1 min-w-0">
            <h2 className="font-display text-xl md:text-2xl font-bold text-foreground">
              {member.name}
            </h2>
            <p className="text-sm text-muted-foreground font-medium mt-0.5">
              {member.title}
            </p>

            {/* Role badge */}
            <span
              className="inline-block mt-2 px-3 py-1 rounded-full text-xs font-semibold border"
              style={{
                backgroundColor: `${color}12`,
                color: color,
                borderColor: `${color}30`,
              }}
            >
              {member.melynRole}
            </span>

            {/* Contact row */}
            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mt-3">
              {member.contact.email && (
                <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
                  <Mail className="w-3 h-3" />
                  {member.contact.email}
                </span>
              )}
              {member.contact.phone && (
                <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
                  <Phone className="w-3 h-3" />
                  {member.contact.phone}
                </span>
              )}
              {member.contact.location && (
                <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
                  <MapPin className="w-3 h-3" />
                  {member.contact.location}
                </span>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Body - two columns */}
      <div className="px-8 py-6 grid md:grid-cols-[1fr_1.4fr] gap-8">
        {/* Left column: Summary + Skills + Certifications + Education (if no experience-heavy right) */}
        <div className="space-y-6">
          {/* Summary */}
          <div>
            <h3 className="font-display text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2">
              Summary
            </h3>
            <p className="text-sm text-foreground/85 leading-relaxed">
              {member.summary}
            </p>
          </div>

          {/* Education */}
          {member.education.length > 0 && (
            <div>
              <h3 className="font-display text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2">
                Education
              </h3>
              <ul className="space-y-1.5">
                {member.education.map((ed, i) => (
                  <li
                    key={i}
                    className="text-sm text-foreground/85 leading-relaxed flex gap-2"
                  >
                    <span
                      className="shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full"
                      style={{ backgroundColor: color }}
                    />
                    <span>{ed}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Skills */}
          {member.skills && member.skills.length > 0 && (
            <div>
              <h3 className="font-display text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2">
                Skills
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {member.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="px-2.5 py-1 rounded-md text-[11px] font-medium bg-secondary text-secondary-foreground"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Certifications */}
          {member.certifications && member.certifications.length > 0 && (
            <div>
              <h3 className="font-display text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2">
                Certifications
              </h3>
              <ul className="space-y-1">
                {member.certifications.map((cert, i) => (
                  <li
                    key={i}
                    className="text-xs text-foreground/85 leading-relaxed flex gap-2"
                  >
                    <span
                      className="shrink-0 mt-1 w-1.5 h-1.5 rounded-full"
                      style={{ backgroundColor: color }}
                    />
                    <span>{cert}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Relevant Projects */}
          {member.relevantProjects && member.relevantProjects.length > 0 && (
            <div>
              <h3 className="font-display text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2">
                Relevant Projects
              </h3>
              <ul className="space-y-1">
                {member.relevantProjects.map((proj, i) => (
                  <li
                    key={i}
                    className="text-xs text-foreground/85 leading-relaxed flex gap-2"
                  >
                    <span
                      className="shrink-0 mt-1 w-1.5 h-1.5 rounded-full"
                      style={{ backgroundColor: color }}
                    />
                    <span>{proj}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Right column: Experience timeline */}
        <div>
          <h3 className="font-display text-xs font-bold uppercase tracking-wider text-muted-foreground mb-3">
            Experience
          </h3>
          <div>
            {member.experience.map((exp, i) => (
              <TimelineItem
                key={i}
                item={exp}
                isLast={i === member.experience.length - 1}
                color={color}
              />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

/* ── Page ── */
const ResumesPage = () => (
  <div className="min-h-screen bg-background text-foreground">
    <NavBar />
    <section className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Page header */}
        <motion.div {...fadeUp} className="text-center mb-16">
          <span className="inline-block px-5 py-2 rounded-full text-sm font-semibold bg-primary/10 text-primary border border-primary/20 mb-6">
            Appendix A - Project Team
          </span>
          <h1 className="font-display text-3xl md:text-5xl font-bold mb-4">
            Team <span className="text-gradient">Resumes</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Full professional resumes for all melyn team members assigned to this engagement.
          </p>
        </motion.div>

        {/* Resume cards */}
        <div className="space-y-8">
          {team.map((member, i) => (
            <ResumeCard key={i} member={member} index={i} />
          ))}
        </div>
      </div>
    </section>
    <Footer />
  </div>
);

export default ResumesPage;
