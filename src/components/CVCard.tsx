import { ReactNode } from "react";

interface CVCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

const CVCard = ({ children, className = "", hover = true }: CVCardProps) => {
  return (
    <div 
      className={`
        bg-card border border-border rounded-lg p-6 md:p-8 shadow-card transition-all duration-300 ease-out
        ${hover ? 'hover:shadow-hover hover:border-border-accent/30' : ''}
        ${className}
      `}
    >
      {children}
    </div>
  );
};

export default CVCard;
