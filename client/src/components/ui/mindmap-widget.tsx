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
    <div className="relative w-full max-w-6xl mx-auto">
      {/* Desktop Version */}
      <div className="hidden lg:block relative h-[700px] bg-gradient-to-br from-gray-50 to-blue-50/30 rounded-3xl border border-gray-200 shadow-sm">
        {/* Central DealBridge Hub */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
          <Link href="/dealbridge">
            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-purple-600 to-purple-700 flex flex-col items-center justify-center shadow-xl border-4 border-white cursor-pointer group hover:scale-110 transition-all duration-300">
              <Link2 className="w-6 h-6 text-white mb-1 group-hover:rotate-12 transition-transform duration-300" />
              <div className="text-xs font-semibold text-white">DealBridge</div>
            </div>
          </Link>
        </div>

        {/* Connection Lines */}
        <svg className="absolute inset-0 w-full h-full z-10" viewBox="0 0 700 700">
          {/* Line to LAUNCH (left) */}
          <line 
            x1="350" y1="350" 
            x2="120" y2="350" 
            stroke="#E1182E" 
            strokeWidth="3" 
            opacity="0.4"
            strokeDasharray="8,8"
            className={cn("transition-all duration-300", hoveredSegment === 'launch' && "opacity-80")}
          />
          {/* Line to SCALE (top) */}
          <line 
            x1="350" y1="350" 
            x2="350" y2="120" 
            stroke="#3B82F6" 
            strokeWidth="3" 
            opacity="0.4"
            strokeDasharray="8,8"
            className={cn("transition-all duration-300", hoveredSegment === 'scale' && "opacity-80")}
          />
          {/* Line to INVEST (right) */}
          <line 
            x1="350" y1="350" 
            x2="580" y2="350" 
            stroke="#10B981" 
            strokeWidth="3" 
            opacity="0.4"
            strokeDasharray="8,8"
            className={cn("transition-all duration-300", hoveredSegment === 'invest' && "opacity-80")}
          />
        </svg>

        {/* LAUNCH - Left */}
        <div className="absolute left-8 top-1/2 transform -translate-y-1/2">
          <div 
            className="w-44 p-4 rounded-2xl bg-white border-2 border-red-100 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group"
            onMouseEnter={() => setHoveredSegment('launch')}
            onMouseLeave={() => setHoveredSegment(null)}
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 rounded-xl bg-red-100 flex items-center justify-center">
                <Target className="w-4 h-4 text-[#E1182E]" />
              </div>
              <div>
                <h3 className="font-bold text-sm text-[#E1182E]">LAUNCH</h3>
                <p className="text-xs text-gray-500">Girişimciler için</p>
              </div>
            </div>
            <p className="text-sm text-gray-600 mb-4 leading-relaxed">AI destekli iş planlama ve strateji geliştirme</p>
            <Link href="/launch">
              <Button size="sm" className="w-full text-xs bg-red-50 text-[#E1182E] hover:bg-red-100 border border-red-200">
                Keşfet
              </Button>
            </Link>
          </div>
        </div>

        {/* SCALE - Top */}
        <div className="absolute top-8 left-1/2 transform -translate-x-1/2">
          <div 
            className="w-44 p-4 rounded-2xl bg-white border-2 border-blue-100 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group"
            onMouseEnter={() => setHoveredSegment('scale')}
            onMouseLeave={() => setHoveredSegment(null)}
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 rounded-xl bg-blue-100 flex items-center justify-center">
                <TrendingUp className="w-4 h-4 text-blue-600" />
              </div>
              <div>
                <h3 className="font-bold text-sm text-blue-600">SCALE</h3>
                <p className="text-xs text-gray-500">Büyüyen şirketler için</p>
              </div>
            </div>
            <p className="text-sm text-gray-600 mb-4 leading-relaxed">Operasyonel optimizasyon ve sürdürülebilir büyüme</p>
            <Link href="/scale">
              <Button size="sm" className="w-full text-xs bg-blue-50 text-blue-600 hover:bg-blue-100 border border-blue-200">
                Keşfet
              </Button>
            </Link>
          </div>
        </div>

        {/* INVEST - Right */}
        <div className="absolute right-8 top-1/2 transform -translate-y-1/2">
          <div 
            className="w-44 p-4 rounded-2xl bg-white border-2 border-green-100 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group"
            onMouseEnter={() => setHoveredSegment('invest')}
            onMouseLeave={() => setHoveredSegment(null)}
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 rounded-xl bg-green-100 flex items-center justify-center">
                <BarChart className="w-4 h-4 text-green-600" />
              </div>
              <div>
                <h3 className="font-bold text-sm text-green-600">INVEST</h3>
                <p className="text-xs text-gray-500">Yatırımcılar için</p>
              </div>
            </div>
            <p className="text-sm text-gray-600 mb-4 leading-relaxed">AI destekli yatırım analizi ve portföy yönetimi</p>
            <Link href="/invest">
              <Button size="sm" className="w-full text-xs bg-green-50 text-green-600 hover:bg-green-100 border border-green-200">
                Keşfet
              </Button>
            </Link>
          </div>
        </div>

        {/* Bottom description */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 border border-gray-200 shadow-sm">
            <p className="text-sm font-medium text-gray-700">3 segment, tek platform - DealBridge'de birleşiyor</p>
          </div>
        </div>
      </div>

      {/* Mobile/Tablet Version */}
      <div className="block lg:hidden bg-gradient-to-br from-gray-50 to-blue-50/30 rounded-2xl border border-gray-200 p-6">
        {/* Central Hub */}
        <div className="text-center mb-8">
          <Link href="/dealbridge">
            <div className="inline-flex w-24 h-24 rounded-full bg-gradient-to-br from-purple-600 to-purple-700 flex-col items-center justify-center shadow-lg border-4 border-white cursor-pointer group active:scale-95 transition-all duration-200">
              <Link2 className="w-5 h-5 text-white mb-1 group-active:rotate-12 transition-transform duration-200" />
              <div className="text-xs font-semibold text-white">DealBridge</div>
            </div>
          </Link>
          <p className="text-sm text-gray-600 mt-3 font-medium">İş Birliği Merkezi</p>
          <div className="w-16 h-0.5 bg-purple-200 mx-auto mt-2 rounded-full"></div>
        </div>

        {/* Mobile Segments Grid */}
        <div className="space-y-4">
          <Link href="/launch">
            <div className="w-full p-4 rounded-xl bg-white border border-red-100 shadow-sm active:scale-98 transition-all duration-150">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-red-100 flex items-center justify-center flex-shrink-0">
                  <Target className="w-5 h-5 text-[#E1182E]" />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-sm text-[#E1182E] mb-1">LAUNCH</h3>
                  <p className="text-xs text-gray-500 mb-2">Girişimciler için</p>
                  <p className="text-sm text-gray-600 leading-relaxed">AI destekli iş planlama ve strateji geliştirme</p>
                </div>
              </div>
            </div>
          </Link>

          <Link href="/scale">
            <div className="w-full p-4 rounded-xl bg-white border border-blue-100 shadow-sm active:scale-98 transition-all duration-150">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="w-5 h-5 text-blue-600" />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-sm text-blue-600 mb-1">SCALE</h3>
                  <p className="text-xs text-gray-500 mb-2">Büyüyen şirketler için</p>
                  <p className="text-sm text-gray-600 leading-relaxed">Operasyonel optimizasyon ve sürdürülebilir büyüme</p>
                </div>
              </div>
            </div>
          </Link>

          <Link href="/invest">
            <div className="w-full p-4 rounded-xl bg-white border border-green-100 shadow-sm active:scale-98 transition-all duration-150">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-green-100 flex items-center justify-center flex-shrink-0">
                  <BarChart className="w-5 h-5 text-green-600" />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-sm text-green-600 mb-1">INVEST</h3>
                  <p className="text-xs text-gray-500 mb-2">Yatırımcılar için</p>
                  <p className="text-sm text-gray-600 leading-relaxed">AI destekli yatırım analizi ve portföy yönetimi</p>
                </div>
              </div>
            </div>
          </Link>
        </div>

        <div className="text-center mt-6 pt-4 border-t border-gray-200">
          <p className="text-xs text-gray-500">Tüm segmentler DealBridge platformunda birleşir</p>
        </div>
      </div>
    </div>
  );
}