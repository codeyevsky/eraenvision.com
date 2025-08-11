import { Button } from '@/components/ui/button';
import { useLanguage } from '@/hooks/use-language';
import { Play } from 'lucide-react';

export function HeroSection() {
  const { t } = useLanguage();

  return (
    <section className="pt-16 pb-24 bg-gradient-to-br from-soft-paper to-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left animate-fade-in-up">
            <h1 className="font-heading font-bold text-4xl lg:text-6xl leading-tight tracking-wide mb-6">
              <span>{t('heroTitle').split(' ').slice(0, -1).join(' ')} </span>
              <span className="gradient-text">{t('heroTitle').split(' ').slice(-1)[0]}</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              {t('heroSubtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="hover-lift text-lg px-8 py-4">
                {t('startFree')}
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="hover-lift text-lg px-8 py-4 flex items-center justify-center gap-2 border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              >
                <Play className="h-5 w-5" />
                {t('watchDemo')}
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="relative z-10 animate-float">
              <img 
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=600" 
                alt="Modern office workspace with digital transformation" 
                className="rounded-3xl shadow-2xl w-full h-auto"
              />
            </div>
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-primary/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-accent-blue/10 rounded-full blur-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
