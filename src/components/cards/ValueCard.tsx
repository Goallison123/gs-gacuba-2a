import React from 'react';
import { Card } from '../ui/Card.js';

export interface ValueCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export function ValueCard({ icon, title, description }: ValueCardProps) {
  return (
    <Card className="p-6 sm:p-8 flex flex-col items-start h-full border border-gray-100 hover:border-[#ff8c00]/40">
      <div className="p-3.5 bg-orange-50 text-[#ff8c00] rounded-xl mb-5 shadow-xs">
        {icon}
      </div>
      <h3 className="text-lg sm:text-xl font-bold text-[#211f54] mb-2">{title}</h3>
      <p className="text-xs sm:text-sm text-[#6d758f] leading-relaxed">{description}</p>
    </Card>
  );
}
