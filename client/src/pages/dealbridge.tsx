import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useLanguage } from '@/hooks/use-language';
import { 
  Link2, 
  Users, 
  TrendingUp, 
  Search, 
  Shield, 
  Target,
  Building2,
  HandHeart,
  ArrowRight,
  CheckCircle,
  Zap,
  Filter
} from 'lucide-react';
import { Link } from 'wouter';

export default function DealBridgePage() {
  const { t } = useLanguage();

  const features = [
    {
      icon: <Zap className="h-8 w-8 text-[#E1182E]" />,
      title: t('aiMatchingTitle'),
      description: t('aiMatchingDesc')
    },
    {
      icon: <Users className="h-8 w-8 text-[#E1182E]" />,
      title: t('profileSharingTitle'),
      description: t('profileSharingDesc')
    },
    {
      icon: <Target className="h-8 w-8 text-[#E1182E]" />,
      title: t('dealTrackingTitle'),
      description: t('dealTrackingDesc')
    },
    {
      icon: <Filter className="h-8 w-8 text-[#E1182E]" />,
      title: t('smartFilteringTitle'),
      description: t('smartFilteringDesc')
    }
  ];

  const successStories = [
    {
      title: t('storyTechStartupInvestorTitle'),
      description: t('storyTechStartupInvestorDesc'),
      result: t('storyTechStartupInvestorResult')
    },
    {
      title: t('storyEcommerceLogisticsTitle'),
      description: t('storyEcommerceLogisticsDesc'),
      result: t('storyEcommerceLogisticsResult')
    },
    {
      title: t('storySaaSDistributorTitle'),
      description: t('storySaaSDistributorDesc'),
      result: t('storySaaSDistributorResult')
    }
  ];

  return (
    <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="pt-24 pb-20 bg-gradient-to-br from-gray-50 to-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
            <div className="mb-8">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-[#E1182E]/10 rounded-2xl mb-6">
                <Link2 className="h-10 w-10 text-[#E1182E]" />
              </div>
            </div>
            
            <h1 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-6 text-gray-900 leading-tight">
              {t('dealBridgeHeroTitleStart')}
              <span className="bg-gradient-to-r from-[#E1182E] to-[#FF4757] bg-clip-text text-transparent">
                {t('dealBridgeHeroTitleEnd')}
              </span>
            </h1>
            
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 mb-12 leading-relaxed max-w-4xl mx-auto">
              {t('dealBridgeHeroSubtitle')}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
              <Button size="lg" className="bg-[#E1182E] hover:bg-[#C51628] text-white px-8 py-4 text-lg font-semibold">
                {t('exploreOpportunities')}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="border-gray-300 text-gray-700 px-8 py-4 text-lg font-semibold">
                {t('howItWorks')}
              </Button>
            </div>
          </div>
        </section>

        {/* Description Section */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
            <h2 className="font-heading font-bold text-2xl sm:text-3xl md:text-4xl mb-8 text-gray-900">
              {t('businessConnectionHubTitle')}
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed mb-12">
              {t('businessConnectionHubDesc')}
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="text-center">
                <div className="w-16 h-16 bg-red-50 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Target className="h-8 w-8 text-[#E1182E]" />
                </div>
                <h3 className="font-semibold text-lg mb-2">{t('entrepreneurs')}</h3>
                <p className="text-gray-600">{t('findInvestorsGetMentorship')}</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Building2 className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="font-semibold text-lg mb-2">{t('businessOwners')}</h3>
                <p className="text-gray-600">{t('b2bPartnershipsSupplierNetwork')}</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-green-50 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="font-semibold text-lg mb-2">{t('investors')}</h3>
                <p className="text-gray-600">{t('discoverPotentialStartups')}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-16">
              <h2 className="font-heading font-bold text-2xl sm:text-3xl md:text-4xl mb-6 text-gray-900">
                {t('platformFeaturesTitle')}
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
                {t('platformFeaturesSubtitle')}
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <Card key={index} className="border-0 shadow-sm hover:shadow-lg transition-all duration-300 bg-white">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-red-50 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      {feature.icon}
                    </div>
                    <h3 className="font-semibold text-lg mb-3 text-gray-900">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Success Stories */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-16">
              <h2 className="font-heading font-bold text-2xl sm:text-3xl md:text-4xl mb-6 text-gray-900">
                {t('successStoriesTitle')}
              </h2>
              <p className="text-lg sm:text-xl text-gray-600">
                {t('successStoriesSubtitle')}
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {successStories.map((story, index) => (
                <Card key={index} className="border-0 shadow-sm hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <Badge className="mb-4 bg-[#E1182E] text-white">
                      {story.result}
                    </Badge>
                    <h3 className="font-semibold text-lg mb-3 text-gray-900">
                      {story.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {story.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Trust & Security */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
            <div className="flex items-center justify-center mb-6">
              <Shield className="h-12 w-12 text-[#E1182E]" />
            </div>
            <h2 className="font-heading font-bold text-2xl mb-4 text-gray-900">
              {t('trustAndSecurityTitle')}
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              {t('trustAndSecurityDesc')}
            </p>
            
            <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-600" />
                <span>{t('kvkkCompliant')}</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-600" />
                <span>{t('gdprCertified')}</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-600" />
                <span>{t('ssl256Encryption')}</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-600" />
                <span>{t('securityMonitoring247')}</span>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
            <h2 className="font-heading font-bold text-2xl sm:text-3xl md:text-4xl mb-6 text-gray-900">
              {t('joinDealBridgeCtaTitle')}
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 mb-8">
              {t('joinDealBridgeCtaSubtitle')}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="bg-[#E1182E] hover:bg-[#C51628] text-white px-8 py-4 text-lg font-semibold">
                {t('startNow')}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Link href="/contact">
                <Button variant="outline" size="lg" className="border-gray-300 text-gray-700 px-8 py-4 text-lg font-semibold">
                  {t('learnMore')}
                </Button>
              </Link>
            </div>
          </div>
        </section>
    </div>
  );
}