import { Star, Palette, BarChart3, Code, Zap } from "lucide-react";
import CVCard from "./CVCard";
import { Progress } from "./ui/progress";

const skillCategories = [
  {
    title: "Marketing & Strategie",
    icon: Star,
    color: "primary",
    skills: [
      { name: "SEO & SEM", level: 85 },
      { name: "Content Marketing", level: 90 },
      { name: "Social Media Marketing", level: 88 },
      { name: "Email Marketing", level: 82 },
      { name: "Brand Strategy", level: 78 },
      { name: "Market Research", level: 92 }
    ]
  },
  {
    title: "Design & Creative",
    icon: Palette,
    color: "secondary",
    skills: [
      { name: "UX/UI Design", level: 85 },
      { name: "Photoshop", level: 80 },
      { name: "Canva", level: 95 },
      { name: "Web Design", level: 75 },
      { name: "Graphic Design", level: 82 }
    ]
  },
  {
    title: "Data & Analytics",
    icon: BarChart3,
    color: "accent",
    skills: [
      { name: "SPSS", level: 88 },
      { name: "Tableau", level: 75 },
      { name: "Google Analytics", level: 85 },
      { name: "Excel Advanced", level: 90 },
      { name: "Data Visualization", level: 80 }
    ]
  },
  {
    title: "Tech & Tools",
    icon: Code,
    color: "success",
    skills: [
      { name: "HTML/CSS", level: 70 },
      { name: "WordPress", level: 85 },
      { name: "Mailchimp", level: 88 },
      { name: "HubSpot", level: 75 },
      { name: "SAP", level: 65 }
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
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="group">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-foreground font-medium group-hover:text-primary transition-colors">
                        {skill.name}
                      </span>
                      <span className="text-muted-foreground text-sm font-medium">
                        {skill.level}%
                      </span>
                    </div>
                    <Progress value={skill.level} className="h-2" />
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