import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/hooks/use-language';
import { Check, ArrowRight, Sparkles, TrendingUp, Target } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function ProductsPage() {
  const [activeSegment, setActiveSegment] = useState('launch');
  const { t } = useLanguage();

  const segments = {
    launch: {
      icon: Sparkles,
      badge: t('forEntrepreneurs'),
      badgeColor: 'bg-primary/10 text-primary border-primary/20',
      title: t('launchTitle'),
      subtitle: t('launchSubtitle'),
      features: [
        { title: t('ideaGeneration'), description: t('ideaGenerationDesc') },
        { title: t('marketAnalysis'), description: t('marketAnalysisDesc') },
        { title: t('mvpRoadmap'), description: t('mvpRoadmapDesc') },
      ],
      primaryButton: t('startFree'),
      secondaryButton: t('sampleRoadmap'),
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600',
      imageAlt: 'Startup entrepreneurs collaborating on ideas',
      gradient: 'from-primary/5 via-primary/10 to-primary/5',
      accentColor: 'primary',
    },
    scale: {
      icon: TrendingUp,
      badge: t('forBusinesses'),
      badgeColor: 'bg-accent-blue/10 text-accent-blue border-accent-blue/20',
      title: t('scaleTitle'),
      subtitle: t('scaleSubtitle'),
      features: [
        { title: t('funnelOptimization'), description: t('funnelOptimizationDesc') },
        { title: t('seoAdsPrescriptions'), description: t('seoAdsPrescriptionsDesc') },
        { title: t('automationIntegration'), description: t('automationIntegrationDesc') },
      ],
      primaryButton: t('requestDemo'),
      secondaryButton: t('seeAuditExample'),
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600',
      imageAlt: 'Digital transformation and business analytics',
      gradient: 'from-accent-blue/5 via-accent-blue/10 to-accent-blue/5',
      accentColor: 'accent-blue',
    },
    invest: {
      icon: Target,
      badge: t('forInvestors'),
      badgeColor: 'bg-accent-mint/10 text-accent-mint border-accent-mint/20',
      title: t('investTitle'),
      subtitle: t('investSubtitle'),
      features: [
        { title: t('profileDiscovery'), description: t('profileDiscoveryDesc') },
        { title: t('thesisMatching'), description: t('thesisMatchingDesc') },
        { title: t('watchLists'), description: t('watchListsDesc') },
      ],
      primaryButton: t('earlyAccess'),
      secondaryButton: t('sampleScoreCard'),
      image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600',
      imageAlt: 'Investment analytics dashboard and financial data',
      gradient: 'from-accent-mint/5 via-accent-mint/10 to-accent-mint/5',
      accentColor: 'accent-mint',
    },
  };

  const currentSegment = segments[activeSegment as keyof typeof segments];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-soft-paper to-background relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="font-heading font-bold text-4xl lg:text-6xl mb-6 tracking-wide">
              <span>{t('threeSegmentsOnePlatform')}</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
              {t('customizedSolutions')}
            </p>
          </div>
        </div>
      </section>

      {/* Segment Navigation */}
      <section className="py-8 bg-background border-b border-border">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-center">
            <div className="bg-soft-paper p-3 rounded-3xl shadow-inner">
              {Object.entries(segments).map(([segment, data]) => (
                <Button
                  key={segment}
                  variant="ghost"
                  onClick={() => setActiveSegment(segment)}
                  className={cn(
                    "px-8 py-4 rounded-2xl transition-all font-medium capitalize text-lg mx-1",
                    activeSegment === segment
                      ? "bg-background text-primary shadow-lg border border-border"
                      : "text-muted-foreground hover:text-primary hover:bg-background/50"
                  )}
                >
                  <data.icon className="h-5 w-5 mr-2" />
                  {segment}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Segment Content */}
      <section className={cn("py-24 bg-gradient-to-br", currentSegment.gradient)}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className={cn("inline-flex items-center px-6 py-3 rounded-2xl font-medium border", currentSegment.badgeColor)}>
                <currentSegment.icon className="h-5 w-5 mr-2" />
                {currentSegment.badge}
              </div>
              
              <h2 className="font-heading font-bold text-3xl lg:text-5xl leading-tight">
                {currentSegment.title}
              </h2>
              
              <p className="text-xl text-muted-foreground leading-relaxed">
                {currentSegment.subtitle}
              </p>
              
              <div className="space-y-6">
                {currentSegment.features.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-4 p-6 bg-background/80 backdrop-blur-sm rounded-2xl border border-border/50 hover-lift">
                    <div className={cn(
                      "w-8 h-8 rounded-xl flex items-center justify-center mt-1 flex-shrink-0",
                      currentSegment.accentColor === 'primary' && "bg-primary",
                      currentSegment.accentColor === 'accent-blue' && "bg-accent-blue",
                      currentSegment.accentColor === 'accent-mint' && "bg-accent-mint"
                    )}>
                      <Check className="h-4 w-4 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                      <p className="text-muted-foreground">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button 
                  size="lg"
                  className={cn(
                    "px-8 py-4 text-lg font-semibold hover-lift group",
                    currentSegment.accentColor === 'primary' && "bg-primary hover:bg-primary/90",
                    currentSegment.accentColor === 'accent-blue' && "bg-accent-blue hover:bg-accent-blue/90",
                    currentSegment.accentColor === 'accent-mint' && "bg-accent-mint hover:bg-accent-mint/90"
                  )}
                >
                  {currentSegment.primaryButton}
                  <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className={cn(
                    "px-8 py-4 text-lg font-semibold border-2 hover:text-primary-foreground hover-lift",
                    currentSegment.accentColor === 'primary' && "border-primary text-primary hover:bg-primary",
                    currentSegment.accentColor === 'accent-blue' && "border-accent-blue text-accent-blue hover:bg-accent-blue",
                    currentSegment.accentColor === 'accent-mint' && "border-accent-mint text-accent-mint hover:bg-accent-mint"
                  )}
                >
                  {currentSegment.secondaryButton}
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="relative z-10">
                <img 
                  src={currentSegment.image}
                  alt={currentSegment.imageAlt}
                  className="rounded-3xl shadow-2xl w-full h-auto hover-lift"
                />
              </div>
              <div className={cn(
                "absolute -top-8 -right-8 w-32 h-32 rounded-full blur-3xl opacity-20",
                currentSegment.accentColor === 'primary' && "bg-primary",
                currentSegment.accentColor === 'accent-blue' && "bg-accent-blue",
                currentSegment.accentColor === 'accent-mint' && "bg-accent-mint"
              )}></div>
              <div className={cn(
                "absolute -bottom-8 -left-8 w-24 h-24 rounded-full blur-2xl opacity-15",
                currentSegment.accentColor === 'primary' && "bg-primary",
                currentSegment.accentColor === 'accent-blue' && "bg-accent-blue",
                currentSegment.accentColor === 'accent-mint' && "bg-accent-mint"
              )}></div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Comparison */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-3xl lg:text-4xl mb-4">
              Hangi Segment Size Uygun?
            </h2>
            <p className="text-xl text-muted-foreground">
              İhtiyaçlarınıza en uygun çözümü bulun
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {Object.entries(segments).map(([segment, data]) => (
              <div key={segment} className="bg-soft-paper p-8 rounded-3xl border border-border hover-lift transition-all duration-300 hover:border-primary/20">
                <div className="text-center mb-6">
                  <div className={cn(
                    "w-16 h-16 mx-auto rounded-2xl flex items-center justify-center mb-4",
                    data.accentColor === 'primary' && "bg-primary/10 text-primary",
                    data.accentColor === 'accent-blue' && "bg-accent-blue/10 text-accent-blue",
                    data.accentColor === 'accent-mint' && "bg-accent-mint/10 text-accent-mint"
                  )}>
                    <data.icon className="h-8 w-8" />
                  </div>
                  <h3 className="font-heading font-bold text-2xl mb-2 capitalize">{segment}</h3>
                  <p className="text-muted-foreground">{data.badge}</p>
                </div>
                
                <div className="space-y-3 mb-8">
                  {data.features.map((feature, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <Check className={cn(
                        "h-5 w-5 mt-0.5 flex-shrink-0",
                        data.accentColor === 'primary' && "text-primary",
                        data.accentColor === 'accent-blue' && "text-accent-blue",
                        data.accentColor === 'accent-mint' && "text-accent-mint"
                      )} />
                      <span className="text-sm font-medium">{feature.title}</span>
                    </div>
                  ))}
                </div>
                
                <Button 
                  className={cn(
                    "w-full",
                    data.accentColor === 'primary' && "bg-primary hover:bg-primary/90",
                    data.accentColor === 'accent-blue' && "bg-accent-blue hover:bg-accent-blue/90",
                    data.accentColor === 'accent-mint' && "bg-accent-mint hover:bg-accent-mint/90"
                  )}
                  onClick={() => setActiveSegment(segment)}
                >
                  Detayları Gör
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}