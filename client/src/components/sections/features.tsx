import { useLanguage } from '@/hooks/use-language';
import { Brain, Boxes, Rocket } from 'lucide-react';

export function FeaturesSection() {
  const { t } = useLanguage();

  const features = [
    {
      icon: Brain,
      title: t('aiConsultant'),
      description: t('aiConsultantDesc'),
      color: 'bg-primary/10 text-primary',
    },
    {
      icon: Boxes,
      title: t('modularTools'),
      description: t('modularToolsDesc'),
      color: 'bg-accent-blue/10 text-accent-blue',
    },
    {
      icon: Rocket,
      title: t('automationFocused'),
      description: t('automationFocusedDesc'),
      color: 'bg-accent-mint/10 text-accent-mint',
    },
  ];

  return (
    <section className="py-24 bg-soft-paper">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-3xl lg:text-4xl mb-4">
            {t('whyEraEnvision')}
          </h2>
          <p className="text-xl text-muted-foreground">
            {t('featuresSubtitle')}
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-background p-8 rounded-2xl shadow-lg hover-lift"
            >
              <div className={`w-16 h-16 ${feature.color} rounded-2xl flex items-center justify-center mb-6`}>
                <feature.icon className="h-8 w-8" />
              </div>
              <h3 className="font-heading font-semibold text-xl mb-4">
                {feature.title}
              </h3>
              <p className="text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
