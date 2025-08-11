import { Button } from '@/components/ui/button';
import { useLanguage } from '@/hooks/use-language';
import { Eye, Users, Target, Zap, Award, TrendingUp, Brain, Rocket, Shield, Star } from 'lucide-react';
import { 
  FloatingIcons, 
  GeometricShapes, 
  ParticleField, 
  InteractiveDataVisualization,
  AnimatedLogo,
  ConnectedDots,
  MorphingShape 
} from '@/components/ui/advanced-illustrations';
import { GlassCard, MorphingButton } from '@/components/ui/apple-widgets';

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
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Ultra Advanced Background */}
      <FloatingIcons />
      <GeometricShapes />
      <ParticleField />
      
      {/* Spectacular Hero Section */}
      <section className="pt-32 pb-24 bg-gradient-to-br from-soft-paper via-background to-soft-paper relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 animate-slide-in-left">
              <h1 className="font-heading font-bold text-5xl lg:text-8xl mb-8 tracking-wide">
                <span className="text-glow">Neden </span>
                <span className="gradient-text-animated text-glow">Varız?</span>
              </h1>
              <p className="text-xl lg:text-2xl text-muted-foreground leading-relaxed animate-fade-in-up delay-300">
                İş dünyasında gürültü çok, net planlar az. EraEnvision, AI'ın gücüyle 
                girişimciler, işletmeler ve yatırımcılar için karmaşayı keser, 
                eyleme geçirilebilir planlar sunar.
              </p>
              
              {/* Animated Stats */}
              <div className="grid grid-cols-3 gap-6 animate-fade-in-up delay-500">
                <GlassCard className="text-center hover-3d">
                  <div className="text-4xl font-bold text-primary text-glow mb-2">+120</div>
                  <div className="text-sm text-muted-foreground font-medium">Başarılı Proje</div>
                </GlassCard>
                <GlassCard className="text-center hover-3d">
                  <div className="text-4xl font-bold text-accent-blue text-glow-blue mb-2">3</div>
                  <div className="text-sm text-muted-foreground font-medium">Ana Segment</div>
                </GlassCard>
                <GlassCard className="text-center hover-3d">
                  <div className="text-4xl font-bold text-accent-mint text-glow-mint mb-2">2024</div>
                  <div className="text-sm text-muted-foreground font-medium">Kuruluş Yılı</div>
                </GlassCard>
              </div>
            </div>
            
            <div className="relative animate-slide-in-right">
              <div className="relative z-10 group">
                <div className="relative overflow-hidden rounded-3xl shadow-2xl group-hover:shadow-4xl transition-all duration-700 hover-3d">
                  <img 
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                    alt="Team collaboration and innovation" 
                    className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  {/* Interactive overlay elements */}
                  <div className="absolute top-6 left-6 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-200">
                    <div className="ultra-glass rounded-2xl p-4 shadow-lg">
                      <div className="flex items-center space-x-3">
                        <Brain className="w-6 h-6 text-primary animate-pulse" />
                        <span className="text-sm font-bold">AI-Powered</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-400">
                    <div className="ultra-glass rounded-2xl p-4 shadow-lg">
                      <div className="text-sm font-bold">Innovation Hub</div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating morphing shape */}
              <div className="absolute -top-12 -right-12 scale-50">
                <MorphingShape />
              </div>
              
              {/* Enhanced background effects */}
              <div className="absolute -top-16 -right-16 w-48 h-48 bg-gradient-to-r from-primary/20 to-accent-blue/20 rounded-full blur-3xl animate-pulse"></div>
              <div className="absolute -bottom-16 -left-16 w-36 h-36 bg-gradient-to-r from-accent-mint/20 to-primary/20 rounded-full blur-2xl animate-pulse delay-300"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Spectacular Mission Section */}
      <section className="py-32 bg-gradient-to-b from-background via-soft-paper to-background relative overflow-hidden">
        {/* Background Illustrations */}
        <div className="absolute inset-0">
          <ConnectedDots />
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-20 animate-slide-in-top">
            <h2 className="font-heading font-bold text-5xl lg:text-7xl mb-8 gradient-text-animated text-glow">
              Misyonumuz
            </h2>
            <p className="text-xl lg:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Her girişimcinin net bir yol haritası, her işletmenin optimal stratejisi, 
              her yatırımcının doğru fırsatları bulmasını sağlamak.
            </p>
            
            {/* Animated Logo */}
            <div className="flex justify-center mt-12">
              <AnimatedLogo />
            </div>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="animate-slide-in-left">
              <GlassCard className="ultra-glass p-12 hover-3d">
                <div className="text-center">
                  <div className="w-24 h-24 bg-gradient-to-r from-primary to-accent-blue rounded-3xl flex items-center justify-center mx-auto mb-8 animate-morph-shape">
                    <Eye className="h-12 w-12 text-white animate-pulse" />
                  </div>
                  <h3 className="font-heading font-bold text-3xl lg:text-4xl mb-8 gradient-text">
                    Büyümeyi Basitleştir, Gürültüyü Kes
                  </h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    İş dünyasında her gün binlerce tavsiye, strateji ve "kesin çözüm" ile karşılaşıyoruz. 
                    Bizim amacımız bu gürültüyü kesmek ve size gerçekten işe yarayacak, 
                    ölçülebilir sonuçlar verecek planlar sunmak. AI'ın analitik gücü ile 
                    insan deneyimini birleştirerek, büyümenizi hızlandırıyoruz.
                  </p>
                </div>
              </GlassCard>
            </div>
            
            <div className="animate-slide-in-right">
              <InteractiveDataVisualization />
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Values Section */}
      <section className="py-32 bg-gradient-to-b from-soft-paper via-background to-soft-paper relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-20 animate-slide-in-top">
            <h2 className="font-heading font-bold text-5xl lg:text-6xl mb-8 gradient-text-animated text-glow">
              Değerlerimiz
            </h2>
            <p className="text-xl lg:text-2xl text-muted-foreground">
              Her kararımızı yönlendiren temel ilkeler
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-12">
            {values.map((value, index) => (
              <div key={index} className="group animate-fade-in-up" style={{ animationDelay: `${index * 200}ms` }}>
                <GlassCard className="ultra-glass p-10 hover-3d magnetic-attraction h-full">
                  <div className="text-center">
                    <div className={`w-20 h-20 ${value.color} rounded-3xl flex items-center justify-center mb-8 mx-auto animate-morph-shape group-hover:scale-110 transition-transform duration-500`}>
                      <value.icon className="h-10 w-10 animate-pulse" />
                    </div>
                    <h3 className="font-heading font-bold text-2xl lg:text-3xl mb-6 gradient-text group-hover:text-glow transition-all duration-300">
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed text-lg">
                      {value.description}
                    </p>
                    
                    {/* Decorative elements */}
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-500">
                      <div className="w-3 h-3 bg-gradient-to-r from-primary to-accent-blue rounded-full animate-pulse"></div>
                    </div>
                  </div>
                </GlassCard>
              </div>
            ))}
          </div>
        </div>
        
        {/* Background decorations */}
        <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-r from-primary/5 to-accent-blue/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-gradient-to-r from-accent-mint/5 to-primary/5 rounded-full blur-3xl animate-pulse delay-300"></div>
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