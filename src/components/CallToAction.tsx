import { Mail, ExternalLink, Linkedin, Download, QrCode } from "lucide-react";
import { Button } from "./ui/button";
import CVCard from "./CVCard";

const CallToAction = () => {
  return (
    <section className="animate-fade-in">
      <CVCard className="text-center relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 bg-primary rounded-full blur-2xl"></div>
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-accent rounded-full blur-2xl"></div>
        </div>
        
        <div className="relative z-10">
          <div className="mb-8">
            <h2 className="text-3xl font-heading font-bold gradient-text mb-4">
              Gedreven om mijn kennis en ervaring verder te ontwikkelen.
            </h2>
          </div>
          
          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-4 rounded-2xl shadow-glow group">
              <Mail className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
              Start een gesprek
            </Button>
            
            <Button variant="outline" size="lg" className="border-primary/50 hover:bg-primary/10 font-semibold px-8 py-4 rounded-2xl group">
              <Linkedin className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
              Connect op LinkedIn
            </Button>
            
            <Button variant="secondary" size="lg" className="font-semibold px-8 py-4 rounded-2xl group">
              <Download className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
              Download CV (PDF)
            </Button>
          </div>
          
          
          {/* Contact Info */}
          <div className="mt-8 pt-8 border-t border-border/50">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              <div className="text-center">
                <p className="text-muted-foreground">Email</p>
                <p className="font-medium text-foreground">casilgijs@gmail.com</p>
              </div>
              <div className="text-center">
                <p className="text-muted-foreground">Telefoon</p>
                <p className="font-medium text-foreground">+31 6 40494809</p>
              </div>
              <div className="text-center">
                <p className="text-muted-foreground">Locatie</p>
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