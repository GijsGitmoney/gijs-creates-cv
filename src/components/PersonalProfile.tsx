import { User } from "lucide-react";
import CVCard from "./CVCard";

const PersonalProfile = () => {
  return (
    <section className="animate-fade-in">
      <CVCard>
        <div className="flex items-center gap-4 mb-8">
          <div className="w-14 h-14 bg-gradient-primary rounded-2xl flex items-center justify-center shadow-glow">
            <User className="w-7 h-7 text-primary-foreground" />
          </div>
          <div>
            <h2 className="text-3xl font-heading font-bold gradient-text">
              Persoonlijk Profiel
            </h2>
            <div className="h-1 w-20 bg-primary rounded-full mt-2"></div>
          </div>
        </div>
        
        <div className="prose prose-lg max-w-none">
          <p className="text-lg leading-relaxed text-foreground mb-6">
            <span className="text-primary font-semibold">Gedreven marketeer</span> met oog voor design en klantbeleving. 
            Van klantretentie-onderzoek bij <span className="font-medium">Turien & Co.</span> tot het bouwen van mijn eigen 
            <span className="text-accent font-semibold"> AI-startup Revalyze.io</span>.
          </p>
          
          <p className="text-lg leading-relaxed text-muted-foreground">
            Ik combineer <span className="text-primary">creativiteit</span>, <span className="text-secondary">data</span> en 
            <span className="text-accent"> ondernemerschap</span> om impact te maken. Met ervaring in marketing research, 
            UX/UI design en startup development, breng ik zowel strategisch inzicht als hands-on execution naar elk project.
          </p>
        </div>
      </CVCard>
    </section>
  );
};

export default PersonalProfile;