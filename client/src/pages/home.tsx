import { Button } from '@/components/ui/button';
import { useLanguage } from '@/hooks/use-language';
import { ArrowRight, Play, Sparkles, Zap, Target, TrendingUp, Users, Award, Brain, Rocket, Globe, Shield } from 'lucide-react';

export default function Home() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-background">
      {/* Floating orbs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="floating-orb w-96 h-96 bg-gradient-to-r from-primary/30 to-accent-blue/20 top-10 -left-48" />
        <div className="floating-orb w-64 h-64 bg-gradient-to-r from-accent-purple/20 to-accent-pink/30 top-1/3 -right-32" style={{ animationDelay: '2s' }} />
        <div className="floating-orb w-80 h-80 bg-gradient-to-r from-accent-mint/20 to-accent-blue/20 bottom-10 -left-40" style={{ animationDelay: '4s' }} />
      </div>

      {/* Hero Section */}
      <section className="section-luxury text-center">
        <div className="container-luxury">
          <div className="animate-fade-in-luxury">
            <div className="inline-flex items-center gap-2 premium-card px-6 py-3 mb-8">
              <Sparkles className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium">AI Destekli İş Büyütme Platformu</span>
            </div>
            
            <h1 className="heading-luxury mb-8 text-shadow-lg">
              İşinizi <span className="gradient-text">Yeni Boyutlara</span><br />
              Taşıyan AI Gücü
            </h1>
            
            <p className="subheading-luxury max-w-4xl mx-auto mb-12">
              EraEnvision ile işinizin potansiyelini keşfedin. Launch, Scale ve Invest segmentlerimizle 
              girişimcilerden büyük şirketlere kadar herkes için özelleştirilmiş AI çözümleri.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
              <button className="premium-button group">
                <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                Demo İzle
              </button>
              
              <Button variant="outline" size="lg" className="border-border/50 hover:border-primary/50">
                Ücretsiz Başla
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 relative">
        <div className="container-luxury">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Users, value: '10K+', label: 'Aktif Kullanıcı' },
              { icon: TrendingUp, value: '247%', label: 'Ortalama Büyüme' },
              { icon: Award, value: '98%', label: 'Müşteri Memnuniyeti' },
              { icon: Globe, value: '50+', label: 'Ülke' }
            ].map((stat, index) => (
              <div key={index} className="premium-card p-8 text-center luxury-hover" style={{ animationDelay: `${index * 0.1}s` }}>
                <stat.icon className="w-8 h-8 text-primary mx-auto mb-4 animate-luxury-pulse" />
                <div className="text-3xl font-bold gradient-text mb-2">{stat.value}</div>
                <div className="text-muted-foreground text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-luxury">
        <div className="container-luxury">
          <div className="text-center mb-20">
            <h2 className="heading-luxury mb-6">
              <span className="gradient-text">Premium Özellikler</span>
            </h2>
            <p className="subheading-luxury max-w-3xl mx-auto">
              İşinizi büyütmek için ihtiyacınız olan tüm araçlar tek platformda
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {[
              {
                icon: Brain,
                title: 'AI-Powered Analytics',
                description: 'Gelişmiş yapay zeka algoritmaları ile işinizin performansını analiz edin',
                gradient: 'from-primary to-accent-blue'
              },
              {
                icon: Rocket,
                title: 'Hızlı Büyüme',
                description: 'Özelleştirilmiş stratejiler ile işinizi hızla büyütün',
                gradient: 'from-accent-blue to-accent-purple'
              },
              {
                icon: Shield,
                title: 'Güvenli Platform',
                description: 'Enterprise seviyede güvenlik ile verileriniz her zaman korunur',
                gradient: 'from-accent-purple to-accent-pink'
              }
            ].map((feature, index) => (
              <div key={index} className="premium-card p-8 luxury-hover group" style={{ animationDelay: `${index * 0.15}s` }}>
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.gradient} p-4 mb-6 glow-effect`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 group-hover:gradient-text transition-all">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Segments Section */}
      <section className="section-luxury bg-gradient-to-b from-background to-secondary/20">
        <div className="container-luxury">
          <div className="text-center mb-20">
            <h2 className="heading-luxury mb-6">
              Üç Güçlü <span className="gradient-text">Segment</span>
            </h2>
            <p className="subheading-luxury max-w-3xl mx-auto">
              Launch, Scale ve Invest - Her iş ihtiyacı için özel çözümler
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Launch',
                subtitle: 'Girişimciler İçin',
                description: 'Fikirden pazara: AI destekli strateji ve rehberlik',
                features: ['İş Planı Oluşturma', 'Pazar Analizi', 'MVP Geliştirme'],
                gradient: 'from-primary to-accent-blue'
              },
              {
                title: 'Scale',
                subtitle: 'Büyüyen İşletmeler',
                description: 'Mevcut işinizi optimize edin ve büyütün',
                features: ['Operasyon Optimizasyonu', 'Büyüme Stratejileri', 'Performans Analizi'],
                gradient: 'from-accent-blue to-accent-purple'
              },
              {
                title: 'Invest',
                subtitle: 'Yatırımcılar',
                description: 'Akıllı yatırım kararları için veri odaklı içgörüler',
                features: ['Portföy Analizi', 'Risk Değerlendirmesi', 'Trend Analizi'],
                gradient: 'from-accent-purple to-accent-pink'
              }
            ].map((segment, index) => (
              <div key={index} className="premium-card p-8 luxury-hover group relative overflow-hidden" style={{ animationDelay: `${index * 0.2}s` }}>
                <div className={`absolute inset-0 bg-gradient-to-br ${segment.gradient} opacity-5 group-hover:opacity-10 transition-opacity`} />
                
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${segment.gradient} flex items-center justify-center glow-effect`}>
                      <Target className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold gradient-text">{segment.title}</h3>
                      <p className="text-sm text-muted-foreground">{segment.subtitle}</p>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground mb-6 leading-relaxed">{segment.description}</p>
                  
                  <ul className="space-y-3 mb-8">
                    {segment.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-primary" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <button className="premium-button w-full group">
                    Detayları Gör
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-luxury text-center">
        <div className="container-luxury">
          <div className="premium-card p-16 luxury-hover glow-effect">
            <div className="max-w-4xl mx-auto">
              <h2 className="heading-luxury mb-8">
                Geleceği <span className="gradient-text">Şimdi</span> Yaşayın
              </h2>
              <p className="subheading-luxury mb-12">
                EraEnvision ile işinizin dijital dönüşümünü başlatın. 
                AI'ın gücünü keşfedin ve rakiplerinizin önüne geçin.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <button className="premium-button text-lg px-12 py-5">
                  <Zap className="w-6 h-6 mr-3" />
                  Ücretsiz Deneme Başlat
                </button>
                <Button variant="outline" size="lg" className="border-border/50 hover:border-primary/50 text-lg px-12 py-5">
                  Demo Talep Et
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}