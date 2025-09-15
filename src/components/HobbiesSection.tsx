import { Dumbbell, Plane, Mountain, Music, Users, Target } from "lucide-react";
import CVCard from "./CVCard";

const hobbies = [
  {
    icon: Dumbbell,
    title: "Fitness & Sport",
    description: "Krachttraining, hardlopen en kickboksen (6 maanden ervaring)"
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
    title: "Festivals & Muziek",
    description: "Muziekliefhebber en regelmatige festivalganger"
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
      <h3 className="text-xl font-heading font-semibold text-foreground mb-6">
        Hobby's & Interesses
      </h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {hobbies.map((hobby, index) => {
          const Icon = hobby.icon;
          return (
            <div 
              key={index}
              className="flex items-start gap-3 p-4 bg-secondary/50 rounded-lg hover:bg-secondary transition-colors"
            >
              <div className="w-10 h-10 bg-primary/10 text-primary rounded-lg flex items-center justify-center flex-shrink-0">
                <Icon className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-medium text-foreground mb-1">{hobby.title}</h4>
                <p className="text-sm text-muted-foreground">{hobby.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </CVCard>
  );
};

export default HobbiesSection;