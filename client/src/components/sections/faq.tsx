import { useState } from 'react';
import { useLanguage } from '@/hooks/use-language';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

export function FAQSection() {
  const [openItems, setOpenItems] = useState<number[]>([]);
  const { t } = useLanguage();

  const faqItems = [
    {
      question: t('howDoesItWork'),
      answer: t('howDoesItWorkAnswer'),
    },
    {
      question: t('whichSegments'),
      answer: t('whichSegmentsAnswer'),
    },
    {
      question: t('isDataSafe'),
      answer: t('isDataSafeAnswer'),
    },
    {
      question: t('freeTrialAvailable'),
      answer: t('freeTrialAvailableAnswer'),
    },
    {
      question: t('aiReliability'),
      answer: t('aiReliabilityAnswer'),
    },
  ];

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  return (
    <section className="py-24 bg-background">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-3xl lg:text-4xl mb-4">
            {t('faqTitle')}
          </h2>
        </div>

        <div className="space-y-4">
          {faqItems.map((item, index) => (
            <div key={index} className="border border-border rounded-2xl overflow-hidden">
              <button
                className="w-full p-6 text-left flex items-center justify-between hover:bg-muted/50 transition-colors"
                onClick={() => toggleItem(index)}
              >
                <span className="font-semibold text-lg pr-4">{item.question}</span>
                <ChevronDown 
                  className={cn(
                    "h-5 w-5 transition-transform flex-shrink-0",
                    openItems.includes(index) && "rotate-180"
                  )}
                />
              </button>
              <div className={cn(
                "transition-all duration-300 overflow-hidden",
                openItems.includes(index) ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
              )}>
                <div className="px-6 pb-6">
                  <p className="text-muted-foreground leading-relaxed">{item.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
