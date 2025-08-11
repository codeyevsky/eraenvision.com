import { cn } from '@/lib/utils';

interface AnimatedBlobsProps {
  className?: string;
}

export function AnimatedBlobs({ className }: AnimatedBlobsProps) {
  return (
    <div className={cn("absolute inset-0 overflow-hidden pointer-events-none", className)}>
      {/* Primary Blob */}
      <div className="absolute top-20 left-20 w-96 h-96 blob-1 opacity-30 blur-3xl rounded-full"></div>
      
      {/* Secondary Blob */}
      <div className="absolute bottom-20 right-20 w-80 h-80 blob-2 opacity-25 blur-2xl rounded-full"></div>
      
      {/* Tertiary Blob */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 opacity-20 blur-2xl rounded-full"
           style={{
             background: 'linear-gradient(45deg, hsl(var(--accent-mint) / 0.1), hsl(var(--accent-blue) / 0.1))',
             animation: 'morphing 15s ease-in-out infinite'
           }}>
      </div>
      
      {/* Floating Particles */}
      {Array.from({ length: 12 }).map((_, i) => (
        <div
          key={i}
          className="absolute w-2 h-2 rounded-full opacity-40"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            background: `hsl(var(--primary) / ${Math.random() * 0.5 + 0.2})`,
            animation: `particleFloat ${Math.random() * 10 + 15}s linear infinite ${Math.random() * 5}s`,
          }}
        />
      ))}
    </div>
  );
}

export function InteractiveOrb({ className }: AnimatedBlobsProps) {
  return (
    <div className={cn("relative group cursor-pointer", className)}>
      <div className="w-32 h-32 rounded-full magnetic-hover relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-accent-blue to-accent-mint opacity-80 blur-sm"></div>
        <div className="absolute inset-2 bg-gradient-to-r from-primary/90 via-accent-blue/90 to-accent-mint/90 rounded-full backdrop-blur-md"></div>
        <div className="absolute inset-4 bg-background/20 rounded-full backdrop-blur-xl border border-white/20"></div>
        
        {/* Inner glow */}
        <div className="absolute inset-6 bg-gradient-to-r from-primary to-accent-blue rounded-full opacity-60 pulse-glow"></div>
        
        {/* Floating elements inside */}
        <div className="absolute inset-8 flex items-center justify-center">
          <div className="w-4 h-4 bg-white/80 rounded-full float-animation"></div>
        </div>
      </div>
    </div>
  );
}

export function FloatingElements() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Geometric shapes */}
      <div className="absolute top-1/4 left-1/3 w-8 h-8 border-2 border-primary/30 rotate-45 float-animation"></div>
      <div className="absolute top-3/4 right-1/4 w-6 h-6 bg-accent-blue/20 rounded-full float-animation-delayed"></div>
      <div className="absolute top-1/2 right-1/3 w-10 h-1 bg-accent-mint/40 float-animation"></div>
      
      {/* Gradient circles */}
      {Array.from({ length: 6 }).map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full opacity-20 float-animation"
          style={{
            width: `${Math.random() * 20 + 10}px`,
            height: `${Math.random() * 20 + 10}px`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            background: `linear-gradient(45deg, hsl(var(--primary) / 0.3), hsl(var(--accent-blue) / 0.3))`,
            animationDelay: `${Math.random() * 3}s`,
          }}
        />
      ))}
    </div>
  );
}