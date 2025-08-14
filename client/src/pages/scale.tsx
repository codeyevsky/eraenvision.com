import { Button } from '@/components/ui/button';
import { useLanguage } from '@/hooks/use-language';
import { Check, ArrowRight, TrendingUp, BarChart3, Zap } from 'lucide-react';
import { cn } from '@/lib/utils';
// İhtiyacımız olan resimleri import ediyoruz
import scaleHeroImage from '../../../dist/public/assets/EraEnvision-AI-Chatbot.png';
import scaleBenefitsImage from '../../../dist/public/assets/EraEnvision-SME-Main-Menu.png';

export default function ScalePage() {
  const { t } = useLanguage();

  const features = [
    {
      icon: TrendingUp,
      title: t('salesFunnelOptimizationTitle'),
      description: t('salesFunnelOptimizationDesc'),
    },
    {
      icon: BarChart3,
      title: t('seoAdsStrategiesTitle'),
      description: t('seoAdsStrategiesDesc'),
    },
    {
      icon: Zap,
      title: t('processAutomationTitle'),
      description: t('processAutomationDesc'),
    },
  ];

  const benefits = [
    t('scaleBenefit1'),
    t('scaleBenefit2'),
    t('scaleBenefit3'),
    t('scaleBenefit4'),
    t('scaleBenefit5'),
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold mb-6 bg-blue-50 text-blue-600">
                <TrendingUp className="h-4 w-4 mr-2" />
                {t('forBusinesses')}
              </div>

              <h1 className="font-heading font-bold text-5xl lg:text-7xl mb-8 text-gray-900 leading-tight">
                SCALE
              </h1>

              <p className="text-xl lg:text-2xl text-gray-600 mb-8 leading-relaxed">
                {t('scaleHeroSubtitle')}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-semibold">
                  {t('requestDemo')} <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button variant="outline" size="lg" className="border-gray-300 text-gray-700 px-8 py-4 text-lg font-semibold">
                  {t('seeAuditExample')}
                </Button>
              </div>

              <div className="flex items-center gap-4 text-sm text-gray-500">
                <div className="flex items-center gap-1">
                  <Check className="h-4 w-4 text-green-500" />
                  {t('freeAnalysis')}
                </div>
                <div className="flex items-center gap-1">
                  <Check className="h-4 w-4 text-green-500" />
                  {t('moneyBack30Days')}
                </div>
              </div>
            </div>

            {/* Hero bölümüne resim eklendi */}
            <div className="relative">
              <div className="bg-gray-100 rounded-2xl h-full overflow-hidden">
                <img
                  src={scaleHeroImage}
                  alt="Scale dashboard preview"
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-4xl lg:text-5xl mb-6 text-gray-900">
              {t('scaleFeaturesTitle')}
            </h2>
            <p className="text-xl text-gray-600">{t('scaleFeaturesSubtitle')}</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl border border-gray-200">
                <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-6">
                  <feature.icon className="h-6 w-6" />
                </div>
                <h3 className="font-semibold text-xl mb-4 text-gray-900">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-heading font-bold text-4xl lg:text-5xl mb-8 text-gray-900">
                {t('whatYouDevelopTitle')}
              </h2>

              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-semibold">
                  {t('requestDemo')} <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>

            {/* Benefits bölümüne resim eklendi */}
            <div className="relative">
              <div className="bg-gray-100 rounded-2xl h-full overflow-hidden">
                <img
                  src={scaleBenefitsImage}
                  alt="Scale benefits dashboard preview"
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ROI Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-4xl lg:text-5xl mb-6 text-gray-900">
              {t('speakWithResultsTitle')}
            </h2>
            <p className="text-xl text-gray-600">{t('speakWithResultsSubtitle')}</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center bg-white p-8 rounded-2xl border border-gray-200">
              <div className="text-4xl font-bold text-blue-600 mb-2">%35</div>
              <div className="text-gray-600">{t('salesIncrease')}</div>
            </div>
            <div className="text-center bg-white p-8 rounded-2xl border border-gray-200">
              <div className="text-4xl font-bold text-blue-600 mb-2">%50</div>
              <div className="text-gray-600">{t('operationalEfficiency')}</div>
            </div>
            <div className="text-center bg-white p-8 rounded-2xl border border-gray-200">
              <div className="text-4xl font-bold text-blue-600 mb-2">%25</div>
              <div className="text-gray-600">{t('costReduction')}</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-heading font-bold text-4xl lg:text-5xl mb-6 text-gray-900">
            {t('scaleCtaTitle')}
          </h2>
          <p className="text-xl text-gray-600 mb-8">{t('scaleCtaSubtitle')}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-semibold">
              {t('requestDemo')} <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg" className="border-gray-300 text-gray-700 px-8 py-4 text-lg font-semibold">
              {t('talkToExpert')}
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}