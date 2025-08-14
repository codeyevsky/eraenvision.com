import { Card, CardContent } from "@/components/ui/card";
import { AlertCircle } from "lucide-react";
import { useLanguage } from '@/hooks/use-language';
import { Link } from 'wouter';
import { Button } from '@/components/ui/button';

export default function NotFound() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gray-50">
      <Card className="w-full max-w-md mx-4">
        <CardContent className="pt-6">
          <div className="flex flex-col items-center mb-4 gap-2">
            <AlertCircle className="h-16 w-16 text-red-500" />
            <h1 className="text-4xl font-bold text-gray-900">{t('notFoundPageTitle')}</h1>
          </div>

          <p className="mt-4 text-center text-lg text-gray-600">
            {t('notFoundPageSubtitle')}
          </p>
          <div className="mt-6 text-center">
            <Link href="/">
              <Button size="lg" className="w-full sm:w-auto">
                {t('notFoundButtonText')}
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}