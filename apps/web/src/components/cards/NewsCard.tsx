import { Calendar, ArrowRight } from 'lucide-react';
import { NewsItem } from '../../types/index.js';
import { Card } from '../ui/Card.js';
import { Badge } from '../ui/Badge.js';
import { Button } from '../ui/Button.js';

export interface NewsCardProps {
  news: NewsItem;
  onReadMore: (news: NewsItem) => void;
}

export function NewsCard({ news, onReadMore }: NewsCardProps) {
  const categoryVariant = {
    Academic: 'navy',
    Sports: 'sand',
    Campus: 'primary',
    Awards: 'success',
  }[news.category] as any;

  return (
    <Card className="flex flex-col h-full overflow-hidden group">
      <div className="relative h-48 w-full overflow-hidden bg-gray-100">
        <img
          src={news.imageUrl}
          alt={news.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          referrerPolicy="no-referrer"
        />
        <div className="absolute top-3 left-3">
          <Badge variant={categoryVariant || 'primary'}>{news.category}</Badge>
        </div>
      </div>

      <div className="p-6 flex-1 flex flex-col justify-between">
        <div>
          <div className="flex items-center gap-1.5 text-xs text-[#6d758f] mb-2 font-medium">
            <Calendar className="w-3.5 h-3.5 text-[#ff8c00]" />
            <span>{news.date}</span>
          </div>

          <h3 className="text-lg font-bold text-[#211f54] group-hover:text-[#ff8c00] transition-colors leading-snug mb-2.5">
            {news.title}
          </h3>

          <p className="text-xs sm:text-sm text-[#6d758f] line-clamp-3 leading-relaxed mb-4">
            {news.summary}
          </p>
        </div>

        <div className="pt-3 border-t border-gray-100 flex items-center justify-between mt-auto">
          <span className="text-xs text-[#6d758f] italic">{news.author}</span>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => onReadMore(news)}
            className="text-[#ff8c00] hover:text-[#e07b00] p-0 text-xs font-bold flex items-center gap-1"
          >
            Read Story <ArrowRight className="w-3.5 h-3.5" />
          </Button>
        </div>
      </div>
    </Card>
  );
}
