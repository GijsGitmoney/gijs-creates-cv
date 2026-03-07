import { Dumbbell, Plane, Mountain, Book, Users, CheckCircle } from "lucide-react";
import CVCard from "./CVCard";

const hobbies = [
  {
    icon: Dumbbell,
    title: "Fitness & Sport",
    description: "5x per week krachttraining, wekelijks hardlopen, kickboksen en padel"
  },
  {
    icon: Mountain,
    title: "Skiën & Wintersport",
    description: "Elk jaar op wintersport met de familie - een jaarlijkse traditie waar ik enorm van geniet"
  },
  {
    icon: Plane,
    title: "Reizen & Culturen",
    description: "Passie voor reizen met grote interesse in geschiedenis en andere culturen"
  },
  {
    icon: Book,
    title: "Lezen & Groei",
    description: "Dagelijks lezen voor continue persoonlijke ontwikkeling"
  },
  {
    icon: Users,
    title: "Sociale Momenten",
    description: "Gezellig uit eten of naar de film met vrienden - kwaliteitstijd met mensen om me heen"
  }
];

const traits = [
  "Leergierig",
  "Verantwoordelijk",
  "Empathisch",
  "Geduldig",
  "Gedisciplineerd",
  "Creatief",
  "Ondernemend",
  "Analytisch"
];

const PersonalSection = () => {
  return (
    <section className="animate-fade-in">
      <div className="text-center mb-10 md:mb-16">
        <h2 className="text-3xl md:text-4xl font-heading text-foreground mb-3">
          Persoonlijk & Hobby's
        </h2>
        <p className="text-base md:text-lg text-muted-foreground">Wat mij drijft buiten werk</p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
        {/* Hobbies */}
        <CVCard>
          <div className="mb-5">
            <h3 className="text-lg md:text-xl font-semibold text-foreground mb-1">
              Hobby's & Interesses
            </h3>
            <div className="h-0.5 w-12 bg-accent rounded-full"></div>
          </div>
          
          <div className="space-y-3">
            {hobbies.map((hobby, index) => {
              const Icon = hobby.icon;
              return (
                <div key={index} className="flex items-start gap-3 p-3 bg-secondary/50 rounded-md border border-border hover:border-accent/30 transition-colors">
                  <div className="w-8 h-8 bg-secondary text-foreground rounded-md flex items-center justify-center flex-shrink-0 border border-border">
                    <Icon className="w-4 h-4" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-sm font-semibold text-foreground mb-0.5">
                      {hobby.title}
                    </h4>
                    <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                      {hobby.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </CVCard>
        
        {/* Personality Traits */}
        <CVCard>
          <div className="mb-5">
            <h3 className="text-lg md:text-xl font-semibold text-foreground mb-1">
              Persoonlijke Eigenschappen
            </h3>
            <div className="h-0.5 w-12 bg-accent rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {traits.map((trait, index) => (
              <div 
                key={index}
                className="flex items-center gap-2.5 p-3 bg-secondary/50 rounded-md border border-border"
              >
                <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />
                <span className="text-sm text-foreground font-medium">{trait}</span>
              </div>
            ))}
          </div>
        </CVCard>
      </div>
    </section>
  );
};

export default PersonalSection;
