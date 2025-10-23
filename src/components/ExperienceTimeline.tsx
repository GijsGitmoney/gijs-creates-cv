import { Building, Rocket, Target, Calendar, MapPin } from "lucide-react";
import CVCard from "./CVCard";

const experiences = [
  {
    title: "Co-Founder",
    company: "Revalyze.io",
    period: "Mei 2025 - Heden",
    location: "",
    description: "AI-agent voor data-analyse ontwikkeld. Lead design van website, dashboard UX/UI en email templates. Van concept tot werkend product in 6 maanden.",
    skills: ["AI Development", "UX/UI Design", "Product Strategy", "Entrepreneurship"],
    type: "startup",
    icon: Rocket,
    highlight: true
  },
  {
    title: "Afstudeerstage",
    company: "Turien & Co.",
    period: "Jan 2024 - Aug 2024",
    location: "Alkmaar",
    description: "Onderzoek naar klantretentie en klanttevredenheid. Analyse van klantgedrag en ontwikkeling van strategieën voor verbeterde klantbinding. Afgerond met een 7,5.",
    skills: ["Klantonderzoek", "SPSS", "Data-analyse", "Rapportage"],
    type: "work",
    icon: Target
  },
  {
    title: "Marketing Stagiair",
    company: "Ferney Group",
    period: "Sep 2022 - Jan 2023",
    location: "Heerhugowaard",
    description: "Ondersteuning bij marketingcampagnes, nieuwsbrieven, social media content en SEO optimalisatie. Verantwoordelijk voor volledige content calendar.",
    skills: ["Social Media", "SEO", "Content Marketing", "Nieuwsbrieven"],
    type: "internship",
    icon: Building
  }
];

const ExperienceTimeline = () => {
  return (
    <section className="animate-fade-in">
      <div className="text-center mb-8 md:mb-12 px-4 md:px-0">
        <h2 className="text-3xl md:text-4xl font-heading font-bold gradient-text mb-3 md:mb-4">
          Ervaring & Ondernemerschap
        </h2>
        <p className="text-base md:text-lg text-muted-foreground">Van stage tot startup - mijn professionele journey</p>
      </div>
      
      <div className="relative">
        {/* Timeline Line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-primary rounded-full"></div>
        
        <div className="space-y-8 md:space-y-12">
          {experiences.map((exp, index) => {
            const Icon = exp.icon;
            const isLeft = index % 2 === 0;
            
            return (
              <div key={index} className={`flex items-center ${isLeft ? 'flex-row' : 'flex-row-reverse'} relative`}>
                {/* Timeline Node */}
                <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center shadow-glow ${
                    exp.highlight ? 'bg-gradient-primary' : 'bg-gradient-primary'
                  }`}>
                    <Icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                </div>
                
                {/* Content Card */}
                <div className={`w-full md:w-5/12 ${isLeft ? 'md:pr-8' : 'md:pl-8'}`}>
                  <CVCard className={exp.highlight ? 'border-primary/50' : ''}>
                    {/* Mobile Icon */}
                    <div className="md:hidden mb-4">
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center shadow-glow ${
                        exp.highlight ? 'bg-gradient-primary' : 'bg-gradient-primary'
                      }`}>
                        <Icon className="w-6 h-6 text-primary-foreground" />
                      </div>
                    </div>
                    
                    <div className="mb-4">
                      <div className="flex items-center justify-between mb-2 gap-2">
                        <h3 className="text-lg md:text-xl font-heading font-bold text-foreground">
                          {exp.title}
                        </h3>
                        {exp.highlight && (
                          <span className="px-2 md:px-3 py-1 bg-primary text-primary-foreground rounded-full text-xs md:text-sm font-medium whitespace-nowrap">
                            Startup
                          </span>
                        )}
                      </div>
                      <p className="text-base md:text-lg font-semibold text-primary mb-3">
                        {exp.company}
                      </p>
                    </div>
                    
                    <div className="flex flex-wrap gap-3 md:gap-4 text-muted-foreground mb-4">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 flex-shrink-0" />
                        <span className="text-xs md:text-sm">{exp.period}</span>
                      </div>
                      {exp.location && (
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4 flex-shrink-0" />
                          <span className="text-xs md:text-sm">{exp.location}</span>
                        </div>
                      )}
                    </div>
                    
                    <p className="text-sm md:text-base text-foreground leading-relaxed mb-4">
                      {exp.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill, skillIndex) => (
                        <span 
                          key={skillIndex}
                          className="px-2 md:px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-xs md:text-sm font-medium"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </CVCard>
                </div>
                
                {/* Spacer - Hidden on mobile */}
                <div className="hidden md:block w-5/12"></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ExperienceTimeline;