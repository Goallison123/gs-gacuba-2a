import React from 'react';
import { cn } from '../../utils/cn.js';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  hoverEffect?: boolean;
}

export function Card({ className, hoverEffect = true, children, ...props }: CardProps) {
  return (
    <div
      className={cn(
        'bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden transition-all duration-300',
        hoverEffect && 'hover:shadow-md hover:border-gray-200 hover:-translate-y-0.5',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
