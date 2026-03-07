import { Mail, Phone, MapPin, Linkedin, Download, ArrowDown } from "lucide-react";
import { Button } from "./ui/button";

const ModernHeader = () => {
  return (
    <header className="relative min-h-screen flex items-center justify-center">
      {/* Content */}
      <div className="relative z-10 text-center max-w-3xl mx-auto px-4">
        {/* Initials */}
        <div className="mb-10">
          <div className="w-20 h-20 mx-auto rounded-xl bg-primary flex items-center justify-center text-2xl font-semibold text-primary-foreground tracking-wide">
            GH
          </div>
        </div>
        
        {/* Name & Title */}
        <div className="mb-10 md:mb-14">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading mb-4 animate-fade-in text-foreground leading-tight">
            Gijs Hamburger
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground font-normal tracking-wide animate-fade-in" style={{ animationDelay: '0.15s' }}>
            Creatief Marketeer · Co-founder Revalyze.io
          </p>
        </div>
        
        {/* Contact Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 mb-10 md:mb-14 animate-fade-in" style={{ animationDelay: '0.3s' }}>
          <a href="mailto:gijsqh@outlook.com" className="group block border border-border rounded-lg p-4 hover:border-accent/50 hover:shadow-hover transition-all duration-300">
            <Mail className="w-5 h-5 text-accent mb-2" />
            <p className="text-xs text-muted-foreground">Email</p>
            <p className="text-sm font-medium text-foreground break-all">gijsqh@outlook.com</p>
          </a>
          
          <div className="border border-border rounded-lg p-4">
            <Phone className="w-5 h-5 text-accent mb-2" />
            <p className="text-xs text-muted-foreground">Telefoon</p>
            <p className="text-sm font-medium text-foreground">+31 6 40494809</p>
          </div>
          
          <div className="border border-border rounded-lg p-4">
            <MapPin className="w-5 h-5 text-accent mb-2" />
            <p className="text-xs text-muted-foreground">Locatie</p>
            <p className="text-sm font-medium text-foreground">Bergen, Noord-Holland</p>
          </div>
          
          <a 
            href="https://www.linkedin.com/in/gijs-hamburger-437379263/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group block border border-border rounded-lg p-4 hover:border-accent/50 hover:shadow-hover transition-all duration-300"
          >
            <Linkedin className="w-5 h-5 text-accent mb-2" />
            <p className="text-xs text-muted-foreground">LinkedIn</p>
            <p className="text-sm font-medium text-foreground">Gijs Hamburger</p>
          </a>
        </div>
        
        <div className="flex justify-center animate-fade-in" style={{ animationDelay: '0.45s' }}>
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary-variant text-primary-foreground font-medium px-8 py-3 rounded-md text-sm"
            asChild
          >
            <a href="/Gijs_Hamburger_Curriculum_Vitae_2026.pdf" download>
              <Download className="w-4 h-4 mr-2" />
              Download CV
            </a>
          </Button>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <ArrowDown className="w-5 h-5 text-muted-foreground animate-bounce" />
      </div>
    </header>
  );
};

export default ModernHeader;
