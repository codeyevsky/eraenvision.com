import { useState, useRef } from 'react';
import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { LanguageSwitcher } from '@/components/ui/language-switcher';
import { useLanguage } from '@/hooks/use-language';
import { Eye, ChevronDown, Menu, X, Target, TrendingUp, BarChart3 } from 'lucide-react';

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const { t } = useLanguage();

  const handleMouseEnter = () => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
    }
    setIsProductsOpen(true);
  };

  const handleMouseLeave = () => {
    hoverTimeoutRef.current = setTimeout(() => {
      setIsProductsOpen(false);
    }, 100);
  };

  return (
    <header className="sticky top-0 bg-white/95 backdrop-blur-sm border-b border-gray-200 z-40">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
            <div className="w-8 h-8 flex items-center justify-center text-[#E1182E]">
              <Eye className="h-6 w-6" />
            </div>
            <span className="font-heading font-bold text-xl tracking-wide text-gray-900">EraEnvision</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <div 
              className="relative"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <Link href="/products" className="flex items-center text-gray-600 hover:text-gray-900 transition-colors font-medium">
                {t('products')} <ChevronDown className="ml-1 h-4 w-4" />
              </Link>
              
              {isProductsOpen && (
                <div className="absolute top-full left-0 mt-2 w-80 bg-white rounded-2xl shadow-lg border border-gray-200 p-4 z-50">
                  <div className="space-y-3">
                    <Link href="/launch" className="flex items-start gap-3 p-3 rounded-xl hover:bg-gray-50 transition-colors">
                      <div className="w-10 h-10 bg-red-50 text-[#E1182E] rounded-lg flex items-center justify-center">
                        <Target className="h-5 w-5" />
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">LAUNCH</div>
                        <div className="text-sm text-gray-500">{t('forEntrepreneurs')}</div>
                      </div>
                    </Link>
                    
                    <Link href="/scale" className="flex items-start gap-3 p-3 rounded-xl hover:bg-gray-50 transition-colors">
                      <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center">
                        <TrendingUp className="h-5 w-5" />
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">SCALE</div>
                        <div className="text-sm text-gray-500">{t('forBusinesses')}</div>
                      </div>
                    </Link>
                    
                    <Link href="/invest" className="flex items-start gap-3 p-3 rounded-xl hover:bg-gray-50 transition-colors">
                      <div className="w-10 h-10 bg-green-50 text-green-600 rounded-lg flex items-center justify-center">
                        <BarChart3 className="h-5 w-5" />
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">INVEST</div>
                        <div className="text-sm text-gray-500">{t('forInvestors')}</div>
                      </div>
                    </Link>
                  </div>
                </div>
              )}
            </div>
            
            <Link href="/dealbridge" className="text-gray-600 hover:text-gray-900 transition-colors font-medium">
              DealBridge
            </Link>
            <Link href="/pricing" className="text-gray-600 hover:text-gray-900 transition-colors font-medium">
              {t('pricing')}
            </Link>
            <Link href="/blog" className="text-gray-600 hover:text-gray-900 transition-colors font-medium">
              {t('blog')}
            </Link>
            <Link href="/about" className="text-gray-600 hover:text-gray-900 transition-colors font-medium">
              {t('about')}
            </Link>
            <Link href="/contact" className="text-gray-600 hover:text-gray-900 transition-colors font-medium">
              {t('contact')}
            </Link>
          </div>

          {/* Language Switcher & CTA */}
          <div className="flex items-center space-x-4">
            <div className="hidden sm:block">
              <LanguageSwitcher />
            </div>
            <Button className="bg-[#E1182E] hover:bg-[#C51628] text-white font-semibold hidden sm:block">
              {t('startFree')}
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="lg:hidden text-gray-600"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-200 shadow-lg">
            <div className="px-4 sm:px-6 py-6 space-y-6">
              
              {/* Mobile Products Section */}
              <div>
                <div className="text-sm font-semibold text-gray-900 mb-4">{t('products')}</div>
                <div className="space-y-3">
                  <Link 
                    href="/launch" 
                    className="flex items-center gap-3 py-2 text-gray-600 hover:text-gray-900 transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <div className="w-8 h-8 bg-red-50 text-[#E1182E] rounded-lg flex items-center justify-center">
                      <Target className="h-4 w-4" />
                    </div>
                    <div>
                      <div className="font-medium">LAUNCH</div>
                      <div className="text-xs text-gray-500">{t('forEntrepreneurs')}</div>
                    </div>
                  </Link>
                  
                  <Link 
                    href="/scale" 
                    className="flex items-center gap-3 py-2 text-gray-600 hover:text-gray-900 transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                >
                    <div className="w-8 h-8 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center">
                      <TrendingUp className="h-4 w-4" />
                    </div>
                    <div>
                      <div className="font-medium">SCALE</div>
                      <div className="text-xs text-gray-500">{t('forBusinesses')}</div>
                    </div>
                  </Link>
                  
                  <Link 
                    href="/invest" 
                    className="flex items-center gap-3 py-2 text-gray-600 hover:text-gray-900 transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                >
                    <div className="w-8 h-8 bg-green-50 text-green-600 rounded-lg flex items-center justify-center">
                      <BarChart3 className="h-4 w-4" />
                    </div>
                    <div>
                      <div className="font-medium">INVEST</div>
                      <div className="text-xs text-gray-500">{t('forInvestors')}</div>
                    </div>
                  </Link>
                </div>
              </div>
              
              {/* Mobile Navigation Links */}
              <div className="space-y-4 border-t border-gray-200 pt-4">
                <Link 
                  href="/dealbridge" 
                  className="block text-gray-600 hover:text-gray-900 transition-colors font-medium py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  DealBridge
                </Link>
                <Link 
                  href="/pricing" 
                  className="block text-gray-600 hover:text-gray-900 transition-colors font-medium py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {t('pricing')}
                </Link>
                <Link 
                  href="/blog" 
                  className="block text-gray-600 hover:text-gray-900 transition-colors font-medium py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {t('blog')}
                </Link>
                <Link 
                  href="/about" 
                  className="block text-gray-600 hover:text-gray-900 transition-colors font-medium py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {t('about')}
                </Link>
                <Link 
                  href="/contact" 
                  className="block text-gray-600 hover:text-gray-900 transition-colors font-medium py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {t('contact')}
                </Link>
              </div>
              
              {/* Mobile CTA & Language */}
              <div className="border-t border-gray-200 pt-4 space-y-4">
                <LanguageSwitcher />
                <Button 
                  className="w-full bg-[#E1182E] hover:bg-[#C51628] text-white font-semibold"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {t('startFree')}
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}