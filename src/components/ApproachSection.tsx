import { motion } from "framer-motion";
import { Users, BarChart2, Handshake, Rocket, Monitor } from "lucide-react";

const fadeUp = { initial: { opacity: 0, y: 24 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true } };

const pillars = [
  {
    icon: Users,
    title: "Community First",
    description: "Every decision starts with the community. We embed Indigenous engagement into every phase — not as a checkbox, but as the foundation.",
  },
  {
    icon: BarChart2,
    title: "Evidence-Based Strategy",
    description: "We combine economic data, land assessments, and comparative analysis to build strategies grounded in facts, not assumptions.",
  },
  {
    icon: Handshake,
    title: "Collaborative Co-Creation",
    description: "Chief, Council, and community members are active co-authors of the strategy — not passive participants.",
  },
  {
    icon: Rocket,
    title: "Implementation Ready",
    description: "Every strategy includes a funded action plan, grant pipeline, and digital platform to move from plan to action immediately.",
  },
  {
    icon: Monitor,
    title: "Digital-First Delivery",
    description: "Your strategy lives online — updated, accessible, and shareable — not locked in a binder on a shelf.",
  },
];

const ApproachSection = () => {
  return (
    <section id="approach" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div {...fadeUp} className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
            Our <span className="text-gradient">Approach</span>
          </h2>
          <p className="text-muted-foreground text-lg">How we deliver</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pillars.map((pillar, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="card-elevated p-6"
            >
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <pillar.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-display text-lg font-bold mb-2">{pillar.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{pillar.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ApproachSection;
