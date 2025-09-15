import { Rocket, Palette, Code, TrendingUp } from "lucide-react";
import CVCard from "./CVCard";

const StartupHighlight = () => {
  return (
    <CVCard className="bg-gradient-accent text-accent-foreground">
      <div className="flex items-start gap-4">
        <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
          <Rocket className="w-6 h-6 text-white" />
        </div>
        
        <div className="flex-1">
          <h3 className="text-2xl font-heading font-bold text-white mb-3">
            Revalyze.io - Co-founder
          </h3>
          
          <p className="text-white/90 leading-relaxed mb-4">
            Mede-oprichter van een innovative startup samen met beste vriend. We hebben een AI-agent ontwikkeld 
            die bedrijven helpt met data-analyse en insights. Als co-founder was ik verantwoordelijk voor alle 
            design aspecten van het bedrijf.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="flex items-center gap-2">
              <Palette className="w-5 h-5 text-white/80" />
              <div>
                <div className="text-white font-medium text-sm">Design Lead</div>
                <div className="text-white/70 text-xs">Website & Dashboard</div>
              </div>
            </div>
            
            <div className="flex items-center gap-2">
              <Code className="w-5 h-5 text-white/80" />
              <div>
                <div className="text-white font-medium text-sm">UX/UI</div>
                <div className="text-white/70 text-xs">Complete User Experience</div>
              </div>
            </div>
            
            <div className="flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-white/80" />
              <div>
                <div className="text-white font-medium text-sm">Marketing</div>
                <div className="text-white/70 text-xs">Branding & Visuals</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </CVCard>
  );
};

export default StartupHighlight;