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
      
      <main className="container mx-auto px-4 md:px-6 py-8 md:py-12 space-y-12 md:space-y-20">
        <PersonalProfile />
        <ExperienceTimeline />
        <ModernSkills />
        <EducationSection />
        <PersonalSection />
        <CallToAction />
      </main>
    </div>
  );
};

export default Index;
