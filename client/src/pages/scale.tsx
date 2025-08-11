import { Button } from '@/components/ui/button';
import { useLanguage } from '@/hooks/use-language';
import { Check, ArrowRight, TrendingUp, BarChart3, Users, Zap } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function ScalePage() {
  const { t } = useLanguage();

  const features = [
    {
      icon: TrendingUp,
      title: 'Satış Funnel Optimizasyonu',
      description: 'Satış süreçlerinizi analiz ederek dönüşüm oranlarınızı artıracak optimizasyonlar öneririz.'
    },
    {
      icon: BarChart3,
      title: 'SEO ve Reklam Stratejileri',
      description: 'Dijital pazarlama stratejilerinizi AI ile optimize ederek müşteri kazanım maliyetinizi düşürürüz.'
    },
    {
      icon: Zap,
      title: 'Süreç Otomasyonu',
      description: 'İş süreçlerinizi otomatikleştirerek verimliliği artırıyor ve operasyonel maliyetleri azaltıyoruz.'
    }
  ];

  const benefits = [
    'Satış funnel optimizasyonu',
    'SEO ve reklam stratejileri',
    'Süreç otomasyonu ve entegrasyonu',
    'Müşteri deneyimi iyileştirme',
    'Takım performans analitiği',
    'Büyüme metrik takibi',
    'Operasyonel verimlilik artışı',
    'Maliyet optimizasyonu'
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
                Büyüyen şirketler için
              </div>
              
              <h1 className="font-heading font-bold text-5xl lg:text-7xl mb-8 text-gray-900 leading-tight">
                SCALE
              </h1>
              
              <p className="text-xl lg:text-2xl text-gray-600 mb-8 leading-relaxed">
                Operasyonel verimliliği artırın ve sürdürülebilir büyüme sağlayın.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-semibold">
                  Demo Talep Et <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button variant="outline" size="lg" className="border-gray-300 text-gray-700 px-8 py-4 text-lg font-semibold">
                  Audit Örneği Gör
                </Button>
              </div>

              <div className="flex items-center gap-4 text-sm text-gray-500">
                <div className="flex items-center gap-1">
                  <Check className="h-4 w-4 text-green-500" />
                  Ücretsiz analiz
                </div>
                <div className="flex items-center gap-1">
                  <Check className="h-4 w-4 text-green-500" />
                  30 gün para iadesi
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gray-100 rounded-2xl p-8 h-96 flex items-center justify-center">
                <div className="text-center">
                  <TrendingUp className="h-24 w-24 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-500">SCALE Dashboard Preview</p>
                </div>
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
              AI ile işinizi büyütün
            </h2>
            <p className="text-xl text-gray-600">
              Veriye dayalı kararlarla sürdürülebilir büyüme elde edin
            </p>
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
                Hangi alanlarda gelişim sağlayacaksınız?
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
                  Demo Talep Et <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 h-96 flex items-center justify-center">
                <div className="text-center">
                  <BarChart3 className="h-24 w-24 text-blue-600 mx-auto mb-4" />
                  <p className="text-gray-700 font-medium">Büyüme Analitik Panosu</p>
                </div>
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
              Sonuçlarla konuşuyoruz
            </h2>
            <p className="text-xl text-gray-600">
              Müşterilerimizin elde ettiği ortalama iyileştirmeler
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center bg-white p-8 rounded-2xl border border-gray-200">
              <div className="text-4xl font-bold text-blue-600 mb-2">%35</div>
              <div className="text-gray-600">Satış artışı</div>
            </div>
            <div className="text-center bg-white p-8 rounded-2xl border border-gray-200">
              <div className="text-4xl font-bold text-blue-600 mb-2">%50</div>
              <div className="text-gray-600">Operasyonel verimlilik</div>
            </div>
            <div className="text-center bg-white p-8 rounded-2xl border border-gray-200">
              <div className="text-4xl font-bold text-blue-600 mb-2">%25</div>
              <div className="text-gray-600">Maliyet azalması</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-heading font-bold text-4xl lg:text-5xl mb-6 text-gray-900">
            İşinizi bir sonraki seviyeye taşımaya hazır mısınız?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            AI destekli çözümlerimizle sürdürülebilir büyüme sağlayın.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-semibold">
              Demo Talep Et <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg" className="border-gray-300 text-gray-700 px-8 py-4 text-lg font-semibold">
              Uzmanla Konuş
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}