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
  const [selectedSegment, setSelectedSegment] = useState<string | null>(null);

  return (
    <div className="relative w-full max-w-7xl mx-auto">
      {/* Desktop Layout - Hidden on Mobile */}
      <div className="hidden lg:block relative h-[600px] bg-gradient-to-br from-slate-50 via-gray-50 to-purple-50 rounded-3xl border border-gray-200 shadow-lg overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, #E1182E 1px, transparent 1px),
                             radial-gradient(circle at 75% 75%, #3B82F6 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }} />
        </div>

        {/* Central Hub - DealBridge */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
          <Link href="/dealbridge">
            <div className={cn(
              "w-40 h-40 rounded-full bg-gradient-to-br from-purple-500 to-purple-600 flex flex-col items-center justify-center shadow-2xl transition-all duration-500 border-4 border-white cursor-pointer group",
              "hover:shadow-3xl hover:scale-110 hover:from-purple-600 hover:to-purple-700"
            )}>
              <div className="text-center text-white">
                <Link2 className="w-8 h-8 mx-auto mb-2 group-hover:rotate-12 transition-transform duration-300" />
                <div className="text-lg font-bold mb-1">DealBridge</div>
                <div className="text-xs opacity-90">İş Birliği Merkezi</div>
              </div>
            </div>
          </Link>
        </div>

        {/* Connection Lines */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          {/* Line to LAUNCH (bottom left) */}
          <div className="absolute w-24 h-0.5 bg-gradient-to-r from-red-400 to-transparent opacity-30 origin-left" 
               style={{ transform: 'rotate(210deg) translateX(-80px)' }} />
          {/* Line to SCALE (top) */}
          <div className="absolute w-24 h-0.5 bg-gradient-to-r from-blue-400 to-transparent opacity-30 origin-left" 
               style={{ transform: 'rotate(90deg) translateX(-80px)' }} />
          {/* Line to INVEST (bottom right) */}
          <div className="absolute w-24 h-0.5 bg-gradient-to-r from-green-400 to-transparent opacity-30 origin-left" 
               style={{ transform: 'rotate(330deg) translateX(-80px)' }} />
        </div>

        {/* LAUNCH - Bottom Left */}
        <div className="absolute bottom-16 left-16">
          <div 
            className="w-52 p-6 rounded-3xl border-2 border-white shadow-lg transition-all duration-500 backdrop-blur-sm bg-gradient-to-br from-red-50 to-red-100 hover:from-red-100 hover:to-red-200 hover:shadow-xl hover:scale-105 cursor-pointer group"
            onMouseEnter={() => setHoveredSegment('launch')}
            onMouseLeave={() => setHoveredSegment(null)}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center text-[#E1182E] bg-red-100">
                <Target className="h-4 w-4" />
              </div>
              <div>
                <h3 className="font-semibold text-sm text-[#E1182E]">LAUNCH</h3>
                <p className="text-xs text-gray-500">Girişimciler için</p>
              </div>
            </div>
            <p className="text-sm text-gray-600 mb-4">AI destekli iş planlama ve strateji geliştirme</p>
            <Link href="/launch">
              <Button variant="ghost" size="sm" className="w-full justify-between text-xs text-[#E1182E] hover:bg-white/50">
                Detayları Gör
                <ArrowRight className="h-3 w-3" />
              </Button>
            </Link>
          </div>
        </div>

        {/* SCALE - Top Center */}
        <div className="absolute top-16 left-1/2 transform -translate-x-1/2">
          <div 
            className="w-52 p-6 rounded-3xl border-2 border-white shadow-lg transition-all duration-500 backdrop-blur-sm bg-gradient-to-br from-blue-50 to-blue-100 hover:from-blue-100 hover:to-blue-200 hover:shadow-xl hover:scale-105 cursor-pointer group"
            onMouseEnter={() => setHoveredSegment('scale')}
            onMouseLeave={() => setHoveredSegment(null)}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center text-blue-600 bg-blue-100">
                <TrendingUp className="h-4 w-4" />
              </div>
              <div>
                <h3 className="font-semibold text-sm text-blue-600">SCALE</h3>
                <p className="text-xs text-gray-500">Büyüyen şirketler için</p>
              </div>
            </div>
            <p className="text-sm text-gray-600 mb-4">Operasyonel optimizasyon ve sürdürülebilir büyüme</p>
            <Link href="/scale">
              <Button variant="ghost" size="sm" className="w-full justify-between text-xs text-blue-600 hover:bg-white/50">
                Detayları Gör
                <ArrowRight className="h-3 w-3" />
              </Button>
            </Link>
          </div>
        </div>

        {/* INVEST - Bottom Right */}
        <div className="absolute bottom-16 right-16">
          <div 
            className="w-52 p-6 rounded-3xl border-2 border-white shadow-lg transition-all duration-500 backdrop-blur-sm bg-gradient-to-br from-green-50 to-green-100 hover:from-green-100 hover:to-green-200 hover:shadow-xl hover:scale-105 cursor-pointer group"
            onMouseEnter={() => setHoveredSegment('invest')}
            onMouseLeave={() => setHoveredSegment(null)}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center text-green-600 bg-green-100">
                <BarChart className="h-4 w-4" />
              </div>
              <div>
                <h3 className="font-semibold text-sm text-green-600">INVEST</h3>
                <p className="text-xs text-gray-500">Yatırımcılar için</p>
              </div>
            </div>
            <p className="text-sm text-gray-600 mb-4">AI destekli yatırım analizi ve portföy yönetimi</p>
            <Link href="/invest">
              <Button variant="ghost" size="sm" className="w-full justify-between text-xs text-green-600 hover:bg-white/50">
                Detayları Gör
                <ArrowRight className="h-3 w-3" />
              </Button>
            </Link>
          </div>
        </div>

        {/* Central Description */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="text-center bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 border border-gray-200 shadow-sm">
            <div className="text-xs font-medium text-gray-700">
              💡 DealBridge merkezi hub - tüm segmentler burada buluşur
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Layout - Visible on Mobile and Tablet */}
      <div className="block lg:hidden bg-gradient-to-br from-slate-50 via-gray-50 to-purple-50 rounded-3xl border border-gray-200 shadow-lg p-6">
        <div className="text-center mb-8">
          <Link href="/dealbridge">
            <div className="inline-block w-32 h-32 rounded-full bg-gradient-to-br from-purple-500 to-purple-600 flex flex-col items-center justify-center shadow-2xl border-4 border-white cursor-pointer group hover:scale-110 transition-all duration-500">
              <Link2 className="w-6 h-6 text-white mb-2 group-hover:rotate-12 transition-transform duration-300" />
              <div className="text-white text-sm font-bold mb-1">DealBridge</div>
              <div className="text-white text-xs opacity-90">İş Birliği Merkezi</div>
            </div>
          </Link>
          <p className="text-xs text-gray-600 mt-4 max-w-xs mx-auto">
            Tüm segmentlerimizin buluşma noktası
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {/* LAUNCH */}
          <div className="bg-gradient-to-br from-red-50 to-red-100 p-4 rounded-2xl border border-white shadow-sm">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-6 h-6 rounded-lg flex items-center justify-center text-[#E1182E] bg-red-100">
                <Target className="h-3 w-3" />
              </div>
              <div>
                <h3 className="font-semibold text-xs text-[#E1182E]">LAUNCH</h3>
                <p className="text-xs text-gray-500">Girişimciler için</p>
              </div>
            </div>
            <p className="text-xs text-gray-600 mb-3">AI destekli iş planlama ve strateji geliştirme</p>
            <Link href="/launch">
              <Button variant="ghost" size="sm" className="w-full text-xs text-[#E1182E] hover:bg-white/50">
                Detayları Gör
              </Button>
            </Link>
          </div>

          {/* SCALE */}
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-4 rounded-2xl border border-white shadow-sm">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-6 h-6 rounded-lg flex items-center justify-center text-blue-600 bg-blue-100">
                <TrendingUp className="h-3 w-3" />
              </div>
              <div>
                <h3 className="font-semibold text-xs text-blue-600">SCALE</h3>
                <p className="text-xs text-gray-500">Büyüyen şirketler için</p>
              </div>
            </div>
            <p className="text-xs text-gray-600 mb-3">Operasyonel optimizasyon ve sürdürülebilir büyüme</p>
            <Link href="/scale">
              <Button variant="ghost" size="sm" className="w-full text-xs text-blue-600 hover:bg-white/50">
                Detayları Gör
              </Button>
            </Link>
          </div>

          {/* INVEST */}
          <div className="bg-gradient-to-br from-green-50 to-green-100 p-4 rounded-2xl border border-white shadow-sm">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-6 h-6 rounded-lg flex items-center justify-center text-green-600 bg-green-100">
                <BarChart className="h-3 w-3" />
              </div>
              <div>
                <h3 className="font-semibold text-xs text-green-600">INVEST</h3>
                <p className="text-xs text-gray-500">Yatırımcılar için</p>
              </div>
            </div>
            <p className="text-xs text-gray-600 mb-3">AI destekli yatırım analizi ve portföy yönetimi</p>
            <Link href="/invest">
              <Button variant="ghost" size="sm" className="w-full text-xs text-green-600 hover:bg-white/50">
                Detayları Gör
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}