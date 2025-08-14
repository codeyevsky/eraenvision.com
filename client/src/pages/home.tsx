import { Button } from '@/components/ui/button';
import { useLanguage } from '@/hooks/use-language';
import { BarChart, TrendingUp, Target, ArrowRight, CheckCircle, Link2 } from 'lucide-react';
import { PageTransition, FadeIn, SlideIn, StaggeredFadeIn } from '@/components/ui/page-transition';
import MindMapWidget from '@/components/ui/mindmap-widget';
import { Link } from 'wouter';
import { AnimatedText } from '@/components/ui/animated-text';

import bdbAkademi from "../../../dist/public/assets/bdb-akademi-Ckb24dQw.png";
import bilgiyiTicaretlestirmeMerkezi from "../../../dist/public/assets/bilgiyi-ticaretlestirme-merkezi-CEHe0ljd.png";
import clario from "../../../dist/public/assets/cetele-tr.png";
import demirlerKuyumculuk from "../../../dist/public/assets/demirler-kuyumculuk-ADmwm2gR.png";
import fcsTekno from "../../../dist/public/assets/fcs-tekno-BungFEUR.png";
import igneDolusuTasarim from "../../../dist/public/assets/igne-dolusu-tasarim-DQzdEby8.png";
import touristiy from "../../../dist/public/assets/touristiy-ChVkMFI.png";
import zumrutGumus from "../../../dist/public/assets/zumrut-gumus-DsgtCUhd.png";
import eraEnvisionPreview from '../../../dist/public/assets/EraEnvision-AI-Powered-Business-Advisor.png';
import { FAQSection } from '@/components/sections/faq';

export default function HomePage() {
  const { t } = useLanguage();

  const trustedCompanies = [
    bdbAkademi,
    bilgiyiTicaretlestirmeMerkezi,
    clario,
    demirlerKuyumculuk,
    fcsTekno, 
    igneDolusuTasarim,
    touristiy,
    zumrutGumus
  ];

  return (
    <PageTransition>
      <div className="min-h-screen bg-white">
        <section className="pt-20 pb-16 bg-white relative overflow-hidden group">
          <div className="absolute inset-0 z-0">
            {/* Mevcut hero deseni, daha az opaklıkla */}
            <div
              className="absolute inset-0 bg-hero-pattern bg-[length:400%_400%] opacity-30 animate-gradient-flow group-hover:animate-none group-hover:bg-[length:200%_200%] transition-all duration-1000"
            ></div>
            {/* Dinamik ve etkileşimli geometrik şekiller */}
          </div>
          
          <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center relative z-10">
            <FadeIn delay={100}>
              <h1 className="font-heading font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-8 text-gray-900 leading-tight flex flex-col items-center">
                <span className="mb-2">
                  {t("heroTitle")}
                </span>
                <span className="block bg-gradient-to-r from-[#E1182E] to-[#FF4757] bg-clip-text text-transparent">
                  <AnimatedText />
                </span>
              </h1>
            </FadeIn>
            <FadeIn delay={200}>
              <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 mb-12 leading-relaxed max-w-4xl mx-auto px-4 sm:px-0">
                {t("heroSubtitle")}
              </p>
            </FadeIn>
            <FadeIn delay={300}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
                <Button size="lg" className="bg-[#E1182E] hover:bg-[#C51628] text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold hover-lift w-full sm:w-auto">
                  {t("startFree")}
                </Button>
                <Button variant="outline" size="lg" className="border-gray-300 text-gray-700 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold hover-lift w-full sm:w-auto">
                  {t("watchDemo")}
                </Button>
              </div>
            </FadeIn>

            {/* Trust Indicators */}
            <FadeIn delay={400}>
              <p className="text-sm text-gray-500 mb-8">20+ {t("trustedCompanies")}</p>
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
                  {t("featuresTitle")}
                </h2>
                <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4 sm:px-0">
                  {t("featuresSubtitle")}
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
                  {t("launchDesc")}
                </p>
                <Link href="/launch">
                  <Button variant="outline" className="w-full">
                    {t("discover")} <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>

              <div className="bg-white p-8 rounded-2xl border border-gray-200 hover:shadow-lg transition-all duration-300 hover-lift">
                <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-6">
                  <TrendingUp className="h-6 w-6" />
                </div>
                <h3 className="font-semibold text-xl mb-4 text-gray-900">SCALE</h3>
                <p className="text-gray-600 mb-6">
                  {t("scaleDesc")}
                </p>
                <Link href="/scale">
                  <Button variant="outline" className="w-full">
                    {t("discover")} <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>

              <div className="bg-white p-8 rounded-2xl border border-gray-200 hover:shadow-lg transition-all duration-300 hover-lift">
                <div className="w-12 h-12 bg-green-50 text-green-600 rounded-xl flex items-center justify-center mb-6">
                  <BarChart className="h-6 w-6" />
                </div>
                <h3 className="font-semibold text-xl mb-4 text-gray-900">INVEST</h3>
                <p className="text-gray-600 mb-6">
                  {t("investDesc")}
                </p>
                <Link href="/invest">
                  <Button variant="outline" className="w-full">
                    {t("discover")} <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>

              <div className="bg-white p-8 rounded-2xl border border-gray-200 hover:shadow-lg transition-all duration-300 hover-lift">
                <div className="w-12 h-12 bg-purple-50 text-purple-600 rounded-xl flex items-center justify-center mb-6">
                  <Link2 className="h-6 w-6" />
                </div>
                <h3 className="font-semibold text-xl mb-4 text-gray-900">DealBridge</h3>
                <p className="text-gray-600 mb-6">
                  {t("dealBridgeDesc")}
                </p>
                <Link href="/dealbridge">
                  <Button variant="outline" className="w-full">
                    {t("discover")} <ArrowRight className="ml-2 h-4 w-4" />
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
                  {t("ecosystemTitle")}
                </h2>
                <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4 sm:px-0">
                  {t("ecosystemSubtitle")}
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
                  {t("dataWorksTitle")}
                </h2>
                <p className="text-lg sm:text-xl text-gray-600 mb-8">
                  {t("dataWorksSubtitle")}
                </p>
                <StaggeredFadeIn className="space-y-6">
                  <div className="flex items-start gap-4">
                    <CheckCircle className="h-6 w-6 text-[#E1182E] flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-lg text-gray-900 mb-2">{t("customDataProcessingTitle")}</h3>
                      <p className="text-gray-600">{t("customDataProcessingDesc")}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <CheckCircle className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-lg text-gray-900 mb-2">{t("aiProcessOptimizationTitle")}</h3>
                      <p className="text-gray-600">{t("aiProcessOptimizationDesc")}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-lg text-gray-900 mb-2">{t("everythingInYourHandsTitle")}</h3>
                      <p className="text-gray-600">{t("everythingInYourHandsDesc")}</p>
                    </div>
                  </div>
                </StaggeredFadeIn>
              </SlideIn>
              <SlideIn direction="right">
                <div className="bg-gray-100 rounded-2xl h-96 flex items-center justify-center overflow-hidden">
                  <img 
                    src={eraEnvisionPreview} 
                    alt={t("dashboardPreview")} 
                    className="object-cover h-full w-full"
                  />
                </div>
              </SlideIn>
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <FAQSection />

        {/* CTA Section */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
            <FadeIn>
              <h2 className="font-heading font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-6 text-gray-900">
                {t("ctaTitle")}
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 mb-8 px-4 sm:px-0">
                {t("ctaSubtitle")}
              </p>
            </FadeIn>
            <FadeIn delay={200}>
              <Link href="/pricing">
                <Button size="lg" className="bg-[#E1182E] hover:bg-[#C51628] text-white px-8 py-4 text-lg font-semibold hover-lift">
                  {t("startNow")} <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </FadeIn>
          </div>
        </section>
      </div>
    </PageTransition>
  );
}