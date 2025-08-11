import { HeroSection } from '@/components/sections/hero';
import { FeaturesSection } from '@/components/sections/features';
import { SegmentsSection } from '@/components/sections/segments';
import { WorkflowSection } from '@/components/sections/workflow';
import { PricingSection } from '@/components/sections/pricing';
import { TestimonialsSection } from '@/components/sections/testimonials';
import { FAQSection } from '@/components/sections/faq';
import { ContactSection } from '@/components/sections/contact';
import { CTABanner } from '@/components/sections/cta-banner';
import { MetricWidget, InteractiveChart } from '@/components/ui/apple-widgets';
import { BarChart, TrendingUp, Target } from 'lucide-react';

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      
      {/* Clean Trust & Metrics Section */}
      <section className="py-24 bg-soft-paper">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-4xl lg:text-5xl mb-4">
              Gerçek Sonuçlar
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Sayılarla kanıtlanmış başarı hikayelerimiz
            </p>
          </div>
          
          <div className="grid lg:grid-cols-4 gap-6">
            <MetricWidget
              icon={BarChart}
              title="Yol haritası oluşturuldu"
              value="120+"
              change="+12%"
              color="primary"
            />
            <MetricWidget
              icon={TrendingUp}
              title="Ortalama dönüşüm artışı"
              value="28%"
              change="+5%"
              color="blue"
            />
            <MetricWidget
              icon={Target}
              title="Segment, tek platform"
              value="3"
              change="100%"
              color="mint"
            />
            <InteractiveChart />
          </div>
        </div>
      </section>

      <FeaturesSection />
      <SegmentsSection />
      <WorkflowSection />
      <PricingSection />
      <TestimonialsSection />
      <FAQSection />
      <ContactSection />
      <CTABanner />
    </main>
  );
}
