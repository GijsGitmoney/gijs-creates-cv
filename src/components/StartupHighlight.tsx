import { Rocket, Palette, Code, TrendingUp } from "lucide-react";
import CVCard from "./CVCard";

const StartupHighlight = () => {
  return (
    <CVCard className="bg-gradient-accent text-accent-foreground overflow-hidden relative">
      {/* Animated background elements */}
      <div className="absolute top-4 right-4 w-20 h-20 bg-white/10 rounded-full blur-xl animate-float"></div>
      <div className="absolute bottom-4 left-4 w-16 h-16 bg-white/5 rounded-full blur-lg animate-float" style={{ animationDelay: '2s' }}></div>
      
      <div className="relative z-10">
        <div className="flex items-start gap-6">
          <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-3xl flex items-center justify-center flex-shrink-0 shadow-glow">
            <Rocket className="w-8 h-8 text-white" />
          </div>
          
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-4">
              <h3 className="text-3xl font-heading font-bold text-white">
                Revalyze.io
              </h3>
              <span className="bg-white/20 text-white text-sm px-3 py-1 rounded-full font-medium">
                Co-Founder
              </span>
            </div>
            
            <p className="text-white/90 leading-relaxed mb-6 text-lg">
              Mede-oprichter van een innovatieve AI-startup samen met mijn beste vriend. We hebben een intelligente 
              AI-agent ontwikkeld die bedrijven helpt met data-analyse en actionable insights. Als co-founder en 
              design lead was ik volledig verantwoordelijk voor de complete visuele identiteit en gebruikerservaring.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="flex items-center gap-3 p-4 bg-white/10 backdrop-blur-sm rounded-xl">
                <Palette className="w-6 h-6 text-white flex-shrink-0" />
                <div>
                  <div className="text-white font-semibold">Website Design</div>
                  <div className="text-white/70 text-sm">Complete frontend ontwerp</div>
                </div>
              </div>
              
              <div className="flex items-center gap-3 p-4 bg-white/10 backdrop-blur-sm rounded-xl">
                <Code className="w-6 h-6 text-white flex-shrink-0" />
                <div>
                  <div className="text-white font-semibold">Dashboard UX</div>
                  <div className="text-white/70 text-sm">User interface & experience</div>
                </div>
              </div>
              
              <div className="flex items-center gap-3 p-4 bg-white/10 backdrop-blur-sm rounded-xl">
                <TrendingUp className="w-6 h-6 text-white flex-shrink-0" />
                <div>
                  <div className="text-white font-semibold">Email Design</div>
                  <div className="text-white/70 text-sm">Marketing & communicatie</div>
                </div>
              </div>
            </div>
            
            <div className="mt-6 p-4 bg-white/10 backdrop-blur-sm rounded-xl">
              <h4 className="text-white font-semibold mb-2">Kernvaardigheden toegepast:</h4>
              <div className="flex flex-wrap gap-2">
                {['UX/UI Design', 'Branding', 'Marketing Design', 'Ondernemerschap', 'Product Development'].map((skill, index) => (
                  <span key={index} className="bg-white/20 text-white text-sm px-3 py-1 rounded-full">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </CVCard>
  );
};

export default StartupHighlight;