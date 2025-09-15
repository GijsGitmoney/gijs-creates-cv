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
        bg-gradient-glass backdrop-blur-sm border border-border rounded-2xl p-8 shadow-card transition-all duration-500 ease-out
        ${hover ? 'hover:shadow-hover hover:bg-card-hover hover:scale-105' : ''}
        ${className}
      `}
    >
      {children}
    </div>
  );
};

export default CVCard;