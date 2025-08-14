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
      name: 'Başlangıç',
      icon: Star,
      description: "Platformu keşfetmek için ideal.",
      prices: {
        try: 0,
        usd: 0,
        eur: 0,
      },
      features: [
        { text: 'AI Analiz Hakkı (ücretsiz)', included: true },
        { text: 'Kişiselleştirilmiş test Hakkı (ücretsiz)', included: true },
        { text: 'Dashboard verilerini görüntüleme (ücretsiz)', included: true },
        { text: '100 Adet AI ile Konuşma Hakkı', included: true },
        { text: 'Yol Haritası Oluşturma Hakkı (ücretsiz)', included: true },
        { text: 'Birçok AI Özelliği', included: true },
      ],
      buttonText: 'Hemen Deneyin',
      buttonVariant: 'outline',
    },
    {
      name: 'Profesyonel',
      icon: Zap,
      popular: true,
      description: "Büyüyen işletmeler için güçlü destek.",
      highlight: "En Popüler",
      prices: {
        try: 299,
        usd: 19.99,
        eur: 18.99,
      },
      features: [
        { text: 'AI Analiz Hakkı (ücretsiz)', included: true },
        { text: 'Kişiselleştirilmiş Test Hakkı (ücretsiz)', included: true },
        { text: 'Dashboard verilerini görüntüleme (ücretsiz)', included: true },
        { text: '1000 Adet AI ile Konuşma Hakkı', included: true },
        { text: 'Yol Haritası Oluşturma (ücretsiz)', included: true },
        { text: 'Birçok AI Özelliği', included: true },
      ],
      buttonText: 'Satın Al',
      buttonVariant: 'outline',
    },
    {
      name: 'Kurumsal',
      icon: Crown,
      enterprise: true,
      description: "Büyük organizasyonlar için özel çözümler.",
      prices: {
        try: 0,
        usd: 0,
        eur: 0,
      },
      features: [
        { text: 'AI Analiz (free)', included: true },
        { text: 'Kişiselleştirilmiş test (Ücretsiz)', included: true },
        { text: 'Dashboard verilerini görüntüleme (ücretsiz)', included: true },
        { text: '5000 Adet AI ile Konuşma Hakkı', included: true },
        { text: 'Yol Haritası Oluşturma (ücretsiz)', included: true },
        { text: 'Birçok AI Özelliği', included: true },
      ],
      buttonText: 'İletişime Geçin',
      buttonVariant: 'outline',
    },
  ];

  const formatPrice = (plan: Plan) => {
    if (plan.enterprise) {
      return 'İletişime Geçin';
    }
    
    if (plan.name === 'Başlangıç') {
      return 'Ücretsiz';
    }

    const price = plan.prices['usd'];
    if (price === 0) return getCurrencySymbol('usd') + '0';
    
    return getCurrencySymbol('usd') + price.toLocaleString('tr-TR', { minimumFractionDigits: 2 });
  };


  const faqs = [
    {
      question: "Plan değişikliği nasıl yapılır?",
      answer: "İstediğiniz zaman dashboard'tan planınızı değiştirebilirsiniz. Upgrade durumunda anında geçiş yapılır, downgrade ise sonraki faturalandırma döneminde devreye girer."
    },
    {
      question: "Kur dönüşümü nasıl?",
      answer: "Ödeme sayfasında, sadece USD ile ödeme kabul edilmektedir."
    },
    {
      question: "İptal politikası nedir?",
      answer: "İstediğiniz zaman aboneliğinizi iptal edebilirsiniz. İptal sonrası mevcut dönem sonuna kadar hizmet almaya devam edersiniz. Para iade garantimiz 30 gündür."
    },
    {
      question: "Faturalandırma nasıl yapılır?",
      answer: "Aylık olarak otomatik faturalandırma yapılır. Tüm ödemeler güvenli SSL ile korunmaktadır."
    },
    {
      question: "Kurumsal indirim var mı?",
      answer: "50+ kullanıcı için özel indirimler mevcuttur. Satış ekibimizle görüşün."
    },
    {
      question: "Veri güvenliği nasıl sağlanıyor?",
      answer: "Tüm veriler KVKK ve GDPR uyumlu olarak şifrelenerek saklanır ve işlenir."
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-soft-paper to-background">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="font-heading font-bold text-4xl lg:text-6xl mb-6 tracking-wide">
            Herkes İçin Uygun Fiyatlandırma
          </h1>
          <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
            İhtiyacınıza göre seçebileceğiniz esnek planlarla dijital dönüşüm yolculuğunuza başlayın. Ücretsiz planla teste başlayın, işletmeniz büyüdükçe planlara geçin.
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
                    {plan.name === 'Başlangıç' ? (
                      <div className="text-muted-foreground text-sm">
                        /3 gün deneme süresi
                      </div>
                    ) : (
                      <div className="text-muted-foreground text-sm">
                        /ay
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
              Fiyatlandırma Hakkında SSS
            </h2>
            <p className="text-xl text-muted-foreground">
              Fiyatlandırma ile ilgili merak ettikleriniz
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
            Hemen Başlayın
          </h2>
          <p className="text-xl opacity-90 mb-8">
            3 gün ücretsiz deneme ile risk almadan deneyin
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
            Tüm planlar 3 gün ücretsiz deneme ile gelir. İstediğin zaman iptal edebilirsin.
          </div>
        </div>
      </section>
    </div>
  );
} 