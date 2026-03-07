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
      <div className="text-center mb-10 md:mb-16">
        <h2 className="text-3xl md:text-4xl font-heading text-foreground mb-3">
          Ervaring & Ondernemerschap
        </h2>
        <p className="text-base md:text-lg text-muted-foreground">Van stage tot startup — mijn professionele journey</p>
      </div>
      
      <div className="relative">
        {/* Timeline Line */}
        <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-1/2 w-px h-full bg-border"></div>
        
        <div className="space-y-10 md:space-y-14">
          {experiences.map((exp, index) => {
            const Icon = exp.icon;
            const isLeft = index % 2 === 0;
            
            return (
              <div key={index} className={`flex items-start ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'} relative`}>
                {/* Timeline Node */}
                <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 z-10">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center border-2 ${
                    exp.highlight ? 'bg-accent border-accent text-accent-foreground' : 'bg-card border-border text-muted-foreground'
                  }`}>
                    <Icon className="w-4 h-4" />
                  </div>
                </div>
                
                {/* Mobile Node */}
                <div className="md:hidden absolute left-4 transform -translate-x-1/2 z-10">
                  <div className={`w-3 h-3 rounded-full ${exp.highlight ? 'bg-accent' : 'bg-border'}`}></div>
                </div>
                
                {/* Content Card */}
                <div className={`w-full md:w-5/12 pl-10 md:pl-0 ${isLeft ? 'md:pr-12' : 'md:pl-12'}`}>
                  <CVCard className={exp.highlight ? 'border-accent/30' : ''}>
                    <div className="mb-4">
                      <div className="flex items-center justify-between mb-1 gap-2">
                        <h3 className="text-lg md:text-xl font-semibold text-foreground">
                          {exp.title}
                        </h3>
                        {exp.highlight && (
                          <span className="px-2.5 py-0.5 bg-accent/10 text-accent rounded-md text-xs font-medium">
                            Startup
                          </span>
                        )}
                      </div>
                      <p className="text-base md:text-lg font-medium text-accent">
                        {exp.company}
                      </p>
                    </div>
                    
                    <div className="flex flex-wrap gap-3 text-muted-foreground mb-4 text-sm">
                      <div className="flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5" />
                        <span>{exp.period}</span>
                      </div>
                      {exp.location && (
                        <div className="flex items-center gap-1.5">
                          <MapPin className="w-3.5 h-3.5" />
                          <span>{exp.location}</span>
                        </div>
                      )}
                    </div>
                    
                    <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-4">
                      {exp.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill, skillIndex) => (
                        <span 
                          key={skillIndex}
                          className="px-3 py-1 bg-secondary text-secondary-foreground rounded-md text-xs font-medium border border-border"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </CVCard>
                </div>
                
                {/* Spacer */}
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
