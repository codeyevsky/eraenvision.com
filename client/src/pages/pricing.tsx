import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { useLanguage } from '@/hooks/use-language';
import { Check, Star, Zap, Crown } from 'lucide-react';
import { cn } from '@/lib/utils';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

type Currency = 'try' | 'usd' | 'eur';

interface PlanFeature {
  text: string;
  included: boolean;
}

interface Plan {
  name: string;
  icon: any;
  popular?: boolean;
  enterprise?: boolean;
  description: string;
  prices: Record<Currency, number>;
  features: PlanFeature[];
  buttonText: string;
  buttonVariant: 'default' | 'outline';
  highlight?: string;
}

export default function PricingPage() {
  const { t } = useLanguage();

  const getCurrencySymbol = (curr: Currency) => {
    switch (curr) {
      case 'try': return '₺';
      case 'usd': return '$';
      case 'eur': return '€';
      default: return '₺';
    }
  };

  const plans: Plan[] = [
    {
      name: t('planStarter'),
      icon: Star,
      description: t('planDescriptionStarter'),
      prices: {
        try: 0,
        usd: 0,
        eur: 0,
      },
      features: [
        { text: t('featureAiAnalysis'), included: true },
        { text: t('featurePersonalizedTest'), included: true },
        { text: t('featureDashboardData'), included: true },
        { text: '100 ' + t('featureAiTalks'), included: true },
        { text: t('featureRoadmapCreation'), included: true },
        { text: t('featureAiFeatures'), included: true },
      ],
      buttonText: t('tryNow'),
      buttonVariant: 'outline',
    },
    {
      name: t('planPro'),
      icon: Zap,
      popular: true,
      description: t('planDescriptionPro'),
      highlight: t('popularHighlight'),
      prices: {
        try: 299,
        usd: 19.99,
        eur: 18.99,
      },
      features: [
        { text: t('featureAiAnalysis'), included: true },
        { text: t('featurePersonalizedTest'), included: true },
        { text: t('featureDashboardData'), included: true },
        { text: '1000 ' + t('featureAiTalks'), included: true },
        { text: t('featureRoadmapCreation'), included: true },
        { text: t('featureAiFeatures'), included: true },
      ],
      buttonText: t('buyNow'),
      buttonVariant: 'outline',
    },
    {
      name: t('planEnterprise'),
      icon: Crown,
      enterprise: true,
      description: t('planDescriptionEnterprise'),
      prices: {
        try: 0,
        usd: 0,
        eur: 0,
      },
      features: [
        { text: t('featureAiAnalysis'), included: true },
        { text: t('featurePersonalizedTest'), included: true },
        { text: t('featureDashboardData'), included: true },
        { text: '5000 ' + t('featureAiTalks'), included: true },
        { text: t('featureRoadmapCreation'), included: true },
        { text: t('featureAiFeatures'), included: true },
      ],
      buttonText: t('contactUs'),
      buttonVariant: 'outline',
    },
  ];

  const formatPrice = (plan: Plan) => {
    if (plan.enterprise) {
      return t('contactUs');
    }
    
    if (plan.name === t('planStarter')) {
      return t('free');
    }

    const price = plan.prices['usd'];
    if (price === 0) return getCurrencySymbol('usd') + '0';
    
    return getCurrencySymbol('usd') + price.toLocaleString('tr-TR', { minimumFractionDigits: 2 });
  };


  const faqs = [
    {
      question: t('faqPlanChangeQuestion'),
      answer: t('faqPlanChangeAnswer')
    },
    {
      question: t('faqCurrencyQuestion'),
      answer: t('faqCurrencyAnswer')
    },
    {
      question: t('faqCancellationQuestion'),
      answer: t('faqCancellationAnswer')
    },
    {
      question: t('faqBillingQuestion'),
      answer: t('faqBillingAnswer')
    },
    {
      question: t('faqEnterpriseDiscountQuestion'),
      answer: t('faqEnterpriseDiscountAnswer')
    },
    {
      question: t('faqDataSecurityQuestion'),
      answer: t('faqDataSecurityAnswer')
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-soft-paper to-background">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="font-heading font-bold text-4xl lg:text-6xl mb-6 tracking-wide">
            {t('pricingTitlePage')}
          </h1>
          <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
            {t('pricingSubtitlePage')}
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={cn(
                  "relative rounded-3xl p-8 transition-all duration-300",
                  plan.popular
                    ? "border-2 border-primary bg-gradient-to-b from-primary/5 to-background shadow-xl"
                    : "border border-border bg-background shadow-lg hover:border-primary/20 hover:shadow-xl"
                )}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-white text-black border border-black border-2 px-6 py-2 text-sm font-semibold">
                      {plan.highlight}
                    </Badge>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <div className={cn(
                    "w-16 h-16 mx-auto rounded-2xl flex items-center justify-center mb-4",
                    plan.popular ? "bg-primary text-primary-foreground" : "bg-primary/10 text-primary"
                  )}>
                    <plan.icon className="h-8 w-8" />
                  </div>
                  
                  <h3 className="font-heading font-bold text-2xl mb-2">{plan.name}</h3>
                  <p className="text-muted-foreground text-sm mb-6">{plan.description}</p>
                  
                  <div className="mb-6">
                    <div className="text-4xl font-bold text-primary mb-1">
                      {formatPrice(plan)}
                    </div>
                    {plan.name === t('planStarter') ? (
                      <div className="text-muted-foreground text-sm">
                        {t('trialDays')}
                      </div>
                    ) : (
                      <div className="text-muted-foreground text-sm">
                        {t('perMonth')}
                      </div>
                    )}
                  </div>
                </div>
                
                <div className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start space-x-3">
                      <div className={cn(
                        "w-5 h-5 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0",
                        feature.included
                          ? "bg-accent-mint text-white"
                          : "bg-muted text-muted-foreground"
                      )}>
                        <Check className="h-3 w-3" />
                      </div>
                      <span className={cn(
                        "text-sm",
                        feature.included ? "text-foreground" : "text-muted-foreground line-through"
                      )}>
                        {feature.text}
                      </span>
                    </div>
                  ))}
                </div>
                
                <Button
                  variant={plan.buttonVariant}
                  className={cn(
                    "w-full py-4 text-lg font-semibold",
                    plan.popular
                      ? "border-2 border-primary text-primary hover:bg-primary hover:text-white"
                      : "border-2 border-primary text-primary hover:bg-primary hover:text-white"
                  )}
                >
                  {plan.buttonText}
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section with Accordion */}
      <section className="py-24 bg-soft-paper">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-3xl lg:text-4xl mb-4">
              {t('pricingFaqTitle')}
            </h2>
            <p className="text-xl text-muted-foreground">
              {t('pricingFaqSubtitle')}
            </p>
          </div>
          
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-b border-border">
                <AccordionTrigger className="text-lg font-semibold text-foreground hover:no-underline py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-24 bg-gradient-to-r from-primary to-primary/90 text-primary-foreground">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-heading font-bold text-3xl lg:text-4xl mb-4">
            {t('ctaPricingTitle')}
          </h2>
          <p className="text-xl opacity-90 mb-8">
            {t('ctaPricingSubtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-background text-primary hover:bg-background/90 px-8 py-4 text-lg font-semibold hover-lift"
            >
              {t('ctaStartFree')}
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-background text-background hover:bg-background hover:text-primary px-8 py-4 text-lg font-semibold hover-lift"
            >
              {t('contactSalesBtn')}
            </Button>
          </div>
          
          <div className="mt-8 text-sm opacity-75">
            {t('pricingDisclaimerCta')}
          </div>
        </div>
      </section>
    </div>
  );
}