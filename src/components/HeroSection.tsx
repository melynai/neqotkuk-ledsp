import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import melynLogo from "@/assets/melyn-logo.png";
import pibLogo from "@/assets/pib-logo.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      <div className="absolute top-20 left-10 w-72 h-72 rounded-full bg-[hsl(var(--teal)/0.08)] blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-[hsl(var(--sky)/0.07)] blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[hsl(var(--accent1)/0.1)] blur-3xl" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6"
        >
          <span className="inline-block px-5 py-2 rounded-full text-sm font-semibold bg-primary/10 text-primary border border-primary/20">
            RFP Response  -  Economic Development Strategic Plan
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-display text-4xl sm:text-5xl md:text-7xl font-bold leading-tight mb-6 text-foreground"
        >
          Economic Development
          <br />
          <span className="text-gradient">Strategic Plan</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-10"
        >
          Prepared for <span className="text-foreground font-semibold">snpink'tn (Penticton) Indian Band</span>  -  A comprehensive, community-driven 5-year Economic Development Strategic Plan delivered through a co-leadership model with PIB's Economic Development Manager.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-wrap justify-center gap-4 md:gap-6 mb-14"
        >
          {[
            { label: "Strategy", value: "$46,500", sub: "4 Months · 4 Phases" },
            { label: "Strategy Plus", value: "$106,000", sub: "4 + 8 Months (melyn Brain) · 5 Phases\nFunding up to 100% available for melyn Brain" },
            { label: "Project Start", value: "March 30", sub: null },
          ].map((stat, i) => (
            <div key={i} className="card-elevated px-6 py-4 text-center min-w-[160px]">
              <div className="text-2xl md:text-3xl font-display font-bold text-gradient">{stat.value}</div>
              <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
              {stat.sub && stat.sub.split('\n').map((line, li) => <div key={li} className="text-xs text-muted-foreground mt-1">{line}</div>)}
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="flex justify-center"
        >
          <a
            href="#overview"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-primary text-primary-foreground font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            Explore the Proposal
            <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-0 right-0 flex justify-center"
      >
        <div className="card-elevated px-6 py-2 text-sm text-muted-foreground rounded-full flex items-center gap-3">
          <img src={pibLogo} alt="snpink'tn Indian Band" className="h-8" />
          <span>×</span>
          <img src={melynLogo} alt="melyn" className="h-5" />
          <span>—  March 2026</span>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
