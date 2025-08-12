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
    bgColor: 'bg-gradient-to-br from-red-50 to-red-100 hover:from-red-100 hover:to-red-200',
    link: '/launch',
    position: { x: '-translate-x-72 sm:-translate-x-96 translate-y-8 sm:translate-y-12', y: 'top-1/2 left-1/2' },
    benefits: ['İş fikri geliştirme', 'MVP stratejisi', 'Yatırımcı hazırlığı']
  },
  {
    id: 'scale',
    name: 'SCALE',
    subtitle: 'Büyüyen şirketler için',
    description: 'Operasyonel optimizasyon ve sürdürülebilir büyüme',
    icon: TrendingUp,
    color: 'text-blue-600',
    bgColor: 'bg-gradient-to-br from-blue-50 to-blue-100 hover:from-blue-100 hover:to-blue-200',
    link: '/scale',
    position: { x: 'translate-x-8 sm:translate-x-12 -translate-y-72 sm:-translate-y-96', y: 'top-1/2 left-1/2' },
    benefits: ['Süreç optimizasyonu', 'Satış artışı', 'Takım verimliliği']
  },
  {
    id: 'invest',
    name: 'INVEST',
    subtitle: 'Yatırımcılar için',
    description: 'AI destekli yatırım analizi ve portföy yönetimi',
    icon: BarChart,
    color: 'text-green-600',
    bgColor: 'bg-gradient-to-br from-green-50 to-green-100 hover:from-green-100 hover:to-green-200',
    link: '/invest',
    position: { x: 'translate-x-68 sm:translate-x-96 translate-y-8 sm:translate-y-12', y: 'top-1/2 left-1/2' },
    benefits: ['Startup analizi', 'Risk değerlendirmesi', 'Portföy takibi']
  }
];

export default function MindMapWidget() {
  const [hoveredSegment, setHoveredSegment] = useState<string | null>(null);
  const [selectedSegment, setSelectedSegment] = useState<string | null>(null);

  const renderConnectionLine = (segment: Segment, index: number) => {
    const angles = [-150, 90, 30]; // Sol alt, üst, sağ alt pozisyonlar için açılar
    const angle = angles[index];
    const length = 80;
    
    return (
      <div
        className={cn(
          "absolute h-1 bg-gradient-to-r opacity-25 transition-all duration-700 rounded-full",
          "from-gray-400 to-transparent",
          hoveredSegment === segment.id && "opacity-60 shadow-lg scale-y-150",
          segment.color === 'text-[#E1182E]' && "from-red-400",
          segment.color === 'text-blue-600' && "from-blue-400", 
          segment.color === 'text-green-600' && "from-green-400"
        )}
        style={{
          width: `${length}px`,
          top: '50%',
          left: '50%',
          transformOrigin: '0 50%',
          transform: `translateY(-50%) rotate(${angle}deg)`
        }}
      />
    );
  };

  return (
    <div className="relative w-full max-w-6xl mx-auto h-[550px] sm:h-[650px] bg-gradient-to-br from-slate-50 via-gray-50 to-purple-50 rounded-3xl overflow-hidden border border-gray-200 shadow-lg">
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
          {segments.map((segment, index) => (
            <div key={`line-${segment.id}`}>
              {renderConnectionLine(segment, index)}
            </div>
          ))}
          
          {/* Central Hub - DealBridge */}
          <Link href="/dealbridge">
            <div className={cn(
              "w-32 sm:w-40 h-32 sm:h-40 rounded-full bg-gradient-to-br from-purple-500 to-purple-600 flex flex-col items-center justify-center shadow-2xl transition-all duration-700 border-4 border-white cursor-pointer group",
              "hover:shadow-3xl hover:scale-110 hover:from-purple-600 hover:to-purple-700",
              hoveredSegment && "shadow-3xl scale-105"
            )}>
              <div className="text-center text-white">
                <Link2 className="w-6 sm:w-8 h-6 sm:h-8 mx-auto mb-2 group-hover:rotate-12 transition-transform duration-300" />
                <div className="text-sm sm:text-lg font-bold mb-1">DealBridge</div>
                <div className="text-xs opacity-90">İş Birliği Merkezi</div>
              </div>
            </div>
          </Link>
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
              "w-36 sm:w-44 p-4 sm:p-5 rounded-3xl border-2 border-white shadow-lg transition-all duration-500 backdrop-blur-sm",
              segment.bgColor,
              "group-hover:shadow-xl group-hover:scale-105 group-hover:border-gray-100"
            )}>
              <div className="flex items-center gap-2 mb-3">
                <div className={cn(
                  "w-7 h-7 rounded-lg flex items-center justify-center",
                  segment.color,
                  segment.bgColor.replace('hover:', '').replace('to-red-200', 'to-red-300').replace('to-blue-200', 'to-blue-300').replace('to-green-200', 'to-green-300')
                )}>
                  <Icon className="h-3.5 w-3.5" />
                </div>
                <div>
                  <h3 className={cn("font-semibold text-xs sm:text-sm", segment.color)}>{segment.name}</h3>
                  <p className="text-xs text-gray-500">{segment.subtitle}</p>
                </div>
              </div>
              
              <p className="text-xs sm:text-sm text-gray-600 mb-4">{segment.description}</p>
              
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
        <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-md rounded-xl p-4 shadow-xl border border-gray-100 transition-all duration-300 ease-in-out opacity-100">
          <div className="text-sm font-semibold text-gray-900 mb-1">
            {segments.find(s => s.id === hoveredSegment)?.name}
          </div>
          <div className="text-xs text-gray-600">
            Kartı ziyaret edin veya detaylar için tıklayın
          </div>
        </div>
      )}

      {/* Central Description */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="text-center bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 border border-gray-200 shadow-sm">
          <div className="text-xs font-medium text-gray-700">
            💡 DealBridge merkezi hub - tüm segmentler burada buluşur
          </div>
        </div>
      </div>

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