import { ReactNode } from "react";

interface CVCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

const CVCard = ({ children, className = "", hover = true }: CVCardProps) => {
  return (
    <div className="group relative">
      {/* Gradient Border */}
      <div className="absolute -inset-0.5 bg-gradient-primary rounded-2xl opacity-30 group-hover:opacity-60 transition-opacity duration-500 blur-sm"></div>
      
      {/* Main Card */}
      <div 
        className={`
          relative bg-gradient-card backdrop-blur-xl border border-border/50 rounded-2xl p-6 md:p-8 shadow-card transition-all duration-500 ease-out
          ${hover ? 'hover:shadow-hover hover:border-primary/30 md:hover:scale-[1.02] will-change-transform' : ''}
          glass-effect
          ${className}
        `}
      >
        {/* Inner glow effect */}
        <div className="absolute inset-0 bg-gradient-glass rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        
        {/* Content */}
        <div className="relative z-10">
          {children}
        </div>
      </div>
    </div>
  );
};

export default CVCard;