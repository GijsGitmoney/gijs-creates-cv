import { Mail, Linkedin, Download } from "lucide-react";
import { Button } from "./ui/button";
import CVCard from "./CVCard";

const CallToAction = () => {
  return (
    <section className="animate-fade-in">
      <CVCard hover={false}>
        <div className="text-center">
          <div className="mb-8">
            <h2 className="text-2xl md:text-3xl font-heading text-foreground mb-3">
              Gedreven om mijn kennis en ervaring verder te ontwikkelen.
            </h2>
          </div>
          
          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-10">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary-variant text-primary-foreground font-medium px-8 rounded-md"
              asChild
            >
              <a href="mailto:gijsqh@outlook.com">
                <Mail className="w-4 h-4 mr-2" />
                Start een gesprek
              </a>
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="border-border hover:bg-secondary font-medium px-8 rounded-md"
              asChild
            >
              <a href="https://www.linkedin.com/in/gijs-hamburger-437379263/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-4 h-4 mr-2" />
                Connect op LinkedIn
              </a>
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="border-border hover:bg-secondary font-medium px-8 rounded-md"
              asChild
            >
              <a href="/Gijs_Hamburger_Curriculum_Vitae_2026.pdf" download>
                <Download className="w-4 h-4 mr-2" />
                Download CV (PDF)
              </a>
            </Button>
          </div>
          
          {/* Contact Info */}
          <div className="pt-8 border-t border-border">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              <div className="text-center">
                <p className="text-muted-foreground text-xs uppercase tracking-wider mb-1">Email</p>
                <p className="font-medium text-foreground">gijsqh@outlook.com</p>
              </div>
              <div className="text-center">
                <p className="text-muted-foreground text-xs uppercase tracking-wider mb-1">Telefoon</p>
                <p className="font-medium text-foreground">+31 6 40494809</p>
              </div>
              <div className="text-center">
                <p className="text-muted-foreground text-xs uppercase tracking-wider mb-1">Locatie</p>
                <p className="font-medium text-foreground">Bergen, Noord-Holland</p>
              </div>
            </div>
          </div>
        </div>
      </CVCard>
    </section>
  );
};

export default CallToAction;
