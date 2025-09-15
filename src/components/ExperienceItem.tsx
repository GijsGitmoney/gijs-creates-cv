import { Calendar, MapPin } from "lucide-react";
import CVCard from "./CVCard";

interface ExperienceItemProps {
  title: string;
  company: string;
  period: string;
  location?: string;
  description: string;
  skills?: string[];
  type?: 'work' | 'education' | 'stage';
}

const ExperienceItem = ({ 
  title, 
  company, 
  period, 
  location, 
  description, 
  skills,
  type = 'work'
}: ExperienceItemProps) => {
  const getTypeColor = () => {
    switch (type) {
      case 'education':
        return 'bg-success text-success-foreground';
      case 'stage':
        return 'bg-accent text-accent-foreground';
      default:
        return 'bg-primary text-primary-foreground';
    }
  };

  return (
    <CVCard className="mb-6 last:mb-0">
      <div className="flex flex-col lg:flex-row gap-4">
        <div className="flex-1">
          <div className="flex items-start justify-between mb-3">
            <div>
              <h3 className="text-xl font-heading font-semibold text-foreground mb-1">
                {title}
              </h3>
              <p className="text-lg font-medium text-primary">
                {company}
              </p>
            </div>
            <span className={`px-3 py-1 rounded-full text-sm font-medium ${getTypeColor()}`}>
              {type === 'education' ? 'Opleiding' : type === 'stage' ? 'Stage' : 'Werk'}
            </span>
          </div>
          
          <div className="flex flex-wrap gap-4 text-muted-foreground mb-4">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>{period}</span>
            </div>
            {location && (
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>{location}</span>
              </div>
            )}
          </div>
          
          <p className="text-foreground leading-relaxed mb-4">
            {description}
          </p>
          
          {skills && skills.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, index) => (
                <span 
                  key={index}
                  className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </CVCard>
  );
};

export default ExperienceItem;