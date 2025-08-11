import { useLanguage } from '@/hooks/use-language';
import { Star } from 'lucide-react';

export function TestimonialsSection() {
  const { t } = useLanguage();

  const testimonials = [
    {
      name: "Ahmet Şimşek",
      title: "Girişimci",
      content: "EraEnvision sayesinde fikrimi 2 hafta içinde MVP'ye dönüştürdüm. AI danışman gerçekten işe yarıyor!",
      avatar: "AS",
      rating: 5,
    },
    {
      name: "Zeynep Kaya",
      title: "E-ticaret Müdürü",
      content: "E-ticaret dönüşüm oranımız %35 arttı. Scale modülü tam olarak ihtiyacımız olan şeydi.",
      avatar: "ZK",
      rating: 5,
    },
    {
      name: "Murat Ren",
      title: "Yatırımcı",
      content: "Yatırım kararlarımı çok daha hızlı verebiliyorum. AI puanlama sistemi çok başarılı.",
      avatar: "MR",
      rating: 5,
    },
  ];

  return (
    <section className="py-24 bg-soft-paper">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-3xl lg:text-4xl mb-4">
            {t('testimonialsTitle')}
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-background p-8 rounded-2xl shadow-lg hover-lift"
            >
              <div className="flex items-center mb-4">
                <div className="flex text-accent-amber">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-current" />
                  ))}
                </div>
              </div>
              <p className="text-muted-foreground mb-6">
                "{testimonial.content}"
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                  <span className="font-semibold text-primary">{testimonial.avatar}</span>
                </div>
                <div>
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-muted-foreground text-sm">{testimonial.title}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
