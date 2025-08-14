import { Button } from '@/components/ui/button';
import { useLanguage } from '@/hooks/use-language';
import { Check, ArrowRight, Target, TrendingUp, Users } from 'lucide-react';
import { cn } from '@/lib/utils';
// İhtiyacımız olan resimleri import ediyoruz
import launchHeroImage from '../../../dist/public/assets/EraEnvision-AI-Entrepreneur-AI-Main-Menu.png';
import launchBenefitsImage from '../../../dist/public/assets/EraEnvision-AI-Chatbot.png';

export default function LaunchPage() {
  const { t } = useLanguage();

  const features = [
    {
      icon: Target,
      title: t('aiIdeaAnalysisTitle'),
      description: t('aiIdeaAnalysisDesc'),
    },
    {
      icon: TrendingUp,
      title: t('marketResearchTitle'),
      description: t('marketResearchDesc'),
    },
    {
      icon: Users,
      title: t('mvpRoadmapTitle'),
      description: t('mvpRoadmapDesc'),
    },
  ];

  const benefits = [
    t('launchBenefit1'),
    t('launchBenefit2'),
    t('launchBenefit3'),
    t('launchBenefit4'),
    t('launchBenefit5'),
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold mb-6 bg-red-50 text-[#E1182E]">
                <Target className="h-4 w-4 mr-2" />
                {t('forEntrepreneurs')}
              </div>

              <h1 className="font-heading font-bold text-5xl lg:text-7xl mb-8 text-gray-900 leading-tight">
                LAUNCH
              </h1>

              <p className="text-xl lg:text-2xl text-gray-600 mb-8 leading-relaxed">
                {t('launchHeroSubtitle')}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <Button size="lg" className="bg-[#E1182E] hover:bg-[#C51628] text-white px-8 py-4 text-lg font-semibold">
                  {t('startFree')} <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button variant="outline" size="lg" className="border-gray-300 text-gray-700 px-8 py-4 text-lg font-semibold">
                  {t('sampleRoadmap')}
                </Button>
              </div>

              <div className="flex items-center gap-4 text-sm text-gray-500">
                <div className="flex items-center gap-1">
                  <Check className="h-4 w-4 text-green-500" />
                  {t('noCreditCardNeeded')}
                </div>
                <div className="flex items-center gap-1">
                  <Check className="h-4 w-4 text-green-500" />
                  {t('freeTrial7Days')}
                </div>
              </div>
            </div>

            {/* Hero bölümüne resim eklendi */}
            <div className="relative">
              <div className="bg-gray-100 rounded-2xl h-full overflow-hidden">
                <img
                  src={launchHeroImage}
                  alt="Launch dashboard preview"
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
              {t('launchFeaturesTitle')}
            </h2>
            <p className="text-xl text-gray-600">{t('launchFeaturesSubtitle')}</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl border border-gray-200">
                <div className="w-12 h-12 bg-red-50 text-[#E1182E] rounded-xl flex items-center justify-center mb-6">
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
                {t('whatYouGetTitle')}
              </h2>

              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-[#E1182E] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <Button size="lg" className="bg-[#E1182E] hover:bg-[#C51628] text-white px-8 py-4 text-lg font-semibold">
                  {t('startNow')} <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>

            {/* Benefits bölümüne resim eklendi */}
            <div className="relative">
              <div className="bg-gray-100 rounded-2xl h-full overflow-hidden">
                <img
                  src={launchBenefitsImage}
                  alt="Launch benefits dashboard preview"
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-heading font-bold text-4xl lg:text-5xl mb-6 text-gray-900">
            {t('launchCtaTitle')}
          </h2>
          <p className="text-xl text-gray-600 mb-8">{t('launchCtaSubtitle')}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-[#E1182E] hover:bg-[#C51628] text-white px-8 py-4 text-lg font-semibold">
              {t('startFree')} <ArrowRight className="ml-2 h-5 w-5" />
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