import { CheckCircle } from "lucide-react";
import CVCard from "./CVCard";

const traits = [
  "Ambitieus",
  "Verantwoordelijk", 
  "Empathisch",
  "Geduldig",
  "Gedisciplineerd",
  "Creatief"
];

const PersonalityTraits = () => {
  return (
    <CVCard>
      <h3 className="text-xl font-heading font-semibold text-foreground mb-6">
        Persoonlijke Eigenschappen
      </h3>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {traits.map((trait, index) => (
          <div 
            key={index}
            className="flex items-center gap-3 p-3 bg-success-light rounded-lg"
          >
            <CheckCircle className="w-5 h-5 text-success flex-shrink-0" />
            <span className="text-foreground font-medium">{trait}</span>
          </div>
        ))}
      </div>
    </CVCard>
  );
};

export default PersonalityTraits;