import NavBar from "@/components/NavBar";
import HeroSection from "@/components/HeroSection";
import OverviewSection from "@/components/OverviewSection";
import ApproachSection from "@/components/ApproachSection";
import BudgetSection from "@/components/BudgetSection";
import TimelineSection from "@/components/TimelineSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <NavBar />
      <HeroSection />
      <div className="section-divider" />
      <OverviewSection />
      <div className="section-divider" />
      <ApproachSection />
      <div className="section-divider" />
      <BudgetSection />
      <div className="section-divider" />
      <TimelineSection />
      <Footer />
    </div>
  );
};

export default Index;
