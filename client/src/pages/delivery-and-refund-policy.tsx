import { Card, CardContent } from '@/components/ui/card';
import { useLanguage } from '@/hooks/use-language';
import { Link } from 'wouter';
import { ArrowLeft } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import { translations } from '@/lib/translations';

export default function DeliveryAndRefundPolicyPage() {
  const { t, language } = useLanguage();

  // Dinamik tarihi alırken, {date} yerine tarihi yerleştiriyoruz
  const effectiveDate = new Date().toLocaleDateString(language === 'tr' ? 'tr-TR' : 'en-US');
  const trDate = t('deliveryAndRefundPolicyEffectiveDate').replace('{date}', effectiveDate);

  // translation.ts dosyasındaki metinleri doğrudan çekiyoruz.
  // Bu, t() fonksiyonunun tek bir string almasını sağlar.
  const selectedTranslations = translations[language];

  // Bölümleri daha basit bir şekilde oluşturuyoruz
  const sections = [
    {
      title: t('deliverySection1Title'),
      body: t('deliverySection1Body'),
      subsections: [
        {
          title: t('deliverySection1aTitle'),
          body: t('deliverySection1aBody')
        },
        {
          title: t('deliverySection1bTitle'),
          body: t('deliverySection1bBody')
        }
      ]
    },
    {
      title: t('refundSection2Title'),
      body: t('refundSection2Body'),
      subsections: [
        {
          title: t('refundSection2aTitle'),
          body: t('refundSection2aBody')
        },
        {
          title: t('refundSection2bTitle'),
          body: t('refundSection2bBody')
        },
      ],
      listTitle: t('refundSection2cTitle'),
      listItems: selectedTranslations.refundSection2cList, // Doğrudan array'i çekiyoruz
    },
    {
      title: t('refundSection3Title'),
      body: t('refundSection3Body'),
      listItems: selectedTranslations.refundSection3List,
    }
  ];

  return (
    <div className="min-h-screen bg-soft-paper py-20 px-6">
      <div className="max-w-4xl mx-auto space-y-8">
        <Link href="/">
          <Button variant="ghost" className="mb-6 hover-lift text-muted-foreground">
            <ArrowLeft className="mr-2 h-4 w-4" />
            {t('backToHome')}
          </Button>
        </Link>
        <Card className="rounded-3xl p-8 shadow-lg border-border">
          <CardContent className="space-y-6 pt-0">
            <h1 className="font-heading font-bold text-3xl lg:text-4xl">
              {t('deliveryAndRefundPolicyTitle')}
            </h1>
            <p className="text-sm font-medium text-muted-foreground">
              {trDate}
            </p>
            <p className="text-sm text-muted-foreground">
              {t('deliveryAndRefundPolicyCompanyTitle')}
            </p>
            <p className="text-sm text-muted-foreground">
              {t('deliveryAndRefundPolicyBusinessAddress')}
            </p>
            <p className="text-sm text-muted-foreground">
              {t('deliveryAndRefundPolicyContact')}
            </p>
            <p className="text-sm font-medium text-muted-foreground">
              {t('deliveryAndRefundPolicyPhone')}
            </p>
            <Separator />
            {sections.map((section, index) => (
              <div key={index} className="space-y-4">
                <h2 className="font-heading font-semibold text-2xl lg:text-3xl">
                  {section.title}
                </h2>
                {section.body && (
                  <p className="text-muted-foreground leading-relaxed">
                    {section.body}
                  </p>
                )}
                {section.subsections && (
                  <div className="space-y-4">
                    {section.subsections.map((subsection, subIndex) => (
                      <div key={subIndex} className="space-y-2">
                        <h3 className="font-semibold text-lg">
                          {subsection.title}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                          {subsection.body}
                        </p>
                      </div>
                    ))}
                  </div>
                )}
                {section.listTitle && (
                  <h3 className="font-semibold text-lg">
                    {section.listTitle}
                  </h3>
                )}
                {Array.isArray(section.listItems) && (
                  <ul className="list-disc list-inside text-muted-foreground space-y-2">
                    {section.listItems.map((item, itemIndex) => (
                      <li key={itemIndex}>{item}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}