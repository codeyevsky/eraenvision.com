import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { useLanguage } from '@/hooks/use-language';
import { Search, Calendar, ArrowRight, Clock, User, Tag } from 'lucide-react';
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
  featured?: boolean;
}

export default function BlogPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const { t } = useLanguage();

  const blogPosts: BlogPost[] = [
    {
      id: '1',
      title: 'AI ile Girişimcilik: 2025\'te Başarılı Olmak İçin 10 Strateji',
      excerpt: 'Yapay zekanın girişimcilik dünyasını nasıl dönüştürdüğünü ve bu değişimde öne geçmek için neler yapmanız gerektiğini keşfedin.',
      content: '',
      author: 'Emirhan Akdeniz',
      date: '2025-01-10',
      readTime: 8,
      category: 'AI & Girişimcilik',
      tags: ['AI', 'Girişimcilik', 'Strateji', 'İnovasyon'],
      slug: 'ai-ile-girisimcilik-2025-stratejileri',
      featured: true
    },
    {
      id: '2',
      title: 'E-ticaret Büyütme: Veri Odaklı Yaklaşımlar',
      excerpt: 'E-ticaret işletmenizi büyütürken veriyi nasıl kullanacağınızı, hangi metrikleri takip edeceğinizi öğrenin.',
      content: '',
      author: 'EraEnvision AI',
      date: '2025-01-08',
      readTime: 6,
      category: 'E-ticaret',
      tags: ['E-ticaret', 'Veri Analizi', 'Büyüme', 'Metrikler'],
      slug: 'e-ticaret-buyutme-veri-odakli-yaklasimlar'
    },
    {
      id: '3',
      title: 'Yatırım Kararlarında AI: Geleceğin Fon Yöneticileri',
      excerpt: 'Yapay zekanın yatırım dünyasındaki rolü ve akıllı yatırım kararları almak için AI araçlarını nasıl kullanabileceğiniz.',
      content: '',
      author: 'Emirhan Akdeniz',
      date: '2025-01-05',
      readTime: 10,
      category: 'Yatırım & Finans',
      tags: ['AI', 'Yatırım', 'Fintech', 'Analiz'],
      slug: 'yatirim-kararlarinda-ai-gelecegin-fon-yoneticileri'
    },
    {
      id: '4',
      title: 'Startup MVP Geliştirme: Hızlı ve Etkili Yöntemler',
      excerpt: 'Minimum Viable Product (MVP) geliştirme sürecini hızlandıran modern yaklaşımlar ve araçlar.',
      content: '',
      author: 'EraEnvision AI',
      date: '2025-01-03',
      readTime: 7,
      category: 'Startup',
      tags: ['MVP', 'Startup', 'Ürün Geliştirme', 'Agile'],
      slug: 'startup-mvp-gelistirme-hizli-etkili-yontemler'
    },
    {
      id: '5',
      title: 'Pazarlama Otomasyonu: ROI\'yi 3 Katına Çıkaran Taktikler',
      excerpt: 'Pazarlama süreçlerinizi otomatikleştirerek ROI\'nizi nasıl maksimize edeceğinizi öğrenin.',
      content: '',
      author: 'Emirhan Akdeniz',
      date: '2025-01-01',
      readTime: 9,
      category: 'Pazarlama',
      tags: ['Otomasyon', 'ROI', 'Pazarlama', 'CRM'],
      slug: 'pazarlama-otomasyonu-roi-3-katina-cikaran-taktikler'
    },
    {
      id: '6',
      title: 'SaaS Ölçeklendirme: Ayda %20 Büyüme İçin Kanıtlanmış Formül',
      excerpt: 'SaaS işletmenizi sürdürülebilir şekilde büyütmek için uygulayabileceğiniz kanıtlanmış yöntemler.',
      content: '',
      author: 'EraEnvision AI',
      date: '2024-12-28',
      readTime: 12,
      category: 'SaaS',
      tags: ['SaaS', 'Büyüme', 'Ölçeklendirme', 'Metrikler'],
      slug: 'saas-olceklendirme-ayda-20-buyume-formulu'
    }
  ];

  const categories = [
    'all',
    'AI & Girişimcilik',
    'E-ticaret',
    'Yatırım & Finans',
    'Startup',
    'Pazarlama',
    'SaaS'
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured);

  return (
    <>
      <title>Blog - EraEnvision | AI ve İş Büyütme İçerikleri</title>
      <meta name="description" content="EraEnvision blog sayfası. AI, girişimcilik, iş büyütme ve dijital dönüşüm konularında uzman içerikler ve stratejiler." />
      <meta property="og:title" content="EraEnvision Blog | AI ve İş Büyütme İçerikleri" />
      <meta property="og:description" content="AI, girişimcilik, iş büyütme ve dijital dönüşüm konularında uzman içerikler." />
      <meta property="og:type" content="website" />
      <meta name="keywords" content="blog, AI blog, iş büyütme, girişimcilik, startup rehberi, dijital pazarlama, EraEnvision" />
      
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="pt-24 pb-16 bg-gradient-to-br from-gray-50 to-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
            <h1 className="font-heading font-bold text-3xl sm:text-4xl lg:text-6xl mb-6 tracking-wide">
              AI ve İş Dünyası Blog
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 mb-12 leading-relaxed px-4 sm:px-0">
              Yapay zeka, girişimcilik ve büyüme stratejileri hakkında güncel içerikler
            </p>
          </div>
        </section>

      {/* Search and Filters */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col lg:flex-row gap-6 items-stretch lg:items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md w-full">
              <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Blog yazılarında ara..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 w-full"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2 justify-center lg:justify-end">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  className="rounded-full text-xs sm:text-sm px-3 sm:px-4"
                >
                  {category === 'all' ? 'Tümü' : category}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && selectedCategory === 'all' && !searchTerm && (
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="bg-gradient-to-r from-[#E1182E]/5 to-[#E1182E]/10 rounded-3xl p-6 sm:p-8 lg:p-12">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div>
                  <Badge className="mb-4 bg-[#E1182E] text-white">
                    Öne Çıkan Makale
                  </Badge>
                  <h2 className="font-heading font-bold text-2xl sm:text-3xl lg:text-4xl mb-4 leading-tight">
                    {featuredPost.title}
                  </h2>
                  <p className="text-gray-600 text-base sm:text-lg mb-6 leading-relaxed">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-sm text-gray-500 mb-6">
                    <div className="flex items-center gap-2">
                      <User className="h-4 w-4" />
                      <span>{featuredPost.author}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      <span>{new Date(featuredPost.date).toLocaleDateString('tr-TR')}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4" />
                      <span>{featuredPost.readTime} dk okuma</span>
                    </div>
                  </div>
                  <Link href={`/blog/${featuredPost.slug}`}>
                    <Button size="lg" className="hover-lift bg-[#E1182E] hover:bg-[#C51628] text-white">
                      Makaleyi Oku <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
                <div className="relative hidden lg:block">
                  <div className="aspect-[4/3] bg-gradient-to-br from-[#E1182E]/20 to-[#E1182E]/5 rounded-2xl flex items-center justify-center">
                    <div className="w-24 h-24 bg-[#E1182E]/20 rounded-full flex items-center justify-center">
                      <Tag className="h-12 w-12 text-[#E1182E]" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Blog Posts Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {filteredPosts.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg">
                Aradığınız kriterlere uygun makale bulunamadı.
              </p>
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {regularPosts.map((post) => (
                <article key={post.id} className="bg-white border border-gray-200 rounded-3xl p-6 hover:shadow-lg transition-all hover-lift">
                  <div className="mb-4">
                    <Badge variant="outline" className="mb-3">
                      {post.category}
                    </Badge>
                    <h3 className="font-heading font-semibold text-xl mb-3 leading-tight">
                      <Link href={`/blog/${post.slug}`} className="hover:text-primary transition-colors">
                        {post.title}
                      </Link>
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      {post.excerpt}
                    </p>
                  </div>

                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-2">
                      <User className="h-4 w-4" />
                      {post.author}
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4" />
                      {post.readTime} dk
                    </div>
                  </div>

                  <div className="flex items-center gap-2 mb-4">
                    {post.tags.slice(0, 3).map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">
                      {new Date(post.date).toLocaleDateString('tr-TR')}
                    </span>
                    <Link href={`/blog/${post.slug}`}>
                      <Button variant="ghost" size="sm" className="p-2">
                        <ArrowRight className="h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Subscription */}
      <section className="py-16 bg-soft-paper">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-heading font-bold text-3xl mb-4">
            Yeni Makaleleri Kaçırmayın
          </h2>
          <p className="text-muted-foreground text-lg mb-8">
            AI, girişimcilik ve büyüme stratejileri hakkında en güncel içerikleri e-posta kutunuzda alın.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input 
              placeholder="E-posta adresiniz" 
              className="flex-1"
            />
            <Button className="hover-lift">
              Abone Ol
            </Button>
          </div>
          <p className="text-sm text-muted-foreground mt-4">
            İstediğiniz zaman aboneliğinizi iptal edebilirsiniz. Spam yapmayız.
          </p>
        </div>
      </section>
      </div>
    </>
  );
}