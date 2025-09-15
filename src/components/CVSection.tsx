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
    <section className={`mb-16 animate-fade-in ${className}`}>
      <div 
        className={`flex items-center gap-4 mb-8 ${collapsible ? 'cursor-pointer group' : ''}`}
        onClick={handleToggle}
      >
        <div className="w-14 h-14 bg-gradient-primary rounded-2xl flex items-center justify-center shadow-glow group-hover:scale-110 transition-transform">
          <Icon className="w-7 h-7 text-white" />
        </div>
        <h2 className="text-4xl font-heading font-bold text-foreground tracking-tight">
          {title}
        </h2>
        {collapsible && (
          <ChevronDown 
            className={`w-6 h-6 text-muted-foreground transition-transform duration-300 ${
              isOpen ? 'rotate-180' : ''
            }`}
          />
        )}
      </div>
      
      <div 
        className={`overflow-hidden transition-all duration-500 ease-out ${
          collapsible && !isOpen 
            ? 'max-h-0 opacity-0' 
            : 'max-h-none opacity-100'
        }`}
      >
        <div className="pl-18 space-y-6">
          {children}
        </div>
      </div>
    </section>
  );
};

export default CVSection;