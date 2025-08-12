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
      title: "AI Destekli Eşleşme",
      description: "İhtiyacınıza uygun girişim, işletme veya yatırımcıları akıllı algoritmalarla bulun"
    },
    {
      icon: <Users className="h-8 w-8 text-[#E1182E]" />,
      title: "Profil Paylaşımı",
      description: "Profiliniz ekosistemde görünür olsun, fırsatlar size gelsin"
    },
    {
      icon: <Target className="h-8 w-8 text-[#E1182E]" />,
      title: "Anlaşma Takibi",
      description: "Görüşmeleri ve teklifleri tek ekrandan yönetin ve takip edin"
    },
    {
      icon: <Filter className="h-8 w-8 text-[#E1182E]" />,
      title: "Akıllı Filtreleme",
      description: "Sektör, bütçe, konum ve hedefe göre detaylı arama yapın"
    }
  ];

  const successStories = [
    {
      title: "Tech Startup + Yatırımcı",
      description: "AI tabanlı fintech girişimi, DealBridge üzerinden angel yatırımcısıyla buluştu ve 2M TL seed yatırım aldı.",
      result: "2M TL Yatırım"
    },
    {
      title: "E-ticaret + Lojistik Ortaklığı",
      description: "Büyüyen e-ticaret şirketi, lojistik partneri bularak operasyon maliyetlerini %30 düşürdü.",
      result: "%30 Maliyet Tasarrufu"
    },
    {
      title: "SaaS + Distribütör",
      description: "B2B SaaS şirketi, DealBridge sayesinde 5 farklı sektörde distribütör anlaşması imzaladı.",
      result: "5 Yeni Pazar"
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
              DealBridge — İş birliği ve{' '}
              <span className="bg-gradient-to-r from-[#E1182E] to-[#FF4757] bg-clip-text text-transparent">
                yatırım fırsatlarını keşfet
              </span>
            </h1>
            
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 mb-12 leading-relaxed max-w-4xl mx-auto">
              Girişimciler, işletme sahipleri ve yatırımcılar için tek ekosistem. AI destekli önerilerle doğru bağlantıları kurun.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
              <Button size="lg" className="bg-[#E1182E] hover:bg-[#C51628] text-white px-8 py-4 text-lg font-semibold">
                Fırsatları Keşfet
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="border-gray-300 text-gray-700 px-8 py-4 text-lg font-semibold">
                Nasıl Çalışır?
              </Button>
            </div>
          </div>
        </section>

        {/* Description Section */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
            <h2 className="font-heading font-bold text-2xl sm:text-3xl md:text-4xl mb-8 text-gray-900">
              İş Dünyasının Bağlantı Merkezi
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed mb-12">
              EraEnvision, sizi yalnızca AI destekli danışmanlıkla değil, aynı zamanda iş birliği ekosistemiyle de destekler. 
              DealBridge sayesinde girişimciler yatırımcılarla tanışır, işletmeler B2B anlaşmalar yapar, 
              yatırımcılar potansiyel girişimleri keşfeder.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="text-center">
                <div className="w-16 h-16 bg-red-50 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Target className="h-8 w-8 text-[#E1182E]" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Girişimciler</h3>
                <p className="text-gray-600">Yatırımcı bulun, mentor desteği alın</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Building2 className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="font-semibold text-lg mb-2">İşletme Sahipleri</h3>
                <p className="text-gray-600">B2B ortaklıklar, tedarikçi ağı</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-green-50 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Yatırımcılar</h3>
                <p className="text-gray-600">Potansiyel girişimleri keşfedin</p>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-16">
              <h2 className="font-heading font-bold text-2xl sm:text-3xl md:text-4xl mb-6 text-gray-900">
                Platform Özellikleri
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
                DealBridge, iş dünyasındaki bağlantıları kolaylaştıran akıllı özelliklerle donatılmıştır
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
                Başarı Hikayeleri
              </h2>
              <p className="text-lg sm:text-xl text-gray-600">
                DealBridge üzerinden gerçekleşen başarılı bağlantılar
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
              Güven ve Güvenlik
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Verileriniz KVKK & GDPR uyumlu şekilde korunur. Tüm iş birliği süreçleri şeffaf ve güvenli bir ortamda gerçekleşir.
            </p>
            
            <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-600" />
                <span>KVKK Uyumlu</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-600" />
                <span>GDPR Sertifikalı</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-600" />
                <span>256-bit SSL Şifreleme</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-600" />
                <span>7/24 Güvenlik Monitoring</span>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
            <h2 className="font-heading font-bold text-2xl sm:text-3xl md:text-4xl mb-6 text-gray-900">
              DealBridge'e Katılın
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 mb-8">
              İş dünyasındaki doğru bağlantıları kurmaya bugün başlayın
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="bg-[#E1182E] hover:bg-[#C51628] text-white px-8 py-4 text-lg font-semibold">
                Hemen Başla
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Link href="/contact">
                <Button variant="outline" size="lg" className="border-gray-300 text-gray-700 px-8 py-4 text-lg font-semibold">
                  Daha Fazla Bilgi
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </div>
  );
}