import { ReactNode } from "react";
import { LucideIcon } from "lucide-react";

interface CVSectionProps {
  icon: LucideIcon;
  title: string;
  children: ReactNode;
  className?: string;
}

const CVSection = ({ icon: Icon, title, children, className = "" }: CVSectionProps) => {
  return (
    <section className={`mb-12 ${className}`}>
      <div className="flex items-center gap-3 mb-8">
        <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center shadow-glow">
          <Icon className="w-6 h-6 text-white" />
        </div>
        <h2 className="text-3xl font-heading font-bold text-foreground">
          {title}
        </h2>
      </div>
      <div className="pl-15">
        {children}
      </div>
    </section>
  );
};

export default CVSection;