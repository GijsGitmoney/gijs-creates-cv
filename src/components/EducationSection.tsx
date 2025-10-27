import { GraduationCap, Award, Calendar, MapPin } from "lucide-react";
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
      <div className="text-center mb-12">
        <h2 className="text-4xl font-heading font-bold gradient-text mb-4">
          Opleidingen & Certificeringen
        </h2>
        <p className="text-lg text-muted-foreground">Mijn educatieve foundation</p>
      </div>
      
      <div className="space-y-6">
        {education.map((edu, index) => (
          <CVCard key={index} className="group hover:scale-[1.01] transition-all duration-500">
            <div className="flex flex-col lg:flex-row gap-6">
              {/* Left side - Icon & Level */}
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center shadow-glow mb-4">
                  <GraduationCap className="w-8 h-8 text-primary-foreground" />
                </div>
                <span className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm font-bold">
                  {edu.level}
                </span>
              </div>
              
              {/* Main Content */}
              <div className="flex-1">
                <div className="mb-4">
                  <h3 className="text-xl font-heading font-bold text-foreground mb-1">
                    {edu.title}
                  </h3>
                  <p className="text-lg font-semibold text-primary">
                    {edu.institution}
                  </p>
                </div>
                
                <div className="flex flex-wrap gap-4 text-muted-foreground mb-4">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>{edu.period}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    <span>{edu.location}</span>
                  </div>
                </div>
                
                <p className="text-foreground leading-relaxed mb-4">
                  {edu.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {edu.highlights.map((highlight, highlightIndex) => (
                    <span 
                      key={highlightIndex}
                      className="px-3 py-1 bg-accent/20 text-accent rounded-full text-sm font-medium border border-accent/30"
                    >
                      {highlight}
                    </span>
                  ))}
                </div>
              </div>
              
              {/* Right side - Achievement icon */}
              <div className="flex-shrink-0 hidden lg:flex items-start">
                <Award className="w-6 h-6 text-success group-hover:text-primary transition-colors" />
              </div>
            </div>
          </CVCard>
        ))}
      </div>
    </section>
  );
};

export default EducationSection;