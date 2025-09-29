import { Heart, Dumbbell, Plane, Mountain, Book, Users, Target, CheckCircle } from "lucide-react";
import CVCard from "./CVCard";

const hobbies = [
  {
    icon: Dumbbell,
    title: "Fitness & Sport",
    description: "Krachttraining 5x per week, hardlopen en kickboksen voor mentale en fysieke balans"
  },
  {
    icon: Mountain,
    title: "Skiën & Outdoor",
    description: "Grote passie voor wintersport en ski vakanties in de Alpen"
  },
  {
    icon: Plane,
    title: "Reizen & Festivals",
    description: "Ontdekken van nieuwe culturen en muziekfestivals wereldwijd"
  },
  {
    icon: Book,
    title: "Lezen & Ontwikkeling",
    description: "Continue persoonlijke groei door boeken en online courses"
  }
];

const traits = [
  "Ambitieus",
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
      <div className="text-center mb-12">
        <h2 className="text-4xl font-heading font-bold gradient-text mb-4">
          Persoonlijk & Hobby's
        </h2>
        <p className="text-lg text-muted-foreground">Wat mij drijft buiten werk</p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Hobbies */}
        <CVCard>
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center shadow-glow">
              <Heart className="w-6 h-6 text-primary-foreground" />
            </div>
            <div>
              <h3 className="text-xl font-heading font-bold text-foreground">
                Hobby's & Interesses
              </h3>
              <div className="h-1 w-16 bg-primary rounded-full mt-1"></div>
            </div>
          </div>
          
          <div className="space-y-4">
            {hobbies.map((hobby, index) => {
              const Icon = hobby.icon;
              return (
                <div key={index} className="group relative">
                  <div className="absolute -inset-0.5 bg-gradient-primary rounded-xl opacity-0 group-hover:opacity-30 transition-opacity duration-300 blur-sm -z-10"></div>
                  <div className="relative flex items-start gap-4 p-4 bg-muted/40 backdrop-blur-sm rounded-xl border border-border/30 hover:border-primary/50 transition-all duration-300">
                    <div className="w-10 h-10 bg-primary/20 text-primary rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-primary/30 transition-colors border border-primary/30">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
                        {hobby.title}
                      </h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {hobby.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </CVCard>
        
        {/* Personality Traits */}
        <CVCard>
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 bg-gradient-secondary rounded-xl flex items-center justify-center shadow-glow">
              <Target className="w-6 h-6 text-primary-foreground" />
            </div>
            <div>
              <h3 className="text-xl font-heading font-bold text-foreground">
                Persoonlijke Eigenschappen
              </h3>
              <div className="h-1 w-16 bg-secondary rounded-full mt-1"></div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {traits.map((trait, index) => (
              <div 
                key={index}
                className="flex items-center gap-3 p-3 bg-success/10 rounded-lg border border-success/20 hover:bg-success/20 transition-colors group"
              >
                <CheckCircle className="w-5 h-5 text-success flex-shrink-0 group-hover:scale-110 transition-transform" />
                <span className="text-foreground font-medium">{trait}</span>
              </div>
            ))}
          </div>
        </CVCard>
      </div>
    </section>
  );
};

export default PersonalSection;