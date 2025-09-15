import { Mail, Phone, MapPin, Linkedin, Globe, Sparkles } from "lucide-react";

const CVHeader = () => {
  return (
    <header className="relative overflow-hidden min-h-screen flex items-center justify-center">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-hero"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(0,255,255,0.1)_0%,transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(128,0,255,0.1)_0%,transparent_50%)]"></div>
      
      {/* Floating Particles */}
      <div className="absolute top-20 left-20 w-2 h-2 bg-primary rounded-full animate-float opacity-60"></div>
      <div className="absolute top-40 right-32 w-3 h-3 bg-accent rounded-full animate-float opacity-40" style={{animationDelay: '1s'}}></div>
      <div className="absolute bottom-32 left-40 w-4 h-4 bg-success rounded-full animate-float opacity-50" style={{animationDelay: '2s'}}></div>
      <div className="absolute bottom-20 right-20 w-2 h-2 bg-primary-glow rounded-full animate-float opacity-70" style={{animationDelay: '3s'}}></div>
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      
      <div className="relative max-w-6xl mx-auto px-6 text-center space-y-12">
        {/* Main Title */}
        <div className="space-y-6">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-12 h-12 rounded-full bg-primary/15 flex items-center justify-center backdrop-blur-sm border border-primary/30 animate-glow">
              <Sparkles className="w-6 h-6 text-primary" />
            </div>
            <span className="text-primary font-tech text-lg tracking-wider">PORTFOLIO 2024</span>
            <div className="w-12 h-12 rounded-full bg-accent/15 flex items-center justify-center backdrop-blur-sm border border-accent/30 animate-glow" style={{animationDelay: '1s'}}>
              <Sparkles className="w-6 h-6 text-accent" />
            </div>
          </div>
          
          <h1 className="text-7xl md:text-9xl font-heading font-black tracking-tight">
            <span className="gradient-text animate-slide-up">GIJS</span>
            <br />
            <span className="gradient-text animate-slide-up" style={{animationDelay: '0.2s'}}>HAMBURGER</span>
          </h1>
          
          <div className="relative">
            <p className="text-2xl md:text-4xl font-tech text-foreground/90 animate-slide-up tracking-wide" style={{animationDelay: '0.4s'}}>
              MARKETING STRATEGIST
            </p>
            <p className="text-lg md:text-xl text-muted-foreground mt-2 animate-slide-up" style={{animationDelay: '0.6s'}}>
              Business Studies • Digital Innovation • Growth Hacking
            </p>
          </div>
        </div>
        
        {/* Modern Contact Card */}
        <div className="animate-slide-up" style={{animationDelay: '0.8s'}}>
          <div className="inline-block p-1 bg-gradient-primary rounded-3xl">
            <div className="bg-card rounded-3xl p-8 glass-effect">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="group flex items-center gap-3 p-4 rounded-xl bg-muted/30 hover:bg-primary/10 transition-all duration-300 hover:scale-105">
                  <div className="w-10 h-10 bg-primary/20 rounded-xl flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div className="text-left">
                    <p className="text-xs text-muted-foreground uppercase tracking-wider">Email</p>
                    <p className="text-sm font-medium text-foreground">gijs@example.com</p>
                  </div>
                </div>
                
                <div className="group flex items-center gap-3 p-4 rounded-xl bg-muted/30 hover:bg-accent/10 transition-all duration-300 hover:scale-105">
                  <div className="w-10 h-10 bg-accent/20 rounded-xl flex items-center justify-center group-hover:bg-accent/30 transition-colors">
                    <Phone className="w-5 h-5 text-accent" />
                  </div>
                  <div className="text-left">
                    <p className="text-xs text-muted-foreground uppercase tracking-wider">Phone</p>
                    <p className="text-sm font-medium text-foreground">+31 6 12345678</p>
                  </div>
                </div>
                
                <div className="group flex items-center gap-3 p-4 rounded-xl bg-muted/30 hover:bg-success/10 transition-all duration-300 hover:scale-105">
                  <div className="w-10 h-10 bg-success/20 rounded-xl flex items-center justify-center group-hover:bg-success/30 transition-colors">
                    <MapPin className="w-5 h-5 text-success" />
                  </div>
                  <div className="text-left">
                    <p className="text-xs text-muted-foreground uppercase tracking-wider">Location</p>
                    <p className="text-sm font-medium text-foreground">Alkmaar, NL</p>
                  </div>
                </div>
                
                <div className="group flex items-center gap-3 p-4 rounded-xl bg-muted/30 hover:bg-primary/10 transition-all duration-300 hover:scale-105">
                  <div className="w-10 h-10 bg-primary/20 rounded-xl flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                    <Linkedin className="w-5 h-5 text-primary" />
                  </div>
                  <div className="text-left">
                    <p className="text-xs text-muted-foreground uppercase tracking-wider">LinkedIn</p>
                    <p className="text-sm font-medium text-foreground">/gijshamburger</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="animate-slide-up" style={{animationDelay: '1s'}}>
          <div className="flex flex-col items-center gap-4 mt-16">
            <span className="text-sm text-muted-foreground font-tech tracking-wider">SCROLL TO EXPLORE</span>
            <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-bounce"></div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default CVHeader;