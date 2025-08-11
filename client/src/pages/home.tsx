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
import { 
  FloatingIcons, 
  GeometricShapes, 
  ParticleField, 
  InteractiveDataVisualization,
  AnimatedLogo,
  ConnectedDots,
  MorphingShape 
} from '@/components/ui/advanced-illustrations';
import { BarChart, TrendingUp, Target } from 'lucide-react';

export default function HomePage() {
  return (
    <main className="min-h-screen relative overflow-hidden">
      {/* Ultra Advanced Animated Background */}
      <AnimatedBlobs />
      <FloatingElements />
      <FloatingIcons />
      <GeometricShapes />
      <ParticleField />
      
      <HeroSection />
      
      {/* Spectacular Trust & Metrics Section */}
      <section className="py-32 bg-gradient-to-b from-background via-soft-paper to-background relative overflow-hidden">
        {/* Background Illustrations */}
        <div className="absolute inset-0">
          <ConnectedDots />
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          {/* Section Header with Animated Title */}
          <div className="text-center mb-20 animate-slide-in-top">
            <h2 className="font-heading font-bold text-5xl lg:text-7xl mb-6 gradient-text-animated text-glow">
              Gerçek Sonuçlar
            </h2>
            <p className="text-xl lg:text-2xl text-muted-foreground animate-fade-in-up delay-300">
              Sayılarla kanıtlanmış başarı hikayelerimiz
            </p>
            
            {/* Animated Logo */}
            <div className="flex justify-center mt-8">
              <AnimatedLogo />
            </div>
          </div>
          
          {/* Metrics Grid with Advanced Animations */}
          <div className="grid lg:grid-cols-4 gap-8 mb-16">
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
          
          {/* Advanced Data Visualization */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <InteractiveDataVisualization />
            </div>
            
            <div className="space-y-8 animate-slide-in-right">
              <h3 className="text-3xl lg:text-4xl font-bold gradient-text">AI-Destekli Büyüme</h3>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Platformumuz makine öğrenmesi algoritmaları kullanarak işletmenizin büyüme potansiyelini maksimize eder. 
                Her segment için özelleştirilmiş çözümler sunar.
              </p>
              
              {/* Morphing Shape Illustration */}
              <div className="flex justify-center lg:justify-start">
                <MorphingShape />
              </div>
            </div>
          </div>
        </div>
        
        {/* Additional floating elements */}
        <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-r from-primary/10 to-accent-blue/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-gradient-to-r from-accent-mint/10 to-primary/10 rounded-full blur-3xl animate-pulse delay-300"></div>
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
