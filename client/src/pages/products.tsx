import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/hooks/use-language';
import { Check, ArrowRight, Sparkles, TrendingUp, Target } from 'lucide-react';
import { cn } from '@/lib/utils';
import { InteractiveOrb } from '@/components/ui/animated-blobs';
import { GlassCard, MorphingButton, FloatingActionButton } from '@/components/ui/apple-widgets';

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
      {/* Clean Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-soft-paper via-background to-soft-paper">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="font-heading font-bold text-5xl lg:text-7xl mb-8 tracking-wide relative">
              <span className="gradient-text">{t('threeSegmentsOnePlatform')}</span>
              <div className="absolute -top-6 -right-6">
                <InteractiveOrb className="scale-75" />
              </div>
            </h1>
            <p className="text-xl lg:text-2xl text-muted-foreground mb-16 leading-relaxed">
              {t('customizedSolutions')}
            </p>
          </div>
        </div>
      </section>

      {/* Apple-style Segment Navigation */}
      <section className="py-12 bg-background/80 backdrop-blur-xl relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-center animate-fade-in-up delay-400">
            <div className="frosted-glass p-2 rounded-3xl shadow-lg">
              <div className="relative flex">
                {Object.entries(segments).map(([segment, data], index) => (
                  <button
                    key={segment}
                    onClick={() => setActiveSegment(segment)}
                    className={cn(
                      "relative px-8 py-4 rounded-2xl transition-all duration-500 font-semibold capitalize text-lg mx-1 group overflow-hidden",
                      activeSegment === segment
                        ? "text-white shadow-lg transform scale-105"
                        : "text-muted-foreground hover:text-primary hover:scale-102"
                    )}
                  >
                    {/* Active background with morphing effect */}
                    {activeSegment === segment && (
                      <div className={cn(
                        "absolute inset-0 rounded-2xl transition-all duration-500",
                        segment === 'launch' && "bg-gradient-to-r from-primary to-primary/90",
                        segment === 'scale' && "bg-gradient-to-r from-accent-blue to-accent-blue/90",
                        segment === 'invest' && "bg-gradient-to-r from-accent-mint to-accent-mint/90"
                      )}></div>
                    )}
                    
                    {/* Hover shimmer effect */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                    </div>
                    
                    <div className="relative z-10 flex items-center">
                      <data.icon className="h-5 w-5 mr-3 group-hover:scale-110 transition-transform duration-300" />
                      {segment}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Segment Content with Glass Cards */}
      <section className={cn("py-32 bg-gradient-to-br relative", currentSegment.gradient)}>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-10 animate-fade-in-up delay-500">
              <div className={cn("inline-flex items-center px-6 py-3 rounded-2xl font-semibold border-2 frosted-glass", currentSegment.badgeColor)}>
                <currentSegment.icon className="h-5 w-5 mr-2" />
                {currentSegment.badge}
              </div>
              
              <h2 className="font-heading font-bold text-4xl lg:text-6xl leading-tight animate-fade-in-up delay-600">
                {currentSegment.title}
              </h2>
              
              <p className="text-xl lg:text-2xl text-muted-foreground leading-relaxed animate-fade-in-up delay-700">
                {currentSegment.subtitle}
              </p>
              
              <div className="space-y-4">
                {currentSegment.features.map((feature, index) => (
                  <GlassCard key={index} className={cn("animate-fade-in-up", `delay-${800 + index * 100}`)}>
                    <div className="flex items-start space-x-4">
                      <div className={cn(
                        "w-10 h-10 rounded-2xl flex items-center justify-center mt-1 flex-shrink-0 pulse-glow",
                        currentSegment.accentColor === 'primary' && "bg-gradient-to-r from-primary to-primary/80",
                        currentSegment.accentColor === 'accent-blue' && "bg-gradient-to-r from-accent-blue to-accent-blue/80",
                        currentSegment.accentColor === 'accent-mint' && "bg-gradient-to-r from-accent-mint to-accent-mint/80"
                      )}>
                        <Check className="h-5 w-5 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-xl mb-3">{feature.title}</h3>
                        <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                      </div>
                    </div>
                  </GlassCard>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-6 pt-8 animate-fade-in-up delay-1000">
                <MorphingButton className={cn(
                  "text-lg font-bold",
                  currentSegment.accentColor === 'primary' && "bg-gradient-to-r from-primary to-primary/90",
                  currentSegment.accentColor === 'accent-blue' && "bg-gradient-to-r from-accent-blue to-accent-blue/90",
                  currentSegment.accentColor === 'accent-mint' && "bg-gradient-to-r from-accent-mint to-accent-mint/90"
                )}>
                  {currentSegment.primaryButton}
                </MorphingButton>
                <Button 
                  variant="outline" 
                  size="lg"
                  className={cn(
                    "px-8 py-4 text-lg font-semibold border-2 hover:text-primary-foreground hover-lift frosted-glass group",
                    currentSegment.accentColor === 'primary' && "border-primary text-primary hover:bg-primary",
                    currentSegment.accentColor === 'accent-blue' && "border-accent-blue text-accent-blue hover:bg-accent-blue",
                    currentSegment.accentColor === 'accent-mint' && "border-accent-mint text-accent-mint hover:bg-accent-mint"
                  )}
                >
                  {currentSegment.secondaryButton}
                  <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </div>
            </div>

            <div className="relative animate-fade-in-up delay-300">
              <div className="relative z-10 group">
                {/* Interactive glass container */}
                <div className="relative overflow-hidden rounded-3xl shadow-2xl group-hover:shadow-4xl transition-all duration-700 transform group-hover:scale-105 group-hover:-rotate-1">
                  <img 
                    src={currentSegment.image}
                    alt={currentSegment.imageAlt}
                    className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  {/* Animated overlay */}
                  <div className={cn(
                    "absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-tr from-transparent via-transparent to-transparent",
                    currentSegment.accentColor === 'primary' && "from-primary/20 to-primary/10",
                    currentSegment.accentColor === 'accent-blue' && "from-accent-blue/20 to-accent-blue/10",
                    currentSegment.accentColor === 'accent-mint' && "from-accent-mint/20 to-accent-mint/10"
                  )}></div>
                  
                  {/* Interactive floating elements */}
                  <div className="absolute top-6 left-6 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-200">
                    <div className="frosted-glass rounded-2xl p-4 shadow-lg">
                      <div className="flex items-center space-x-3">
                        <currentSegment.icon className={cn(
                          "w-6 h-6",
                          currentSegment.accentColor === 'primary' && "text-primary",
                          currentSegment.accentColor === 'accent-blue' && "text-accent-blue",
                          currentSegment.accentColor === 'accent-mint' && "text-accent-mint"
                        )} />
                        <span className="text-sm font-bold">{currentSegment.badge}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-400">
                    <div className="frosted-glass rounded-2xl p-4 shadow-lg">
                      <div className="text-sm font-bold">AI-Powered</div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Interactive floating orb */}
              <div className="absolute -top-8 -right-8 animate-float">
                <InteractiveOrb className="scale-75" />
              </div>
              
              {/* Enhanced animated background blobs */}
              <div className={cn(
                "absolute -top-12 -right-12 w-40 h-40 rounded-full blur-3xl opacity-30 animate-pulse",
                currentSegment.accentColor === 'primary' && "bg-gradient-to-r from-primary/30 to-primary/10",
                currentSegment.accentColor === 'accent-blue' && "bg-gradient-to-r from-accent-blue/30 to-accent-blue/10",
                currentSegment.accentColor === 'accent-mint' && "bg-gradient-to-r from-accent-mint/30 to-accent-mint/10"
              )}></div>
              <div className={cn(
                "absolute -bottom-12 -left-12 w-32 h-32 rounded-full blur-2xl opacity-20 animate-pulse delay-300",
                currentSegment.accentColor === 'primary' && "bg-gradient-to-r from-primary/20 to-accent-blue/10",
                currentSegment.accentColor === 'accent-blue' && "bg-gradient-to-r from-accent-blue/20 to-accent-mint/10",
                currentSegment.accentColor === 'accent-mint' && "bg-gradient-to-r from-accent-mint/20 to-primary/10"
              )}></div>
              <div className={cn(
                "absolute top-1/2 -right-6 w-20 h-20 rounded-full blur-xl opacity-25 animate-float delay-500",
                currentSegment.accentColor === 'primary' && "bg-gradient-to-r from-accent-mint/30 to-primary/30",
                currentSegment.accentColor === 'accent-blue' && "bg-gradient-to-r from-primary/30 to-accent-blue/30",
                currentSegment.accentColor === 'accent-mint' && "bg-gradient-to-r from-accent-blue/30 to-accent-mint/30"
              )}></div>
            </div>
          </div>
        </div>
      </section>

      {/* Apple-style Feature Comparison */}
      <section className="py-32 bg-gradient-to-b from-background to-soft-paper relative">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-20 animate-fade-in-up">
            <h2 className="font-heading font-bold text-4xl lg:text-6xl mb-6 gradient-text">
              Hangi Segment Size Uygun?
            </h2>
            <p className="text-xl lg:text-2xl text-muted-foreground">
              İhtiyaçlarınıza en uygun çözümü bulun
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {Object.entries(segments).map(([segment, data], index) => (
              <GlassCard 
                key={segment} 
                className={cn(
                  "text-center group cursor-pointer animate-fade-in-up hover:scale-105 transition-all duration-500",
                  activeSegment === segment && "ring-2 ring-offset-4",
                  data.accentColor === 'primary' && activeSegment === segment && "ring-primary ring-offset-background",
                  data.accentColor === 'accent-blue' && activeSegment === segment && "ring-accent-blue ring-offset-background",
                  data.accentColor === 'accent-mint' && activeSegment === segment && "ring-accent-mint ring-offset-background",
                  `delay-${300 + index * 100}`
                )}
                onClick={() => setActiveSegment(segment)}
              >
                <div className="mb-8">
                  <div className={cn(
                    "w-20 h-20 mx-auto rounded-3xl flex items-center justify-center mb-6 relative overflow-hidden pulse-glow",
                    data.accentColor === 'primary' && "bg-gradient-to-r from-primary to-primary/80",
                    data.accentColor === 'accent-blue' && "bg-gradient-to-r from-accent-blue to-accent-blue/80",
                    data.accentColor === 'accent-mint' && "bg-gradient-to-r from-accent-mint to-accent-mint/80"
                  )}>
                    <data.icon className="h-10 w-10 text-white group-hover:scale-110 transition-transform duration-300" />
                    
                    {/* Shimmer effect */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                    </div>
                  </div>
                  <h3 className="font-heading font-bold text-2xl lg:text-3xl mb-3 capitalize">{segment}</h3>
                  <p className={cn(
                    "font-semibold px-4 py-2 rounded-xl inline-block",
                    data.accentColor === 'primary' && "text-primary bg-primary/10",
                    data.accentColor === 'accent-blue' && "text-accent-blue bg-accent-blue/10",
                    data.accentColor === 'accent-mint' && "text-accent-mint bg-accent-mint/10"
                  )}>{data.badge}</p>
                </div>
                
                <div className="space-y-4 mb-8">
                  {data.features.map((feature, index) => (
                    <div key={index} className="flex items-start space-x-3 text-left">
                      <div className={cn(
                        "w-6 h-6 rounded-lg flex items-center justify-center mt-0.5 flex-shrink-0",
                        data.accentColor === 'primary' && "bg-primary",
                        data.accentColor === 'accent-blue' && "bg-accent-blue",
                        data.accentColor === 'accent-mint' && "bg-accent-mint"
                      )}>
                        <Check className="h-3 w-3 text-white" />
                      </div>
                      <span className="font-medium">{feature.title}</span>
                    </div>
                  ))}
                </div>
                
                <MorphingButton 
                  className={cn(
                    "w-full text-white font-bold",
                    data.accentColor === 'primary' && "bg-gradient-to-r from-primary to-primary/90",
                    data.accentColor === 'accent-blue' && "bg-gradient-to-r from-accent-blue to-accent-blue/90",
                    data.accentColor === 'accent-mint' && "bg-gradient-to-r from-accent-mint to-accent-mint/90"
                  )}
                  onClick={() => setActiveSegment(segment)}
                >
                  Detayları Gör
                </MorphingButton>
              </GlassCard>
            ))}
          </div>
        </div>
        

      </section>
    </div>
  );
}