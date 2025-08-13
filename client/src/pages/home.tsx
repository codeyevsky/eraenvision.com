import { Button } from '@/components/ui/button';
import { useLanguage } from '@/hooks/use-language';
import { BarChart, TrendingUp, Target, ArrowRight, CheckCircle, Link2 } from 'lucide-react';
import { PageTransition, FadeIn, SlideIn, StaggeredFadeIn } from '@/components/ui/page-transition';
import MindMapWidget from '@/components/ui/mindmap-widget';
import { Link } from 'wouter';

import { AnimatedText } from '@/components/ui/animated-text';

import trustedCompanies1 from "../../../dist/public/assets/trustedCompanies1.png";
import trustedCompanies2 from "../../../dist/public/assets/trustedCompanies2.png";
import trustedCompanies3 from "../../../dist/public/assets/trustedCompanies3.png";
import trustedCompanies4 from "../../../dist/public/assets/trustedCompanies4.png";
import trustedCompanies5 from "../../../dist/public/assets/trustedCompanies5.png";
import trustedCompanies6 from "../../../dist/public/assets/trustedCompanies6.png";
import trustedCompanies7 from "../../../dist/public/assets/trustedCompanies7.png";
import trustedCompanies8 from "../../../dist/public/assets/trustedCompanies8.png";
import trustedCompanies9 from "../../../dist/public/assets/trustedCompanies9.png";
import trustedCompanies10 from "../../../dist/public/assets/trustedCompanies10.png";

export default function HomePage() {
  const { t } = useLanguage();

  const trustedCompanies = [
    trustedCompanies1,
    trustedCompanies2,
    trustedCompanies3,
    trustedCompanies4,
    trustedCompanies5,
    trustedCompanies6,
    trustedCompanies7,
    trustedCompanies8,
    trustedCompanies9,
    trustedCompanies10,
  ];

  return (
    <PageTransition>
      <div className="min-h-screen bg-white">
        <section className="pt-20 pb-16 bg-white relative overflow-hidden group">
          <div
            className="absolute inset-0 bg-hero-pattern bg-[length:400%_400%] opacity-50 animate-gradient-flow group-hover:animate-none group-hover:bg-[length:200%_200%] transition-all duration-1000"
          ></div>
          <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center relative z-10">
            <FadeIn delay={100}>
              <h1 className="font-heading font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-8 text-gray-900 leading-tight">
                <span className="whitespace-nowrap">
                  AI ile iş büyütün,{' '}
                  <span className="bg-gradient-to-r from-[#E1182E] to-[#FF4757] bg-clip-text text-transparent">
                    <AnimatedText />
                  </span>
                </span>
              </h1>
            </FadeIn>
            <FadeIn delay={200}>
              <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 mb-12 leading-relaxed max-w-4xl mx-auto px-4 sm:px-0">
                EraEnvision ile işinizi AI destekli çözümlerle büyütün. Girişimciler, büyüyen şirketler ve yatırımcılar için özel yapay zeka danışmanlığı.
              </p>
            </FadeIn>
            <FadeIn delay={300}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
                <Button size="lg" className="bg-[#E1182E] hover:bg-[#C51628] text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold hover-lift w-full sm:w-auto">
                  Ücretsiz Başlayın
                </Button>
                <Button variant="outline" size="lg" className="border-gray-300 text-gray-700 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold hover-lift w-full sm:w-auto">
                  Demo İzleyin
                </Button>
              </div>
            </FadeIn>

            {/* Trust Indicators */}
            <FadeIn delay={400}>
              <p className="text-sm text-gray-500 mb-8">20+ şirket tarafından güveniliyor</p>
              <div className="relative w-full overflow-hidden before:absolute before:left-0 before:top-0 before:h-full before:w-[200px] before:bg-gradient-to-r before:from-white before:z-10 after:absolute after:right-0 after:top-0 after:h-full after:w-[200px] after:bg-gradient-to-l after:from-white after:z-10">
                <div className="flex w-fit items-center animate-marquee">
                  {trustedCompanies.map((imgSrc, index) => (
                    <img
                      key={index}
                      src={imgSrc}
                      alt={`Trusted Company ${index + 1}`}
                      className="mx-8 h-10 sm:h-12 w-auto object-contain flex-shrink-0 grayscale transition-all duration-300 hover:grayscale-0 hover:scale-125"
                    />
                  ))}
                  {trustedCompanies.map((imgSrc, index) => (
                    <img
                      key={`duplicate-${index}`}
                      src={imgSrc}
                      alt={`Trusted Company ${index + 1}`}
                      className="mx-8 h-10 sm:h-12 w-auto object-contain flex-shrink-0 grayscale transition-all duration-300 hover:grayscale-0 hover:scale-125"
                    />
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Key Features - Simple Cards */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-16">
              <FadeIn>
                <h2 className="font-heading font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-6 text-gray-900">
                  İşinizi büyüten AI çözümleri
                </h2>
                <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4 sm:px-0">
                  Her büyüklükteki işletme için özel tasarlanmış yapay zeka araçları
                </p>
              </FadeIn>
            </div>

            <StaggeredFadeIn className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white p-8 rounded-2xl border border-gray-200 hover:shadow-lg transition-all duration-300 hover-lift">
                <div className="w-12 h-12 bg-[#E1182E]/10 text-[#E1182E] rounded-xl flex items-center justify-center mb-6">
                  <Target className="h-6 w-6" />
                </div>
                <h3 className="font-semibold text-xl mb-4 text-gray-900">LAUNCH</h3>
                <p className="text-gray-600 mb-6">
                  Girişimciler için AI destekli iş planlama ve strateji geliştirme
                </p>
                <Link href="/launch">
                  <Button variant="outline" className="w-full">
                    Keşfet <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>

              <div className="bg-white p-8 rounded-2xl border border-gray-200 hover:shadow-lg transition-all duration-300 hover-lift">
                <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-6">
                  <TrendingUp className="h-6 w-6" />
                </div>
                <h3 className="font-semibold text-xl mb-4 text-gray-900">SCALE</h3>
                <p className="text-gray-600 mb-6">
                  Büyüyen ve büyümekte olan şirketler için AI ile operasyonel optimizasyon
                </p>
                <Link href="/scale">
                  <Button variant="outline" className="w-full">
                    Keşfet <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>

              <div className="bg-white p-8 rounded-2xl border border-gray-200 hover:shadow-lg transition-all duration-300 hover-lift">
                <div className="w-12 h-12 bg-green-50 text-green-600 rounded-xl flex items-center justify-center mb-6">
                  <BarChart className="h-6 w-6" />
                </div>
                <h3 className="font-semibold text-xl mb-4 text-gray-900">INVEST</h3>
                <p className="text-gray-600 mb-6">
                  Yatırımcılar için AI destekli pazar analizi ve değerlendirme
                </p>
                <Link href="/invest">
                  <Button variant="outline" className="w-full">
                    Keşfet <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>

              <div className="bg-white p-8 rounded-2xl border border-gray-200 hover:shadow-lg transition-all duration-300 hover-lift">
                <div className="w-12 h-12 bg-purple-50 text-purple-600 rounded-xl flex items-center justify-center mb-6">
                  <Link2 className="h-6 w-6" />
                </div>
                <h3 className="font-semibold text-xl mb-4 text-gray-900">DealBridge</h3>
                <p className="text-gray-600 mb-6">
                  İş birliği, Yatırım, Networking, B2B ve dahası için fırsatlarının merkezi
                </p>
                <Link href="/dealbridge">
                  <Button variant="outline" className="w-full">
                    Keşfet <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </StaggeredFadeIn>
          </div>
        </section>

        {/* Mind Map Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-16">
              <FadeIn>
                <h2 className="font-heading font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-6 text-gray-900">
                  EraEnvision Ekosistemi
                </h2>
                <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4 sm:px-0">
                  Tüm segmentlerimiz DealBridge'de birleşerek güçlü bir iş birliği ekosistemi oluşturur
                </p>
              </FadeIn>
            </div>

            <FadeIn delay={200}>
              <MindMapWidget />
            </FadeIn>
          </div>
        </section>

        {/* Features Showcase */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
              <SlideIn direction="left">
                <h2 className="font-heading font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-6 text-gray-900">
                  Verileriniz, nihayet sizin için çalışıyor
                </h2>
                <p className="text-lg sm:text-xl text-gray-600 mb-8">
                  Dağınık verileri birleştirin, öngörüler elde edin ve ekibinizi aynı hedef etrafında toplayın.
                </p>
                <StaggeredFadeIn className="space-y-6">
                  <div className="flex items-start gap-4">
                    <CheckCircle className="h-6 w-6 text-[#E1182E] flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-lg text-gray-900 mb-2">Gerçek zamanlı veri senkronizasyonu</h3>
                      <p className="text-gray-600">Elektronik tablolardan, CRM'lerden ve ERP'lerden verileri içe aktarın.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <CheckCircle className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-lg text-gray-900 mb-2">Trendleri görselleştirin ve takip edin</h3>
                      <p className="text-gray-600">Özelleştirilebilir grafikler ve gelişmiş hesaplamalarla verilerinizi derinlemesine inceleyin.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-lg text-gray-900 mb-2">Farklı ekipler için kişiselleştirilmiş görünümler</h3>
                      <p className="text-gray-600">Kimin neyi görüntüleyebileceğini, düzenleyebileceğini ve yönetebileceğini kontrol edin.</p>
                    </div>
                  </div>
                </StaggeredFadeIn>
              </SlideIn>
              <SlideIn direction="right">
                <div className="bg-gray-100 rounded-2xl p-8 h-96 flex items-center justify-center">
                  <div className="text-center">
                    <BarChart className="h-24 w-24 text-gray-400 mx-auto mb-4" />
                    <p className="text-gray-500">Dashboard Önizlemesi</p>
                  </div>
                </div>
              </SlideIn>
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-16">
              <FadeIn>
                <h2 className="font-heading font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-6 text-gray-900">
                  İşinizin her yanını hızlandırın
                </h2>
                <p className="text-lg sm:text-xl text-gray-600 px-4 sm:px-0">
                  AI destekli uygulamalar oluşturun - takım, süreç veya karmaşıklık ne olursa olsun.
                </p>
              </FadeIn>
            </div>

            <StaggeredFadeIn className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { title: "Portallar", desc: "İhtiyacınız olan her şey tek yerde. Müşteriler, çalışanlar veya yatırımcılar için merkezi hub görevi gören özel portallar oluşturun." },
                { title: "Dashboardlar", desc: "İş verilerinize görünürlük kazandırın. Paydaşları şirketinizin temel metriklerini görselleştiren sezgisel dashboard ile uyumlu tutun." },
                { title: "CRM", desc: "CRM'iniz, karmaşadan arındırılmış. Gerçekte nasıl satış yaptığınıza göre oluşturulmuş uygulamayla potansiyel müşterileri takip edin, ardışık düzenleri yönetin ve anlaşmaları kapatın." },
                { title: "Envanter", desc: "Envanter, aydınlatılmış. Neyin içeride, neyin az ve bir sonrakinin ne olduğunu bilin - her SKU'yu takip eden ve rafları otomatik olarak stoklu tutan sistemle." },
                { title: "Saha Satışı", desc: "Hareket halindeki ekipler için yapılmış. Temsilcilerinize sahada toplantıları yönetmek, anlaşmaları takip etmek ve etkinlikleri kaydetmek için güçlü mobil uygulama sağlayın." },
                { title: "Özel Çözümler", desc: "İhtiyaçlarınıza özel tasarlanmış AI çözümleri. Sektörünüze ve iş modelinize özel yapay zeka araçları geliştiriyoruz." }
              ].map((item, index) => (
                <div key={index} className="bg-white p-6 rounded-2xl border border-gray-200 hover:shadow-lg transition-all duration-300 hover-lift">
                  <h3 className="font-semibold text-xl mb-4 text-gray-900">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                  <Link href={`/${item.title.toLowerCase().replace(/\s/g, '-')}`}>
                    <Button variant="outline" className="w-full">
                      Keşfet <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              ))}
            </StaggeredFadeIn>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
            <FadeIn>
              <h2 className="font-heading font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-6 text-gray-900">
                Bugün başlayın, yarın büyüyün
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 mb-8 px-4 sm:px-0">
                İşinizi bir sonraki seviyeye taşımak için gereken tüm AI araçları burada.
              </p>
            </FadeIn>
            <FadeIn delay={200}>
              <Link href="/pricing">
                <Button size="lg" className="bg-[#E1182E] hover:bg-[#C51628] text-white px-8 py-4 text-lg font-semibold hover-lift">
                  Hemen Başlayın <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </FadeIn>
          </div>
        </section>
      </div>
    </PageTransition>
  );
}