import { useState } from 'react';
import { Target, TrendingUp, BarChart, Link2, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'wouter';
import { cn } from '@/lib/utils';

interface Segment {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  icon: any;
  color: string;
  bgColor: string;
  link: string;
  position: {
    x: string;
    y: string;
  };
  benefits: string[];
}

const segments: Segment[] = [
  {
    id: 'launch',
    name: 'LAUNCH',
    subtitle: 'Girişimciler için',
    description: 'AI destekli iş planlama ve strateji geliştirme',
    icon: Target,
    color: 'text-[#E1182E]',
    bgColor: 'bg-[#E1182E]/10 hover:bg-[#E1182E]/20',
    link: '/launch',
    position: { x: '-translate-x-48 sm:-translate-x-60 -translate-y-20 sm:-translate-y-32', y: 'top-1/4 left-1/2' },
    benefits: ['İş fikri geliştirme', 'MVP stratejisi', 'Yatırımcı hazırlığı']
  },
  {
    id: 'scale',
    name: 'SCALE',
    subtitle: 'Büyüyen şirketler için',
    description: 'Operasyonel optimizasyon ve sürdürülebilir büyüme',
    icon: TrendingUp,
    color: 'text-blue-600',
    bgColor: 'bg-blue-50 hover:bg-blue-100',
    link: '/scale',
    position: { x: 'translate-x-48 sm:translate-x-60 -translate-y-20 sm:-translate-y-32', y: 'top-1/4 right-1/2' },
    benefits: ['Süreç optimizasyonu', 'Satış artışı', 'Takım verimliliği']
  },
  {
    id: 'invest',
    name: 'INVEST',
    subtitle: 'Yatırımcılar için',
    description: 'AI destekli yatırım analizi ve portföy yönetimi',
    icon: BarChart,
    color: 'text-green-600',
    bgColor: 'bg-green-50 hover:bg-green-100',
    link: '/invest',
    position: { x: '-translate-x-48 sm:-translate-x-60 translate-y-20 sm:translate-y-32', y: 'bottom-1/4 left-1/2' },
    benefits: ['Startup analizi', 'Risk değerlendirmesi', 'Portföy takibi']
  },
  {
    id: 'dealbridge',
    name: 'DealBridge',
    subtitle: 'İş Birliği Merkezi',
    description: 'Yatırım ve B2B fırsatlarının buluşma noktası',
    icon: Link2,
    color: 'text-purple-600',
    bgColor: 'bg-purple-50 hover:bg-purple-100',
    link: '/dealbridge',
    position: { x: 'translate-x-48 sm:translate-x-60 translate-y-20 sm:translate-y-32', y: 'bottom-1/4 right-1/2' },
    benefits: ['Yatırımcı eşleştirmesi', 'B2B ortaklıklar', 'Fırsat keşfi']
  }
];

export default function MindMapWidget() {
  const [hoveredSegment, setHoveredSegment] = useState<string | null>(null);
  const [selectedSegment, setSelectedSegment] = useState<string | null>(null);

  const renderConnectionLine = (segment: Segment) => {
    const isLeft = segment.position.x.includes('-translate-x');
    const isTop = segment.position.x.includes('-translate-y');
    
    return (
      <div
        className={cn(
          "absolute w-20 h-0.5 bg-gradient-to-r opacity-40 transition-all duration-500",
          isLeft ? "from-gray-300 to-transparent" : "from-transparent to-gray-300",
          hoveredSegment === segment.id && "opacity-80 scale-y-2",
          segment.color.replace('text-', 'from-').replace('text-', 'to-')
        )}
        style={{
          top: '50%',
          left: isLeft ? 'calc(50% - 80px)' : '50%',
          transform: isTop ? 'translateY(-50%) rotate(-30deg)' : 'translateY(-50%) rotate(30deg)'
        }}
      />
    );
  };

  return (
    <div className="relative w-full max-w-5xl mx-auto h-[500px] sm:h-[600px] bg-gradient-to-br from-gray-50 to-white rounded-3xl overflow-hidden border border-gray-100">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, #E1182E 1px, transparent 1px),
                           radial-gradient(circle at 75% 75%, #3B82F6 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }} />
      </div>

      {/* Central Hub */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
        <div className="relative">
          {/* Connection Lines */}
          {segments.map((segment) => (
            <div key={`line-${segment.id}`}>
              {renderConnectionLine(segment)}
            </div>
          ))}
          
          {/* Central Circle */}
          <div className={cn(
            "w-24 sm:w-32 h-24 sm:h-32 rounded-full bg-white border-4 border-gray-200 flex flex-col items-center justify-center shadow-lg transition-all duration-500",
            hoveredSegment && "border-gray-300 shadow-xl scale-110"
          )}>
            <div className="text-center">
              <div className="text-sm sm:text-lg font-bold text-gray-900 mb-1">EraEnvision</div>
              <div className="text-xs text-gray-500">AI Ecosystem</div>
            </div>
          </div>
        </div>
      </div>

      {/* Segment Cards */}
      {segments.map((segment) => {
        const Icon = segment.icon;
        return (
          <div
            key={segment.id}
            className={cn(
              "absolute transform transition-all duration-500 cursor-pointer group",
              segment.position.y,
              segment.position.x,
              hoveredSegment === segment.id && "scale-105 z-20"
            )}
            onMouseEnter={() => setHoveredSegment(segment.id)}
            onMouseLeave={() => setHoveredSegment(null)}
            onClick={() => setSelectedSegment(selectedSegment === segment.id ? null : segment.id)}
          >
            <div className={cn(
              "w-36 sm:w-48 p-4 sm:p-6 rounded-2xl border border-gray-200 shadow-sm transition-all duration-300",
              segment.bgColor,
              "group-hover:shadow-lg group-hover:border-gray-300"
            )}>
              <div className="flex items-center gap-3 mb-3">
                <div className={cn(
                  "w-8 h-8 rounded-lg flex items-center justify-center",
                  segment.color,
                  segment.bgColor.replace('hover:', '').replace('/20', '/30')
                )}>
                  <Icon className="h-4 w-4" />
                </div>
                <div>
                  <h3 className={cn("font-semibold text-sm", segment.color)}>{segment.name}</h3>
                  <p className="text-xs text-gray-500">{segment.subtitle}</p>
                </div>
              </div>
              
              <p className="text-sm text-gray-600 mb-4">{segment.description}</p>
              
              {/* Benefits List */}
              {selectedSegment === segment.id && (
                <div className="mb-4 transition-all duration-300 ease-in-out">
                  <ul className="space-y-1">
                    {segment.benefits.map((benefit, index) => (
                      <li key={index} className="text-xs text-gray-600 flex items-center">
                        <div className="w-1 h-1 bg-gray-400 rounded-full mr-2" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              
              <Link href={segment.link}>
                <Button variant="ghost" size="sm" className={cn(
                  "w-full justify-between text-xs",
                  segment.color,
                  "hover:bg-white/50"
                )}>
                  Detayları Gör
                  <ArrowRight className="h-3 w-3" />
                </Button>
              </Link>
            </div>
          </div>
        );
      })}

      {/* Floating Info */}
      {hoveredSegment && (
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg p-4 shadow-lg border border-gray-200 transition-all duration-300 ease-in-out opacity-100">
          <div className="text-sm font-medium text-gray-900 mb-1">
            {segments.find(s => s.id === hoveredSegment)?.name}
          </div>
          <div className="text-xs text-gray-600">
            Detaylar için tıklayın veya kartı ziyaret edin
          </div>
        </div>
      )}

      {/* Legend */}
      <div className="absolute bottom-4 left-4 text-xs text-gray-500">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-gray-300 rounded-full" />
          <span>Bağlantı çizgileri segmentler arası etkileşimi gösterir</span>
        </div>
      </div>
    </div>
  );
}