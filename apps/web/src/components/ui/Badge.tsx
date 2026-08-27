import React from 'react';
import { cn } from '../../utils/cn.js';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'primary' | 'navy' | 'slate' | 'sand' | 'success' | 'outline';
  children: React.ReactNode;
}

export function Badge({ variant = 'primary', className, children, ...props }: BadgeProps) {
  const variantStyles = {
    primary: 'bg-orange-50 text-[#ff8c00] border border-orange-200/60',
    navy: 'bg-[#211f54]/10 text-[#211f54] border border-[#211f54]/20',
    slate: 'bg-slate-100 text-[#353e5c] border border-slate-200',
    sand: 'bg-[#c3b091]/20 text-[#827154] border border-[#c3b091]/40',
    success: 'bg-emerald-50 text-emerald-700 border border-emerald-200',
    outline: 'bg-transparent text-[#6d758f] border border-gray-200',
  };

  return (
    <span
      className={cn(
        'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold uppercase tracking-wider',
        variantStyles[variant],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
