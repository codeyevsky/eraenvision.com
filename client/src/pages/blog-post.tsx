import { useParams } from 'wouter';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { ArrowLeft, Calendar, Clock, User, Share2, BookOpen, Tag } from 'lucide-react';
import { Link } from 'wouter';
import { useLanguage } from '@/hooks/use-language';
import { translations, TranslationKey } from '@/lib/translations';

interface BlogPost {
  id: string;
  title: TranslationKey;
  excerpt: TranslationKey;
  content: TranslationKey;
  author: string;
  date: string;
  readTime: number;
  category: TranslationKey;
  tags: TranslationKey[];
  slug: string;
}

export default function BlogPostPage() {
  const params = useParams();
  const slug = params.slug;
  const { t } = useLanguage();

  const blogPosts: Record<string, BlogPost> = {
    'ai-ile-girisimcilik-2025-stratejileri': {
      id: '1',
      title: 'blogPost1Title',
      excerpt: 'blogPost1Excerpt',
      content: 'blogPost1Content',
      author: 'Emirhan Demir',
      date: '2025-01-10',
      readTime: 8,
      category: 'categoryAiEntrepreneurship',
      tags: ['ai', 'entrepreneurship', 'strategy', 'innovation'],
      slug: 'ai-ile-girisimcilik-2025-stratejileri'
    },
    'e-ticaret-buyutme-veri-odakli-yaklasimlar': {
      id: '2',
      title: 'blogPost2Title',
      excerpt: 'blogPost2Excerpt',
      content: 'blogPost2Content',
      author: 'Emirhan Demir',
      date: '2025-01-08',
      readTime: 6,
      category: 'categoryEcommerce',
      tags: ['ecommerce', 'data_analysis', 'growth', 'metrics'],
      slug: 'e-ticaret-buyutme-veri-odakli-yaklasimlar'
    },
    'yatirim-kararlarinda-ai-gelecegin-fon-yoneticileri': {
      id: '3',
      title: 'blogPost3Title',
      excerpt: 'blogPost3Excerpt',
      content: 'blogPost3Content',
      author: 'Emirhan Demir',
      date: '2025-01-05',
      readTime: 10,
      category: 'categoryInvestmentFinance',
      tags: ['ai', 'investment', 'fintech', 'analysis'],
      slug: 'yatirim-kararlarinda-ai-gelecegin-fon-yoneticileri'
    },
    'startup-mvp-gelistirme-hizli-etkili-yontemler': {
      id: '4',
      title: 'blogPost4Title',
      excerpt: 'blogPost4Excerpt',
      content: 'blogPost4Content',
      author: 'Emirhan Demir',
      date: '2025-01-03',
      readTime: 7,
      category: 'categoryStartup',
      tags: ['mvp','product_development', 'agile'],
      slug: 'startup-mvp-gelistirme-hizli-etkili-yontemler'
    },
    'pazarlama-otomasyonu-roi-3-katina-cikaran-taktikler': {
      id: '5',
      title: 'blogPost5Title',
      excerpt: 'blogPost5Excerpt',
      content: 'blogPost5Content',
      author: 'EraEnvision AI Team',
      date: '2025-01-01',
      readTime: 9,
      category: 'categoryMarketing',
      tags: ['marketing', 'automation', 'roi', 'tactics'],
      slug: 'pazarlama-otomasyonu-roi-3-katina-cikaran-taktikler'
    }
  };

  const post = blogPosts[slug || ''];
  const langCode = t('langCode'); // Dil kodunu t fonksiyonu ile alalım

  if (!post) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">{t('articleNotFound')}</h1>
          <p className="text-muted-foreground mb-6">{t('articleNotFoundDesc')}</p>
          <Link href="/blog">
            <Button>
              <ArrowLeft className="mr-2 h-4 w-4" />
              {t('backToBlog')}
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <title>{t(post.title)} | EraEnvision Blog</title>
      <meta name="description" content={t(post.excerpt)} />
      <meta property="og:title" content={`${t(post.title)} | EraEnvision Blog`} />
      <meta property="og:description" content={t(post.excerpt)} />
      <meta property="og:type" content="article" />
      <meta name="keywords" content={post.tags.map(tag => t(tag)).join(', ')} />
      
      <div className="min-h-screen bg-white">
        {/* Header */}
        <section className="pt-24 pb-8 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <Link href="/blog">
              <Button variant="ghost" className="mb-6 hover-lift">
                <ArrowLeft className="mr-2 h-4 w-4" />
                {t('backToBlog')}
              </Button>
            </Link>

            <Badge className="mb-4 bg-[#E1182E] text-white">{t(post.category)}</Badge>
            
            <h1 className="font-heading font-bold text-2xl sm:text-3xl lg:text-5xl mb-6 leading-tight">
              {t(post.title)}
            </h1>
            
            <p className="text-lg sm:text-xl text-gray-600 mb-8 leading-relaxed">
              {t(post.excerpt)}
            </p>

          <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground mb-8">
            <div className="flex items-center gap-2">
              <User className="h-4 w-4" />
              {post.author}
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              {new Date(post.date).toLocaleDateString(langCode === 'tr' ? 'tr-TR' : 'en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              {post.readTime} {t('minRead')}
            </div>
            <div className="flex items-center gap-2">
              <BookOpen className="h-4 w-4" />
              {t('article')}
            </div>
          </div>

          <div className="flex items-center gap-4">
            <Button size="sm" variant="outline" className="hover-lift">
              <Share2 className="mr-2 h-4 w-4" />
              {t('share')}
            </Button>
            <div className="flex items-center gap-2">
              {post.tags.map((tag) => (
                <Badge key={tag} variant="secondary" className="text-xs">
                  <Tag className="mr-1 h-3 w-3" />
                  {t(tag)}
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
              dangerouslySetInnerHTML={{ __html: t(post.content) }}
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
                  {post.author === 'Emirhan Demir' 
                    ? t('authorProfile')
                    : t('aiTeamProfile')
                  }
                </p>
                <div className="flex gap-3">
                  <Button size="sm" variant="outline">
                    {t('otherArticles')}
                  </Button>
                  <Button size="sm" variant="ghost">
                    {t('contactUs')}
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
            {t('relatedArticles')}
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {Object.values(blogPosts).filter(p => p.slug !== post.slug).slice(0, 2).map(relatedPost => (
              <div key={relatedPost.id} className="border border-border rounded-2xl p-6 hover:shadow-lg transition-all hover-lift">
                <Badge variant="outline" className="mb-3">
                  {t(relatedPost.category)}
                </Badge>
                <h3 className="font-semibold text-lg mb-3">
                  <Link href={`/blog/${relatedPost.slug}`} className="hover:text-primary">
                    {t(relatedPost.title)}
                  </Link>
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {t(relatedPost.excerpt)}
                </p>
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <span>{relatedPost.readTime} {t('minRead')}</span>
                  <span>{new Date(relatedPost.date).toLocaleDateString(langCode === 'tr' ? 'tr-TR' : 'en-US')}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      </div>
    </>
  );
}