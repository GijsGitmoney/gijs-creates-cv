import { Mail, Phone, MapPin, Calendar, Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

const CVHeader = () => {
  return (
    <header className="relative bg-gradient-hero text-white overflow-hidden min-h-screen flex items-center">
      {/* Animated background particles */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-2 h-2 bg-primary rounded-full animate-float"></div>
        <div className="absolute top-40 right-32 w-1 h-1 bg-accent rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-32 left-1/4 w-1.5 h-1.5 bg-success rounded-full animate-float" style={{ animationDelay: '4s' }}></div>
        <div className="absolute top-1/3 right-20 w-1 h-1 bg-primary-light rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
      </div>
      
      {/* Glass morphism overlay */}
      <div className="absolute inset-0 bg-gradient-glass backdrop-blur-sm"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Profile Info */}
          <div className="animate-fade-in-up">
            <div className="mb-8">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6">
                <div className="w-2 h-2 bg-success rounded-full animate-glow"></div>
                <span className="text-sm font-medium">Available for opportunities</span>
              </div>
              
              <p className="text-accent-light text-xl font-medium mb-4 tracking-wide">
                Marketing Professional & Ondernemer
              </p>
              <h1 className="text-6xl lg:text-7xl font-heading font-bold mb-6 tracking-tight">
                Gijs <span className="text-gradient-accent">Hamburger</span>
              </h1>
              <p className="text-xl text-white/90 leading-relaxed max-w-2xl mb-8">
                Gedreven, creatief en ambitieus marketeer met passie voor design, technologie en klantbeleving. 
                Co-founder van AI-startup met focus op innovatieve oplossingen en gebruikerservaring.
              </p>
            </div>
            
            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-4 border border-white/10">
                <div className="text-2xl font-bold text-accent">4+</div>
                <div className="text-white/70 text-sm">Jaar ervaring</div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-4 border border-white/10">
                <div className="text-2xl font-bold text-primary">1</div>
                <div className="text-white/70 text-sm">Startup opgericht</div>
              </div>
            </div>
            
            {/* Quick Info */}
            <div className="flex flex-wrap gap-6 text-white/80">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>29 mei 2001</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>Bergen, Noord-Holland</span>
              </div>
            </div>
          </div>

          {/* Contact Card - Apple-style Glass */}
          <div className="animate-scale-in" style={{ animationDelay: '0.3s' }}>
            <div className="bg-gradient-glass backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-hover">
              <h3 className="text-2xl font-heading font-semibold mb-6">Contact</h3>
              <div className="space-y-4">
                <a 
                  href="mailto:casilgijs@gmail.com" 
                  className="flex items-center gap-4 text-white/90 hover:text-white transition-all duration-300 group p-3 rounded-xl hover:bg-white/10"
                >
                  <div className="w-12 h-12 bg-gradient-primary rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-glow">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="font-medium">Email</div>
                    <div className="text-white/70 text-sm">casilgijs@gmail.com</div>
                  </div>
                </a>
                
                <a 
                  href="tel:06-40494809" 
                  className="flex items-center gap-4 text-white/90 hover:text-white transition-all duration-300 group p-3 rounded-xl hover:bg-white/10"
                >
                  <div className="w-12 h-12 bg-gradient-accent rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="font-medium">Telefoon</div>
                    <div className="text-white/70 text-sm">06-40494809</div>
                  </div>
                </a>
                
                <div className="flex items-center gap-4 text-white/90 p-3">
                  <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="font-medium">Locatie</div>
                    <div className="text-white/70 text-sm">Dokter van Peltlaan 15<br />1861 KA Bergen</div>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 pt-6 border-t border-white/20">
                <Button 
                  className="w-full bg-gradient-primary hover:bg-primary-dark text-white border-0 shadow-glow hover:shadow-hover transition-all duration-300 h-12 text-lg font-medium"
                >
                  Download CV
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default CVHeader;