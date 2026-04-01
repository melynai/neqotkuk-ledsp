import { motion } from "framer-motion";
import { MapPin, Calendar, Users, Phone, Mail } from "lucide-react";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

const references = [
  {
    client: "Witchekan Lake First Nation",
    project: "LEDSP Corporate Strategic Planning",
    period: "Sept 2025 - 2026",
    region: "Saskatchewan",
    team: ["TJ Galiardi", "Mackenzie Kreutzer"],
    contactName: "Lyle Whitefish",
    contactTitle: "Band Manager",
    contactEmail: "lwhitefish@witchekan.ca",
    contactPhone: "306-883-2787",
    description:
      "Developed Corporate Strategic Plan strengthening governance, operations, and implementation capacity of WLFN's Economic Development Arm. Organizational review, operational alignment, implementation roadmap, facilitated strategic session.",
    gradient: "bg-gradient-brain",
  },
  {
    client: "AOPFN LP",
    project: "LEDSP Economic Development Strategy",
    period: "Oct 2025 - Feb 2026",
    region: "Ontario",
    team: ["TJ Galiardi", "Mackenzie Kreutzer", "Cherag Kapoor"],
    contactName: "Crystal Benoit",
    contactTitle: "Business Development Officer",
    contactEmail: "bdo@pikwakanagan.ca",
    contactPhone: "613-625-2800",
    description:
      "Full economic development strategy covering 936 MW+ renewable energy portfolio, land assets, six priority sectors. Delivered with live digital platform. Completed February 2026.",
    gradient: "bg-gradient-website",
  },
];

const ReferencePage = () => {
  return (
    <div className="min-h-screen bg-background">
      <NavBar />
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold bg-primary/10 text-primary border border-primary/20 mb-4">
              Reference Projects
            </span>
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
              Proven <span className="text-gradient">Delivery</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Two recent LEDSP-funded economic development engagements - same team, same methodology, same commitment to community outcomes.
            </p>
          </motion.div>

          <div className="space-y-8">
            {references.map((ref, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15 }}
                className="card-elevated p-8"
              >
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  <div className={`w-14 h-14 rounded-2xl ${ref.gradient} flex items-center justify-center shrink-0`}>
                    <span className="font-display font-bold text-primary text-lg">{i + 1}</span>
                  </div>
                  <div className="flex-1">
                    <div className="mb-3">
                      <h3 className="font-display text-2xl font-bold mb-1">{ref.client}</h3>
                      <p className="text-primary font-semibold text-sm">{ref.project}</p>
                    </div>

                    <div className="flex flex-wrap gap-4 mb-5 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1.5">
                        <Calendar className="w-4 h-4" />
                        {ref.period}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <MapPin className="w-4 h-4" />
                        {ref.region}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Users className="w-4 h-4" />
                        {ref.team.join(", ")}
                      </span>
                    </div>

                    <p className="text-muted-foreground text-sm leading-relaxed mb-6">{ref.description}</p>

                    <div className="border-t border-border pt-5">
                      <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-3">Reference Contact</p>
                      <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                        <div>
                          <p className="font-semibold text-foreground">{ref.contactName}</p>
                          <p className="text-sm text-muted-foreground">{ref.contactTitle}</p>
                        </div>
                        <div className="flex flex-wrap gap-4 sm:ml-auto">
                          <a href={`mailto:${ref.contactEmail}`} className="flex items-center gap-1.5 text-sm text-primary hover:underline">
                            <Mail className="w-3.5 h-3.5" />
                            {ref.contactEmail}
                          </a>
                          <a href={`tel:${ref.contactPhone.replace(/-/g, "")}`} className="flex items-center gap-1.5 text-sm text-primary hover:underline">
                            <Phone className="w-3.5 h-3.5" />
                            {ref.contactPhone}
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default ReferencePage;
