import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/hooks/use-language';
import { Check, ArrowRight, TrendingUp, Target, BarChart3 } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Link } from 'wouter';

export default function ProductsPage() {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState('launch');

  const products = [
    {
      id: 'launch',
      name: 'LAUNCH',
      subtitle: t('forEntrepreneurs'),
      icon: Target,
      color: 'bg-[#E1182E]',
      lightColor: 'bg-red-50',
      textColor: 'text-[#E1182E]',
      description: t('productsLaunchDesc'),
      features: [
        t('productsLaunchFeature1'),
        t('productsLaunchFeature2'),
        t('productsLaunchFeature3'),
        t('productsLaunchFeature4'),
        t('productsLaunchFeature5'),
        t('productsLaunchFeature6'),
      ],
      cta: t('seeDetails'),
      link: '/launch',
    },
    {
      id: 'scale',
      name: 'SCALE',
      subtitle: t('forBusinesses'),
      icon: TrendingUp,
      color: 'bg-blue-600',
      lightColor: 'bg-blue-50',
      textColor: 'text-blue-600',
      description: t('productsScaleDesc'),
      features: [
        t('productsScaleFeature1'),
        t('productsScaleFeature2'),
        t('productsScaleFeature3'),
        t('productsScaleFeature4'),
        t('productsScaleFeature5'),
      ],
      cta: t('seeDetails'),
      link: '/scale',
    },
    {
      id: 'invest',
      name: 'INVEST',
      subtitle: t('forInvestors'),
      icon: BarChart3,
      color: 'bg-green-600',
      lightColor: 'bg-green-50',
      textColor: 'text-green-600',
      description: t('productsInvestDesc'),
      features: [
        t('productsInvestFeature1'),
        t('productsInvestFeature2'),
        t('productsInvestFeature3'),
        t('productsInvestFeature4'),
        t('productsInvestFeature5'),
      ],
      cta: t('seeDetails'),
      link: '/invest',
    },
  ];

  const activeProduct = products.find((p) => p.id === activeTab) || products[0];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="font-heading font-bold text-5xl lg:text-7xl mb-8 text-gray-900 leading-tight">
            {t('productsHeroTitleStart')}{' '}
            <span className="bg-gradient-to-r from-[#E1182E] to-[#FF4757] bg-clip-text text-transparent">
              {t('productsHeroTitleEnd')}
            </span>
          </h1>
          <p className="text-xl lg:text-2xl text-gray-600 mb-16 leading-relaxed max-w-4xl mx-auto">
            {t('productsHeroSubtitle')}
          </p>
        </div>
      </section>

      {/* Product Navigation Tabs */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex justify-center">
            <div className="bg-white p-1 rounded-2xl border border-gray-200 shadow-sm">
              <div className="flex">
                {products.map((product) => (
                  <button
                    key={product.id}
                    onClick={() => setActiveTab(product.id)}
                    className={cn(
                      'relative px-6 py-3 rounded-xl transition-all duration-300 font-semibold text-sm',
                      activeTab === product.id
                        ? `${product.color} text-white shadow-md`
                        : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50',
                    )}
                  >
                    <div className="flex items-center gap-2">
                      <product.icon className="h-4 w-4" />
                      {product.name}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Detail Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div
                className={cn(
                  'inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold mb-6',
                  activeProduct.lightColor,
                  activeProduct.textColor,
                )}
              >
                <activeProduct.icon className="h-4 w-4 mr-2" />
                {activeProduct.subtitle}
              </div>

              <h2 className="font-heading font-bold text-4xl lg:text-5xl mb-6 text-gray-900">
                {activeProduct.name}
              </h2>

              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                {activeProduct.description}
              </p>

              <div className="space-y-4 mb-8">
                {activeProduct.features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <Check className={cn('h-5 w-5 flex-shrink-0 mt-0.5', activeProduct.textColor)} />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href={activeProduct.link}>
                  <Button
                    size="lg"
                    className={cn(
                      'font-semibold text-white',
                      activeProduct.color,
                      `hover:${activeProduct.color}`,
                    )}
                  >
                    {activeProduct.cta} <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Button variant="outline" size="lg" className="font-semibold border-gray-300">
                  {t('learnMore')}
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gray-100 rounded-2xl p-8 h-96 flex items-center justify-center">
                <div className="text-center">
                  <activeProduct.icon className="h-24 w-24 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-500">{t('dashboardPreview')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* All Products Overview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-4xl lg:text-5xl mb-6 text-gray-900">
              {t('whichSolutionTitle')}
            </h2>
            <p className="text-xl text-gray-600">{t('whichSolutionSubtitle')}</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {products.map((product) => (
              <div
                key={product.id}
                className={cn(
                  'bg-white p-8 rounded-2xl border-2 transition-all cursor-pointer hover:shadow-lg',
                  activeTab === product.id ? 'border-current shadow-lg' : 'border-gray-200',
                  activeTab === product.id && product.textColor,
                )}
                onClick={() => setActiveTab(product.id)}
              >
                <div className={cn('w-12 h-12 rounded-xl flex items-center justify-center mb-6', product.lightColor, product.textColor)}>
                  <product.icon className="h-6 w-6" />
                </div>

                <h3 className="font-semibold text-xl mb-2 text-gray-900">{product.name}</h3>
                <p className={cn('text-sm font-medium mb-4', product.textColor)}>{product.subtitle}</p>
                <p className="text-gray-600 mb-6 text-sm leading-relaxed">{product.description}</p>

                <div className="space-y-3 mb-6">
                  {product.features.slice(0, 3).map((feature, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <Check className={cn('h-4 w-4 flex-shrink-0 mt-0.5', product.textColor)} />
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                <Link href={product.link}>
                  <Button
                    className={cn('w-full font-semibold text-white', product.color, `hover:${product.color}`)}
                  >
                    {product.cta}
                  </Button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-heading font-bold text-4xl lg:text-5xl mb-6 text-gray-900">
            {t('productsCtaTitle')}
          </h2>
          <p className="text-xl text-gray-600 mb-8">{t('productsCtaSubtitle')}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-[#E1182E] hover:bg-[#C51628] text-white px-8 py-4 text-lg font-semibold"
            >
              {t('getFreeConsultation')} <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg" className="border-gray-300 text-gray-700 px-8 py-4 text-lg font-semibold">
              {t('watchLiveDemo')}
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}