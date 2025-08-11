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
    <header className="sticky top-0 bg-background/95 backdrop-blur-sm border-b border-border z-40">
      <nav className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
            <div className="w-8 h-8 flex items-center justify-center text-primary">
              <Eye className="h-6 w-6" />
            </div>
            <span className="font-heading font-bold text-xl tracking-wide">EraEnvision</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <div 
              className="relative group"
              onMouseEnter={() => setIsProductsOpen(true)}
              onMouseLeave={() => setIsProductsOpen(false)}
            >
              <button className="text-muted-foreground hover:text-primary transition-colors flex items-center py-2">
                {t('products')} <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              <div className={cn(
                "absolute top-full left-0 mt-2 w-64 bg-popover rounded-2xl shadow-lg border border-border opacity-0 invisible transition-all duration-200",
                isProductsOpen && "opacity-100 visible"
              )}>
                <div className="p-2">
                  <Link href="#launch" className="block p-3 rounded-xl hover:bg-muted transition-colors">
                    <div className="font-medium text-primary">Launch</div>
                    <div className="text-sm text-muted-foreground">{t('forEntrepreneurs')}</div>
                  </Link>
                  <Link href="#scale" className="block p-3 rounded-xl hover:bg-muted transition-colors">
                    <div className="font-medium text-primary">Scale</div>
                    <div className="text-sm text-muted-foreground">{t('forBusinesses')}</div>
                  </Link>
                  <Link href="#invest" className="block p-3 rounded-xl hover:bg-muted transition-colors">
                    <div className="font-medium text-primary">Invest</div>
                    <div className="text-sm text-muted-foreground">{t('forInvestors')}</div>
                  </Link>
                </div>
              </div>
            </div>
            
            <Link href="#how-it-works" className="text-muted-foreground hover:text-primary transition-colors py-2">
              {t('howItWorks')}
            </Link>
            <Link href="#pricing" className="text-muted-foreground hover:text-primary transition-colors py-2">
              {t('pricing')}
            </Link>
            <Link href="#about" className="text-muted-foreground hover:text-primary transition-colors py-2">
              {t('about')}
            </Link>
            <Link href="#resources" className="text-muted-foreground hover:text-primary transition-colors py-2">
              {t('resources')}
            </Link>
          </div>

          {/* Language Switcher & CTA */}
          <div className="flex items-center space-x-4">
            <div className="hidden sm:block">
              <LanguageSwitcher />
            </div>
            <Button className="hover-lift">
              {t('startFree')}
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="lg:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-background border-t border-border">
            <div className="px-6 py-4 space-y-4">
              <Link 
                href="#products" 
                className="block text-muted-foreground hover:text-primary transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t('products')}
              </Link>
              <Link 
                href="#how-it-works" 
                className="block text-muted-foreground hover:text-primary transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t('howItWorks')}
              </Link>
              <Link 
                href="#pricing" 
                className="block text-muted-foreground hover:text-primary transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t('pricing')}
              </Link>
              <Link 
                href="#about" 
                className="block text-muted-foreground hover:text-primary transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t('about')}
              </Link>
              <Link 
                href="#contact" 
                className="block text-muted-foreground hover:text-primary transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t('contact')}
              </Link>
              <div className="pt-4 border-t border-border">
                <LanguageSwitcher variant="mobile" />
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
