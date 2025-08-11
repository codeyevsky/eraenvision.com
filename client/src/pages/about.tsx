import { Button } from '@/components/ui/button';
import { useLanguage } from '@/hooks/use-language';
import { Eye, Users, Target, Zap, Award, TrendingUp } from 'lucide-react';

export default function AboutPage() {
  const { t } = useLanguage();

  const values = [
    {
      icon: Target,
      title: "Dürüstlük",
      description: "Her tavsiyemiz gerçek veriler ve kanıtlanmış stratejiler üzerine kuruludur. Gürültüyü kesmek için buradayız.",
      color: "bg-primary/10 text-primary"
    },
    {
      icon: Zap,
      title: "Hız",
      description: "Dakikalar içinde analiz, saatler içinde plan. Büyümeye odaklanırken zaman kaybetmeyeceksiniz.",
      color: "bg-accent-blue/10 text-accent-blue"
    },
    {
      icon: TrendingUp,
      title: "Ölçülebilirlik",
      description: "Her öneri ölçülebilir sonuçlar hedefler. İlerlemeyi takip edin, optimize edin, büyüyün.",
      color: "bg-accent-mint/10 text-accent-mint"
    }
  ];

  const milestones = [
    {
      year: "2024",
      title: "EraEnvision Kuruluş",
      description: "AI destekli iş danışmanlığı vizyonuyla yola çıktık"
    },
    {
      year: "2024 Q2",
      title: "Launch Segmenti",
      description: "Girişimciler için AI destekli fikir doğrulama platformu"
    },
    {
      year: "2024 Q3",
      title: "Scale Segmenti",
      description: "İşletmeler için e-ticaret ve operasyon optimizasyonu"
    },
    {
      year: "2024 Q4",
      title: "Invest Segmenti",
      description: "Yatırımcılar için AI destekli deal sourcing"
    }
  ];

  const team = [
    {
      name: "Emirhan",
      title: "Founder & CEO",
      avatar: "E",
      description: "10+ yıl teknoloji ve iş geliştirme deneyimi"
    },
    {
      name: "AI Team",
      title: "Machine Learning Engineers",
      avatar: "AI",
      description: "Dünyanın en iyi AI modellerini iş çözümlerine dönüştürüyor"
    },
    {
      name: "Product Team",
      title: "Product & Design",
      avatar: "P",
      description: "Kullanıcı odaklı tasarım ve deneyim uzmanları"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-soft-paper to-background relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="font-heading font-bold text-4xl lg:text-6xl mb-6 tracking-wide">
                <span>Neden </span>
                <span className="gradient-text">Varız?</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                İş dünyasında gürültü çok, net planlar az. EraEnvision, AI'ın gücüyle 
                girişimciler, işletmeler ve yatırımcılar için karmaşayı keser, 
                eyleme geçirilebilir planlar sunar.
              </p>
              <div className="flex items-center space-x-6 text-muted-foreground">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">+120</div>
                  <div className="text-sm">Başarılı Proje</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">3</div>
                  <div className="text-sm">Ana Segment</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">2024</div>
                  <div className="text-sm">Kuruluş Yılı</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="relative z-10">
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                  alt="Team collaboration and innovation" 
                  className="rounded-3xl shadow-2xl w-full h-auto hover-lift"
                />
              </div>
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-primary/10 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-accent-blue/10 rounded-full blur-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-3xl lg:text-4xl mb-4">
              Misyonumuz
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Her girişimcinin net bir yol haritası, her işletmenin optimal stratejisi, 
              her yatırımcının doğru fırsatları bulmasını sağlamak.
            </p>
          </div>
          
          <div className="bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5 rounded-3xl p-12 text-center">
            <div className="max-w-4xl mx-auto">
              <div className="w-20 h-20 bg-primary rounded-3xl flex items-center justify-center mx-auto mb-8">
                <Eye className="h-10 w-10 text-primary-foreground" />
              </div>
              <h3 className="font-heading font-bold text-2xl lg:text-3xl mb-6">
                Büyümeyi Basitleştir, Gürültüyü Kes
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                İş dünyasında her gün binlerce tavsiye, strateji ve "kesin çözüm" ile karşılaşıyoruz. 
                Bizim amacımız bu gürültüyü kesmek ve size gerçekten işe yarayacak, 
                ölçülebilir sonuçlar verecek planlar sunmak. AI'ın analitik gücü ile 
                insan deneyimini birleştirerek, büyümenizi hızlandırıyoruz.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-soft-paper">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-3xl lg:text-4xl mb-4">
              Değerlerimiz
            </h2>
            <p className="text-xl text-muted-foreground">
              Her kararımızı yönlendiren temel ilkeler
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-background p-8 rounded-3xl shadow-lg hover-lift border border-border">
                <div className={`w-16 h-16 ${value.color} rounded-2xl flex items-center justify-center mb-6`}>
                  <value.icon className="h-8 w-8" />
                </div>
                <h3 className="font-heading font-semibold text-xl mb-4">
                  {value.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-3xl lg:text-4xl mb-4">
              Yolculuğumuz
            </h2>
            <p className="text-xl text-muted-foreground">
              EraEnvision'ın gelişim hikayesi
            </p>
          </div>
          
          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <div key={index} className="flex items-start space-x-6 group">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center text-primary-foreground font-bold text-lg group-hover:scale-110 transition-transform">
                    {milestone.year.slice(-2)}
                  </div>
                </div>
                <div className="bg-soft-paper p-6 rounded-2xl flex-1 border border-border group-hover:border-primary/20 transition-colors">
                  <div className="flex items-center space-x-3 mb-2">
                    <span className="text-sm font-medium text-primary">{milestone.year}</span>
                    <div className="h-1 w-8 bg-primary rounded-full"></div>
                  </div>
                  <h3 className="font-heading font-semibold text-xl mb-2">
                    {milestone.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {milestone.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-soft-paper">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-3xl lg:text-4xl mb-4">
              Ekibimiz
            </h2>
            <p className="text-xl text-muted-foreground">
              Büyümenizi mümkün kılan insanlar
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-background p-8 rounded-3xl shadow-lg hover-lift border border-border text-center">
                <div className="w-24 h-24 bg-primary/10 text-primary rounded-3xl flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                  {member.avatar}
                </div>
                <h3 className="font-heading font-semibold text-xl mb-2">
                  {member.name}
                </h3>
                <p className="text-primary font-medium mb-4">
                  {member.title}
                </p>
                <p className="text-muted-foreground text-sm">
                  {member.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5 rounded-3xl p-12">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-primary mb-2">+120</div>
                <div className="text-muted-foreground">Başarılı Proje</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">%28</div>
                <div className="text-muted-foreground">Ortalama Büyüme</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">3</div>
                <div className="text-muted-foreground">Ana Segment</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">24/7</div>
                <div className="text-muted-foreground">AI Desteği</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-primary to-primary/90 text-primary-foreground">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-heading font-bold text-3xl lg:text-4xl mb-4">
            Bize Katılın
          </h2>
          <p className="text-xl opacity-90 mb-8">
            Büyümenizi hızlandırmaya hazır mısınız? Hemen başlayın.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-background text-primary hover:bg-background/90 px-8 py-4 text-lg font-semibold hover-lift"
            >
              {t('startFree')}
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-2 border-background text-background hover:bg-background hover:text-primary px-8 py-4 text-lg font-semibold hover-lift"
            >
              İletişime Geç
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}