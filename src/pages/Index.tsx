import ModernHeader from "../components/ModernHeader";
import PersonalProfile from "../components/PersonalProfile";
import ExperienceTimeline from "../components/ExperienceTimeline";
import ModernSkills from "../components/ModernSkills";
import EducationSection from "../components/EducationSection";
import PersonalSection from "../components/PersonalSection";
import CallToAction from "../components/CallToAction";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <ModernHeader />
      
      {/* Dark section: Profile through Skills */}
      <div className="dark-section bg-[#1A1F2C]">
        <div className="container mx-auto px-4 md:px-6 py-12 md:py-20 space-y-16 md:space-y-28">
          <PersonalProfile />
          <ExperienceTimeline />
          <ModernSkills />
          <EducationSection />
        </div>
      </div>
      
      {/* Light section: Personal & CTA */}
      <main className="container mx-auto px-4 md:px-6 py-12 md:py-20 space-y-16 md:space-y-28">
        <PersonalSection />
        <CallToAction />
      </main>
    </div>
  );
};

export default Index;
