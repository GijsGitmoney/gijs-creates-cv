import { Mail, Phone, MapPin, Linkedin, Download, ArrowDown } from "lucide-react";
import { Button } from "./ui/button";

const ModernHeader = () => {
  return (
    <header className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#1A1F2C]">
      {/* Subtle radial spotlight */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/[0.03] rounded-full blur-3xl"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-3xl mx-auto px-4">
        {/* GH Badge */}
        <div className="mb-10">
          <div className="w-24 h-24 mx-auto rounded-2xl bg-white/[0.08] border border-white/[0.1] backdrop-blur-sm flex items-center justify-center text-2xl font-heading text-slate-200 tracking-wide shadow-[0_0_30px_rgba(255,255,255,0.04)]">
            GH
          </div>
        </div>
        
        {/* Name & Title */}
        <div className="mb-10 md:mb-14">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading mb-4 animate-fade-in text-white leading-tight">
            Gijs Hamburger
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-slate-400 font-normal tracking-wide animate-fade-in font-mono" style={{ animationDelay: '0.15s' }}>
            Creatief Marketeer · Co-founder Revalyze.io
          </p>
        </div>
        
        {/* Contact Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 mb-10 md:mb-14 animate-fade-in" style={{ animationDelay: '0.3s' }}>
          <a href="mailto:gijsqh@outlook.com" className="group block bg-white/[0.05] border border-white/[0.1] backdrop-blur-sm rounded-xl p-4 hover:bg-white/[0.08] hover:border-white/[0.2] transition-all duration-300">
            <Mail className="w-5 h-5 text-slate-400 mb-2 group-hover:text-white transition-colors" />
            <p className="text-xs text-slate-500 font-mono uppercase tracking-wider">Email</p>
            <p className="text-sm font-medium text-slate-200 break-all mt-1">gijsqh@outlook.com</p>
          </a>
          
          <div className="bg-white/[0.05] border border-white/[0.1] backdrop-blur-sm rounded-xl p-4">
            <Phone className="w-5 h-5 text-slate-400 mb-2" />
            <p className="text-xs text-slate-500 font-mono uppercase tracking-wider">Telefoon</p>
            <p className="text-sm font-medium text-slate-200 font-mono mt-1">+31 6 40494809</p>
          </div>
          
          <div className="bg-white/[0.05] border border-white/[0.1] backdrop-blur-sm rounded-xl p-4">
            <MapPin className="w-5 h-5 text-slate-400 mb-2" />
            <p className="text-xs text-slate-500 font-mono uppercase tracking-wider">Locatie</p>
            <p className="text-sm font-medium text-slate-200 mt-1">Bergen, Noord-Holland</p>
          </div>
          
          <a 
            href="https://www.linkedin.com/in/gijs-hamburger-437379263/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group block bg-white/[0.05] border border-white/[0.1] backdrop-blur-sm rounded-xl p-4 hover:bg-white/[0.08] hover:border-white/[0.2] transition-all duration-300"
          >
            <Linkedin className="w-5 h-5 text-slate-400 mb-2 group-hover:text-white transition-colors" />
            <p className="text-xs text-slate-500 font-mono uppercase tracking-wider">LinkedIn</p>
            <p className="text-sm font-medium text-slate-200 mt-1">Gijs Hamburger</p>
          </a>
        </div>
        
        <div className="flex justify-center animate-fade-in" style={{ animationDelay: '0.45s' }}>
          <a 
            href="/Gijs_Hamburger_Curriculum_Vitae_2026.pdf" 
            download
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#1A1F2C] rounded-full font-semibold hover:bg-slate-200 transition-all duration-300 text-sm"
          >
            <Download className="w-4 h-4" />
            Download CV
          </a>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <ArrowDown className="w-5 h-5 text-slate-500 animate-bounce" />
      </div>
    </header>
  );
};

export default ModernHeader;
