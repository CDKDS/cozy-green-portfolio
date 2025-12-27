import { useState } from "react";
import Navigation from "@/components/Navigation";
import HomeSection from "@/components/sections/HomeSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import ContactSection from "@/components/sections/ContactSection";

const Index = () => {
  const [activeTab, setActiveTab] = useState("home");

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const renderSection = () => {
    switch (activeTab) {
      case "home":
        return <HomeSection onNavigate={handleTabChange} />;
      case "experience":
        return <ExperienceSection />;
      case "projects":
        return <ProjectsSection />;
      case "contact":
        return <ContactSection />;
      default:
        return <HomeSection onNavigate={handleTabChange} />;
    }
  };

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <Navigation activeTab={activeTab} onTabChange={handleTabChange} />
      <main>{renderSection()}</main>
    </div>
  );
};

export default Index;
