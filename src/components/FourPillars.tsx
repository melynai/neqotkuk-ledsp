import { motion } from "framer-motion";
import { Map, Heart, BookOpen, Building2 } from "lucide-react";

const pillars = [
  { icon: Map, name: "Land", desc: "Territory, environment, resources, housing, infrastructure", color: "bg-gradient-brain" },
  { icon: BookOpen, name: "Language", desc: "Revitalization, education, knowledge transfer", color: "bg-gradient-ccp" },
  { icon: Heart, name: "Culture", desc: "Traditions, ceremonies, heritage preservation", color: "bg-gradient-website" },
  { icon: Building2, name: "Governance", desc: "Self-determination, transparency, leadership", color: "bg-[hsl(var(--sky-light))]" },
];

const FourPillars = () => {
  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
            Grounded in <span className="text-gradient">Four Cultural Pillars</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            The CCP framework places community identity at the centre, weaving these pillars through every planning decision.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {pillars.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="card-interactive p-6 text-center"
            >
              <div className={`w-16 h-16 rounded-2xl ${p.color} flex items-center justify-center mx-auto mb-4`}>
                <p.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-display text-lg font-bold mb-2">{p.name}</h3>
              <p className="text-xs text-muted-foreground">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FourPillars;
