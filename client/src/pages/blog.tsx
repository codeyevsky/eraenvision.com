import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { useLanguage } from '@/hooks/use-language';
import { Search, Calendar, ArrowRight, Clock, User, Tag } from 'lucide-react';
import { Link } from 'wouter';
import { TranslationKey } from '@/lib/translations';

interface BlogPost {
  id: string;
  title: TranslationKey;
  excerpt: TranslationKey;
  content: string;
  author: string;
  date: string;
  readTime: number;
  category: TranslationKey;
  tags: TranslationKey[];
  slug: string;
  featured?: boolean;
}

export default function BlogPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('allCategories');
  const { t } = useLanguage();

  const blogPosts: BlogPost[] = [
    {
      id: '1',
      title: 'blogPost1Title',
      excerpt: 'blogPost1Excerpt',
      content: '',
      author: 'Emirhan Demir',
      date: '2025-01-10',
      readTime: 8,
      category: 'categoryAiEntrepreneurship',
      tags: ['ai', 'entrepreneurship', 'strategy', 'innovation'],
      slug: 'ai-ile-girisimcilik-2025-stratejileri',
      featured: true
    },
    {
      id: '2',
      title: 'blogPost2Title',
      excerpt: 'blogPost2Excerpt',
      content: '',
      author: 'Emirhan Demir',
      date: '2025-01-08',
      readTime: 6,
      category: 'categoryEcommerce',
      tags: ['ecommerce', 'data_analysis', 'growth', 'metrics'],
      slug: 'e-ticaret-buyutme-veri-odakli-yaklasimlar'
    },
    {
      id: '3',
      title: 'blogPost3Title',
      excerpt: 'blogPost3Excerpt',
      content: '',
      author: 'Emirhan Demir',
      date: '2025-01-05',
      readTime: 10,
      category: 'categoryInvestmentFinance',
      tags: ['ai', 'investment', 'fintech', 'analysis'],
      slug: 'yatirim-kararlarinda-ai-gelecegin-fon-yoneticileri'
    },
    {
      id: '4',
      title: 'blogPost4Title',
      excerpt: 'blogPost4Excerpt',
      content: '',
      author: 'Emirhan Demir',
      date: '2025-01-03',
      readTime: 7,
      category: 'categoryStartup',
      tags: ['mvp', 'product_development', 'agile'],
      slug: 'startup-mvp-gelistirme-hizli-etkili-yontemler'
    }
  ];

  const categories: TranslationKey[] = [
    'allCategories',
    'categoryAiEntrepreneurship',
    'categoryEcommerce',
    'categoryInvestmentFinance',
    'categoryStartup',
    'categoryMarketing',
    'categorySaaS'
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = t(post.title).toLowerCase().includes(searchTerm.toLowerCase()) ||
                          t(post.excerpt).toLowerCase().includes(searchTerm.toLowerCase()) ||
                          post.tags.some(tag => t(tag).toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesCategory = selectedCategory === 'allCategories' || post.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured);

  return (
    <>
      <title>{t('blogPageTitle')}</title>
      <meta name="description" content={t('blogPageMetaDesc')} />
      <meta property="og:title" content={t('blogPageOGTitle')} />
      <meta property="og:description" content={t('blogPageOGDesc')} />
      <meta property="og:type" content="website" />
      <meta name="keywords" content={t('blogPageKeywords')} />
      
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="pt-24 pb-16 bg-gradient-to-br from-gray-50 to-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
            <h1 className="font-heading font-bold text-3xl sm:text-4xl lg:text-6xl mb-6 tracking-wide">
              {t('blogHeroTitle')}
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 mb-12 leading-relaxed px-4 sm:px-0">
              {t('blogHeroSubtitle')}
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
                placeholder={t('searchBlogPlaceholder')}
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
                  {t(category)}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && selectedCategory === 'allCategories' && !searchTerm && (
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="bg-gradient-to-r from-[#E1182E]/5 to-[#E1182E]/10 rounded-3xl p-6 sm:p-8 lg:p-12">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div>
                  <Badge className="mb-4 bg-[#E1182E] text-white">
                    {t('featuredArticle')}
                  </Badge>
                  <h2 className="font-heading font-bold text-2xl sm:text-3xl lg:text-4xl mb-4 leading-tight">
                    {t(featuredPost.title)}
                  </h2>
                  <p className="text-gray-600 text-base sm:text-lg mb-6 leading-relaxed">
                    {t(featuredPost.excerpt)}
                  </p>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-sm text-gray-500 mb-6">
                    <div className="flex items-center gap-2">
                      <User className="h-4 w-4" />
                      <span>{featuredPost.author}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      <span>{new Date(featuredPost.date).toLocaleDateString(t('langCode') === 'tr' ? 'tr-TR' : 'en-US')}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4" />
                      <span>{featuredPost.readTime} {t('minRead')}</span>
                    </div>
                  </div>
                  <Link href={`/blog/${featuredPost.slug}`}>
                    <Button size="lg" className="hover-lift bg-[#E1182E] hover:bg-[#C51628] text-white">
                      {t('readArticle')} <ArrowRight className="ml-2 h-4 w-4" />
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
                {t('noPostsFound')}
              </p>
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {regularPosts.map((post) => (
                <article key={post.id} className="bg-white border border-gray-200 rounded-3xl p-6 hover:shadow-lg transition-all hover-lift">
                  <div className="mb-4">
                    <Badge variant="outline" className="mb-3">
                      {t(post.category)}
                    </Badge>
                    <h3 className="font-heading font-semibold text-xl mb-3 leading-tight">
                      <Link href={`/blog/${post.slug}`} className="hover:text-primary transition-colors">
                        {t(post.title)}
                      </Link>
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      {t(post.excerpt)}
                    </p>
                  </div>

                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-2">
                      <User className="h-4 w-4" />
                      {post.author}
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4" />
                      {post.readTime} {t('minRead')}
                    </div>
                  </div>

                  <div className="flex items-center gap-2 mb-4">
                    {post.tags.slice(0, 3).map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {t(tag)}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">
                      {new Date(post.date).toLocaleDateString(t('langCode') === 'tr' ? 'tr-TR' : 'en-US')}
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
            {t('newsletterTitle')}
          </h2>
          <p className="text-muted-foreground text-lg mb-8">
            {t('newsletterSubtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input 
              placeholder={t('emailPlaceholder')} 
              className="flex-1"
            />
            <Button className="hover-lift">
              {t('subscribe')}
            </Button>
          </div>
          <p className="text-sm text-muted-foreground mt-4">
            {t('cancelAnytime')}
          </p>
        </div>
      </section>
      </div>
    </>
  );
}