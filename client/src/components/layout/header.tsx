import { useState } from 'react';
import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { LanguageSwitcher } from '@/components/ui/language-switcher';
import { useLanguage } from '@/hooks/use-language';
import { Eye, ChevronDown, Menu, X, Target, TrendingUp, BarChart3 } from 'lucide-react';
import { cn } from '@/lib/utils';

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const { t } = useLanguage();

  return (
    <header className="sticky top-0 bg-white/95 backdrop-blur-sm border-b border-gray-200 z-40">
      <nav className="max-w-7xl mx-auto px-6">
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
              onMouseEnter={() => setIsProductsOpen(true)}
              onMouseLeave={() => setIsProductsOpen(false)}
            >
              <Link href="/products" className="flex items-center text-gray-600 hover:text-gray-900 transition-colors font-medium">
                Ürünler <ChevronDown className="ml-1 h-4 w-4" />
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
                        <div className="text-sm text-gray-500">Girişimciler için</div>
                      </div>
                    </Link>
                    
                    <Link href="/scale" className="flex items-start gap-3 p-3 rounded-xl hover:bg-gray-50 transition-colors">
                      <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center">
                        <TrendingUp className="h-5 w-5" />
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">SCALE</div>
                        <div className="text-sm text-gray-500">Büyüyen şirketler için</div>
                      </div>
                    </Link>
                    
                    <Link href="/invest" className="flex items-start gap-3 p-3 rounded-xl hover:bg-gray-50 transition-colors">
                      <div className="w-10 h-10 bg-green-50 text-green-600 rounded-lg flex items-center justify-center">
                        <BarChart3 className="h-5 w-5" />
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">INVEST</div>
                        <div className="text-sm text-gray-500">Yatırımcılar için</div>
                      </div>
                    </Link>
                  </div>
                </div>
              )}
            </div>
            
            <Link href="/pricing" className="text-gray-600 hover:text-gray-900 transition-colors font-medium">
              Fiyatlandırma
            </Link>
            <Link href="/blog" className="text-gray-600 hover:text-gray-900 transition-colors font-medium">
              Blog
            </Link>
            <Link href="/about" className="text-gray-600 hover:text-gray-900 transition-colors font-medium">
              Hakkımızda
            </Link>
            <Link href="/contact" className="text-gray-600 hover:text-gray-900 transition-colors font-medium">
              İletişim
            </Link>
          </div>

          {/* Language Switcher & CTA */}
          <div className="flex items-center space-x-4">
            <div className="hidden sm:block">
              <LanguageSwitcher />
            </div>
            <Button className="bg-[#E1182E] hover:bg-[#C51628] text-white font-semibold">
              Ücretsiz Başla
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
          <div className="lg:hidden bg-white border-t border-gray-200">
            <div className="px-6 py-4 space-y-4">
              <Link 
                href="/products" 
                className="block text-gray-600 hover:text-gray-900 transition-colors font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Tüm Ürünler
              </Link>
              
              <div className="pl-4 space-y-3">
                <Link 
                  href="/launch" 
                  className="flex items-center gap-3 text-gray-600 hover:text-gray-900 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <div className="w-6 h-6 bg-red-50 text-[#E1182E] rounded-lg flex items-center justify-center">
                    <Target className="h-3 w-3" />
                  </div>
                  LAUNCH
                </Link>
                <Link 
                  href="/scale" 
                  className="flex items-center gap-3 text-gray-600 hover:text-gray-900 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <div className="w-6 h-6 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center">
                    <TrendingUp className="h-3 w-3" />
                  </div>
                  SCALE
                </Link>
                <Link 
                  href="/invest" 
                  className="flex items-center gap-3 text-gray-600 hover:text-gray-900 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <div className="w-6 h-6 bg-green-50 text-green-600 rounded-lg flex items-center justify-center">
                    <BarChart3 className="h-3 w-3" />
                  </div>
                  INVEST
                </Link>
              </div>
              
              <Link 
                href="/pricing" 
                className="block text-gray-600 hover:text-gray-900 transition-colors font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Fiyatlandırma
              </Link>
              <Link 
                href="/blog" 
                className="block text-gray-600 hover:text-gray-900 transition-colors font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Blog
              </Link>
              <Link 
                href="/about" 
                className="block text-gray-600 hover:text-gray-900 transition-colors font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Hakkımızda
              </Link>
              <Link 
                href="/contact" 
                className="block text-gray-600 hover:text-gray-900 transition-colors font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                İletişim
              </Link>
              <div className="pt-4 border-t border-gray-200">
                <LanguageSwitcher variant="mobile" />
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
