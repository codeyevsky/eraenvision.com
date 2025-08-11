import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { TrendingUp, Zap, Target, Sparkles, ArrowRight, Star } from 'lucide-react';

interface AppleWidgetProps {
  className?: string;
  children?: React.ReactNode;
}

export function GlassCard({ className, children }: AppleWidgetProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className={cn(
        "frosted-glass rounded-3xl p-8 transition-all duration-700 group relative overflow-hidden",
        "hover:scale-105 hover:-rotate-1 cursor-pointer",
        className
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Animated gradient overlay */}
      <div className={cn(
        "absolute inset-0 opacity-0 transition-opacity duration-500 bg-gradient-to-br from-primary/10 via-accent-blue/5 to-accent-mint/10",
        isHovered && "opacity-100"
      )}></div>
      
      {/* Shimmer effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
      </div>
      
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}

export function FloatingActionButton({ icon: Icon, label, onClick, color = "primary" }: {
  icon: any;
  label: string;
  onClick?: () => void;
  color?: "primary" | "blue" | "mint";
}) {
  const [ripples, setRipples] = useState<Array<{ id: number; x: number; y: number }>>([]);

  const handleClick = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const newRipple = { id: Date.now(), x, y };
    setRipples(prev => [...prev, newRipple]);
    
    setTimeout(() => {
      setRipples(prev => prev.filter(ripple => ripple.id !== newRipple.id));
    }, 600);
    
    onClick?.();
  };

  return (
    <button
      onClick={handleClick}
      className={cn(
        "relative group w-16 h-16 rounded-2xl overflow-hidden transition-all duration-300",
        "hover:scale-110 active:scale-95 shadow-lg hover:shadow-xl",
        "frosted-glass border border-white/20",
        color === "primary" && "bg-gradient-to-r from-primary to-primary/90",
        color === "blue" && "bg-gradient-to-r from-accent-blue to-accent-blue/90", 
        color === "mint" && "bg-gradient-to-r from-accent-mint to-accent-mint/90"
      )}
    >
      <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      
      {/* Ripple effects */}
      {ripples.map(ripple => (
        <div
          key={ripple.id}
          className="absolute bg-white/30 rounded-full animate-ping"
          style={{
            left: ripple.x - 10,
            top: ripple.y - 10,
            width: 20,
            height: 20,
          }}
        />
      ))}
      
      <Icon className="relative z-10 w-6 h-6 text-white mx-auto" />
      
      {/* Tooltip */}
      <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 px-3 py-1 bg-black/80 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
        {label}
      </div>
    </button>
  );
}

export function MetricWidget({ 
  icon: Icon, 
  title, 
  value, 
  change, 
  color = "primary" 
}: {
  icon: any;
  title: string;
  value: string;
  change: string;
  color?: "primary" | "blue" | "mint";
}) {
  const [animatedValue, setAnimatedValue] = useState(0);
  const numericValue = parseInt(value.replace(/\D/g, ''));

  useEffect(() => {
    const timer = setTimeout(() => {
      let current = 0;
      const increment = numericValue / 30;
      const counter = setInterval(() => {
        current += increment;
        if (current >= numericValue) {
          setAnimatedValue(numericValue);
          clearInterval(counter);
        } else {
          setAnimatedValue(Math.floor(current));
        }
      }, 50);
    }, 200);

    return () => clearTimeout(timer);
  }, [numericValue]);

  return (
    <GlassCard className="hover:scale-105 transition-all duration-500">
      <div className="flex items-start justify-between mb-4">
        <div className={cn(
          "w-12 h-12 rounded-2xl flex items-center justify-center",
          color === "primary" && "bg-primary/20 text-primary",
          color === "blue" && "bg-accent-blue/20 text-accent-blue",
          color === "mint" && "bg-accent-mint/20 text-accent-mint"
        )}>
          <Icon className="w-6 h-6" />
        </div>
        <div className={cn(
          "text-sm font-medium px-2 py-1 rounded-lg",
          change.startsWith('+') ? "text-accent-mint bg-accent-mint/10" : "text-red-500 bg-red-500/10"
        )}>
          {change}
        </div>
      </div>
      
      <div className="space-y-1">
        <p className="text-2xl font-bold">
          {value.includes('%') ? `${animatedValue}%` : animatedValue.toLocaleString()}
        </p>
        <p className="text-muted-foreground text-sm">{title}</p>
      </div>
    </GlassCard>
  );
}

export function InteractiveChart() {
  const [activePoint, setActivePoint] = useState<number | null>(null);
  const data = [30, 45, 35, 55, 40, 60, 45, 70];

  return (
    <GlassCard className="overflow-hidden">
      <div className="flex items-center justify-between mb-6">
        <h3 className="font-semibold text-lg">Büyüme Trendi</h3>
        <div className="flex space-x-2">
          <div className="w-2 h-2 bg-primary rounded-full"></div>
          <div className="w-2 h-2 bg-accent-blue rounded-full"></div>
          <div className="w-2 h-2 bg-accent-mint rounded-full"></div>
        </div>
      </div>
      
      <div className="relative h-24 flex items-end justify-between space-x-2">
        {data.map((height, index) => (
          <div
            key={index}
            className="relative group cursor-pointer transition-all duration-300"
            onMouseEnter={() => setActivePoint(index)}
            onMouseLeave={() => setActivePoint(null)}
          >
            <div 
              className={cn(
                "w-8 rounded-t-lg transition-all duration-500 bg-gradient-to-t from-primary/60 to-primary",
                "group-hover:from-primary group-hover:to-primary/80",
                activePoint === index && "scale-110 shadow-lg"
              )}
              style={{ height: `${height}%` }}
            />
            {activePoint === index && (
              <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-black/80 text-white text-xs px-2 py-1 rounded">
                {height}%
              </div>
            )}
          </div>
        ))}
      </div>
    </GlassCard>
  );
}

export function PulsatingDot({ color = "primary", size = "md" }: { 
  color?: "primary" | "blue" | "mint";
  size?: "sm" | "md" | "lg";
}) {
  return (
    <div className="relative inline-flex">
      <div className={cn(
        "rounded-full animate-ping absolute inline-flex opacity-75",
        color === "primary" && "bg-primary",
        color === "blue" && "bg-accent-blue",
        color === "mint" && "bg-accent-mint",
        size === "sm" && "w-2 h-2",
        size === "md" && "w-3 h-3", 
        size === "lg" && "w-4 h-4"
      )}></div>
      <div className={cn(
        "relative inline-flex rounded-full",
        color === "primary" && "bg-primary",
        color === "blue" && "bg-accent-blue", 
        color === "mint" && "bg-accent-mint",
        size === "sm" && "w-2 h-2",
        size === "md" && "w-3 h-3",
        size === "lg" && "w-4 h-4"
      )}></div>
    </div>
  );
}

export function MorphingButton({ children, ...props }: { children: React.ReactNode } & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    setIsClicked(true);
    setTimeout(() => setIsClicked(false), 600);
    props.onClick?.(e);
  };

  return (
    <button
      {...props}
      onClick={handleClick}
      className={cn(
        "relative px-8 py-4 rounded-2xl font-semibold transition-all duration-300 overflow-hidden group",
        "bg-gradient-to-r from-primary to-primary/90 text-primary-foreground",
        "hover:from-primary/90 hover:to-primary hover:scale-105 hover:-translate-y-1",
        "active:scale-95 transform-gpu",
        "shadow-lg hover:shadow-xl",
        isClicked && "animate-pulse",
        props.className
      )}
    >
      {/* Morphing background */}
      <div className="absolute inset-0 bg-gradient-to-r from-accent-blue to-accent-mint opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      {/* Shimmer effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
      </div>
      
      {/* Content */}
      <span className="relative z-10 flex items-center justify-center space-x-2">
        {children}
        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
      </span>
    </button>
  );
}