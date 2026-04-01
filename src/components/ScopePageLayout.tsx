import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";

interface PhaseItem {
  icon: React.ElementType;
  title: string;
  timeline: string;
  deliverables: string[];
}

interface ScopePageLayoutProps {
  label: string;
  title: string;
  subtitle: string;
  cost: string;
  gradientClass: string;
  phases: PhaseItem[];
  benefits: string[];
  prevScope?: { label: string; link: string };
  nextScope?: { label: string; link: string };
}

const ScopePageLayout = ({
  label,
  title,
  subtitle,
  cost,
  gradientClass,
  phases,
  benefits,
  prevScope,
  nextScope,
}: ScopePageLayoutProps) => {
  return (
    <div className="min-h-screen bg-background">
      {/* Nav */}
      <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/" className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            <ArrowLeft className="w-4 h-4" /> Back to Overview
          </Link>
          <span className="text-sm font-semibold text-primary">{label}</span>
        </div>
      </nav>

      {/* Hero */}
      <section className={`${gradientClass} py-20 px-6`}>
        <div className="max-w-5xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest bg-primary/10 text-primary border border-primary/20 mb-4">
              {label}
            </span>
            <h1 className="font-display text-3xl md:text-5xl font-bold mb-3 text-foreground">{title}</h1>
            <p className="text-lg text-muted-foreground mb-6 max-w-2xl">{subtitle}</p>
            <div className="card-elevated inline-block px-8 py-4 rounded-2xl">
              <div className="text-sm text-muted-foreground mb-1">Investment</div>
              <div className="text-4xl font-display font-bold text-gradient">{cost}</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-12 px-6 border-b border-border">
        <div className="max-w-5xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="font-display text-xl font-bold mb-6">Key Benefits</h2>
            <div className="flex flex-wrap gap-3">
              {benefits.map((b, i) => (
                <span key={i} className="inline-flex items-center gap-2 text-sm px-4 py-2 rounded-full bg-primary/8 text-foreground border border-primary/15 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-primary" />
                  {b}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Phases */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="font-display text-2xl md:text-4xl font-bold mb-12 text-center">
            Implementation <span className="text-gradient">Phases</span>
          </motion.h2>

          <div className="relative">
            {/* Vertical timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border hidden md:block" />

            <div className="space-y-8">
              {phases.map((phase, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="flex gap-6 md:ml-0"
                >
                  {/* Timeline dot */}
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

      {/* Navigation between scopes */}
      <section className="py-12 px-6 border-t border-border bg-muted/30">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          {prevScope ? (
            <Link to={prevScope.link} className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:gap-3 transition-all">
              <ArrowLeft className="w-4 h-4" /> {prevScope.label}
            </Link>
          ) : <div />}
          <Link to="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Back to Overview
          </Link>
          {nextScope ? (
            <Link to={nextScope.link} className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:gap-3 transition-all">
              {nextScope.label} <ArrowRight className="w-4 h-4" />
            </Link>
          ) : <div />}
        </div>
      </section>
    </div>
  );
};

export default ScopePageLayout;
