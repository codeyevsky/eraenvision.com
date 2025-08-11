import { Link } from 'wouter';
import { useLanguage } from '@/hooks/use-language';
import { Eye, Linkedin, Twitter, Github } from 'lucide-react';

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-ink-black text-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-5 gap-8">
          {/* Logo & Description */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-8 h-8 flex items-center justify-center text-primary">
                <Eye className="h-6 w-6" />
              </div>
              <span className="font-heading font-bold text-xl tracking-wide">EraEnvision</span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              {t('footerDescription')}
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="font-semibold mb-4">{t('products')}</h3>
            <ul className="space-y-3 text-gray-400">
              <li><Link href="/products" className="hover:text-white transition-colors">Launch</Link></li>
              <li><Link href="/products" className="hover:text-white transition-colors">Scale</Link></li>
              <li><Link href="/products" className="hover:text-white transition-colors">Invest</Link></li>
              <li><Link href="/pricing" className="hover:text-white transition-colors">{t('pricing')}</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold mb-4">{t('companyFooter')}</h3>
            <ul className="space-y-3 text-gray-400">
              <li><Link href="/about" className="hover:text-white transition-colors">{t('about')}</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">{t('contact')}</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">{t('careers')}</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">{t('blog')}</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold mb-4">{t('legal')}</h3>
            <ul className="space-y-3 text-gray-400">
              <li><Link href="#" className="hover:text-white transition-colors">{t('privacyPolicy')}</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">{t('termsOfService')}</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">{t('cookiePolicy')}</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">{t('aiDisclaimer')}</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">{t('footerCopyright')}</p>
          <p className="text-gray-400 text-sm mt-4 md:mt-0">{t('footerDisclaimer')}</p>
        </div>
      </div>
    </footer>
  );
}
