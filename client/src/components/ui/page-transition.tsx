import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

interface PageTransitionProps {
  children: React.ReactNode;
  className?: string;
}

export function PageTransition({ children, className }: PageTransitionProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 50);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={cn(
      'transition-all duration-500 ease-out',
      isLoaded 
        ? 'opacity-100 translate-y-0' 
        : 'opacity-0 translate-y-4',
      className
    )}>
      {children}
    </div>
  );
}

interface FadeInProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}

export function FadeIn({ children, delay = 0, className }: FadeInProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div className={cn(
      'transition-all duration-700 ease-out',
      isVisible 
        ? 'opacity-100 translate-y-0' 
        : 'opacity-0 translate-y-6',
      className
    )}>
      {children}
    </div>
  );
}

interface SlideInProps {
  children: React.ReactNode;
  direction?: 'left' | 'right' | 'up' | 'down';
  delay?: number;
  className?: string;
}

export function SlideIn({ 
  children, 
  direction = 'up', 
  delay = 0, 
  className 
}: SlideInProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  const getTransform = () => {
    if (isVisible) return 'translate-x-0 translate-y-0';
    
    switch (direction) {
      case 'left': return '-translate-x-8 translate-y-0';
      case 'right': return 'translate-x-8 translate-y-0';
      case 'up': return 'translate-x-0 translate-y-8';
      case 'down': return 'translate-x-0 -translate-y-8';
      default: return 'translate-x-0 translate-y-8';
    }
  };

  return (
    <div className={cn(
      'transition-all duration-600 ease-out',
      isVisible ? 'opacity-100' : 'opacity-0',
      getTransform(),
      className
    )}>
      {children}
    </div>
  );
}

interface StaggeredFadeInProps {
  children: React.ReactNode[];
  delay?: number;
  staggerDelay?: number;
  className?: string;
}

export function StaggeredFadeIn({ 
  children, 
  delay = 0, 
  staggerDelay = 100,
  className 
}: StaggeredFadeInProps) {
  const [visibleItems, setVisibleItems] = useState<number[]>([]);

  useEffect(() => {
    children.forEach((_, index) => {
      const timer = setTimeout(() => {
        setVisibleItems(prev => [...prev, index]);
      }, delay + (index * staggerDelay));
      
      return () => clearTimeout(timer);
    });
  }, [children.length, delay, staggerDelay]);

  return (
    <div className={className}>
      {children.map((child, index) => (
        <div
          key={index}
          className={cn(
            'transition-all duration-500 ease-out',
            visibleItems.includes(index)
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-4'
          )}
        >
          {child}
        </div>
      ))}
    </div>
  );
}

interface ScaleInProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}

export function ScaleIn({ children, delay = 0, className }: ScaleInProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div className={cn(
      'transition-all duration-500 ease-out',
      isVisible 
        ? 'opacity-100 scale-100' 
        : 'opacity-0 scale-95',
      className
    )}>
      {children}
    </div>
  );
}