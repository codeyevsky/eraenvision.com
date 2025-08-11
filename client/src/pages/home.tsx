import { HeroSection } from '@/components/sections/hero';
import { FeaturesSection } from '@/components/sections/features';
import { SegmentsSection } from '@/components/sections/segments';
import { WorkflowSection } from '@/components/sections/workflow';
import { PricingSection } from '@/components/sections/pricing';
import { TestimonialsSection } from '@/components/sections/testimonials';
import { FAQSection } from '@/components/sections/faq';
import { ContactSection } from '@/components/sections/contact';
import { CTABanner } from '@/components/sections/cta-banner';

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      
      {/* Trust & Metrics */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-primary mb-2">+120</div>
              <div className="text-muted-foreground">Yol haritası oluşturuldu</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">%28</div>
              <div className="text-muted-foreground">Ortalama dönüşüm artışı</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">3</div>
              <div className="text-muted-foreground">Segment, tek platform</div>
            </div>
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
