import { GraduationCap, Calendar, MapPin } from "lucide-react";
import CVCard from "./CVCard";

const education = [
  {
    title: "Business Studies - Marketing",
    institution: "Hogeschool Inholland",
    level: "HBO",
    period: "2020 - 2024",
    location: "Alkmaar",
    description: "Specialisatie in marketing strategieën, klantgedrag en ondernemerschap. Afstudeerstage afgerond met 7,5.",
    highlights: ["Marketing Strategieën", "Klantonderzoek", "Business Development", "Ondernemerschap"]
  },
  {
    title: "Vestigingsmanager Groothandel",
    institution: "Horizon College",
    level: "MBO4",
    period: "2017 - 2020",
    location: "Heerhugowaard",
    description: "Focus op retail management, logistiek en commerciële processen in de groothandel.",
    highlights: ["Retail Management", "Logistiek", "Commercieel", "Klantenservice"]
  },
  {
    title: "VMBO Theoretische Leerweg",
    institution: "PCC Fabritius",
    level: "VMBO-TL",
    period: "2013 - 2017",
    location: "Alkmaar",
    description: "Theoretische leerweg met focus op economie.",
    highlights: ["Economie", "Natuurkunde", "Wiskunde"]
  }
];

const EducationSection = () => {
  return (
    <section className="animate-fade-in">
      <div className="text-center mb-10 md:mb-16">
        <h2 className="text-3xl md:text-4xl font-heading text-foreground mb-3">
          Opleidingen & Certificeringen
        </h2>
        <p className="text-base md:text-lg text-muted-foreground">Mijn educatieve foundation</p>
      </div>
      
      <div className="space-y-6">
        {education.map((edu, index) => (
          <CVCard key={index}>
            <div className="flex flex-col lg:flex-row gap-6">
              {/* Left side */}
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center border border-border mb-3">
                  <GraduationCap className="w-6 h-6 text-foreground" />
                </div>
                <span className="px-3 py-1 bg-primary text-primary-foreground rounded-md text-xs font-medium">
                  {edu.level}
                </span>
              </div>
              
              {/* Main Content */}
              <div className="flex-1">
                <div className="mb-3">
                  <h3 className="text-lg md:text-xl font-semibold text-foreground mb-1">
                    {edu.title}
                  </h3>
                  <p className="text-base font-medium text-accent">
                    {edu.institution}
                  </p>
                </div>
                
                <div className="flex flex-wrap gap-4 text-muted-foreground mb-3 text-sm">
                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{edu.period}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{edu.location}</span>
                  </div>
                </div>
                
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-4">
                  {edu.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {edu.highlights.map((highlight, highlightIndex) => (
                    <span 
                      key={highlightIndex}
                      className="px-3 py-1 bg-secondary text-secondary-foreground rounded-md text-xs font-medium border border-border"
                    >
                      {highlight}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </CVCard>
        ))}
      </div>
    </section>
  );
};

export default EducationSection;
