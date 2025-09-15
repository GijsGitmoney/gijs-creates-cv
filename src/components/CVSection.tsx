import { ReactNode, useState } from "react";
import { LucideIcon, ChevronDown } from "lucide-react";

interface CVSectionProps {
  icon: LucideIcon;
  title: string;
  children: ReactNode;
  className?: string;
  collapsible?: boolean;
  defaultOpen?: boolean;
}

const CVSection = ({ 
  icon: Icon, 
  title, 
  children, 
  className = "", 
  collapsible = false,
  defaultOpen = true 
}: CVSectionProps) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  const handleToggle = () => {
    if (collapsible) {
      setIsOpen(!isOpen);
    }
  };

  return (
    <section className={`mb-20 animate-fade-in ${className}`}>
      <div 
        className={`flex items-center gap-6 mb-12 ${collapsible ? 'cursor-pointer group' : ''}`}
        onClick={handleToggle}
      >
        {/* Icon with advanced styling */}
        <div className="relative">
          <div className="absolute -inset-1 bg-gradient-primary rounded-2xl opacity-60 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
          <div className="relative w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center shadow-glow group-hover:scale-110 transition-all duration-300 neon-glow">
            <Icon className="w-8 h-8 text-primary-foreground" />
          </div>
        </div>
        
        {/* Title with gradient text */}
        <div className="flex-1">
          <h2 className="text-5xl font-heading font-black gradient-text tracking-tight group-hover:scale-105 transition-transform duration-300 origin-left">
            {title}
          </h2>
          <div className="h-1 bg-gradient-primary rounded-full mt-2 w-0 group-hover:w-24 transition-all duration-500"></div>
        </div>
        
        {collapsible && (
          <div className="w-12 h-12 bg-muted/30 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
            <ChevronDown 
              className={`w-6 h-6 text-primary transition-transform duration-300 ${
                isOpen ? 'rotate-180' : ''
              }`}
            />
          </div>
        )}
      </div>
      
      <div 
        className={`overflow-hidden transition-all duration-500 ease-out ${
          collapsible && !isOpen 
            ? 'max-h-0 opacity-0' 
            : 'max-h-none opacity-100'
        }`}
      >
        <div className="pl-4 md:pl-22 space-y-8">
          {children}
        </div>
      </div>
    </section>
  );
};

export default CVSection;