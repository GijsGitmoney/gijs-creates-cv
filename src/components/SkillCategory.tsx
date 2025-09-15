import { LucideIcon } from "lucide-react";
import CVCard from "./CVCard";

interface Skill {
  name: string;
  category?: string;
}

interface SkillCategoryProps {
  icon: LucideIcon;
  title: string;
  skills: Skill[];
  color?: string;
}

const SkillCategory = ({ icon: Icon, title, skills, color = "primary" }: SkillCategoryProps) => {
  const getColorClasses = () => {
    switch (color) {
      case 'accent':
        return 'text-accent bg-accent/10';
      case 'success':
        return 'text-success bg-success/10';
      default:
        return 'text-primary bg-primary/10';
    }
  };

  return (
    <CVCard>
      <div className="flex items-center gap-3 mb-4">
        <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${getColorClasses()}`}>
          <Icon className="w-5 h-5" />
        </div>
        <h3 className="text-lg font-heading font-semibold text-foreground">
          {title}
        </h3>
      </div>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        {skills.map((skill, index) => (
          <div 
            key={index}
            className="group relative"
          >
            <div className="flex items-center gap-3 p-4 bg-secondary/30 backdrop-blur-sm rounded-xl border border-border/50 hover:border-primary/50 transition-all duration-300 hover:scale-105">
              <div className={`w-3 h-3 rounded-full ${
                color === 'accent' ? 'bg-accent' : 
                color === 'success' ? 'bg-success' : 'bg-primary'
              }`} />
              <span className="text-foreground font-medium text-sm">{skill.name}</span>
            </div>
            {skill.category && (
              <div className="absolute -top-2 -right-2 bg-muted text-muted-foreground text-xs px-2 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                {skill.category}
              </div>
            )}
          </div>
        ))}
      </div>
    </CVCard>
  );
};

export default SkillCategory;