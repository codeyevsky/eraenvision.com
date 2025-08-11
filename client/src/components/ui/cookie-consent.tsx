import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/hooks/use-language';
import { X } from 'lucide-react';

export function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const hasConsent = localStorage.getItem('cookieConsent');
    if (!hasConsent) {
      const timer = setTimeout(() => setIsVisible(true), 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setIsVisible(false);
  };

  const manageCookies = () => {
    // TODO: Implement cookie management modal
    alert(t('manageCookies'));
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-ink-black text-white p-4 z-50 animate-slide-up">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-sm flex-1">
          <span>{t('cookieMessage')}</span>
          <a 
            href="/cookie-policy" 
            className="text-primary hover:text-primary/80 ml-2 underline"
          >
            {t('cookiePolicyLink')}
          </a>
        </div>
        <div className="flex gap-3">
          <Button
            variant="outline"
            size="sm"
            onClick={manageCookies}
            className="border-gray-600 text-white hover:bg-gray-800"
          >
            {t('manageCookies')}
          </Button>
          <Button
            onClick={acceptCookies}
            size="sm"
            className="bg-primary hover:bg-primary/90"
          >
            {t('acceptCookies')}
          </Button>
        </div>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setIsVisible(false)}
          className="p-1 hover:bg-gray-800 sm:ml-2"
        >
          <X className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}
