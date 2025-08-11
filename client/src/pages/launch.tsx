import { Button } from '@/components/ui/button';
import { useLanguage } from '@/hooks/use-language';
import { Check, ArrowRight, Target, Zap, Users, TrendingUp } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function LaunchPage() {
  const { t } = useLanguage();

  const features = [
    {
      icon: Target,
      title: 'AI ile İş Fikri Analizi',
      description: 'Yapay zeka algoritmalarımız ile iş fikrinizi analiz ederek potansiyel ve riskleri değerlendiriyoruz.'
    },
    {
      icon: TrendingUp,
      title: 'Pazar Araştırması',
      description: 'Hedef pazarınızı analiz ediyor, rakip analizleri yapıyor ve fırsatları belirliyoruz.'
    },
    {
      icon: Users,
      title: 'MVP Yol Haritası',
      description: 'Minimum viable product stratejinizi oluşturarak hızlı ve etkili lansmanınızı planlıyoruz.'
    }
  ];

  const benefits = [
    'AI ile iş fikri analizi ve geliştirme',
    'Pazar araştırması ve rakip analizi',
    'MVP yol haritası oluşturma',
    'Finansal projeksiyon ve planlama',
    'Yatırımcı pitch deck hazırlama',
    'İlk müşteri bulma stratejileri',
    'Risk değerlendirme ve mitigation',
    'Go-to-market stratejisi'
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
                Girişimciler için
              </div>
              
              <h1 className="font-heading font-bold text-5xl lg:text-7xl mb-8 text-gray-900 leading-tight">
                LAUNCH
              </h1>
              
              <p className="text-xl lg:text-2xl text-gray-600 mb-8 leading-relaxed">
                AI destekli iş planlama ve strateji geliştirme çözümleri ile fikrini gerçeğe dönüştür.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <Button size="lg" className="bg-[#E1182E] hover:bg-[#C51628] text-white px-8 py-4 text-lg font-semibold">
                  Ücretsiz Başla <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button variant="outline" size="lg" className="border-gray-300 text-gray-700 px-8 py-4 text-lg font-semibold">
                  Örnek Yol Haritası Gör
                </Button>
              </div>

              <div className="flex items-center gap-4 text-sm text-gray-500">
                <div className="flex items-center gap-1">
                  <Check className="h-4 w-4 text-green-500" />
                  Kredi kartı gerekmez
                </div>
                <div className="flex items-center gap-1">
                  <Check className="h-4 w-4 text-green-500" />
                  7 gün ücretsiz deneme
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gray-100 rounded-2xl p-8 h-96 flex items-center justify-center">
                <div className="text-center">
                  <Target className="h-24 w-24 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-500">LAUNCH Dashboard Preview</p>
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
              AI destekli girişimcilik yolculuğunuz
            </h2>
            <p className="text-xl text-gray-600">
              Fikirden başarılı işe giden yolda size rehberlik ediyoruz
            </p>
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
                Neler elde edeceksiniz?
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
                  Hemen Başlayın <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl p-8 h-96 flex items-center justify-center">
                <div className="text-center">
                  <Zap className="h-24 w-24 text-[#E1182E] mx-auto mb-4" />
                  <p className="text-gray-700 font-medium">AI Güçlü Analitik Araçları</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-heading font-bold text-4xl lg:text-5xl mb-6 text-gray-900">
            Girişimcilik yolculuğunuza başlamaya hazır mısınız?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            AI destekli çözümlerimizle iş fikrinizi başarılı bir şirkete dönüştürün.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-[#E1182E] hover:bg-[#C51628] text-white px-8 py-4 text-lg font-semibold">
              Ücretsiz Başla <ArrowRight className="ml-2 h-5 w-5" />
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