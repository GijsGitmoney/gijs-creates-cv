import { Mail, Phone, MapPin, Calendar, Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

const CVHeader = () => {
  return (
    <header className="relative bg-gradient-hero text-white overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSkiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-30"></div>
      
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          {/* Profile Info */}
          <div className="lg:col-span-2">
            <div className="mb-4">
              <p className="text-accent-light text-lg font-medium mb-2">
                Marketing Professional & Ondernemer
              </p>
              <h1 className="text-5xl lg:text-6xl font-heading font-bold mb-4">
                Gijs Hamburger
              </h1>
              <p className="text-xl text-white/90 leading-relaxed max-w-2xl">
                Gedreven, creatief en ambitieus marketeer met passie voor design, technologie en klantbeleving. 
                Altijd bezig met persoonlijke groei en het creëren van waardevolle ervaringen voor klanten.
              </p>
            </div>
            
            {/* Quick Info */}
            <div className="flex flex-wrap gap-4 text-white/80">
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

          {/* Contact Card */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
            <h3 className="text-lg font-heading font-semibold mb-4">Contact</h3>
            <div className="space-y-3">
              <a 
                href="mailto:casilgijs@gmail.com" 
                className="flex items-center gap-3 text-white/90 hover:text-white transition-colors group"
              >
                <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center group-hover:bg-white/30 transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                <span>casilgijs@gmail.com</span>
              </a>
              
              <a 
                href="tel:06-40494809" 
                className="flex items-center gap-3 text-white/90 hover:text-white transition-colors group"
              >
                <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center group-hover:bg-white/30 transition-colors">
                  <Phone className="w-5 h-5" />
                </div>
                <span>06-40494809</span>
              </a>
              
              <div className="flex items-center gap-3 text-white/90">
                <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                  <MapPin className="w-5 h-5" />
                </div>
                <span>Dokter van Peltlaan 15<br />1861 KA Bergen</span>
              </div>
            </div>
            
            <div className="mt-6 pt-4 border-t border-white/20">
              <Button 
                variant="secondary" 
                className="w-full bg-white/20 hover:bg-white/30 text-white border-white/30"
              >
                Download CV
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default CVHeader;