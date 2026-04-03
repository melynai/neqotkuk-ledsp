import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { ExternalLink } from "lucide-react";

const projectTeam = [
  {
    name: "TJ Galiardi",
    title: "CEO and Lead, Empower Services",
    badge: "Project Manager",
    badgeColor: "bg-primary/10 text-primary border-primary/20",
    bio: "Former NHL professional and Dartmouth College graduate, TJ leads melyn's economic development practice. He has personally led LEDSP-funded strategies for AOPFN LP (Feb 2026), Witchekan Lake FN, and Whitefish Lake FN #128.",
    tags: ["Project Lead", "Chief and Council Engagement", "Strategic Direction"],
  },
  {
    name: "Cherag Kapoor",
    title: "COO, melyn",
    badge: "Strategic Oversight",
    badgeColor: "bg-[hsl(var(--teal2)/0.1)] text-[hsl(var(--teal2))] border-[hsl(var(--teal2)/0.2)]",
    bio: "UBC Sauder graduate in Business Technology Management and Operations/Logistics. Provides financial modelling, feasibility analysis, and implementation framework design for the engagement.",
    tags: ["Financial Modelling", "Feasibility Analysis", "Operations"],
  },
  {
    name: "Mackenzie Kreutzer",
    title: "Team Lead, Empower Services",
    badge: "Lead Analyst",
    badgeColor: "bg-[hsl(var(--sky)/0.1)] text-[hsl(var(--sky))] border-[hsl(var(--sky)/0.2)]",
    bio: "M.Sc. Data Science and Analytics + B.Comm. Business Technology Management, University of Calgary. Day-to-day project lead alongside Neqotkuk's Economic Development team - research, engagement coordination, and all deliverables.",
    tags: ["Research", "Engagement Coordination", "Deliverables"],
  },
  {
    name: "Ramona Horseman",
    title: "Community Advisor, melyn",
    badge: "Indigenous Engagement",
    badgeColor: "bg-[hsl(var(--mint)/0.1)] text-[hsl(var(--mint))] border-[hsl(var(--mint)/0.2)]",
    bio: "Former Chief of Horselake First Nation. Leads Elders and community engagement with cultural safety, a relationship-first approach, and deep governance expertise.",
    tags: ["Elders Engagement", "Cultural Safety", "Governance"],
  },
  {
    name: "Dr. Stan Chung",
    title: "Community Advisor, melyn",
    badge: "Governance Advisor",
    badgeColor: "bg-[hsl(var(--coral)/0.1)] text-[hsl(var(--coral))] border-[hsl(var(--coral)/0.2)]",
    bio: "Ph.D. Performance Studies (UBC), M.A. English (University of Toronto). Governance and cultural context advisory for all deliverables and engagement activities.",
    tags: ["Governance", "Cultural Context", "Advisory"],
  },
  {
    name: "Deepak Balakrishnan",
    title: "Market Research and Competitive Analysis Specialist",
    badge: "Research",
    badgeColor: "bg-[hsl(var(--sky)/0.1)] text-[hsl(var(--sky))] border-[hsl(var(--sky)/0.2)]",
    bio: "B.Eng. Electrical and Electronics Engineering. Background in technical analysis and systems thinking. Leads market research, opportunity scanning, and competitive analysis for the Neqotkuk engagement.",
    tags: ["Market Research", "Competitive Analysis", "Opportunity Scanning"],
  },
  {
    name: "Ezgi Gul",
    title: "Project Coordinator",
    badge: "Coordinator",
    badgeColor: "bg-[hsl(var(--mint)/0.1)] text-[hsl(var(--mint))] border-[hsl(var(--mint)/0.2)]",
    bio: "B.Sc. Product Design (Istanbul Technical University), 7+ years in multidisciplinary project coordination. Manages deliverable tracking, stakeholder communications, and day-to-day coordination across all four phases.",
    tags: ["Project Coordination", "Deliverable Tracking", "Stakeholder Comms"],
  },
  {
    name: "Vansh Kapoor",
    title: "Analyst",
    badge: "Analyst",
    badgeColor: "bg-[hsl(var(--sky)/0.1)] text-[hsl(var(--sky))] border-[hsl(var(--sky)/0.2)]",
    bio: "B.Sc. Biology and Life Sciences (Coppin State University). Former Division I athlete. Brings analytical rigour and elite-level discipline to data analysis and research tasks.",
    tags: ["Analysis", "Research", "Data"],
  },
];

const melyTeamGroups = [
  {
    group: "Leadership",
    members: [
      {
        name: "TJ Galiardi",
        specialty: "CEO and Lead, Empower Services. Former NHL professional, Dartmouth College graduate. Leads melyn's economic development strategy practice across Canada.",
        tags: ["Project Lead", "Economic Development", "Strategic Direction"],
        highlight: true,
      },
      {
        name: "Cherag Kapoor",
        specialty: "COO, melyn. UBC Sauder, Business Technology Management and Operations/Logistics. Financial modelling, feasibility analysis, and project delivery architecture.",
        tags: ["Financial Modelling", "Feasibility Analysis", "Operations"],
        highlight: true,
      },
    ],
  },
  {
    group: "Community Champions",
    members: [
      {
        name: "Ramona Horseman",
        specialty: "Community Advisor. Former Chief of Horselake First Nation. Indigenous Engagement Advisor for the Neqotkuk project - Elders engagement, cultural safety, and community governance.",
        tags: ["Indigenous Engagement", "Elders Engagement", "Governance"],
        highlight: true,
      },
      {
        name: "Dr. Stan Chung",
        specialty: "Community Advisor. Ph.D. Performance Studies, UBC. Governance Advisor for the Neqotkuk project - governance and cultural alignment for engagement design and deliverables.",
        tags: ["Governance", "Cultural Context", "Advisory"],
        highlight: true,
      },
      {
        name: "Kelly Kask",
        specialty: "24+ years in business development and strategic partnerships. Currently VP of Business Development at Red Rock Camps and Catering. Expertise in executive relationships, negotiation, and infrastructure deal-closing.",
        tags: ["Business Development", "Partnerships", "Negotiation"],
      },
    ],
  },
  {
    group: "Empower Services",
    members: [
      {
        name: "Mackenzie Kreutzer",
        specialty: "Team Lead, Empower Services. M.Sc. Data Science and Analytics + B.Comm. Business Technology Management, University of Calgary. Lead Analyst on the Neqotkuk project - research, engagement, and all deliverables.",
        tags: ["Lead Analyst", "Research", "Deliverables"],
        highlight: true,
      },
      {
        name: "Deepak Balakrishnan",
        specialty: "Market Research and Competitive Analysis Specialist. Background in technical analysis and systems thinking. Identifies high-value market opportunities and translates them into commercially viable strategies.",
        tags: ["Market Research", "Competitive Analysis", "Strategy"],
        highlight: true,
      },
      {
        name: "Jennifer Ramos Morales",
        specialty: "Supply Chain and Logistics Specialist. Master's in International Business + B.A. in International Relations. Expert in distribution channels, logistics operations, and international trade compliance.",
        tags: ["Supply Chain", "Logistics", "International Trade"],
      },
      {
        name: "Mia (Duong Quach Tu Mai)",
        specialty: "Export Sales and Sourcing Specialist. 4+ years in seafood supply chain across Southeast Asia. Expertise in export logistics, buyer engagement, and international market access.",
        tags: ["Export Sales", "Sourcing", "International Markets"],
      },
      {
        name: "Harun Aydin",
        specialty: "Aquaculture Systems and Technical Expert. Ph.D., M.Sc., B.Sc. in Aquaponic Systems and Aquaculture Engineering (Ege University). Deep expertise in system design, regulatory compliance, and sustainable aquaculture.",
        tags: ["Aquaculture", "Systems Design", "Regulatory Compliance"],
      },
      {
        name: "Dustin Miller",
        specialty: "Senior Environmental Scientist and Regulatory Specialist. 27+ years experience. B.Sc. Environmental Studies (University of Kansas). Credentialed Envision Sustainability Professional. Environmental compliance and permitting.",
        tags: ["Environmental Science", "Regulatory", "Permitting"],
      },
      {
        name: "Tarang Kumar",
        specialty: "Capital Cost Estimator and Infrastructure Specialist. M.Sc. Construction Management (Carnegie Mellon) + B.Eng. Civil Engineering. Expertise in capital cost estimation and infrastructure project planning.",
        tags: ["Cost Estimation", "Infrastructure", "Construction Management"],
      },
      {
        name: "Mobolanle (Mog) George",
        specialty: "Architect. B.Arch. from Carleton University. Design-forward approach to infrastructure and facility planning. Ensures Nation-led projects are spatially optimized and community-appropriate.",
        tags: ["Architecture", "Facility Design", "Infrastructure Planning"],
      },
      {
        name: "Val H.",
        specialty: "Architectural Technologist and P.Eng. Licensed Professional Engineer with 20+ years in structural and architectural design. Professional licenses across multiple provinces.",
        tags: ["Structural Design", "Architectural Technology", "P.Eng"],
      },
      {
        name: "Ezgi Gul",
        specialty: "Project Coordinator. B.Sc. Product Design (Istanbul Technical University). 7+ years in multidisciplinary design and project coordination. Expert in managing complex, multi-stakeholder deliverables.",
        tags: ["Project Coordination", "Design", "Stakeholder Management"],
        highlight: true,
      },
      {
        name: "Vansh Kapoor",
        specialty: "Analyst. B.Sc. Biology and Life Sciences (Coppin State University). Former Division I athlete. Brings analytical rigour and elite-level discipline to data analysis and research tasks.",
        tags: ["Analysis", "Research", "Data"],
      },
      {
        name: "Muhammad Sultan D.",
        specialty: "GIS Analyst and WebGIS Developer. Senior Full Stack Developer specializing in geospatial data, WebGIS, remote sensing, and GeoAI. Designs interactive mapping solutions for land and resource planning.",
        tags: ["GIS", "WebGIS", "Geospatial Data"],
      },
    ],
  },
  {
    group: "melynBrain Platform",
    members: [
      {
        name: "Dhaval Shah",
        specialty: "Software Development Lead. Founder and CEO of Nyusoft Solutions. 18+ years driving software innovation, leading a team of 50+ developers across web, mobile, and AI platforms.",
        tags: ["Software Development", "Platform Architecture", "Engineering Lead"],
      },
      {
        name: "Vibudh Singh",
        specialty: "AI and Machine Learning Lead. MBA Business Analytics (UBC Sauder) + B.Tech. Electrical Engineering (MNNIT). Expert in AI model development, machine learning pipelines, and analytics infrastructure.",
        tags: ["AI/ML", "Business Analytics", "Data Science"],
      },
      {
        name: "Harshmeet Arora",
        specialty: "Application Security. B.A.Sc. Computer Engineering (UBC). Certified CISSP. Application Security Engineer at Amazon. Ensures all melyn platform infrastructure meets enterprise-grade security standards.",
        tags: ["Application Security", "CISSP", "Platform Security"],
      },
    ],
  },
];

const TeamPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <NavBar />
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold bg-primary/10 text-primary border border-primary/20 mb-4">
              Our People
            </span>
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
              The <span className="text-gradient">Team</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              The Neqotkuk project team, backed by the full depth of melyn's multidisciplinary roster.
            </p>
          </motion.div>

          {/* Neqotkuk Project Team */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-4"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="h-px flex-1 bg-border" />
              <span className="text-xs font-bold uppercase tracking-widest text-primary px-3">Neqotkuk Project Team</span>
              <div className="h-px flex-1 bg-border" />
            </div>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
            {projectTeam.map((member, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="card-elevated p-6 flex flex-col"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary font-display font-bold text-sm shrink-0">
                    {member.name.split(" ").map(n => n[0]).join("").slice(0, 2)}
                  </div>
                  <span className={`text-[10px] font-bold uppercase tracking-wide px-2 py-1 rounded-full border ${member.badgeColor}`}>
                    {member.badge}
                  </span>
                </div>
                <h3 className="font-display text-lg font-bold mb-0.5">{member.name}</h3>
                <p className="text-xs text-muted-foreground mb-3">{member.title}</p>
                <p className="text-sm text-muted-foreground leading-relaxed flex-1 mb-4">{member.bio}</p>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {member.tags.map((tag, ti) => (
                    <span key={ti} className="text-[10px] px-2 py-0.5 rounded-full bg-primary/8 text-primary font-medium border border-primary/15">
                      {tag}
                    </span>
                  ))}
                </div>
                <Link
                  to="/resumes"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:underline"
                >
                  View Full Resume <ExternalLink className="w-3 h-3" />
                </Link>
              </motion.div>
            ))}
          </div>

          {/* melyn Team */}
          {melyTeamGroups.map((group, gi) => (
            <div key={gi} className="mb-14">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-6"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-px flex-1 bg-border" />
                  <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground px-3">melyn Team - {group.group}</span>
                  <div className="h-px flex-1 bg-border" />
                </div>
              </motion.div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {group.members.map((member, mi) => (
                  <motion.div
                    key={mi}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: mi * 0.07 }}
                    className={`card-elevated p-5 flex flex-col ${member.highlight ? "border-primary/30 border" : ""}`}
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div className={`w-9 h-9 rounded-xl flex items-center justify-center font-display font-bold text-xs shrink-0 ${member.highlight ? "bg-primary/10 text-primary" : "bg-secondary text-muted-foreground"}`}>
                        {member.name.split(" ").map((n: string) => n[0]).join("").slice(0, 2).toUpperCase()}
                      </div>
                      {member.highlight && (
                        <span className="text-[9px] font-bold uppercase tracking-wide px-2 py-0.5 rounded-full bg-primary/10 text-primary border border-primary/20">
                          Project Team
                        </span>
                      )}
                    </div>
                    <h4 className="font-display text-base font-bold mb-2">{member.name}</h4>
                    <p className="text-xs text-muted-foreground leading-relaxed flex-1 mb-3">{member.specialty}</p>
                    <div className="flex flex-wrap gap-1">
                      {member.tags.map((tag: string, ti: number) => (
                        <span key={ti} className={`text-[9px] px-1.5 py-0.5 rounded-full font-medium ${member.highlight ? "bg-primary/8 text-primary border border-primary/15" : "bg-secondary text-muted-foreground"}`}>
                          {tag}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}

        </div>
      </section>
      <Footer />
    </div>
  );
};

export default TeamPage;
