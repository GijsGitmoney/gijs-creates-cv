import { Star, Palette, BarChart3, Code } from "lucide-react";
import CVCard from "./CVCard";

const skillCategories = [
  {
    title: "Marketing & Strategie",
    icon: Star,
    color: "primary",
    skills: [
      { name: "SEO & SEM" },
      { name: "Content Marketing" },
      { name: "Social Media Marketing" },
      { name: "Email Marketing" },
      { name: "Brand Strategy" },
      { name: "Market Research" }
    ]
  },
  {
    title: "Design & Creative",
    icon: Palette,
    color: "secondary",
    skills: [
      { name: "UX/UI Design" },
      { name: "Photoshop" },
      { name: "Canva" },
      { name: "Web Design" },
      { name: "Graphic Design" }
    ]
  },
  {
    title: "Data & Analytics",
    icon: BarChart3,
    color: "accent",
    skills: [
      { name: "SPSS" },
      { name: "Tableau" },
      { name: "Google Analytics" },
      { name: "Excel" },
      { name: "Data Visualization" }
    ]
  },
  {
    title: "Tech & Tools",
    icon: Code,
    color: "success",
    skills: [
      { name: "Mailchimp" },
      { name: "HubSpot" },
      { name: "SAP" }
    ]
  }
];

const ModernSkills = () => {
  return (
    <section className="animate-fade-in">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-heading font-bold gradient-text mb-4">
          Skills & Expertise
        </h2>
        <p className="text-lg text-muted-foreground">Mijn toolbox voor moderne marketing & design</p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {skillCategories.map((category, index) => {
          const Icon = category.icon;
          
          return (
            <CVCard key={index} className="hover:scale-[1.02] transition-all duration-500">
              <div className="flex items-center gap-4 mb-6">
                <div className={`w-12 h-12 bg-${category.color}/20 text-${category.color} rounded-xl flex items-center justify-center border border-${category.color}/30`}>
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-heading font-bold text-foreground">
                    {category.title}
                  </h3>
                  <div className={`h-1 w-12 bg-${category.color} rounded-full mt-1`}></div>
                </div>
              </div>
              
              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="group flex items-center gap-3">
                    <div className={`w-2 h-2 rounded-full bg-${category.color}`}></div>
                    <span className="text-foreground font-medium group-hover:text-primary transition-colors">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </CVCard>
          );
        })}
      </div>
    </section>
  );
};

export default ModernSkills;