import { Target, Palette, BarChart3, Wrench, Award } from "lucide-react";
import CVCard from "./CVCard";

const skillCategories = [
  {
    title: "Marketing & Advertising",
    subtitle: "Focus op performance & data",
    icon: Target,
    skills: [
      "Google Ads (Search & Display)",
      "Meta Advertising (Facebook & Instagram – basis)",
      "Performance marketing mindset",
      "Basis SEO & zoekgedrag"
    ]
  },
  {
    title: "Design & Creative",
    subtitle: "Ondersteunend aan ads",
    icon: Palette,
    skills: [
      "Canva",
      "Photoshop",
      "UX / UI landingspagina ontwerpen"
    ]
  },
  {
    title: "Data & Analytics",
    subtitle: "Sterk punt voor deze rol",
    icon: BarChart3,
    skills: [
      "Google Analytics 4 (GA4)",
      "Google Ads Measurement",
      "Excel & data-analyse",
      "SPSS & Tableau"
    ]
  },
  {
    title: "Tech & Tools",
    subtitle: "Relevant voor digital advertising",
    icon: Wrench,
    skills: [
      "Google Marketing Platform",
      "Meta Business Manager",
      "Coosto",
      "Mailchimp",
      "Visual Studio Code"
    ]
  }
];

const certifications = [
  "Google Ads Search Certification (2025)",
  "Google Ads Display Certification (2025)",
  "Google Ads Measurement Certification (2025)",
  "Google Analytics GA4 Certification (2025)",
  "HubSpot Inbound Marketing Certification (2025)",
  "Elements of AI – University of Helsinki (2023)"
];

const ModernSkills = () => {
  return (
    <section className="animate-fade-in">
      <div className="text-center mb-10 md:mb-16">
        <h2 className="text-3xl md:text-4xl font-heading text-foreground mb-3">
          Skills & Expertise
        </h2>
        <p className="text-base md:text-lg text-muted-foreground">Mijn toolbox voor digital advertising & marketing</p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
        {skillCategories.map((category, index) => {
          const Icon = category.icon;
          
          return (
            <CVCard key={index}>
              <div className="flex items-center gap-3 md:gap-4 mb-5">
                <div className="w-10 h-10 md:w-11 md:h-11 bg-secondary text-foreground rounded-lg flex items-center justify-center border border-border flex-shrink-0">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-semibold text-foreground">
                    {category.title}
                  </h3>
                  <p className="text-xs md:text-sm text-muted-foreground">{category.subtitle}</p>
                </div>
              </div>
              
              <div className="space-y-2.5">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0"></div>
                    <span className="text-sm md:text-base text-foreground">
                      {skill}
                    </span>
                  </div>
                ))}
              </div>
            </CVCard>
          );
        })}
      </div>

      {/* Certifications */}
      <div className="mt-8 md:mt-12">
        <CVCard>
          <div className="flex items-center gap-3 md:gap-4 mb-5">
            <div className="w-10 h-10 md:w-11 md:h-11 bg-secondary text-foreground rounded-lg flex items-center justify-center border border-border flex-shrink-0">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg md:text-xl font-semibold text-foreground">
                Certificeringen
              </h3>
              <p className="text-xs md:text-sm text-muted-foreground">Professionele kwalificaties</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
            {certifications.map((cert, index) => (
              <div key={index} className="flex items-center gap-2.5 p-3 bg-secondary/50 rounded-md border border-border">
                <div className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0"></div>
                <span className="text-sm text-foreground">{cert}</span>
              </div>
            ))}
          </div>
        </CVCard>
      </div>
    </section>
  );
};

export default ModernSkills;
