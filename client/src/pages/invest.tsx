import { Button } from '@/components/ui/button';
import { useLanguage } from '@/hooks/use-language';
import { Check, ArrowRight, BarChart3, Target, TrendingUp } from 'lucide-react';
import { cn } from '@/lib/utils';
// Belirttiğin resimleri import ediyoruz
import investHeroImage from '../../../dist/public/assets/EraEnvision-AI-Chatbot.png';
import investBenefitsImage from '../../../dist/public/assets/EraEnvision-AI-Powered-Business-Advisor.png';

export default function InvestPage() {
  const { t } = useLanguage();

  const features = [
    {
      icon: Target,
      title: t('startupProfileAnalysisTitle'),
      description: t('startupProfileAnalysisDesc'),
    },
    {
      icon: TrendingUp,
      title: t('thesisMatchingTitle'),
      description: t('thesisMatchingDesc'),
    },
    {
      icon: BarChart3,
      title: t('riskAssessmentTitle'),
      description: t('riskAssessmentDesc'),
    },
  ];

  const benefits = [
    t('investBenefit1'),
    t('investBenefit2'),
    t('investBenefit3'),
    t('investBenefit4'),
    t('investBenefit5'),
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold mb-6 bg-green-50 text-green-600">
                <BarChart3 className="h-4 w-4 mr-2" />
                {t('forInvestors')}
              </div>

              <h1 className="font-heading font-bold text-5xl lg:text-7xl mb-8 text-gray-900 leading-tight">
                INVEST
              </h1>

              <p className="text-xl lg:text-2xl text-gray-600 mb-8 leading-relaxed">
                {t('investHeroSubtitle')}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-lg font-semibold">
                  {t('earlyAccess')} <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button variant="outline" size="lg" className="border-gray-300 text-gray-700 px-8 py-4 text-lg font-semibold">
                  {t('seeSampleReport')}
                </Button>
              </div>

              <div className="flex items-center gap-4 text-sm text-gray-500">
                <div className="flex items-center gap-1">
                  <Check className="h-4 w-4 text-green-500" />
                  {t('limitedEarlyAccess')}
                </div>
                <div className="flex items-center gap-1">
                  <Check className="h-4 w-4 text-green-500" />
                  {t('specialPricing')}
                </div>
              </div>
            </div>

            {/* Hero bölümüne resim eklendi */}
            <div className="relative">
              <div className="bg-gray-100 rounded-2xl h-full overflow-hidden">
                <img
                  src={investHeroImage}
                  alt="Invest dashboard preview"
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
              {t('investFeaturesTitle')}
            </h2>
            <p className="text-xl text-gray-600">{t('investFeaturesSubtitle')}</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl border border-gray-200">
                <div className="w-12 h-12 bg-green-50 text-green-600 rounded-xl flex items-center justify-center mb-6">
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
                {t('whatYouGainTitle')}
              </h2>

              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-lg font-semibold">
                  {t('joinEarlyAccess')} <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>

            {/* Benefits bölümüne resim eklendi */}
            <div className="relative">
              <div className="bg-gray-100 rounded-2xl h-full overflow-hidden">
                <img
                  src={investBenefitsImage}
                  alt="Investment analytics panel mockup"
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Performance Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-4xl lg:text-5xl mb-6 text-gray-900">
              {t('aiAnalysisPowerTitle')}
            </h2>
            <p className="text-xl text-gray-600">{t('aiAnalysisPowerSubtitle')}</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center bg-white p-8 rounded-2xl border border-gray-200">
              <div className="text-4xl font-bold text-green-600 mb-2">%40</div>
              <div className="text-gray-600">{t('fasterDecisionMaking')}</div>
            </div>
            <div className="text-center bg-white p-8 rounded-2xl border border-gray-200">
              <div className="text-4xl font-bold text-green-600 mb-2">%65</div>
              <div className="text-gray-600">{t('riskReduction')}</div>
            </div>
            <div className="text-center bg-white p-8 rounded-2xl border border-gray-200">
              <div className="text-4xl font-bold text-green-600 mb-2">%30</div>
              <div className="text-gray-600">{t('roiIncrease')}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Early Access Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white p-12 rounded-3xl">
            <h2 className="font-heading font-bold text-3xl lg:text-4xl mb-6">
              {t('limitedEarlyAccessCtaTitle')}
            </h2>
            <p className="text-xl mb-8 opacity-90">{t('limitedEarlyAccessCtaSubtitle')}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold">
                {t('joinEarlyAccess')} <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-green-600 px-8 py-4 text-lg font-semibold">
                {t('learnMore')}
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}