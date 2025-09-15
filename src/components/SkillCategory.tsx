import { LucideIcon } from "lucide-react";
import CVCard from "./CVCard";

interface Skill {
  name: string;
  level: number;
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
      
      <div className="space-y-3">
        {skills.map((skill, index) => (
          <div key={index}>
            <div className="flex justify-between items-center mb-1">
              <span className="text-foreground font-medium">{skill.name}</span>
              <span className="text-muted-foreground text-sm">{skill.level}%</span>
            </div>
            <div className="w-full bg-secondary rounded-full h-2">
              <div 
                className={`h-2 rounded-full transition-all duration-700 ease-out ${
                  color === 'accent' ? 'bg-accent' : 
                  color === 'success' ? 'bg-success' : 'bg-primary'
                }`}
                style={{ width: `${skill.level}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </CVCard>
  );
};

export default SkillCategory;