import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowLeft, ArrowRight, CheckCircle2, Compass, Users, BarChart3,
  FileEdit, Award, Monitor, Lightbulb, Shield, Zap, TreePine, Languages,
  Palette, Scale, MessageCircle, Brain, Heart, Building2, BookOpen,
  Landmark, HandshakeIcon, ClipboardList, HardDrive, Settings,
  Target, TrendingUp, Calendar, DollarSign, GraduationCap, Activity, ChevronDown,
  Search, UserCheck, PenTool, LayoutDashboard, Wrench,
} from "lucide-react";

/* ── Fade animation ── */
const fadeUp = { initial: { opacity: 0, y: 24 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true } };

/* ── Four Pillars ── */
const pillars = [
  {
    icon: TreePine, title: "Land", color: "from-emerald-500 to-green-600",
    focus: "Territory, environment, natural resources, traditional lands, housing, infrastructure",
    shapes: "Land-based priorities inform infrastructure planning, environmental stewardship, housing strategies, and resource management goals throughout the strategic framework.",
  },
  {
    icon: Languages, title: "Language", color: "from-sky-500 to-blue-600",
    focus: "Language revitalization, education, intergenerational knowledge transfer",
    shapes: "Language priorities shape education strategies, cultural programming, youth/Elder engagement, and digital content development for the community platform.",
  },
  {
    icon: Palette, title: "Culture", color: "from-amber-500 to-orange-600",
    focus: "Traditions, ceremonies, arts, heritage preservation, community identity",
    shapes: "Cultural priorities ensure the CCP respects and strengthens traditional practices, ceremonies, and community identity. All engagement is culturally grounded.",
  },
  {
    icon: Scale, title: "Governance", color: "from-violet-500 to-purple-600",
    focus: "Self-determination, administration, leadership, decision-making, transparency",
    shapes: "Governance priorities drive organizational development, accountability structures, melyn Brain Platform configuration, and the P&ID capacity development objectives.",
  },
];

/* ── Core Principles ── */
const principles = [
  { icon: Lightbulb, title: "Innovation", desc: "We pair traditional community-led engagement with cutting-edge technology  -  including the melyn Brain Platform  -  to modernize planning while honouring tradition. AI-powered analytics, real-time dashboards, and automated reporting ensure your plan is a living system that grows with your community." },
  { icon: Shield, title: "Integrity", desc: "We approach every engagement with transparency, cultural humility, and a deep commitment to community ownership. The plan belongs to the Nation  -  we are the facilitators, not the authors. Traditional governance, Elder guidance, and community voice lead the process." },
  { icon: Zap, title: "Impact", desc: "We measure success not by the plan itself, but by what it achieves. Every goal, milestone, and action item is tracked through the melyn Brain Platform to ensure the CCP drives real, measurable change  -  bridging traditional priorities with modern accountability systems." },
];

/* ── 10 Core Functions of Government ── */
const coreFunctions = [
  { num: 1, title: "Leadership", desc: "Strategic visioning, priority setting, and decision-pipeline configuration.", icon: Landmark },
  { num: 2, title: "Membership", desc: "Member engagement, community profiles, and on/off-reserve demographics.", icon: Users },
  { num: 3, title: "Lawmaking", desc: "Bylaw review, governance workflows, and policy development priorities.", icon: BookOpen },
  { num: 4, title: "Community", desc: "Visioning sessions, Elder circles, youth engagement, and transparency.", icon: Heart },
  { num: 5, title: "External Relations", desc: "Funder mapping, partnership opportunities, and stakeholder coordination.", icon: HandshakeIcon },
  { num: 6, title: "Planning & Risk", desc: "Strategic framework, gap analysis, risk identification, and roadmap.", icon: Target },
  { num: 7, title: "Financial", desc: "Budget tracking, automated funder reporting, and accountability systems.", icon: DollarSign },
  { num: 8, title: "Human Resources", desc: "Staff capacity assessment, training needs, and capacity building.", icon: GraduationCap },
  { num: 9, title: "Info Management", desc: "melyn Brain Platform deployment across all 8 governance modules.", icon: HardDrive },
  { num: 10, title: "Administration", desc: "Departmental assessment, workflow digitization, and improvement.", icon: Settings },
];

/* ── Expected Outcomes ── */
const outcomes = [
  { outcome: "Comprehensive Community Plan Document", criteria: "Final CCP in print-ready and digital formats, validated by community and Chief & Council, covering all sectors with short/medium/long-term goals." },
  { outcome: "Community Engagement Completion", criteria: "'What We Heard' report documenting input from minimum 4 engagement sessions, Elder circles, youth sessions, and household surveys. Off-reserve participation included." },
  { outcome: "Departmental Gap Analysis", criteria: "Gap Analysis Report covering all active departments with service delivery, capacity, funding, technology, and coordination gaps identified and prioritized." },
  { outcome: "Strategic Framework", criteria: "Vision, Mission, and Guiding Principles ratified by Chief & Council. Sector-specific strategic goals with measurable indicators for all community sectors." },
  { outcome: "Interdepartmental Synergy Strategy", criteria: "Implementation roadmaps for every department, cross-departmental joint initiatives, resource-sharing map, and consolidated CCP Implementation Atlas." },
  { outcome: "Year 1 Action Plan & Quick Wins", criteria: "Month-by-month action plan with 5–10 quick wins, milestone checkpoints, budget alignment, and Council adoption for immediate implementation." },
  { outcome: "Governance Capacity Development", criteria: "Demonstrated improvement across 10 core functions  -  departments digitized, resolution tracking implemented, grant matching activated, staff trained." },
  { outcome: "Staff Capacity Building", criteria: "Training completed for administration staff, department leads, governance support staff, and designated platform champions. Documentation delivered." },
  { outcome: "Reporting Framework & Sustainability", criteria: "Quarterly and annual reporting templates, CCP Maintenance Guide, community feedback loop, and transition plan for Nation-led CCP management." },
];

/* ── Phase 1 Steps ── */
const phase1Steps = [
  {
    step: "1.1",
    icon: Compass,
    title: "Project Initiation & Governance Setup",
    timeline: "Weeks 1–2 (April 2026)",
    objective: "Establish the project governance structure, confirm scope and timelines, and prepare all logistics for community engagement.",
    activities: [
      "Kick-off meeting with Chief & Council to present the CCP scope, two-phase methodology, timelines, roles, and expectations",
      "Establishment of a CCP Steering Committee comprising Chief & Council representation, senior administration, and designated community champions",
      "Development and ratification of a Community Engagement Plan detailing session types, target participant groups, accessibility accommodations, and cultural protocols",
      "Confirmation of Nation-designated Project Coordinator to serve as primary liaison between melyn and the community",
      "Logistics coordination: booking community spaces, confirming Elder protocols and honoraria, arranging childcare and transportation support",
      "Development of communication and outreach materials (posters, social media, radio spots, community newsletter content)",
    ],
    deliverables: ["Signed CCP Terms of Reference", "CCP Steering Committee established with confirmed membership", "Community Engagement Plan document", "Communication and outreach materials package", "Baseline document review summary"],
  },
  {
    step: "1.2",
    icon: Search,
    title: "Baseline Scan & Community Profile",
    timeline: "Weeks 2–5 (April–May 2026)",
    objective: "Complete a comprehensive baseline scan of the Nation's current state across all departments, programs, and governance functions.",
    activities: [
      "Department-by-department baseline assessment covering mandate, organizational structure, staffing levels, current budget, active programs, reporting obligations, and key challenges",
      "Departments assessed: Administration, Finance, Health, Education, Housing, Infrastructure & Public Works, Economic Development, Social Services, Lands & Resources, Culture & Language",
      "Review of current service delivery models, intake processes, client tracking systems, and feedback mechanisms",
      "Assessment of reporting obligations across all funders (ISC, CMHC, FedNor, ESDC, Heritage Canada, Health Canada)",
      "Documentation of inter-departmental workflows: collaboration points, handoffs, and communication gaps",
      "Demographic and socioeconomic data compilation for comprehensive community profile (on-reserve and off-reserve)",
      "Asset mapping of community infrastructure, programs, services, natural resources, and existing partnerships",
    ],
    deliverables: ["Departmental baseline summaries (one per department)", "Community Profile document (demographics, socioeconomic data, asset map)", "Existing systems and technology inventory", "Funder obligations and reporting requirements summary"],
  },
  {
    step: "1.3",
    icon: Users,
    title: "Community Engagement & Visioning Sessions",
    timeline: "Weeks 4–12 (May–July 2026)",
    objective: "Gather the authentic voice of the community through inclusive, culturally grounded engagement to identify needs, aspirations, and priorities across all four pillars.",
    sections: [
      {
        subtitle: "Community Visioning Sessions",
        items: [
          "Minimum four (4) open community visioning sessions facilitated in culturally appropriate formats",
          "Sessions at varied times (daytime, evening, weekend) for maximum participation",
          "Interactive facilitation: talking circles, visual mapping, small group discussions, individual reflection",
          "Each session explores strengths, challenges, aspirations through the four pillars",
          "Real-time documentation with visual summaries for participant validation",
        ],
      },
      {
        subtitle: "Elder & Knowledge Keeper Circles",
        items: [
          "Dedicated Elder circles in respectful, unhurried format honouring traditional knowledge protocols",
          "Focus on oral history, traditional governance, land-based knowledge, language preservation, cultural teachings",
          "Documentation with OCAP® consent and data sovereignty protocols",
          "Elder input prioritized as foundational to the cultural framework",
        ],
      },
      {
        subtitle: "Youth Engagement Sessions",
        items: [
          "Creative, interactive approaches to capture aspirations and ideas of the next generation",
          "Digital engagement tools, art-based expression, group workshops, peer-led discussions",
          "Focus areas: education, employment, culture, recreation, housing, language, mental health",
          "Youth input integrated as a priority lens throughout the CCP",
        ],
      },
      {
        subtitle: "Off-Reserve & Household Engagement",
        items: [
          "Virtual engagement sessions (video conferencing) for off-reserve members",
          "Online survey distribution to capture off-reserve priorities and community connection",
          "Door-to-door household survey  -  band members and youth hired as community surveyors",
          "Accessible survey formats (large print, oral administration, translation support)",
          "Statistical analysis of survey results with demographic cross-tabulation",
        ],
      },
    ],
    deliverables: ["Community Visioning Session summaries (minimum 4 sessions)", "Elder & Knowledge Keeper Circle summary", "Youth Engagement report", "Off-Reserve Member Engagement report", "Household Survey results and statistical summary"],
  },
  {
    step: "1.4",
    icon: ClipboardList,
    title: "Gap Analysis & Synergy Identification",
    timeline: "Weeks 10–16 (June–August 2026)",
    objective: "Analyze the gap between community needs (from engagement) and current capacity (from baseline scan) across five dimensions, and identify cross-project synergies.",
    sections: [
      {
        subtitle: "Five-Dimension Gap Analysis",
        items: [
          "Service Delivery Gaps  -  where community needs are not being met by current programs or infrastructure",
          "Capacity Gaps  -  staffing levels, training, expertise shortfalls; succession planning and knowledge transfer risks",
          "Funding Gaps  -  where revenue doesn't cover identified needs; unfunded mandates and under-funded programs",
          "Data & Technology Gaps  -  insufficient information management, digital tools, and reporting systems",
          "Coordination Gaps  -  departmental silos preventing collaboration and aligned service delivery",
        ],
      },
      {
        subtitle: "Cross-Project Synergy Analysis",
        items: [
          "Analysis of all active projects (LEDSP, CCSF, CORP, CHRT-41, GMF, ILP, MARP, CIP, PID, FGF, MAP, EMAP) for overlaps and coordination",
          "Resource optimization: shared staffing, joint procurement, multi-use infrastructure, consolidated reporting",
          "Funding alignment: mapping upcoming opportunities to identified gaps for proactive grant strategy",
          "Partnership mapping with neighbouring Nations, tribal council, provincial/federal agencies, and private sector",
        ],
      },
    ],
    deliverables: ["Gap Analysis Report (organized by department and pillar, with severity ratings)", "Cross-Project Synergy Matrix", "Funding Alignment & Gap Map", "Prioritized recommendations for addressing identified gaps"],
  },
  {
    step: "1.5",
    icon: BarChart3,
    title: "Engagement Summary, Priority Themes & Draft Strategic Framework",
    timeline: "Weeks 14–20 (July–August 2026)",
    objective: "Synthesize all engagement and assessment findings into validated priority themes and produce a draft strategic framework with vision, mission, sector goals, and priority ranking.",
    sections: [
      {
        subtitle: "'What We Heard' Report",
        items: [
          "Comprehensive synthesis of all engagement findings organized by four pillars and community sectors",
          "Priority mapping showing most cited community needs, aspirations, and concerns",
          "Thematic analysis identifying cross-cutting themes and areas of strong community consensus",
          "Visual data presentations including charts, infographics, and priority heat maps",
          "Community validation session: draft report presented back for review and confirmation",
        ],
      },
      {
        subtitle: "Priority Themes & Ranking",
        items: [
          "Consolidation of engagement input, gap analysis, and baseline data into validated priority themes",
          "Priority ranking using: urgency, community impact, feasibility, cultural significance, available funding",
          "Chief & Council strategic prioritization workshop to validate and refine",
          "Classification into short-term (1–2 years), medium-term (3–5 years), and long-term (5–20 years) horizons",
        ],
      },
      {
        subtitle: "Draft Strategic Framework",
        items: [
          "Collaborative development of Vision Statement rooted in community input and cultural values",
          "Mission Statement articulating how the Nation will achieve its vision",
          "Guiding Principles drawn from the four pillars and the three melyn principles",
          "Sector-specific strategic goals for Governance, Economic Dev, Health, Education, Housing, Infrastructure, Culture & Language, Lands, Social Services, Youth & Recreation",
          "Draft accountability framework: reporting cadence, decision-making protocols, KPIs",
        ],
      },
    ],
    deliverables: ["'What We Heard' Report (print-ready and digital)", "Community validation session summary", "Validated Priority Themes document", "Draft Strategic Framework (Vision, Mission, Guiding Principles, Sector Goals, Priority Ranking, Accountability Framework)"],
  },
];

/* ── Phase 2 Steps ── */
const phase2Steps = [
  {
    step: "2.1",
    icon: MessageCircle,
    title: "Community Feedback & CCP Validation",
    timeline: "Weeks 1–4 (September 2026)",
    objective: "Present the draft strategic framework from Phase 1 back to the community for comprehensive feedback, refinement, and validation before finalization.",
    activities: [
      "Community feedback sessions presenting the draft strategic framework, priority themes, and sector goals",
      "Targeted sessions with Elders, youth, department leads, and off-reserve members to validate their input was accurately reflected",
      "Chief & Council working session to review, refine, and confirm strategic direction and priority ranking",
      "CCP Steering Committee review to validate completeness and accuracy of the draft framework",
      "Incorporation of all feedback into the final CCP framework, documenting changes and rationale",
      "Final validation: community confirmation that the plan reflects the authentic voice of the Nation",
    ],
    deliverables: ["Community feedback session summaries", "Revised strategic framework incorporating all feedback", "Chief & Council confirmation of strategic direction"],
  },
  {
    step: "2.2",
    icon: FileEdit,
    title: "CCP Finalization & Publication",
    timeline: "Weeks 4–10 (October–November 2026)",
    objective: "Produce the final, professionally formatted CCP document, obtain Council adoption, and publish for community and funder distribution.",
    activities: [
      "Final CCP document incorporating engagement findings, baseline scan, gap analysis, strategic framework, and action plans",
      "Document sections: Community Profile, 'What We Heard' Summary, Gap Analysis, Vision/Mission, Sector Goals (with KPIs), Priority Ranking, Year 1 Action Plan, Years 2–5 Plan, Years 5–20 Vision, Accountability Framework",
      "Professional formatting, design, and layout for polished, print-ready document",
      "Executive Summary version for community distribution and funder communication",
      "Chief & Council formal review and adoption/ratification of the CCP (BCR or motion)",
      "Publication in print format for community distribution and digital format for online access",
      "Delivery of CCP document to ISC as a P&ID project deliverable",
    ],
    deliverables: ["Final CCP document (print-ready and digital)", "CCP Executive Summary", "Chief & Council ratification record (BCR or motion)", "Published CCP (print copies and online)"],
  },
  {
    step: "2.3",
    icon: UserCheck,
    title: "Goal Owners, KPIs & Accountability Assignment",
    timeline: "Weeks 8–12 (November–December 2026)",
    objective: "Assign clear ownership for every CCP goal, define measurable KPIs, and establish the accountability structures that will drive implementation.",
    activities: [
      "Formal assignment of a named Goal Owner for each strategic goal  -  a department lead, committee, or designated individual",
      "Development of Key Performance Indicators (KPIs) for each sector and goal, with clear measurement criteria and data sources",
      "Creation of goal scorecards linking each goal to owner, KPIs, milestones, timelines, funding sources, and reporting schedule",
      "Reporting cadence confirmed: quarterly departmental updates, semi-annual Council reviews, annual community report",
      "Decision-making protocols documented: priority adjustment, resource reallocation, emerging opportunity evaluation",
      "Resource allocation matrix mapping staff time, budget, and partnerships to each Year 1 action item",
      "Goal owner orientation sessions to ensure each owner understands responsibilities and platform usage",
    ],
    deliverables: ["Goal Owner assignments (all sectors)", "KPI definitions and scorecards (all goals)", "Reporting cadence and decision-making protocols document", "Resource allocation matrix"],
  },
  {
    step: "2.4",
    icon: Building2,
    title: "Interdepartmental Synergy Strategy",
    timeline: "Weeks 10–18 (November 2026–January 2027)",
    objective: "Break down departmental silos by identifying shared goals, designing joint initiatives, and building coordination protocols that maximize the CCP's impact across the entire organization.",
    sections: [
      {
        subtitle: "Department-by-Department Planning Sessions",
        items: [
          "Facilitated working sessions with each department to identify department-level priorities drawn from the CCP",
          "For each department: review CCP goals that intersect their mandate, identify gaps, and define 3–5 priority initiatives for Year 1",
          "Cross-departmental dependency mapping to identify shared goals, resource requirements, and coordination needs",
          "Elder and community input integration: ensure departmental plans reflect what was heard during Phase 1 engagement",
        ],
      },
      {
        subtitle: "Initiative Planning & Resource Mapping",
        items: [
          "For each priority initiative: define scope, timeline, resource requirements, estimated budget, and responsible lead",
          "Map each initiative to its funding source(s)  -  P&ID, own-source revenue, third-party grants, or unfunded",
          "Identify capacity gaps: staffing, training, equipment, or partnerships needed to deliver on each initiative",
          "Risk assessment for each initiative: barriers, dependencies, seasonal considerations, and mitigation strategies",
        ],
      },
      {
        subtitle: "Interdepartmental Synergy Strategy",
        items: [
          "Identify shared goals and overlapping initiatives across departments for greater combined impact",
          "Design joint initiative frameworks: shared budgets, co-ownership models, and coordinated timelines",
          "Map resource-sharing opportunities: staff, equipment, community space, and funding leveraged across departments",
        ],
      },
      {
        subtitle: "Departmental Roadmap Documents",
        items: [
          "Written implementation roadmap for each department: vision, Year 1 priorities, initiative details, resource needs, and success measures",
          "Visual timeline showing milestones across the 12-month implementation horizon",
          "Interdepartmental synergies highlighted within each roadmap",
          "Roadmaps consolidated into a single CCP Implementation Atlas as a companion document",
        ],
      },
    ],
    deliverables: ["Departmental Implementation Roadmap for each department", "Interdepartmental Synergy Strategy (shared goals, joint initiatives, resource-sharing map)", "Resource and funding gap analysis", "CCP Implementation Atlas (consolidated companion document)"],
  },
  {
    step: "2.5",
    icon: Wrench,
    title: "Year 1 Action Plan & Quick Wins",
    timeline: "Weeks 16–22 (January–February 2027)",
    objective: "Develop a concrete, month-by-month Year 1 Action Plan that identifies quick wins to build early momentum and lays out the sequencing for longer-term initiatives.",
    sections: [
      {
        subtitle: "Quick Win Identification",
        items: [
          "Identify 5–10 quick wins  -  initiatives that can be launched or completed within the first 90 days with existing resources",
          "Quick wins selected based on: community visibility, low resource requirement, high community impact, and alignment with Phase 1 priorities",
          "Each quick win assigned an owner, timeline, and simple success measure",
        ],
      },
      {
        subtitle: "Year 1 Master Action Plan",
        items: [
          "Month-by-month action plan consolidating all departmental initiatives into a single, sequenced implementation schedule",
          "Milestone markers at 90-day, 6-month, and 12-month checkpoints for Council review",
          "Budget alignment: Year 1 expenditures mapped against available funding",
          "Capacity building actions embedded: training, hiring, and partnership development sequenced alongside initiative delivery",
        ],
      },
      {
        subtitle: "Council Presentation & Adoption",
        items: [
          "Present the Year 1 Action Plan to Chief & Council for review, discussion, and formal adoption",
          "Council working session to confirm priorities, adjust sequencing, and endorse quick wins",
          "Action Plan formatted for public sharing  -  community-facing summary for transparency and accountability",
        ],
      },
    ],
    deliverables: ["Year 1 Action Plan (month-by-month)", "Quick Wins package (5–10 initiatives with owners and timelines)", "Council adoption of the Year 1 Action Plan", "Community-facing Action Plan summary"],
  },
  {
    step: "2.6",
    icon: Activity,
    title: "CCP Reporting Framework & Sustainability Plan",
    timeline: "Weeks 20–26 (February 2027 and ongoing)",
    objective: "Establish a sustainable reporting and review cycle that keeps the CCP alive as the Nation's guiding governance document  -  not a shelf document.",
    sections: [
      {
        subtitle: "Reporting Cycle Design",
        items: [
          "Design a quarterly reporting template: what gets measured, who reports, how progress is communicated to Council and community",
          "Annual CCP review process: schedule, format, and criteria for assessing progress and adjusting priorities",
          "P&ID annual report template: activities, expenditures, outcomes, and deliverables documented for ISC reporting requirements",
          "Community accountability reporting: format and distribution plan for annual public CCP progress summary",
        ],
      },
      {
        subtitle: "Sustainability & Transition Plan",
        items: [
          "Document governance roles: who owns the CCP process going forward (CCP Coordinator, Department Leads, Council champion)",
          "Create a CCP Maintenance Guide: how to update goals, add initiatives, adjust timelines, and incorporate new funding opportunities",
          "Establish a community feedback loop: annual community check-in sessions to revisit priorities and validate direction",
          "Transition plan: gradual handoff of CCP coordination to Nation staff with melyn advisory support as needed",
        ],
      },
    ],
    deliverables: ["Quarterly reporting template", "Annual CCP review process guide", "P&ID annual report template", "CCP Maintenance Guide", "Community feedback loop design", "Sustainability & transition plan"],
  },
];

/* ── Phase 1 Performance Indicators ── */
const phase1Indicators = [
  { indicator: "Engagement sessions completed", measurement: "Minimum 4 community visioning sessions, Elder circles, youth sessions, off-reserve sessions" },
  { indicator: "Survey response rate", measurement: "Household survey completion rate tracked and reported" },
  { indicator: "Engagement summary delivered", measurement: "'What We Heard' report delivered in print and digital formats" },
  { indicator: "Priority themes validated", measurement: "Chief & Council workshop completed; priority themes confirmed" },
  { indicator: "Draft strategic framework produced", measurement: "Draft framework delivered and reviewed by Steering Committee" },
];

/* ── Phase 2 Performance Indicators ── */
const phase2Indicators = [
  { indicator: "Council adoption", measurement: "CCP formally adopted by Chief & Council (BCR or motion)" },
  { indicator: "Goal owners named", measurement: "Named owner assigned for each CCP strategic goal across all sectors" },
  { indicator: "Departmental roadmaps", measurement: "Written implementation roadmap produced for every department" },
  { indicator: "Year 1 Action Plan adopted", measurement: "Month-by-month action plan with quick wins endorsed by Council" },
  { indicator: "Reporting cycle established", measurement: "Quarterly and annual reporting templates in place with assigned owners" },
];

/* ── Budget Summary ── */
const budgetSummary = [
  { phase: "Phase 1: Planning & Community Engagement", timeline: "Apr 1 – Aug 31, 2026", hours: "375", budget: "$60,000" },
  { phase: "Phase 2: Implementation & Capacity Building", timeline: "Sep 1, 2026 – Feb 28, 2027", hours: "266", budget: "$60,000" },
];

const phase1BudgetSteps = [
  { step: "1.1", label: "Project Initiation & Governance Setup", hours: "25", cost: "$5,150", roles: [
    { role: "Principal", hrs: 3, rate: 350, cost: 1050 },
    { role: "Senior Consultant", hrs: 8, rate: 250, cost: 2000 },
    { role: "Business Analyst", hrs: 14, rate: 150, cost: 2100 },
  ]},
  { step: "1.2", label: "Baseline Scan & Community Profile", hours: "46", cost: "$9,700", roles: [
    { role: "Senior Consultant", hrs: 28, rate: 250, cost: 7000 },
    { role: "Business Analyst", hrs: 18, rate: 150, cost: 2700 },
  ]},
  { step: "1.3", label: "Community Engagement & Visioning", hours: "198", cost: "$16,800", roles: [
    { role: "Engagement", hrs: 32, rate: 250, cost: 8000 },
    { role: "Engagement (Off-Reserve)", hrs: 4, rate: 250, cost: 1000 },
    { role: "Community Surveyors", hrs: 150, rate: 20, cost: 3000 },
    { role: "Prizes & Incentives", hrs: null, rate: null, cost: 3000 },
    { role: "Business Analyst", hrs: 12, rate: 150, cost: 1800 },
  ]},
  { step: "1.4", label: "Gap Analysis & Synergy Identification", hours: "40", cost: "$8,800", roles: [
    { role: "Senior Consultant", hrs: 28, rate: 250, cost: 7000 },
    { role: "Business Analyst", hrs: 12, rate: 150, cost: 1800 },
  ]},
  { step: "1.5", label: "Engagement Summary & Draft Framework", hours: "48", cost: "$11,200", roles: [
    { role: "Senior Consultant", hrs: 20, rate: 250, cost: 5000 },
    { role: "Senior Consultant (Framework)", hrs: 12, rate: 250, cost: 3000 },
    { role: "Principal", hrs: 4, rate: 350, cost: 1400 },
    { role: "Business Analyst", hrs: 12, rate: 150, cost: 1800 },
  ]},
  { step: " - ", label: "Project Management & Travel", hours: "18", cost: "$8,350", roles: [
    { role: "Principal", hrs: 4, rate: 350, cost: 1400 },
    { role: "Business Analyst", hrs: 14, rate: 150, cost: 2100 },
    { role: "Travel", hrs: null, rate: null, cost: 4850 },
  ]},
];

const phase2BudgetSteps = [
  { step: "2.1", label: "Community Feedback & CCP Validation", hours: "27", cost: "$6,250", roles: [
    { role: "Principal", hrs: 3, rate: 350, cost: 1050 },
    { role: "Senior Consultant", hrs: 16, rate: 250, cost: 4000 },
    { role: "Business Analyst", hrs: 8, rate: 150, cost: 1200 },
  ]},
  { step: "2.2", label: "CCP Finalization & Publication", hours: "40", cost: "$8,400", roles: [
    { role: "Senior Consultant", hrs: 24, rate: 250, cost: 6000 },
    { role: "Business Analyst", hrs: 16, rate: 150, cost: 2400 },
  ]},
  { step: "2.3", label: "Goal Owners, KPIs & Accountability", hours: "26", cost: "$5,500", roles: [
    { role: "Senior Consultant", hrs: 16, rate: 250, cost: 4000 },
    { role: "Business Analyst", hrs: 10, rate: 150, cost: 1500 },
  ]},
  { step: "2.4", label: "Interdepartmental Synergy Strategy", hours: "76", cost: "$16,400", roles: [
    { role: "Principal", hrs: 4, rate: 350, cost: 1400 },
    { role: "Senior Consultant", hrs: 36, rate: 250, cost: 9000 },
    { role: "Engagement", hrs: 6, rate: 250, cost: 1500 },
    { role: "Business Analyst", hrs: 30, rate: 150, cost: 4500 },
  ]},
  { step: "2.5", label: "Year 1 Action Plan & Quick Wins", hours: "41", cost: "$9,150", roles: [
    { role: "Principal", hrs: 3, rate: 350, cost: 1050 },
    { role: "Senior Consultant", hrs: 24, rate: 250, cost: 6000 },
    { role: "Business Analyst", hrs: 14, rate: 150, cost: 2100 },
  ]},
  { step: "2.6", label: "CCP Reporting Framework & Sustainability", hours: "38", cost: "$7,300", roles: [
    { role: "Senior Consultant", hrs: 16, rate: 250, cost: 4000 },
    { role: "Business Analyst", hrs: 22, rate: 150, cost: 3300 },
  ]},
  { step: " - ", label: "Project Management & Travel", hours: "18", cost: "$7,000", roles: [
    { role: "Principal", hrs: 4, rate: 350, cost: 1400 },
    { role: "Business Analyst", hrs: 14, rate: 150, cost: 2100 },
    { role: "Travel", hrs: null, rate: null, cost: 3500 },
  ]},
];

const roleBreakdown = [
  { role: "Principal", rate: "$350/hr", ph1hrs: "11", ph1: "$3,850", ph2hrs: "14", ph2: "$4,900", totalHrs: "25", total: "$8,750" },
  { role: "Senior Consultant", rate: "$250/hr", ph1hrs: "96", ph1: "$24,000", ph2hrs: "132", ph2: "$33,000", totalHrs: "228", total: "$57,000" },
  { role: "Engagement", rate: "$250/hr", ph1hrs: "36", ph1: "$9,000", ph2hrs: "6", ph2: "$1,500", totalHrs: "42", total: "$10,500" },
  { role: "Business Analyst", rate: "$150/hr", ph1hrs: "82", ph1: "$12,300", ph2hrs: "114", ph2: "$17,100", totalHrs: "196", total: "$29,400" },
  { role: "Community Surveyors", rate: "$20/hr", ph1hrs: "150", ph1: "$3,000", ph2hrs: " - ", ph2: " - ", totalHrs: "150", total: "$3,000" },
  { role: "Prizes & Incentives", rate: " - ", ph1hrs: " - ", ph1: "$3,000", ph2hrs: " - ", ph2: " - ", totalHrs: " - ", total: "$3,000" },
  { role: "Travel", rate: " - ", ph1hrs: " - ", ph1: "$4,850", ph2hrs: " - ", ph2: "$3,500", totalHrs: " - ", total: "$8,350" },
];

/* ── Journey Steps ── */
const journeySteps = [
  { label: "Initiation &\nSetup", color: "bg-emerald-500", weeks: "Wk 1–2" },
  { label: "Baseline\nScan", color: "bg-teal-500", weeks: "Wk 2–5" },
  { label: "Engagement &\nVisioning", color: "bg-sky-500", weeks: "Wk 4–12" },
  { label: "Gap Analysis\n& Synergies", color: "bg-violet-500", weeks: "Wk 10–16" },
  { label: "Summary &\nFramework", color: "bg-amber-500", weeks: "Wk 14–20" },
  { label: "Feedback &\nValidation", color: "bg-orange-500", weeks: "Ph2 Wk 1–4" },
  { label: "CCP Final\n& Publish", color: "bg-rose-500", weeks: "Ph2 Wk 4–10" },
  { label: "KPIs &\nOwnership", color: "bg-pink-500", weeks: "Ph2 Wk 8–12" },
  { label: "Synergy\nStrategy", color: "bg-purple-500", weeks: "Ph2 Wk 10–18" },
  { label: "Action Plan\n& Quick Wins", color: "bg-indigo-500", weeks: "Ph2 Wk 16–22" },
  { label: "Reporting &\nSustainability", color: "bg-primary", weeks: "Ph2 Wk 20–26" },
];

/* ── Benefits ── */
const benefits = [
  { icon: Heart, text: "Community-Owned Vision: A comprehensive plan built by and for the community, grounded in the four pillars of Land, Language, Culture & Governance." },
  { icon: Users, text: "Inclusive Engagement: Every segment  -  Elders, youth, families, off-reserve members, staff & leadership  -  has a meaningful opportunity to shape the plan." },
  { icon: ClipboardList, text: "Deep Gap Analysis: Thorough understanding of where the community stands today vs. where it wants to be, with clear strategies across all departments." },
  { icon: Building2, text: "Cross-Departmental Synergies: Breaking down silos to leverage connections between existing projects for coordinated, efficient delivery." },
  { icon: Monitor, text: "Living Implementation: The melyn Brain Platform ensures the CCP doesn't sit on a shelf  -  every goal is actively tracked, managed & reported on." },
  { icon: Shield, text: "Data Sovereignty: All community planning data under Nation ownership and control, aligned with OCAP® principles." },
  { icon: DollarSign, text: "Funding Readiness: A completed CCP strengthens all future funding applications by demonstrating strategic planning capacity and community-driven priorities." },
  { icon: Target, text: "Governance Capacity: Measurable improvement across all 10 core functions of government as required by the P&ID Program." },
  { icon: GraduationCap, text: "Internal Capacity: Training, Platform Champions, and comprehensive user guides ensure the Nation can independently manage the platform beyond the project period." },
  { icon: Calendar, text: "Generational Planning: Short, medium & long-term horizons serving immediate needs and future aspirations for the next seven generations." },
];

/* ── Eligible Expenditure Categories ── */
const expenditures = [
  { title: "Professional Services", desc: "CCP facilitation, strategic planning, community engagement, departmental assessment, gap analysis, and implementation support." },
  { title: "Salaries & Wages", desc: "Nation-led project coordinator for engagement logistics and CCP implementation coordination." },
  { title: "Community Information", desc: "Visioning sessions, Elder circles, youth engagement, surveys, 'What We Heard' reporting, community validation and launch sessions." },
  { title: "Training & Tuition", desc: "Staff, department lead, and leadership training programs for CCP implementation and governance capacity." },
  { title: "Travel & Accommodation", desc: "Travel for on-site engagement sessions, departmental assessments, workshops, and community reporting." },
  { title: "Communications", desc: "Community notifications, engagement materials, survey distribution, and CCP reporting documentation." },
];

/* ── Payment Schedule ── */
const payments = [
  { pct: "$60,000", label: "Phase 1", milestone: "Foundation, Engagement & Draft Framework  -  April to August 2026" },
  { pct: "$60,000", label: "Phase 2", milestone: "Finalization, Implementation & Accountability  -  September 2026 to February 2027" },
];

/* ── Helper to render a step ── */
const StepCard = ({ step, isPhase2 }: { step: typeof phase1Steps[0] | typeof phase2Steps[0]; isPhase2?: boolean }) => {
  const hasSections = "sections" in step && step.sections;
  const hasActivities = "activities" in step && step.activities;
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="flex gap-6 md:ml-0"
    >
      <div className="hidden md:flex flex-col items-center">
        <div className={`w-4 h-4 rounded-full ${isPhase2 ? "bg-[hsl(var(--coral))]" : "bg-primary"} shadow-glow shrink-0 relative z-10 mt-6`} />
      </div>
      <div className="flex-1 card-elevated p-6 md:p-8">
        <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-4">
          <div className={`w-12 h-12 rounded-xl ${isPhase2 ? "bg-[hsl(var(--coral))]/10" : "bg-primary/10"} flex items-center justify-center shrink-0`}>
            <step.icon className={`w-6 h-6 ${isPhase2 ? "text-[hsl(var(--coral))]" : "text-primary"}`} />
          </div>
          <div>
            <h3 className="font-display text-lg font-bold">Step {step.step}: {step.title}</h3>
            <div className="flex gap-2 mt-1">
              <span className={`text-xs px-2 py-0.5 rounded-full ${isPhase2 ? "bg-[hsl(var(--coral))]/10 text-[hsl(var(--coral))]" : "bg-primary/10 text-primary"} font-semibold`}>{step.step.startsWith("1") ? "Phase 1" : "Phase 2"}</span>
              <span className="text-xs px-2 py-0.5 rounded-full bg-muted text-muted-foreground font-medium">{step.timeline}</span>
            </div>
          </div>
        </div>
        <p className="text-sm text-muted-foreground mb-5 leading-relaxed border-l-2 border-primary/20 pl-4 italic">
          {step.objective}
        </p>

        {hasActivities && (
          <div className="mb-4">
            <h4 className="font-display text-sm font-bold mb-2 text-foreground">Activities</h4>
            <div className="grid sm:grid-cols-2 gap-2">
              {(step as any).activities.map((item: string, ii: number) => (
                <div key={ii} className="flex items-start gap-2 text-xs text-muted-foreground">
                  <CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {hasSections && (
          <div className="space-y-5">
            {(step as any).sections.map((sec: any, si: number) => (
              <div key={si}>
                <h4 className="font-display text-sm font-bold mb-2 text-foreground">{sec.subtitle}</h4>
                <div className="grid sm:grid-cols-2 gap-2">
                  {sec.items.map((item: string, ii: number) => (
                    <div key={ii} className="flex items-start gap-2 text-xs text-muted-foreground">
                      <CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {"deliverables" in step && step.deliverables && (
          <div className="mt-5 pt-4 border-t border-border/50">
            <h4 className="font-display text-xs font-bold mb-2 text-foreground uppercase tracking-wider">Deliverables</h4>
            <div className="flex flex-wrap gap-2">
              {step.deliverables.map((d: string, di: number) => (
                <span key={di} className="inline-flex items-center gap-1.5 text-xs px-3 py-1 rounded-full bg-primary/8 text-foreground border border-primary/15 font-medium">
                  <CheckCircle2 className="w-3 h-3 text-primary" />
                  {d}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
};

/* ── Budget Step Table with expandable role details ── */

type BudgetStep = typeof phase1BudgetSteps[0];

const BudgetStepTable = ({ title, dotColor, stepColor, steps, totalLabel, totalHours, totalCost }: {
  title: string; dotColor: string; stepColor: string;
  steps: BudgetStep[]; totalLabel: string; totalHours: string; totalCost: string;
}) => {
  const [expanded, setExpanded] = useState<number | null>(null);
  return (
    <motion.div {...fadeUp} className="card-elevated p-6">
      <h3 className="font-display text-base font-bold mb-4 flex items-center gap-2">
        <span className={`inline-block w-3 h-3 rounded-full ${dotColor}`} />
        {title}
      </h3>
      <div className="overflow-x-auto">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="border-b border-border">
              <th className="text-left py-2 px-3 font-display font-bold text-xs">Step</th>
              <th className="text-left py-2 px-3 font-display font-bold text-xs">Activity</th>
              <th className="text-right py-2 px-3 font-display font-bold text-xs">Hours</th>
              <th className="text-right py-2 px-3 font-display font-bold text-xs">Cost</th>
              <th className="w-8" />
            </tr>
          </thead>
          <tbody>
            {steps.map((row, i) => (
              <React.Fragment key={i}>
                <tr
                  className="border-b border-border/50 hover:bg-primary/5 transition-colors cursor-pointer"
                  onClick={() => setExpanded(expanded === i ? null : i)}
                >
                  <td className={`py-2 px-3 text-xs font-semibold ${stepColor}`}>{row.step}</td>
                  <td className="py-2 px-3 text-xs">{row.label}</td>
                  <td className="py-2 px-3 text-xs text-right font-semibold">{row.hours}</td>
                  <td className="py-2 px-3 text-xs text-right font-bold">{row.cost}</td>
                  <td className="py-2 px-1 text-center">
                    <ChevronDown className={`w-3.5 h-3.5 text-muted-foreground transition-transform ${expanded === i ? "rotate-180" : ""}`} />
                  </td>
                </tr>
                {expanded === i && row.roles.map((r, ri) => (
                  <tr key={ri} className="bg-muted/30">
                    <td className="py-1.5 px-3" />
                    <td className="py-1.5 px-3 text-[11px] text-muted-foreground">{r.role}</td>
                    <td className="py-1.5 px-3 text-[11px] text-right text-muted-foreground whitespace-nowrap">
                      {r.hrs !== null ? `${r.hrs} × $${r.rate}` : " - "}
                    </td>
                    <td className="py-1.5 px-3 text-[11px] text-right font-medium">${r.cost.toLocaleString()}</td>
                    <td />
                  </tr>
                ))}
              </React.Fragment>
            ))}
            <tr className="border-t-2 border-border bg-primary/5">
              <td className="py-2 px-3 font-display font-bold text-xs" colSpan={2}>{totalLabel}</td>
              <td className="py-2 px-3 text-xs text-right font-bold">{totalHours}</td>
              <td className="py-2 px-3 text-xs text-right font-bold text-primary">{totalCost}</td>
              <td />
            </tr>
          </tbody>
        </table>
      </div>
    </motion.div>
  );
};

const ScopeCCP = () => (
  <div className="min-h-screen bg-background">
    {/* Nav */}
    <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
          <ArrowLeft className="w-4 h-4" /> Back to Overview
        </Link>
        <span className="text-sm font-semibold text-primary">Scope 2  -  CCP</span>
      </div>
    </nav>

    {/* ═══ HERO ═══ */}
    <section className="bg-gradient-ccp py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div {...fadeUp}>
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest bg-primary/10 text-primary border border-primary/20 mb-4">
            Scope 2  -  P&ID Aligned
          </span>
          <h1 className="font-display text-3xl md:text-5xl font-bold mb-2 text-foreground">
            Comprehensive Community Plan
          </h1>
          <p className="text-lg text-muted-foreground mb-1 max-w-2xl">
            Your Community's Calm Assistant
          </p>
          <p className="text-base text-muted-foreground mb-2 max-w-3xl">
            A two-phase governance initiative that strengthens Whitefish Lake First Nation's capacity across all 10 core functions of government  -  powered by collaboration, technology & culture.
          </p>
          <p className="text-sm text-muted-foreground mb-6 max-w-3xl">
            Funded under the Professional and Institutional Development (P&ID) Program administered by Indigenous Services Canada (ISC). Fiscal Year 2026–27.
          </p>
          <div className="flex flex-wrap gap-4">
            <div className="card-elevated inline-block px-8 py-4 rounded-2xl">
              <div className="text-sm text-muted-foreground mb-1">Total Project Value</div>
              <div className="text-3xl font-display font-bold text-gradient">$120,000</div>
              <div className="text-xs text-muted-foreground mt-1">$60,000 per phase</div>
            </div>
            <div className="card-elevated inline-block px-8 py-4 rounded-2xl">
              <div className="text-sm text-muted-foreground mb-1">Timeline</div>
              <div className="text-3xl font-display font-bold text-gradient">11 Months</div>
              <div className="text-xs text-muted-foreground mt-1">April 1, 2026 – February 28, 2027</div>
            </div>
            <div className="card-elevated inline-block px-8 py-4 rounded-2xl">
              <div className="text-sm text-muted-foreground mb-1">Grant Contribution</div>
              <div className="text-3xl font-display font-bold text-gradient">100%</div>
              <div className="text-xs text-muted-foreground mt-1">Nation Contribution: $0</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>

    {/* ═══ TWO-EYED SEEING ═══ */}
    <section className="py-16 px-6 border-b border-border">
      <div className="max-w-5xl mx-auto">
        <motion.div {...fadeUp} className="text-center mb-10">
          <h2 className="font-display text-2xl md:text-4xl font-bold mb-2">
            Two-Eyed Seeing  -  <span className="text-gradient">Etuaptmumk</span>
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            Honouring the strength of traditional, community-led planning with one eye while leveraging modern systems, data, and technology with the other. Rooted in Indigenous knowledge and community voice, supported by the tools needed to turn vision into measurable action.
          </p>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-6">
          {principles.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
              className="card-elevated p-7"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <p.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display text-lg font-bold mb-3">{p.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* ═══ FOUR PILLARS ═══ */}
    <section className="py-16 px-6 bg-muted/30 border-b border-border">
      <div className="max-w-5xl mx-auto">
        <motion.div {...fadeUp} className="text-center mb-10">
          <h2 className="font-display text-2xl md:text-4xl font-bold mb-2">
            The Four <span className="text-gradient">Pillars</span>
          </h2>
          <p className="text-muted-foreground">Woven through every phase  -  ensuring all planning decisions are grounded in cultural values and community identity.</p>
        </motion.div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {pillars.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative group"
            >
              <div className="card-interactive p-6 h-full">
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${p.color} flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform`}>
                  <p.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-display text-lg font-bold mb-2 text-center">{p.title}</h3>
                <p className="text-xs text-muted-foreground mb-3 text-center italic">{p.focus}</p>
                <p className="text-sm text-muted-foreground leading-relaxed">{p.shapes}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* ═══ P&ID  -  10 CORE FUNCTIONS ═══ */}
    <section className="py-16 px-6 border-b border-border">
      <div className="max-w-6xl mx-auto">
        <motion.div {...fadeUp} className="text-center mb-10">
          <h2 className="font-display text-2xl md:text-4xl font-bold mb-2">
            P&ID Program  -  <span className="text-gradient">10 Core Functions</span> of Government
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            Designed to lay a solid foundation of governance capacity across all 10 core functions as defined by ISC's Professional and Institutional Development Program.
          </p>
        </motion.div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {coreFunctions.map((fn, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="card-interactive p-5 group"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                  <fn.icon className="w-4 h-4 text-primary" />
                </div>
                <span className="text-xs font-bold text-primary">#{fn.num}</span>
              </div>
              <h3 className="font-display text-sm font-bold mb-2">{fn.title}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">{fn.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* ═══ CCP JOURNEY ═══ */}
    <section className="py-16 px-6 bg-muted/30 border-b border-border">
      <div className="max-w-6xl mx-auto">
        <motion.div {...fadeUp} className="text-center mb-10">
          <h2 className="font-display text-2xl md:text-4xl font-bold mb-2">
            The CCP <span className="text-gradient">Journey</span>
          </h2>
          <p className="text-muted-foreground">Eleven overlapping steps across two phases  -  each building on the last.</p>
        </motion.div>

        {/* Phase 1 label */}
        <div className="text-center mb-3">
          <span className="inline-block px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest bg-primary/10 text-primary border border-primary/20">Phase 1  -  Foundation, Engagement & Draft Framework</span>
        </div>
        <div className="relative flex flex-col md:flex-row items-center justify-between gap-4 md:gap-0 mb-8">
          <div className="hidden md:block absolute top-1/2 left-[8%] right-[8%] h-1 bg-gradient-to-r from-emerald-400 via-sky-400 to-amber-400 rounded-full -translate-y-1/2 opacity-30" />
          {journeySteps.slice(0, 5).map((step, i) => (
            <motion.div key={i} initial={{ opacity: 0, scale: 0.7 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="relative z-10 flex flex-col items-center">
              <div className={`w-14 h-14 ${step.color} rounded-full flex items-center justify-center text-white font-display font-bold text-sm shadow-lg`}>1.{i + 1}</div>
              <span className="mt-2 text-[11px] font-semibold text-center whitespace-pre-line leading-tight">{step.label}</span>
              <span className="text-[10px] text-muted-foreground mt-0.5">{step.weeks}</span>
            </motion.div>
          ))}
        </div>

        {/* Phase 2 label */}
        <div className="text-center mb-3">
          <span className="inline-block px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest bg-[hsl(var(--coral))]/10 text-[hsl(var(--coral))] border border-[hsl(var(--coral))]/20">Phase 2  -  Finalization, Implementation & Accountability</span>
        </div>
        <div className="relative flex flex-col md:flex-row items-center justify-between gap-4 md:gap-0">
          <div className="hidden md:block absolute top-1/2 left-[8%] right-[8%] h-1 bg-gradient-to-r from-orange-400 via-pink-400 to-indigo-400 rounded-full -translate-y-1/2 opacity-30" />
          {journeySteps.slice(5).map((step, i) => (
            <motion.div key={i} initial={{ opacity: 0, scale: 0.7 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="relative z-10 flex flex-col items-center">
              <div className={`w-14 h-14 ${step.color} rounded-full flex items-center justify-center text-white font-display font-bold text-sm shadow-lg`}>2.{i + 1}</div>
              <span className="mt-2 text-[11px] font-semibold text-center whitespace-pre-line leading-tight">{step.label}</span>
              <span className="text-[10px] text-muted-foreground mt-0.5">{step.weeks}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* ═══ EXPECTED OUTCOMES ═══ */}
    <section className="py-16 px-6 border-b border-border">
      <div className="max-w-5xl mx-auto">
        <motion.div {...fadeUp} className="text-center mb-10">
          <h2 className="font-display text-2xl md:text-4xl font-bold mb-2">
            Expected <span className="text-gradient">Outcomes</span> & Measurement
          </h2>
          <p className="text-muted-foreground">In accordance with P&ID Program assessment requirements.</p>
        </motion.div>
        <div className="grid md:grid-cols-2 gap-4">
          {outcomes.map((o, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }} className="card-interactive p-5">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle2 className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <h4 className="font-display text-sm font-bold mb-1">{o.outcome}</h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">{o.criteria}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* ═══ PHASE 1  -  DETAILED STEPS ═══ */}
    <section className="py-20 px-6 bg-muted/30">
      <div className="max-w-5xl mx-auto">
        <motion.div {...fadeUp} className="text-center mb-4">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest bg-primary/10 text-primary border border-primary/20 mb-4">Phase 1</span>
          <h2 className="font-display text-2xl md:text-4xl font-bold mb-2">
            Foundation, Engagement & <span className="text-gradient">Draft Framework</span>
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            April 1 – August 31, 2026 · $60,000 · 375 hours
          </p>
          <p className="text-sm text-muted-foreground max-w-3xl mx-auto mt-2">
            Launch a community-guided planning process. Establish foundation and alignment, complete a baseline scan, run surveys and engagement sessions, and produce an engagement summary, priority themes, and a draft strategic framework ready for validation.
          </p>
        </motion.div>

        <div className="relative mt-12">
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border hidden md:block" />
          <div className="space-y-10">
            {phase1Steps.map((step, i) => (
              <StepCard key={i} step={step} />
            ))}
          </div>
        </div>

        {/* Phase 1 Performance Indicators */}
        <motion.div {...fadeUp} className="mt-12">
          <h3 className="font-display text-lg font-bold mb-4 text-center">Phase 1  -  Performance Indicators</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 px-4 font-display font-bold">Indicator</th>
                  <th className="text-left py-3 px-4 font-display font-bold">Measurement</th>
                </tr>
              </thead>
              <tbody>
                {phase1Indicators.map((ind, i) => (
                  <tr key={i} className="border-b border-border/50 hover:bg-primary/5 transition-colors">
                    <td className="py-3 px-4 font-semibold text-xs">{ind.indicator}</td>
                    <td className="py-3 px-4 text-xs text-muted-foreground">{ind.measurement}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </section>

    {/* ═══ PHASE 2  -  DETAILED STEPS ═══ */}
    <section className="py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div {...fadeUp} className="text-center mb-4">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest bg-[hsl(var(--coral))]/10 text-[hsl(var(--coral))] border border-[hsl(var(--coral))]/20 mb-4">Phase 2</span>
          <h2 className="font-display text-2xl md:text-4xl font-bold mb-2">
            Finalization, Implementation & <span className="text-gradient-warm">Accountability</span>
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            September 1, 2026 – February 28, 2027 · $60,000 · 266 hours
          </p>
          <p className="text-sm text-muted-foreground max-w-3xl mx-auto mt-2">
            Convert Phase 1 insights into a complete plan for Council approval. Conduct feedback sessions, finalize the CCP, publish online and in print, assign goal owners and KPIs, set up tracking dashboards, and train staff for regular reporting.
          </p>
        </motion.div>

        <div className="relative mt-12">
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border hidden md:block" />
          <div className="space-y-10">
            {phase2Steps.map((step, i) => (
              <StepCard key={i} step={step} isPhase2 />
            ))}
          </div>
        </div>

        {/* Phase 2 Performance Indicators */}
        <motion.div {...fadeUp} className="mt-12">
          <h3 className="font-display text-lg font-bold mb-4 text-center">Phase 2  -  Performance Indicators</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 px-4 font-display font-bold">Indicator</th>
                  <th className="text-left py-3 px-4 font-display font-bold">Measurement</th>
                </tr>
              </thead>
              <tbody>
                {phase2Indicators.map((ind, i) => (
                  <tr key={i} className="border-b border-border/50 hover:bg-primary/5 transition-colors">
                    <td className="py-3 px-4 font-semibold text-xs">{ind.indicator}</td>
                    <td className="py-3 px-4 text-xs text-muted-foreground">{ind.measurement}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </section>

    {/* ═══ NATION BENEFITS ═══ */}
    <section className="py-16 px-6 border-b border-border bg-muted/30">
      <div className="max-w-5xl mx-auto">
        <motion.div {...fadeUp} className="text-center mb-10">
          <h2 className="font-display text-2xl md:text-4xl font-bold mb-2">
            Nation <span className="text-gradient">Benefits</span>
          </h2>
        </motion.div>
        <div className="grid sm:grid-cols-2 gap-4">
          {benefits.map((b, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }} className="card-interactive p-5 flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                <b.icon className="w-5 h-5 text-primary" />
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">{b.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* ═══ BUDGET SUMMARY ═══ */}
    <section className="py-16 px-6 border-b border-border">
      <div className="max-w-5xl mx-auto">
        <motion.div {...fadeUp} className="text-center mb-10">
          <h2 className="font-display text-2xl md:text-4xl font-bold mb-2">
            Combined <span className="text-gradient">Budget</span> Summary
          </h2>
        </motion.div>

        {/* Phase Summary */}
        <motion.div {...fadeUp} className="overflow-x-auto mb-10">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-3 px-4 font-display font-bold">Phase</th>
                <th className="text-left py-3 px-4 font-display font-bold">Timeline</th>
                <th className="text-right py-3 px-4 font-display font-bold">Hours</th>
                <th className="text-right py-3 px-4 font-display font-bold">Budget</th>
              </tr>
            </thead>
            <tbody>
              {budgetSummary.map((row, i) => (
                <tr key={i} className="border-b border-border/50 hover:bg-primary/5 transition-colors">
                  <td className="py-3 px-4 font-semibold text-xs">{row.phase}</td>
                  <td className="py-3 px-4 text-xs text-muted-foreground">{row.timeline}</td>
                  <td className="py-3 px-4 text-xs text-right font-semibold">{row.hours}</td>
                  <td className="py-3 px-4 text-xs text-right font-bold text-primary">{row.budget}</td>
                </tr>
              ))}
              <tr className="border-t-2 border-border bg-primary/5">
                <td className="py-3 px-4 font-display font-bold text-sm">TOTAL PROJECT</td>
                <td className="py-3 px-4 text-xs text-muted-foreground">Apr 1, 2026 – Feb 28, 2027</td>
                <td className="py-3 px-4 text-sm text-right font-bold">641</td>
                <td className="py-3 px-4 text-sm text-right font-bold text-primary">$120,000</td>
              </tr>
            </tbody>
          </table>
        </motion.div>

        {/* Phase-by-Phase Step Breakdown */}
        <div className="grid lg:grid-cols-2 gap-6 mb-10">
          <BudgetStepTable
            title="Phase 1  -  Step Breakdown"
            dotColor="bg-primary"
            stepColor="text-primary"
            steps={phase1BudgetSteps}
            totalLabel="TOTAL  -  PHASE 1"
            totalHours="375"
            totalCost="$60,000"
          />
          <BudgetStepTable
            title="Phase 2  -  Step Breakdown"
            dotColor="bg-[hsl(var(--coral))]"
            stepColor="text-[hsl(var(--coral))]"
            steps={phase2BudgetSteps}
            totalLabel="TOTAL  -  PHASE 2"
            totalHours="266"
            totalCost="$60,000"
          />
        </div>

        {/* Role Breakdown */}
        <motion.div {...fadeUp}>
          <h3 className="font-display text-lg font-bold mb-4 text-center">Phase Breakdown by Role & Hours</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 px-3 font-display font-bold text-xs">Role</th>
                  <th className="text-right py-3 px-3 font-display font-bold text-xs">Rate</th>
                  <th className="text-right py-3 px-3 font-display font-bold text-xs">Ph 1 Hrs</th>
                  <th className="text-right py-3 px-3 font-display font-bold text-xs">Ph 1 $</th>
                  <th className="text-right py-3 px-3 font-display font-bold text-xs">Ph 2 Hrs</th>
                  <th className="text-right py-3 px-3 font-display font-bold text-xs">Ph 2 $</th>
                  <th className="text-right py-3 px-3 font-display font-bold text-xs">Total Hrs</th>
                  <th className="text-right py-3 px-3 font-display font-bold text-xs">Total $</th>
                </tr>
              </thead>
              <tbody>
                {roleBreakdown.map((row, i) => (
                  <tr key={i} className="border-b border-border/50 hover:bg-primary/5 transition-colors">
                    <td className="py-2 px-3 font-semibold text-xs">{row.role}</td>
                    <td className="py-2 px-3 text-xs text-right text-muted-foreground">{row.rate}</td>
                    <td className="py-2 px-3 text-xs text-right">{row.ph1hrs}</td>
                    <td className="py-2 px-3 text-xs text-right">{row.ph1}</td>
                    <td className="py-2 px-3 text-xs text-right">{row.ph2hrs}</td>
                    <td className="py-2 px-3 text-xs text-right">{row.ph2}</td>
                    <td className="py-2 px-3 text-xs text-right font-semibold">{row.totalHrs}</td>
                    <td className="py-2 px-3 text-xs text-right font-bold text-primary">{row.total}</td>
                  </tr>
                ))}
                <tr className="border-t-2 border-border bg-primary/5">
                  <td className="py-2 px-3 font-display font-bold text-xs" colSpan={2}>TOTAL</td>
                  <td className="py-2 px-3 text-xs text-right font-bold">375</td>
                  <td className="py-2 px-3 text-xs text-right font-bold">$60,000</td>
                  <td className="py-2 px-3 text-xs text-right font-bold">266</td>
                  <td className="py-2 px-3 text-xs text-right font-bold">$60,000</td>
                  <td className="py-2 px-3 text-xs text-right font-bold">641</td>
                  <td className="py-2 px-3 text-xs text-right font-bold text-primary">$120,000</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-muted-foreground mt-2 text-center italic">* Includes non-hourly items (travel, prizes & incentives).</p>
        </motion.div>
      </div>
    </section>

    {/* ═══ ELIGIBLE EXPENDITURES ═══ */}
    <section className="py-16 px-6 bg-muted/30 border-b border-border">
      <div className="max-w-5xl mx-auto">
        <motion.div {...fadeUp} className="text-center mb-10">
          <h2 className="font-display text-2xl md:text-4xl font-bold mb-2">
            Eligible <span className="text-gradient">Expenditure</span> Categories
          </h2>
          <p className="text-muted-foreground">Includes all expenses  -  engagement, travel, facilitation & documentation. melyn Brain Platform is not included in CCP pricing.</p>
        </motion.div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {expenditures.map((e, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }} className="card-interactive p-5">
              <h4 className="font-display text-sm font-bold mb-2">{e.title}</h4>
              <p className="text-xs text-muted-foreground leading-relaxed">{e.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* ═══ PAYMENT SCHEDULE ═══ */}
    <section className="py-16 px-6 border-b border-border">
      <div className="max-w-4xl mx-auto">
        <motion.div {...fadeUp} className="text-center mb-10">
          <h2 className="font-display text-2xl md:text-4xl font-bold mb-2">
            Payment <span className="text-gradient">Schedule</span>
          </h2>
          <p className="text-muted-foreground text-sm">Payment structured across both phases as follows.</p>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
          {payments.map((p, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="card-elevated p-8 text-center flex flex-col items-center justify-center">
              <div className="text-3xl font-display font-bold text-gradient mb-1">{p.pct}</div>
              <div className="text-sm font-semibold text-foreground mb-3">{p.label}</div>
              <p className="text-xs text-muted-foreground leading-relaxed max-w-[220px]">{p.milestone}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* ═══ FUNDING NOTE ═══ */}
    <section className="py-12 px-6 border-b border-border bg-muted/30">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div {...fadeUp} className="card-elevated p-8 rounded-2xl">
          <h3 className="font-display text-xl font-bold mb-4">Funding & <span className="text-gradient">Next Steps</span></h3>
          <p className="text-muted-foreground text-sm mb-4">
            100% funded through P&ID Program  -  Nation contribution: $0. Includes melyn Brain Platform deployment with 12-month post-launch support for tracking goals, monitoring progress & continuous improvement.
          </p>
          <p className="text-xs text-muted-foreground mb-4">
            If the approved funding amount differs from the applied amount, melyn will work with the Nation to adjust the scope of work accordingly to ensure program objectives are met and delivery is not impacted.
          </p>
          <p className="font-display font-semibold text-gradient">
            Faster decisions. Clearer progress. Real-world results.
          </p>
        </motion.div>
      </div>
    </section>

    {/* ═══ NAVIGATION ═══ */}
    <section className="py-12 px-6 border-t border-border bg-muted/30">
      <div className="max-w-5xl mx-auto flex items-center justify-between">
        <Link to="/scope/brain" className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:gap-3 transition-all">
          <ArrowLeft className="w-4 h-4" /> Melyn Brain Platform
        </Link>
        <Link to="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
          Back to Overview
        </Link>
        <Link to="/scope/website" className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:gap-3 transition-all">
          Website & Digital Portal <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </section>
  </div>
);

export default ScopeCCP;
