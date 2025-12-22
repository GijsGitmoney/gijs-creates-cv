import { Target, Palette, BarChart3, Wrench, Award } from "lucide-react";
import CVCard from "./CVCard";

const skillCategories = [
  {
    title: "Marketing & Advertising",
    subtitle: "Focus op performance & data",
    icon: Target,
    colorClasses: {
      bg: "bg-primary/20",
      text: "text-primary",
      border: "border-primary/30",
      dot: "bg-primary"
    },
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
    colorClasses: {
      bg: "bg-accent/20",
      text: "text-accent",
      border: "border-accent/30",
      dot: "bg-accent"
    },
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
    colorClasses: {
      bg: "bg-accent/20",
      text: "text-accent",
      border: "border-accent/30",
      dot: "bg-accent"
    },
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
    colorClasses: {
      bg: "bg-success/20",
      text: "text-success",
      border: "border-success/30",
      dot: "bg-success"
    },
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
      <div className="text-center mb-8 md:mb-12 px-4">
        <h2 className="text-3xl md:text-4xl font-heading font-bold gradient-text mb-3 md:mb-4">
          Skills & Expertise
        </h2>
        <p className="text-base md:text-lg text-muted-foreground">Mijn toolbox voor digital advertising & marketing</p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
        {skillCategories.map((category, index) => {
          const Icon = category.icon;
          
          return (
            <CVCard key={index} className="md:hover:scale-[1.02] transition-all duration-500">
              <div className="flex items-center gap-3 md:gap-4 mb-5 md:mb-6">
                <div className={`w-10 h-10 md:w-12 md:h-12 ${category.colorClasses.bg} ${category.colorClasses.text} rounded-lg md:rounded-xl flex items-center justify-center border ${category.colorClasses.border} flex-shrink-0 shadow-glow`}>
                  <Icon className="w-5 h-5 md:w-6 md:h-6" />
                </div>
                <div className="min-w-0">
                  <h3 className="text-lg md:text-xl font-heading font-bold text-foreground">
                    {category.title}
                  </h3>
                  <p className="text-xs md:text-sm text-muted-foreground">{category.subtitle}</p>
                </div>
              </div>
              
              <div className="space-y-2 md:space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="group flex items-center gap-2 md:gap-3">
                    <div className={`w-1.5 h-1.5 md:w-2 md:h-2 rounded-full ${category.colorClasses.dot} shadow-glow flex-shrink-0`}></div>
                    <span className="text-sm md:text-base text-foreground font-medium group-hover:text-primary transition-colors">
                      {skill}
                    </span>
                  </div>
                ))}
              </div>
            </CVCard>
          );
        })}
      </div>

      {/* Certificeringen Section */}
      <div className="mt-8 md:mt-12">
        <CVCard className="md:hover:scale-[1.01] transition-all duration-500">
          <div className="flex items-center gap-3 md:gap-4 mb-5 md:mb-6">
            <div className="w-10 h-10 md:w-12 md:h-12 bg-primary/20 text-primary rounded-lg md:rounded-xl flex items-center justify-center border border-primary/30 flex-shrink-0">
              <Award className="w-5 h-5 md:w-6 md:h-6" />
            </div>
            <div className="min-w-0">
              <h3 className="text-lg md:text-xl font-heading font-bold text-foreground">
                Certificeringen
              </h3>
              <p className="text-xs md:text-sm text-muted-foreground">Professionele kwalificaties</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {certifications.map((cert, index) => (
              <div key={index} className="flex items-center gap-2 p-3 bg-muted/40 rounded-lg border border-border/30 hover:border-primary/50 transition-colors">
                <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0"></div>
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