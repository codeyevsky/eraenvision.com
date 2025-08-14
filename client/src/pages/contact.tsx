import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useLanguage } from '@/hooks/use-language';
import { useToast } from '@/hooks/use-toast';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';

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
      title: t("messageSentToastTitle"),
      description: t("messageSentToastDesc"),
    });

    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: t('contactEmail'),
      content: "hello@eraenvision.com",
      description: t('emailSupportDesc')
    },
    {
      icon: Phone,
      title: t('contactPhone'),
      content: "+90 (555) 123-4567",
      description: t('phoneHoursDesc')
    },
    {
      icon: MapPin,
      title: t('contactAddress'),
      content: t('contactAddress'),
      description: t('addressDesc')
    },
    {
      icon: Clock,
      title: t('contactHours'),
      content: t('contactHours'),
      description: t('hoursDesc')
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-soft-paper to-background">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="font-heading font-bold text-4xl lg:text-6xl mb-6 tracking-wide">
            {t('contactTitle')}
          </h1>
          <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
            {t('contactSubtitle')}
          </p>
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
                  {t('quickContactTitle')}
                </h2>
                <p className="text-muted-foreground">
                  {t('quickContactSubtitle')}
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
                        <SelectItem value="starter">Starter ({t('free')})</SelectItem>
                        <SelectItem value="pro">Pro ({t('proPrice')})</SelectItem>
                        <SelectItem value="business">Business ({t('businessPrice')})</SelectItem>
                        <SelectItem value="enterprise">Enterprise ({t('custom')})</SelectItem>
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
                      {t('submitting')}
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
                  {t('contactInfoTitle')}
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4 p-4 bg-soft-paper rounded-xl">
                    <div className="w-10 h-10 bg-primary/10 text-primary rounded-lg flex items-center justify-center">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="font-medium">{t('salesTeam')}</div>
                      <div className="text-sm text-muted-foreground">sales@eraenvision.com</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4 p-4 bg-soft-paper rounded-xl">
                    <div className="w-10 h-10 bg-accent-blue/10 text-accent-blue rounded-lg flex items-center justify-center">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="font-medium">{t('techSupport')}</div>
                      <div className="text-sm text-muted-foreground">support@eraenvision.com</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4 p-4 bg-soft-paper rounded-xl">
                    <div className="w-10 h-10 bg-accent-mint/10 text-accent-mint rounded-lg flex items-center justify-center">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="font-medium">{t('generalInquiries')}</div>
                      <div className="text-sm text-muted-foreground">hello@eraenvision.com</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* FAQ Preview */}
              <div className="bg-background rounded-3xl shadow-xl p-8 border border-border">
                <h3 className="font-heading font-bold text-xl mb-6">
                  {t('faqTitle')}
                </h3>
                <div className="space-y-4">
                  <div className="border-b border-border pb-4">
                    <h4 className="font-medium mb-2">{t('freeTrialAvailable')}</h4>
                    <p className="text-sm text-muted-foreground">{t('freeTrialAvailableAnswer')}</p>
                  </div>
                  <div className="border-b border-border pb-4">
                    <h4 className="font-medium mb-2">{t('whichSegments')}</h4>
                    <p className="text-sm text-muted-foreground">{t('whichSegmentsAnswer')}</p>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">{t('howDoesItWork')}</h4>
                    <p className="text-sm text-muted-foreground">{t('howDoesItWorkAnswer')}</p>
                  </div>
                </div>
              </div>

              {/* Calendar Booking */}
              <div className="bg-gradient-to-r from-primary to-primary/90 rounded-3xl p-8 text-primary-foreground">
                <h3 className="font-heading font-bold text-xl mb-4">
                  {t('bookMeetingTitle')}
                </h3>
                <p className="mb-6 opacity-90">
                  {t('bookMeetingSubtitle')}
                </p>
                <Button 
                  className="bg-background text-primary hover:bg-background/90 w-full"
                >
                  {t('viewCalendar')}
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
              {t('locationTitle')}
            </h2>
            <p className="text-xl text-muted-foreground">
              {t('locationSubtitle')}
            </p>
          </div>
          
          <div className="bg-soft-paper rounded-3xl p-8 text-center">
            <div className="max-w-2xl mx-auto">
              <MapPin className="h-12 w-12 text-primary mx-auto mb-6" />
              <h3 className="font-heading font-bold text-2xl mb-4">
                {t('contactAddress')}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {t('locationDescription')}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}