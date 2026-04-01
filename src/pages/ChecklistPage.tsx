import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

const sections = [
  {
    title: "Phase 1  -  Project Initiation and Alignment",
    items: [
      "Project Charter",
      "Engagement Plan",
      "Work Breakdown Structure",
      "PowerPoint Presentation (PPT)",
      "Band Council Resolution (BCR)",
      "Briefing Note",

    ],
  },
  {
    title: "Phase 2  -  Engagement and Baseline Assessment",
    items: [
      "Stakeholder Register",
      "Community Engagement Summaries",
      "Pre-Planning Assessment Report",
      "PowerPoint Presentation (PPT)",
      "Band Council Resolution (BCR)",
      "Briefing Note",
    ],
  },
  {
    title: "Phase 3  -  Strategic Planning",
    items: [
      "Draft 5-Year Economic Development Strategic Plan",
      "Live Digital Strategy Platform",
      "PowerPoint Presentation (PPT)",
      "Band Council Resolution (BCR)",
      "Briefing Note",
    ],
  },
  {
    title: "Phase 4  -  Finalization and Close-Out",
    items: [
      "Final Plan",
      "PowerPoint Presentation (PPT)",
      "Community Communications Package",
      "Short-Form Summary Video",
      "Lessons Learned Register",
      "Project Close-Out Package",
      "BCR Endorsement",
    ],
  },
  {
    title: "Submission Requirements",
    items: [
      "Technical Proposal PDF",
      "Project Schedule (Excel)",
      "Price Proposal (Excel)",
      "Team Resumes",
      "2 Reference Projects",
    ],
  },
];

const ChecklistPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <NavBar />
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold bg-primary/10 text-primary border border-primary/20 mb-4">
              RFP Compliance
            </span>
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
              Deliverable <span className="text-gradient">Checklist</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Full compliance with Neqotkuk's RFP requirements  -  every deliverable, every phase, every submission requirement confirmed.
            </p>
          </motion.div>

          <div className="space-y-6">
            {sections.map((section, si) => (
              <motion.div
                key={si}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: si * 0.1 }}
                className="card-elevated p-7"
              >
                <h2 className="font-display text-lg font-bold mb-5 text-foreground">{section.title}</h2>
                <div className="space-y-3">
                  {section.items.map((item, ii) => (
                    <motion.div
                      key={ii}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: si * 0.1 + ii * 0.05 }}
                      className="flex items-center gap-3"
                    >
                      <CheckCircle2 className="w-5 h-5 text-[hsl(160,50%,45%)] shrink-0" />
                      <span className="text-sm text-foreground">{item}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mt-10 w-full rounded-2xl border-l-4 border-[hsl(160,50%,45%)] bg-[hsl(160,60%,94%)] p-6"
          >
            <p className="text-sm font-semibold text-foreground mb-1">✓ Full Compliance  -  {sections.reduce((acc, s) => acc + s.items.length, 0)} Deliverables Confirmed</p>
            <p className="text-sm text-muted-foreground">
              melyn's proposal meets all requirements outlined in Neqotkuk's RFP for the Economic Development Strategic Plan. All deliverables, milestones, and submission documents are accounted for.
            </p>
          </motion.div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default ChecklistPage;
