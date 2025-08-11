import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { useLanguage } from '@/hooks/use-language';
import { Check, Star, Zap, Crown, Building } from 'lucide-react';
import { cn } from '@/lib/utils';

type Currency = 'try' | 'usd' | 'eur';
type BillingPeriod = 'monthly' | 'yearly';

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
  prices: Record<Currency, { monthly: number; yearly: number }>;
  features: PlanFeature[];
  buttonText: string;
  buttonVariant: 'default' | 'outline';
  highlight?: string;
}

export default function PricingPage() {
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
      name: 'Starter',
      icon: Star,
      description: "Girişimciler için temel araçlar",
      prices: {
        try: { monthly: 0, yearly: 0 },
        usd: { monthly: 0, yearly: 0 },
        eur: { monthly: 0, yearly: 0 },
      },
      features: [
        { text: '5 yol haritası/ay', included: true },
        { text: 'Temel AI danışman', included: true },
        { text: 'E-posta desteği', included: true },
        { text: "Temel şablonlar", included: true },
        { text: "Mobil erişim", included: true },
        { text: 'SEO analizi', included: false },
        { text: 'CRM entegrasyonu', included: false },
        { text: 'Öncelikli destek', included: false },
      ],
      buttonText: 'Ücretsiz Başla',
      buttonVariant: 'outline',
    },
    {
      name: 'Pro',
      icon: Zap,
      popular: true,
      description: "Büyüyen işletmeler için",
      highlight: "En Popüler",
      prices: {
        try: { monthly: 299, yearly: 2390 },
        usd: { monthly: 29, yearly: 232 },
        eur: { monthly: 26, yearly: 208 },
      },
      features: [
        { text: '50 yol haritası/ay', included: true },
        { text: 'Gelişmiş AI danışman', included: true },
        { text: 'SEO analizi', included: true },
        { text: 'Öncelikli destek', included: true },
        { text: "Gelişmiş raporlama", included: true },
        { text: "API erişimi", included: true },
        { text: "Özel entegrasyonlar", included: true },
        { text: 'CRM entegrasyonu', included: false },
      ],
      buttonText: 'Pro\'ya Başla',
      buttonVariant: 'default',
    },
    {
      name: 'Business',
      icon: Building,
      description: "Ölçeklenen şirketler için",
      prices: {
        try: { monthly: 599, yearly: 4790 },
        usd: { monthly: 59, yearly: 472 },
        eur: { monthly: 52, yearly: 416 },
      },
      features: [
        { text: 'Sınırsız yol haritası', included: true },
        { text: 'Tüm modüler araçlar', included: true },
        { text: 'CRM entegrasyonu', included: true },
        { text: '7/24 destek', included: true },
        { text: "Beyaz etiket çözümü", included: true },
        { text: "Özel analitik", included: true },
        { text: "Çoklu kullanıcı", included: true },
        { text: "SSO entegrasyonu", included: true },
      ],
      buttonText: 'Business\'a Başla',
      buttonVariant: 'default',
    },
    {
      name: 'Enterprise',
      icon: Crown,
      enterprise: true,
      description: "Kurumsal çözümler",
      prices: {
        try: { monthly: 0, yearly: 0 },
        usd: { monthly: 0, yearly: 0 },
        eur: { monthly: 0, yearly: 0 },
      },
      features: [
        { text: 'Özel çözümler', included: true },
        { text: 'Özel entegrasyonlar', included: true },
        { text: 'Özel eğitim', included: true },
        { text: 'Özel destek', included: true },
        { text: "SLA garantisi", included: true },
        { text: "On-premise kurulum", included: true },
        { text: "Gelişmiş güvenlik", included: true },
        { text: "Özel geliştirme", included: true },
      ],
      buttonText: 'Satışla Görüş',
      buttonVariant: 'outline',
    },
  ];

  const formatPrice = (plan: Plan) => {
    if (plan.enterprise) {
      return 'Özel';
    }
    
    const price = plan.prices[currency][billingPeriod];
    if (price === 0) return getCurrencySymbol(currency) + '0';
    
    return getCurrencySymbol(currency) + price.toLocaleString();
  };

  const getPeriodText = () => {
    return billingPeriod === 'monthly' ? '/aylık' : '/yıllık';
  };

  const getSavings = () => {
    return billingPeriod === 'yearly' ? '20%' : null;
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-soft-paper to-background">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="font-heading font-bold text-4xl lg:text-6xl mb-6 tracking-wide">
            Basit ve Şeffaf Fiyatlandırma
          </h1>
          <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
            İhtiyacına göre ölçeklenebilir planlar
          </p>
          
          {/* Currency & Billing Toggle */}
          <div className="bg-background p-6 rounded-3xl shadow-lg border border-border inline-flex flex-col sm:flex-row items-center gap-6">
            <div className="flex items-center space-x-3">
              <label className="text-sm font-medium text-muted-foreground">Para Birimi:</label>
              <Select value={currency} onValueChange={(value: Currency) => setCurrency(value)}>
                <SelectTrigger className="w-32 rounded-xl">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="try">TRY (₺)</SelectItem>
                  <SelectItem value="usd">USD ($)</SelectItem>
                  <SelectItem value="eur">EUR (€)</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="flex items-center space-x-4 bg-soft-paper p-2 rounded-2xl">
              <span className={cn("text-sm font-medium px-3 py-2 rounded-xl transition-colors", billingPeriod === 'monthly' ? "bg-background text-foreground shadow-sm" : "text-muted-foreground")}>Aylık</span>
              <Switch
                checked={billingPeriod === 'yearly'}
                onCheckedChange={(checked) => setBillingPeriod(checked ? 'yearly' : 'monthly')}
              />
              <div className="flex items-center space-x-2">
                <span className={cn("text-sm font-medium px-3 py-2 rounded-xl transition-colors", billingPeriod === 'yearly' ? "bg-background text-foreground shadow-sm" : "text-muted-foreground")}>Yıllık</span>
                {billingPeriod === 'yearly' && (
                  <Badge className="bg-accent-mint text-white text-xs">
                    %20 İndirim
                  </Badge>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-4 gap-8">
            {plans.map((plan, index) => (
              <div 
                key={index} 
                className={cn(
                  "relative rounded-3xl p-8 transition-all duration-300 hover-lift",
                  plan.popular 
                    ? "border-2 border-primary bg-gradient-to-b from-primary/5 to-background shadow-xl scale-105" 
                    : "border border-border bg-background shadow-lg hover:border-primary/20"
                )}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-primary text-primary-foreground px-6 py-2 text-sm font-semibold">
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
                    {!plan.enterprise && (
                      <div className="text-muted-foreground text-sm">
                        {getPeriodText()}
                        {getSavings() && billingPeriod === 'yearly' && (
                          <span className="text-accent-mint font-medium ml-2">
                            {getSavings()} tasarruf
                          </span>
                        )}
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
                    "w-full py-4 text-lg font-semibold hover-lift",
                    plan.buttonVariant === 'outline' && !plan.popular && "border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground",
                    plan.popular && "bg-primary hover:bg-primary/90 shadow-lg"
                  )}
                >
                  {plan.buttonText}
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-soft-paper">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-3xl lg:text-4xl mb-4">
              Fiyatlandırma Hakkında SSS
            </h2>
            <p className="text-xl text-muted-foreground">
              En çok sorulan sorular ve cevapları
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="bg-background p-6 rounded-2xl shadow-sm">
                <h3 className="font-semibold text-lg mb-3">Ücretsiz deneme süresi var mı?</h3>
                <p className="text-muted-foreground">Evet, tüm ücretli planlar 14 gün ücretsiz deneme ile gelir. Starter planı ise tamamen ücretsizdir.</p>
              </div>
              
              <div className="bg-background p-6 rounded-2xl shadow-sm">
                <h3 className="font-semibold text-lg mb-3">Plan değişikliği yapabilir miyim?</h3>
                <p className="text-muted-foreground">Evet, istediğiniz zaman planınızı yükseltebilir veya düşürebilirsiniz. Değişiklik anında geçerli olur.</p>
              </div>
              
              <div className="bg-background p-6 rounded-2xl shadow-sm">
                <h3 className="font-semibold text-lg mb-3">İptal politikası nedir?</h3>
                <p className="text-muted-foreground">İstediğiniz zaman iptal edebilirsiniz. İptal sonrası abonelik süreniz sonuna kadar hizmet almaya devam edersiniz.</p>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="bg-background p-6 rounded-2xl shadow-sm">
                <h3 className="font-semibold text-lg mb-3">Faturalandırma nasıl yapılır?</h3>
                <p className="text-muted-foreground">Aylık veya yıllık olarak otomatik faturalandırma yapılır. Tüm ödemeler güvenli SSL ile korunmaktadır.</p>
              </div>
              
              <div className="bg-background p-6 rounded-2xl shadow-sm">
                <h3 className="font-semibold text-lg mb-3">Kurumsal indirim var mı?</h3>
                <p className="text-muted-foreground">50+ kullanıcı için özel indirimler mevcuttur. Satış ekibimizle görüşün.</p>
              </div>
              
              <div className="bg-background p-6 rounded-2xl shadow-sm">
                <h3 className="font-semibold text-lg mb-3">Veri güvenliği nasıl sağlanıyor?</h3>
                <p className="text-muted-foreground">Tüm veriler KVKK ve GDPR uyumlu olarak şifrelenerek saklanır ve işlenir.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-24 bg-gradient-to-r from-primary to-primary/90 text-primary-foreground">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-heading font-bold text-3xl lg:text-4xl mb-4">
            Hemen Başlayın
          </h2>
          <p className="text-xl opacity-90 mb-8">
            14 gün ücretsiz deneme ile risk almadan deneyin
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-background text-primary hover:bg-background/90 px-8 py-4 text-lg font-semibold hover-lift"
            >
              Ücretsiz Başla
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-2 border-background text-background hover:bg-background hover:text-primary px-8 py-4 text-lg font-semibold hover-lift"
            >
              Satışla Görüş
            </Button>
          </div>
          
          <div className="mt-8 text-sm opacity-75">
            Tüm planlar 14 gün ücretsiz deneme ile gelir. İstediğin zaman iptal edebilirsin.
          </div>
        </div>
      </section>
    </div>
  );
}