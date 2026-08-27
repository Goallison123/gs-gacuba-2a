import React from 'react';
import { cn } from '../../utils/cn.js';
import { Badge } from './Badge.js';

export interface SectionHeadingProps {
  badge?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center' | 'right';
  className?: string;
  dark?: boolean;
}

export function SectionHeading({
  badge,
  title,
  description,
  align = 'center',
  className,
  dark = false,
}: SectionHeadingProps) {
  const alignStyles = {
    left: 'text-left',
    center: 'text-center mx-auto',
    right: 'text-right ml-auto',
  };

  return (
    <div className={cn('max-w-3xl mb-12', alignStyles[align], className)}>
      {badge && (
        <div className="mb-3">
          <Badge variant={dark ? 'sand' : 'primary'}>{badge}</Badge>
        </div>
      )}
      <h2
        className={cn(
          'text-3xl sm:text-4xl font-extrabold tracking-tight font-display mb-4',
          dark ? 'text-white' : 'text-[#211f54]'
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            'text-base sm:text-lg leading-relaxed',
            dark ? 'text-gray-300' : 'text-[#6d758f]'
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
