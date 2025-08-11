import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useLanguage } from '@/hooks/use-language';
import { useToast } from '@/hooks/use-toast';

export function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { t } = useLanguage();
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // TODO: Implement actual form submission
    await new Promise(resolve => setTimeout(resolve, 1000));

    toast({
      title: "Mesajınız gönderildi!",
      description: "En kısa sürede size dönüş yapacağız.",
    });

    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="py-24 bg-soft-paper">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-3xl lg:text-4xl mb-4">
            {t('contactTitle')}
          </h2>
          <p className="text-xl text-muted-foreground">
            {t('contactSubtitle')}
          </p>
        </div>

        <div className="bg-background rounded-2xl shadow-lg p-8">
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
                  className="rounded-xl"
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
                  className="rounded-xl"
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
                  className="rounded-xl"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  {t('country')}
                </label>
                <Select>
                  <SelectTrigger className="rounded-xl">
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
                  <SelectTrigger className="rounded-xl">
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
                  <SelectTrigger className="rounded-xl">
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
                {t('yourMessage')}
              </label>
              <Textarea
                rows={4}
                placeholder={t('messagePlaceholder')}
                className="rounded-xl resize-none"
              />
            </div>

            <div className="space-y-3">
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
              className="w-full py-4 text-lg font-semibold hover-lift" 
              disabled={isSubmitting}
            >
              {isSubmitting ? "Gönderiliyor..." : t('sendMessage')}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
