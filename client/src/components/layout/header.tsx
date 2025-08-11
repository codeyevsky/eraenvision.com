import { useState } from 'react';
import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { LanguageSwitcher } from '@/components/ui/language-switcher';
import { useLanguage } from '@/hooks/use-language';
import { Eye, ChevronDown, Menu, X } from 'lucide-react';
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
            <Link href="/products" className="text-gray-600 hover:text-gray-900 transition-colors font-medium">
              Ürünler
            </Link>
            <Link href="/pricing" className="text-gray-600 hover:text-gray-900 transition-colors font-medium">
              Fiyatlandırma
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
                Ürünler
              </Link>
              <Link 
                href="/pricing" 
                className="block text-gray-600 hover:text-gray-900 transition-colors font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Fiyatlandırma
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
