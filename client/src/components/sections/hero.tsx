import { Button } from '@/components/ui/button';
import { useLanguage } from '@/hooks/use-language';
import { Play, Sparkles, Zap, Target } from 'lucide-react';
import { InteractiveOrb, FloatingElements } from '@/components/ui/animated-blobs';
import { MorphingButton, FloatingActionButton, PulsatingDot } from '@/components/ui/apple-widgets';

export function HeroSection() {
  const { t } = useLanguage();

  return (
    <section className="pt-24 pb-32 bg-gradient-to-br from-soft-paper via-background to-soft-paper relative overflow-hidden min-h-screen flex items-center">
      {/* Floating Elements Background */}
      <FloatingElements />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="text-center lg:text-left space-y-8">
            {/* Live indicator */}
            <div className="flex items-center justify-center lg:justify-start space-x-2 mb-4">
              <PulsatingDot color="mint" size="sm" />
              <span className="text-sm text-muted-foreground font-medium">AI-Powered • Live Platform</span>
            </div>
            
            {/* Main Title with enhanced animation */}
            <div className="animate-fade-in-up">
              <h1 className="font-heading font-bold text-5xl lg:text-7xl leading-tight tracking-wide mb-6 relative">
                <span className="relative inline-block">
                  {t('heroTitle').split(' ').slice(0, -1).join(' ')} 
                  <div className="absolute -top-4 -right-4">
                    <Sparkles className="w-8 h-8 text-accent-mint animate-pulse" />
                  </div>
                </span>
                <br />
                <span className="gradient-text relative">
                  {t('heroTitle').split(' ').slice(-1)[0]}
                  <div className="absolute inset-0 bg-gradient-to-r from-primary via-accent-blue to-accent-mint opacity-20 blur-2xl"></div>
                </span>
              </h1>
            </div>
            
            <p className="text-xl lg:text-2xl text-muted-foreground mb-8 leading-relaxed animate-fade-in-up delay-200">
              {t('heroSubtitle')}
            </p>
            
            {/* Action buttons with morphing effects */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start animate-fade-in-up delay-400">
              <MorphingButton>
                {t('startFree')}
              </MorphingButton>
              <Button 
                variant="outline" 
                size="lg" 
                className="hover-lift text-lg px-8 py-4 flex items-center justify-center gap-2 border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground frosted-glass group"
              >
                <Play className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
                {t('watchDemo')}
              </Button>
            </div>
            
            {/* Floating action buttons */}
            <div className="flex space-x-4 justify-center lg:justify-start mt-8 animate-fade-in-up delay-600">
              <FloatingActionButton icon={Zap} label="Hızlı Start" color="primary" />
              <FloatingActionButton icon={Target} label="Segment Seç" color="blue" />
              <FloatingActionButton icon={Sparkles} label="AI Analiz" color="mint" />
            </div>
          </div>
          
          {/* Interactive visual section */}
          <div className="relative animate-fade-in-up delay-300">
            <div className="relative z-10 group">
              {/* Main image with advanced effects */}
              <div className="relative overflow-hidden rounded-3xl shadow-2xl group-hover:shadow-4xl transition-all duration-700 transform group-hover:scale-105 group-hover:-rotate-2">
                <img 
                  src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=600" 
                  alt="Modern office workspace with digital transformation" 
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-accent-blue/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Interactive overlay elements */}
                <div className="absolute top-4 left-4 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-200">
                  <div className="bg-white/90 backdrop-blur-md rounded-2xl p-3 shadow-lg">
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-accent-mint rounded-full animate-pulse"></div>
                      <span className="text-sm font-medium">AI Active</span>
                    </div>
                  </div>
                </div>
                
                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-400">
                  <div className="bg-white/90 backdrop-blur-md rounded-2xl p-3 shadow-lg">
                    <div className="text-sm font-medium text-primary">+28% Growth</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Interactive floating orbs */}
            <div className="absolute -top-8 -right-8 animate-float">
              <InteractiveOrb />
            </div>
            
            {/* Enhanced background blobs */}
            <div className="absolute -top-12 -right-12 w-40 h-40 bg-gradient-to-r from-primary/20 to-accent-blue/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute -bottom-12 -left-12 w-32 h-32 bg-gradient-to-r from-accent-mint/20 to-accent-blue/20 rounded-full blur-2xl animate-pulse delay-300"></div>
            <div className="absolute top-1/2 -right-6 w-20 h-20 bg-gradient-to-r from-accent-mint/30 to-primary/30 rounded-full blur-xl animate-float delay-500"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
