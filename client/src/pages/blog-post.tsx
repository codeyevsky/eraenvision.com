import { useParams } from 'wouter';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { ArrowLeft, Calendar, Clock, User, Share2, BookOpen, Tag } from 'lucide-react';
import { Link } from 'wouter';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  readTime: number;
  category: string;
  tags: string[];
  slug: string;
}

export default function BlogPostPage() {
  const params = useParams();
  const slug = params.slug;

  // Mock blog post data - in real app this would come from API/CMS
  const blogPosts: Record<string, BlogPost> = {
    'ai-ile-girisimcilik-2025-stratejileri': {
      id: '1',
      title: 'AI ile Girişimcilik: 2025\'te Başarılı Olmak İçin 10 Strateji',
      excerpt: 'Yapay zekanın girişimcilik dünyasını nasıl dönüştürdüğünü ve bu değişimde öne geçmek için neler yapmanız gerektiğini keşfedin.',
      content: `
        <p>2025 yılı, yapay zekanın iş dünyasında tam anlamıyla yerleşik hale geldiği bir dönem olarak tarihe geçecek. Girişimciler için bu durum hem büyük fırsatlar hem de yeni zorluklar anlamına geliyor.</p>

        <h2>1. AI-First Düşünce Yapısını Benimseyin</h2>
        <p>Artık "bu işi AI ile nasıl yapabilirim?" sorusunu sormak yerine, "bu sorunu çözmek için AI'a nasıl ihtiyaç duymam?" sorusunu sormalıyız. Bu paradigma değişimi, işinizin temellerinden başlayarak her süreci yeniden düşünmenizi gerektirir.</p>

        <h2>2. Veri Toplama Stratejinizi Güçlendirin</h2>
        <p>AI'ın gücü, beslenen verinin kalitesi ile doğru orantılıdır. Müşteri davranışlarından operasyonel süreçlere kadar her alanda sistematik veri toplama alışkanlığı geliştirin.</p>

        <h2>3. Küçük Başlayın, Hızlı Ölçeklendirin</h2>
        <p>AI implementasyonunda "büyük patlama" yaklaşımı yerine, küçük pilot projelerle başlayıp başarıları hızlıca ölçeklendirme stratejisi benimseyin.</p>

        <h2>4. İnsan-AI İş Birliğini Optimize Edin</h2>
        <p>AI'ın insanları değiştirmediği, onları güçlendirdiği alanları belirleyin. En büyük değer, insan yaratıcılığı ile AI verimliliğinin birleştiği noktalarda ortaya çıkar.</p>

        <h2>5. Sürekli Öğrenme Kültürü Oluşturun</h2>
        <p>AI teknolojileri hızla gelişiyor. Hem siz hem de ekibiniz için sürekli öğrenme ve adaptasyon kültürü oluşturmak kritik.</p>

        <h2>6. Etik AI Kullanımını Öncelik Yapın</h2>
        <p>Uzun vadeli başarı için AI kullanımında etik ilkeleri baştan tanımlayın ve sürekli denetleyin.</p>

        <h2>7. Rakip Analizini AI ile Derinleştirin</h2>
        <p>Geleneksel rakip analizi yöntemlerini AI destekli araçlarla geliştirerek pazar dinamiklerini daha iyi anlayın.</p>

        <h2>8. Müşteri Deneyimini Kişiselleştirin</h2>
        <p>AI ile her müşteriye özgü deneyimler yaratarak sadakat ve gelir artışı sağlayın.</p>

        <h2>9. Operasyonel Verimliliği Artırın</h2>
        <p>Rutin işlemleri AI ile otomatikleştirerek ekibinizi daha değer yaratan işlere odaklayın.</p>

        <h2>10. Gelecek Senaryolarını Planlayın</h2>
        <p>AI'ın sektörünüzü nasıl değiştireceğini öngörerek proaktif stratejiler geliştirin.</p>

        <h2>Sonuç</h2>
        <p>2025 yılında AI ile girişimcilik yapmak, teknoloji odaklı olmaktan çok, teknoloji destekli insan odaklı çözümler üretmek anlamına gelir. Başarının anahtarı, AI'ı bir araç olarak görüp, gerçek değeri müşteri problemlerine odaklanarak yaratmakta yatar.</p>
      `,
      author: 'Emirhan Akdeniz',
      date: '2025-01-10',
      readTime: 8,
      category: 'AI & Girişimcilik',
      tags: ['AI', 'Girişimcilik', 'Strateji', 'İnovasyon'],
      slug: 'ai-ile-girisimcilik-2025-stratejileri'
    },
    'e-ticaret-buyutme-veri-odakli-yaklasimlar': {
      id: '2',
      title: 'E-ticaret Büyütme: Veri Odaklı Yaklaşımlar',
      excerpt: 'E-ticaret işletmenizi büyütürken veriyi nasıl kullanacağınızı, hangi metrikleri takip edeceğinizi öğrenin.',
      content: `
        <p>E-ticaret dünyasında sürdürülebilir büyüme için veri odaklı karar verme artık zorunluluk haline geldi. Bu makalede, e-ticaret işletmenizi büyütmek için hangi verileri nasıl kullanmanız gerektiğini detaylıca inceliyoruz.</p>

        <h2>Temel E-ticaret Metrikleri</h2>
        <p>E-ticaret başarısını ölçmek için takip etmeniz gereken temel metrikler:</p>
        <ul>
          <li><strong>Dönüşüm Oranı (Conversion Rate):</strong> Ziyaretçilerin ne kadarı alışveriş yapıyor?</li>
          <li><strong>Ortalama Sipariş Değeri (AOV):</strong> Müşteri başına ortalama harcama</li>
          <li><strong>Müşteri Yaşam Boyu Değeri (CLV):</strong> Bir müşterinin toplam getirisi</li>
          <li><strong>Müşteri Edinim Maliyeti (CAC):</strong> Yeni müşteri kazanma maliyeti</li>
        </ul>

        <h2>Veri Toplama Stratejileri</h2>
        <p>Doğru veriyi toplamak için:</p>
        <ul>
          <li>Google Analytics 4 ve e-ticaret takibi kurulumu</li>
          <li>Heat map ve kullanıcı davranış analizi araçları</li>
          <li>A/B test altyapısı oluşturma</li>
          <li>Müşteri geri bildirim sistemleri</li>
        </ul>

        <h2>Büyüme Hack'leri</h2>
        <p>Veri destekli büyüme stratejileri:</p>
        <ul>
          <li>Sepet terk oranını azaltma taktikleri</li>
          <li>Upsell ve cross-sell optimizasyonu</li>
          <li>Retargeting kampanyaları</li>
          <li>Personalizasyon stratejileri</li>
        </ul>

        <h2>Sonuç</h2>
        <p>E-ticaret büyütme sürecinde veri, pusulanızdır. Doğru metrikleri takip ederek ve veri odaklı kararlar alarak sürdürülebilir büyüme sağlayabilirsiniz.</p>
      `,
      author: 'EraEnvision AI',
      date: '2025-01-08',
      readTime: 6,
      category: 'E-ticaret',
      tags: ['E-ticaret', 'Veri Analizi', 'Büyüme', 'Metrikler'],
      slug: 'e-ticaret-buyutme-veri-odakli-yaklasimlar'
    }
  };

  const post = blogPosts[slug || ''];

  if (!post) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Makale bulunamadı</h1>
          <p className="text-muted-foreground mb-6">Aradığınız blog yazısı mevcut değil.</p>
          <Link href="/blog">
            <Button>
              <ArrowLeft className="mr-2 h-4 w-4" />
              Blog'a Dön
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <title>{post.title} | EraEnvision Blog</title>
      <meta name="description" content={post.excerpt} />
      <meta property="og:title" content={`${post.title} | EraEnvision Blog`} />
      <meta property="og:description" content={post.excerpt} />
      <meta property="og:type" content="article" />
      <meta name="keywords" content={post.tags.join(', ')} />
      
      <div className="min-h-screen bg-white">
        {/* Header */}
        <section className="pt-24 pb-8 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <Link href="/blog">
              <Button variant="ghost" className="mb-6 hover-lift">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Blog'a Dön
              </Button>
            </Link>

            <Badge className="mb-4 bg-[#E1182E] text-white">{post.category}</Badge>
            
            <h1 className="font-heading font-bold text-2xl sm:text-3xl lg:text-5xl mb-6 leading-tight">
              {post.title}
            </h1>
            
            <p className="text-lg sm:text-xl text-gray-600 mb-8 leading-relaxed">
              {post.excerpt}
            </p>

          <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground mb-8">
            <div className="flex items-center gap-2">
              <User className="h-4 w-4" />
              {post.author}
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              {new Date(post.date).toLocaleDateString('tr-TR', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              {post.readTime} dakika okuma
            </div>
            <div className="flex items-center gap-2">
              <BookOpen className="h-4 w-4" />
              Makale
            </div>
          </div>

          <div className="flex items-center gap-4">
            <Button size="sm" variant="outline" className="hover-lift">
              <Share2 className="mr-2 h-4 w-4" />
              Paylaş
            </Button>
            <div className="flex items-center gap-2">
              {post.tags.map((tag) => (
                <Badge key={tag} variant="secondary" className="text-xs">
                  <Tag className="mr-1 h-3 w-3" />
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Separator />

      {/* Article Content */}
      <article className="py-12">
        <div className="max-w-4xl mx-auto px-6">
          <div className="prose prose-lg max-w-none">
            <div 
              className="article-content"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </div>
        </div>
      </article>

      {/* Author Section */}
      <section className="py-12 bg-soft-paper">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-background rounded-3xl p-8 border">
            <div className="flex items-start gap-6">
              <div className="w-16 h-16 bg-primary/10 text-primary rounded-full flex items-center justify-center text-xl font-bold">
                {post.author.charAt(0)}
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-xl mb-2">{post.author}</h3>
                <p className="text-muted-foreground mb-4">
                  {post.author === 'Emirhan Akdeniz' 
                    ? 'EraEnvision kurucusu ve CEO\'su. 10+ yıl teknoloji ve iş geliştirme deneyimi ile girişimcilere rehberlik ediyor.'
                    : 'EraEnvision AI takımı, en güncel yapay zeka trendlerini ve iş dünyasındaki uygulamalarını analiz ediyor.'
                  }
                </p>
                <div className="flex gap-3">
                  <Button size="sm" variant="outline">
                    Diğer Yazılar
                  </Button>
                  <Button size="sm" variant="ghost">
                    İletişime Geç
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      <section className="py-16 bg-background">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-heading font-bold text-2xl mb-8">
            İlginizi Çekebilecek Diğer Makaleler
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="border border-border rounded-2xl p-6 hover:shadow-lg transition-all hover-lift">
              <Badge variant="outline" className="mb-3">
                Startup
              </Badge>
              <h3 className="font-semibold text-lg mb-3">
                <Link href="/blog/startup-mvp-gelistirme-hizli-etkili-yontemler" className="hover:text-primary">
                  Startup MVP Geliştirme: Hızlı ve Etkili Yöntemler
                </Link>
              </h3>
              <p className="text-muted-foreground text-sm mb-4">
                Minimum Viable Product (MVP) geliştirme sürecini hızlandıran modern yaklaşımlar...
              </p>
              <div className="flex items-center justify-between text-sm text-muted-foreground">
                <span>7 dk okuma</span>
                <span>3 Ocak 2025</span>
              </div>
            </div>

            <div className="border border-border rounded-2xl p-6 hover:shadow-lg transition-all hover-lift">
              <Badge variant="outline" className="mb-3">
                Pazarlama
              </Badge>
              <h3 className="font-semibold text-lg mb-3">
                <Link href="/blog/pazarlama-otomasyonu-roi-3-katina-cikaran-taktikler" className="hover:text-primary">
                  Pazarlama Otomasyonu: ROI'yi 3 Katına Çıkaran Taktikler
                </Link>
              </h3>
              <p className="text-muted-foreground text-sm mb-4">
                Pazarlama süreçlerinizi otomatikleştirerek ROI'nizi nasıl maksimize edeceğinizi...
              </p>
              <div className="flex items-center justify-between text-sm text-muted-foreground">
                <span>9 dk okuma</span>
                <span>1 Ocak 2025</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      </div>
    </>
  );
}