import { Card, CardContent } from '@/components/ui/card';
import { useLanguage } from '@/hooks/use-language';
import { Link } from 'wouter';
import { ArrowLeft } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import { translations } from '@/lib/translations';

export default function PrivacyPolicyPage() {
  const { t, language } = useLanguage();
  const selectedTranslations = translations[language];

  // Dinamik tarihi alırken, {date} yerine tarihi yerleştiriyoruz
  const effectiveDate = new Date().toLocaleDateString(language === 'tr' ? 'tr-TR' : 'en-US');
  const trDate = t('privacyPolicyEffectiveDate').replace('{date}', effectiveDate);

  const sections = [
    {
      title: t('privacySection1Title'),
      body: t('privacySection1Body'),
    },
    {
      title: t('privacySection2Title'),
      body: t('privacySection2Body'),
      subsections: [
        { title: t('privacySection2aTitle'), list: selectedTranslations.privacySection2aList },
        { title: t('privacySection2bTitle'), list: selectedTranslations.privacySection2bList },
        { title: t('privacySection2cTitle'), list: selectedTranslations.privacySection2cList },
        { title: t('privacySection2dTitle'), list: selectedTranslations.privacySection2dList },
      ],
    },
    {
      title: t('privacySection3Title'),
      body: t('privacySection3Body'),
      list: selectedTranslations.privacySection3List,
    },
    {
      title: t('privacySection4Title'),
      body: t('privacySection4Body'),
    },
    {
      title: t('privacySection5Title'),
      body: t('privacySection5Body'),
      list: selectedTranslations.privacySection5List,
      disclaimer: t('privacySection5Disclaimer'),
    },
    {
      title: t('privacySection6Title'),
      body: t('privacySection6Body'),
      list: selectedTranslations.privacySection6List,
    },
    {
      title: t('privacySection7Title'),
      body: t('privacySection7Body'),
    },
    {
      title: t('privacySection8Title'),
      body: t('privacySection8Body'),
      list: selectedTranslations.privacySection8List,
      disclaimer: t('privacySection8Disclaimer'),
    },
    {
      title: t('privacySection9Title'),
      body: t('privacySection9Body'),
    },
    {
      title: t('privacySection10Title'),
      body: t('privacySection10Body'),
    },
    {
      title: t('privacySection11Title'),
      body: t('privacySection11Body'),
      list: selectedTranslations.privacySection11List,
    },
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
              {t('privacyPolicyTitle')}
            </h1>
            <p className="text-sm font-medium text-muted-foreground">
              {trDate}
            </p>
            <p className="text-sm text-muted-foreground">
              {t('companyTitle')}
            </p>
            <p className="text-sm text-muted-foreground">
              {t('website')}
            </p>
            <p className="text-sm text-muted-foreground">
              {t('contactInfo')}
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
                {Array.isArray(section.subsections) && (
                  <div className="space-y-4 pl-4">
                    {section.subsections.map((subsection, subIndex) => (
                      <div key={subIndex} className="space-y-2">
                        <h3 className="font-semibold text-lg">
                          {subsection.title}
                        </h3>
                        {Array.isArray(subsection.list) && (
                          <ul className="list-disc list-inside text-muted-foreground">
                            {subsection.list.map((item, itemIndex) => (
                              <li key={itemIndex}>{item}</li>
                            ))}
                          </ul>
                        )}
                      </div>
                    ))}
                  </div>
                )}
                {Array.isArray(section.list) && (
                  <ul className="list-disc list-inside text-muted-foreground space-y-2">
                    {section.list.map((item, itemIndex) => (
                      <li key={itemIndex}>{item}</li>
                    ))}
                  </ul>
                )}
                {section.disclaimer && (
                  <p className="text-sm italic text-muted-foreground">
                    {section.disclaimer}
                  </p>
                )}
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}