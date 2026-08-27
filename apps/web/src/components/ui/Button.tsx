import React from 'react';
import { cn } from '../../utils/cn.js';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'white';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export function Button({
  variant = 'primary',
  size = 'md',
  className,
  children,
  ...props
}: ButtonProps) {
  const baseStyles =
    'inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-200 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed text-center';

  const variantStyles = {
    primary:
      'bg-[#ff8c00] hover:bg-[#e07b00] text-white shadow-sm hover:shadow active:scale-[0.98]',
    secondary:
      'bg-[#211f54] hover:bg-[#19213d] text-white shadow-sm hover:shadow active:scale-[0.98]',
    outline:
      'border-2 border-[#211f54] text-[#211f54] hover:bg-[#211f54] hover:text-white',
    ghost:
      'bg-transparent text-[#211f54] hover:bg-gray-100',
    white:
      'bg-white text-[#211f54] hover:bg-gray-50 shadow-sm hover:shadow',
  };

  const sizeStyles = {
    sm: 'px-3.5 py-1.5 text-xs',
    md: 'px-5 py-2.5 text-sm',
    lg: 'px-7 py-3.5 text-base',
  };

  return (
    <button
      className={cn(baseStyles, variantStyles[variant], sizeStyles[size], className)}
      {...props}
    >
      {children}
    </button>
  );
}
