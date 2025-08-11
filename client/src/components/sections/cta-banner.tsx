import { Button } from '@/components/ui/button';
import { useLanguage } from '@/hooks/use-language';
import { Play } from 'lucide-react';

export function CTABanner() {
  const { t } = useLanguage();

  return (
    <section className="py-24 bg-gradient-to-r from-primary to-primary/90 text-primary-foreground">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="font-heading font-bold text-3xl lg:text-4xl mb-4">
          {t('ctaBannerTitle')}
        </h2>
        <p className="text-xl opacity-90 mb-8">
          {t('ctaBannerSubtitle')}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            size="lg" 
            className="bg-background text-primary hover:bg-background/90 px-8 py-4 text-lg font-semibold hover-lift"
          >
            {t('startFree')}
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="border-2 border-background text-background hover:bg-background hover:text-primary px-8 py-4 text-lg font-semibold hover-lift flex items-center justify-center gap-2"
          >
            <Play className="h-5 w-5" />
            {t('watchDemo')}
          </Button>
        </div>
      </div>
    </section>
  );
}
