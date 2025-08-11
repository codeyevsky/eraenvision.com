import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useLanguage } from '@/hooks/use-language';
import { useToast } from '@/hooks/use-toast';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';
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

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { t } = useLanguage();
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // TODO: Implement actual form submission
    await new Promise(resolve => setTimeout(resolve, 1500));

    toast({
      title: "Mesajınız gönderildi!",
      description: "En kısa sürede size dönüş yapacağız.",
    });

    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "E-posta",
      content: "hello@eraenvision.com",
      description: "7/24 e-posta desteği"
    },
    {
      icon: Phone,
      title: "Telefon",
      content: "+90 (555) 123-4567",
      description: "Mesai saatleri içinde"
    },
    {
      icon: MapPin,
      title: "Adres",
      content: "İstanbul, Türkiye",
      description: "Uzaktan ekip"
    },
    {
      icon: Clock,
      title: "Çalışma Saatleri",
      content: "Pzt-Cum 09:00-18:00",
      description: "GMT+3 saat dilimi"
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
        {/* Background Illustrations */}
        <div className="absolute inset-0">
          <ConnectedDots />
        </div>
        
        <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
          <div className="animate-slide-in-top">
            <h1 className="font-heading font-bold text-6xl lg:text-8xl mb-8 tracking-wide gradient-text-animated text-glow">
              {t('contactTitle')}
            </h1>
            <p className="text-2xl lg:text-3xl text-muted-foreground mb-16 leading-relaxed">
              {t('contactSubtitle')}
            </p>
            
            {/* Animated Logo */}
            <div className="flex justify-center">
              <AnimatedLogo />
            </div>
          </div>
        </div>
        
        {/* Floating morphing shape */}
        <div className="absolute top-20 right-20 scale-75">
          <MorphingShape />
        </div>
        
        {/* Enhanced background effects */}
        <div className="absolute top-32 left-32 w-48 h-48 bg-gradient-to-r from-primary/10 to-accent-blue/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-32 w-64 h-64 bg-gradient-to-r from-accent-mint/10 to-primary/10 rounded-full blur-2xl animate-pulse delay-300"></div>
      </section>

      {/* Enhanced Contact Info Cards */}
      <section className="py-24 bg-gradient-to-b from-background via-soft-paper to-background relative">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <div key={index} className="group animate-fade-in-up" style={{ animationDelay: `${index * 150}ms` }}>
                <GlassCard className="ultra-glass p-8 hover-3d magnetic-attraction h-full text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-primary to-accent-blue rounded-3xl flex items-center justify-center mx-auto mb-6 animate-morph-shape group-hover:scale-110 transition-transform duration-500">
                    <info.icon className="h-8 w-8 text-white animate-pulse" />
                  </div>
                  <h3 className="font-bold text-xl mb-3 gradient-text group-hover:text-glow transition-all duration-300">{info.title}</h3>
                  <p className="font-semibold text-primary mb-2 text-lg">{info.content}</p>
                  <p className="text-sm text-muted-foreground">{info.description}</p>
                  
                  {/* Decorative elements */}
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <div className="w-3 h-3 bg-gradient-to-r from-primary to-accent-blue rounded-full animate-pulse"></div>
                  </div>
                </GlassCard>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Contact Form */}
      <section className="py-24 bg-soft-paper">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Form */}
            <div className="bg-background rounded-3xl shadow-xl p-8 border border-border">
              <div className="mb-8">
                <h2 className="font-heading font-bold text-2xl lg:text-3xl mb-4">
                  Mesaj Gönderin
                </h2>
                <p className="text-muted-foreground">
                  Formu doldurun, size en kısa sürede dönüş yapalım.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      {t('fullName')} *
                    </label>
                    <Input
                      type="text"
                      required
                      placeholder={t('fullNamePlaceholder')}
                      className="rounded-xl h-12"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      {t('email')} *
                    </label>
                    <Input
                      type="email"
                      required
                      placeholder={t('emailPlaceholder')}
                      className="rounded-xl h-12"
                    />
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      {t('company')}
                    </label>
                    <Input
                      type="text"
                      placeholder={t('companyPlaceholder')}
                      className="rounded-xl h-12"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      {t('country')}
                    </label>
                    <Select>
                      <SelectTrigger className="rounded-xl h-12">
                        <SelectValue placeholder={t('country')} />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="TR">{t('turkey')}</SelectItem>
                        <SelectItem value="US">{t('unitedStates')}</SelectItem>
                        <SelectItem value="DE">{t('germany')}</SelectItem>
                        <SelectItem value="FR">{t('france')}</SelectItem>
                        <SelectItem value="UK">{t('unitedKingdom')}</SelectItem>
                        <SelectItem value="other">{t('other')}</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      {t('segmentInterest')}
                    </label>
                    <Select>
                      <SelectTrigger className="rounded-xl h-12">
                        <SelectValue placeholder={t('segmentInterest')} />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="launch">Launch ({t('forEntrepreneurs')})</SelectItem>
                        <SelectItem value="scale">Scale ({t('forBusinesses')})</SelectItem>
                        <SelectItem value="invest">Invest ({t('forInvestors')})</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      {t('budgetRange')}
                    </label>
                    <Select>
                      <SelectTrigger className="rounded-xl h-12">
                        <SelectValue placeholder={t('budgetRange')} />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="starter">Starter (Ücretsiz)</SelectItem>
                        <SelectItem value="pro">Pro (₺299/ay)</SelectItem>
                        <SelectItem value="business">Business (₺599/ay)</SelectItem>
                        <SelectItem value="enterprise">Enterprise (Özel)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    {t('yourMessage')} *
                  </label>
                  <Textarea
                    rows={5}
                    required
                    placeholder={t('messagePlaceholder')}
                    className="rounded-xl resize-none"
                  />
                </div>

                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Checkbox id="kvkk-consent" required className="mt-1" />
                    <label htmlFor="kvkk-consent" className="text-sm text-muted-foreground leading-relaxed">
                      {t('kvkkConsent')} <span className="text-primary">*</span>
                    </label>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Checkbox id="marketing-consent" className="mt-1" />
                    <label htmlFor="marketing-consent" className="text-sm text-muted-foreground leading-relaxed">
                      {t('marketingConsent')}
                    </label>
                  </div>
                </div>

                <Button 
                  type="submit" 
                  className="w-full py-4 text-lg font-semibold hover-lift rounded-xl" 
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      Gönderiliyor...
                    </>
                  ) : (
                    <>
                      <Send className="h-5 w-5 mr-2" />
                      {t('sendMessage')}
                    </>
                  )}
                </Button>
              </form>
            </div>

            {/* Right Side Content */}
            <div className="space-y-8">
              {/* Quick Contact */}
              <div className="bg-background rounded-3xl shadow-xl p-8 border border-border">
                <h3 className="font-heading font-bold text-xl mb-6">
                  Hızlı İletişim
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4 p-4 bg-soft-paper rounded-xl">
                    <div className="w-10 h-10 bg-primary/10 text-primary rounded-lg flex items-center justify-center">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="font-medium">Satış Ekibi</div>
                      <div className="text-sm text-muted-foreground">sales@eraenvision.com</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4 p-4 bg-soft-paper rounded-xl">
                    <div className="w-10 h-10 bg-accent-blue/10 text-accent-blue rounded-lg flex items-center justify-center">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="font-medium">Teknik Destek</div>
                      <div className="text-sm text-muted-foreground">support@eraenvision.com</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4 p-4 bg-soft-paper rounded-xl">
                    <div className="w-10 h-10 bg-accent-mint/10 text-accent-mint rounded-lg flex items-center justify-center">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="font-medium">Genel Sorular</div>
                      <div className="text-sm text-muted-foreground">hello@eraenvision.com</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* FAQ Preview */}
              <div className="bg-background rounded-3xl shadow-xl p-8 border border-border">
                <h3 className="font-heading font-bold text-xl mb-6">
                  Sık Sorulan Sorular
                </h3>
                <div className="space-y-4">
                  <div className="border-b border-border pb-4">
                    <h4 className="font-medium mb-2">Ücretsiz deneme var mı?</h4>
                    <p className="text-sm text-muted-foreground">Evet, 14 gün ücretsiz deneme sunuyoruz.</p>
                  </div>
                  <div className="border-b border-border pb-4">
                    <h4 className="font-medium mb-2">Hangi sektörlere hizmet veriyorsunuz?</h4>
                    <p className="text-sm text-muted-foreground">Tüm sektörlerden işletmelere hizmet veriyoruz.</p>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Kurulum süresi ne kadar?</h4>
                    <p className="text-sm text-muted-foreground">Ortalama 24 saat içinde aktif hale gelir.</p>
                  </div>
                </div>
              </div>

              {/* Calendar Booking */}
              <div className="bg-gradient-to-r from-primary to-primary/90 rounded-3xl p-8 text-primary-foreground">
                <h3 className="font-heading font-bold text-xl mb-4">
                  Online Toplantı Planlayın
                </h3>
                <p className="mb-6 opacity-90">
                  Uzmanlarımızla birebir görüşme yapmak ister misiniz?
                </p>
                <Button 
                  className="bg-background text-primary hover:bg-background/90 w-full"
                >
                  Takvim Görüntüle
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-3xl lg:text-4xl mb-4">
              Konumumuz
            </h2>
            <p className="text-xl text-muted-foreground">
              Uzaktan çalışan global ekibimiz
            </p>
          </div>
          
          <div className="bg-soft-paper rounded-3xl p-8 text-center">
            <div className="max-w-2xl mx-auto">
              <MapPin className="h-12 w-12 text-primary mx-auto mb-6" />
              <h3 className="font-heading font-bold text-2xl mb-4">
                İstanbul, Türkiye
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Ana merkezimiz İstanbul'da bulunmakla birlikte, ekibimiz farklı şehirlerden 
                uzaktan çalışmaktadır. Bu sayede size 7/24 destek sağlayabilir ve 
                global perspektif sunabiliriz.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}