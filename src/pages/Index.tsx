import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import TechSection from "@/components/sections/TechSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import AboutSection from "@/components/sections/AboutSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <TechSection />
      <ProjectsSection />
      <AboutSection />
      <Footer />
    </div>
  );
};

export default Index;
