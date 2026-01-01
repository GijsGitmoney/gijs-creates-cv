import { Heart, Dumbbell, Plane, Mountain, Book, Users, Target, CheckCircle } from "lucide-react";
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
      <div className="text-center mb-8 md:mb-12 px-4">
        <h2 className="text-3xl md:text-4xl font-heading font-bold gradient-text mb-3 md:mb-4">
          Persoonlijk & Hobby's
        </h2>
        <p className="text-base md:text-lg text-muted-foreground">Wat mij drijft buiten werk</p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
        {/* Hobbies */}
        <CVCard>
          <div className="flex items-center gap-3 md:gap-4 mb-5 md:mb-6">
            <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-primary rounded-lg md:rounded-xl flex items-center justify-center shadow-glow flex-shrink-0">
              <Heart className="w-5 h-5 md:w-6 md:h-6 text-primary-foreground" />
            </div>
            <div className="min-w-0">
              <h3 className="text-lg md:text-xl font-heading font-bold text-foreground">
                Hobby's & Interesses
              </h3>
              <div className="h-1 w-14 md:w-16 bg-primary rounded-full mt-1"></div>
            </div>
          </div>
          
          <div className="space-y-3 md:space-y-4">
            {hobbies.map((hobby, index) => {
              const Icon = hobby.icon;
              return (
                <div key={index} className="group relative">
                  <div className="absolute -inset-0.5 bg-gradient-primary rounded-lg md:rounded-xl opacity-0 group-hover:opacity-30 transition-opacity duration-300 blur-sm -z-10"></div>
                  <div className="relative flex items-start gap-3 md:gap-4 p-3 md:p-4 bg-muted/40 backdrop-blur-sm rounded-lg md:rounded-xl border border-border/30 hover:border-primary/50 transition-all duration-300">
                    <div className="w-8 h-8 md:w-10 md:h-10 bg-primary/20 text-primary rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-primary/30 transition-colors border border-primary/30">
                      <Icon className="w-4 h-4 md:w-5 md:h-5" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-sm md:text-base font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
                        {hobby.title}
                      </h4>
                      <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
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
          <div className="flex items-center gap-3 md:gap-4 mb-5 md:mb-6">
            <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-primary rounded-lg md:rounded-xl flex items-center justify-center shadow-glow flex-shrink-0">
              <Target className="w-5 h-5 md:w-6 md:h-6 text-primary-foreground" />
            </div>
            <div className="min-w-0">
              <h3 className="text-lg md:text-xl font-heading font-bold text-foreground">
                Persoonlijke Eigenschappen
              </h3>
              <div className="h-1 w-14 md:w-16 bg-secondary rounded-full mt-1"></div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 md:gap-3">
            {traits.map((trait, index) => (
              <div 
                key={index}
                className="flex items-center gap-2 md:gap-3 p-2.5 md:p-3 bg-success/20 rounded-lg border border-success/30 hover:bg-success/25 transition-colors group"
              >
                <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-success flex-shrink-0 group-hover:scale-110 transition-transform" />
                <span className="text-sm md:text-base text-foreground font-medium">{trait}</span>
              </div>
            ))}
          </div>
        </CVCard>
      </div>
    </section>
  );
};

export default PersonalSection;