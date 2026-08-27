import React from 'react';
import { cn } from '../../utils/cn.js';

export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  variant?: 'white' | 'slate' | 'navy' | 'sand';
  padding?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
  children: React.ReactNode;
}

export function Section({
  variant = 'white',
  padding = 'lg',
  className,
  children,
  ...props
}: SectionProps) {
  const variantStyles = {
    white: 'bg-white text-[#353e5c]',
    slate: 'bg-[#f7f9fc] text-[#353e5c]',
    navy: 'bg-[#211f54] text-white',
    sand: 'bg-[#fdfaf5] text-[#353e5c]',
  };

  const paddingStyles = {
    none: 'py-0',
    sm: 'py-8 sm:py-12',
    md: 'py-12 sm:py-16',
    lg: 'py-16 sm:py-24',
    xl: 'py-20 sm:py-32',
  };

  return (
    <section
      className={cn('w-full relative', variantStyles[variant], paddingStyles[padding], className)}
      {...props}
    >
      {children}
    </section>
  );
}
