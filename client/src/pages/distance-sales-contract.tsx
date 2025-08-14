import { Card, CardContent } from '@/components/ui/card';
import { useLanguage } from '@/hooks/use-language';
import { Link } from 'wouter';
import { ArrowLeft } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import { translations } from '@/lib/translations';

export default function DistanceSalesContractPage() {
  const { t, language } = useLanguage();
  const selectedTranslations = translations[language];

  // Metinleri doğrudan çekme yaklaşımı
  const sections = [
    {
      title: t('contractSection1Title'),
      parties: [
        {
          role: t('contractSection1SellerRole'),
          list: selectedTranslations.contractSection1SellerList,
        },
        {
          role: t('contractSection1BuyerRole'),
          list: selectedTranslations.contractSection1BuyerList,
        },
      ],
    },
    {
      title: t('contractSection2Title'),
      body: t('contractSection2Body'),
    },
    {
      title: t('contractSection3Title'),
      body: t('contractSection3Body'),
      table: {
        headers: [
          t('contractTableServiceLaunch'),
          t('contractTableServiceLaunchDesc'),
          t('pricingTitle'), // Bu anahtar fiyatlandırma başlığını çeker.
        ],
        rows: [
          [t('contractTableServiceLaunch'), t('contractTableServiceLaunchDesc'), '[x.xx ₺]'],
          [t('contractTableServiceScale'), t('contractTableServiceScaleDesc'), '[x.xx ₺]'],
          [t('contractTableOtherConsulting'), t('contractTableOtherConsultingDesc'), '[x.xx ₺]'],
        ],
      },
    },
    {
      title: t('contractSection4Title'),
      body: t('contractSection4Body'),
    },
    {
      title: t('contractSection5Title'),
      body: t('contractSection5Body'),
    },
    {
      title: t('contractSection6Title'),
      body: t('contractSection6Body'),
    },
    {
      title: t('contractSection7Title'),
      body: t('contractSection7Body'),
    },
    {
      title: t('contractSection8Title'),
      body: t('contractSection8Body'),
    },
    {
      title: t('contractSection9Title'),
      body: t('contractSection9Body'),
    },
    {
      title: t('contractSection10Title'),
      body: t('contractSection10Body'),
      footer: t('contractSection10Footer'),
      sellerInfo: selectedTranslations.contractSection10SellerInfo,
      buyerInfo: t('contractSection10BuyerInfo'),
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
              {t('distanceSalesContractTitle')}
            </h1>
            <p className="text-sm font-medium text-muted-foreground">
              {t('distanceSalesContractSubTitle')}
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
                {section.parties && (
                  <div className="space-y-4">
                    {section.parties.map((party, partyIndex) => (
                      <div key={partyIndex} className="space-y-2">
                        <h3 className="font-semibold text-lg text-primary">{party.role}</h3>
                        {Array.isArray(party.list) && (
                          <ul className="list-disc list-inside text-muted-foreground">
                            {party.list.map((item, itemIndex) => (
                              <li key={itemIndex}>{item}</li>
                            ))}
                          </ul>
                        )}
                      </div>
                    ))}
                  </div>
                )}
                {section.table && (
                  <div className="overflow-x-auto">
                    <table className="min-w-full border-collapse">
                      <thead>
                        <tr className="bg-muted">
                          {section.table.headers.map((header, headerIndex) => (
                            <th key={headerIndex} className="p-2 border border-border text-left font-semibold text-sm text-foreground">
                              {header}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {section.table.rows.map((row, rowIndex) => (
                          <tr key={rowIndex} className="border-b border-border">
                            {row.map((cell, cellIndex) => (
                              <td key={cellIndex} className="p-2 text-sm text-muted-foreground">
                                {cell}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
                {section.footer && (
                  <div className="mt-8 space-y-2">
                    <p className="font-semibold text-foreground">{section.footer}</p>
                    {Array.isArray(section.sellerInfo) && (
                      <ul className="text-sm text-muted-foreground">
                        {section.sellerInfo.map((item, itemIndex) => (
                          <li key={itemIndex}>{item}</li>
                        ))}
                      </ul>
                    )}
                    <div className="pt-4 space-y-1">
                      <p className="font-semibold text-foreground">{t('contractSection1BuyerRole')}</p>
                      <p className="text-sm text-muted-foreground">{section.buyerInfo}</p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}