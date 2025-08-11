import { HeroSection } from '@/components/sections/hero';
import { FeaturesSection } from '@/components/sections/features';
import { SegmentsSection } from '@/components/sections/segments';
import { WorkflowSection } from '@/components/sections/workflow';
import { PricingSection } from '@/components/sections/pricing';
import { TestimonialsSection } from '@/components/sections/testimonials';
import { FAQSection } from '@/components/sections/faq';
import { ContactSection } from '@/components/sections/contact';
import { CTABanner } from '@/components/sections/cta-banner';
import { AnimatedBlobs, FloatingElements } from '@/components/ui/animated-blobs';
import { MetricWidget, InteractiveChart } from '@/components/ui/apple-widgets';
import { BarChart, TrendingUp, Target } from 'lucide-react';

export default function HomePage() {
  return (
    <main className="min-h-screen relative overflow-hidden">
      {/* Animated Background */}
      <AnimatedBlobs />
      <FloatingElements />
      
      <HeroSection />
      
      {/* Trust & Metrics with Apple Widgets */}
      <section className="py-24 bg-gradient-to-b from-background to-soft-paper relative">
        <div className="max-w-7xl mx-auto px-6">
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
