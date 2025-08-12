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
    position: { x: '', y: '' },
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
    position: { x: '', y: '' },
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
    position: { x: '', y: '' },
    benefits: ['Startup analizi', 'Risk değerlendirmesi', 'Portföy takibi']
  }
];

export default function MindMapWidget() {
  const [hoveredSegment, setHoveredSegment] = useState<string | null>(null);

  return (
    <div className="relative w-full max-w-5xl mx-auto h-[500px] bg-gradient-to-br from-gray-50 to-purple-50/30 rounded-3xl border border-gray-100 overflow-hidden">
      {/* Background subtle pattern */}
      <div className="absolute inset-0 opacity-3">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 50% 50%, #8B5CF6 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      {/* Central DealBridge Hub */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
        <Link href="/dealbridge">
          <div className="w-24 h-24 rounded-full bg-gradient-to-br from-purple-600 to-purple-700 flex items-center justify-center shadow-xl border-4 border-white cursor-pointer group hover:scale-110 transition-all duration-300">
            <Link2 className="w-6 h-6 text-white group-hover:rotate-12 transition-transform duration-300" />
          </div>
        </Link>
        {/* Central label */}
        <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-center">
          <div className="text-sm font-semibold text-purple-700">DealBridge</div>
          <div className="text-xs text-gray-500">İş Birliği Merkezi</div>
        </div>
      </div>

      {/* Connection Lines */}
      <svg className="absolute inset-0 w-full h-full z-10" viewBox="0 0 400 400">
        {/* Line to LAUNCH (left) */}
        <line 
          x1="200" y1="200" 
          x2="80" y2="200" 
          stroke="#EF4444" 
          strokeWidth="2" 
          opacity="0.3"
          className={cn("transition-opacity duration-300", hoveredSegment === 'launch' && "opacity-70")}
        />
        {/* Line to SCALE (top) */}
        <line 
          x1="200" y1="200" 
          x2="200" y2="80" 
          stroke="#3B82F6" 
          strokeWidth="2" 
          opacity="0.3"
          className={cn("transition-opacity duration-300", hoveredSegment === 'scale' && "opacity-70")}
        />
        {/* Line to INVEST (right) */}
        <line 
          x1="200" y1="200" 
          x2="320" y2="200" 
          stroke="#10B981" 
          strokeWidth="2" 
          opacity="0.3"
          className={cn("transition-opacity duration-300", hoveredSegment === 'invest' && "opacity-70")}
        />
      </svg>

      {/* LAUNCH - Left */}
      <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
        <div 
          className="w-40 p-4 rounded-2xl bg-white border border-red-100 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group"
          onMouseEnter={() => setHoveredSegment('launch')}
          onMouseLeave={() => setHoveredSegment(null)}
        >
          <div className="flex items-center gap-2 mb-3">
            <div className="w-6 h-6 rounded-lg bg-red-100 flex items-center justify-center">
              <Target className="w-3 h-3 text-[#E1182E]" />
            </div>
            <div>
              <h3 className="font-semibold text-xs text-[#E1182E]">LAUNCH</h3>
              <p className="text-xs text-gray-500">Girişimciler</p>
            </div>
          </div>
          <p className="text-xs text-gray-600 mb-3 leading-relaxed">AI destekli iş planlama ve strateji geliştirme</p>
          <Link href="/launch">
            <Button size="sm" className="w-full text-xs bg-red-50 text-[#E1182E] hover:bg-red-100 border-0">
              Keşfet
            </Button>
          </Link>
        </div>
      </div>

      {/* SCALE - Top */}
      <div className="absolute top-4 left-1/2 transform -translate-x-1/2">
        <div 
          className="w-40 p-4 rounded-2xl bg-white border border-blue-100 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group"
          onMouseEnter={() => setHoveredSegment('scale')}
          onMouseLeave={() => setHoveredSegment(null)}
        >
          <div className="flex items-center gap-2 mb-3">
            <div className="w-6 h-6 rounded-lg bg-blue-100 flex items-center justify-center">
              <TrendingUp className="w-3 h-3 text-blue-600" />
            </div>
            <div>
              <h3 className="font-semibold text-xs text-blue-600">SCALE</h3>
              <p className="text-xs text-gray-500">Büyüyen şirketler</p>
            </div>
          </div>
          <p className="text-xs text-gray-600 mb-3 leading-relaxed">Operasyonel optimizasyon ve büyüme</p>
          <Link href="/scale">
            <Button size="sm" className="w-full text-xs bg-blue-50 text-blue-600 hover:bg-blue-100 border-0">
              Keşfet
            </Button>
          </Link>
        </div>
      </div>

      {/* INVEST - Right */}
      <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
        <div 
          className="w-40 p-4 rounded-2xl bg-white border border-green-100 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group"
          onMouseEnter={() => setHoveredSegment('invest')}
          onMouseLeave={() => setHoveredSegment(null)}
        >
          <div className="flex items-center gap-2 mb-3">
            <div className="w-6 h-6 rounded-lg bg-green-100 flex items-center justify-center">
              <BarChart className="w-3 h-3 text-green-600" />
            </div>
            <div>
              <h3 className="font-semibold text-xs text-green-600">INVEST</h3>
              <p className="text-xs text-gray-500">Yatırımcılar</p>
            </div>
          </div>
          <p className="text-xs text-gray-600 mb-3 leading-relaxed">AI destekli yatırım analizi ve portföy yönetimi</p>
          <Link href="/invest">
            <Button size="sm" className="w-full text-xs bg-green-50 text-green-600 hover:bg-green-100 border-0">
              Keşfet
            </Button>
          </Link>
        </div>
      </div>

      {/* Bottom description */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
        <div className="text-center">
          <p className="text-xs text-gray-500">3 segment, tek platform - DealBridge'de birleşiyor</p>
        </div>
      </div>
    </div>
  );
}