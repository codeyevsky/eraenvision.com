import { Button } from '@/components/ui/button';
import { useLanguage } from '@/hooks/use-language';

export function WorkflowSection() {
  const { t } = useLanguage();

  const steps = [
    {
      number: 1,
      title: t('defineProfile'),
      description: t('defineProfileDesc'),
    },
    {
      number: 2,
      title: t('getYourRoadmap'),
      description: t('getRoadmapDesc'),
    },
    {
      number: 3,
      title: t('executeActions'),
      description: t('executeActionsDesc'),
    },
    {
      number: 4,
      title: t('trackResults'),
      description: t('trackResultsDesc'),
    },
  ];

  return (
    <section id="how-it-works" className="py-24 bg-soft-paper">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-3xl lg:text-4xl mb-4">
            {t('howItWorksTitle')}
          </h2>
          <p className="text-xl text-muted-foreground">
            {t('howItWorksSubtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-6 text-primary-foreground text-2xl font-bold">
                {step.number}
              </div>
              <h3 className="font-heading font-semibold text-xl mb-4">
                {step.title}
              </h3>
              <p className="text-muted-foreground">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" className="hover-lift text-lg px-8 py-4">
            {t('tryItNow')}
          </Button>
        </div>
      </div>
    </section>
  );
}
