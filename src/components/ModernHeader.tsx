import { Mail, Phone, MapPin, Linkedin, Download } from "lucide-react";
import { Button } from "./ui/button";

const ModernHeader = () => {
  return (
    <header className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-primary/5"></div>
      
      {/* Floating Orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-secondary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      
      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        {/* Profile Image */}
        <div className="mb-8 relative">
          <div className="w-32 h-32 mx-auto rounded-full bg-gradient-primary p-1 animate-pulse">
            <div className="w-full h-full rounded-full bg-muted flex items-center justify-center text-4xl font-bold text-primary">
              GH
            </div>
          </div>
          <div className="absolute inset-0 w-32 h-32 mx-auto rounded-full bg-gradient-primary opacity-30 blur-lg animate-pulse"></div>
        </div>
        
        {/* Name & Title */}
        <div className="mb-6 md:mb-8">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-heading font-black gradient-text mb-3 md:mb-4 animate-fade-in leading-tight">
            GIJS HAMBURGER
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground font-medium tracking-wide animate-fade-in px-4" style={{ animationDelay: '0.2s' }}>
            Creatief Marketeer & Co-founder Revalyze.io
          </p>
        </div>
        
        {/* Contact Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 mb-8 md:mb-12 animate-fade-in px-2" style={{ animationDelay: '0.4s' }}>
          <a href="mailto:casilgijs@gmail.com" className="group relative block">
            <div className="absolute -inset-0.5 bg-gradient-primary rounded-xl md:rounded-2xl opacity-30 group-hover:opacity-60 transition-opacity duration-500 blur-sm"></div>
            <div className="relative bg-gradient-card backdrop-blur-xl border border-border/50 rounded-xl md:rounded-2xl p-3 md:p-4 hover:scale-105 transition-all duration-300">
              <Mail className="w-5 h-5 md:w-6 md:h-6 text-primary mb-1 md:mb-2" />
              <p className="text-xs md:text-sm text-muted-foreground">Email</p>
              <p className="text-xs md:text-sm font-medium break-all">casilgijs@gmail.com</p>
            </div>
          </a>
          
          <div className="group relative">
            <div className="absolute -inset-0.5 bg-gradient-primary rounded-xl md:rounded-2xl opacity-30 group-hover:opacity-60 transition-opacity duration-500 blur-sm"></div>
            <div className="relative bg-gradient-card backdrop-blur-xl border border-border/50 rounded-xl md:rounded-2xl p-3 md:p-4 hover:scale-105 transition-all duration-300">
              <Phone className="w-5 h-5 md:w-6 md:h-6 text-primary mb-1 md:mb-2" />
              <p className="text-xs md:text-sm text-muted-foreground">Telefoon</p>
              <p className="text-xs md:text-sm font-medium">+31 6 40494809</p>
            </div>
          </div>
          
          <div className="group relative">
            <div className="absolute -inset-0.5 bg-gradient-primary rounded-xl md:rounded-2xl opacity-30 group-hover:opacity-60 transition-opacity duration-500 blur-sm"></div>
            <div className="relative bg-gradient-card backdrop-blur-xl border border-border/50 rounded-xl md:rounded-2xl p-3 md:p-4 hover:scale-105 transition-all duration-300">
              <MapPin className="w-5 h-5 md:w-6 md:h-6 text-primary mb-1 md:mb-2" />
              <p className="text-xs md:text-sm text-muted-foreground">Locatie</p>
              <p className="text-xs md:text-sm font-medium">Bergen, Noord-Holland</p>
            </div>
          </div>
          
          <a 
            href="https://www.linkedin.com/in/gijs-hamburger-437379263/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group relative block"
          >
            <div className="absolute -inset-0.5 bg-gradient-primary rounded-xl md:rounded-2xl opacity-30 group-hover:opacity-60 transition-opacity duration-500 blur-sm"></div>
            <div className="relative bg-gradient-card backdrop-blur-xl border border-border/50 rounded-xl md:rounded-2xl p-3 md:p-4 hover:scale-105 transition-all duration-300">
              <Linkedin className="w-5 h-5 md:w-6 md:h-6 text-primary mb-1 md:mb-2" />
              <p className="text-xs md:text-sm text-muted-foreground">LinkedIn</p>
              <p className="text-xs md:text-sm font-medium">Gijs Hamburger</p>
            </div>
          </a>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-3 justify-center animate-fade-in px-4" style={{ animationDelay: '0.6s' }}>
          <Button 
            variant="outline" 
            size="lg" 
            className="border-primary/50 hover:bg-primary/10 font-semibold px-6 md:px-8 py-3 rounded-xl md:rounded-2xl text-sm md:text-base w-full sm:w-auto"
            asChild
          >
            <a href="/Gijs_Hamburger_Curriculum_Vitae_2026.pdf" download>
              <Download className="w-4 h-4 md:w-5 md:h-5 mr-2" />
              Download CV
            </a>
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="border-primary/50 hover:bg-primary/10 font-semibold px-6 md:px-8 py-3 rounded-xl md:rounded-2xl text-sm md:text-base w-full sm:w-auto"
            asChild
          >
            <a href="/Motivatiebrief_Breinstein_GijsH.docx" download>
              <Download className="w-4 h-4 md:w-5 md:h-5 mr-2" />
              Motivatiebrief
            </a>
          </Button>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </header>
  );
};

export default ModernHeader;