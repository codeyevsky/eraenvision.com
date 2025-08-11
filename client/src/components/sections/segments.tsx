import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/hooks/use-language';
import { Check } from 'lucide-react';
import { cn } from '@/lib/utils';

export function SegmentsSection() {
  const [activeSegment, setActiveSegment] = useState('launch');
  const { t } = useLanguage();

  const segments = {
    launch: {
      badge: t('forEntrepreneurs'),
      badgeColor: 'bg-primary/10 text-primary',
      title: t('launchTitle'),
      subtitle: t('launchSubtitle'),
      features: [
        { title: t('ideaGeneration'), description: t('ideaGenerationDesc') },
        { title: t('marketAnalysis'), description: t('marketAnalysisDesc') },
        { title: t('mvpRoadmap'), description: t('mvpRoadmapDesc') },
      ],
      primaryButton: t('startFree'),
      secondaryButton: t('sampleRoadmap'),
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=600',
      imageAlt: 'Startup entrepreneurs collaborating on ideas',
      primaryColor: 'primary',
      overlayColor: 'from-primary/20',
    },
    scale: {
      badge: t('forBusinesses'),
      badgeColor: 'bg-accent-blue/10 text-accent-blue',
      title: t('scaleTitle'),
      subtitle: t('scaleSubtitle'),
      features: [
        { title: t('funnelOptimization'), description: t('funnelOptimizationDesc') },
        { title: t('seoAdsPrescriptions'), description: t('seoAdsPrescriptionsDesc') },
        { title: t('automationIntegration'), description: t('automationIntegrationDesc') },
      ],
      primaryButton: t('requestDemo'),
      secondaryButton: t('seeAuditExample'),
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=600',
      imageAlt: 'Digital transformation and business analytics',
      primaryColor: 'accent-blue',
      overlayColor: 'from-accent-blue/20',
    },
    invest: {
      badge: t('forInvestors'),
      badgeColor: 'bg-accent-mint/10 text-accent-mint',
      title: t('investTitle'),
      subtitle: t('investSubtitle'),
      features: [
        { title: t('profileDiscovery'), description: t('profileDiscoveryDesc') },
        { title: t('thesisMatching'), description: t('thesisMatchingDesc') },
        { title: t('watchLists'), description: t('watchListsDesc') },
      ],
      primaryButton: t('earlyAccess'),
      secondaryButton: t('sampleScoreCard'),
      image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=600',
      imageAlt: 'Investment analytics dashboard and financial data',
      primaryColor: 'accent-mint',
      overlayColor: 'from-accent-mint/20',
    },
  };

  const currentSegment = segments[activeSegment as keyof typeof segments];

  return (
    <section id="products" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-3xl lg:text-4xl mb-4">
            {t('threeSegmentsOnePlatform')}
          </h2>
          <p className="text-xl text-muted-foreground">
            {t('customizedSolutions')}
          </p>
        </div>

        {/* Segment Tabs */}
        <div className="flex justify-center mb-12">
          <div className="bg-soft-paper p-2 rounded-2xl">
            {Object.keys(segments).map((segment) => (
              <Button
                key={segment}
                variant="ghost"
                onClick={() => setActiveSegment(segment)}
                className={cn(
                  "px-6 py-3 rounded-xl transition-all font-medium capitalize",
                  activeSegment === segment
                    ? "bg-background text-primary shadow-sm"
                    : "text-muted-foreground hover:text-primary"
                )}
              >
                {segment}
              </Button>
            ))}
          </div>
        </div>

        {/* Segment Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-scale-in">
            <div className={cn("inline-block px-4 py-2 rounded-xl font-medium mb-4", currentSegment.badgeColor)}>
              {currentSegment.badge}
            </div>
            <h3 className="font-heading font-bold text-3xl lg:text-4xl mb-6">
              {currentSegment.title}
            </h3>
            <p className="text-xl text-muted-foreground mb-8">
              {currentSegment.subtitle}
            </p>
            
            <div className="space-y-4 mb-8">
              {currentSegment.features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className={cn(
                    "w-6 h-6 rounded-full flex items-center justify-center mt-1",
                    currentSegment.primaryColor === 'primary' && "bg-primary",
                    currentSegment.primaryColor === 'accent-blue' && "bg-accent-blue",
                    currentSegment.primaryColor === 'accent-mint' && "bg-accent-mint"
                  )}>
                    <Check className="h-3 w-3 text-white" />
                  </div>
                  <div>
                    <div className="font-medium">{feature.title}</div>
                    <div className="text-muted-foreground">{feature.description}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                className={cn(
                  currentSegment.primaryColor === 'primary' && "bg-primary hover:bg-primary/90",
                  currentSegment.primaryColor === 'accent-blue' && "bg-accent-blue hover:bg-accent-blue/90",
                  currentSegment.primaryColor === 'accent-mint' && "bg-accent-mint hover:bg-accent-mint/90"
                )}
              >
                {currentSegment.primaryButton}
              </Button>
              <Button 
                variant="outline" 
                className={cn(
                  "border-2 hover:text-primary-foreground",
                  currentSegment.primaryColor === 'primary' && "border-primary text-primary hover:bg-primary",
                  currentSegment.primaryColor === 'accent-blue' && "border-accent-blue text-accent-blue hover:bg-accent-blue",
                  currentSegment.primaryColor === 'accent-mint' && "border-accent-mint text-accent-mint hover:bg-accent-mint"
                )}
              >
                {currentSegment.secondaryButton}
              </Button>
            </div>
          </div>
          <div className="relative">
            <img 
              src={currentSegment.image}
              alt={currentSegment.imageAlt}
              className="rounded-2xl shadow-lg w-full h-auto"
            />
            <div className={cn("absolute inset-0 bg-gradient-to-tr to-transparent rounded-2xl", currentSegment.overlayColor)}></div>
          </div>
        </div>
      </div>
    </section>
  );
}
