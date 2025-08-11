import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Sparkles, Zap, Target, TrendingUp, Users, Globe, BarChart, Brain, Rocket, Shield, Diamond, Star } from 'lucide-react';

export function FloatingIcons() {
  const icons = [Sparkles, Zap, Target, TrendingUp, Users, Globe, BarChart, Brain, Rocket, Shield, Diamond, Star];
  
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {icons.map((Icon, index) => (
        <div
          key={index}
          className="absolute animate-float"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${Math.random() * 3 + 4}s`,
          }}
        >
          <Icon className="w-6 h-6 text-primary/20 animate-pulse" style={{
            animationDelay: `${Math.random() * 2}s`
          }} />
        </div>
      ))}
    </div>
  );
}

export function GeometricShapes() {
  const shapes = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    size: Math.random() * 100 + 50,
    x: Math.random() * 100,
    y: Math.random() * 100,
    rotation: Math.random() * 360,
    duration: Math.random() * 10 + 15,
    delay: Math.random() * 5,
    type: Math.floor(Math.random() * 4),
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {shapes.map((shape) => (
        <div
          key={shape.id}
          className="absolute opacity-10"
          style={{
            left: `${shape.x}%`,
            top: `${shape.y}%`,
            width: `${shape.size}px`,
            height: `${shape.size}px`,
            transform: `rotate(${shape.rotation}deg)`,
            animation: `geometricFloat ${shape.duration}s ease-in-out infinite ${shape.delay}s`,
          }}
        >
          {shape.type === 0 && (
            <div className="w-full h-full bg-gradient-to-br from-primary/30 to-accent-blue/30 rounded-full blur-sm animate-pulse"></div>
          )}
          {shape.type === 1 && (
            <div className="w-full h-full bg-gradient-to-br from-accent-mint/30 to-primary/30 rotate-45 blur-sm animate-pulse"></div>
          )}
          {shape.type === 2 && (
            <div className="w-full h-full bg-gradient-to-br from-accent-blue/30 to-accent-mint/30 rounded-2xl blur-sm animate-pulse"></div>
          )}
          {shape.type === 3 && (
            <div className="w-full h-full border-2 border-primary/30 rounded-full animate-spin-slow"></div>
          )}
        </div>
      ))}
    </div>
  );
}

export function ParticleField() {
  const particles = Array.from({ length: 50 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 4 + 2,
    duration: Math.random() * 20 + 10,
    delay: Math.random() * 10,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute rounded-full opacity-60 animate-particle-float"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            background: `radial-gradient(circle, hsl(var(--primary)) 0%, hsl(var(--accent-blue)) 50%, hsl(var(--accent-mint)) 100%)`,
            animationDuration: `${particle.duration}s`,
            animationDelay: `${particle.delay}s`,
          }}
        />
      ))}
    </div>
  );
}

export function InteractiveDataVisualization() {
  const [activeBar, setActiveBar] = useState<number | null>(null);
  const data = [
    { label: 'Launch', value: 85, color: 'primary' },
    { label: 'Scale', value: 92, color: 'accent-blue' },
    { label: 'Invest', value: 78, color: 'accent-mint' },
    { label: 'Growth', value: 96, color: 'primary' },
    { label: 'Success', value: 88, color: 'accent-blue' },
  ];

  return (
    <div className="relative p-8 frosted-glass rounded-3xl overflow-hidden group">
      <div className="relative z-10">
        <h3 className="text-xl font-bold mb-6 gradient-text">Performance Analytics</h3>
        <div className="flex items-end justify-between space-x-4 h-32">
          {data.map((item, index) => (
            <div
              key={index}
              className="relative group/bar cursor-pointer"
              onMouseEnter={() => setActiveBar(index)}
              onMouseLeave={() => setActiveBar(null)}
            >
              <div
                className={cn(
                  "w-12 rounded-t-lg transition-all duration-500 relative overflow-hidden",
                  item.color === 'primary' && "bg-gradient-to-t from-primary/60 to-primary",
                  item.color === 'accent-blue' && "bg-gradient-to-t from-accent-blue/60 to-accent-blue",
                  item.color === 'accent-mint' && "bg-gradient-to-t from-accent-mint/60 to-accent-mint",
                  activeBar === index && "scale-110 shadow-lg"
                )}
                style={{ height: `${item.value}%` }}
              >
                {/* Shimmer effect */}
                <div className="absolute inset-0 opacity-0 group-hover/bar:opacity-100 transition-opacity duration-500">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover/bar:translate-x-full transition-transform duration-700"></div>
                </div>
              </div>
              
              <div className="text-xs font-semibold mt-2 text-center">{item.label}</div>
              
              {activeBar === index && (
                <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-black/80 text-white text-xs px-2 py-1 rounded animate-bounce-in">
                  {item.value}%
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      
      {/* Background animation */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-4 right-4 w-8 h-8 bg-primary/30 rounded-full animate-pulse"></div>
        <div className="absolute bottom-4 left-4 w-6 h-6 bg-accent-blue/30 rounded-full animate-pulse delay-300"></div>
        <div className="absolute top-1/2 left-1/2 w-4 h-4 bg-accent-mint/30 rounded-full animate-pulse delay-500"></div>
      </div>
    </div>
  );
}

export function AnimatedLogo() {
  return (
    <div className="relative group">
      <div className="w-24 h-24 relative">
        {/* Outer ring */}
        <div className="absolute inset-0 rounded-full border-4 border-primary/30 animate-spin-slow"></div>
        
        {/* Middle ring */}
        <div className="absolute inset-2 rounded-full border-2 border-accent-blue/40 animate-spin-reverse"></div>
        
        {/* Inner circle */}
        <div className="absolute inset-4 rounded-full bg-gradient-to-r from-primary via-accent-blue to-accent-mint animate-pulse"></div>
        
        {/* Center dot */}
        <div className="absolute inset-8 rounded-full bg-white shadow-lg group-hover:scale-110 transition-transform duration-300"></div>
        
        {/* Floating particles around logo */}
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-primary/60 rounded-full animate-orbit"
            style={{
              transformOrigin: '48px 48px',
              animation: `orbit ${8 + i}s linear infinite`,
              animationDelay: `${i * 0.5}s`,
            }}
          />
        ))}
      </div>
    </div>
  );
}

export function ConnectedDots() {
  const dots = Array.from({ length: 12 }, (_, i) => ({
    id: i,
    x: 50 + 40 * Math.cos((i * 2 * Math.PI) / 12),
    y: 50 + 40 * Math.sin((i * 2 * Math.PI) / 12),
  }));

  return (
    <div className="relative w-full h-64 overflow-hidden">
      <svg className="absolute inset-0 w-full h-full">
        {/* Connecting lines */}
        {dots.map((dot, i) => (
          <g key={`line-${i}`}>
            {dots.slice(i + 1).map((otherDot, j) => (
              <line
                key={`${i}-${j}`}
                x1={`${dot.x}%`}
                y1={`${dot.y}%`}
                x2={`${otherDot.x}%`}
                y2={`${otherDot.y}%`}
                stroke="hsl(var(--primary))"
                strokeWidth="1"
                opacity="0.2"
                className="animate-pulse"
                style={{ animationDelay: `${(i + j) * 0.1}s` }}
              />
            ))}
          </g>
        ))}
      </svg>
      
      {/* Dots */}
      {dots.map((dot, i) => (
        <div
          key={dot.id}
          className="absolute w-4 h-4 rounded-full bg-gradient-to-r from-primary to-accent-blue animate-pulse cursor-pointer hover:scale-150 transition-transform duration-300"
          style={{
            left: `${dot.x}%`,
            top: `${dot.y}%`,
            transform: 'translate(-50%, -50%)',
            animationDelay: `${i * 0.2}s`,
          }}
        />
      ))}
    </div>
  );
}

export function MorphingShape() {
  return (
    <div className="relative w-48 h-48 mx-auto">
      <div className="absolute inset-0 bg-gradient-to-r from-primary via-accent-blue to-accent-mint opacity-20 animate-morph-shape rounded-full blur-lg"></div>
      <div className="absolute inset-4 bg-gradient-to-r from-accent-mint via-primary to-accent-blue opacity-30 animate-morph-shape-reverse rounded-full blur-md"></div>
      <div className="absolute inset-8 bg-gradient-to-r from-accent-blue via-accent-mint to-primary opacity-40 animate-morph-shape rounded-full blur-sm"></div>
      <div className="absolute inset-12 bg-white rounded-full shadow-2xl flex items-center justify-center">
        <Sparkles className="w-12 h-12 text-primary animate-pulse" />
      </div>
    </div>
  );
}