import { Mail, Phone, MapPin, Linkedin, ExternalLink, Github } from "lucide-react";
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
        <div className="mb-8">
          <h1 className="text-6xl md:text-8xl font-heading font-black gradient-text mb-4 animate-fade-in">
            GIJS HAMBURGER
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground font-medium tracking-wide animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Creatief Marketeer & Co-founder Revalyze.io
          </p>
        </div>
        
        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12 animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <div className="group relative">
            <div className="absolute -inset-0.5 bg-gradient-primary rounded-2xl opacity-30 group-hover:opacity-60 transition-opacity duration-500 blur-sm"></div>
            <div className="relative bg-gradient-card backdrop-blur-xl border border-border/50 rounded-2xl p-4 hover:scale-105 transition-all duration-300">
              <Mail className="w-6 h-6 text-primary mb-2" />
              <p className="text-sm text-muted-foreground">Email</p>
              <p className="text-sm font-medium">gijs@revalyze.io</p>
            </div>
          </div>
          
          <div className="group relative">
            <div className="absolute -inset-0.5 bg-gradient-primary rounded-2xl opacity-30 group-hover:opacity-60 transition-opacity duration-500 blur-sm"></div>
            <div className="relative bg-gradient-card backdrop-blur-xl border border-border/50 rounded-2xl p-4 hover:scale-105 transition-all duration-300">
              <Phone className="w-6 h-6 text-primary mb-2" />
              <p className="text-sm text-muted-foreground">Telefoon</p>
              <p className="text-sm font-medium">+31 6 12345678</p>
            </div>
          </div>
          
          <div className="group relative">
            <div className="absolute -inset-0.5 bg-gradient-primary rounded-2xl opacity-30 group-hover:opacity-60 transition-opacity duration-500 blur-sm"></div>
            <div className="relative bg-gradient-card backdrop-blur-xl border border-border/50 rounded-2xl p-4 hover:scale-105 transition-all duration-300">
              <MapPin className="w-6 h-6 text-primary mb-2" />
              <p className="text-sm text-muted-foreground">Locatie</p>
              <p className="text-sm font-medium">Amsterdam, NL</p>
            </div>
          </div>
          
          <div className="group relative">
            <div className="absolute -inset-0.5 bg-gradient-primary rounded-2xl opacity-30 group-hover:opacity-60 transition-opacity duration-500 blur-sm"></div>
            <div className="relative bg-gradient-card backdrop-blur-xl border border-border/50 rounded-2xl p-4 hover:scale-105 transition-all duration-300">
              <Linkedin className="w-6 h-6 text-primary mb-2" />
              <p className="text-sm text-muted-foreground">LinkedIn</p>
              <p className="text-sm font-medium">gijs-hamburger</p>
            </div>
          </div>
        </div>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-3 rounded-2xl shadow-glow">
            <ExternalLink className="w-5 h-5 mr-2" />
            View Portfolio
          </Button>
          <Button variant="outline" size="lg" className="border-primary/50 hover:bg-primary/10 font-semibold px-8 py-3 rounded-2xl">
            <Mail className="w-5 h-5 mr-2" />
            Contact Me
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