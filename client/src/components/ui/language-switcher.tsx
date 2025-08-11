import { useLanguage } from '@/hooks/use-language';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface LanguageSwitcherProps {
  className?: string;
  variant?: 'default' | 'mobile';
}

export function LanguageSwitcher({ className, variant = 'default' }: LanguageSwitcherProps) {
  const { language, setLanguage } = useLanguage();

  if (variant === 'mobile') {
    return (
      <div className={cn("flex items-center space-x-2", className)}>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setLanguage('tr')}
          className={cn(
            "px-3 py-1 text-sm rounded-lg transition-colors",
            language === 'tr' 
              ? "bg-primary text-primary-foreground" 
              : "bg-muted hover:bg-muted/80"
          )}
        >
          TR
        </Button>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setLanguage('en')}
          className={cn(
            "px-3 py-1 text-sm rounded-lg transition-colors",
            language === 'en' 
              ? "bg-primary text-primary-foreground" 
              : "bg-muted hover:bg-muted/80"
          )}
        >
          EN
        </Button>
      </div>
    );
  }

  return (
    <div className={cn("flex items-center space-x-2", className)}>
      <Button
        variant="ghost"
        size="sm"
        onClick={() => setLanguage('tr')}
        className={cn(
          "px-2 py-1 text-sm transition-colors",
          language === 'tr' ? "text-primary" : "text-muted-foreground hover:text-primary"
        )}
      >
        TR
      </Button>
      <span className="text-muted-foreground">|</span>
      <Button
        variant="ghost"
        size="sm"
        onClick={() => setLanguage('en')}
        className={cn(
          "px-2 py-1 text-sm transition-colors",
          language === 'en' ? "text-primary" : "text-muted-foreground hover:text-primary"
        )}
      >
        EN
      </Button>
    </div>
  );
}
