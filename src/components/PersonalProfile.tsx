import CVCard from "./CVCard";

const PersonalProfile = () => {
  return (
    <section className="animate-fade-in">
      <CVCard>
        <div className="mb-6">
          <h2 className="text-3xl md:text-4xl font-heading text-foreground mb-2">
            Persoonlijk Profiel
          </h2>
          <div className="h-0.5 w-16 bg-accent rounded-full"></div>
        </div>
        
        <div className="max-w-none space-y-5">
          <p className="text-sm text-muted-foreground">
            Geboren op 29 mei 2001 in Utrecht en opgegroeid in Bergen (N-H)
          </p>
          
          <p className="text-base md:text-lg leading-relaxed text-foreground">
            <span className="font-semibold">Gedreven marketeer</span> met oog voor design en klantbeleving. 
            Van klantretentie-onderzoek bij <span className="font-medium">Turien & Co.</span> tot het bouwen van mijn eigen 
            <span className="font-semibold text-accent"> AI-startup Revalyze.io</span> met mijn beste vriend.
          </p>
          
          <p className="text-base md:text-lg leading-relaxed text-muted-foreground">
            Ik combineer creativiteit, data en ondernemerschap om impact te maken. Met ervaring in marketing research, 
            UX/UI design en startup development, breng ik zowel strategisch inzicht als hands-on execution naar elk project.
          </p>
          
          <p className="text-base md:text-lg leading-relaxed text-muted-foreground">
            Na mijn afstuderen besloot ik part-time te werken bij mijn bijbaan, waar ik met veel plezier met een hecht team van vrienden en collega's werk. Daarnaast heb ik gereisd en mij volledig op Revalyze gericht, waarin ik veel tijd, creativiteit en energie heb gestoken. Nu het project tijdelijk op pauze staat omdat mijn compagnon aan zijn masteropleiding is begonnen, richt ik mij volledig op mijn professionele groei, verdere ontwikkeling en het starten van mijn carrière in marketing en AI.
          </p>
        </div>
      </CVCard>
    </section>
  );
};

export default PersonalProfile;
