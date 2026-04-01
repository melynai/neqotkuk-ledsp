import ScopePageLayout from "@/components/ScopePageLayout";
import {
  Palette, Code, TestTube, HeartHandshake,
} from "lucide-react";

const phases = [
  {
    icon: Palette,
    title: "Discovery & Design",
    timeline: "Weeks 1–6",
    deliverables: ["Stakeholder consultation & content audit", "Brand identity & visual design language", "Sitemap, wireframes & design mockups", "Two rounds of design revisions"],
  },
  {
    icon: Code,
    title: "Development & Content Creation",
    timeline: "Weeks 6–14",
    deliverables: ["Responsive CMS-powered website build", "10+ core pages developed", "Secure member portal with login", "Melyn Brain Platform integration"],
  },
  {
    icon: TestTube,
    title: "Testing, Training & Launch",
    timeline: "Weeks 14–18",
    deliverables: ["Cross-browser & accessibility testing (WCAG 2.1)", "Performance & security optimization", "Staff training & documentation", "Staged launch with community announcement"],
  },
  {
    icon: HeartHandshake,
    title: "Post-Launch Support",
    timeline: "Months 5–12",
    deliverables: ["30-day intensive support period", "Monthly check-ins & analytics reporting", "Technical maintenance & updates"],
  },
];

const benefits = [
  "Culturally authentic digital presence",
  "Mobile-first responsive design",
  "Secure member portal for off-reserve members",
  "Staff-managed with intuitive CMS",
  "WCAG 2.1 accessibility compliant",
];

const ScopeWebsite = () => (
  <ScopePageLayout
    label="Scope 3"
    title="Community Website & Digital Portal"
    subtitle="Modern, Accessible Digital Presence & Member Portal"
    cost="$20,000"
    gradientClass="bg-gradient-website"
    phases={phases}
    benefits={benefits}
    prevScope={{ label: "Comprehensive Community Plan", link: "/scope/ccp" }}
  />
);

export default ScopeWebsite;
