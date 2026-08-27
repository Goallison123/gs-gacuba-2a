import React from 'react';
import { CheckCircle2, AlertCircle, Info, XCircle } from 'lucide-react';
import { cn } from '../../utils/cn.js';

export interface AlertProps {
  variant?: 'success' | 'error' | 'warning' | 'info';
  title?: string;
  children: React.ReactNode;
  className?: string;
}

export function Alert({ variant = 'info', title, children, className }: AlertProps) {
  const variantStyles = {
    success: 'bg-emerald-50 border-emerald-200 text-emerald-900',
    error: 'bg-red-50 border-red-200 text-red-900',
    warning: 'bg-amber-50 border-amber-200 text-amber-900',
    info: 'bg-blue-50 border-blue-200 text-blue-900',
  };

  const icons = {
    success: <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />,
    error: <XCircle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />,
    warning: <AlertCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />,
    info: <Info className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />,
  };

  return (
    <div
      role="alert"
      className={cn(
        'flex items-start gap-3 p-4 rounded-xl border text-sm',
        variantStyles[variant],
        className
      )}
    >
      {icons[variant]}
      <div className="flex-1">
        {title && <h4 className="font-semibold text-sm mb-1">{title}</h4>}
        <div className="text-xs sm:text-sm leading-relaxed">{children}</div>
      </div>
    </div>
  );
}
