import React from 'react';
import { cn } from '../../utils/cn.js';

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  helperText?: string;
}

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ label, error, helperText, className, id, rows = 4, ...props }, ref) => {
    const inputId = id || (label ? label.toLowerCase().replace(/\s+/g, '-') : undefined);

    return (
      <div className="w-full">
        {label && (
          <label htmlFor={inputId} className="block text-sm font-semibold text-[#211f54] mb-1.5">
            {label}
            {props.required && <span className="text-red-500 ml-1">*</span>}
          </label>
        )}
        <textarea
          ref={ref}
          id={inputId}
          rows={rows}
          className={cn(
            'w-full px-4 py-2.5 rounded-lg border border-gray-300 text-sm text-[#211f54] placeholder-gray-400 bg-white transition duration-150 focus:outline-none focus:ring-2 focus:ring-[#ff8c00] focus:border-transparent disabled:bg-gray-50 disabled:text-gray-400',
            error && 'border-red-500 focus:ring-red-500',
            className
          )}
          {...props}
        />
        {error && <p className="mt-1 text-xs text-red-600 font-medium">{error}</p>}
        {helperText && !error && <p className="mt-1 text-xs text-[#6d758f]">{helperText}</p>}
      </div>
    );
  }
);

Textarea.displayName = 'Textarea';
