import { Dumbbell, Plane, Mountain, Music, Users, Target } from "lucide-react";
import CVCard from "./CVCard";

const hobbies = [
  {
    icon: Dumbbell,
    title: "Fitness & Sport",
    description: "Krachttraining, hardlopen en kickboksen (half jaar ervaring)"
  },
  {
    icon: Plane,
    title: "Reizen & Ontdekken",
    description: "Passie voor reizen en de wereld verkennen - altijd op zoek naar nieuwe culturen"
  },
  {
    icon: Mountain,
    title: "Skiën",
    description: "Grote passie voor wintersport en ski vakanties in de Alpen"
  },
  {
    icon: Music,
    title: "Lezen & Ontwikkeling",
    description: "Passie voor lezen en continue persoonlijke ontwikkeling"
  },
  {
    icon: Users,
    title: "Sociaal & Netwerken",
    description: "Sociaal persoon die graag met anderen samenwerkt en connecties opbouwt"
  },
  {
    icon: Target,
    title: "Persoonlijke Groei",
    description: "Altijd op zoek naar nieuwe uitdagingen en continue zelfverbetering"
  }
];

const HobbiesSection = () => {
  return (
    <CVCard>
      <div className="flex items-center gap-4 mb-8">
        <div className="w-14 h-14 bg-gradient-primary rounded-2xl flex items-center justify-center shadow-glow">
          <Users className="w-7 h-7 text-primary-foreground" />
        </div>
        <div>
          <h3 className="text-2xl font-heading font-bold gradient-text">
            Hobby's & Interesses
          </h3>
          <div className="h-1 w-16 bg-primary rounded-full mt-1"></div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {hobbies.map((hobby, index) => {
          const Icon = hobby.icon;
          return (
            <div 
              key={index}
              className="group/hobby relative w-full"
            >
              <div className="absolute -inset-0.5 bg-gradient-primary rounded-2xl opacity-0 group-hover/hobby:opacity-30 transition-opacity duration-300 blur-sm"></div>
              <div className="relative w-full flex items-start gap-4 p-6 bg-muted/40 backdrop-blur-sm rounded-2xl border border-border/30 hover:border-primary/50 transition-all duration-300 group-hover/hobby:scale-105">
                <div className="w-12 h-12 bg-primary/20 text-primary rounded-xl flex items-center justify-center flex-shrink-0 group-hover/hobby:bg-primary/30 transition-colors border border-primary/30">
                  <Icon className="w-6 h-6" />
                </div>
                <div className="min-w-0 flex-1">
                  <h4 className="font-bold text-foreground mb-2 leading-tight break-words text-lg group-hover/hobby:text-primary transition-colors">{hobby.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed break-words">{hobby.description}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </CVCard>
  );
};

export default HobbiesSection;