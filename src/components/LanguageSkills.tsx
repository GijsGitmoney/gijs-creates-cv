import { Globe } from "lucide-react";
import CVCard from "./CVCard";

const languages = [
  { name: "Nederlands", level: "Moedertaal", proficiency: 100 },
  { name: "Engels", level: "Zeer goed", proficiency: 90 },
  { name: "Duits", level: "Redelijk", proficiency: 65 }
];

const LanguageSkills = () => {
  return (
    <CVCard>
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 bg-accent/10 text-accent rounded-lg flex items-center justify-center">
          <Globe className="w-5 h-5" />
        </div>
        <h3 className="text-xl font-heading font-semibold text-foreground">
          Talen
        </h3>
      </div>
      
      <div className="space-y-4">
        {languages.map((language, index) => (
          <div key={index}>
            <div className="flex justify-between items-center mb-2">
              <span className="text-foreground font-medium">{language.name}</span>
              <span className="text-muted-foreground text-sm">{language.level}</span>
            </div>
            <div className="w-full bg-secondary rounded-full h-2">
              <div 
                className="h-2 bg-accent rounded-full transition-all duration-700 ease-out"
                style={{ width: `${language.proficiency}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </CVCard>
  );
};

export default LanguageSkills;