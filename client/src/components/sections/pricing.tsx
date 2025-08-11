import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useLanguage } from '@/hooks/use-language';
import { Check } from 'lucide-react';
import { cn } from '@/lib/utils';

type Currency = 'try' | 'usd' | 'eur';
type BillingPeriod = 'monthly' | 'yearly';

interface PlanFeature {
  text: string;
  included: boolean;
}

interface Plan {
  name: string;
  popular?: boolean;
  prices: Record<Currency, { monthly: number; yearly: number }>;
  features: PlanFeature[];
  buttonText: string;
  buttonVariant: 'default' | 'outline';
}

export function PricingSection() {
  const [currency, setCurrency] = useState<Currency>('try');
  const [billingPeriod, setBillingPeriod] = useState<BillingPeriod>('monthly');
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
      name: t('starter'),
      prices: {
        try: { monthly: 0, yearly: 0 },
        usd: { monthly: 0, yearly: 0 },
        eur: { monthly: 0, yearly: 0 },
      },
      features: [
        { text: `5 ${t('roadmapsPerMonth')}`, included: true },
        { text: t('basicAiConsultant'), included: true },
        { text: t('emailSupport'), included: true },
      ],
      buttonText: t('startFree'),
      buttonVariant: 'default',
    },
    {
      name: t('pro'),
      popular: true,
      prices: {
        try: { monthly: 299, yearly: 2390 },
        usd: { monthly: 29, yearly: 232 },
        eur: { monthly: 26, yearly: 208 },
      },
      features: [
        { text: `50 ${t('roadmapsPerMonth')}`, included: true },
        { text: t('advancedAiConsultant'), included: true },
        { text: t('seoAnalysis'), included: true },
        { text: t('prioritySupport'), included: true },
      ],
      buttonText: t('startPro'),
      buttonVariant: 'default',
    },
    {
      name: t('business'),
      prices: {
        try: { monthly: 599, yearly: 4790 },
        usd: { monthly: 59, yearly: 472 },
        eur: { monthly: 52, yearly: 416 },
      },
      features: [
        { text: t('unlimitedRoadmaps'), included: true },
        { text: t('allModularTools'), included: true },
        { text: t('crmIntegration'), included: true },
        { text: t('support24_7'), included: true },
      ],
      buttonText: t('startBusiness'),
      buttonVariant: 'default',
    },
    {
      name: t('enterprise'),
      prices: {
        try: { monthly: 0, yearly: 0 },
        usd: { monthly: 0, yearly: 0 },
        eur: { monthly: 0, yearly: 0 },
      },
      features: [
        { text: t('customSolutions'), included: true },
        { text: t('customIntegrations'), included: true },
        { text: t('customTraining'), included: true },
        { text: t('dedicatedSupport'), included: true },
      ],
      buttonText: t('contactSales'),
      buttonVariant: 'outline',
    },
  ];

  const formatPrice = (plan: Plan) => {
    if (plan.name === t('enterprise')) {
      return t('custom');
    }
    
    const price = plan.prices[currency][billingPeriod];
    if (price === 0) return getCurrencySymbol(currency) + '0';
    
    return getCurrencySymbol(currency) + price;
  };

  const getPeriodText = () => {
    return billingPeriod === 'monthly' ? `/${t('monthly').toLowerCase()}` : `/${t('yearly').toLowerCase()}`;
  };

  return (
    <section id="pricing" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-3xl lg:text-4xl mb-4">
            {t('pricingTitle')}
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            {t('pricingSubtitle')}
          </p>
          
          {/* Currency & Billing Toggle */}
          <div className="flex justify-center items-center space-x-6 mb-8">
            <div className="flex items-center space-x-2">
              <label className="text-muted-foreground">{t('currency')}</label>
              <Select value={currency} onValueChange={(value: Currency) => setCurrency(value)}>
                <SelectTrigger className="w-32">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="try">TRY (₺)</SelectItem>
                  <SelectItem value="usd">USD ($)</SelectItem>
                  <SelectItem value="eur">EUR (€)</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex items-center space-x-3">
              <span className={cn("text-muted-foreground", billingPeriod === 'monthly' && "text-foreground")}>{t('monthly')}</span>
              <Switch
                checked={billingPeriod === 'yearly'}
                onCheckedChange={(checked) => setBillingPeriod(checked ? 'yearly' : 'monthly')}
              />
              <span className={cn("text-muted-foreground", billingPeriod === 'yearly' && "text-foreground")}>{t('yearly')}</span>
              <span className="bg-accent-mint text-white px-2 py-1 rounded-lg text-xs font-medium">
                {t('discount20')}
              </span>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={cn(
                "rounded-2xl p-8 hover-lift relative",
                plan.popular 
                  ? "border-2 border-primary bg-background" 
                  : "border border-border bg-background"
              )}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium">
                  {t('popular')}
                </div>
              )}
              
              <div className="text-center">
                <h3 className="font-heading font-semibold text-xl mb-4">{plan.name}</h3>
                <div className="mb-6">
                  <span className="text-3xl font-bold text-primary">
                    {formatPrice(plan)}
                  </span>
                  {plan.name !== t('enterprise') && (
                    <span className="text-muted-foreground">{getPeriodText()}</span>
                  )}
                </div>
                <div className="space-y-3 mb-8 text-left">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-2">
                      <Check className="h-5 w-5 text-primary flex-shrink-0" />
                      <span className="text-sm">{feature.text}</span>
                    </div>
                  ))}
                </div>
                <Button 
                  variant={plan.buttonVariant}
                  className={cn(
                    "w-full",
                    plan.buttonVariant === 'outline' && "border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                  )}
                >
                  {plan.buttonText}
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 text-muted-foreground">
          <p className="text-sm">{t('pricingDisclaimer')}</p>
        </div>
      </div>
    </section>
  );
}
