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
        return 'text-accent bg-accent/20 border-accent/30';
      case 'success':
        return 'text-success bg-success/20 border-success/30';
      default:
        return 'text-primary bg-primary/20 border-primary/30';
    }
  };

  const getDotColor = () => {
    switch (color) {
      case 'accent':
        return 'bg-accent shadow-accent';
      case 'success':
        return 'bg-success shadow-[0_0_20px_rgba(0,255,255,0.5)]';
      default:
        return 'bg-primary shadow-glow';
    }
  };

  return (
    <CVCard>
      <div className="flex items-center gap-4 mb-6">
        <div className={`w-14 h-14 rounded-2xl flex items-center justify-center border ${getColorClasses()} backdrop-blur-sm`}>
          <Icon className="w-7 h-7" />
        </div>
        <div>
          <h3 className="text-2xl font-heading font-bold gradient-text">
            {title}
          </h3>
          <div className={`h-1 w-16 rounded-full mt-1 ${color === 'accent' ? 'bg-accent' : color === 'success' ? 'bg-success' : 'bg-primary'}`}></div>
        </div>
      </div>
      
      <div className="grid grid-cols-[repeat(auto-fit,_minmax(220px,_1fr))] gap-3">
        {skills.map((skill, index) => (
          <div 
            key={index}
            className="group relative"
          >
            <div className="group/skill relative">
              <div className="pointer-events-none absolute -inset-0.5 -z-10 bg-gradient-primary rounded-xl opacity-0 group-hover/skill:opacity-40 transition-opacity duration-300 blur-sm"></div>
              <div className="relative flex items-center gap-4 p-4 bg-muted/40 backdrop-blur-sm rounded-xl border border-border/30 hover:border-primary/50 transition-all duration-300 min-h-[4rem] group-hover/skill:bg-card/50 overflow-visible">
                <div className={`w-4 h-4 rounded-full flex-shrink-0 ${getDotColor()} animate-pulse`} />
                <span className="text-foreground font-medium text-sm leading-tight break-normal whitespace-normal group-hover/skill:text-primary transition-colors">{skill.name}</span>
              </div>
            </div>
            {skill.category && (
              <div className="pointer-events-none absolute -top-2 -right-2 z-20 bg-muted text-muted-foreground text-xs px-2 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
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