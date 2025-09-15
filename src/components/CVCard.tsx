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
        bg-gradient-card border border-border rounded-xl p-6 shadow-card transition-smooth
        ${hover ? 'hover:shadow-hover hover:bg-card-hover' : ''}
        ${className}
      `}
    >
      {children}
    </div>
  );
};

export default CVCard;